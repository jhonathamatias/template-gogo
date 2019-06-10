import React from "react";
import TopPage from "components/UI/TopPage";
import CardMediaStatus from "components/UI/Cards/CardMediaStatus";

const cards = [
  {
    text: "Longeviex",
    description: "2 fracos com 120 capsulas",
    subDescription: "03/05/2019 17:01:23",
    titleImage: "Produto Longeviex",
    image:
      "https://gogo-react.coloredstrategies.com/assets/img/marble-cake-thumb.jpg",
    status: "Pago"
  },
  {
    text: "Lipocel",
    description: "2 fracos com 120 capsulas",
    subDescription: "03/05/2019 17:01:23",
    titleImage: "Produto Lipocel",
    image:
      "https://gogo-react.coloredstrategies.com/assets/img/fat-rascal-thumb.jpg",
    status: "Em Análise"
  },
  {
    text: "Lipocel",
    description: "2 fracos com 120 capsulas",
    subDescription: "03/05/2019 17:01:23",
    titleImage: "Produto Lipocel",
    image:
      "https://gogo-react.coloredstrategies.com/assets/img/fat-rascal-thumb.jpg",
    status: "Em Análise"
  }
];
function Dashboard(props) {
  return (
    <div>
      <TopPage>Dashboard</TopPage>
      <div>
        {cards.map((card, i) => (
          <CardMediaStatus key={i} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
