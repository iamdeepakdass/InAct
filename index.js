const yup =  document.querySelector(".problem");

const open = () => {
    console.log("webpages is open");
    yup.classList.add(".active");
};
const close = () => {
    console.log("webpage is closed");
    yup.classList.remove("active");
}; 
