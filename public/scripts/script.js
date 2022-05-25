// WORK IN PROGRESS
// declare each flag box on home.html as a variable
const flag1 = document.querySelector(".flag1"); 
const flag2 = document.querySelector(".flag2");
const flag3 = document.querySelector(".flag3");
const flag4 = document.querySelector(".flag4");

// create event handlers for each flag to toggle class to change border color
const changeFlag1Color = () => {
    flag1.classList.toggle("flagClicked")
};

const changeFlag2Color = () => {
    flag2.classList.toggle("flagClicked")
};

const changeFlag3Color = () => {
    flag3.classList.toggle("flagClicked")
};

const changeFlag4Color = () => {
    flag4.classList.toggle("flagClicked")
};

// add event listeners for each flag to toggle the celadon border color on and off
flag1.addEventListener("mouseenter", changeFlag1Color);
flag1.addEventListener("mouseleave", changeFlag1Color);

flag2.addEventListener("mouseenter", changeFlag2Color);
flag2.addEventListener("mouseleave", changeFlag2Color);

flag3.addEventListener("mouseenter", changeFlag3Color);
flag3.addEventListener("mouseleave", changeFlag3Color);

flag4.addEventListener("mouseenter", changeFlag4Color);
flag4.addEventListener("mouseleave", changeFlag4Color);


// separate park address input into separate fields (i.e. street number, street, street listing type, city, state, country) ????
// const parkAddress = document.querySelector("#parkAddress").value
// console.log(parkAddress);
// const parkArray = parkAddress.split(" ");
// console.log(parkArray);

