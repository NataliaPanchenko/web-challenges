import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const URL = `https://swapi.py4e.com/api/people/${id}`;

  const { data, isLoading, error, isValidating } = useSWR(URL, {
    refreshInterval: 5000,
  });

  if (!id || isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Layout>
      {isValidating && <p>Validating...</p>}
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
