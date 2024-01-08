const filter = document.getElementById('filter');
const category = document.querySelector('.category');
const originalFigures = Array.from(category.querySelectorAll("figure"));

filter.addEventListener("change", () => {
  const selected = filter.value;
  const figures = Array.from(category.querySelectorAll("figure")); 

  if (selected === "low") {
    figures.sort((a, b) => {
      const priceA = parseFloat(a.querySelector("h5").textContent.replace("$", ""));
      const priceB = parseFloat(b.querySelector("h5").textContent.replace("$", ""));
      return priceA - priceB;
    });
  } else if (selected === "high") {
    figures.sort((a, b) => {
      const priceA = parseFloat(a.querySelector("h5").textContent.replace("$", ""));
      const priceB = parseFloat(b.querySelector("h5").textContent.replace("$", ""));
      return priceB - priceA;
    }); 
  } else {
    category.innerHTML = "";
    originalFigures.forEach((figure) => {
      category.appendChild(figure);
    });
  }
  category.innerHTML = "";
  figures.forEach((figure) => {
    category.appendChild(figure);
  });
});
