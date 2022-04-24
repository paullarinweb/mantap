function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

//  burger menu
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

$(document).ready(() => {
  const onScrollHeader = () => {
    const header = $(".header");
    let prevScroll = $(window).scrollTop();
    let currentScroll;
    $(window).scroll(() => {
      currentScroll = $(window).scrollTop();
      const headerHidden = () => header.hasClass("header_hidden");
      if (currentScroll > prevScroll && !headerHidden()) {
        header.addClass("header_hidden");
      }
      if (currentScroll < prevScroll && headerHidden()) {
        header.removeClass("header_hidden"); 
      }
      prevScroll = currentScroll; 
    });
  };
  onScrollHeader(); 
});
