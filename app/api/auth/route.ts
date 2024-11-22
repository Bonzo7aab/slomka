import { getUser } from "@/app/admin/actions";

export async function GET(req: Request) {
  const user = await getUser();

  return Response.json(user);
}