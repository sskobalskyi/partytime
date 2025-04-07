import { ObjectId } from 'mongodb';
import { getActivityCollection } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const body = await req.json();
    const db = await getActivityCollection();

    await db.updateOne({ _id: new ObjectId(params.id) }, { $set: body });

    return NextResponse.json({ updated: true });
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    const db = await getActivityCollection();

    await db.deleteOne({ _id: new ObjectId(params.id) });

    return NextResponse.json({ deleted: true });
}
