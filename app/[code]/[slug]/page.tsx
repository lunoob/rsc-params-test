import { type Metadata } from "next";

export const runtime = "experimental-edge";

type Props = {
  params: { slug: string };
};

type SearchParams = { [key: string]: string | string[] | undefined };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = await fetch("https://reqres.in/api/users/1", {}).then(
    (response) => {
      return response.json() as Promise<{ data: { first_name: string } }>;
    }
  );
  return {
    title: `${data.first_name} - ${params.slug}`,
  };
}

export default async function Page({
  params,
  searchParams = {},
}: {
  searchParams?: SearchParams;
} & Props) {
  return <div>{params.slug}</div>;
}
