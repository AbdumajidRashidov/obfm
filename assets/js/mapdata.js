var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#190688",
    label_hover_color: "#190688",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "yes",
    hide_eastern_labels: "yes",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "yes",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "14px/1.5 Playfair display",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.2,
    link_text: "View Website",
    popups: "yes",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
    border_hover_color: "#190688"
  },
  state_specific: {
    UZB354: {
      name: `<p style="font-size:16px;margin-bottom:10px">Бухоро вилояти "Маҳалла" ҳайрия жамоат фонди</p>`,
      color: "#E5E5E5",
      hover_color: "#190688",
      description:` 
                      <div class="map_dacription_block">
                        <img src="../assets/img/buxoro.jpg" alt="img_map_buxara" width="120">
                        <div>
                        <h1 style="font-size:18px; line-height:20px;margin-bottom:5px">Ism SHarifi</h1>
                        <p>Lavozimi: Fond raisi</p>
                        <p>Tel raqami: +998977777777</p>
                        </div>
                      </div>
                      <p>Manzil: Buxoro shahar,Ahmad Donish ko'chasi,201-uy</p>                                    
      `
    },
    UZB355: {
      name: `<p style="font-size:16px;margin-bottom:10px">Хоразм вилояти "Маҳалла" ҳайрия жамоат фонди</p>`,
      color: "#E5E5E5",
      hover_color: "#190688",
      description:` 
                      <div class="map_dacription_block">
                        <img src="../assets/img/xorazm.jpg" alt="img_map_xorazm" width="120">
                        <div>
                        <h1 style="font-size:18px; line-height:20px;margin-bottom:5px">Ism SHarifi</h1>
                        <p>Lavozimi: Fond raisi</p>
                        <p>Tel raqami: +998977777777</p>
                        </div>
                      </div>
                      <p>Manzil: Xorazm shahar,Ahmad Donish ko'chasi,201-uy</p>                                    
      `
    },
    UZB356: {
      name: `<p style="font-size:16px;margin-bottom:10px">Қорақалпоғистон Республикаси <br>"Маҳалла" ҳайрия жамоат фонди</p>`,
      color: "#E5E5E5",
      hover_color: "#190688",
      description:` 
                      <div class="map_dacription_block">
                        <img src="../assets/img/qoraqalpogiston.jpg" alt="img_map_buxara" width="120">
                        <div>
                        <h1 style="font-size:18px; line-height:20px;margin-bottom:5px">Ism SHarifi</h1>
                        <p>Lavozimi: Fond raisi</p>
                        <p>Tel raqami: +998977777777</p>
                        </div>
                      </div>
                      <p>Manzil: Buxoro shahar,Ahmad Donish ko'chasi,201-uy</p>                                    
      `
    },
    UZB357: {
      name: `<p style="font-size:16px;margin-bottom:10px">Навоий вилояти "Маҳалла" ҳайрия жамоат фонди</p>`,
      color: "#E5E5E5",
      hover_color: "#190688",
      description:` 
                      <div class="map_dacription_block">
                        <img src="../assets/img/buxoro.jpg" alt="img_map_buxara" width="120">
                        <div>
                        <h1 style="font-size:18px; line-height:20px;margin-bottom:5px">Ism SHarifi</h1>
                        <p>Lavozimi: Fond raisi</p>
                        <p>Tel raqami: +998977777777</p>
                        </div>
                      </div>
                      <p>Manzil: Buxoro shahar,Ahmad Donish ko'chasi,201-uy</p>                                    
      `
    },
    UZB358: {
      name: "Samarkand",
      color: "#E5E5E5",
      hover_color: "#190688",
      description:` 
                      <div class="map_dacription_block">
                        <img src="../assets/img/buxoro.jpg" alt="img_map_buxara" width="120">
                        <div>
                        <h1 style="font-size:18px; line-height:20px;margin-bottom:5px">Ism SHarifi</h1>
                        <p>Lavozimi: Fond raisi</p>
                        <p>Tel raqami: +998977777777</p>
                        </div>
                      </div>
                      <p>Manzil: Buxoro shahar,Ahmad Donish ko'chasi,201-uy</p>                                    
      `
    },
    UZB361: {
      name: "Kashkadarya",
      color: "#E5E5E5",
      hover_color: "#190688",
      description:` 
                      <div class="map_dacription_block">
                        <img src="../assets/img/buxoro.jpg" alt="img_map_buxara" width="120">
                        <div>
                        <h1 style="font-size:18px; line-height:20px;margin-bottom:5px">Ism SHarifi</h1>
                        <p>Lavozimi: Fond raisi</p>
                        <p>Tel raqami: +998977777777</p>
                        </div>
                      </div>
                      <p>Manzil: Buxoro shahar,Ahmad Donish ko'chasi,201-uy</p>                                    
      `
    },
    UZB362: {
      name: "Surkhandarya",
      color: "#E5E5E5",
      hover_color: "#190688",
      description:` 
                      <div class="map_dacription_block">
                        <img src="../assets/img/buxoro.jpg" alt="img_map_buxara" width="120">
                        <div>
                        <h1 style="font-size:18px; line-height:20px;margin-bottom:5px">Ism SHarifi</h1>
                        <p>Lavozimi: Fond raisi</p>
                        <p>Tel raqami: +998977777777</p>
                        </div>
                      </div>
                      <p>Manzil: Buxoro shahar,Ahmad Donish ko'chasi,201-uy</p>                                    
      `
    },
    UZB363: {
      name: "Andijon",
      color: "#E5E5E5",
      hover_color: "#190688",
      description:` 
                      <div class="map_dacription_block">
                        <img src="../assets/img/buxoro.jpg" alt="img_map_buxara" width="120">
                        <div>
                        <h1 style="font-size:18px; line-height:20px;margin-bottom:5px">Ism SHarifi</h1>
                        <p>Lavozimi: Fond raisi</p>
                        <p>Tel raqami: +998977777777</p>
                        </div>
                      </div>
                      <p>Manzil: Buxoro shahar,Ahmad Donish ko'chasi,201-uy</p>                                    
      `
    },
    UZB364: {
      name: "Ferghana",
      color: "#E5E5E5",
      hover_color: "#190688",
      description:` 
                      <div class="map_dacription_block">
                        <img src="../assets/img/buxoro.jpg" alt="img_map_buxara" width="120">
                        <div>
                        <h1 style="font-size:18px; line-height:20px;margin-bottom:5px">Ism SHarifi</h1>
                        <p>Lavozimi: Fond raisi</p>
                        <p>Tel raqami: +998977777777</p>
                        </div>
                      </div>
                      <p>Manzil: Buxoro shahar,Ahmad Donish ko'chasi,201-uy</p>                                    
      `
    },
    UZB365: {
      name: "Namangan",
      color: "#E5E5E5",
      hover_color: "#190688",
      description:` 
                      <div class="map_dacription_block">
                        <img src="../assets/img/buxoro.jpg" alt="img_map_buxara" width="120">
                        <div>
                        <h1 style="font-size:18px; line-height:20px;margin-bottom:5px">Ism SHarifi</h1>
                        <p>Lavozimi: Fond raisi</p>
                        <p>Tel raqami: +998977777777</p>
                        </div>
                      </div>
                      <p>Manzil: Buxoro shahar,Ahmad Donish ko'chasi,201-uy</p>                                    
      `
    },
    UZB370: {
      name: "Jizzakh",
      color: "#E5E5E5",
      hover_color: "#190688",
      description:` 
                      <div class="map_dacription_block">
                        <img src="../assets/img/buxoro.jpg" alt="img_map_buxara" width="120">
                        <div>
                        <h1 style="font-size:18px; line-height:20px;margin-bottom:5px">Ism SHarifi</h1>
                        <p>Lavozimi: Fond raisi</p>
                        <p>Tel raqami: +998977777777</p>
                        </div>
                      </div>
                      <p>Manzil: Buxoro shahar,Ahmad Donish ko'chasi,201-uy</p>                                    
      `
    },
    UZB371: {
      name: "Sirdaryo",
      color: "#E5E5E5",
      hover_color: "#190688",
      description:` 
                      <div class="map_dacription_block">
                        <img src="../assets/img/buxoro.jpg" alt="img_map_buxara" width="120">
                        <div>
                        <h1 style="font-size:18px; line-height:20px;margin-bottom:5px">Ism SHarifi</h1>
                        <p>Lavozimi: Fond raisi</p>
                        <p>Tel raqami: +998977777777</p>
                        </div>
                      </div>
                      <p>Manzil: Buxoro shahar,Ahmad Donish ko'chasi,201-uy</p>                                    
      `
    },
    UZB372: {
      name: "Tashkent vil",
      color: "#E5E5E5",
      hover_color: "#190688",
      description:` 
                      <div class="map_dacription_block">
                        <img src="../assets/img/buxoro.jpg" alt="img_map_buxara" width="120">
                        <div>
                        <h1 style="font-size:18px; line-height:20px;margin-bottom:5px">Ism SHarifi</h1>
                        <p>Lavozimi: Fond raisi</p>
                        <p>Tel raqami: +998977777777</p>
                        </div>
                      </div>
                      <p>Manzil: Buxoro shahar,Ahmad Donish ko'chasi,201-uy</p>                                    
      `
    },
    UZB4828: {
      name: "Tashkent",
      color: "#E5E5E5",
      hover_color: "#190688",
      scale:"yes",
      description:` 
                      <div class="map_dacription_block">
                        <img src="../assets/img/buxoro.jpg" alt="img_map_buxara" width="120">
                        <div>
                        <h1 style="font-size:18px; line-height:20px;margin-bottom:5px">Ism SHarifi</h1>
                        <p>Lavozimi: Fond raisi</p>
                        <p>Tel raqami: +998977777777</p>
                        </div>
                      </div>
                      <p>Manzil: Buxoro shahar,Ahmad Donish ko'chasi,201-uy</p>                                    
      `
    }
  },
  locations: {
    "0": {
      lat: "41.316667",
      lng: "69.25",
      name: "Tashkent",
      description:` 
                      <div class="map_dacription_block">
                        <img src="../assets/img/buxoro.jpg" alt="img_map_buxara" width="120">
                        <div>
                        <h1 style="font-size:18px; line-height:20px;margin-bottom:5px">Ism SHarifi</h1>
                        <p>Lavozimi: Fond raisi</p>
                        <p>Tel raqami: +998977777777</p>
                        </div>
                      </div>
                      <p>Manzil: Buxoro shahar,Ahmad Donish ko'chasi,201-uy</p>                                    
      `
    }
  },
  regions: {},
  data: {
    data: {}
  }
};