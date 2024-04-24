// pages/api/rfid.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      // Assuming the body of the request contains a field 'rfidTag'
      const rfidTag = req.body.rfidTag;
      // You could do something with the RFID tag here, like storing it or updating state
      console.log('RFID Tag Received:', rfidTag);
      res.status(200).json({ rfidTag });
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  