

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




    // Add marker
    function addMarker(property){
      
      const marker = new google.maps.Marker ({
        position:property.location,
        map:map,
        icon: property.imageIcon,
        
      });

      // Add Window

      const detailWindow = new google.maps.InfoWindow({
        content: property.content
      })
  
      // Add click event for markers to display infowindow

      marker.addListener("click", () =>{
        detailWindow.open(map, marker);
      })


  }

  // Add markers with content
  
  addMarker({location:{ lat: 55.384090, lng: 10.363820 },
  imageIcon: "https://buchdesigns.dk/img/baseline_location_pin_black_36dp.png",
  content:
  '<div id="content" style="width: 150px; height: 200px">'+
    '<div id="bodyContent>'+
      '<div id="adr" style="width: 140px;"><h3>Adresse som er mega sej og nice og den kan alt muligt sejt</h3></div>'+
      '<hr></hr>'+
    '</div>'+
  '</div>'
  
  });



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


