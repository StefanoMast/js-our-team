// 1. Crea un array composto da 5 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
//
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

// const automobili = [
// { marca: "mazda", modello: "prima", alimentazione: "gpl"
// },
// { marca: "fiat", modello: "punto", alimentazione: "metano"} ,
// { marca: "fiat", modello: "punto", alimentazione: "gpl"} ,
// { marca: "ford", modello: "fiesta", alimentazione: "benzina"} ,
// { marca: "mercedes", modello: "gl", alimentazione: "elettrica"} ,
// ];

// // const benzinaAutomobile = automobili.filter((element) => {
// //     if (element.alimentazione === "benzina") {
// //         return true;
// //     }
// // })

// // console.log(beninaAutomobile);

// // const gplAutomobile = automobili.filter((element) => {
// //     if (element.alimentazione === "gpl"){
// //         return true;
// //     }
// // })
// // console.log(gplAutomobile);

// // const altreAutomobili = automobili.filter((element) => {
// //     if (element.alimentazione !== "gpl" && element.alimentazione !== "benzina"){
// //         return true;
// //     }
// // })
// // console.log(altreAutomobili);

// //se noi vogliamo fare un solo ciclo è meglio utilizzare forEach

// //soluzione con forEach

// //faccio tre array vuoti per mettere gli elementi che prelevo dall'array principale

// const benzinaAutomobile = [];
// const gplAutomobile = [];
// const altreAutomobili = [];

// automobili.forEach((element) => {
//     if (element.alimentazione === "benzina") {
//         benzinaAutomobile.push(element);
//     } else if (element.alimentazione === "gpl") {
//         gplAutomobile.push(element);
//     } else {
//         altreAutomobili.push(element);
//     }
// })
// console.log(benzinaAutomobile, gplAutomobile, altreAutomobili);

// 2. A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
//
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

// const nomi = ["PIPPO", "plUto", "topoLINO"};
 
// const new 

// 3. Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
//  const animali = [
//   { nome: "leone", famiglia: "felidi", classe: "mammiferi" },
//   { nome: "cane", famiglia: "canidi", classe: "mammiferi" },
//    { nome: "gallina", famiglia: "fasianidi", classe: "uccelli" },
// ];


// // Crea un nuovo array con la lista dei mammiferi.
// // const animaliMammiferi = animali.filter((element) => {
// //     if (element.classe === "mammiferi") {
// //     } return true;
// // });

// // console.log(mammiferi);

// const animaliMammiferi = animali.filter((element) => element.classe === "mammiferi");
// console.log(mammiferi);
//     //     if (element.classe === "mammiferi") {
    //     } return true;
    // });
    
    // console.log(mammiferi);

const messages = people.map ((element) => {
    let message = `${element.firstName} ${element.secondName} `;
    if (element.age >= 18) {
        message
    }
})