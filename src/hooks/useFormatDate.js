const useFormateDate = (date) => {
  const formattedDate = date.split('T')[0].split('-');

  return `${formattedDate[0]}년 ${formattedDate[1]}월 ${formattedDate[2]}일`;
};

export default useFormateDate;
