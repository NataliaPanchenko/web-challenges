import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import { useState } from "react";
import ProductForm from "@/components/ProductForm";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, mutate } = useSWR(id ? `/api/products/${id}` : null);

  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  async function handleEditProducts(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }

    if (response.ok) {
      mutate();
      setIsEditMode(false);
    }
    event.target.reset();
  }

  const handleDeleteProduct = async () => {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/");
    }
    if (!response.ok) {
      console.error(response.status);
      return;
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <StyledButton
        type="button"
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        {" "}
        {isEditMode ? (
          <span>Editing mode</span>
        ) : (
          <span role="img" aria-label="a pencil">
            ✏️
          </span>
        )}
        <span> </span>
      </StyledButton>
      <StyledButton type="button" onClick={handleDeleteProduct}>
        {isDeleteMode ? (
          <span>Deleting mode</span>
        ) : (
          <span role="img" aria-label="a pencil">
            ❌
          </span>
        )}
        <span> </span>
      </StyledButton>
      {isEditMode && (
        <ProductForm onSubmit={handleEditProducts} defaultValue={data} />
      )}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;

const StyledButton = styled.button`
  text-decoration: none;
  display: inline-block;
  color: inherit;
  border: none;
  background: var(--color-water-10);
  font-size: larger;
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);

  &:hover {
    cursor: pointer;
  }

  &:visited {
    color: inherit;
  }
`;
