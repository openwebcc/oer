let lat = -39.2;
let lng = 175.583333;
let zoom = 8;

let map = L.map('map', {
    center: [lat, lng],
    zoom: zoom
});

L.tileLayer.provider("OpenTopoMap").addTo(map);

L.control.scale({
    imperial: false
}).addTo(map);

L.geoJSON({
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [lng, lat]
            },
            "properties": {
                "nr": 4,
                "user": "webmapping",
                "name": "Tongariro National Park",
                "wikipedia": "https://de.wikipedia.org/wiki/Tongariro-Nationalpark"
            }
        }
    ]
}, {
    pointToLayer: function (feature, latlng) {
        L.marker(latlng).bindPopup(`
            <h2>${feature.properties.name}</h2>
            <ul>
                <li>geogr. Breite: ${latlng.lat.toFixed(5)}°</li>
                <li>geogr. Länge: ${latlng.lng.toFixed(5)}°</li>
                <li><a href="${feature.properties.wikipedia}">Wikipediaseite</li>
            </ul>
        `).addTo(map).openPopup();
    }
}).addTo(map);
