import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { code: string };
  }
) {
  return redirect(`/${params.code}/1`);
}
