import Link from "next/link";
import { introduction, volumes } from "resources/lib/data.js";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
