function mouseOverNav(i) {
  document.querySelectorAll(".nav-item").forEach((element, index) => {
    if (index == i) {
      element.classList.add("underScore");
    }
  });
}

function mouseOutNav(i) {
  document.querySelectorAll(".nav-item").forEach((element, index) => {
    if (index == i) {
      element.classList.remove("underScore");
    }
  });
}
window.onscroll = function () {
  var rectHeader = showHeader.getClientRects()[0];

  if (rectHeader.y <= -40) {
    document.querySelector("#head").classList.add("turnOnHeader");
  } else {
    document.querySelector("#head").classList.remove("turnOnHeader");
  }
};
function mouseOverNavMenu(i) {
  document.querySelectorAll(".checkunder").forEach((element, index) => {
    if (index == i) {
      element.classList.add("underScoreWhite");
    }
  });
}

function mouseOutNavMenu(i) {
  document.querySelectorAll(".checkunder").forEach((element, index) => {
    if (index == i) {
      element.classList.remove("underScoreWhite");
    }
  });
}
function MenuMobile() {
  var menu = document.querySelector("#menuForMobile");
  if (menu.classList.contains("blockMenu")) {
    menu.classList.remove("blockMenu");
  } else {
    menu.classList.add("blockMenu");
  }
}
