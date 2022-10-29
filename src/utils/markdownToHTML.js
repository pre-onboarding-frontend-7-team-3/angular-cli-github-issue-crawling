import { remark } from "remark";
import html from "remark-html";

export const markdownToHTML = async (data) => {
  const res = await remark().use(html).process(data.body);
  return res;
};
