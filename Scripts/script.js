// temporarily change the color of the div border for main links on the home page when they are moused over
// const changeFlag1Color = () => {
//     document.querySelector(".flag1").style.borderColor = "#247BA0";
// }

// const flag1ColorReverse = () => {
//     document.querySelector(".flag1").style.borderColor = "#CBD4C2";
// };

// const changeFlag2Color = () => {
//     document.querySelector(".flag2").style.borderColor = "#247BA0"
// };

// const flag2ColorReverse = () => {
//     document.querySelector(".flag2").style.borderColor = "#CBD4C2";
// };

// const changeFlag3Color = () => {
//     document.querySelector(".flag3").style.borderColor = "#247BA0"
// };
    
// const flag3ColorReverse = () => {
//     document.querySelector(".flag3").style.borderColor = "#CBD4C2";
// };

// const changeFlag4Color = () => {
//     document.querySelector(".flag4").style.borderColor = "#247BA0"
// };

// const flag4ColorReverse = () => {
//     document.querySelector(".flag4").style.borderColor = "#CBD4C2";
// };

// onmouseenter="changeFlag2Color()" onmouseleave="flag2ColorReverse()"


// WORK IN PROGRESS
const flags = document.querySelectorAll("flag");
const changeFlagColor = (e) => {
    document.querySelectorAll("flag").forEach(flag=>{
        flag.classList.toggle("flagClicked");
    })
};

flags.forEach(flag=>{flag.addEventListener("mouseenter", changeFlagColor)});
flags.forEach(flag=>{flag.addEventListener("mouseleave", changeFlagColor)});