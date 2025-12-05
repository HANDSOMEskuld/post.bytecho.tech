import { collection, fields } from "@keystatic/core";

export const articlesKs = collection({
  label: "Articles",
  slugField: "title",
  path: "src/content/articles/*/",
  format: { contentField: "content" },
  entryLayout: "form",

  schema: {
    isDraft: fields.checkbox({
      label: "Is this a draft?",
      defaultValue: false,
    }),
    isMainHeadline: fields.checkbox({
      label: "Is this a main headline?",
      defaultValue: false,
    }),
    isSubHeadline: fields.checkbox({
      label: "Is this a sub headline?",
      defaultValue: false,
    }),
    // 修改这里：增加 max 长度
    description: fields.text({
      label: "Description",
      validation: { isRequired: true, length: { max: 320 } },
      multiline: true, // 建议开启多行，方便编辑长描述
    }),

    // 修改这里：增加 max 长度
    title: fields.slug({
      name: { label: "Title", validation: { length: { max: 120 } } },
    }),

    cover: fields.image({
      label: "Cover",
      validation: { isRequired: false },
    }),

    category: fields.relationship({
      label: "Category",
      collection: "categories",
    }),

    publishedTime: fields.datetime({
      label: "Published Time",
      validation: { isRequired: true },
    }),

    authors: fields.array(
      fields.relationship({
        label: "Authors",
        collection: "authors",
      }),
      {
        label: "Authors",
        itemLabel: (props) => props.value ?? "",
        validation: {
          length: { min: 1 },
        },
      }
    ),

    content: fields.mdx({
      label: "Content",
      options: {
        image: {
          directory: "src/content/articles",
          publicPath: "@content/articles/",
        },
      },
    }),
  },
});