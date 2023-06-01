// const toggleTheme = document.getElementById("toggle-theme");
const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHanler);

function toggleThemeHanler(){
    if(toggleTheme.checked){
         html.dataset.theme="dark";
         localStorage.setItem("theme", "dark");
     } else {
        html.dataset.theme = "light";
         localStorage.setItem("theme", "light");
    }
}
// const startTheme =  localStorage.getItem("them");

// if (startTheme == "light" ) {
//     html.dataset.theme == "light";
// } else {
//     html.dataset.theme == "dark";
//     toggleTheme.checked = true;
// }

const ckContainer = document.querySelector('.ck-container');

ckContainer.addEventListener('click', function() {
  // Действия, которые нужно выполнить при нажатии на контейнер
   console.log('Контейнер "Pārbaudīt" нажат!');
});

function toggleTheme() {
    var checkbox = document.getElementById("toggle-theme");
    var sunIcon = document.getElementById("sunIcon");
    var moonIcon = document.getElementById("moonIcon");
  
    if (checkbox.checked) {
      // Включить темный режим
      sunIcon.style.display = "none";
      moonIcon.style.display = "inline";
      document.body.classList.add("dark-theme");
    } else {
      // Включить светлый режим
      sunIcon.style.display = "inline";
      moonIcon.style.display = "none";
      document.body.classList.remove("dark-theme");
    }
  

    var checkbox = document.getElementById("toggle-theme");
    var htmlElement = document.documentElement;
  
    if (checkbox.checked) {
      // Включить темный режим
      htmlElement.setAttribute("data-theme", "dark");
    } else {
      // Включить светлый режим
      htmlElement.setAttribute("data-theme", "light");
    }
  }

  function changeColors() {
    var container = document.getElementById("nepareiz");
    container.style.backgroundColor = "#8B0000";
  }

  function changeColoris() {
    var container = document.getElementById("nepareizi");
    container.style.backgroundColor = "#8B0000";
  }

  function changeColo() {
    var container = document.getElementById("nepareizis");
    container.style.backgroundColor = "#8B0000";
  }

  function changeColor() {
    var container = document.getElementById("pareiz");
    container.style.backgroundColor = "#006400";
  }

/*---------------------------------------------------------------*/

  function changeCvet() {
    var container = document.getElementById("nepravilno");
    container.style.backgroundColor = "#8B0000";
  }

  function changeCvets() {
    var container = document.getElementById("pravilniy");
    container.style.backgroundColor = "#006400";
  }

  function changeCvetek() {
    var container = document.getElementById("nepravilniy");
    container.style.backgroundColor = "#8B0000";
  }

  function changeCvetok() {
    var container = document.getElementById("net");
    container.style.backgroundColor = "#8B0000";
  }

  /*---------------------------------------------------------------*/

  function changeKrases() {
    var container = document.getElementById("wrong");
    container.style.backgroundColor = "#8B0000";
  }

  function changeKrase() {
    var container = document.getElementById("wrongs");
    container.style.backgroundColor = "#8B0000";
  }

  function changeKrasa() {
    var container = document.getElementById("right");
    container.style.backgroundColor = "#006400";
  }

  function changeKrasi() {
    var container = document.getElementById("wronge");
    container.style.backgroundColor = "#8B0000";
  }

    /*---------------------------------------------------------------*/

// var defaultColor = "#0c134f";
// function changeColor(container) {
//   if (container.style.backgroundColor !== defaultColor) {
//     container.style.backgroundColor = defaultColor;
//   } else {
//     container.style.backgroundColor = "red";
//   }
// }


  

  
  

