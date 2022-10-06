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

export const checkYear = (year) => {
  let expReg = /^\d{4}\/\d{4}$/;

  if (expReg.test(year.trim())) return true;
  else return false;
};

export const retrieveDate = (date) => {
  const [day, month, year] = date.split('/');
  const formatedDate = `${year}-${month}-${day}`;

  return formatedDate;
};
