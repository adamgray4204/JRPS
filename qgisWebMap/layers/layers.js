var wms_layers = [];


        var lyr_GoogleMapsSatellite_0 = new ol.layer.Tile({
            'title': 'Google Maps Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt1.google.com/maps/vt?lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_JRPSLap_1 = new ol.format.GeoJSON();
var features_JRPSLap_1 = format_JRPSLap_1.readFeatures(json_JRPSLap_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JRPSLap_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JRPSLap_1.addFeatures(features_JRPSLap_1);
var lyr_JRPSLap_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JRPSLap_1, 
                style: style_JRPSLap_1,
                popuplayertitle: 'JRPS Lap',
                interactive: true,
    title: 'JRPS Lap<br />\
    <img src="styles/legend/JRPSLap_1_0.png" /> 0 - 2<br />\
    <img src="styles/legend/JRPSLap_1_1.png" /> 2 - 4<br />\
    <img src="styles/legend/JRPSLap_1_2.png" /> 4 - 6<br />\
    <img src="styles/legend/JRPSLap_1_3.png" /> 6 - 8<br />\
    <img src="styles/legend/JRPSLap_1_4.png" /> 8 - 10<br />\
    <img src="styles/legend/JRPSLap_1_5.png" /> 10 - 12<br />\
    <img src="styles/legend/JRPSLap_1_6.png" /> 12 - 12.3<br />' });

lyr_GoogleMapsSatellite_0.setVisible(true);lyr_JRPSLap_1.setVisible(true);
var layersList = [lyr_GoogleMapsSatellite_0,lyr_JRPSLap_1];
lyr_JRPSLap_1.set('fieldAliases', {'fid': 'fid', 'position_long': 'position_long', 'speed': 'speed', 'enhanced_speed': 'enhanced_speed', 'heart_rate': 'heart_rate', 'unknown_61': 'unknown_61', 'enhanced_altitude': 'enhanced_altitude', 'position_lat': 'position_lat', 'altitude': 'altitude', 'unknown_114': 'unknown_114', 'unknown_66': 'unknown_66', 'distance': 'distance', 'temperature': 'temperature', 'timestamp': 'timestamp', 'unknown_115': 'unknown_115', 'seg_num': 'seg_num', 'Image': 'Image', });
lyr_JRPSLap_1.set('fieldImages', {'fid': 'TextEdit', 'position_long': 'TextEdit', 'speed': 'TextEdit', 'enhanced_speed': 'TextEdit', 'heart_rate': 'TextEdit', 'unknown_61': 'TextEdit', 'enhanced_altitude': 'TextEdit', 'position_lat': 'TextEdit', 'altitude': 'TextEdit', 'unknown_114': 'TextEdit', 'unknown_66': 'TextEdit', 'distance': 'TextEdit', 'temperature': 'TextEdit', 'timestamp': 'DateTime', 'unknown_115': 'TextEdit', 'seg_num': 'Range', 'Image': 'TextEdit', });
lyr_JRPSLap_1.set('fieldLabels', {'fid': 'hidden field', 'position_long': 'hidden field', 'speed': 'inline label - always visible', 'enhanced_speed': 'hidden field', 'heart_rate': 'hidden field', 'unknown_61': 'hidden field', 'enhanced_altitude': 'hidden field', 'position_lat': 'hidden field', 'altitude': 'inline label - always visible', 'unknown_114': 'hidden field', 'unknown_66': 'hidden field', 'distance': 'inline label - always visible', 'temperature': 'hidden field', 'timestamp': 'hidden field', 'unknown_115': 'hidden field', 'seg_num': 'hidden field', 'Image': 'no label', });
lyr_JRPSLap_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});