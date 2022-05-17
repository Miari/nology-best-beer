const Card = ({ key, picture, name, description }) => {
  return (
    <div>
      <img src={picture} alt={name} />
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
};

export default Card;
