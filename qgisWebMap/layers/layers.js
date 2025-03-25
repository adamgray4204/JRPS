var wms_layers = [];


        var lyr_GoogleMapsSatellite_0 = new ol.layer.Tile({
            'title': 'Google Maps Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt1.google.com/maps/vt?lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_GarminPath_1 = new ol.format.GeoJSON();
var features_GarminPath_1 = format_GarminPath_1.readFeatures(json_GarminPath_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GarminPath_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GarminPath_1.addFeatures(features_GarminPath_1);
var lyr_GarminPath_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GarminPath_1, 
                style: style_GarminPath_1,
                popuplayertitle: 'GarminPath',
                interactive: false,
                title: '<img src="styles/legend/GarminPath_1.png" /> GarminPath'
            });
var format_Kai_Magnitude_Snapped_2 = new ol.format.GeoJSON();
var features_Kai_Magnitude_Snapped_2 = format_Kai_Magnitude_Snapped_2.readFeatures(json_Kai_Magnitude_Snapped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kai_Magnitude_Snapped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kai_Magnitude_Snapped_2.addFeatures(features_Kai_Magnitude_Snapped_2);
var lyr_Kai_Magnitude_Snapped_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kai_Magnitude_Snapped_2, 
                style: style_Kai_Magnitude_Snapped_2,
                popuplayertitle: 'Kai_Magnitude_Snapped',
                interactive: true,
    title: 'Kai_Magnitude_Snapped<br />\
    <img src="styles/legend/Kai_Magnitude_Snapped_2_0.png" /> 2.5 - 3.5<br />\
    <img src="styles/legend/Kai_Magnitude_Snapped_2_1.png" /> 3.5 - 4<br />\
    <img src="styles/legend/Kai_Magnitude_Snapped_2_2.png" /> 4 - 4.5<br />\
    <img src="styles/legend/Kai_Magnitude_Snapped_2_3.png" /> 4.5 - 5.5<br />' });
var format_AdamMagnitudeSnapped_3 = new ol.format.GeoJSON();
var features_AdamMagnitudeSnapped_3 = format_AdamMagnitudeSnapped_3.readFeatures(json_AdamMagnitudeSnapped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdamMagnitudeSnapped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdamMagnitudeSnapped_3.addFeatures(features_AdamMagnitudeSnapped_3);
var lyr_AdamMagnitudeSnapped_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdamMagnitudeSnapped_3, 
                style: style_AdamMagnitudeSnapped_3,
                popuplayertitle: 'Adam Magnitude Snapped',
                interactive: true,
    title: 'Adam Magnitude Snapped<br />\
    <img src="styles/legend/AdamMagnitudeSnapped_3_0.png" /> 2.5 - 3.5<br />\
    <img src="styles/legend/AdamMagnitudeSnapped_3_1.png" /> 3.5 - 4<br />\
    <img src="styles/legend/AdamMagnitudeSnapped_3_2.png" /> 4 - 4.5<br />\
    <img src="styles/legend/AdamMagnitudeSnapped_3_3.png" /> 4.5 - 5.5<br />' });
var format_TrailFeaturePts_4 = new ol.format.GeoJSON();
var features_TrailFeaturePts_4 = format_TrailFeaturePts_4.readFeatures(json_TrailFeaturePts_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrailFeaturePts_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrailFeaturePts_4.addFeatures(features_TrailFeaturePts_4);
var lyr_TrailFeaturePts_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrailFeaturePts_4, 
                style: style_TrailFeaturePts_4,
                popuplayertitle: 'TrailFeaturePts',
                interactive: true,
                title: '<img src="styles/legend/TrailFeaturePts_4.png" /> TrailFeaturePts'
            });

lyr_GoogleMapsSatellite_0.setVisible(true);lyr_GarminPath_1.setVisible(true);lyr_Kai_Magnitude_Snapped_2.setVisible(true);lyr_AdamMagnitudeSnapped_3.setVisible(true);lyr_TrailFeaturePts_4.setVisible(true);
var layersList = [lyr_GoogleMapsSatellite_0,lyr_GarminPath_1,lyr_Kai_Magnitude_Snapped_2,lyr_AdamMagnitudeSnapped_3,lyr_TrailFeaturePts_4];
lyr_GarminPath_1.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_Kai_Magnitude_Snapped_2.set('fieldAliases', {'fid': 'fid', 'seconds_elapsed': 'seconds_elapsed', 'gyroscope_z': 'gyroscope_z', 'gyroscope_y': 'gyroscope_y', 'gyroscope_x': 'gyroscope_x', 'gravity_z': 'gravity_z', 'gravity_y': 'gravity_y', 'gravity_x': 'gravity_x', 'magnetometerUncalibrated_z': 'magnetometerUncalibrated_z', 'magnetometerUncalibrated_y': 'magnetometerUncalibrated_y', 'magnetometerUncalibrated_x': 'magnetometerUncalibrated_x', 'magnetometer_z': 'magnetometer_z', 'magnetometer_y': 'magnetometer_y', 'magnetometer_x': 'magnetometer_x', 'location_altitude': 'location_altitude', 'location_speedAccuracy': 'location_speedAccuracy', 'location_bearingAccuracy': 'location_bearingAccuracy', 'location_latitude': 'location_latitude', 'location_altitudeAboveMeanSeaLevel': 'location_altitudeAboveMeanSeaLevel', 'location_bearing': 'location_bearing', 'location_horizontalAccuracy': 'location_horizontalAccuracy', 'location_verticalAccuracy': 'location_verticalAccuracy', 'location_longitude': 'location_longitude', 'location_speed': 'location_speed', 'gyroscopeUncalibrated_z': 'gyroscopeUncalibrated_z', 'gyroscopeUncalibrated_y': 'gyroscopeUncalibrated_y', 'gyroscopeUncalibrated_x': 'gyroscopeUncalibrated_x', 'orientation_yaw': 'orientation_yaw', 'orientation_qx': 'orientation_qx', 'orientation_qz': 'orientation_qz', 'orientation_roll': 'orientation_roll', 'orientation_qw': 'orientation_qw', 'orientation_qy': 'orientation_qy', 'orientation_pitch': 'orientation_pitch', 'accelerometerUncalibrated_z': 'accelerometerUncalibrated_z', 'accelerometerUncalibrated_y': 'accelerometerUncalibrated_y', 'accelerometerUncalibrated_x': 'accelerometerUncalibrated_x', 'compass_magneticBearing': 'compass_magneticBearing', 'barometer_relativeAltitude': 'barometer_relativeAltitude', 'barometer_pressure': 'barometer_pressure', 'accelerometer_z': 'accelerometer_z', 'accelerometer_y': 'accelerometer_y', 'accelerometer_x': 'accelerometer_x', 'AccelMagnitude': 'AccelMagnitude', });
lyr_AdamMagnitudeSnapped_3.set('fieldAliases', {'fid': 'fid', 'seconds_elapsed': 'seconds_elapsed', 'gyroscope_z': 'gyroscope_z', 'gyroscope_y': 'gyroscope_y', 'gyroscope_x': 'gyroscope_x', 'gravity_z': 'gravity_z', 'gravity_y': 'gravity_y', 'gravity_x': 'gravity_x', 'magnetometerUncalibrated_z': 'magnetometerUncalibrated_z', 'magnetometerUncalibrated_y': 'magnetometerUncalibrated_y', 'magnetometerUncalibrated_x': 'magnetometerUncalibrated_x', 'magnetometer_z': 'magnetometer_z', 'magnetometer_y': 'magnetometer_y', 'magnetometer_x': 'magnetometer_x', 'location_altitude': 'location_altitude', 'location_speedAccuracy': 'location_speedAccuracy', 'location_bearingAccuracy': 'location_bearingAccuracy', 'location_latitude': 'location_latitude', 'location_altitudeAboveMeanSeaLevel': 'location_altitudeAboveMeanSeaLevel', 'location_bearing': 'location_bearing', 'location_horizontalAccuracy': 'location_horizontalAccuracy', 'location_verticalAccuracy': 'location_verticalAccuracy', 'location_longitude': 'location_longitude', 'location_speed': 'location_speed', 'gyroscopeUncalibrated_z': 'gyroscopeUncalibrated_z', 'gyroscopeUncalibrated_y': 'gyroscopeUncalibrated_y', 'gyroscopeUncalibrated_x': 'gyroscopeUncalibrated_x', 'orientation_yaw': 'orientation_yaw', 'orientation_qx': 'orientation_qx', 'orientation_qz': 'orientation_qz', 'orientation_roll': 'orientation_roll', 'orientation_qw': 'orientation_qw', 'orientation_qy': 'orientation_qy', 'orientation_pitch': 'orientation_pitch', 'accelerometerUncalibrated_z': 'accelerometerUncalibrated_z', 'accelerometerUncalibrated_y': 'accelerometerUncalibrated_y', 'accelerometerUncalibrated_x': 'accelerometerUncalibrated_x', 'compass_magneticBearing': 'compass_magneticBearing', 'barometer_relativeAltitude': 'barometer_relativeAltitude', 'barometer_pressure': 'barometer_pressure', 'accelerometer_z': 'accelerometer_z', 'accelerometer_y': 'accelerometer_y', 'accelerometer_x': 'accelerometer_x', 'AccelMagnitude': 'AccelMagnitude', });
lyr_TrailFeaturePts_4.set('fieldAliases', {'fid': 'fid', 'PhotoPath': 'PhotoPath', 'Difficulty': 'Difficulty', 'Description': 'Description', });
lyr_GarminPath_1.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Kai_Magnitude_Snapped_2.set('fieldImages', {'fid': '', 'seconds_elapsed': '', 'gyroscope_z': '', 'gyroscope_y': '', 'gyroscope_x': '', 'gravity_z': '', 'gravity_y': '', 'gravity_x': '', 'magnetometerUncalibrated_z': '', 'magnetometerUncalibrated_y': '', 'magnetometerUncalibrated_x': '', 'magnetometer_z': '', 'magnetometer_y': '', 'magnetometer_x': '', 'location_altitude': '', 'location_speedAccuracy': '', 'location_bearingAccuracy': '', 'location_latitude': '', 'location_altitudeAboveMeanSeaLevel': '', 'location_bearing': '', 'location_horizontalAccuracy': '', 'location_verticalAccuracy': '', 'location_longitude': '', 'location_speed': '', 'gyroscopeUncalibrated_z': '', 'gyroscopeUncalibrated_y': '', 'gyroscopeUncalibrated_x': '', 'orientation_yaw': '', 'orientation_qx': '', 'orientation_qz': '', 'orientation_roll': '', 'orientation_qw': '', 'orientation_qy': '', 'orientation_pitch': '', 'accelerometerUncalibrated_z': '', 'accelerometerUncalibrated_y': '', 'accelerometerUncalibrated_x': '', 'compass_magneticBearing': '', 'barometer_relativeAltitude': '', 'barometer_pressure': '', 'accelerometer_z': '', 'accelerometer_y': '', 'accelerometer_x': '', 'AccelMagnitude': '', });
lyr_AdamMagnitudeSnapped_3.set('fieldImages', {'fid': '', 'seconds_elapsed': '', 'gyroscope_z': '', 'gyroscope_y': '', 'gyroscope_x': '', 'gravity_z': '', 'gravity_y': '', 'gravity_x': '', 'magnetometerUncalibrated_z': '', 'magnetometerUncalibrated_y': '', 'magnetometerUncalibrated_x': '', 'magnetometer_z': '', 'magnetometer_y': '', 'magnetometer_x': '', 'location_altitude': '', 'location_speedAccuracy': '', 'location_bearingAccuracy': '', 'location_latitude': '', 'location_altitudeAboveMeanSeaLevel': '', 'location_bearing': '', 'location_horizontalAccuracy': '', 'location_verticalAccuracy': '', 'location_longitude': '', 'location_speed': '', 'gyroscopeUncalibrated_z': '', 'gyroscopeUncalibrated_y': '', 'gyroscopeUncalibrated_x': '', 'orientation_yaw': '', 'orientation_qx': '', 'orientation_qz': '', 'orientation_roll': '', 'orientation_qw': '', 'orientation_qy': '', 'orientation_pitch': '', 'accelerometerUncalibrated_z': '', 'accelerometerUncalibrated_y': '', 'accelerometerUncalibrated_x': '', 'compass_magneticBearing': '', 'barometer_relativeAltitude': '', 'barometer_pressure': '', 'accelerometer_z': '', 'accelerometer_y': '', 'accelerometer_x': '', 'AccelMagnitude': '', });
lyr_TrailFeaturePts_4.set('fieldImages', {'fid': 'TextEdit', 'PhotoPath': 'TextEdit', 'Difficulty': 'Range', 'Description': 'TextEdit', });
lyr_GarminPath_1.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', });
lyr_Kai_Magnitude_Snapped_2.set('fieldLabels', {'fid': 'hidden field', 'seconds_elapsed': 'inline label - visible with data', 'gyroscope_z': 'inline label - visible with data', 'gyroscope_y': 'inline label - visible with data', 'gyroscope_x': 'inline label - visible with data', 'gravity_z': 'hidden field', 'gravity_y': 'hidden field', 'gravity_x': 'hidden field', 'magnetometerUncalibrated_z': 'hidden field', 'magnetometerUncalibrated_y': 'hidden field', 'magnetometerUncalibrated_x': 'hidden field', 'magnetometer_z': 'hidden field', 'magnetometer_y': 'hidden field', 'magnetometer_x': 'hidden field', 'location_altitude': 'inline label - visible with data', 'location_speedAccuracy': 'hidden field', 'location_bearingAccuracy': 'hidden field', 'location_latitude': 'hidden field', 'location_altitudeAboveMeanSeaLevel': 'hidden field', 'location_bearing': 'hidden field', 'location_horizontalAccuracy': 'hidden field', 'location_verticalAccuracy': 'hidden field', 'location_longitude': 'hidden field', 'location_speed': 'inline label - visible with data', 'gyroscopeUncalibrated_z': 'hidden field', 'gyroscopeUncalibrated_y': 'hidden field', 'gyroscopeUncalibrated_x': 'hidden field', 'orientation_yaw': 'inline label - visible with data', 'orientation_qx': 'hidden field', 'orientation_qz': 'hidden field', 'orientation_roll': 'inline label - visible with data', 'orientation_qw': 'hidden field', 'orientation_qy': 'hidden field', 'orientation_pitch': 'inline label - visible with data', 'accelerometerUncalibrated_z': 'hidden field', 'accelerometerUncalibrated_y': 'hidden field', 'accelerometerUncalibrated_x': 'hidden field', 'compass_magneticBearing': 'hidden field', 'barometer_relativeAltitude': 'hidden field', 'barometer_pressure': 'hidden field', 'accelerometer_z': 'inline label - visible with data', 'accelerometer_y': 'inline label - visible with data', 'accelerometer_x': 'inline label - visible with data', 'AccelMagnitude': 'inline label - visible with data', });
lyr_AdamMagnitudeSnapped_3.set('fieldLabels', {'fid': 'hidden field', 'seconds_elapsed': 'inline label - visible with data', 'gyroscope_z': 'inline label - visible with data', 'gyroscope_y': 'inline label - visible with data', 'gyroscope_x': 'inline label - visible with data', 'gravity_z': 'hidden field', 'gravity_y': 'hidden field', 'gravity_x': 'hidden field', 'magnetometerUncalibrated_z': 'hidden field', 'magnetometerUncalibrated_y': 'hidden field', 'magnetometerUncalibrated_x': 'hidden field', 'magnetometer_z': 'hidden field', 'magnetometer_y': 'hidden field', 'magnetometer_x': 'hidden field', 'location_altitude': 'inline label - visible with data', 'location_speedAccuracy': 'hidden field', 'location_bearingAccuracy': 'hidden field', 'location_latitude': 'hidden field', 'location_altitudeAboveMeanSeaLevel': 'hidden field', 'location_bearing': 'hidden field', 'location_horizontalAccuracy': 'hidden field', 'location_verticalAccuracy': 'hidden field', 'location_longitude': 'hidden field', 'location_speed': 'inline label - visible with data', 'gyroscopeUncalibrated_z': 'hidden field', 'gyroscopeUncalibrated_y': 'hidden field', 'gyroscopeUncalibrated_x': 'hidden field', 'orientation_yaw': 'inline label - visible with data', 'orientation_qx': 'hidden field', 'orientation_qz': 'hidden field', 'orientation_roll': 'inline label - always visible', 'orientation_qw': 'hidden field', 'orientation_qy': 'hidden field', 'orientation_pitch': 'inline label - visible with data', 'accelerometerUncalibrated_z': 'hidden field', 'accelerometerUncalibrated_y': 'hidden field', 'accelerometerUncalibrated_x': 'hidden field', 'compass_magneticBearing': 'hidden field', 'barometer_relativeAltitude': 'hidden field', 'barometer_pressure': 'hidden field', 'accelerometer_z': 'inline label - visible with data', 'accelerometer_y': 'inline label - visible with data', 'accelerometer_x': 'inline label - visible with data', 'AccelMagnitude': 'inline label - visible with data', });
lyr_TrailFeaturePts_4.set('fieldLabels', {'fid': 'hidden field', 'PhotoPath': 'no label', 'Difficulty': 'inline label - visible with data', 'Description': 'inline label - visible with data', });
lyr_TrailFeaturePts_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});