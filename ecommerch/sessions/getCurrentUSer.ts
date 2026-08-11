"use server";

import { ObjectId } from "mongodb";
import getSession from "./get";
import { Database } from "../db";

const getCurrentUser = async () => {
  const session = await getSession();
  if (!session) {
    return null;
  }

  const users = await Database({
    collectionName: "users",
  });

  const user = await users.findOne({
    _id: new ObjectId(session.userId),
  });

  if (!user) {
    return null;
  }

  return {
    id: user._id.toString(),
    username: user.username,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    roles: user.roles,
    imageUrl: user.imageUrl,
  };
};

export default getCurrentUser;
