export const formatTime12Hour = (dateString: string) => {
  const date = new Date(dateString.replace(" ", "T")); // convert to valid ISO format
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};