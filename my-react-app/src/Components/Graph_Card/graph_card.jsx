import "./graph_card_style.css";
const Data = [
  {
    title: "Total Employees",
    male: 120,
    female: 96,
    img: "./assets/emp_graph.png",
  },
  {
    title: "Total Request",
    male: 6,
    female: 15,
    img: "./assets/req_graph.png",
  },
];

// Card data

function GCard() {
  const cards = Data.map((item, index) => {
    return (
      <div key={index} className="g-card">
        <div className="dataPart">
          <p id="g_title">{item.title}</p>
          <p id="g_qty">{item.male + item.female}</p>
          <p id="g_male">{item.male} Men</p>
          <p id="g_male">{item.female} Women</p>
        </div>
        <div className="data_graph">
          <img src={item.img} />
        </div>
      </div>
    );
  });

  // HTML design

  return <div className="Main-gcard">{cards}</div>;
}

export default GCard;
