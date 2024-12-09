import { type SchemaTypeDefinition } from 'sanity'
import { blogs } from '../schema/blog'
import { categories } from '../schema/category'
import { authors } from '@/sanity/schema/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogs,categories,authors],
}
