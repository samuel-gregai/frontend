export const formatDate = (date: Date) => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return "Today";
  }
  if (date.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  }

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const suffix = ["th", "st", "nd", "rd"][
    (day % 10 > 3 ? 0 : day % 10) + (day === 11 || day === 12 || day === 13 ? 0 : 1)
  ];

  return `${day}${suffix} ${month}, ${year}`;
};
