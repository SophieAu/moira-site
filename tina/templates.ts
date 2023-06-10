import type { TinaField } from "tinacms";
export function artworkFields() {
  return [
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "string",
      name: "title",
      label: "Title etc.",
    },
  ] as TinaField[];
}
export function contactFields() {
  return [
    {
      type: "string",
      name: "email",
      label: "email",
    },
    {
      type: "object",
      name: "socialMedia",
      label: "Social Media",
      list: true,
      fields: [
        {
          type: "string",
          name: "platformName",
          label: "Platform Name",
        },
        {
          type: "string",
          name: "profileName",
          label: "Profile Name",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
      ],
    },
  ] as TinaField[];
}
export function cvFields() {
  return [] as TinaField[];
}
export function newsFields() {
  return [
    {
      type: "object",
      name: "news",
      label: "News Items",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Link Name",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
      ],
    },
  ] as TinaField[];
}
export function translationFields() {
  return [
    {
      type: "object",
      name: "links",
      label: "Translations",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Link Name",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
      ],
    },
  ] as TinaField[];
}
export function workFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "link",
      label: "External Link",
    },
    {
      type: "string",
      name: "metainfo",
      label: "Metainfo",
    },
    {
      type: "boolean",
      name: "isSubpage",
      label: "Create Subpage",
    },
    {
      type: "string",
      name: "category",
      label: "Category",
      options: ["Fiction", "Poetry", "Theory and Criticism", "Other"],
    },
  ] as TinaField[];
}
