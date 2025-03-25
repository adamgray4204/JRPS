var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMapsHybrid_1 = new ol.layer.Tile({
            'title': 'Google Maps Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMapsSatellite_2 = new ol.layer.Tile({
            'title': 'Google Maps Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt1.google.com/maps/vt?lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_GarminPath_3 = new ol.format.GeoJSON();
var features_GarminPath_3 = format_GarminPath_3.readFeatures(json_GarminPath_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GarminPath_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GarminPath_3.addFeatures(features_GarminPath_3);
var lyr_GarminPath_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GarminPath_3, 
                style: style_GarminPath_3,
                popuplayertitle: 'GarminPath',
                interactive: false,
                title: '<img src="styles/legend/GarminPath_3.png" /> GarminPath'
            });
var format_RideDataRun2_4 = new ol.format.GeoJSON();
var features_RideDataRun2_4 = format_RideDataRun2_4.readFeatures(json_RideDataRun2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RideDataRun2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RideDataRun2_4.addFeatures(features_RideDataRun2_4);
var lyr_RideDataRun2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RideDataRun2_4, 
                style: style_RideDataRun2_4,
                popuplayertitle: 'Ride Data Run 2',
                interactive: true,
    title: 'Ride Data Run 2<br />\
    <img src="styles/legend/RideDataRun2_4_0.png" /> 2.5 - 3.5<br />\
    <img src="styles/legend/RideDataRun2_4_1.png" /> 3.5 - 4<br />\
    <img src="styles/legend/RideDataRun2_4_2.png" /> 4 - 4.5<br />\
    <img src="styles/legend/RideDataRun2_4_3.png" /> 4.5 - 5.5<br />' });
var format_RideDataRun1_5 = new ol.format.GeoJSON();
var features_RideDataRun1_5 = format_RideDataRun1_5.readFeatures(json_RideDataRun1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RideDataRun1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RideDataRun1_5.addFeatures(features_RideDataRun1_5);
var lyr_RideDataRun1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RideDataRun1_5, 
                style: style_RideDataRun1_5,
                popuplayertitle: 'Ride Data Run 1',
                interactive: true,
    title: 'Ride Data Run 1<br />\
    <img src="styles/legend/RideDataRun1_5_0.png" /> 2.5 - 3.5<br />\
    <img src="styles/legend/RideDataRun1_5_1.png" /> 3.5 - 4<br />\
    <img src="styles/legend/RideDataRun1_5_2.png" /> 4 - 4.5<br />\
    <img src="styles/legend/RideDataRun1_5_3.png" /> 4.5 - 5.5<br />' });
var format_TrailFeaturePts_6 = new ol.format.GeoJSON();
var features_TrailFeaturePts_6 = format_TrailFeaturePts_6.readFeatures(json_TrailFeaturePts_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrailFeaturePts_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrailFeaturePts_6.addFeatures(features_TrailFeaturePts_6);
var lyr_TrailFeaturePts_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrailFeaturePts_6, 
                style: style_TrailFeaturePts_6,
                popuplayertitle: 'TrailFeaturePts',
                interactive: true,
                title: '<img src="styles/legend/TrailFeaturePts_6.png" /> TrailFeaturePts'
            });
var group_BaseLayers = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_GoogleMapsHybrid_1,lyr_GoogleMapsSatellite_2,],
                                fold: "open",
                                title: 'Base Layers'});
var group_Hidden = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Hidden'});

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleMapsHybrid_1.setVisible(false);lyr_GoogleMapsSatellite_2.setVisible(true);lyr_GarminPath_3.setVisible(true);lyr_RideDataRun2_4.setVisible(true);lyr_RideDataRun1_5.setVisible(true);lyr_TrailFeaturePts_6.setVisible(true);
var layersList = [group_BaseLayers,lyr_GarminPath_3,lyr_RideDataRun2_4,lyr_RideDataRun1_5,lyr_TrailFeaturePts_6];
lyr_GarminPath_3.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_RideDataRun2_4.set('fieldAliases', {'fid': 'fid', 'seconds_elapsed': 'seconds_elapsed', 'gyroscope_z': 'gyroscope_z', 'gyroscope_y': 'gyroscope_y', 'gyroscope_x': 'gyroscope_x', 'gravity_z': 'gravity_z', 'gravity_y': 'gravity_y', 'gravity_x': 'gravity_x', 'magnetometerUncalibrated_z': 'magnetometerUncalibrated_z', 'magnetometerUncalibrated_y': 'magnetometerUncalibrated_y', 'magnetometerUncalibrated_x': 'magnetometerUncalibrated_x', 'magnetometer_z': 'magnetometer_z', 'magnetometer_y': 'magnetometer_y', 'magnetometer_x': 'magnetometer_x', 'location_altitude': 'location_altitude', 'location_speedAccuracy': 'location_speedAccuracy', 'location_bearingAccuracy': 'location_bearingAccuracy', 'location_latitude': 'location_latitude', 'location_altitudeAboveMeanSeaLevel': 'location_altitudeAboveMeanSeaLevel', 'location_bearing': 'location_bearing', 'location_horizontalAccuracy': 'location_horizontalAccuracy', 'location_verticalAccuracy': 'location_verticalAccuracy', 'location_longitude': 'location_longitude', 'location_speed': 'location_speed', 'gyroscopeUncalibrated_z': 'gyroscopeUncalibrated_z', 'gyroscopeUncalibrated_y': 'gyroscopeUncalibrated_y', 'gyroscopeUncalibrated_x': 'gyroscopeUncalibrated_x', 'orientation_yaw': 'orientation_yaw', 'orientation_qx': 'orientation_qx', 'orientation_qz': 'orientation_qz', 'orientation_roll': 'orientation_roll', 'orientation_qw': 'orientation_qw', 'orientation_qy': 'orientation_qy', 'orientation_pitch': 'orientation_pitch', 'accelerometerUncalibrated_z': 'accelerometerUncalibrated_z', 'accelerometerUncalibrated_y': 'accelerometerUncalibrated_y', 'accelerometerUncalibrated_x': 'accelerometerUncalibrated_x', 'compass_magneticBearing': 'compass_magneticBearing', 'barometer_relativeAltitude': 'barometer_relativeAltitude', 'barometer_pressure': 'barometer_pressure', 'accelerometer_z': 'accelerometer_z', 'accelerometer_y': 'accelerometer_y', 'accelerometer_x': 'accelerometer_x', 'AccelMagnitude': 'AccelMagnitude', });
lyr_RideDataRun1_5.set('fieldAliases', {'fid': 'fid', 'seconds_elapsed': 'seconds_elapsed', 'gyroscope_z': 'gyroscope_z', 'gyroscope_y': 'gyroscope_y', 'gyroscope_x': 'gyroscope_x', 'gravity_z': 'gravity_z', 'gravity_y': 'gravity_y', 'gravity_x': 'gravity_x', 'magnetometerUncalibrated_z': 'magnetometerUncalibrated_z', 'magnetometerUncalibrated_y': 'magnetometerUncalibrated_y', 'magnetometerUncalibrated_x': 'magnetometerUncalibrated_x', 'magnetometer_z': 'magnetometer_z', 'magnetometer_y': 'magnetometer_y', 'magnetometer_x': 'magnetometer_x', 'location_altitude': 'location_altitude', 'location_speedAccuracy': 'location_speedAccuracy', 'location_bearingAccuracy': 'location_bearingAccuracy', 'location_latitude': 'location_latitude', 'location_altitudeAboveMeanSeaLevel': 'location_altitudeAboveMeanSeaLevel', 'location_bearing': 'location_bearing', 'location_horizontalAccuracy': 'location_horizontalAccuracy', 'location_verticalAccuracy': 'location_verticalAccuracy', 'location_longitude': 'location_longitude', 'location_speed': 'location_speed', 'gyroscopeUncalibrated_z': 'gyroscopeUncalibrated_z', 'gyroscopeUncalibrated_y': 'gyroscopeUncalibrated_y', 'gyroscopeUncalibrated_x': 'gyroscopeUncalibrated_x', 'orientation_yaw': 'orientation_yaw', 'orientation_qx': 'orientation_qx', 'orientation_qz': 'orientation_qz', 'orientation_roll': 'orientation_roll', 'orientation_qw': 'orientation_qw', 'orientation_qy': 'orientation_qy', 'orientation_pitch': 'orientation_pitch', 'accelerometerUncalibrated_z': 'accelerometerUncalibrated_z', 'accelerometerUncalibrated_y': 'accelerometerUncalibrated_y', 'accelerometerUncalibrated_x': 'accelerometerUncalibrated_x', 'compass_magneticBearing': 'compass_magneticBearing', 'barometer_relativeAltitude': 'barometer_relativeAltitude', 'barometer_pressure': 'barometer_pressure', 'accelerometer_z': 'accelerometer_z', 'accelerometer_y': 'accelerometer_y', 'accelerometer_x': 'accelerometer_x', 'AccelMagnitude': 'AccelMagnitude', });
lyr_TrailFeaturePts_6.set('fieldAliases', {'fid': 'fid', 'PhotoPath': 'PhotoPath', 'Difficulty': 'Difficulty', 'Description': 'Description', });
lyr_GarminPath_3.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_RideDataRun2_4.set('fieldImages', {'fid': 'TextEdit', 'seconds_elapsed': 'TextEdit', 'gyroscope_z': 'TextEdit', 'gyroscope_y': 'TextEdit', 'gyroscope_x': 'TextEdit', 'gravity_z': 'TextEdit', 'gravity_y': 'TextEdit', 'gravity_x': 'TextEdit', 'magnetometerUncalibrated_z': 'TextEdit', 'magnetometerUncalibrated_y': 'TextEdit', 'magnetometerUncalibrated_x': 'TextEdit', 'magnetometer_z': 'TextEdit', 'magnetometer_y': 'TextEdit', 'magnetometer_x': 'TextEdit', 'location_altitude': 'TextEdit', 'location_speedAccuracy': 'TextEdit', 'location_bearingAccuracy': 'TextEdit', 'location_latitude': 'TextEdit', 'location_altitudeAboveMeanSeaLevel': 'TextEdit', 'location_bearing': 'TextEdit', 'location_horizontalAccuracy': 'TextEdit', 'location_verticalAccuracy': 'TextEdit', 'location_longitude': 'TextEdit', 'location_speed': 'TextEdit', 'gyroscopeUncalibrated_z': 'TextEdit', 'gyroscopeUncalibrated_y': 'TextEdit', 'gyroscopeUncalibrated_x': 'TextEdit', 'orientation_yaw': 'TextEdit', 'orientation_qx': 'TextEdit', 'orientation_qz': 'TextEdit', 'orientation_roll': 'TextEdit', 'orientation_qw': 'TextEdit', 'orientation_qy': 'TextEdit', 'orientation_pitch': 'TextEdit', 'accelerometerUncalibrated_z': 'TextEdit', 'accelerometerUncalibrated_y': 'TextEdit', 'accelerometerUncalibrated_x': 'TextEdit', 'compass_magneticBearing': 'TextEdit', 'barometer_relativeAltitude': 'TextEdit', 'barometer_pressure': 'TextEdit', 'accelerometer_z': 'TextEdit', 'accelerometer_y': 'TextEdit', 'accelerometer_x': 'TextEdit', 'AccelMagnitude': 'TextEdit', });
lyr_RideDataRun1_5.set('fieldImages', {'fid': 'TextEdit', 'seconds_elapsed': 'TextEdit', 'gyroscope_z': 'TextEdit', 'gyroscope_y': 'TextEdit', 'gyroscope_x': 'TextEdit', 'gravity_z': 'TextEdit', 'gravity_y': 'TextEdit', 'gravity_x': 'TextEdit', 'magnetometerUncalibrated_z': 'TextEdit', 'magnetometerUncalibrated_y': 'TextEdit', 'magnetometerUncalibrated_x': 'TextEdit', 'magnetometer_z': 'TextEdit', 'magnetometer_y': 'TextEdit', 'magnetometer_x': 'TextEdit', 'location_altitude': 'TextEdit', 'location_speedAccuracy': 'TextEdit', 'location_bearingAccuracy': 'TextEdit', 'location_latitude': 'TextEdit', 'location_altitudeAboveMeanSeaLevel': 'TextEdit', 'location_bearing': 'TextEdit', 'location_horizontalAccuracy': 'TextEdit', 'location_verticalAccuracy': 'TextEdit', 'location_longitude': 'TextEdit', 'location_speed': 'TextEdit', 'gyroscopeUncalibrated_z': 'TextEdit', 'gyroscopeUncalibrated_y': 'TextEdit', 'gyroscopeUncalibrated_x': 'TextEdit', 'orientation_yaw': 'TextEdit', 'orientation_qx': 'TextEdit', 'orientation_qz': 'TextEdit', 'orientation_roll': 'TextEdit', 'orientation_qw': 'TextEdit', 'orientation_qy': 'TextEdit', 'orientation_pitch': 'TextEdit', 'accelerometerUncalibrated_z': 'TextEdit', 'accelerometerUncalibrated_y': 'TextEdit', 'accelerometerUncalibrated_x': 'TextEdit', 'compass_magneticBearing': 'TextEdit', 'barometer_relativeAltitude': 'TextEdit', 'barometer_pressure': 'TextEdit', 'accelerometer_z': 'TextEdit', 'accelerometer_y': 'TextEdit', 'accelerometer_x': 'TextEdit', 'AccelMagnitude': 'TextEdit', });
lyr_TrailFeaturePts_6.set('fieldImages', {'fid': 'TextEdit', 'PhotoPath': 'TextEdit', 'Difficulty': 'Range', 'Description': 'TextEdit', });
lyr_GarminPath_3.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', });
lyr_RideDataRun2_4.set('fieldLabels', {'fid': 'hidden field', 'seconds_elapsed': 'inline label - visible with data', 'gyroscope_z': 'inline label - visible with data', 'gyroscope_y': 'inline label - visible with data', 'gyroscope_x': 'inline label - visible with data', 'gravity_z': 'hidden field', 'gravity_y': 'hidden field', 'gravity_x': 'hidden field', 'magnetometerUncalibrated_z': 'hidden field', 'magnetometerUncalibrated_y': 'hidden field', 'magnetometerUncalibrated_x': 'hidden field', 'magnetometer_z': 'hidden field', 'magnetometer_y': 'hidden field', 'magnetometer_x': 'hidden field', 'location_altitude': 'inline label - visible with data', 'location_speedAccuracy': 'hidden field', 'location_bearingAccuracy': 'hidden field', 'location_latitude': 'hidden field', 'location_altitudeAboveMeanSeaLevel': 'hidden field', 'location_bearing': 'hidden field', 'location_horizontalAccuracy': 'hidden field', 'location_verticalAccuracy': 'hidden field', 'location_longitude': 'hidden field', 'location_speed': 'inline label - visible with data', 'gyroscopeUncalibrated_z': 'hidden field', 'gyroscopeUncalibrated_y': 'hidden field', 'gyroscopeUncalibrated_x': 'hidden field', 'orientation_yaw': 'inline label - visible with data', 'orientation_qx': 'hidden field', 'orientation_qz': 'hidden field', 'orientation_roll': 'inline label - visible with data', 'orientation_qw': 'hidden field', 'orientation_qy': 'hidden field', 'orientation_pitch': 'inline label - visible with data', 'accelerometerUncalibrated_z': 'hidden field', 'accelerometerUncalibrated_y': 'hidden field', 'accelerometerUncalibrated_x': 'hidden field', 'compass_magneticBearing': 'hidden field', 'barometer_relativeAltitude': 'hidden field', 'barometer_pressure': 'hidden field', 'accelerometer_z': 'inline label - visible with data', 'accelerometer_y': 'inline label - visible with data', 'accelerometer_x': 'inline label - visible with data', 'AccelMagnitude': 'inline label - visible with data', });
lyr_RideDataRun1_5.set('fieldLabels', {'fid': 'hidden field', 'seconds_elapsed': 'inline label - visible with data', 'gyroscope_z': 'inline label - visible with data', 'gyroscope_y': 'inline label - visible with data', 'gyroscope_x': 'inline label - visible with data', 'gravity_z': 'hidden field', 'gravity_y': 'hidden field', 'gravity_x': 'hidden field', 'magnetometerUncalibrated_z': 'hidden field', 'magnetometerUncalibrated_y': 'hidden field', 'magnetometerUncalibrated_x': 'hidden field', 'magnetometer_z': 'hidden field', 'magnetometer_y': 'hidden field', 'magnetometer_x': 'hidden field', 'location_altitude': 'inline label - visible with data', 'location_speedAccuracy': 'hidden field', 'location_bearingAccuracy': 'hidden field', 'location_latitude': 'hidden field', 'location_altitudeAboveMeanSeaLevel': 'hidden field', 'location_bearing': 'hidden field', 'location_horizontalAccuracy': 'hidden field', 'location_verticalAccuracy': 'hidden field', 'location_longitude': 'hidden field', 'location_speed': 'inline label - visible with data', 'gyroscopeUncalibrated_z': 'hidden field', 'gyroscopeUncalibrated_y': 'hidden field', 'gyroscopeUncalibrated_x': 'hidden field', 'orientation_yaw': 'inline label - visible with data', 'orientation_qx': 'hidden field', 'orientation_qz': 'hidden field', 'orientation_roll': 'inline label - always visible', 'orientation_qw': 'hidden field', 'orientation_qy': 'hidden field', 'orientation_pitch': 'inline label - visible with data', 'accelerometerUncalibrated_z': 'hidden field', 'accelerometerUncalibrated_y': 'hidden field', 'accelerometerUncalibrated_x': 'hidden field', 'compass_magneticBearing': 'hidden field', 'barometer_relativeAltitude': 'hidden field', 'barometer_pressure': 'hidden field', 'accelerometer_z': 'inline label - visible with data', 'accelerometer_y': 'inline label - visible with data', 'accelerometer_x': 'inline label - visible with data', 'AccelMagnitude': 'inline label - visible with data', });
lyr_TrailFeaturePts_6.set('fieldLabels', {'fid': 'hidden field', 'PhotoPath': 'no label', 'Difficulty': 'inline label - visible with data', 'Description': 'inline label - visible with data', });
lyr_TrailFeaturePts_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});