let sections = document.querySelectorAll("section");
const listGroup = document.querySelector("ul");

// building navigation
for (let i = 0; i < sections.length; i++) {
  const list = document.createElement("li");
  const a = document.createElement("a");
  list.append(a);
  //a.setAttribute("href", "#" + sections[i].id);
  a.setAttribute("id", sections[i].id);
  a.setAttribute("class", sections[i].id);
  a.innerHTML = sections[i].id;
  listGroup.append(list);
}

// get boundary location and highlighting active link
let elements = document.querySelectorAll("a");
document.addEventListener("scroll", viewSection);

function viewSection(e) {
  e.preventDefault();

  let current = "";
  sections.forEach((section) => {
    let rect = section.getBoundingClientRect();

    if (rect.top < 150 && rect.top >= -150) {
      current = section.getAttribute("id");
    }
  });

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains(current)) {
      elements[i].classList.add("active");
      //console.log(current);
    } else {
      elements[i].classList.remove("active");
    }
  }
}

//section to scrollintowiew
for (let i = 0; i < elements.length; i++) {
  for (let j = 0; j < sections.length; j++) {
    if (elements[i].id == sections[j].id) {
      elements[i].addEventListener("click", (e) => {
        e.preventDefault();
        sections[j].scrollIntoView();
      });
    }
  }
}
