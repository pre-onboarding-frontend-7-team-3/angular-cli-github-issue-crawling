import { remark } from "remark";
import html from "remark-html";

export const markdownToHtml = async (markdown) => {
  try {
    const result = await remark().use(html).process(markdown);
    return result.toString();
  } catch (e) {
    throw new Error(e);
  }
};
