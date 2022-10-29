const useFormateDate = (date) => {
  const formattedDate = date.split("T")[0].split("-");

  return `${formattedDate[0]} - ${formattedDate[1]} - ${formattedDate[2]}`;
};

export default useFormateDate;
