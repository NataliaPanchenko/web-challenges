import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import Head from "next/head";
import VolumeDetail from "@/components/VolumeDetail";

export default function Volumes() {
  const router = useRouter();
  const { slug } = router.query;

  const foundVolume = volumes.find((volume) => volume.slug === slug);

  if (!foundVolume) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{foundVolume.title}</title>
      </Head>
      <VolumeDetail foundVolume={foundVolume} />
    </>
  );
}
