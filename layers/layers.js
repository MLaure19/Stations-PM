var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FusionIRIS_1 = new ol.format.GeoJSON();
var features_FusionIRIS_1 = format_FusionIRIS_1.readFeatures(json_FusionIRIS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FusionIRIS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FusionIRIS_1.addFeatures(features_FusionIRIS_1);
var lyr_FusionIRIS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FusionIRIS_1, 
                style: style_FusionIRIS_1,
                interactive: true,
                title: '<img src="styles/legend/FusionIRIS_1.png" /> Fusion IRIS'
            });
var format_MasqueOSM_2 = new ol.format.GeoJSON();
var features_MasqueOSM_2 = format_MasqueOSM_2.readFeatures(json_MasqueOSM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasqueOSM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasqueOSM_2.addFeatures(features_MasqueOSM_2);
var lyr_MasqueOSM_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MasqueOSM_2, 
                style: style_MasqueOSM_2,
                interactive: true,
                title: 'Masque OSM'
            });
var format_masqueIRIS_3 = new ol.format.GeoJSON();
var features_masqueIRIS_3 = format_masqueIRIS_3.readFeatures(json_masqueIRIS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_masqueIRIS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masqueIRIS_3.addFeatures(features_masqueIRIS_3);
var lyr_masqueIRIS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_masqueIRIS_3, 
                style: style_masqueIRIS_3,
                interactive: true,
                title: '<img src="styles/legend/masqueIRIS_3.png" /> masque IRIS'
            });
var format_StationsPM10ATMO_4 = new ol.format.GeoJSON();
var features_StationsPM10ATMO_4 = format_StationsPM10ATMO_4.readFeatures(json_StationsPM10ATMO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationsPM10ATMO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationsPM10ATMO_4.addFeatures(features_StationsPM10ATMO_4);
var lyr_StationsPM10ATMO_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StationsPM10ATMO_4, 
                style: style_StationsPM10ATMO_4,
                interactive: true,
                title: '<img src="styles/legend/StationsPM10ATMO_4.png" /> Stations PM10 ATMO'
            });
var format_StationsPM25ATMO_5 = new ol.format.GeoJSON();
var features_StationsPM25ATMO_5 = format_StationsPM25ATMO_5.readFeatures(json_StationsPM25ATMO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationsPM25ATMO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationsPM25ATMO_5.addFeatures(features_StationsPM25ATMO_5);
var lyr_StationsPM25ATMO_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StationsPM25ATMO_5, 
                style: style_StationsPM25ATMO_5,
                interactive: true,
                title: '<img src="styles/legend/StationsPM25ATMO_5.png" /> Stations PM2.5 ATMO'
            });

lyr_OSMStandard_0.setVisible(true);lyr_FusionIRIS_1.setVisible(true);lyr_MasqueOSM_2.setVisible(true);lyr_masqueIRIS_3.setVisible(true);lyr_StationsPM10ATMO_4.setVisible(true);lyr_StationsPM25ATMO_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_FusionIRIS_1,lyr_MasqueOSM_2,lyr_masqueIRIS_3,lyr_StationsPM10ATMO_4,lyr_StationsPM25ATMO_5];
lyr_FusionIRIS_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'insee_com': 'insee_com', 'nom_com': 'nom_com', 'iris': 'iris', 'code_iris': 'code_iris', 'nom_iris': 'nom_iris', 'typ_iris': 'typ_iris', });
lyr_MasqueOSM_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'params:(0,0)': 'params:(0,0)', });
lyr_masqueIRIS_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'ogc_fid0': 'ogc_fid0', 'params:(0,0)': 'params:(0,0)', });
lyr_StationsPM10ATMO_4.set('fieldAliases', {'Numéro station': 'Numéro station', 'Station': 'Station', 'Polluant': 'Polluant', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_StationsPM25ATMO_5.set('fieldAliases', {'Numéro station': 'Numéro station', 'Station': 'Station', 'Polluant': 'Polluant', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_FusionIRIS_1.set('fieldImages', {'ogc_fid': '', 'insee_com': '', 'nom_com': '', 'iris': '', 'code_iris': '', 'nom_iris': '', 'typ_iris': '', });
lyr_MasqueOSM_2.set('fieldImages', {'ogc_fid': '', 'params:(0,0)': '', });
lyr_masqueIRIS_3.set('fieldImages', {'ogc_fid': 'TextEdit', 'ogc_fid0': 'TextEdit', 'params:(0,0)': 'TextEdit', });
lyr_StationsPM10ATMO_4.set('fieldImages', {'Numéro station': 'Range', 'Station': 'TextEdit', 'Polluant': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_StationsPM25ATMO_5.set('fieldImages', {'Numéro station': 'Range', 'Station': 'TextEdit', 'Polluant': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_FusionIRIS_1.set('fieldLabels', {'ogc_fid': 'no label', 'insee_com': 'no label', 'nom_com': 'no label', 'iris': 'no label', 'code_iris': 'no label', 'nom_iris': 'no label', 'typ_iris': 'no label', });
lyr_MasqueOSM_2.set('fieldLabels', {'ogc_fid': 'no label', 'params:(0,0)': 'no label', });
lyr_masqueIRIS_3.set('fieldLabels', {'ogc_fid': 'no label', 'ogc_fid0': 'no label', 'params:(0,0)': 'no label', });
lyr_StationsPM10ATMO_4.set('fieldLabels', {'Numéro station': 'no label', 'Station': 'inline label', 'Polluant': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_StationsPM25ATMO_5.set('fieldLabels', {'Numéro station': 'no label', 'Station': 'no label', 'Polluant': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_StationsPM25ATMO_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});