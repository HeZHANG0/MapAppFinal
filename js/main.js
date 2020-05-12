
var map = L.map('map', {
  center: [39.952627, -75.163651],
  zoom: 13
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


// Loading data

var covidData = "https://raw.githubusercontent.com/HeZHANG0/MapAppFinal/master/covid.geojson"
var featureGroup;

var dic={"<200":[0,200],
          "200-400":[200,400],
          "400-600":[400,600],
          ">600":[600,1200]}

// jQuery

$(document).ready(function() {
  $.ajax(covidData).done(function(data) {
    var v=$("#input").val()
    console.log(data.slice(1,10))
    var filter= function(feature){
      if (feature.properties.count >dic[v][0] && feature.properties.count <=dic[v][1]){ return true}
    }
    $("#input").change(function(data){
      v=$("#input").val()
      if (featureGroup !== undefined) {
        map.removeLayer(featureGroup)
      }
      featureGroup = L.geoJson(data,{
         style: {fillColor:'#FF9933'},
         filter: filter
      }).addTo(map)
    })
  });
})
