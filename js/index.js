categories = [];

// Save Function
const addElement = (button, addFunction) => {
  button.onclick = () => {
    const inputAdd = document.getElementById("inputAdd");
    const value = inputAdd.value;
    categories.push({ name: value });
    localStorage.setItem(`categories`, JSON.stringify(categories));
    const modalComponent = document.getElementById("addModal");
    modalComponent.classList.remove("show");
    addFunction(value);
  };
};
const saveButton = document.getElementById("saveButton");

//Add Category
const addCategoryFront = (category) => {
  const categoriesList = document.getElementById("categories");
  const title = document.createElement("h2");
  title.setAttribute("id", `${category}`);
  title.innerText = category;
  categoriesList.appendChild(title);
};

addElement(saveButton, addCategoryFront);

//Add Links
// const addLinks = (link) => {
//   linksList = document.getElementById("");
//   const title = document.createElement("h4");
//   title.innerText = link;
//   linksList.appendChild(title);
// };
// addElement(saveButton, addLinks);

//Contador de vistas
const meditations = document.getElementsByClassName("meditation");
const views = document.getElementsByTagName("span");

const onClickAddView = () => {
  for (let i = 0; i < meditations.length; i++) {
    let counter = 0;
    const aElement = meditations[i].getElementsByTagName("a")[0];
    aElement.onclick = (e) => {
      e.preventDefault(); //Está para que no abra el link en la prueba pero no corresponde
      counter += 1;
      views[i].innerText = `${counter} días`;
      if (counter === 21) {
        alert("Cumpliste tu objetivo!");
      }
    };
  }
};

onClickAddView();
