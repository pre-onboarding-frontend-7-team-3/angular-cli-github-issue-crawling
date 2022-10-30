const caculateDifOfTime = (timestamp) => {
  const now = new Date();

  if (now.getFullYear() !== Number(timestamp.substr(0, 4))) {
    return `${now.getFullYear() - Number(timestamp.substr(0, 4))} years ago`;
  }
  if (now.getMonth() !== Number(timestamp.substr(5, 2) !== 0)) {
    return `${now.getMonth() - Number(timestamp.substr(5, 2))} months ago`;
  }
  if (now.getDate() !== Number(timestamp.substr(8, 2))) {
    return `${now.getDate() - Number(timestamp.substr(8, 2))} days ago`;
  }
  if (now.getHours() !== Number(timestamp.substr(11, 2))) {
    return `${now.getHours() - Number(timestamp.substr(11, 2))} hours ago`;
  }
  return `${now.getMinutes() - Number(timestamp.substr(14, 2))} minutes ago`;
};

export default caculateDifOfTime;
