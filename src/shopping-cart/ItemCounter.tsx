interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity }: Props) => {

  const handleCLick = () => {
    console.log(`Click en ${name}`)
  }






  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
      }}
    >
      <span
        style={{
          width: 150,
        }}
      >
        {name}
      </span>
      <button onClick={handleCLick}>+1</button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>

  );



}

//activa boton con solo pasar el mouse por encima
// onMouseEnter={() => {
//console.log(`Mouse enter ${name}`);
//</section>}}
