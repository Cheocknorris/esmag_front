var map = L.map('map', {
    zoomControl:true, maxZoom:35, minZoom:0
}).fitBounds([[19.204737933783157,-99.40816020359256],[19.359109118658953,-99.11312322171389]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});


var bounds_group = new L.featureGroup([]);
function setBounds() {
}

        function pop_RTP_1(feature, layer) {
        }

        function style_RTP_1_0() {
            return {
                pane: 'pane_RTP_1',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(225,231,9,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_RTP_1');
        map.getPane('pane_RTP_1').style.zIndex = 401;
        map.getPane('pane_RTP_1').style['mix-blend-mode'] = 'normal';
        var layer_RTP_1 = new L.geoJson(json_RTP_1, {
            attribution: '',
            interactive: true,
            dataVar: 'json_RTP_1',
            layerName: 'layer_RTP_1',
            pane: 'pane_RTP_1',
            onEachFeature: pop_RTP_1,
            style: style_RTP_1_0,
        });
        bounds_group.addLayer(layer_RTP_1);


        function pop_AreasNaturales_0(feature, layer) {
        }

        function style_AreasNaturales_0_0() {
            return {
                pane: 'pane_AreasNaturales_0',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(13,196,66,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_AreasNaturales_0');
        map.getPane('pane_AreasNaturales_0').style.zIndex = 400;
        map.getPane('pane_AreasNaturales_0').style['mix-blend-mode'] = 'normal';
        var layer_AreasNaturales_0 = new L.geoJson(json_AreasNaturales_0, {
            attribution: '',
            interactive: true,
            dataVar: 'json_AreasNaturales_0',
            layerName: 'layer_AreasNaturales_0',
            pane: 'pane_AreasNaturales_0',
            onEachFeature: pop_AreasNaturales_0,
            style: style_AreasNaturales_0_0,
        });
        bounds_group.addLayer(layer_AreasNaturales_0);
        
        function pop_AICA_2(feature, layer) {
        }

        var pattern_AICA_2_0 = new L.StripePattern({
            weight: 0.3,
            spaceWeight: 2.0,
            color: '#000000',
            opacity: 1.0,
            spaceOpacity: 0,
            angle: 315
        });
        pattern_AICA_2_0.addTo(map);
        function style_AICA_2_0() {
            return {
                pane: 'pane_AICA_2',
                stroke: false,
                fillOpacity: 1,
                fillPattern: pattern_AICA_2_0,
                interactive: true,
            }
        }
        function style_AICA_2_1() {
            return {
                pane: 'pane_AICA_2',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_AICA_2');
        map.getPane('pane_AICA_2').style.zIndex = 402;
        map.getPane('pane_AICA_2').style['mix-blend-mode'] = 'normal';
        var layer_AICA_2 = new L.geoJson.multiStyle(json_AICA_2, {
            attribution: '',
            interactive: true,
            dataVar: 'json_AICA_2',
            layerName: 'layer_AICA_2',
            pane: 'pane_AICA_2',
            onEachFeature: pop_AICA_2,
            styles: [style_AICA_2_0,style_AICA_2_1,]
        });
        bounds_group.addLayer(layer_AICA_2);
        function pop_AreasNaturales_3(feature, layer) {
        }

        function style_AreasNaturales_3_0() {
            return {
                pane: 'pane_AreasNaturales_3',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(13,196,66,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_AreasNaturales_3');
        map.getPane('pane_AreasNaturales_3').style.zIndex = 403;
        map.getPane('pane_AreasNaturales_3').style['mix-blend-mode'] = 'normal';
        var layer_AreasNaturales_3 = new L.geoJson(json_AreasNaturales_3, {
            attribution: '',
            interactive: true,
            dataVar: 'json_AreasNaturales_3',
            layerName: 'layer_AreasNaturales_3',
            pane: 'pane_AreasNaturales_3',
            onEachFeature: pop_AreasNaturales_3,
            style: style_AreasNaturales_3_0,
        });
        bounds_group.addLayer(layer_AreasNaturales_3);
        function pop_RTP_4(feature, layer) {
        }

        function style_RTP_4_0() {
            return {
                pane: 'pane_RTP_4',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(225,231,9,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_RTP_4');
        map.getPane('pane_RTP_4').style.zIndex = 404;
        map.getPane('pane_RTP_4').style['mix-blend-mode'] = 'normal';
        var layer_RTP_4 = new L.geoJson(json_RTP_4, {
            attribution: '',
            interactive: true,
            dataVar: 'json_RTP_4',
            layerName: 'layer_RTP_4',
            pane: 'pane_RTP_4',
            onEachFeature: pop_RTP_4,
            style: style_RTP_4_0,
        });
        bounds_group.addLayer(layer_RTP_4);
        function pop_AICA_5(feature, layer) {
        }

        var pattern_AICA_5_0 = new L.StripePattern({
            weight: 0.3,
            spaceWeight: 2.0,
            color: '#000000',
            opacity: 1.0,
            spaceOpacity: 0,
            angle: 315
        });
        pattern_AICA_5_0.addTo(map);
        function style_AICA_5_0() {
            return {
                pane: 'pane_AICA_5',
                stroke: false,
                fillOpacity: 1,
                fillPattern: pattern_AICA_5_0,
                interactive: true,
            }
        }
        function style_AICA_5_1() {
            return {
                pane: 'pane_AICA_5',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_AICA_5');
        map.getPane('pane_AICA_5').style.zIndex = 405;
        map.getPane('pane_AICA_5').style['mix-blend-mode'] = 'normal';
        var layer_AICA_5 = new L.geoJson.multiStyle(json_AICA_5, {
            attribution: '',
            interactive: true,
            dataVar: 'json_AICA_5',
            layerName: 'layer_AICA_5',
            pane: 'pane_AICA_5',
            onEachFeature: pop_AICA_5,
            styles: [style_AICA_5_0,style_AICA_5_1,]
        });
        bounds_group.addLayer(layer_AICA_5);
        function pop_RTPAjuscoChichinautzin_6(feature, layer) {
        }

        function style_RTPAjuscoChichinautzin_6_0() {
            return {
                pane: 'pane_RTPAjuscoChichinautzin_6',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(133,182,111,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_RTPAjuscoChichinautzin_6');
        map.getPane('pane_RTPAjuscoChichinautzin_6').style.zIndex = 406;
        map.getPane('pane_RTPAjuscoChichinautzin_6').style['mix-blend-mode'] = 'normal';
        var layer_RTPAjuscoChichinautzin_6 = new L.geoJson(json_RTPAjuscoChichinautzin_6, {
            attribution: '',
            interactive: true,
            dataVar: 'json_RTPAjuscoChichinautzin_6',
            layerName: 'layer_RTPAjuscoChichinautzin_6',
            pane: 'pane_RTPAjuscoChichinautzin_6',
            onEachFeature: pop_RTPAjuscoChichinautzin_6,
            style: style_RTPAjuscoChichinautzin_6_0,
        });
        bounds_group.addLayer(layer_RTPAjuscoChichinautzin_6);
        function pop_AICASurdelValledeMxico_7(feature, layer) {
        }

        function style_AICASurdelValledeMxico_7_0() {
            return {
                pane: 'pane_AICASurdelValledeMxico_7',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(164,113,88,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_AICASurdelValledeMxico_7');
        map.getPane('pane_AICASurdelValledeMxico_7').style.zIndex = 407;
        map.getPane('pane_AICASurdelValledeMxico_7').style['mix-blend-mode'] = 'normal';
        var layer_AICASurdelValledeMxico_7 = new L.geoJson(json_AICASurdelValledeMxico_7, {
            attribution: '',
            interactive: true,
            dataVar: 'json_AICASurdelValledeMxico_7',
            layerName: 'layer_AICASurdelValledeMxico_7',
            pane: 'pane_AICASurdelValledeMxico_7',
            onEachFeature: pop_AICASurdelValledeMxico_7,
            style: style_AICASurdelValledeMxico_7_0,
        });
        bounds_group.addLayer(layer_AICASurdelValledeMxico_7);
        function pop_Decreto1932_8(feature, layer) {
        }

        function style_Decreto1932_8_0() {
            return {
                pane: 'pane_Decreto1932_8',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(217,232,53,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_Decreto1932_8');
        map.getPane('pane_Decreto1932_8').style.zIndex = 408;
        map.getPane('pane_Decreto1932_8').style['mix-blend-mode'] = 'normal';
        var layer_Decreto1932_8 = new L.geoJson(json_Decreto1932_8, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Decreto1932_8',
            layerName: 'layer_Decreto1932_8',
            pane: 'pane_Decreto1932_8',
            onEachFeature: pop_Decreto1932_8,
            style: style_Decreto1932_8_0,
        });
        bounds_group.addLayer(layer_Decreto1932_8);
        function pop_Acuerdo1947_9(feature, layer) {
        }

        function style_Acuerdo1947_9_0() {
            return {
                pane: 'pane_Acuerdo1947_9',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(85,255,126,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_Acuerdo1947_9');
        map.getPane('pane_Acuerdo1947_9').style.zIndex = 409;
        map.getPane('pane_Acuerdo1947_9').style['mix-blend-mode'] = 'normal';
        var layer_Acuerdo1947_9 = new L.geoJson(json_Acuerdo1947_9, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Acuerdo1947_9',
            layerName: 'layer_Acuerdo1947_9',
            pane: 'pane_Acuerdo1947_9',
            onEachFeature: pop_Acuerdo1947_9,
            style: style_Acuerdo1947_9_0,
        });
        bounds_group.addLayer(layer_Acuerdo1947_9);
        function pop_PGOEDFde2000_10(feature, layer) {
        }

        function style_PGOEDFde2000_10_0() {
            return {
                pane: 'pane_PGOEDFde2000_10',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(145,82,45,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_PGOEDFde2000_10');
        map.getPane('pane_PGOEDFde2000_10').style.zIndex = 410;
        map.getPane('pane_PGOEDFde2000_10').style['mix-blend-mode'] = 'normal';
        var layer_PGOEDFde2000_10 = new L.geoJson(json_PGOEDFde2000_10, {
            attribution: '',
            interactive: true,
            dataVar: 'json_PGOEDFde2000_10',
            layerName: 'layer_PGOEDFde2000_10',
            pane: 'pane_PGOEDFde2000_10',
            onEachFeature: pop_PGOEDFde2000_10,
            style: style_PGOEDFde2000_10_0,
        });
        bounds_group.addLayer(layer_PGOEDFde2000_10);
        function pop_Decretode2012_11(feature, layer) {
        }

        function style_Decretode2012_11_0() {
            return {
                pane: 'pane_Decretode2012_11',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(125,139,143,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_Decretode2012_11');
        map.getPane('pane_Decretode2012_11').style.zIndex = 411;
        map.getPane('pane_Decretode2012_11').style['mix-blend-mode'] = 'normal';
        var layer_Decretode2012_11 = new L.geoJson(json_Decretode2012_11, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Decretode2012_11',
            layerName: 'layer_Decretode2012_11',
            pane: 'pane_Decretode2012_11',
            onEachFeature: pop_Decretode2012_11,
            style: style_Decretode2012_11_0,
        });
        bounds_group.addLayer(layer_Decretode2012_11);
        function pop_Comunidadesyejidos_12(feature, layer) {
        }

        function style_Comunidadesyejidos_12_0(feature) {
            switch(String(feature.properties['PROPIED'])) {
                case 'Bienes comunales':
                    return {
                pane: 'pane_Comunidadesyejidos_12',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,245,240,1.0)',
                interactive: true,
            }
                    break;
                case 'Ejido':
                    return {
                pane: 'pane_Comunidadesyejidos_12',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,112,80,1.0)',
                interactive: true,
            }
                    break;
            }
        }
        map.createPane('pane_Comunidadesyejidos_12');
        map.getPane('pane_Comunidadesyejidos_12').style.zIndex = 412;
        map.getPane('pane_Comunidadesyejidos_12').style['mix-blend-mode'] = 'normal';
        var layer_Comunidadesyejidos_12 = new L.geoJson(json_Comunidadesyejidos_12, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Comunidadesyejidos_12',
            layerName: 'layer_Comunidadesyejidos_12',
            pane: 'pane_Comunidadesyejidos_12',
            onEachFeature: pop_Comunidadesyejidos_12,
            style: style_Comunidadesyejidos_12_0,
        });
        bounds_group.addLayer(layer_Comunidadesyejidos_12);
        function pop_Usodesuelo_13(feature, layer) {
        }

        function style_Usodesuelo_13_0() {
            return {
                pane: 'pane_Usodesuelo_13',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(141,90,153,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_Usodesuelo_13');
        map.getPane('pane_Usodesuelo_13').style.zIndex = 413;
        map.getPane('pane_Usodesuelo_13').style['mix-blend-mode'] = 'normal';
        var layer_Usodesuelo_13 = new L.geoJson(json_Usodesuelo_13, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Usodesuelo_13',
            layerName: 'layer_Usodesuelo_13',
            pane: 'pane_Usodesuelo_13',
            onEachFeature: pop_Usodesuelo_13,
            style: style_Usodesuelo_13_0,
        });
        bounds_group.addLayer(layer_Usodesuelo_13);
        function pop_Sitiosdereferencia_14(feature, layer) {
        }

        function style_Sitiosdereferencia_14_0() {
            return {
                pane: 'pane_Sitiosdereferencia_14',
                shape: 'diamond',
                radius: 6.0,
                opacity: 1,
                color: 'rgba(61,128,53,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,163,35,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_Sitiosdereferencia_14');
        map.getPane('pane_Sitiosdereferencia_14').style.zIndex = 414;
        map.getPane('pane_Sitiosdereferencia_14').style['mix-blend-mode'] = 'normal';
        var layer_Sitiosdereferencia_14 = new L.geoJson(json_Sitiosdereferencia_14, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Sitiosdereferencia_14',
            layerName: 'layer_Sitiosdereferencia_14',
            pane: 'pane_Sitiosdereferencia_14',
            onEachFeature: pop_Sitiosdereferencia_14,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.shapeMarker(latlng, style_Sitiosdereferencia_14_0(feature));
            },
        });
        bounds_group.addLayer(layer_Sitiosdereferencia_14);
        function pop_Cobertura_15(feature, layer) {
        }

        function style_Cobertura_15_0(feature) {
            switch(String(feature.properties['Uso'])) {
                case 'Bosque de Pinus hartwegii':
                    return {
                pane: 'pane_Cobertura_15',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(3,91,13,1.0)',
                interactive: true,
            }
                    break;
                case 'Bosque de Abies religiosa':
                    return {
                pane: 'pane_Cobertura_15',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(70,143,73,1.0)',
                interactive: true,
            }
                    break;
                case 'Bosque de coníferas':
                    return {
                pane: 'pane_Cobertura_15',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(137,195,134,1.0)',
                interactive: true,
            }
                    break;
                case 'Bosque de Quercus':
                    return {
                pane: 'pane_Cobertura_15',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(188,228,170,1.0)',
                interactive: true,
            }
                    break;
                case 'Bosque mixto':
                    return {
                pane: 'pane_Cobertura_15',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(222,242,180,1.0)',
                interactive: true,
            }
                    break;
                case 'Vegetación secundaria':
                    return {
                pane: 'pane_Cobertura_15',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,255,191,1.0)',
                interactive: true,
            }
                    break;
                case 'Matorral (Furcraea)':
                    return {
                pane: 'pane_Cobertura_15',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,223,154,1.0)',
                interactive: true,
            }
                    break;
                case 'Pastizal':
                    return {
                pane: 'pane_Cobertura_15',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(254,190,116,1.0)',
                interactive: true,
            }
                    break;
                case 'Bosque cultivado':
                    return {
                pane: 'pane_Cobertura_15',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(246,144,83,1.0)',
                interactive: true,
            }
                    break;
                case 'Agricultura de temporal':
                    return {
                pane: 'pane_Cobertura_15',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(231,84,55,1.0)',
                interactive: true,
            }
                    break;
                case 'Bosque perturbado':
                    return {
                pane: 'pane_Cobertura_15',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(141,141,141,1.0)',
                interactive: true,
            }
                    break;
            }
        }
        map.createPane('pane_Cobertura_15');
        map.getPane('pane_Cobertura_15').style.zIndex = 415;
        map.getPane('pane_Cobertura_15').style['mix-blend-mode'] = 'normal';
        var layer_Cobertura_15 = new L.geoJson(json_Cobertura_15, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Cobertura_15',
            layerName: 'layer_Cobertura_15',
            pane: 'pane_Cobertura_15',
            onEachFeature: pop_Cobertura_15,
            style: style_Cobertura_15_0,
        });
        bounds_group.addLayer(layer_Cobertura_15);
        function pop_PresenciaObservada_16(feature, layer) {
        }

        function style_PresenciaObservada_16_0() {
            return {
                pane: 'pane_PresenciaObservada_16',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(164,113,88,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_PresenciaObservada_16');
        map.getPane('pane_PresenciaObservada_16').style.zIndex = 416;
        map.getPane('pane_PresenciaObservada_16').style['mix-blend-mode'] = 'normal';
        var layer_PresenciaObservada_16 = new L.geoJson(json_PresenciaObservada_16, {
            attribution: '',
            interactive: true,
            dataVar: 'json_PresenciaObservada_16',
            layerName: 'layer_PresenciaObservada_16',
            pane: 'pane_PresenciaObservada_16',
            onEachFeature: pop_PresenciaObservada_16,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_PresenciaObservada_16_0(feature));
            },
        });
        bounds_group.addLayer(layer_PresenciaObservada_16);
        function pop_Vegetacin_17(feature, layer) {
        }

        function style_Vegetacin_17_0(feature) {
            switch(String(feature.properties['Uso'])) {
                case 'Bosque de Pinus hartwegii':
                    return {
                pane: 'pane_Vegetacin_17',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(3,91,13,1.0)',
                interactive: true,
            }
                    break;
                case 'Bosque de Abies religiosa':
                    return {
                pane: 'pane_Vegetacin_17',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(70,143,73,1.0)',
                interactive: true,
            }
                    break;
                case 'Bosque de coníferas':
                    return {
                pane: 'pane_Vegetacin_17',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(137,195,134,1.0)',
                interactive: true,
            }
                    break;
                case 'Bosque de Quercus':
                    return {
                pane: 'pane_Vegetacin_17',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(188,228,170,1.0)',
                interactive: true,
            }
                    break;
                case 'Bosque mixto':
                    return {
                pane: 'pane_Vegetacin_17',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(222,242,180,1.0)',
                interactive: true,
            }
                    break;
                case 'Vegetación secundaria':
                    return {
                pane: 'pane_Vegetacin_17',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,255,191,1.0)',
                interactive: true,
            }
                    break;
                case 'Matorral (Furcraea)':
                    return {
                pane: 'pane_Vegetacin_17',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,223,154,1.0)',
                interactive: true,
            }
                    break;
                case 'Pastizal':
                    return {
                pane: 'pane_Vegetacin_17',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(254,190,116,1.0)',
                interactive: true,
            }
                    break;
                case 'Bosque cultivado':
                    return {
                pane: 'pane_Vegetacin_17',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(246,144,83,1.0)',
                interactive: true,
            }
                    break;
                case 'Agricultura de temporal':
                    return {
                pane: 'pane_Vegetacin_17',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(231,84,55,1.0)',
                interactive: true,
            }
                    break;
                case 'Bosque perturbado':
                    return {
                pane: 'pane_Vegetacin_17',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(141,141,141,1.0)',
                interactive: true,
            }
                    break;
            }
        }
        map.createPane('pane_Vegetacin_17');
        map.getPane('pane_Vegetacin_17').style.zIndex = 417;
        map.getPane('pane_Vegetacin_17').style['mix-blend-mode'] = 'normal';
        var layer_Vegetacin_17 = new L.geoJson(json_Vegetacin_17, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Vegetacin_17',
            layerName: 'layer_Vegetacin_17',
            pane: 'pane_Vegetacin_17',
            onEachFeature: pop_Vegetacin_17,
            style: style_Vegetacin_17_0,
        });
        bounds_group.addLayer(layer_Vegetacin_17);
        function pop_TemperaturamediaC_18(feature, layer) {
        }

        function style_TemperaturamediaC_18_0(feature) {
            switch(String(feature.properties['INTERVALO'])) {
                case '<5':
                    return {
                pane: 'pane_TemperaturamediaC_18',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(254,240,217,1.0)',
                interactive: true,
            }
                    break;
                case '5-6':
                    return {
                pane: 'pane_TemperaturamediaC_18',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(254,226,186,1.0)',
                interactive: true,
            }
                    break;
                case '6-7':
                    return {
                pane: 'pane_TemperaturamediaC_18',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(254,212,154,1.0)',
                interactive: true,
            }
                    break;
                case '7-8':
                    return {
                pane: 'pane_TemperaturamediaC_18',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(253,192,128,1.0)',
                interactive: true,
            }
                    break;
                case '8-9':
                    return {
                pane: 'pane_TemperaturamediaC_18',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(253,166,109,1.0)',
                interactive: true,
            }
                    break;
                case '9-10':
                    return {
                pane: 'pane_TemperaturamediaC_18',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,141,89,1.0)',
                interactive: true,
            }
                    break;
                case '10-11':
                    return {
                pane: 'pane_TemperaturamediaC_18',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(242,114,74,1.0)',
                interactive: true,
            }
                    break;
                case '11-12':
                    return {
                pane: 'pane_TemperaturamediaC_18',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(232,87,58,1.0)',
                interactive: true,
            }
                    break;
                case '12-13':
                    return {
                pane: 'pane_TemperaturamediaC_18',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(218,59,40,1.0)',
                interactive: true,
            }
                    break;
                case '13-14':
                    return {
                pane: 'pane_TemperaturamediaC_18',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(198,29,20,1.0)',
                interactive: true,
            }
                    break;
                case '14-15':
                    return {
                pane: 'pane_TemperaturamediaC_18',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(179,0,0,1.0)',
                interactive: true,
            }
                    break;
            }
        }
        map.createPane('pane_TemperaturamediaC_18');
        map.getPane('pane_TemperaturamediaC_18').style.zIndex = 418;
        map.getPane('pane_TemperaturamediaC_18').style['mix-blend-mode'] = 'normal';
        var layer_TemperaturamediaC_18 = new L.geoJson(json_TemperaturamediaC_18, {
            attribution: '',
            interactive: true,
            dataVar: 'json_TemperaturamediaC_18',
            layerName: 'layer_TemperaturamediaC_18',
            pane: 'pane_TemperaturamediaC_18',
            onEachFeature: pop_TemperaturamediaC_18,
            style: style_TemperaturamediaC_18_0,
        });
        bounds_group.addLayer(layer_TemperaturamediaC_18);
        function pop_Edafologa_19(feature, layer) {
        }

        function style_Edafologa_19_0(feature) {
            switch(String(feature.properties['CLASE1'])) {
                case 'Andosol húmico':
                    return {
                pane: 'pane_Edafologa_19',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(254,240,217,1.0)',
                interactive: true,
            }
                    break;
                case 'Andosol mólico':
                    return {
                pane: 'pane_Edafologa_19',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(254,216,164,1.0)',
                interactive: true,
            }
                    break;
                case 'Andosol ócrico':
                    return {
                pane: 'pane_Edafologa_19',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(253,183,122,1.0)',
                interactive: true,
            }
                    break;
                case 'Feozem háplico':
                    return {
                pane: 'pane_Edafologa_19',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(252,141,89,1.0)',
                interactive: true,
            }
                    break;
                case 'Feozem lúvico':
                    return {
                pane: 'pane_Edafologa_19',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(236,96,63,1.0)',
                interactive: true,
            }
                    break;
                case 'Litosol':
                    return {
                pane: 'pane_Edafologa_19',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(211,49,34,1.0)',
                interactive: true,
            }
                    break;
            }
        }
        map.createPane('pane_Edafologa_19');
        map.getPane('pane_Edafologa_19').style.zIndex = 419;
        map.getPane('pane_Edafologa_19').style['mix-blend-mode'] = 'normal';
        var layer_Edafologa_19 = new L.geoJson(json_Edafologa_19, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Edafologa_19',
            layerName: 'layer_Edafologa_19',
            pane: 'pane_Edafologa_19',
            onEachFeature: pop_Edafologa_19,
            style: style_Edafologa_19_0,
        });
        bounds_group.addLayer(layer_Edafologa_19);
        function pop_Climas_20(feature, layer) {
        }

        function style_Climas_20_0(feature) {
            switch(String(feature.properties['CLIMAS'])) {
                case 'Cb´_(w2)(w)(i)':
                    return {
                pane: 'pane_Climas_20',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(107,255,107,1.0)',
                interactive: true,
            }
                    break;
                case 'Cb_(w2)(w)(i´)':
                    return {
                pane: 'pane_Climas_20',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(62,186,57,1.0)',
                interactive: true,
            }
                    break;
                case 'E(T)HC_(w2)':
                    return {
                pane: 'pane_Climas_20',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(18,116,7,1.0)',
                interactive: true,
            }
                    break;
            }
        }
        map.createPane('pane_Climas_20');
        map.getPane('pane_Climas_20').style.zIndex = 420;
        map.getPane('pane_Climas_20').style['mix-blend-mode'] = 'normal';
        var layer_Climas_20 = new L.geoJson(json_Climas_20, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Climas_20',
            layerName: 'layer_Climas_20',
            pane: 'pane_Climas_20',
            onEachFeature: pop_Climas_20,
            style: style_Climas_20_0,
        });
        bounds_group.addLayer(layer_Climas_20);
        function pop_Plantasdetratamientopotabilizadora_21(feature, layer) {
        }

        function style_Plantasdetratamientopotabilizadora_21_0(feature) {
            switch(String(feature.properties['Name'])) {
                case 'Planta de Tratamiento de Aguas Residuales Río Magdalena (SACMEX)':
                    return {
                pane: 'pane_Plantasdetratamientopotabilizadora_21',
                shape: 'triangle',
                radius: 5.6,
                stroke: false,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(161,214,92,1.0)',
                interactive: true,
            }
                    break;
                case 'Planta Potabilizadora Magdalena Contreras (SACMEX)':
                    return {
                pane: 'pane_Plantasdetratamientopotabilizadora_21',
                shape: 'triangle',
                radius: 5.6,
                stroke: false,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(156,19,55,1.0)',
                interactive: true,
            }
                    break;
                case 'Planta Potabilizadora Río Magdalena (SACMEX)':
                    return {
                pane: 'pane_Plantasdetratamientopotabilizadora_21',
                shape: 'triangle',
                radius: 5.6,
                stroke: false,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(37,217,199,1.0)',
                interactive: true,
            }
                    break;
            }
        }
        map.createPane('pane_Plantasdetratamientopotabilizadora_21');
        map.getPane('pane_Plantasdetratamientopotabilizadora_21').style.zIndex = 421;
        map.getPane('pane_Plantasdetratamientopotabilizadora_21').style['mix-blend-mode'] = 'normal';
        var layer_Plantasdetratamientopotabilizadora_21 = new L.geoJson(json_Plantasdetratamientopotabilizadora_21, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Plantasdetratamientopotabilizadora_21',
            layerName: 'layer_Plantasdetratamientopotabilizadora_21',
            pane: 'pane_Plantasdetratamientopotabilizadora_21',
            onEachFeature: pop_Plantasdetratamientopotabilizadora_21,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.shapeMarker(latlng, style_Plantasdetratamientopotabilizadora_21_0(feature));
            },
        });
        bounds_group.addLayer(layer_Plantasdetratamientopotabilizadora_21);
        function pop_Plantasdetratamientopotabilizadora_22(feature, layer) {
        }

        function style_Plantasdetratamientopotabilizadora_22_0(feature) {
            switch(String(feature.properties['Name'])) {
                case 'Planta de Tratamiento de Aguas Residuales Río Magdalena (SACMEX)':
                    return {
                pane: 'pane_Plantasdetratamientopotabilizadora_22',
                shape: 'triangle',
                radius: 5.6,
                stroke: false,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(161,214,92,1.0)',
                interactive: true,
            }
                    break;
                case 'Planta Potabilizadora Magdalena Contreras (SACMEX)':
                    return {
                pane: 'pane_Plantasdetratamientopotabilizadora_22',
                shape: 'triangle',
                radius: 5.6,
                stroke: false,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(156,19,55,1.0)',
                interactive: true,
            }
                    break;
                case 'Planta Potabilizadora Río Magdalena (SACMEX)':
                    return {
                pane: 'pane_Plantasdetratamientopotabilizadora_22',
                shape: 'triangle',
                radius: 5.6,
                stroke: false,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(37,217,199,1.0)',
                interactive: true,
            }
                    break;
            }
        }
        map.createPane('pane_Plantasdetratamientopotabilizadora_22');
        map.getPane('pane_Plantasdetratamientopotabilizadora_22').style.zIndex = 422;
        map.getPane('pane_Plantasdetratamientopotabilizadora_22').style['mix-blend-mode'] = 'normal';
        var layer_Plantasdetratamientopotabilizadora_22 = new L.geoJson(json_Plantasdetratamientopotabilizadora_22, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Plantasdetratamientopotabilizadora_22',
            layerName: 'layer_Plantasdetratamientopotabilizadora_22',
            pane: 'pane_Plantasdetratamientopotabilizadora_22',
            onEachFeature: pop_Plantasdetratamientopotabilizadora_22,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.shapeMarker(latlng, style_Plantasdetratamientopotabilizadora_22_0(feature));
            },
        });
        bounds_group.addLayer(layer_Plantasdetratamientopotabilizadora_22);
        function pop_Calidaddelagua_23(feature, layer) {
        }
        function style_Calidaddelagua_23_0(feature) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_Calidaddelagua_23rule0_eval_expression(context)) {
                  return {
                pane: 'pane_Calidaddelagua_23',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(18,20,131,1.0)',
                interactive: true,
            };
                }
                else if (exp_Calidaddelagua_23rule1_eval_expression(context)) {
                  return {
                pane: 'pane_Calidaddelagua_23',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(237,243,29,1.0)',
                interactive: true,
            };
                }
                else if (exp_Calidaddelagua_23rule2_eval_expression(context)) {
                  return {
                pane: 'pane_Calidaddelagua_23',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,151,86,1.0)',
                interactive: true,
            };
                }
                else if (exp_Calidaddelagua_23rule3_eval_expression(context)) {
                  return {
                pane: 'pane_Calidaddelagua_23',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(213,23,60,1.0)',
                interactive: true,
            };
                }
            else {
                return {fill: false, stroke: false};
            }
        }
        map.createPane('pane_Calidaddelagua_23');
        map.getPane('pane_Calidaddelagua_23').style.zIndex = 423;
        map.getPane('pane_Calidaddelagua_23').style['mix-blend-mode'] = 'normal';
        var layer_Calidaddelagua_23 = new L.geoJson(json_Calidaddelagua_23, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Calidaddelagua_23',
            layerName: 'layer_Calidaddelagua_23',
            pane: 'pane_Calidaddelagua_23',
            onEachFeature: pop_Calidaddelagua_23,
            style: style_Calidaddelagua_23_0,
        });
        bounds_group.addLayer(layer_Calidaddelagua_23);
        function pop_Plantasdetratamientopotabilizadora_24(feature, layer) {
        }

        function style_Plantasdetratamientopotabilizadora_24_0() {
            return {
                pane: 'pane_Plantasdetratamientopotabilizadora_24',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(27,123,196,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_Plantasdetratamientopotabilizadora_24');
        map.getPane('pane_Plantasdetratamientopotabilizadora_24').style.zIndex = 424;
        map.getPane('pane_Plantasdetratamientopotabilizadora_24').style['mix-blend-mode'] = 'normal';
        var layer_Plantasdetratamientopotabilizadora_24 = new L.geoJson(json_Plantasdetratamientopotabilizadora_24, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Plantasdetratamientopotabilizadora_24',
            layerName: 'layer_Plantasdetratamientopotabilizadora_24',
            pane: 'pane_Plantasdetratamientopotabilizadora_24',
            onEachFeature: pop_Plantasdetratamientopotabilizadora_24,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_Plantasdetratamientopotabilizadora_24_0(feature));
            },
        });
        bounds_group.addLayer(layer_Plantasdetratamientopotabilizadora_24);
        function pop_Geologa_25(feature, layer) {
        }

        function style_Geologa_25_0(feature) {
            switch(String(feature.properties['CLASE'])) {
                case 'Ignea extrusiva intermedi':
                    return {
                pane: 'pane_Geologa_25',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(231,17,221,1.0)',
                interactive: true,
            }
                    break;
                case 'Suelo aluvial':
                    return {
                pane: 'pane_Geologa_25',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(217,173,31,1.0)',
                interactive: true,
            }
                    break;
                case 'Toba':
                    return {
                pane: 'pane_Geologa_25',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(84,224,98,1.0)',
                interactive: true,
            }
                    break;
            }
        }
        map.createPane('pane_Geologa_25');
        map.getPane('pane_Geologa_25').style.zIndex = 425;
        map.getPane('pane_Geologa_25').style['mix-blend-mode'] = 'normal';
        var layer_Geologa_25 = new L.geoJson(json_Geologa_25, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Geologa_25',
            layerName: 'layer_Geologa_25',
            pane: 'pane_Geologa_25',
            onEachFeature: pop_Geologa_25,
            style: style_Geologa_25_0,
        });
        bounds_group.addLayer(layer_Geologa_25);
        function pop_RecargasCRM_26(feature, layer) {
        }

        function style_RecargasCRM_26_0(feature) {
            switch(String(feature.properties['RECARGA'])) {
                case 'Recarga de flujo intermedio':
                    return {
                pane: 'pane_RecargasCRM_26',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(229,206,255,1.0)',
                interactive: true,
            }
                    break;
                case 'Recarga de flujo local':
                    return {
                pane: 'pane_RecargasCRM_26',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(199,143,255,1.0)',
                interactive: true,
            }
                    break;
                case 'Recarga de flujo local e intermedio':
                    return {
                pane: 'pane_RecargasCRM_26',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(169,79,255,1.0)',
                interactive: true,
            }
                    break;
            }
        }
        map.createPane('pane_RecargasCRM_26');
        map.getPane('pane_RecargasCRM_26').style.zIndex = 426;
        map.getPane('pane_RecargasCRM_26').style['mix-blend-mode'] = 'normal';
        var layer_RecargasCRM_26 = new L.geoJson(json_RecargasCRM_26, {
            attribution: '',
            interactive: true,
            dataVar: 'json_RecargasCRM_26',
            layerName: 'layer_RecargasCRM_26',
            pane: 'pane_RecargasCRM_26',
            onEachFeature: pop_RecargasCRM_26,
            style: style_RecargasCRM_26_0,
        });
        bounds_group.addLayer(layer_RecargasCRM_26);
        function pop_PrecipitacionCRM_27(feature, layer) {
        }

        function style_PrecipitacionCRM_27_0(feature) {
            switch(String(feature.properties['PP'])) {
                case '800-900':
                    return {
                pane: 'pane_PrecipitacionCRM_27',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(247,251,255,1.0)',
                interactive: true,
            }
                    break;
                case '900-1000':
                    return {
                pane: 'pane_PrecipitacionCRM_27',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(209,227,243,1.0)',
                interactive: true,
            }
                    break;
                case '1000-1100':
                    return {
                pane: 'pane_PrecipitacionCRM_27',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(154,200,225,1.0)',
                interactive: true,
            }
                    break;
                case '1100-1200':
                    return {
                pane: 'pane_PrecipitacionCRM_27',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(82,157,204,1.0)',
                interactive: true,
            }
                    break;
                case '1200-1300':
                    return {
                pane: 'pane_PrecipitacionCRM_27',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(28,108,177,1.0)',
                interactive: true,
            }
                    break;
                case '> 1300':
                    return {
                pane: 'pane_PrecipitacionCRM_27',
                stroke: false, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(8,48,107,1.0)',
                interactive: true,
            }
                    break;
            }
        }
        map.createPane('pane_PrecipitacionCRM_27');
        map.getPane('pane_PrecipitacionCRM_27').style.zIndex = 427;
        map.getPane('pane_PrecipitacionCRM_27').style['mix-blend-mode'] = 'normal';
        var layer_PrecipitacionCRM_27 = new L.geoJson(json_PrecipitacionCRM_27, {
            attribution: '',
            interactive: true,
            dataVar: 'json_PrecipitacionCRM_27',
            layerName: 'layer_PrecipitacionCRM_27',
            pane: 'pane_PrecipitacionCRM_27',
            onEachFeature: pop_PrecipitacionCRM_27,
            style: style_PrecipitacionCRM_27_0,
        });
        bounds_group.addLayer(layer_PrecipitacionCRM_27);
        function pop_Manantiales_28(feature, layer) {
        }

        function style_Manantiales_28_0() {
            return {
                pane: 'pane_Manantiales_28',
                shape: 'triangle',
                radius: 5.2,
                stroke: false,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(53,25,182,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_Manantiales_28');
        map.getPane('pane_Manantiales_28').style.zIndex = 428;
        map.getPane('pane_Manantiales_28').style['mix-blend-mode'] = 'normal';
        var layer_Manantiales_28 = new L.geoJson(json_Manantiales_28, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Manantiales_28',
            layerName: 'layer_Manantiales_28',
            pane: 'pane_Manantiales_28',
            onEachFeature: pop_Manantiales_28,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.shapeMarker(latlng, style_Manantiales_28_0(feature));
            },
        });
        bounds_group.addLayer(layer_Manantiales_28);

        function pop_Curvasdenivel50m_30(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['VALUE'] !== null ? autolinker.link(feature.properties['VALUE'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['VALOR'] !== null ? autolinker.link(feature.properties['VALOR'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Curvasdenivel50m_30_0() {
            return {
                pane: 'pane_Curvasdenivel50m_30',
                opacity: 1,
                color: 'rgba(229,182,54,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_Curvasdenivel50m_30');
        map.getPane('pane_Curvasdenivel50m_30').style.zIndex = 430;
        map.getPane('pane_Curvasdenivel50m_30').style['mix-blend-mode'] = 'normal';
        var layer_Curvasdenivel50m_30 = new L.geoJson(json_Curvasdenivel50m_30, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Curvasdenivel50m_30',
            layerName: 'layer_Curvasdenivel50m_30',
            pane: 'pane_Curvasdenivel50m_30',
            onEachFeature: pop_Curvasdenivel50m_30,
            style: style_Curvasdenivel50m_30_0,
        });
        bounds_group.addLayer(layer_Curvasdenivel50m_30);
        map.addLayer(layer_Curvasdenivel50m_30);
        function pop_LmiteAVABME_31(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['NOM_BCA'] !== null ? autolinker.link(feature.properties['NOM_BCA'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['AREA_m2'] !== null ? autolinker.link(feature.properties['AREA_m2'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['FUENTE'] !== null ? autolinker.link(feature.properties['FUENTE'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Área (ha)'] !== null ? autolinker.link(feature.properties['Área (ha)'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_LmiteAVABME_31_0() {
            return {
                pane: 'pane_LmiteAVABME_31',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(141,90,153,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_LmiteAVABME_31');
        map.getPane('pane_LmiteAVABME_31').style.zIndex = 431;
        map.getPane('pane_LmiteAVABME_31').style['mix-blend-mode'] = 'normal';
        var layer_LmiteAVABME_31 = new L.geoJson(json_LmiteAVABME_31, {
            attribution: '',
            interactive: true,
            dataVar: 'json_LmiteAVABME_31',
            layerName: 'layer_LmiteAVABME_31',
            pane: 'pane_LmiteAVABME_31',
            onEachFeature: pop_LmiteAVABME_31,
            style: style_LmiteAVABME_31_0,
        });
        bounds_group.addLayer(layer_LmiteAVABME_31);
        map.addLayer(layer_LmiteAVABME_31);
        function pop_Alcaldias_32(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Id'] !== null ? autolinker.link(feature.properties['Id'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Alcaldía'] !== null ? autolinker.link(feature.properties['Alcaldía'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Alcaldias_32_0() {
            return {
                pane: 'pane_Alcaldias_32',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '1,5',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_Alcaldias_32');
        map.getPane('pane_Alcaldias_32').style.zIndex = 432;
        map.getPane('pane_Alcaldias_32').style['mix-blend-mode'] = 'normal';
        var layer_Alcaldias_32 = new L.geoJson(json_Alcaldias_32, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Alcaldias_32',
            layerName: 'layer_Alcaldias_32',
            pane: 'pane_Alcaldias_32',
            onEachFeature: pop_Alcaldias_32,
            style: style_Alcaldias_32_0,
        });
        bounds_group.addLayer(layer_Alcaldias_32);
        map.addLayer(layer_Alcaldias_32);
        function pop_RedHidrolgica_33(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['TIPO'] !== null ? autolinker.link(feature.properties['TIPO'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['ARROYOS'] !== null ? autolinker.link(feature.properties['ARROYOS'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['TIPO_RIO'] !== null ? autolinker.link(feature.properties['TIPO_RIO'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_RedHidrolgica_33_0() {
            return {
                pane: 'pane_RedHidrolgica_33',
                opacity: 1,
                color: 'rgba(44,86,240,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_RedHidrolgica_33');
        map.getPane('pane_RedHidrolgica_33').style.zIndex = 433;
        map.getPane('pane_RedHidrolgica_33').style['mix-blend-mode'] = 'normal';
        var layer_RedHidrolgica_33 = new L.geoJson(json_RedHidrolgica_33, {
            attribution: '',
            interactive: true,
            dataVar: 'json_RedHidrolgica_33',
            layerName: 'layer_RedHidrolgica_33',
            pane: 'pane_RedHidrolgica_33',
            onEachFeature: pop_RedHidrolgica_33,
            style: style_RedHidrolgica_33_0,
        });
        bounds_group.addLayer(layer_RedHidrolgica_33);
        map.addLayer(layer_RedHidrolgica_33);
        function pop_RoMagdalena_34(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['RIOMAGNAD2'] !== null ? autolinker.link(feature.properties['RIOMAGNAD2'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['LONGITUD'] !== null ? autolinker.link(feature.properties['LONGITUD'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['SUELO'] !== null ? autolinker.link(feature.properties['SUELO'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['TIPO_RIO'] !== null ? autolinker.link(feature.properties['TIPO_RIO'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['TIPO_2'] !== null ? autolinker.link(feature.properties['TIPO_2'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longit_km'] !== null ? autolinker.link(feature.properties['Longit_km'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_RoMagdalena_34_0() {
            return {
                pane: 'pane_RoMagdalena_34',
                opacity: 1,
                color: 'rgba(97,107,190,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 3.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_RoMagdalena_34');
        map.getPane('pane_RoMagdalena_34').style.zIndex = 434;
        map.getPane('pane_RoMagdalena_34').style['mix-blend-mode'] = 'normal';
        var layer_RoMagdalena_34 = new L.geoJson(json_RoMagdalena_34, {
            attribution: '',
            interactive: true,
            dataVar: 'json_RoMagdalena_34',
            layerName: 'layer_RoMagdalena_34',
            pane: 'pane_RoMagdalena_34',
            onEachFeature: pop_RoMagdalena_34,
            style: style_RoMagdalena_34_0,
        });
        bounds_group.addLayer(layer_RoMagdalena_34);
        map.addLayer(layer_RoMagdalena_34);
        function pop_Lmitedelacuenca_35(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['FID_Seccio'] !== null ? autolinker.link(feature.properties['FID_Seccio'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['LAYER'] !== null ? autolinker.link(feature.properties['LAYER'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Lmitedelacuenca_35_0() {
            return {
                pane: 'pane_Lmitedelacuenca_35',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 3.0, 
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_Lmitedelacuenca_35');
        map.getPane('pane_Lmitedelacuenca_35').style.zIndex = 435;
        map.getPane('pane_Lmitedelacuenca_35').style['mix-blend-mode'] = 'normal';
        var layer_Lmitedelacuenca_35 = new L.geoJson(json_Lmitedelacuenca_35, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Lmitedelacuenca_35',
            layerName: 'layer_Lmitedelacuenca_35',
            pane: 'pane_Lmitedelacuenca_35',
            onEachFeature: pop_Lmitedelacuenca_35,
            style: style_Lmitedelacuenca_35_0,
        });
        bounds_group.addLayer(layer_Lmitedelacuenca_35);
        map.addLayer(layer_Lmitedelacuenca_35);
        function pop_Seccionesdelacuenca_36(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['FID_Seccio'] !== null ? autolinker.link(feature.properties['FID_Seccio'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['LAYER'] !== null ? autolinker.link(feature.properties['LAYER'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Zona'] !== null ? autolinker.link(feature.properties['Zona'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Seccionesdelacuenca_36_0() {
            return {
                pane: 'pane_Seccionesdelacuenca_36',
                opacity: 1,
                color: 'rgba(151,2,17,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0, 
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_Seccionesdelacuenca_36');
        map.getPane('pane_Seccionesdelacuenca_36').style.zIndex = 436;
        map.getPane('pane_Seccionesdelacuenca_36').style['mix-blend-mode'] = 'normal';
        var layer_Seccionesdelacuenca_36 = new L.geoJson(json_Seccionesdelacuenca_36, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Seccionesdelacuenca_36',
            layerName: 'layer_Seccionesdelacuenca_36',
            pane: 'pane_Seccionesdelacuenca_36',
            onEachFeature: pop_Seccionesdelacuenca_36,
            style: style_Seccionesdelacuenca_36_0,
        });
        bounds_group.addLayer(layer_Seccionesdelacuenca_36);
        map.addLayer(layer_Seccionesdelacuenca_36);

        map.createPane('pane_OpenStreetMap_29');
        map.getPane('pane_OpenStreetMap_29').style.zIndex = 429;
        var layer_OpenStreetMap_29 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            pane: 'pane_OpenStreetMap_29',
            opacity: 1.0,
            attribution: '',
            minZoom: 10,
            maxZoom: 25,
            minNativeZoom: 0,
            maxNativeZoom: 19
        });
        layer_OpenStreetMap_29;
        //map.addLayer(layer_OpenStreetMap_29);
        
        var baseMaps = {};
        L.control.layers(baseMaps,{'<img src="../data/legend/Seccionesdelacuenca_36.png" /> Secciones de la cuenca': layer_Seccionesdelacuenca_36,
        '<img src="../data/legend/Lmitedelacuenca_35.png" /> Límite de la cuenca': layer_Lmitedelacuenca_35,
        '<img src="../data/legend/RoMagdalena_34.png" /> Río Magdalena': layer_RoMagdalena_34,
        '<img src="../data/legend/RedHidrolgica_33.png" /> Red Hidrológica': layer_RedHidrolgica_33,
        '<img src="../data/legend/Alcaldias_32.png" /> Alcaldias': layer_Alcaldias_32,
        '<img src="../data/legend/LmiteAVABME_31.png" /> Límite AVA-BME': layer_LmiteAVABME_31,
        '<img src="../data/legend/Curvasdenivel50m_30.png" /> Curvas de nivel 50 m': layer_Curvasdenivel50m_30,
        
        '<img src="../data/legend/Manantiales_28.png" /> Manantiales': layer_Manantiales_28, 
        'Precipitacion CRM<br /><table><tr><td style="text-align: center;"><img src="../data/legend/PrecipitacionCRM_27_8009000.png" /></td><td>800-900</td></tr><tr><td style="text-align: center;"><img src="../data/legend/PrecipitacionCRM_27_90010001.png" /></td><td>900-1000</td></tr><tr><td style="text-align: center;"><img src="../data/legend/PrecipitacionCRM_27_100011002.png" /></td><td>1000-1100</td></tr><tr><td style="text-align: center;"><img src="../data/legend/PrecipitacionCRM_27_110012003.png" /></td><td>1100-1200</td></tr><tr><td style="text-align: center;"><img src="../data/legend/PrecipitacionCRM_27_120013004.png" /></td><td>1200-1300</td></tr><tr><td style="text-align: center;"><img src="../data/legend/PrecipitacionCRM_27_13005.png" /></td><td>> 1300</td></tr></table>': layer_PrecipitacionCRM_27,
        'Recargas CRM<br /><table><tr><td style="text-align: center;"><img src="../data/legend/RecargasCRM_26_Recargadeflujointermedio0.png" /></td><td>Recarga de flujo intermedio</td></tr><tr><td style="text-align: center;"><img src="../data/legend/RecargasCRM_26_Recargadeflujolocal1.png" /></td><td>Recarga de flujo local</td></tr><tr><td style="text-align: center;"><img src="../data/legend/RecargasCRM_26_Recargadeflujolocaleintermedio2.png" /></td><td>Recarga de flujo local e intermedio</td></tr></table>': layer_RecargasCRM_26,
        'Geología<br /><table><tr><td style="text-align: center;"><img src="../data/legend/Geologa_25_Igneaextrusivaintermedi0.png" /></td><td>Ignea extrusiva intermedi</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Geologa_25_Sueloaluvial1.png" /></td><td>Suelo aluvial</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Geologa_25_Toba2.png" /></td><td>Toba</td></tr></table>': layer_Geologa_25,
        '<img src="../data/legend/Plantasdetratamientopotabilizadora_24.png" /> Plantas de tratamiento-potabilizadora': layer_Plantasdetratamientopotabilizadora_24,
        'Calidad del agua<br /><table><tr><td style="text-align: center;"><img src="../data/legend/Calidaddelagua_23_Excelente0.png" /></td><td>Excelente</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Calidaddelagua_23_Aceptable1.png" /></td><td>Aceptable</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Calidaddelagua_23_Contaminada2.png" /></td><td>Contaminada</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Calidaddelagua_23_FuertementeContaminada3.png" /></td><td>Fuertemente Contaminada</td></tr></table>': layer_Calidaddelagua_23,
        'Plantas de tratamiento-potabilizadora<br /><table><tr><td style="text-align: center;"><img src="../data/legend/Plantasdetratamientopotabilizadora_22_PlantadeTratamientodeAguasResidualesRíoMagdalenaSACMEX0.png" /></td><td>Planta de Tratamiento de Aguas Residuales Río Magdalena (SACMEX)</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Plantasdetratamientopotabilizadora_22_PlantaPotabilizadoraMagdalenaContrerasSACMEX1.png" /></td><td>Planta Potabilizadora Magdalena Contreras (SACMEX)</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Plantasdetratamientopotabilizadora_22_PlantaPotabilizadoraRíoMagdalenaSACMEX2.png" /></td><td>Planta Potabilizadora Río Magdalena (SACMEX)</td></tr></table>': layer_Plantasdetratamientopotabilizadora_22,
        'Plantas de tratamiento-potabilizadora<br /><table><tr><td style="text-align: center;"><img src="../data/legend/Plantasdetratamientopotabilizadora_21_PlantadeTratamientodeAguasResidualesRíoMagdalenaSACMEX0.png" /></td><td>Planta de Tratamiento de Aguas Residuales Río Magdalena (SACMEX)</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Plantasdetratamientopotabilizadora_21_PlantaPotabilizadoraMagdalenaContrerasSACMEX1.png" /></td><td>Planta Potabilizadora Magdalena Contreras (SACMEX)</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Plantasdetratamientopotabilizadora_21_PlantaPotabilizadoraRíoMagdalenaSACMEX2.png" /></td><td>Planta Potabilizadora Río Magdalena (SACMEX)</td></tr></table>': layer_Plantasdetratamientopotabilizadora_21,
        'Climas<br /><table><tr><td style="text-align: center;"><img src="../data/legend/Climas_20_Cbw2wi0.png" /></td><td>Cb´_(w2)(w)(i)</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Climas_20_Cbw2wi1.png" /></td><td>Cb_(w2)(w)(i´)</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Climas_20_ETHCw22.png" /></td><td>E(T)HC_(w2)</td></tr></table>': layer_Climas_20,
        'Edafología<br /><table><tr><td style="text-align: center;"><img src="../data/legend/Edafologa_19_Andosolhúmico0.png" /></td><td>Andosol húmico</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Edafologa_19_Andosolmólico1.png" /></td><td>Andosol mólico</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Edafologa_19_Andosolócrico2.png" /></td><td>Andosol ócrico</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Edafologa_19_Feozemháplico3.png" /></td><td>Feozem háplico</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Edafologa_19_Feozemlúvico4.png" /></td><td>Feozem lúvico</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Edafologa_19_Litosol5.png" /></td><td>Litosol</td></tr></table>': layer_Edafologa_19,
        'Temperatura media (°C)<br /><table><tr><td style="text-align: center;"><img src="../data/legend/TemperaturamediaC_18_50.png" /></td><td><5</td></tr><tr><td style="text-align: center;"><img src="../data/legend/TemperaturamediaC_18_561.png" /></td><td>5-6</td></tr><tr><td style="text-align: center;"><img src="../data/legend/TemperaturamediaC_18_672.png" /></td><td>6-7</td></tr><tr><td style="text-align: center;"><img src="../data/legend/TemperaturamediaC_18_783.png" /></td><td>7-8</td></tr><tr><td style="text-align: center;"><img src="../data/legend/TemperaturamediaC_18_894.png" /></td><td>8-9</td></tr><tr><td style="text-align: center;"><img src="../data/legend/TemperaturamediaC_18_9105.png" /></td><td>9-10</td></tr><tr><td style="text-align: center;"><img src="../data/legend/TemperaturamediaC_18_10116.png" /></td><td>10-11</td></tr><tr><td style="text-align: center;"> \
        <img src="../data/legend/TemperaturamediaC_18_11127.png" /></td><td>11-12</td></tr><tr><td style="text-align: center;"><img src="../data/legend/TemperaturamediaC_18_12138.png" /></td><td>12-13</td></tr><tr><td style="text-align: center;"><img src="../data/legend/TemperaturamediaC_18_13149.png" /></td><td>13-14</td></tr><tr><td style="text-align: center;"><img src="../data/legend/TemperaturamediaC_18_141510.png" /></td><td>14-15</td></tr></table>': layer_TemperaturamediaC_18,
        'Vegetación<br /><table><tr><td style="text-align: center;"><img src="../data/legend/Vegetacin_17_BosquedePinushartwegii0.png" /></td><td>Bosque de Pinus hartwegii</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Vegetacin_17_BosquedeAbiesreligiosa1.png" /></td><td>Bosque de Abies religiosa</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Vegetacin_17_Bosquedeconíferas2.png" /></td><td>Bosque de coníferas</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Vegetacin_17_BosquedeQuercus3.png" /></td><td>Bosque de Quercus</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Vegetacin_17_Bosquemixto4.png" /></td><td>Bosque mixto</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Vegetacin_17_Vegetaciónsecundaria5.png" /></td><td>Vegetación secundaria</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Vegetacin_17_MatorralFurcraea6.png" /></td><td>Matorral (Furcraea)</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Vegetacin_17_Pastizal7.png" /></td><td>Pastizal</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Vegetacin_17_Bosquecultivado8.png" /></td><td>Bosque cultivado</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Vegetacin_17_Agriculturadetemporal9.png" /></td><td>Agricultura de temporal</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Vegetacin_17_Bosqueperturbado10.png" /></td><td>Bosque perturbado</td></tr></table>': layer_Vegetacin_17,
        '<img src="../data/legend/PresenciaObservada_16.png" /> Presencia Observada': layer_PresenciaObservada_16,
        'Cobertura<br /><table><tr><td style="text-align: center;"><img src="../data/legend/Cobertura_15_BosquedePinushartwegii0.png" /></td><td>Bosque de Pinus hartwegii</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Cobertura_15_BosquedeAbiesreligiosa1.png" /></td><td>Bosque de Abies religiosa</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Cobertura_15_Bosquedeconíferas2.png" /></td><td>Bosque de coníferas</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Cobertura_15_BosquedeQuercus3.png" /></td><td>Bosque de Quercus</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Cobertura_15_Bosquemixto4.png" /></td><td>Bosque mixto</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Cobertura_15_Vegetaciónsecundaria5.png" /></td><td>Vegetación secundaria</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Cobertura_15_MatorralFurcraea6.png" /></td><td>Matorral (Furcraea)</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Cobertura_15_Pastizal7.png" /></td><td>Pastizal</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Cobertura_15_Bosquecultivado8.png" /></td><td>Bosque cultivado</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Cobertura_15_Agriculturadetemporal9.png" /></td><td>Agricultura de temporal</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Cobertura_15_Bosqueperturbado10.png" /></td><td>Bosque perturbado</td></tr></table>': layer_Cobertura_15,
        '<img src="../data/legend/Sitiosdereferencia_14.png" /> Sitios de referencia': layer_Sitiosdereferencia_14,'<img src="../data/legend/Usodesuelo_13.png" /> Uso de suelo': layer_Usodesuelo_13,
        'Comunidades y ejidos<br /><table><tr><td style="text-align: center;"><img src="../data/legend/Comunidadesyejidos_12_Bienescomunales0.png" /></td><td>Bienes comunales</td></tr><tr><td style="text-align: center;"><img src="../data/legend/Comunidadesyejidos_12_Ejido1.png" /></td><td>Ejido</td></tr></table>': layer_Comunidadesyejidos_12,
        '<img src="../data/legend/Decretode2012_11.png" /> Decreto de 2012': layer_Decretode2012_11,
        '<img src="../data/legend/PGOEDFde2000_10.png" /> PGOEDF de 2000': layer_PGOEDFde2000_10,
        '<img src="../data/legend/Acuerdo1947_9.png" /> Acuerdo 1947': layer_Acuerdo1947_9,
        '<img src="../data/legend/Decreto1932_8.png" /> Decreto 1932': layer_Decreto1932_8,
        '<img src="../data/legend/AICASurdelValledeMxico_7.png" /> AICA(Sur del Valle de México)': layer_AICASurdelValledeMxico_7,
        '<img src="../data/legend/RTPAjuscoChichinautzin_6.png" /> RTP(Ajusco-Chichinautzin)': layer_RTPAjuscoChichinautzin_6,
        '<img src="../data/legend/AICA_5.png" /> AICA': layer_AICA_5,
        '<img src="../data/legend/RTP_4.png" /> RTP': layer_RTP_4,
        '<img src="../data/legend/AreasNaturales_3.png" /> Areas Naturales': layer_AreasNaturales_3,
        '<img src="../data/legend/AICA_2.png" /> AICA': layer_AICA_2,
        '<img src="../data/legend/RTP_1.png" /> RTP': layer_RTP_1,
        '<img src="../data/legend/AreasNaturales_0.png" /> Areas Naturales': layer_AreasNaturales_0, 
        "OpenStreetMap": layer_OpenStreetMap_29}).addTo(map);
        setBounds();