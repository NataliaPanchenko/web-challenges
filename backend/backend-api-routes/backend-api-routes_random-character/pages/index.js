import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) return <div>Something went wrong 💔</div>;
  if (isLoading || !data) return <div>Loading...</div>;
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Random Character</h1>
      <p>
        <strong>Name:</strong> {data.firstName} {data.lastName}
      </p>
      <p>
        <strong>Age:</strong> {data.age}
      </p>
      <p>
        <strong>Birthday:</strong> {data.birthday}
      </p>
      <p>
        <strong>Profession:</strong> {data.profession}
      </p>
      <p>
        <strong>Address:</strong> {data.address}
      </p>
      <p>
        <strong>Phone:</strong> {data.phone}
      </p>
      <p>
        <strong>Twitter:</strong> {data.twitter}
      </p>
      <p>
        <strong>Geohash:</strong> {data.geohash}
      </p>
      <p>
        <strong>Animal:</strong> {data.animal}
      </p>
    </div>
  );
}
