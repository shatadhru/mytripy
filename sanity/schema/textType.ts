import { defineField, defineType } from "sanity";

const titleType = defineType({
    name: "title01",
    title: "Title",
    type: "document",
    fields: [
        defineField({
            name: "MainTitle",
            title: "Main Title",
            type: "string",
        }),
    ],
});


export default titleType;