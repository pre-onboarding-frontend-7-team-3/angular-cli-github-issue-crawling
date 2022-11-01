const cutParams = (url) => {
  const arr = url.split("/");
  const ARR_LENGTH = arr.length;

  return { organization: arr[ARR_LENGTH - 2], repository: arr[ARR_LENGTH - 1] };
};
export default cutParams;
