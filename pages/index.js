import Head from "next/head";
import { HomePage } from "@/src/components/home/home-page";
export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/calendar.png" />
      </Head>
      <HomePage data={data} />
    </>
  );
}

export const getServerSideProps = async () => {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      title: "Hello",
      data: events_categories,
    },
  };
};
