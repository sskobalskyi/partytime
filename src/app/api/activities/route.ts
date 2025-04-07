import { ActivitySchema } from '@/schemas/activity';
import { getActivityCollection } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    const db = await getActivityCollection();
    const templates = await db.find({}).toArray();
    return NextResponse.json(templates);
}

export async function POST(req: Request) {
    const body = await req.json();
    const parsed = ActivitySchema.safeParse(body);

    if (!parsed.success) {
        return NextResponse.json(
            { error: 'Validation failed', details: parsed.error.flatten() },
            { status: 400 }
        );
    }

    const db = await getActivityCollection();
    const result = await db.insertOne(parsed.data);

    return NextResponse.json({ id: result.insertedId });
}
