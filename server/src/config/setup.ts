import { MongoClient, Db, Collection } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URI as string;
const dbName = process.env.MONGO_DB_NAME as string;
const collectionName = process.env.MONGO_COLLECTION_NAME as string;

let client: MongoClient | null = null;
let db: Db | null = null;
let collection: Collection | null = null;

async function connectToDatabase(): Promise<any> {
  if (!client) {
    client = await MongoClient.connect(uri, {
      writeConcern: { w: "majority" },
    });
    db = client.db("dans");
    collection = db.collection("Users");
    console.log(
      `Successfully connected to database: ${dbName} and collection: ${collectionName}`
    );
    return Promise.resolve();
  }
}

function getCollection() {
  if (!collection) {
    throw new Error("Collection is not available");
  }
  return collection;
}

function getDb() {
  if (!db) {
    throw new Error("Database connection not established");
  } else {
    console.log("Database connection is estabilished");

    return db;
  }
}

export { connectToDatabase, getCollection, getDb };
