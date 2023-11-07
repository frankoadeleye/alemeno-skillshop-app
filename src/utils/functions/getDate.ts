function getDate(days) {
  const today = new Date(); // get today's date
  const dueDate = new Date(today);
  dueDate.setDate(today.getDate() + days); //
  return dueDate.toDateString();
}

export default getDate;
