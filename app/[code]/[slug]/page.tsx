export const runtime = "experimental-edge";

export default async function Page({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}
