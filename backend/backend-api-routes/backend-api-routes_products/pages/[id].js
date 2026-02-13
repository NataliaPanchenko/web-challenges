import useSWR from "swr";
import { useRouter } from "next/router";
import { Message, Card, Name, Price } from "./index.js";

const fetcher = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

export default function Details() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (error) return <Message>Something went wrong 💔</Message>;
  if (!id || !data) return <Message>Loading...</Message>;

  return (
    <Card key={data.id}>
      <Name>{data.name}</Name>
      <Price>€{data.price}</Price>
    </Card>
  );
}
