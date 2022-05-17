import Card from "../Card/Card";
import "./CardList.scss";

const CardList = ({ beers }) => {
  const listOfBeerCardsJSX = beers.map((beer, index) => (
    <Card
      key={"beer" + index}
      picture={beer.image_url}
      name={beer.name}
      description={beer.description}
    />
  ));

  return (
    <>
      <div className="card-list">{listOfBeerCardsJSX}</div>
    </>
  );
};

export default CardList;
