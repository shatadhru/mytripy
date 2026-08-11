import { defineField, defineType } from "sanity";

export const sliderType = defineType({
  name: "slider",
  title: "Slider",
  type: "document",

  fields: [
    defineField({
      name: "images",
      title: "Slider Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) =>
        Rule.required().min(1),
    }),
  ],

  preview: {
    select: {
      images: "images",
    },
    prepare({ images }) {
      return {
        title: "Homepage Slider",
        subtitle: `${images?.length || 0} images`,
        media: images?.[0],
      };
    },
  },
});