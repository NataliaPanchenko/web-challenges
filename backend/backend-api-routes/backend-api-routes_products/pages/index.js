import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";

const fetcher = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <Message>Something went wrong 💔</Message>;
  if (isLoading) return <Message>Loading...</Message>;

  return (
    <Container>
      <Title>Products 🐠</Title>

      <Grid>
        {data.map((product) => (
          <Card key={product.id}>
            <StyledLink href={`/${product.id}`}>
              <Name>{product.name}</Name>
            </StyledLink>
            <Price>€{product.price}</Price>
            <Category>{product.category}</Category>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  padding: 20px;
  border-radius: 14px;
  background: white;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

export const Name = styled.h2`
  margin-bottom: 10px;
`;

export const Element = styled.p`
  font-weight: bold;
  color: #4f46e5;
`;

export const Price = styled(Element)`
  color: #10b981;
  background: #ecfdf5;
`;

export const Category = styled(Element)`
  color: #f59e0b;
  background: #fffbeb;
  font-size: 0.85rem;
  display: inline-block;
`;

export const Message = styled.p`
  text-align: center;
  margin-top: 40px;
`;
