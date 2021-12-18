import Image from "next/image";
import { createClient } from "contentful";
import Episodes from "../components/Episodes";
import Hero from "../components/Hero";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACESS_KEY,
  });
  const res = await client.getEntries({ content_type: "category" });
  return {
    props: {
      cats: res.items,
    },
  };
}

export default function Home({ cats }) {
  console.log(cats);
  console.log(cats[0].fields.episodes.map((epis) => epis.fields));

  return (
    <div>
      <Hero
        src={"https:" + cats[0].fields.heroimg.fields.file.url}
        width={cats[0].fields.heroimg.fields.file.details.image.width}
        height={cats[0].fields.heroimg.fields.file.details.image.height}
      />
      {cats[0].fields.episodes.map((epis) => {
        return (
          <Episodes
            key={epis.fields.slug}
            episodeTitle={epis.fields.episodeTitle}
            rating={epis.fields.rating}
            uploadDate={epis.fields.upload}
            src = {epis.fields.thumbnail?.fields.file.url}
            width={epis.fields.thumbnail?.fields.file.details.image.width}
            height={epis.fields.thumbnail?.fields.file.details.image.height}
          />
        );
      })}
    </div>
  );
}
