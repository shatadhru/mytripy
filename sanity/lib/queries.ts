import { defineQuery } from "next-sanity";

export const titleQuery = defineQuery(`*[_type == "title01"][0]{
  MainTitle
}`);