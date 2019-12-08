
const startDate = document.querySelector('.date-picker--start');
const endDate = document.querySelector('.date-picker--end');

const start = datepicker(startDate, { id: 1 });
const end = datepicker(endDate, { id: 1 });

start.getRange();
end.getRange();
console.log('datePicker', start, end)


