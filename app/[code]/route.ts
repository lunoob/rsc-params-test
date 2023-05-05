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
  const { data } = await fetch("https://reqres.in/api/users/1", {}).then(
    (response) => {
      return response.json() as Promise<{
        data: { first_name: string; last_name: string; id: number };
      }>;
    }
  );
  return redirect(`/${params.code}/${data.id}`);
}
