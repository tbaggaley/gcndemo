export const formatDate = (dateString) => {
  const [date, month, year] = new Date(dateString)
    .toLocaleDateString("en-gb", {
      day: "numeric",
      year: "numeric",
      month: "long",
    })
    .split(" ");

  return [date + getPostfix(date), month, year].join(" ");
};

const getPostfix = (date) => {
  switch (date) {
    case "1":
      return "st";
    case "2":
      return "nd";
    case "3":
      return "rd";
    default:
      return "th";
  }
};
