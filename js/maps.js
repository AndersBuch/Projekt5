

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


    function addMarker(property){
      
      const marker = new google.maps.Marker ({
        position:property.location,
        map:map,
        icon: blob,
      });
  
  }
  
  addMarker({location:{ lat: 55.384090, lng: 10.363820 }});



}













// Add marker
/*
function addMarker(location){
    
    const marker = new google.maps.Marker ({
      position:location,
      map:map

    });

}

addMarker({location:{ lat: 55.39769847267258, lng: 10.380654906127582 }});


*/


