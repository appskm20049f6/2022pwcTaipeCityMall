let ibendo1 = document.querySelector("#ibendo-1");
let ibendo2 = document.querySelector("#ibendo-2");
let ibendo3 = document.querySelector("#ibendo-3");
let ibendo4 = document.querySelector("#ibendo-4");
let ibendo5 = document.querySelector("#ibendo-5");
let navbar = document.querySelector("#navbar");
console.log(navbar.children[0].children[0].children[4].children[0]);

let ibendoChange = (c) => {
  if (c == 1) {
    for (let index = 0; index < 5; index++) {
      navbar.children[index].children[0].classList.remove("card-change");
      navbar.children[index].children[0].children[4].children[0].innerHTML =
        "<p>前往</p>";
    }

    navbar.children[0].children[0].children[4].children[0].innerHTML =
      "<p>現在</p>";
    ibendo1.style.display = "flex";
    ibendo2.style.display = "none";
    ibendo3.style.display = "none";
    ibendo4.style.display = "none";
    navbar.children[0].children[0].classList.add("card-change");
  }
  if (c == 2) {
    for (let index = 0; index < 5; index++) {
      navbar.children[index].children[0].classList.remove("card-change");
    }
    navbar.children[1].children[0].children[4].children[0].innerHTML =
      "<p>現在</p>";
    ibendo1.style.display = "none";
    ibendo2.style.display = "flex";
    ibendo3.style.display = "none";
    ibendo4.style.display = "none";
    navbar.children[1].children[0].classList.add("card-change");
  }
  if (c == 3) {
    for (let index = 0; index < 5; index++) {
      navbar.children[index].children[0].classList.remove("card-change");
    }
    navbar.children[2].children[0].children[4].children[0].innerHTML =
      "<p>現在</p>";
    ibendo1.style.display = "none";
    ibendo2.style.display = "none";
    ibendo3.style.display = "flex";
    ibendo4.style.display = "none";
    navbar.children[2].children[0].classList.add("card-change");
  }
  if (c == 4) {
    for (let index = 0; index < 5; index++) {
      navbar.children[index].children[0].classList.remove("card-change");
    }
    navbar.children[3].children[0].children[4].children[0].innerHTML =
      "<p>現在</p>";
    ibendo1.style.display = "none";
    ibendo2.style.display = "none";
    ibendo3.style.display = "none";
    ibendo4.style.display = "flex";
    navbar.children[3].children[0].classList.add("card-change");
  }
};
