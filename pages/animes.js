import { useState, useRef } from "react";
import { useOnClickOutside } from "../components/hooks";
import Image from "next/image";
import { createClient } from "contentful";
import Menu from "../components/Menu";
import Burger from "../components/Burger";
import Episodes from "../components/Episodes";
import Hero from "../components/Hero";
import Navbar from "../components/Nav";

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

let sortedCat = '';

//loops through api and returns matchinbg category
function checkCategory(arr) {
  arr.forEach(element => {
    // console.log(element);
    if (element.categories === 'animes') {
       sortedCat = element; 
    }
  })
  
}




export default function Home({ cats, logo }) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  console.log(cats);
  console.log(cats[0].fields.episodes.map((epis) => epis.fields));
  const arr = cats.map((set) => set.fields)
  checkCategory(arr)
  console.log(sortedCat);
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>

      <Hero
        src={"https:" + sortedCat.heroimg.fields.file.url}
        width={sortedCat.heroimg.fields.file.details.image.width}
        height={sortedCat.heroimg.fields.file.details.image.height}
      />
      <Navbar />
      {sortedCat.episodes.map((epis) => {
        return (
          <Episodes
            key={epis.fields.slug}
            episodeTitle={epis.fields.episodeTitle}
            rating={epis.fields.rating}
            uploadDate={epis.fields.upload}
            src={epis.fields.thumbnail?.fields.file.url}
            width={epis.fields.thumbnail?.fields.file.details.image.width}
            height={epis.fields.thumbnail?.fields.file.details.image.height}
          />
        );
      })}
    </div>
  );
}
