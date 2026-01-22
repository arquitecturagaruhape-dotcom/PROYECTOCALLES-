var size = 0;
var placement = 'point';
function categories_ProyectoCalles_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Avenida':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(205,208,211,0.10588235294117647)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 19.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Calle':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,251,255,0.0784313725490196)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 19.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Calle Nueva':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,214,7,0.03529411764705882)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 38.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(94,235,214,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ProyectoCalles_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Categoria");
    var labelFont = "16.900000000000002px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.5;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_ProyectoCalles_4(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
