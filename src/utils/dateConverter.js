const dateConverter = (date) => {
  const today = new Date();
  const day = new Date(date);

  const convertedDate =
    today - day < 10
      ? `${today - day}일 전`
      : `${day.getFullYear()}년 ${day.getMonth() + 1}월 ${day.getDate()}일`;
  return convertedDate;
};

export default dateConverter;
