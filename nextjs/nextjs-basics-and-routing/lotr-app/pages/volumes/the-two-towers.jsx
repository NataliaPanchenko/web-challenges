import Link from "next/link";
import { volumes } from "resources/lib/data.js";

export default function FellowshipPage() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <>
      <Link href="/">All volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}. {book.title}
          </li>
        ))}
      </ul>
    </>
  );
}
