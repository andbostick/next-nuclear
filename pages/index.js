import { createClient } from 'contentful'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACESS_KEY,
  })
  const res = await client.getEntries({content_type: 'category'})
  return {
    props: {
      cats: res.items
    }
  }
}

export default function Home({cats}) {
  console.log(cats)
  console.log(cats[0].fields.episodes.map(epis => ((
    epis.fields
  ))))
  
  return (
    <div>
      {cats?.fields?.episodes?.map(cat => (
        <div>
        {cat.fields.episodeTitle}
        </div>
      ))}
    </div>
  )
}
