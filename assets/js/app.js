$(".tab-nav a").on("click", function() {
    if ($(this).hasClass("active")) {
      return false;
    }

    console.log(this.hash);

    $(".tab-nav a").removeClass("active");
    $(this).addClass("active");

    $(".tab-content > div").removeClass("active");
    $(".tab-content > div")
      .filter(this.hash)
      .addClass("active");

    return false;
  });

