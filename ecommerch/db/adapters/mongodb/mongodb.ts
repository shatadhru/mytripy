import * as z from "zod";
import { AnyBulkWriteOperation, MongoClient } from "mongodb";

import ecomconfig from "@/ecom.config";

const MongoAdapterSchema = z.object({
  collectionName: z.string(),
});

type MongoAdapterProps = z.infer<typeof MongoAdapterSchema>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri =
  ecomconfig.database.uri ||
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017";

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

client = new MongoClient(uri, options);
clientPromise = client.connect();

const db = async () => {
  try {
    const client = await clientPromise;

    return client.db(ecomconfig.database.databaseName);
  } catch (error) {
    console.log("Failed to connect to MongoDB:", error);
    throw error;
  }
};

const MongoAdapter = async ({ collectionName }: MongoAdapterProps) => {
  const { collectionName: collection } = MongoAdapterSchema.parse({
    collectionName,
  });

  const database = await db();

  const db_collection = database.collection(collection);

  return {
    create: async (data: any) => {
      return await db_collection.insertOne(data);
    },

    createMany: async (data: any[]) => {
      return await db_collection.insertMany(data);
    },

    findOne: async (filter: any) => {
      return await db_collection.findOne(filter);
    },

    findMany: async (filter: any = {}) => {
      return await db_collection.find(filter).toArray();
    },

    findById: async (id: any) => {
      return await db_collection.findOne({ _id: id });
    },

    update: async (filter: any, data: any) => {
      return await db_collection.updateOne(filter, {
        $set: data,
      });
    },

    updateById: async (id: any, data: any) => {
      return await db_collection.updateOne(
        { _id: id },
        {
          $set: data,
        },
      );
    },

    delete: async (filter: any) => {
      return await db_collection.deleteOne(filter);
    },

    deleteMany: async (filter: any) => {
      return await db_collection.deleteMany(filter);
    },

    deleteById: async (id: any) => {
      return await db_collection.deleteOne({ _id: id });
    },

    count: async (filter: any = {}) => {
      return await db_collection.countDocuments(filter);
    },

    exists: async (filter: any) => {
      return (await db_collection.countDocuments(filter, { limit: 1 })) > 0;
    },

    upsert: async (filter: any, data: any) => {
      return await db_collection.updateOne(
        filter,
        {
          $set: data,
        },
        {
          upsert: true,
        },
      );
    },
  };
};

export default MongoAdapter;
