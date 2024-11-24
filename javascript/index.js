const header = document.getElementById("header");
const atag = document.querySelectorAll(".atag");
const userin = document.querySelectorAll(".userin");


window.addEventListener("scroll", () => {
  const scrollHeight = window.scrollY;
  const headerHeight = header.getBoundingClientRect().height;

  if (scrollHeight > headerHeight) {
    header.classList.add("fixed-header");
    atag.forEach((a) => {
      a.style.color = "#ad8b3a";
    });
    userin.forEach((user) => {
      user.style.border = "2px solid #ad8b3a";
      user.style.color = "#ad8b3a";
    });
  } else {
    header.classList.remove("fixed-header");
    atag.forEach((a) => {
      a.style.color = "#ffffff";
    });
    userin.forEach((user) => {
      user.style.border = "2px solid #ffffff";
      user.style.color = "#ffffff";
    });
  }
});
