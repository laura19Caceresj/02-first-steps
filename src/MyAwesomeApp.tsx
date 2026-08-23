import type { CSSProperties } from "react";

const firtName = "Laura";
const lastName = "Caceres";

const favoriteGames = ["Elden Ring", "Smash", "Metal Gear"];
const isActive = true;


const address = {
    zipCode: "ABC-123",
    country: "Colombia",
};

export const MyAwesomeApp = () => {

    const myStyles: CSSProperties = {

        backgroundColor: 'green',
        borderRadius: 20,
        padding: 10,
        marginTop: 50,
    }

    return (
        <div data-testid="div-app">
            <h1 data-testid="first-name-title">{firtName}</h1>
            <h3>{lastName}</h3>

            <p className="mi-clase-favorita">{favoriteGames.join(",")}</p>
            <p>{2 + 2}</p>

            <h1>{isActive ? "Activo" : "No activo"}</h1>

            <p style={myStyles}>{JSON.stringify(address)} </p>
        </div>
    );
};








//export function MyAwesomeApp(){
//  return(

//    <>
//  <h1>Laura</h1>
//<h3>Caceres</h3>
//</>
//)
//}