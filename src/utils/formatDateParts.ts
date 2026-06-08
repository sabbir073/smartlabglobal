export const formatDateParts = (dateString: string) => {
  const date = new Date(dateString.replace(" ", "T")); // ensure valid ISO format
  return {
    day: date.getDate(),
    month: date.toLocaleString("en-US", { month: "short" }), // e.g., Jul
    weekday: date.toLocaleString("en-US", { weekday: "short" }), // e.g., Wed
    year: date.getFullYear(),
  };
};