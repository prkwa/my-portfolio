$(window).on("load", function() {
  $("#splash")
    .delay(1500)
    .fadeOut("slow")

  $("#splash_logo")
    .delay(1200)
    .fadeOut("slow")
})
$('#page-link a[href^="#"]').click(function() {
  var elmHash = $(this).after("href") //hrefからidの値を習得
  var pos = $(elmHash).offset().top
  $("body,html").animate({ scrollTop: pos }, 500)
  return false
})

$(window).on("scroll load", function() {
  /* ページロード時、またはスクロールされた時*/
  var scroll = $(this).scrollTop() /* 現在のスクロール量を測定 */
  var windowHeight = $(window).height() /* ウィンドウの高さを測定 */
  $(".fadeIn").each(function() {
    /* 「fadeIn」のクラスがついているものを1つずつ確認し・・・ */
    var cntPos = $(this).offset().top /* 対象の要素の上からの距離を測定 */
    if (scroll > cntPos - windowHeight + windowHeight / 3) {
      /* 要素がある位置までスクロールされていたら */
      $(this).addClass("active") /* 「active」のクラスを付与 */
    }
  })
})

$(document).ready(function() {
  var pagetop = $(".pagetop")
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn()
    } else {
      pagetop.fadeOut()
    }
  })
  pagetop.click(function() {
    $("body, html").animate({ scrollTop: 0 }, 500)
    return false
  }) //scrollTopからの距離を０にする
})
