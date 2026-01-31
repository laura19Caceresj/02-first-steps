import type { CSSProperties } from "react";

 const firstName = 'Eduar';
    const lastName = 'Herrera';

    const favoriteGames = ["Final Fantasy", "Metal Gear", "Resident Evil"];
    const isActive = false;



    const address = {
        zipCode: 'ABC-123',
        country: 'Colombia',
    };


//componente con funcion de flecha

const   myStyles :CSSProperties= {
        backgroundColor: 'red',
            borderRadius: 10,
                padding: 10,
                marginTop:30,
                };


export const MyAwesomeApp = () => {

return (
    <>
        <h1>{firstName} </h1>
        <h3>{lastName}</h3>
        <p>{favoriteGames.join(",")}</p>
        <p>{2 + 2}</p>
//ternario java script
        <h1>{isActive ? "Active" : "Inactive"}</h1>

        <p style={myStyles}>{JSON.stringify(address)}</p>


    </>
)
}











//componente tarea componente normal
//export function MyAwesomeApp() {




//  return (
//    <>
//      <h1>Fernado</h1>
//    <h3>Herrera</h3>

//</>

// )

//}
