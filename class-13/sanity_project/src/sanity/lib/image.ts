import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {client} from "@/sanity/lib/client"

//import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
//const builder = createImageUrlBuilder({ projectId, dataset })
const builder = createImageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}
