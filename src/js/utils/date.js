// функция расчета даты
export const date = (number) => {
  const date = new Date();
  date.setDate(date.getDate() - number);
  return date.toISOString();
};
