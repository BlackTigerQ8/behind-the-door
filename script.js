console.log("Front-end is not the right place!");
console.log("Try somewhere else!");

let btn = document.querySelector("button");

const flag = () => {
  console.log(
    "The flag is hiding somewhere, normally the favorite place to hide is a text file with the name flag."
  );
};

btn.addEventListener("click", flag);
