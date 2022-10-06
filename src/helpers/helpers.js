export const formatDate = (date) => {
  const [year, month, day] = date.split('-');
  const formatedDate = `${day}/${month}/${year}`;

  return formatedDate;
};

export const checkDates = (startdate, enddate) => {
  const firstDate = new Date(startdate);
  const secondDate = new Date(enddate);

  if (startdate > enddate) return false;
  else return true;
};
