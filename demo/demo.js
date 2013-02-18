var makeDemoMap = function(el, layerName) {
    var map = mapbox.map(el, mapbox.layer().id(layerName));
        map.zoom(3).center({ lat:32, lon:-34 });
        map.ui.zoomer.add();
        map.ui.fullscreen.add(); 
        mapbox.share().add();

      // Creates an empty markers layer
      var markerLayer = mapbox.markers.layer();
      mapbox.markers.interaction(markerLayer);
      map.addLayer(markerLayer);

      // Add a single feature to the markers layer.
      // You can use .features() to add multiple features.
      markerLayer.add_feature({
          geometry: {
              coordinates: [-41,38]
          },
          properties: {
              'marker-color': '#5b8dd3',
              'marker-symbol': 'harbor',
              'title': 'Ahoy!',
              'description': 'Shiver me Timbers'
          }
      });
      markerLayer.markers()[0].showTooltip();
}; 
