import { type SchemaTypeDefinition } from 'sanity'
import {Product} from './product'
import { Category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product,Category],
}
