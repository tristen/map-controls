var makeDemoMap = function(el, layerName) {
    var map = mapbox.map(el, mapbox.layer().id(layerName));
        map.zoom(3).center({ lat:32, lon:-34 });
        map.ui.zoomer.add();
        map.ui.fullscreen.add(); 
        mapbox.share().add();

      var markerLayer = mapbox.markers.layer();
      mapbox.markers.interaction(markerLayer);
      map.addLayer(markerLayer);

      markerLayer.add_feature({
          geometry: {
              coordinates: [-38,28]
          },
          properties: {
              'marker-color': '#5b8dd3',
              'marker-symbol': 'harbor',
              'title': 'Ahoy there!'
          }
      });
      markerLayer.markers()[0].showTooltip();
}; 
