import useSWR from "swr";
import { useRouter } from "next/router";
import { Message, Card, Name, Price, Element, Category } from "./index.js";
import Link from "next/link.js";
import styled from "styled-components";

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
      <StyledLink href="/"> 🔙back to products</StyledLink>
      <Name>{data.name}</Name>
      <Element>{data.description}</Element>
      <Price>€{data.price}</Price>
      <Category>{data.category}</Category>
    </Card>
  );
}

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: gray;
`;
