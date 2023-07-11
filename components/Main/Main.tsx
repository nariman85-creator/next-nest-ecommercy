import Cardprops from "@/types/cardtypes";
import Card from "../Card/Card";
import "./Main.css";

export function Main({ cards }: { cards: Cardprops[] }) {
  return (
    <main className="main">
      <div className="container">
        <div className="card-section">
          {cards.length > 0 &&
            cards.map((card) => {
              return <Card key={card.id} {...card} />;
            })}
        </div>
      </div>
    </main>
  );
}
