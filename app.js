const name1 = document.getElementById("nombre");
const secondName1= document.getElementById("segundoNombre");
const apellido1 = document.getElementById("apellido");
const age1 = document.getElementById("edad");
const birthday1 = document.getElementById("cumpleaños");
const description1 = document.getElementById("descripcion");

const ApiUrl = 'https://localhost:5001/'; 

let getsimpsonsData = async() =>{
    const response = await fetch (`${ApiUrl}simpsons/character/0`);
    const simpsons = await response.json();
    console.log(simpsons);
    const {firstName,secondName, lastName ,age, birthDate, description} = simpsons;


    name1.innerText = firstName;
    secondName1.innerText = secondName;
    apellido1.innerText = lastName;
    age1.innerText = age;
    birthday1.innerText = birthDate;
    description1.innerText = description;
};
 getsimpsonsData();

const name2 = document.getElementById("nombre2");
const secondName2= document.getElementById("segundoNombre2");
const apellido2 = document.getElementById("apellido2");
const age2 = document.getElementById("edad2");
const birthday2 = document.getElementById("cumpleaños2");
const description2 = document.getElementById("descripcion2");

 let getsimpsonsData2 = async() =>{
    const response2 = await fetch (`${ApiUrl}simpsons/character/1`);
    const simpsons2 = await response2.json();
    console.log(simpsons2);
    const {firstName,secondName, lastName ,age , birthDate, description} = simpsons2;

    name2.innerText = firstName;
    secondName2.innerText = secondName;
    apellido2.innerText = lastName;
    age2.innerText = age;
    birthday2.innerText = birthDate;
    description2.innerText = description;
};
getsimpsonsData2();

const name3 = document.getElementById("nombre3");
const secondName3= document.getElementById("segundoNombre3");
const apellido3 = document.getElementById("apellido3");
const age3 = document.getElementById("edad3");
const birthday3 = document.getElementById("cumpleaños3");
const description3 = document.getElementById("descripcion3");

 let getsimpsonsData3 = async() =>{
    const response3 = await fetch (`${ApiUrl}simpsons/character/2`);
    const simpsons3 = await response3.json();
    console.log(simpsons3);
    const {firstName,secondName, lastName ,age , birthDate, description} = simpsons3;

    name3.innerText = firstName;
    secondName3.innerText = secondName;
    apellido3.innerText = lastName;
    age3.innerText = age;
    birthday3.innerText = birthDate;
    description3.innerText = description;
};
getsimpsonsData3();

const name4 = document.getElementById("nombre4");
const secondName4= document.getElementById("segundoNombre4");
const apellido4 = document.getElementById("apellido4");
const age4 = document.getElementById("edad4");
const birthday4 = document.getElementById("cumpleaños4");
const description4 = document.getElementById("descripcion4");

 let getsimpsonsData4 = async() =>{
    const response4 = await fetch (`${ApiUrl}simpsons/character/3`);
    const simpsons4 = await response4.json();
    console.log(simpsons4);
    const {firstName,secondName, lastName ,age , birthDate, description} = simpsons4;

    name4.innerText = firstName;
    secondName4.innerText = secondName;
    apellido4.innerText = lastName;
    age4.innerText = age;
    birthday4.innerText = birthDate;
    description4.innerText = description;
};
getsimpsonsData4();

const name5 = document.getElementById("nombre5");
const secondName5= document.getElementById("segundoNombre5");
const apellido5 = document.getElementById("apellido5");
const age5 = document.getElementById("edad5");
const birthday5 = document.getElementById("cumpleaños5");
const description5 = document.getElementById("descripcion5");

 let getsimpsonsData5 = async() =>{
    const response5 = await fetch (`${ApiUrl}simpsons/character/4`);
    const simpsons5 = await response5.json();
    console.log(simpsons5);
    const {firstName,secondName, lastName ,age , birthDate, description} = simpsons5;

    name5.innerText = firstName;
    secondName5.innerText = secondName;
    apellido5.innerText = lastName;
    age5.innerText = age;
    birthday5.innerText = birthDate;
    description5.innerText = description;
};
getsimpsonsData5();