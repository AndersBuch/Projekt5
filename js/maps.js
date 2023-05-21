

async function initMap(){

  // Map option
    var options = {
      center: { lat: 55.39594, lng: 10.38831 },
      zoom: 12,
      disableDefaultUI: true,
      zoomControl: true,
      fullscreenControl: true,
    }

    // New Map
    map = new google.maps.Map(document.getElementById("map"), options)



   // Keep track of the currently opened info window
    let currentInfoWindow = null;

   // Add marker
    function addMarker(property) {
  const marker = new google.maps.Marker({
    position: property.location,
    map: map,
    icon: property.imageIcon,
  });

   // Add Window
      const detailWindow = new google.maps.InfoWindow({
    content: property.content,
  });

   // Add click event for markers to display infowindow
     marker.addListener("click", () => {
   // Close the currently opened info window, if any
    if (currentInfoWindow) {
      currentInfoWindow.close();
    }

    // Open the new info window
    detailWindow.open(map, marker);

    // Set the newly opened info window as the current info window
    currentInfoWindow = detailWindow;
  });
  
  
      

  }

  // Add markers with content , 
  
  addMarker({location:{ lat: 55.39435162532834, lng: 10.356862676330612 },          // Lyn 1 - CCS-Combo Circle K
  imageIcon: "https://buchdesigns.dk/img/baseline_location_pin_black_36dp.png",
  content:
  '<div id="content" style="width: 200px; height: 220px">'+
    '<div id="bodyContent>'+
      '<div id="adr" style="width: 180px;"><h3>Middelfartvej 53, 5200 Odense</h3></div>'+
      '<hr></hr>'+
      '<div><p id="mapinfo" style="font-size: 15px;"><b>Stiktype:</b> CCS-Combo</p></div>'+
      '<div><p id="mapinfo" style="font-size: 15px;"><b>Antal:</b> 2</p></div>'+
      '<div><p id="mapinfo" style="font-size: 15px;"><b>Hastighedstype:</b> Lyn&nbsp;<span style="font-size: 12px; color: rgb(126, 126, 126);">(150kW)</span></p></div>'+
      '<div><p id="mapinfo" style="font-size: 15px;"><b>Udbyder:</b> Circle K</p></div>'+
    '</div>'+
  '</div>'
  
  });

  addMarker({location:{ lat: 55.37786938684984, lng: 10.431300556754865 },          // Lyn 2 - CCS-Combo CLEVER
  imageIcon: "https://buchdesigns.dk/img/baseline_location_pin_black_36dp.png",
  content:
  '<div id="content" style="width: 200px; height: 220px">'+
    '<div id="bodyContent>'+
      '<div id="adr" style="width: 180px;"><h3>Niels Bohrs Alle 150, 5230 Odense</h3></div>'+
      '<hr></hr>'+
      '<div><p id="mapinfo" style="font-size: 15px;"><b>Stiktype:</b> CCS-Combo</p></div>'+
      '<div><p id="mapinfo" style="font-size: 15px;"><b>Antal:</b> 2</p></div>'+
      '<div><p id="mapinfo" style="font-size: 15px;"><b>Hastighedstype:</b> Lyn&nbsp;<span style="font-size: 12px; color: rgb(126, 126, 126);">(150kW)</span></p></div>'+
      '<div><p id="mapinfo" style="font-size: 15px;"><b>Udbyder:</b> CLEVER</p></div>'+
    '</div>'+
  '</div>'
  
  });

  addMarker({location:{ lat: 55.354487237305484, lng: 10.423615957124706 },          // Lyn 3 - CCS-Combo OK & Vestas
  imageIcon: "https://buchdesigns.dk/img/baseline_location_pin_black_36dp.png",
  content:
  '<div id="content" style="width: 200px; height: 220px">'+
    '<div id="bodyContent>'+
      '<div id="adr" style="width: 180px;"><h3>Glisholmvej 5, 5260 Odense</h3></div>'+
      '<hr></hr>'+
      '<div><p id="mapinfo" style="font-size: 15px;"><b>Stiktype:</b> CCS-Combo</p></div>'+
      '<div><p id="mapinfo" style="font-size: 15px;"><b>Antal:</b> 6</p></div>'+
      '<div><p id="mapinfo" style="font-size: 15px;"><b>Hastighedstype:</b> Lyn&nbsp;<span style="font-size: 12px; color: rgb(126, 126, 126);">(300kW)</span></p></div>'+
      '<div><p id="mapinfo" style="font-size: 15px;"><b>Udbyder:</b> OK</p></div>'+
    '</div>'+
  '</div>'
  
  });

  addMarker({location:{ lat: 55.3794920912252, lng: 10.396392955889986 },          // Hurtig 1 - CCS-Combo OK  
  imageIcon: "https://buchdesigns.dk/img/baseline_location_pin_black_36dp.png",
  content:
  '<div id="content" style="width: 200px; height: 220px">'+
    '<div id="bodyContent>'+
      '<div id="adr" style="width: 180px;"><h3>Hjallesevej 144, 5230 Odense M</h3></div>'+
      '<hr></hr>'+
      '<div><p id="mapinfo" style="font-size: 15px;"><b>Stiktype:</b> CCS-Combo</p></div>'+
      '<div><p id="mapinfo" style="font-size: 15px;"><b>Antal:</b> 2</p></div>'+
      '<div><p id="mapinfo" style="font-size: 15px;"><b>Hastighedstype:</b> Hurtig&nbsp;<span style="font-size: 12px; color: rgb(126, 126, 126);">(75kW)</span></p></div>'+
      '<div><p id="mapinfo" style="font-size: 15px;"><b>Udbyder:</b> OK</p></div>'+
    '</div>'+
  '</div>'
  
  });

}
















