import { collection, fields } from "@keystatic/core";

export const articlesKs = collection({
  label: "Articles",
  slugField: "title",
  
  // 1. 关键设置：Path 结尾带 "/" 
  // 这告诉 Keystatic 为每篇文章创建一个独立文件夹
  // 结构: src/content/articles/{slug}/index.mdx
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
    
    // 2. 修改 Cover：移除 directory 和 publicPath
    // 图片现在会默认保存到当前文章的文件夹中（例如 src/content/articles/{slug}/cover.png）
    // Frontmatter 中引用的路径将只是文件名（例如 "cover.png"）
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
          length: {
            min: 1,
          },
        },
      }
    ),
    
    // 3. 修改 Content：移除 image 选项
    // 在 Folder Mode 下，文内上传的图片会自动保存到当前文章文件夹
    content: fields.mdx({
      label: "Content",
    }),
  },
});