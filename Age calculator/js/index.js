const submit = document.getElementsByClassName("submit_btn")[0];
const year = document.getElementsByClassName("year")[0];
const month = document.getElementsByClassName("month")[0];
const date = document.getElementsByClassName("date")[0];
const age = document.getElementsByClassName("age")[0];

const today = new Date();

submit.addEventListener('click', () => {
  const birthYear = parseInt(year.value);
  const birthMonth = parseInt(month.value) - 1;
  const birthDate = parseInt(date.value);

  const birthDay = new Date(birthYear, birthMonth, birthDate);

  let finalYear = today.getFullYear() - birthDay.getFullYear();
  let finalMonth = today.getMonth() - birthDay.getMonth();
  let finalDate = today.getDate() - birthDay.getDate();

  if (finalDate < 0) {
    finalMonth--;
    finalDate += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (finalMonth < 0) {
    finalYear--;
    finalMonth += 12;
  }

  age.innerHTML = `You are ${finalYear} years, ${finalMonth} months, and ${finalDate} days old today.`;
});
