import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import Head from "next/head";
import { useRouter } from "next/router";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Volumes() {
  const router = useRouter();
  function handleRandomVolume() {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }
  return (
    <>
      <Head>
        <title>List of Volumes</title>
      </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <button onClick={handleRandomVolume}>🎲 Random Volume</button>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.id}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
