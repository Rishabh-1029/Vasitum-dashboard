// Daily date picker as txt

const TodayDate = () => {
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString(undefined, options);
  return (
    <div>
      <p className="today_date">Today, {formattedDate}</p>
    </div>
  );
};

export default TodayDate;
