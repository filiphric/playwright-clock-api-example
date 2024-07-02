// Helper function to parse time string into Date object
export function parseTimeString(timeString: string): Date {
  const [time, period] = timeString.split(' ');
  if (!time || !period) throw new Error('Invalid time string format');

  const [hours, minutes, seconds] = time.split(':').map(Number);
  if (hours === undefined || minutes === undefined || seconds === undefined) {
    throw new Error('Invalid time string format');
  }

  const date = new Date();
  date.setHours(period === 'PM' && hours !== 12 ? hours + 12 : hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);
  
  return date;
}