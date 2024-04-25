import asyncio
import json
import re

import serial
import websockets

serial_port = 'COM5'
baud_rate = 9600
connected = set()

async def rfid_reader(websocket, path):
    global connected
    connected.add(websocket)
    try:
        with serial.Serial(serial_port, baud_rate) as ser:
            print("Waiting for RFID tag...")
            while True:
                data = ser.readline()
                if data:
                    # Check if data is in bytes, decode if necessary
                    if isinstance(data, bytes):
                        data = data.decode('utf-8', errors='ignore')
                    # Use regex to find the first sequence of alphanumeric characters
                    match = re.search(r'\b[A-F0-9]+\b', data)
                    if match:
                        rfid_tag = match.group(0)
                        print(f"RFID Tag ID: {rfid_tag}")
                        # Send RFID tag to all connected WebSocket clients
                        await asyncio.wait([ws.send(json.dumps({'rfidTag': rfid_tag})) for ws in connected])
                    else:
                        print("RFID Tag ID not found in the data.")
    except Exception as e:
        print(f"Error occurred: {e}")
    finally:
        connected.remove(websocket)

start_server = websockets.serve(rfid_reader, 'localhost', 6789)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
