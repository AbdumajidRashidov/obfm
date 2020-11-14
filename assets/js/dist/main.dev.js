"use strict";

$('.fade').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
});
$('.single-item').slick({
  infinite: true,
  dots: false,
  speed: 500,
  cssEase: 'linear',
  autoplay: false,
  autoplaySpeed: 2000
});
$('.single-item-testimonials').slick({
  infinite: true,
  dots: true,
  speed: 500,
  arrows: false,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000
});
$('.section4_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  speed: 500,
  ssEase: 'linear',
  dots: false,
  infinite: true,
  autoplaySpeed: 2000
}); //statistika pie chart

am4core.ready(function () {
  // Themes begin
  am4core.useTheme(am4themes_animated); // Themes end

  var chart = am4core.create("chartdiv", am4charts.PieChart3D);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

  chart.legend = new am4charts.Legend();
  chart.data = [{
    country: "Ногиронлиги бўлган шахслар",
    litres: 501.9
  }, {
    country: "Якка-ёлғиз кексалар",
    litres: 301.9
  }, {
    country: "Уруш ва меҳнат фахрийлари",
    litres: 201.1
  }, {
    country: "Кам таъминланган оила",
    litres: 165.8
  }, {
    country: "Ижтимоий ҳимояга муҳтож оила",
    litres: 139.9
  }, {
    country: "Боқувчисини йўқотган оила",
    litres: 128.3
  }, {
    country: "Кўп фарзандли оила",
    litres: 99
  }, {
    country: "Табиий офатдан жабр кўрганлар",
    litres: 60
  }];
  var series = chart.series.push(new am4charts.PieSeries3D());
  series.dataFields.value = "litres";
  series.dataFields.category = "country";
}); // end am4core.ready()

new WOW().init();

(function ($) {
  new WOW().init();
})(jQuery);