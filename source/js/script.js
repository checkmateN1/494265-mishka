var link=document.querySelector(".hamburger");
var navigation=document.querySelector(".menu");
var orderIndex=document.querySelector(".featured__button");
var orderCatalog=document.querySelectorAll(".product__cart-link");
var modal=document.querySelector(".modal-window");

link.classList.remove("visually-hidden");
navigation.classList.add("menu--close");
link.classList.add("hamburger--close");

link.addEventListener ("click", function (evt) {
  evt.preventDefault();
  navigation.classList.toggle("menu--close");
  link.classList.toggle("hamburger--close");
  if (document.activeElement != document.body) document.activeElement.blur();
});

if (orderIndex) {
  orderIndex.addEventListener ("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-window--close");
  });
}

if (orderCatalog) {
  for (var i = 0; i <= (orderCatalog.length-1); i++) {
    orderCatalog[i].addEventListener ("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-window--close");
    });
  }
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modal.classList.add("modal-window--close");
  }
});
