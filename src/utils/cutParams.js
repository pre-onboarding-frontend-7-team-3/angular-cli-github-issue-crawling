const cutParams = (url) => {
  const arr = url.split("/");
  return { owner: arr[-4], repo: arr[-3], issue_num: arr[-1] };
};
export default cutParams;
