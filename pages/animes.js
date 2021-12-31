import { useState, useRef } from "react";
import { useOnClickOutside } from "../components/hooks";
import MediaQuery from "react-responsive";
import Image from "next/image";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Socials from "../components/Socials";
import Menu from "../components/Menu";
import Burger from "../components/Burger";
import Episodes from "../components/Episodes";
import Hero from "../components/Hero";
import Navbar from "../components/Nav";
import Sidebar from "../components/Sidebar";

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

let sortedCat = "";

//loops through api and returns matchinbg category
function checkCategory(arr) {
  arr.forEach((element) => {
    // console.log(element);
    if (element.categories === "animes") {
      sortedCat = element;
    }
  });
}

export default function Animes({ cats, logo }) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const arr = cats.map((set) => set.fields);
  checkCategory(arr);
  console.log(sortedCat);
  return (
    < div className="content-body">
      <Hero
        src={"https:" + sortedCat.heroimg.fields.file.url}
        width={sortedCat.heroimg.fields.file.details.image.width}
        height={sortedCat.heroimg.fields.file.details.image.height}
      />
      <Navbar />
      <MediaQuery maxWidth={1023}>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        {sortedCat.episodes.map((epis) => {
          return (
            <Episodes
              key={epis.fields.slug}
              episodeTitle={epis.fields.episodeTitle}
              rating={epis.fields.rating}
              uploadDate={epis.fields.upload}
              author={epis.fields.author}
              description={documentToReactComponents(epis.fields.description)}
            
            />
          );
        })}
      </MediaQuery>
      <MediaQuery minWidth={1024}>
      <Socials />
        <div className="content-container">
          <div className="sidebar-container">
            <div className="sidebar">
              <Sidebar episodeData={sortedCat} />
            </div>
          </div>
          <div className="episode-container">
            {sortedCat.episodes.map((epis) => {
              return (
                <Episodes
                  key={epis.fields.slug}
                  episodeTitle={epis.fields.episodeTitle}
                  rating={epis.fields.rating}
                  uploadDate={epis.fields.upload}
                  author={epis.fields.author}
              description={documentToReactComponents(epis.fields.description)}
            />
              );
            })}
          </div>
        </div>
      </MediaQuery>
      <style jsx>
        {`
          .content-container {
            display: grid;
            grid-template-columns: 25% 1fr;
            height: 100vh
          }

          .episode-container {
            display: flex;
            flex-direction: column;
          }
          .sidebar-container {
            display: flex;
            flex-direction: column;
          }
          .sidebar {
            height: 100%;
          }

          @media (min-width: 1024px) {
            .content-body {
              margin: 0 10rem 0 10rem;
            }
          }
        `}
      </style>
    </div>
  );
}
