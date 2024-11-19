type CardPropsType = {
  img: string;
  title: string;
  price: number;
  discount?: number;
  color?: "red" | "green";
};

export const Cards = (props: CardPropsType) => {
  return (
    <div>
      <div>{props.img}</div>
      <p>{props.title}</p>
      <p>{props.price}</p>
      <p style={{ backgroundColor: props.color == "red" ? "blue" : "green" }}>
        {props.discount}
      </p>
    </div>
  );
};
