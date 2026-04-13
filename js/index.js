$(function () {
  let page1 = $(".page1").offset().top;
  console.log(page1);
  let page2 = $(".page2").offset().top;
  console.log(page2);
  let page3 = $(".page3").offset().top;
  console.log(page3);
  let page4 = $(".page4").offset().top;
  console.log(page4);
  let page5 = $(".page5").offset().top;
  console.log(page5);

  $("header li").on("click", function () {
    // 한꺼번에 구할시:
    // let page1 = $(".page1").offset().top;
    // console.log(page1);
    // let page2 = $(".page2").offset().top;
    // console.log(page2);
    // let page3 = $(".page3").offset().top;
    // console.log(page3);
    // let page4 = $(".page4").offset().top;
    // console.log(page4);

    // ================================
    //각각을 index 사용하여 구할시:
    let i = $(this).index();
    // console.log(i);
    let target = $("section").eq(i).offset().top;
    // console.log(target);

    $("html, body").stop().animate({ scrollTop: target });

    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
  });

  $("#navi li").on("click", function () {
    $("#navi li").removeClass("on");
    $(this).addClass("on");
    let i = $(this).index();
    let target = $("section").eq(i).offset().top;

    $("html, body").stop().animate({ scrollTop: target });
  });

  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    console.log(scroll);
    // if (0 < scroll < 918) {
    //   $("#navi li:first-child").addClass("on");
    // }
    // if (918 < scroll < 1836) {
    //   $("#navi li:nth-child(2)").addClass("on");
    // }
    // if (1836 < scroll < 2754) {
    //   $("#navi li:nth-child(3)").addClass("on");
    // }
    // if (2754 < scroll) {
    //   $("#navi li:nth-child(4)").addClass("on");
    // }

    base = -400;

    if (scroll >= page1 + base && scroll < page2 + base) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(0).addClass("on");
      $("section").removeClass("on");
      $(".page1").addClass("on");
    } else if (scroll >= page2 + base && scroll < page3 + base) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(1).addClass("on");
      $("section").removeClass("on");
      $(".page2").addClass("on");
    } else if (scroll >= page3 + base && scroll < page4 + base) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(2).addClass("on");
      $("section").removeClass("on");
      $(".page3").addClass("on");
    } else if (scroll >= page4 + base && scroll < page5 + base) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(3).addClass("on");
      $("section").removeClass("on");
      $(".page4").addClass("on");
    } else {
      $("#navi li").removeClass("on");
      $("#navi li").eq(4).addClass("on");
      $("section").removeClass("on");
      $(".page5").addClass("on");
    }
  });
});
