const getTimeAndDate = () => {
    const dt = DateTime.now();
    return dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  };
  
  setInterval(
    () => { (document.querySelector('.currentdate').textContent = getTimeAndDate()); },
    1000,
  );
  