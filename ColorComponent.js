
function renderAllColors(colors) {
    let section = document.getElementById("Section");
    section.innerHTML = "";
    colors.forEach((element) => ColorApp(element));
  }
  
  function ColorApp(color)
  {
      var section = document.getElementById("Section");
      var heading = document.createElement("h1");
      heading.textContent = color.title;
      heading.setAttribute("class","HEAding");
      var Div = document.createElement("div");
      var Br = document.createElement("br");
      Div.setAttribute("class","DIV");
      Div.setAttribute("style", `background-color:${color.color};`)
      var button = document.createElement('button');
      button.setAttribute("onclick",`onRemove(${color.id})`);
      button.textContent = "Remove";
      var spanDiv = document.createElement("div");
      spanRating(spanDiv,color.id,color.rating);
      section.append(heading,button,Div,Br,spanDiv);

  }

  function ObjectReadData(title, color) {
    this.id = colors.length === 0 ? 1 : colors[colors.length - 1].id + 1;
    this.title = title;
    this.color = color;
  }
  
  function ColorPick() {
    var section = document.getElementById("Section");
    var title = document.getElementById("enterColor");
    var color = document.getElementById("colorPick");
    var newColor;
    if (title.value.length === 0) {
      newColor = new ObjectReadData("black", "#000000");
    } else {
      newColor = new ObjectReadData(title.value, color.value);
    }
    colors.push(newColor);
    section.innerHTML = "";
    renderAllColors(colors);
  }

function onRemove(id) {
  let newColors = colors.filter((element) => element.id !== id);
  colors = newColors;
  renderAllColors(colors);
}