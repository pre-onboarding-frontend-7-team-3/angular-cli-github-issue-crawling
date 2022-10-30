const cutParams = (url) => {
  const arr = url.split("/");
  const length = arr.length;

  return { repo: arr[length - 2], issue_num: arr[length - 1] };
};
export default cutParams;
