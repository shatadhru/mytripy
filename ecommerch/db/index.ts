import config from "@/ecom.config";

import MongoAdapter from "./adapters/mongodb/mongodb";
// import PostgresAdapter from "./adapters";

export async function Database(props: { collectionName: string }) {
  switch (config.database.provider) {
    case "mongodb":
      return MongoAdapter(props);

    // case "postgres":
    //     return PostgresAdapter(props);

    default:
      throw new Error("Unsupported database provider");
  }
}
