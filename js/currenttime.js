// const getTimeAndDate = () => {
//   const dt = DateTime.now();
//   return dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
// };

// setInterval(
//   () => { (document.querySelector('.currentdate').textContent = getTimeAndDate()); },
//   1000,
// );
const { DateTime } = luxon;

document.getElementById('currentdate').innerText = DateTime.local().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

