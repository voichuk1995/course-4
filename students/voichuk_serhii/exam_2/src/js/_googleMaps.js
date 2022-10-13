function initMap() {
    
    const map = new google.maps.Map(
        document.getElementById("map"), 
        {
            center: { 
                lat: 40.659169691196986, 
                lng:  -73.87447042595684  
            },
            zoom: 13,
        }
    );

    const myPoint = {
        lat: 40.67479451520267,  
        lng:  -73.89884634163067
    };

    new google.maps.Marker({
        position: myPoint,
        map,
        icon: "../images/maps_pin.svg"
      });

};




window.initMap = initMap;

export default initMap;
