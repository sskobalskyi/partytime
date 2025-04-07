import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function getClient(): Promise<MongoClient> {
    if (cachedClient) return cachedClient;

    const client = new MongoClient(uri);
    cachedClient = await client.connect();
    return cachedClient;
}

export async function getDb(): Promise<Db> {
    if (cachedDb) return cachedDb;

    const client = await getClient();
    cachedDb = client.db(dbName);
    return cachedDb;
}

export async function getActivityCollection() {
    const db = await getDb();
    return db.collection('activities');
}

export async function getScheduleCollection() {
    const db = await getDb();
    return db.collection('scheduled_activities');
}
