import { type SchemaTypeDefinition } from 'sanity'
import { sliderType as slider } from '../schema/home'
import titleType from '../schema/textType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [slider,titleType],
}
