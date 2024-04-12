export const formatDate = (date: string) => {
  // format date 2024-04-16 to 16/04/2024
  const dateArr = date.split('-');
  return `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
};
