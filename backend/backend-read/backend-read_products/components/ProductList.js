import useSWR from "swr";
import StyledLink from "@/components/Link";
import styled from "styled-components";

export default function ProductList() {
  const { data, error, isLoading } = useSWR("/api/products");

  if (error) return <h1>Error loading data</h1>;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledHeading>Available Fishes</StyledHeading>
      <StyledList>
        {data.map((product) => (
          <li key={product._id}>
            <StyledLink href={`/${product._id}`}>{product.name}</StyledLink>
            {product.reviews && product.reviews.length > 0 && (
              <ul>
                {product.reviews.map((review) => (
                  <li key={review._id}>
                    {review.title} ({review.rating}/5)
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </StyledList>
    </>
  );
}

const StyledHeading = styled.h2`
  text-align: center;
  color: var(--color-nemo);
`;

const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 1rem;
  justify-items: center;
  padding: 0;
`;
