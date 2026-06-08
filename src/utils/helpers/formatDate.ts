type FormatOption =
  | 'longDate'         // e.g., 1 January, 2025
  | 'monthFirst'       // e.g., January 1, 2025
  | 'object';          // returns { date, month, year }

interface FormatConfig {
  shortenMonth?: boolean; // if true, month will be shortened to "Jan", "Feb", etc.
}

export function formatDate(
  dateInput: string | Date,
  option: FormatOption,
  config: FormatConfig = {}
): string | { date: number; month: string; year: number } {

  const date = new Date(dateInput);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  let monthName = monthNames[date.getMonth()];
  if (config.shortenMonth) {
    monthName = monthName.slice(0, 3);
  }

  switch (option) {
    case 'longDate':
      return `${date.getDate()} ${monthName}, ${date.getFullYear()}`;
    case 'monthFirst':
      return `${monthName} ${date.getDate()}, ${date.getFullYear()}`;
    case 'object':
      return {
        date: date.getDate(),
        month: monthName,
        year: date.getFullYear()
      };
    default:
      return "";
  }
}

/* 
Examples:
console.log(formatDate('2025-01-01 00:00:00', 'longDate')); 
"1 January, 2025"

console.log(formatDate('2025-01-01 00:00:00', 'monthFirst', { shortenMonth: true })); 
"Jan 1, 2025"

console.log(formatDate('2025-01-01 00:00:00', 'object')); 
{ date: 1, month: 'January', year: 2025 }
*/