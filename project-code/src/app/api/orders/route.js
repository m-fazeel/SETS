import prisma from '../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const orders = await prisma.orders.findMany();
        return NextResponse.json(orders);
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const data = await request.json();
        const { origin, destination, rfidTag, timeRequired, items, surgeryType, requestorName, additionalComments } = data;

        // Add data validation here

        const order = await prisma.orders.create({
            data: {
                origin,
                destination,
                rfidTag,
                timeRequired,
                items,
                surgeryType,         // Added missing field for surgeryType
                requestorName,       // Added missing field for requestorName
                additionalComments,  // Added missing field for additionalComments
                status: 'pending'    // Default status, assuming you want to set this at creation time
            },
        });

        return NextResponse.json(order);
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}
