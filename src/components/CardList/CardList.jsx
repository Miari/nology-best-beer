import Card from "../Card/Card"

const CardList = ({ beers }) => {
  const listOfBeerCardsJSX = beers.map((beer, index) => (
    <Card key={"beer" + index}
    picture={beer.image_url} 
    name={beer.name}
    description={beer.description}
    />
  ));

  return (
    <>
      <div>{listOfBeerCardsJSX}</div>
    </>
  );
};

export default CardList;
