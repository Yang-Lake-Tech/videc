$(document).ready(function () {
  // Add scrollspy to <body>
  // $("body").scrollspy({ target: ".navbar", offset: 0 });

  // if (window.location.hash) {
  //   let hash = window.location.hash;
  //   $("html, body").animate(
  //     {
  //       scrollTop: $(hash + "1").offset().top,
  //     },
  //     1400,
  //     "easeInOutExpo",
  //     function () {
  //       // Add hash (#) to URL when done scrolling (default click behavior)
  //       window.location.hash = hash;
  //     }
  //   );
  // }
  $(".toggle-menu").click(function () {
    $("#menu").toggleClass("active");
  });
  $(".menu i").click(function () {
    $(this).next().toggleClass("active");
  });
});
