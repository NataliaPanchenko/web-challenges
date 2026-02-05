import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

async function fetcher(URL) {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Unser Server Error!!!!!!!!!!");
  }
  const data = await response.json();
  return data;
}

// const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function ISSTracker() {
  const { data, isLoading, error, isValidating, mutate } = useSWR(
    `${URL}`,
    fetcher,
    {
      refreshInterval: 5000,
    },
  );
  console.log("data", data);
  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <main>
      {isValidating && <p>Validating...</p>}
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
