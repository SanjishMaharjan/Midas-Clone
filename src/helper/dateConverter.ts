export function formatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
      timeZone: 'UTC'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
  
  const timestamp = '2024-05-13T08:38:36.000000Z';
  console.log(formatTimestamp(timestamp)); 
  