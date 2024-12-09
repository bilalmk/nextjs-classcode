import { type SchemaTypeDefinition } from 'sanity'
import { Blogs } from '../model/blogs'
import { Category } from '../model/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Blogs,Category],
}
