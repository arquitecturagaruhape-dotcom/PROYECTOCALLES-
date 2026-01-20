var wms_layers = [];


        var lyr_GooglecnSatellite_0 = new ol.layer.Tile({
            'title': 'Google.cn Satellite',
            'type':'base',
            'opacity': 0.629000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_PC_GARUHAPE_1 = new ol.format.GeoJSON();
var features_PC_GARUHAPE_1 = format_PC_GARUHAPE_1.readFeatures(json_PC_GARUHAPE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PC_GARUHAPE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PC_GARUHAPE_1.addFeatures(features_PC_GARUHAPE_1);
var lyr_PC_GARUHAPE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PC_GARUHAPE_1, 
                style: style_PC_GARUHAPE_1,
                popuplayertitle: 'PC_GARUHAPE',
                interactive: false,
                title: '<img src="styles/legend/PC_GARUHAPE_1.png" /> PC_GARUHAPE'
            });
var format_ProyectoCalles_2 = new ol.format.GeoJSON();
var features_ProyectoCalles_2 = format_ProyectoCalles_2.readFeatures(json_ProyectoCalles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProyectoCalles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProyectoCalles_2.addFeatures(features_ProyectoCalles_2);
var lyr_ProyectoCalles_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProyectoCalles_2, 
                style: style_ProyectoCalles_2,
                popuplayertitle: 'ProyectoCalles',
                interactive: true,
    title: 'ProyectoCalles<br />\
    <img src="styles/legend/ProyectoCalles_2_0.png" /> Avenida<br />\
    <img src="styles/legend/ProyectoCalles_2_1.png" /> Calle<br />\
    <img src="styles/legend/ProyectoCalles_2_2.png" /> Calle Nueva<br />\
    <img src="styles/legend/ProyectoCalles_2_3.png" /> <br />' });

lyr_GooglecnSatellite_0.setVisible(true);lyr_PC_GARUHAPE_1.setVisible(true);lyr_ProyectoCalles_2.setVisible(true);
var layersList = [lyr_GooglecnSatellite_0,lyr_PC_GARUHAPE_1,lyr_ProyectoCalles_2];
lyr_PC_GARUHAPE_1.set('fieldAliases', {'CCA': 'CCA', 'NMP': 'NMP', 'Etiqueta': 'Etiqueta', 'ARA': 'ARA', 'st_length_': 'st_length_', 'TPA': 'TPA', 'SAG': 'SAG', 'PDA': 'PDA', 'Fecha': 'Fecha', 'KEY': 'KEY', 'NAME': 'NAME', });
lyr_ProyectoCalles_2.set('fieldAliases', {'Nombre': 'Nombre', 'Material': 'Material', 'Ordenanza': 'Ordenanza', 'Numero': 'Numero', 'Longitud': 'Longitud', 'Categoria': 'Categoria', 'Libro1_Descripción': 'Descripción', });
lyr_PC_GARUHAPE_1.set('fieldImages', {'CCA': 'TextEdit', 'NMP': 'TextEdit', 'Etiqueta': 'TextEdit', 'ARA': 'TextEdit', 'st_length_': 'TextEdit', 'TPA': 'TextEdit', 'SAG': 'TextEdit', 'PDA': 'TextEdit', 'Fecha': 'DateTime', 'KEY': 'TextEdit', 'NAME': 'TextEdit', });
lyr_ProyectoCalles_2.set('fieldImages', {'Nombre': 'TextEdit', 'Material': 'TextEdit', 'Ordenanza': 'TextEdit', 'Numero': 'TextEdit', 'Longitud': 'TextEdit', 'Categoria': 'ValueMap', 'Libro1_Descripción': 'TextEdit', });
lyr_PC_GARUHAPE_1.set('fieldLabels', {'CCA': 'inline label - visible with data', 'NMP': 'inline label - visible with data', 'Etiqueta': 'inline label - visible with data', 'ARA': 'inline label - visible with data', 'st_length_': 'inline label - visible with data', 'TPA': 'inline label - visible with data', 'SAG': 'inline label - visible with data', 'PDA': 'inline label - visible with data', 'Fecha': 'inline label - visible with data', 'KEY': 'inline label - visible with data', 'NAME': 'inline label - visible with data', });
lyr_ProyectoCalles_2.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Material': 'hidden field', 'Ordenanza': 'inline label - visible with data', 'Numero': 'hidden field', 'Longitud': 'hidden field', 'Categoria': 'hidden field', 'Libro1_Descripción': 'no label', });
lyr_ProyectoCalles_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});