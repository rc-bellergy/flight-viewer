mapboxgl.accessToken = "Add Mapbox API key here";
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/dqmichael/ckfxlwp4h0d5h1arznvqihbw1", // stylesheet location
    center: [114.304060, 22.309058], // starting position [lng, lat]
    zoom: 16 // starting zoom
});

map.on("load", function () {
    map.loadImage(
        "./images/drone.png",
        function (error, image) {
            if (error) throw error;
            map.addImage("drone-img", image);
            map.addSource("drone-src", {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [114.304060, 22.309058]
                        }
                    }]
                }
            });
            map.addLayer({
                "id": "drones",
                "type": "symbol",
                "source": "drone-src",
                "layout": {
                    "icon-image": "drone-img",
                    "icon-size": 0.25,
                    "icon-rotate": 270,
                    "icon-allow-overlap": true,
                }
            });
            console.log(map.getLayer("drones"));
            map.setLayoutProperty("drones", "icon-rotate", 45)
        }
    );

});
