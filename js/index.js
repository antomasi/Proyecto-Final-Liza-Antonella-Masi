categories = [];

// Create button addSubCategory
const addButtonSubcategory = (category) => {
  const categorySelected = document.getElementById(category);
  const button = document.createElement("button");
  button.innerText = "Agregar Subcategoría";
  button.setAttribute("id", `${category}-link`);
  button.setAttribute("class", "btn btn-outline-success");
  categorySelected.appendChild(button);
};

// Save Function
const addCategory = (button, addFunction) => {
  button.onclick = () => {
    const inputAdd = document.getElementById("inputAdd");
    const value = inputAdd.value;
    categories.push({ name: value });
    localStorage.setItem(`categories`, JSON.stringify(categories));
    const modalComponent = document.getElementById("addModal");
    modalComponent.classList.remove("show");
    addFunction(value);
    alertify.notify("Categoría cargada exitosamente", "success", 3);
  };
};
const saveButton = document.getElementById("saveButton");

//Add Category
const addCategoryFront = (category) => {
  const categoriesList = document.getElementById("categories");
  const categoryContainer = document.createElement("div");
  categoryContainer.setAttribute("id", `${category}`);
  categoryContainer.setAttribute("class", "container column-2");
  const title = document.createElement("h2");
  title.innerText = category;
  categoriesList.appendChild(categoryContainer);
  categoryContainer.appendChild(title);
  addButtonSubcategory(category);
};

addCategory(saveButton, addCategoryFront);

// Add Subcategory
/* const addSubcategoryFront = (category, subcategory) => {
  const subCategoriesList = document.getElementById(category);
  const subCategoryContainer = document.createElement("div");
  subCategoryContainer.setAttribute("id", `${subcategory}`);
  const input = document.createElement("input");
  input.setAttribute("target", "_blank");
  subCategoriesList.appendChild(subCategoryContainer);
}; */

// Save SubCategory
/* const addSubcategory = () => {
  const element = document.getElementsByTagName("h2");
  const category = element[0].innerText;
  console.log("category", category);
  const button = document.getElementById(`yoga-link`);
  button.onclick = () => {
    addSubcategoryFront(category, subcategory);
  };
};

addSubcategory(); */

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
