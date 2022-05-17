import "./Card.scss";

const Card = ({ key, picture, name, description }) => {
  return (
    <div className="card">
      <img src={picture} alt={name} />
      <div className="name">{name}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default Card;
