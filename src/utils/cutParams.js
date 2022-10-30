const cutParams = (url) => {
  const arr = url?.split("/");
  const length = arr?.length;

  return { repo: arr && arr[length - 2], issue_num: arr && arr[length - 1] };
};
export default cutParams;
