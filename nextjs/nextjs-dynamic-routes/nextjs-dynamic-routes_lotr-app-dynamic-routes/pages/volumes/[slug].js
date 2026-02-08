import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Volume() {
  const router = useRouter();
  const { slug } = router.query;

  if (!router.isReady) return null;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  if (volumeIndex === -1) return null;

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>

      <h1>{title}</h1>
      <p>{description}</p>

      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>

      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />

      {previousVolume && (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      )}

      {nextVolume && (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      )}
    </>
  );
}
