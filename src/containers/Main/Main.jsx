import CardList from "../../components/CardList/CardList";
import "./Main.scss";

const Main = ({beers}) => {
  return (
    <div className="main-section">
      <CardList beers={beers} />
    </div>
  );
};

export default Main;