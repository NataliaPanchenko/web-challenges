import Image from "next/image";
import Link from "next/link";
import { volumes } from "resources/lib/data.js";

export default function FellowshipPage() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");

  const volumeIndex = volumes.findIndex(
    ({ slug }) => slug === "the-two-towers"
  );
  const prevVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  return (
    <>
      <Link href="/volumes">All volumes</Link>
      <br />
      {prevVolume && (
        <Link href={`/volumes/${prevVolume.slug}`}>⬅ {prevVolume.title}</Link>
      )}
      <span> </span>
      {nextVolume && (
        <Link href={`/volumes/${nextVolume.slug}`}>{nextVolume.title} ➡</Link>
      )}
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}. {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={`/images/${volume.slug}.png`}
        width={140}
        height={230}
        alt={`${volume.title} cover`}
      ></Image>
    </>
  );
}
