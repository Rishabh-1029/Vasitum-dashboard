import "./dashboard_style.css";

// Data

const Data = [
  {
    title: "Available Position",
    qty: 24,
    n: 4,
    fixed_text: "Urgently needed",
    color_bg: "#ffefe7",
    text_color: "#FF5151",
  },
  {
    title: "Job Open",
    qty: 10,
    n: 4,
    fixed_text: "Active hiring",
    color_bg: "#E8F0FB",
    text_color: "#3786F1",
  },
  {
    title: "New Employees",
    qty: 24,
    n: 4,
    fixed_text: "Department",
    color_bg: "#FDEBF9",
    text_color: "#EE61CF",
  },
];

// Card Design

function Card() {
  const cards = Data.map((item, index) => {
    const cardStyle = {
      backgroundColor: item.color_bg,
    };
    const textStyle = {
      color: item.text_color,
    };
    return (
      <div key={index} className="card" style={cardStyle}>
        <p className="title">{item.title}</p>
        <p className="qty">{item.qty}</p>
        <p className="fixed_text" style={textStyle}>
          {item.n} {item.fixed_text}
        </p>
      </div>
    );
  });

  // HTML Design

  return (
    <>
      {" "}
      <h1 id="dash_title">Dashboard</h1>
      <div className="dashcard_main">{cards}</div>
    </>
  );
}

export default Card;
