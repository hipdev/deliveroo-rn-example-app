import { ClientConfig, createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const config: ClientConfig = {
  projectId: '2j4chg3c',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
}
const sanityClient = createClient(config)

const builder = imageUrlBuilder({
  projectId: '2j4chg3c',
  dataset: 'production',
})

export const urlFor = (source: string) => builder.image(source)

export default sanityClient
