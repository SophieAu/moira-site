import { defineConfig } from "tinacms";
import { artworkFields } from "./templates";
import { contactFields } from "./templates";
import { cvFields } from "./templates";
import { newsFields } from "./templates";
import { translationFields } from "./templates";
import { workFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "d2bb6308-60a3-4d9e-b2bc-8a3f3cb07d4e", // Get this from tina.io
  token: "6e4a49ce8d351653685eaa06ad553e1147af7587", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "data",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "data",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Works",
        name: "works",
        path: "data/content/works",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...workFields(),
        ],
      },
      {
        format: "md",
        label: "Artwork",
        name: "artwork",
        path: "data/content/artwork",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...artworkFields(),
        ],
      },
      {
        format: "md",
        label: "CV",
        name: "cv",
        path: "data/content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "cv",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Contact",
        name: "contact",
        path: "data/content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "contact",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
      {
        format: "md",
        label: "News",
        name: "news",
        path: "data/content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "news",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
      {
        format: "md",
        label: "Translation",
        name: "translation",
        path: "data/content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "translation",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
    ],
  },
});
