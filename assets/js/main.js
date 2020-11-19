$('.single-item-hero').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false
  });
  $('.single-item').slick({
    infinite: true,
    dots: false,
    speed: 500,
    cssEase: 'linear',
    autoplay:false,
    autoplaySpeed:2000,
    
  });
  $('.single-item-testimonials').slick({
    infinite: true,
    dots: true,
    speed: 500,
    arrows:false,
    cssEase: 'linear',
    autoplay:true,
    autoplaySpeed:2000,
  });
  $('.section4_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows:true,
    speed: 500,
    ssEase: 'linear',
    dots:false,
    infinite:true,
    autoplaySpeed: 2000,
  });
  $('.section4_slider2').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows:true,
    speed: 500,
    ssEase: 'linear',
    dots:false,
    infinite:true,
    autoplaySpeed: 2000,
  });
  $('.section4_slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    speed: 500,
    ssEase: 'linear',
    dots:false,
    infinite:true,
    autoplaySpeed: 2000,
  });

  //statistika pie chart
  am4core.ready(function() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    var chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.legend = new am4charts.Legend();
    
    chart.data = [
      {
        country: "Ногиронлиги бўлган шахслар",
        litres: 501.9
      },
      {
        country: "Якка-ёлғиз кексалар",
        litres: 301.9
      },
      {
        country: "Уруш ва меҳнат фахрийлари",
        litres: 201.1
      },
      {
        country: "Кам таъминланган оила",
        litres: 165.8
      },
      {
        country: "Ижтимоий ҳимояга муҳтож оила",
        litres: 139.9
      },
      {
        country: "Боқувчисини йўқотган оила",
        litres: 128.3
      },
      {
        country: "Кўп фарзандли оила",
        litres: 99
      },
      {
        country: "Табиий офатдан жабр кўрганлар",
        litres: 60
      },
    ];
  
    var series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    
    }); // end am4core.ready()
 
  function myFunction10() {
    document.getElementById("SECTION21").style.fontSize= "30px";
    document.getElementById("SECTION22").style.fontSize= "90%";
    document.getElementById("SECTION23").style.fontSize= "90%";
    document.getElementById("SECTION24").style.fontSize= "90%";
    document.getElementById("SECTION25").style.fontSize= "90%";
    document.getElementById("SECTION26").style.fontSize= "90%";
    document.getElementById("SECTION27").style.fontSize= "90%";
    document.getElementById("SECTION28").style.fontSize= "90%";
    document.getElementById("SECTION29").style.fontSize= "90%";
    document.getElementById("SECTION31").style.fontSize= "30px";
    document.getElementById("SECTION32").style.fontSize= "90%";
    document.getElementById("SECTION33").style.fontSize= "90%";
    document.getElementById("SECTION34").style.fontSize= "90%";
    document.getElementById("SECTION35").style.fontSize= "90%";
    document.getElementById("SECTION36").style.fontSize= "90%";
    document.getElementById("SECTION37").style.fontSize= "90%";
    document.getElementById("SECTION38").style.fontSize= "90%";
    document.getElementById("SECTION39").style.fontSize= "90%";
    document.getElementById("SECTION310").style.fontSize= "90%";
    document.getElementById("SECTION41").style.fontSize= "30px";
    document.getElementById("SECTION42").style.fontSize= "20px";
    document.getElementById("SECTION43").style.fontSize= "90%";
    document.getElementById("SECTION44").style.fontSize= "90%";
    document.getElementById("SECTION45").style.fontSize= "20px";
    document.getElementById("SECTION46").style.fontSize= "90%";
    document.getElementById("SECTION47").style.fontSize= "90%";
    document.getElementById("SECTION48").style.fontSize= "20px";
    document.getElementById("SECTION49").style.fontSize= "90%";
    document.getElementById("SECTION410").style.fontSize= "90%";
    document.getElementById("SECTION411").style.fontSize= "20px";
    document.getElementById("SECTION412").style.fontSize= "90%";
    document.getElementById("SECTION413").style.fontSize= "90%";
    document.getElementById("SECTION414").style.fontSize= "20px";
    document.getElementById("SECTION415").style.fontSize= "90%";
    document.getElementById("SECTION416").style.fontSize= "90%";
    document.getElementById("SECTION417").style.fontSize= "20px";
    document.getElementById("SECTION418").style.fontSize= "90%";
    document.getElementById("SECTION419").style.fontSize= "90%";
    document.getElementById("SECTION51").style.fontSize= "90%";
    document.getElementById("SECTION52").style.fontSize= "90%";
    document.getElementById("SECTION53").style.fontSize= "90%";
    document.getElementById("SECTION54").style.fontSize= "90%";
    document.getElementById("SECTION55").style.fontSize= "90%";
    document.getElementById("SECTION56").style.fontSize= "90%";
    document.getElementById("SECTION71").style.fontSize= "30px";
    document.getElementById("SECTION72").style.fontSize= "90%";
    document.getElementById("SECTION61").style.fontSize= "30px";
    document.getElementById("SECTION62").style.fontSize= "80%";
    document.getElementById("SECTION63").style.fontSize= "80%";
    document.getElementById("SECTION64").style.fontSize= "80%";
    document.getElementById("SECTION65").style.fontSize= "80%";
    document.getElementById("SECTION81").style.fontSize= "30px";
    document.getElementById("SECTION91").style.fontSize= "30px";
    document.getElementById("SECTION92").style.fontSize= "30px";
    document.getElementById("SECTION93").style.fontSize= "90%";
    document.getElementById("SECTION94").style.fontSize= "90%";
    document.getElementById("SECTION95").style.fontSize= "90%";
    document.getElementById("SECTION121").style.fontSize= "90%";
    document.getElementById("SECTION122").style.fontSize= "90%";
    document.getElementById("SECTION123").style.fontSize= "90%";
    document.getElementById("SECTION124").style.fontSize= "90%";
    document.getElementById("SECTION125").style.fontSize= "90%";
    document.getElementById("SECTION126").style.fontSize= "90%";
    document.getElementById("SECTION127").style.fontSize= "90%";
    document.getElementById("SECTION128").style.fontSize= "90%";
    document.getElementById("SECTION129").style.fontSize= "90%";
    document.getElementById("SECTION1210").style.fontSize= "90%";
    document.getElementById("SECTION1211").style.fontSize= "90%";
    document.getElementById("SECTION1212").style.fontSize= "90%";
    document.getElementById("SECTION1213").style.fontSize= "90%";
    document.getElementById("SECTION1214").style.fontSize= "90%";
    document.getElementById("SECTION1215").style.fontSize= "90%";
    document.getElementById("SECTION1216").style.fontSize= "90%";
    document.getElementById("SECTION1217").style.fontSize= "90%";
    document.getElementById("SECTION1218").style.fontSize= "90%";
    document.getElementById("SECTION1219").style.fontSize= "90%";
    document.getElementById("SECTION1220").style.fontSize= "90%";
    document.getElementById("SECTION1221").style.fontSize= "90%";
    document.getElementById("SECTION1222").style.fontSize= "90%";
    document.getElementById("SECTION1223").style.fontSize= "90%";
    document.getElementById("SECTION1224").style.fontSize= "90%";
    document.getElementById("SECTION1225").style.fontSize= "90%";
    document.getElementById("SECTION1226").style.fontSize= "90%";
    document.getElementById("SECTION1227").style.fontSize= "90%";
    document.getElementById("SECTION1228").style.fontSize= "90%";
    document.getElementById("SECTION1229").style.fontSize= "90%";
    document.getElementById("SECTION1230").style.fontSize= "90%";
    document.getElementById("SECTION1231").style.fontSize= "90%";
    document.getElementById("SECTION1232").style.fontSize= "90%";
  }
  function myFunction14() {
    document.getElementById("SECTION21").style.fontSize= "40px";
    document.getElementById("SECTION22").style.fontSize= "96%";
    document.getElementById("SECTION23").style.fontSize= "96%";
    document.getElementById("SECTION24").style.fontSize= "96%";
    document.getElementById("SECTION25").style.fontSize= "96%";
    document.getElementById("SECTION26").style.fontSize= "96%";
    document.getElementById("SECTION27").style.fontSize= "96%";
    document.getElementById("SECTION28").style.fontSize= "96%";
    document.getElementById("SECTION29").style.fontSize= "96%";
    document.getElementById("SECTION31").style.fontSize= "40px";
    document.getElementById("SECTION32").style.fontSize= "96%";
    document.getElementById("SECTION33").style.fontSize= "96%";
    document.getElementById("SECTION34").style.fontSize= "96%";
    document.getElementById("SECTION35").style.fontSize= "96%";
    document.getElementById("SECTION36").style.fontSize= "96%";
    document.getElementById("SECTION37").style.fontSize= "96%";
    document.getElementById("SECTION38").style.fontSize= "96%";
    document.getElementById("SECTION39").style.fontSize= "96%";
    document.getElementById("SECTION310").style.fontSize= "96%";
    document.getElementById("SECTION41").style.fontSize= "40px";
    document.getElementById("SECTION42").style.fontSize= "24px";
    document.getElementById("SECTION43").style.fontSize= "96%";
    document.getElementById("SECTION44").style.fontSize= "96%";
    document.getElementById("SECTION45").style.fontSize= "24px";
    document.getElementById("SECTION46").style.fontSize= "96%";
    document.getElementById("SECTION47").style.fontSize= "96%";
    document.getElementById("SECTION48").style.fontSize= "24px";
    document.getElementById("SECTION49").style.fontSize= "96%";
    document.getElementById("SECTION410").style.fontSize= "96%";
    document.getElementById("SECTION411").style.fontSize= "24px";
    document.getElementById("SECTION412").style.fontSize= "96%";
    document.getElementById("SECTION413").style.fontSize= "96%";
    document.getElementById("SECTION414").style.fontSize= "24px";
    document.getElementById("SECTION415").style.fontSize= "96%";
    document.getElementById("SECTION416").style.fontSize= "96%";
    document.getElementById("SECTION417").style.fontSize= "24px";
    document.getElementById("SECTION418").style.fontSize= "96%";
    document.getElementById("SECTION419").style.fontSize= "96%";
    document.getElementById("SECTION51").style.fontSize= "96%";
    document.getElementById("SECTION52").style.fontSize= "96%";
    document.getElementById("SECTION53").style.fontSize= "96%";
    document.getElementById("SECTION54").style.fontSize= "96%";
    document.getElementById("SECTION55").style.fontSize= "96%";
    document.getElementById("SECTION56").style.fontSize= "96%";
    document.getElementById("SECTION71").style.fontSize= "40px";
    document.getElementById("SECTION72").style.fontSize= "96%";
    document.getElementById("SECTION61").style.fontSize= "40px";
    document.getElementById("SECTION62").style.fontSize= "90%";
    document.getElementById("SECTION63").style.fontSize= "90%";
    document.getElementById("SECTION64").style.fontSize= "90%";
    document.getElementById("SECTION65").style.fontSize= "90%";
    document.getElementById("SECTION81").style.fontSize= "40px";
    document.getElementById("SECTION91").style.fontSize= "40px";
    document.getElementById("SECTION92").style.fontSize= "40px";
    document.getElementById("SECTION93").style.fontSize= "96%";
    document.getElementById("SECTION94").style.fontSize= "96%";
    document.getElementById("SECTION95").style.fontSize= "96%";
    document.getElementById("SECTION121").style.fontSize= "96%";
    document.getElementById("SECTION122").style.fontSize= "96%";
    document.getElementById("SECTION123").style.fontSize= "96%";
    document.getElementById("SECTION124").style.fontSize= "96%";
    document.getElementById("SECTION125").style.fontSize= "96%";
    document.getElementById("SECTION126").style.fontSize= "96%";
    document.getElementById("SECTION127").style.fontSize= "96%";
    document.getElementById("SECTION128").style.fontSize= "96%";
    document.getElementById("SECTION129").style.fontSize= "96%";
    document.getElementById("SECTION1210").style.fontSize= "96%";
    document.getElementById("SECTION1211").style.fontSize= "96%";
    document.getElementById("SECTION1212").style.fontSize= "96%";
    document.getElementById("SECTION1213").style.fontSize= "96%";
    document.getElementById("SECTION1214").style.fontSize= "96%";
    document.getElementById("SECTION1215").style.fontSize= "96%";
    document.getElementById("SECTION1216").style.fontSize= "96%";
    document.getElementById("SECTION1217").style.fontSize= "96%";
    document.getElementById("SECTION1218").style.fontSize= "96%";
    document.getElementById("SECTION1219").style.fontSize= "96%";
    document.getElementById("SECTION1220").style.fontSize= "96%";
    document.getElementById("SECTION1221").style.fontSize= "96%";
    document.getElementById("SECTION1222").style.fontSize= "96%";
    document.getElementById("SECTION1223").style.fontSize= "96%";
    document.getElementById("SECTION1224").style.fontSize= "96%";
    document.getElementById("SECTION1225").style.fontSize= "96%";
    document.getElementById("SECTION1226").style.fontSize= "96%";
    document.getElementById("SECTION1227").style.fontSize= "96%";
    document.getElementById("SECTION1228").style.fontSize= "96%";
    document.getElementById("SECTION1229").style.fontSize= "96%";
    document.getElementById("SECTION1230").style.fontSize= "96%";
    document.getElementById("SECTION1231").style.fontSize= "96%";
    document.getElementById("SECTION1232").style.fontSize= "96%";
  }
  function myFunction18() {
    document.getElementById("SECTION21").style.fontSize= "43px";
    document.getElementById("SECTION22").style.fontSize= "24PX";
    document.getElementById("SECTION23").style.fontSize= "20PX";
    document.getElementById("SECTION24").style.fontSize= "43PX";
    document.getElementById("SECTION25").style.fontSize= "24PX";
    document.getElementById("SECTION26").style.fontSize= "20PX";
    document.getElementById("SECTION27").style.fontSize= "43PX";
    document.getElementById("SECTION28").style.fontSize= "24PX";
    document.getElementById("SECTION29").style.fontSize= "20PX";
    document.getElementById("SECTION31").style.fontSize= "43px";
    document.getElementById("SECTION32").style.fontSize= "20PX";
    document.getElementById("SECTION33").style.fontSize= "20PX";
    document.getElementById("SECTION34").style.fontSize= "20PX";
    document.getElementById("SECTION35").style.fontSize= "20PX";
    document.getElementById("SECTION36").style.fontSize= "20PX";
    document.getElementById("SECTION37").style.fontSize= "20PX";
    document.getElementById("SECTION38").style.fontSize= "20PX";
    document.getElementById("SECTION39").style.fontSize= "20PX";
    document.getElementById("SECTION310").style.fontSize= "20PX";
    document.getElementById("SECTION41").style.fontSize= "43px";
    document.getElementById("SECTION42").style.fontSize= "28px";
    document.getElementById("SECTION43").style.fontSize= "24PX";
    document.getElementById("SECTION44").style.fontSize= "24PX";
    document.getElementById("SECTION45").style.fontSize= "28px";
    document.getElementById("SECTION46").style.fontSize= "24PX";
    document.getElementById("SECTION47").style.fontSize= "24PX";
    document.getElementById("SECTION48").style.fontSize= "28px";
    document.getElementById("SECTION49").style.fontSize= "24PX";
    document.getElementById("SECTION410").style.fontSize= "24PX";
    document.getElementById("SECTION411").style.fontSize= "28px";
    document.getElementById("SECTION412").style.fontSize= "24PX";
    document.getElementById("SECTION413").style.fontSize= "24PX";
    document.getElementById("SECTION414").style.fontSize= "28px";
    document.getElementById("SECTION415").style.fontSize= "24PX";
    document.getElementById("SECTION416").style.fontSize= "24PX";
    document.getElementById("SECTION417").style.fontSize= "28px";
    document.getElementById("SECTION418").style.fontSize= "24PX";
    document.getElementById("SECTION419").style.fontSize= "24PX";
    document.getElementById("SECTION51").style.fontSize= "24PX";
    document.getElementById("SECTION52").style.fontSize= "24PX";
    document.getElementById("SECTION53").style.fontSize= "24PX";
    document.getElementById("SECTION54").style.fontSize= "24PX";
    document.getElementById("SECTION55").style.fontSize= "24PX";
    document.getElementById("SECTION56").style.fontSize= "24PX";
    document.getElementById("SECTION71").style.fontSize= "45px";
    document.getElementById("SECTION72").style.fontSize= "22PX";
    document.getElementById("SECTION61").style.fontSize= "42px";
    document.getElementById("SECTION62").style.fontSize= "24PX";
    document.getElementById("SECTION63").style.fontSize= "24PX";
    document.getElementById("SECTION64").style.fontSize= "24PX";
    document.getElementById("SECTION65").style.fontSize= "24PX";
    document.getElementById("SECTION81").style.fontSize= "60px";
    document.getElementById("SECTION91").style.fontSize= "45px";
    document.getElementById("SECTION92").style.fontSize= "44px";
    document.getElementById("SECTION93").style.fontSize= "24PX";
    document.getElementById("SECTION94").style.fontSize= "24PX";
    document.getElementById("SECTION95").style.fontSize= "24PX";
    document.getElementById("SECTION121").style.fontSize= "24PX";
    document.getElementById("SECTION122").style.fontSize= "24PX";
    document.getElementById("SECTION123").style.fontSize= "24PX";
    document.getElementById("SECTION124").style.fontSize= "24PX";
    document.getElementById("SECTION125").style.fontSize= "24PX";
    document.getElementById("SECTION126").style.fontSize= "24PX";
    document.getElementById("SECTION127").style.fontSize= "24PX";
    document.getElementById("SECTION128").style.fontSize= "24PX";
    document.getElementById("SECTION129").style.fontSize= "24PX";
    document.getElementById("SECTION1210").style.fontSize= "24PX";
    document.getElementById("SECTION1211").style.fontSize= "24PX";
    document.getElementById("SECTION1212").style.fontSize= "24PX";
    document.getElementById("SECTION1213").style.fontSize= "24PX";
    document.getElementById("SECTION1214").style.fontSize= "24PX";
    document.getElementById("SECTION1215").style.fontSize= "24PX";
    document.getElementById("SECTION1216").style.fontSize= "24PX";
    document.getElementById("SECTION1217").style.fontSize= "24PX";
    document.getElementById("SECTION1218").style.fontSize= "24PX";
    document.getElementById("SECTION1219").style.fontSize= "24PX";
    document.getElementById("SECTION1220").style.fontSize= "24PX";
    document.getElementById("SECTION1221").style.fontSize= "24PX";
    document.getElementById("SECTION1222").style.fontSize= "24PX";
    document.getElementById("SECTION1223").style.fontSize= "24PX";
    document.getElementById("SECTION1224").style.fontSize= "24PX";
    document.getElementById("SECTION1225").style.fontSize= "24PX";
    document.getElementById("SECTION1226").style.fontSize= "24PX";
    document.getElementById("SECTION1227").style.fontSize= "24PX";
    document.getElementById("SECTION1228").style.fontSize= "24PX";
    document.getElementById("SECTION1229").style.fontSize= "24PX";
    document.getElementById("SECTION1230").style.fontSize= "24PX";
    document.getElementById("SECTION1231").style.fontSize= "24PX";
    document.getElementById("SECTION1232").style.fontSize= "24PX";
  }
  function myFunctionFilterBlack(){
    document.querySelector(".section1").style.backgroundColor= "#17212B";
    document.querySelector(".header").style.backgroundColor= "#0E1621";
    document.querySelector(".section2").style.backgroundColor= "#17212B";
    document.querySelector(".yangiliklar").style.backgroundColor= "#0E1621";
    document.querySelector(".section4").style.backgroundColor= "#17212B";
    document.querySelector(".slick-track").style.backgroundColor= "#0E1621";
    document.querySelector(".section4_item").style.backgroundColor= "#17212B";
    
  }



  //sidebar
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  ScrollReveal({ duration: 2000 });
  ScrollReveal().reveal('.header' , {delay:300});
  ScrollReveal().reveal('.slide_fond_news_item',{delay:400});
  ScrollReveal().reveal('.y',{delay:400});
  ScrollReveal().reveal('.section4_slider',{delay:400});
  ScrollReveal().reveal('.single-item-testimonials',{delay:300});
  ScrollReveal().reveal('.quote1',{delay:400});
  ScrollReveal().reveal('.quote2',{delay:400});
  ScrollReveal().reveal('.section6_head',{delay:400});
  ScrollReveal().reveal('.y',{delay:400});
  ScrollReveal().reveal('.section4_slider',{delay:400});
  ScrollReveal().reveal('.single-item-testimonials',{delay:400});
  ScrollReveal().reveal('.quote1',{delay:400});
  ScrollReveal().reveal('.quote2',{delay:400});
  ScrollReveal().reveal('.section6_head',{delay:400});
  ScrollReveal().reveal('.section6_left',{delay:400});
  ScrollReveal().reveal('.section6_right',{delay:400});
  ScrollReveal().reveal('.mediateka',{delay:400});
  ScrollReveal().reveal('.mediateka_left',{delay:400});
  ScrollReveal().reveal('.mediateka_right',{delay:400});
  ScrollReveal().reveal('.statistika',{delay:400});
  ScrollReveal().reveal('.Pay',{delay:400});
  ScrollReveal().reveal('.foydali_havolalar_wrapper',{delay:400});
  ScrollReveal().reveal('.foydali_havolalar',{delay:400});
  ScrollReveal().reveal('.section11',{delay:400});
  ScrollReveal().reveal('.footer',{delay:400});
  ScrollReveal().reveal('.single-item-hero-p',{delay:1000});