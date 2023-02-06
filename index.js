const car = {
    brand: "porsche",
    model: "cayenne",
    year: 2002,
    price: 218000,
    kmBord: 11000
}

/* cerinta 1.1 
Modificați numărul de km cu o valoare mai mica
*/

car.kmBord = 10000
console.log("KM bord", car.kmBord);

/* cerinta 1.2
 Adaugati o proprietate nouă, description,
cu o valoare corespunzătoare
*/

car.description = "o porcarie"

/* cerinta 1.3
Stergeti proprietatea description
*/

delete car.description

/* cerinte optionale ex 1.
Rezolvați cerințele de mai sus cu ajutorul unei funcții,
care ia ca parametru o masina
*/

function createOrDeleteProp (key, value) {
    if (value !== undefined) {
        car[key] = value
    } else {
        delete car[key]
    }
}

createOrDeleteProp("description", "o porcarie");
console.log("Descriere:", car.description);

createOrDeleteProp("description", undefined);
console.log("Descriere:", car.description);

createOrDeleteProp("description");
console.log("Descriere:", car.description);

/* ex 2
Faceti o functie tuneCar, care ia ca parametru o masina.
Funcția va returna un obiect nou, fără să îl modifice
pe cel trimis ca parametru.
*/

function tuneCar(car) {
    const carCopy = {...car};
    carCopy.kmBord = car.kmBord / 2;
    carCopy.price = car.price * 1.5;
    return carCopy;
}

const masinaTunata = tuneCar(car);
console.log("Aceeasi masina?: ", masinaTunata === car);
console.log("Noua masina:", masinaTunata)

/* ex 3
3. Folosind metodele de pe obiectul Date, afișează
data curentă în următorul format: HH:MM:SS
*/

function getMinutesWithZero(date) {
    const miuntes = date.getMinutes();
    if (miuntes < 10) {
        return "0" + miuntes;
    }
    return miuntes;
}

const today = new Date();
const formatedDate = today.getHours() + ":" + getMinutesWithZero(today) + ":" + today.getSeconds()
console.log("Este ora", formatedDate)