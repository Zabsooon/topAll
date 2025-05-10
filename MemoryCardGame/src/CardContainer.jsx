import Card from "./Card";

function CardContainer( { cards } ) {
  return <div className="card-container">
    {Array.isArray(cards) ? (
      cards.map((card) => (
        <Card key={card.id} url={card.sprites.front_default} />
      ))
    ) : cards.sprites && (
      <Card key={cards.id} url={cards.sprites.front_default} />
    )}
  </div>;
}

export default CardContainer;
