"use server";

import getCurrentUser from "./getCurrentUSer";
import getSession from "./get";

const validateSession = async () => {
  // Get session
  const session = await getSession();

  if (!session) {
    return null;
  }

  // Get current user
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  // Session is valid
  return {
    session,
    user,
  };
};

export default validateSession;
