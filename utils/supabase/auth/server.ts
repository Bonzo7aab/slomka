import { User } from "@/lib/types";
import { createClient } from "../server";

export function getAuth() {
  const { auth } = createClient();
  return auth;
}

export const getUser = async () => {
  const auth = getAuth();
  const authUser = (await auth.getUser()).data.user;
  if (!authUser) return null;

  // fetch user from database
  const dbUser = {
    email: "coleblender@gmail.com",
    name: "Cole Blender",
  };
  if (!dbUser) return null;

  const user: User = {
    ...authUser,
    ...dbUser,
  };

  return user;
};