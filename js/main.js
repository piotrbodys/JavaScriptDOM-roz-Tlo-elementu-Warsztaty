// W funkcji ponizej odwrocimy napis
// Funkcja jest w standardzie es6 (funkcja strzalkowa)

const reverse = (string) => {

    // Ponizej jest wywolanie metody split na stringu

    let result= string.split("").reverse().join("")
    console.log(result);
}

//  Ponizej jest wywolanie funkcji z przekazaniem parametru ktory jest stringiem

reverse("PIOTR")

// Metoda daje nam mozliwosc korzystania z juz napisanego kodu wykonujace konkretne czynnosci, uniwersalne dla wielu roznych aplikacjach np: filtrowanoie, rozszczepianie, laczenie, odwracanie, sprawdzanie zawartosci, mapowanie...

// Metode zawsze wywolujemy z nawiasem na koncu okraglym (), i zawsze po kropce za konkretna forma danych. To odroznia metody od funkcji, ktore mozna wywolywac samodzielnie np:  

// Do pol obiektu odwolujemy sie po kropce np: object.name

let object = {
    name: "Piotr",
    surname: "Bodys"
}
// Do elementow tablicy odwolujemy sie po nawiasie kwadratowym [] np: array[0]
// Powyzszy zapis da nam dostep do pierwszego elementu tablicy

let array = ["dom", {address: "Warszawa", street: "Lipowa"}]

// Powyzsze tablice ma tylko 2 elementy, 1 to string a 2 to zlozony obiekt.



// PETLE

// Gdy musimy wykonac ten sam zastaw operacji na wiekszej ilosci elementow to wtedy automatyzujemy proces uzywajac petli

// Petla for pojawia sie bardzo czesto w kodach. Posiada iterator ktorego zadaniem jest wykonywanie okreslonej ilosci petli.

let arrayOffNames = ["Piotr","Ula","Karol","Maria"] 


// Pierwszy parametr to jest defininiowanie iteratora, drugi parametr oznacza ze petla ma sie skonczyc gdy skonczy sie tablica, 3 parametr oznacza kierunek petli ++ oznacza kierunek od lewa do prawa. "array" petli jest tylko szablonem, na jej miejce podstawiasz wlasna petle po ktorej bedziesz chcial iterowac
 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

for (let index = 0; index < arrayOffNames.length; index++) {
    let element = arrayOffNames[index];

    // console.log(element)    

// console.log("Szanowny/a pan/i " + element + " Z indeksem " + index);

if (element === "Ola") {
    arrayOffNames.push("Andrzej")

    // console.log("w tablicy istnieje Piotr zatem dodalismy imie Andrzej");
    
}

}


// console.log(arrayOffNames)


// Warsztaty JSON

let listaPracownikow = {
    "employees": [
            {"firstName": "Hans", "lastName": "Schmidt"}, 
            {"firstName": "Jan", "lastName": "Nowak"},
            {"firstName": "Marek", "lastName": "Kowalski"}
       ]
    };

    // console.log(listaPracownikow.employees[0].firstName);
    
    for (let pracownik of listaPracownikow.employees) {
        console.log(pracownik.lastName);
    }

// console.log(JSON.stringify(listaPracownikow));

// console.log(JSON.parse(listaPracownikow));


// JAVASCRIPT DOM 
// DOM jest to obiektowy model dokumentu z jego pomoca dzieki metoda ktore udostepnia mozemy modyfikowac to co sie dzieje na stronie z poziomu JAVASCRIPTU. W dokumencie DOM kazdy element html jest obiektem(nodem). W ten sposob mozemy budowac logike stron internetowych modyfikujac elementy html np. usuwac je, dodawac, przestawiac, nakladac na nie zdarzenia itd.. Wszelkie zmiany w kodzie html dokonane przez metode DOMu sa widoczne tylko w drzewie DOM w devTools natomiast nie sa widoczne w pliku indekx html.



let header= document.createElement("header")
console.log(header);

document.body.prepend(header)


header.innerText= "zostalem dodany dzieki metodom DOMu"

// DOM - WARSZTATY

console.log(Warsztat - Ustaw tlo elementow HTML);

