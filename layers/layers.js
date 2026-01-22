var wms_layers = [];


        var lyr_GooglecnNormal_0 = new ol.layer.Tile({
            'title': 'Google.cn Normal',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GooglecnSatellite_1 = new ol.layer.Tile({
            'title': 'Google.cn Satellite',
            'opacity': 0.629000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_PC_GARUHAPE_2 = new ol.format.GeoJSON();
var features_PC_GARUHAPE_2 = format_PC_GARUHAPE_2.readFeatures(json_PC_GARUHAPE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PC_GARUHAPE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PC_GARUHAPE_2.addFeatures(features_PC_GARUHAPE_2);
var lyr_PC_GARUHAPE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PC_GARUHAPE_2, 
                style: style_PC_GARUHAPE_2,
                popuplayertitle: 'PC_GARUHAPE',
                interactive: false,
                title: '<img src="styles/legend/PC_GARUHAPE_2.png" /> PC_GARUHAPE'
            });
var format_ProyectoCallescopiar_3 = new ol.format.GeoJSON();
var features_ProyectoCallescopiar_3 = format_ProyectoCallescopiar_3.readFeatures(json_ProyectoCallescopiar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProyectoCallescopiar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProyectoCallescopiar_3.addFeatures(features_ProyectoCallescopiar_3);
var lyr_ProyectoCallescopiar_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProyectoCallescopiar_3, 
                style: style_ProyectoCallescopiar_3,
                popuplayertitle: 'ProyectoCalles copiar',
                interactive: false,
    title: 'ProyectoCalles copiar<br />\
    <img src="styles/legend/ProyectoCallescopiar_3_0.png" /> Avenida<br />\
    <img src="styles/legend/ProyectoCallescopiar_3_1.png" /> Calle<br />\
    <img src="styles/legend/ProyectoCallescopiar_3_2.png" /> Calle Nueva<br />\
    <img src="styles/legend/ProyectoCallescopiar_3_3.png" /> <br />' });
var format_ProyectoCalles_4 = new ol.format.GeoJSON();
var features_ProyectoCalles_4 = format_ProyectoCalles_4.readFeatures(json_ProyectoCalles_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProyectoCalles_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProyectoCalles_4.addFeatures(features_ProyectoCalles_4);
var lyr_ProyectoCalles_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProyectoCalles_4, 
                style: style_ProyectoCalles_4,
                popuplayertitle: 'ProyectoCalles',
                interactive: true,
    title: 'ProyectoCalles<br />\
    <img src="styles/legend/ProyectoCalles_4_0.png" /> Avenida<br />\
    <img src="styles/legend/ProyectoCalles_4_1.png" /> Calle<br />\
    <img src="styles/legend/ProyectoCalles_4_2.png" /> Calle Nueva<br />\
    <img src="styles/legend/ProyectoCalles_4_3.png" /> <br />' });
var format_Dividir_5 = new ol.format.GeoJSON();
var features_Dividir_5 = format_Dividir_5.readFeatures(json_Dividir_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dividir_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dividir_5.addFeatures(features_Dividir_5);
var lyr_Dividir_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dividir_5, 
                style: style_Dividir_5,
                popuplayertitle: 'Dividir',
                interactive: false,
                title: '<img src="styles/legend/Dividir_5.png" /> Dividir'
            });

lyr_GooglecnNormal_0.setVisible(true);lyr_GooglecnSatellite_1.setVisible(true);lyr_PC_GARUHAPE_2.setVisible(true);lyr_ProyectoCallescopiar_3.setVisible(true);lyr_ProyectoCalles_4.setVisible(true);lyr_Dividir_5.setVisible(true);
var layersList = [lyr_GooglecnNormal_0,lyr_GooglecnSatellite_1,lyr_PC_GARUHAPE_2,lyr_ProyectoCallescopiar_3,lyr_ProyectoCalles_4,lyr_Dividir_5];
lyr_PC_GARUHAPE_2.set('fieldAliases', {'CCA': 'CCA', 'NMP': 'NMP', 'Etiqueta': 'Etiqueta', 'ARA': 'ARA', 'st_length_': 'st_length_', 'TPA': 'TPA', 'SAG': 'SAG', 'PDA': 'PDA', 'Fecha': 'Fecha', 'KEY': 'KEY', 'NAME': 'NAME', });
lyr_ProyectoCallescopiar_3.set('fieldAliases', {'Nombre': 'Nombre', 'Material': 'Material', 'Ordenanza': 'Ordenanza', 'Numero': 'Numero', 'Longitud': 'Longitud', 'Categoria': 'Categoria', 'Libro1_Descripción': 'Descripción', });
lyr_ProyectoCalles_4.set('fieldAliases', {'Nombre': 'Nombre', 'Material': 'Material', 'Ordenanza': 'Ordenanza', 'Numero': 'Numero', 'Longitud': 'Longitud', 'Categoria': 'Categoria', 'Libro1_Descripción': 'Descripción', });
lyr_Dividir_5.set('fieldAliases', {'Nombre': 'Nombre', 'Material': 'Material', 'Ordenanza': 'Ordenanza', 'Numero': 'Numero', 'Longitud': 'Longitud', 'Categoria': 'Categoria', 'Libro1_Descripción': 'Libro1_Descripción', });
lyr_PC_GARUHAPE_2.set('fieldImages', {'CCA': 'TextEdit', 'NMP': 'TextEdit', 'Etiqueta': 'TextEdit', 'ARA': 'TextEdit', 'st_length_': 'TextEdit', 'TPA': 'TextEdit', 'SAG': 'TextEdit', 'PDA': 'TextEdit', 'Fecha': 'DateTime', 'KEY': 'TextEdit', 'NAME': 'TextEdit', });
lyr_ProyectoCallescopiar_3.set('fieldImages', {'Nombre': 'TextEdit', 'Material': 'TextEdit', 'Ordenanza': 'TextEdit', 'Numero': 'TextEdit', 'Longitud': 'TextEdit', 'Categoria': 'ValueMap', 'Libro1_Descripción': 'TextEdit', });
lyr_ProyectoCalles_4.set('fieldImages', {'Nombre': 'TextEdit', 'Material': 'TextEdit', 'Ordenanza': 'TextEdit', 'Numero': 'TextEdit', 'Longitud': 'TextEdit', 'Categoria': 'ValueMap', 'Libro1_Descripción': 'TextEdit', });
lyr_Dividir_5.set('fieldImages', {'Nombre': 'TextEdit', 'Material': 'TextEdit', 'Ordenanza': 'TextEdit', 'Numero': 'TextEdit', 'Longitud': 'TextEdit', 'Categoria': 'TextEdit', 'Libro1_Descripción': 'TextEdit', });
lyr_PC_GARUHAPE_2.set('fieldLabels', {'CCA': 'inline label - visible with data', 'NMP': 'inline label - visible with data', 'Etiqueta': 'inline label - visible with data', 'ARA': 'inline label - visible with data', 'st_length_': 'inline label - visible with data', 'TPA': 'inline label - visible with data', 'SAG': 'inline label - visible with data', 'PDA': 'inline label - visible with data', 'Fecha': 'inline label - visible with data', 'KEY': 'inline label - visible with data', 'NAME': 'inline label - visible with data', });
lyr_ProyectoCallescopiar_3.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Ordenanza': 'inline label - visible with data', 'Numero': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Libro1_Descripción': 'inline label - visible with data', });
lyr_ProyectoCalles_4.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Material': 'hidden field', 'Ordenanza': 'inline label - visible with data', 'Numero': 'hidden field', 'Longitud': 'hidden field', 'Categoria': 'hidden field', 'Libro1_Descripción': 'inline label - visible with data', });
lyr_Dividir_5.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Ordenanza': 'inline label - visible with data', 'Numero': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Libro1_Descripción': 'inline label - visible with data', });
lyr_Dividir_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});