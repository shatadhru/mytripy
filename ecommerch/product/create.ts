"use server"
import * as z from "zod";
import { Database } from "../db";

const ProductSchema = z.object({
  name: z.string(),
  price: z
    .object({
      regular: z.number(),
      sale: z.number().optional(),
    })
    .refine(
      ({ regular, sale }) => sale === undefined || sale <= regular,
      {
        message: "Sale price cannot be greater than regular price.",
        path: ["sale"],
      }
    ),
  description: z.string(),
  categories: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  status: z.enum(["draft", "published", "archived"]),
  visibility: z.enum(["public", "private", "hidden"]),
  slug: z.string(),
});

export type ProductInput = z.infer<typeof ProductSchema>;

export const createProduct = async (input: ProductInput) => {
  const { data } = ProductSchema.safeParse(input);

  if (!data) {
    throw new Error("Invalid product data.");
  }

  const db = await Database({
    collectionName: "products",
  });

  return db.create(data);
};