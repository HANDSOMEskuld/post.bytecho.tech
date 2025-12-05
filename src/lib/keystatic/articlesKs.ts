import { collection, fields } from "@keystatic/core";

export const articlesKs = collection({
  label: "Articles",
  slugField: "title",

  // 每篇文章使用文件夹：src/content/articles/{slug}/index.mdx
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
    description: fields.text({
      label: "Description",
      validation: { isRequired: true, length: { max: 160 } },
    }),

    title: fields.slug({
      name: { label: "Title", validation: { length: { max: 60 } } },
    }),

    // 封面图将直接保存在 slug 目录下
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

 // 修改部分：配置 options 以实现图片同级存储
    content: fields.mdx({
      label: "1",
      path: "src/content/articles/*/",
    }),
  },
});
