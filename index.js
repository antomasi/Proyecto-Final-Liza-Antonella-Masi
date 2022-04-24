//Contador de vistas

const meditations = document.getElementsByClassName("meditation");
const views = document.getElementsByTagName("span");

const onClickEvent = () => {
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

onClickEvent();
