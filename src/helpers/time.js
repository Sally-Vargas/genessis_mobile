
const elapsedTime = (date) => {
  const currentDate = new Date();

  // Get the difference in milliseconds
  const elapsedTime = currentDate - date;

  return elapsedTime;
};

// Time Conversions
const minutesInMilliseconds = (minute = 1) => minute * 60 * 1000;
const hoursInMilliseconds = (hour) => hour * minutesInMilliseconds(60);
const daysInMilliseconds = (day) => day * hoursInMilliseconds(24);

const toMilliseconds = {
  minutes: minutesInMilliseconds,
  hours: hoursInMilliseconds,
  days: daysInMilliseconds,
};

export { toMilliseconds, elapsedTime };
