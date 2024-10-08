var wms_layers = [];


        var lyr_GSatHybrid_0 = new ol.layer.Tile({
            'title': 'GSatHybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriTopographic_1 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_DensitySymbology_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Density Symbology",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DensitySymbology_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2041203.449755, -4054049.379991, 2104503.449755, -3995688.475115]
                            })
                        });
var format_HTCs_3 = new ol.format.GeoJSON();
var features_HTCs_3 = format_HTCs_3.readFeatures(json_HTCs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HTCs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HTCs_3.addFeatures(features_HTCs_3);
var lyr_HTCs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HTCs_3, 
                style: style_HTCs_3,
                popuplayertitle: "HTCs",
                interactive: true,
                title: '<img src="styles/legend/HTCs_3.png" /> HTCs'
            });
var format_2km_Buffer_4 = new ol.format.GeoJSON();
var features_2km_Buffer_4 = format_2km_Buffer_4.readFeatures(json_2km_Buffer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2km_Buffer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2km_Buffer_4.addFeatures(features_2km_Buffer_4);
var lyr_2km_Buffer_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2km_Buffer_4, 
                style: style_2km_Buffer_4,
                popuplayertitle: "2km_Buffer",
                interactive: true,
                title: '<img src="styles/legend/2km_Buffer_4.png" /> 2km_Buffer'
            });
var format_1kmBuffer_5 = new ol.format.GeoJSON();
var features_1kmBuffer_5 = format_1kmBuffer_5.readFeatures(json_1kmBuffer_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1kmBuffer_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1kmBuffer_5.addFeatures(features_1kmBuffer_5);
var lyr_1kmBuffer_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1kmBuffer_5, 
                style: style_1kmBuffer_5,
                popuplayertitle: "1km Buffer",
                interactive: true,
                title: '<img src="styles/legend/1kmBuffer_5.png" /> 1km Buffer'
            });
var format_CDC_Sampled_EAs_6 = new ol.format.GeoJSON();
var features_CDC_Sampled_EAs_6 = format_CDC_Sampled_EAs_6.readFeatures(json_CDC_Sampled_EAs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CDC_Sampled_EAs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CDC_Sampled_EAs_6.addFeatures(features_CDC_Sampled_EAs_6);
var lyr_CDC_Sampled_EAs_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CDC_Sampled_EAs_6, 
                style: style_CDC_Sampled_EAs_6,
                popuplayertitle: "CDC_Sampled_EAs",
                interactive: true,
                title: '<img src="styles/legend/CDC_Sampled_EAs_6.png" /> CDC_Sampled_EAs'
            });
var format_WCPolice_Stations_7 = new ol.format.GeoJSON();
var features_WCPolice_Stations_7 = format_WCPolice_Stations_7.readFeatures(json_WCPolice_Stations_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WCPolice_Stations_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WCPolice_Stations_7.addFeatures(features_WCPolice_Stations_7);
var lyr_WCPolice_Stations_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WCPolice_Stations_7, 
                style: style_WCPolice_Stations_7,
                popuplayertitle: "WC(Police_Stations)",
                interactive: true,
                title: '<img src="styles/legend/WCPolice_Stations_7.png" /> WC(Police_Stations)'
            });
var format_Complexes_8 = new ol.format.GeoJSON();
var features_Complexes_8 = format_Complexes_8.readFeatures(json_Complexes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Complexes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Complexes_8.addFeatures(features_Complexes_8);
var lyr_Complexes_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Complexes_8, 
                style: style_Complexes_8,
                popuplayertitle: "Complexes",
                interactive: true,
                title: '<img src="styles/legend/Complexes_8.png" /> Complexes'
            });
var format_SOs_Geocoded_9 = new ol.format.GeoJSON();
var features_SOs_Geocoded_9 = format_SOs_Geocoded_9.readFeatures(json_SOs_Geocoded_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOs_Geocoded_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOs_Geocoded_9.addFeatures(features_SOs_Geocoded_9);
var lyr_SOs_Geocoded_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOs_Geocoded_9, 
                style: style_SOs_Geocoded_9,
                popuplayertitle: "SOs_Geocoded",
                interactive: true,
                title: '<img src="styles/legend/SOs_Geocoded_9.png" /> SOs_Geocoded'
            });
var format_Activations_10 = new ol.format.GeoJSON();
var features_Activations_10 = format_Activations_10.readFeatures(json_Activations_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Activations_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Activations_10.addFeatures(features_Activations_10);
var lyr_Activations_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Activations_10, 
                style: style_Activations_10,
                popuplayertitle: "Activations",
                interactive: true,
                title: '<img src="styles/legend/Activations_10.png" /> Activations'
            });

lyr_GSatHybrid_0.setVisible(true);lyr_EsriTopographic_1.setVisible(true);lyr_DensitySymbology_2.setVisible(true);lyr_HTCs_3.setVisible(true);lyr_2km_Buffer_4.setVisible(true);lyr_1kmBuffer_5.setVisible(true);lyr_CDC_Sampled_EAs_6.setVisible(true);lyr_WCPolice_Stations_7.setVisible(true);lyr_Complexes_8.setVisible(true);lyr_SOs_Geocoded_9.setVisible(true);lyr_Activations_10.setVisible(true);
var layersList = [lyr_GSatHybrid_0,lyr_EsriTopographic_1,lyr_DensitySymbology_2,lyr_HTCs_3,lyr_2km_Buffer_4,lyr_1kmBuffer_5,lyr_CDC_Sampled_EAs_6,lyr_WCPolice_Stations_7,lyr_Complexes_8,lyr_SOs_Geocoded_9,lyr_Activations_10];
lyr_HTCs_3.set('fieldAliases', {'EA_CODE': 'EA_CODE', 'EA_TYPE': 'EA_TYPE', 'MP_NAME': 'MP_NAME', 'XMIN': 'XMIN', 'YMIN': 'YMIN', 'DSC_name': 'DSC_name', 'PSU_name': 'PSU_name', 'PSU_Sub_Pl': 'PSU_Sub_Pl', 'PSU_Type': 'PSU_Type', 'Comments': 'Comments', 'WardNo': 'WardNo', 'Councilor': 'Councilor', 'Email': 'Email', 'OfficeNo': 'OfficeNo', 'PoliceStn': 'PoliceStn', });
lyr_2km_Buffer_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'EA_CODE': 'EA_CODE', 'EA_TYPE': 'EA_TYPE', 'DSC_name': 'DSC_name', 'PSU_name': 'PSU_name', 'PSU_Sub_Pl': 'PSU_Sub_Pl', 'PSU_Type': 'PSU_Type', 'Comments': 'Comments', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_1kmBuffer_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'OBJECTID_3': 'OBJECTID_3', 'EA_CODE': 'EA_CODE', 'MN_CODE': 'MN_CODE', 'MN_MDB_C': 'MN_MDB_C', 'DC_MN_C': 'DC_MN_C', 'DC_MDB_C': 'DC_MDB_C', 'DC_NAME_C': 'DC_NAME_C', 'PR_CODE': 'PR_CODE', 'PR_MDB_C': 'PR_MDB_C', 'MP_CODE': 'MP_CODE', 'SP_CODE': 'SP_CODE', 'EA_GTYPE_C': 'EA_GTYPE_C', 'EA_GTYPE': 'EA_GTYPE', 'EA_TYPE_C': 'EA_TYPE_C', 'EA_TYPE': 'EA_TYPE', 'FWS_CODE': 'FWS_CODE', 'FWC_CODE': 'FWC_CODE', 'EAperFWS_C': 'EAperFWS_C', 'EAperFWC_C': 'EAperFWC_C', 'AREA_SQ_KM': 'AREA_SQ_KM', 'PERI_MTR_E': 'PERI_MTR_E', 'DEM_EA_SIZ': 'DEM_EA_SIZ', 'MP_NAME': 'MP_NAME', 'SP_NAME': 'SP_NAME', 'MN_NAME': 'MN_NAME', 'MN_TYPE': 'MN_TYPE', 'DC_NAME': 'DC_NAME', 'PR_NAME': 'PR_NAME', 'MD_NAME': 'MD_NAME', 'WD_CODE': 'WD_CODE', 'WD_NO': 'WD_NO', 'POSTOFFICE': 'POSTOFFICE', 'POSTOFFI_1': 'POSTOFFI_1', 'XMIN': 'XMIN', 'YMIN': 'YMIN', 'I_IMAGE_FR': 'I_IMAGE_FR', 'O_IMAGE_CA': 'O_IMAGE_CA', 'O_IMAGE_FR': 'O_IMAGE_FR', 'IMAGE_IP': 'IMAGE_IP', 'DF_COUNT': 'DF_COUNT', 'Shape_Leng': 'Shape_Leng', 'EA_CODE_1': 'EA_CODE_1', 'District': 'District', 'DSC_name': 'DSC_name', 'Survey': 'Survey', 'PSU_no': 'PSU_no', 'PSU_name': 'PSU_name', 'PSU_Sub_Pl': 'PSU_Sub_Pl', 'PSU_Type': 'PSU_Type', 'Sampled_MR': 'Sampled_MR', 'Month_of_v': 'Month_of_v', 'Comments': 'Comments', 'BUFF_DIST': 'BUFF_DIST', });
lyr_CDC_Sampled_EAs_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'EA_CODE': 'EA_CODE', 'PR_MDB_C': 'PR_MDB_C', 'MP_CODE': 'MP_CODE', 'SP_CODE': 'SP_CODE', 'MP_NAME': 'MP_NAME', 'MN_NAME': 'MN_NAME', 'MN_TYPE': 'MN_TYPE', 'DC_NAME': 'DC_NAME', 'PR_NAME': 'PR_NAME', 'WD_CODE': 'WD_CODE', 'WD_NO': 'WD_NO', 'XMIN': 'XMIN', 'YMIN': 'YMIN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_WCPolice_Stations_7.set('fieldAliases', {'FID_1': 'FID_1', 'COMPNT_NM': 'COMPNT_NM', 'LOCATION_X': 'LOCATION_X', 'LOCATION_Y': 'LOCATION_Y', 'CREATE_DT': 'CREATE_DT', 'VERSION': 'VERSION', });
lyr_Complexes_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CMPLX_NAME': 'CMPLX_NAME', 'GATED': 'GATED', 'LU_CMPLX_T': 'LU_CMPLX_T', 'SHAPESTAre': 'SHAPESTAre', 'SHAPESTLen': 'SHAPESTLen', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'PROJECT': 'PROJECT', });
lyr_SOs_Geocoded_9.set('fieldAliases', {'Count': 'Count', 'Name': 'Name', 'Surname': 'Surname', 'Physical_A': 'Physical_A', 'Office': 'Office', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Activations_10.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_HTCs_3.set('fieldImages', {'EA_CODE': 'TextEdit', 'EA_TYPE': 'TextEdit', 'MP_NAME': 'TextEdit', 'XMIN': 'TextEdit', 'YMIN': 'TextEdit', 'DSC_name': 'TextEdit', 'PSU_name': 'TextEdit', 'PSU_Sub_Pl': 'TextEdit', 'PSU_Type': 'TextEdit', 'Comments': 'TextEdit', 'WardNo': 'TextEdit', 'Councilor': 'TextEdit', 'Email': 'TextEdit', 'OfficeNo': 'TextEdit', 'PoliceStn': 'TextEdit', });
lyr_2km_Buffer_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'EA_CODE': 'TextEdit', 'EA_TYPE': 'TextEdit', 'DSC_name': 'TextEdit', 'PSU_name': 'TextEdit', 'PSU_Sub_Pl': 'TextEdit', 'PSU_Type': 'TextEdit', 'Comments': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_1kmBuffer_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'EA_CODE': 'TextEdit', 'MN_CODE': 'TextEdit', 'MN_MDB_C': 'TextEdit', 'DC_MN_C': 'TextEdit', 'DC_MDB_C': 'TextEdit', 'DC_NAME_C': 'TextEdit', 'PR_CODE': 'TextEdit', 'PR_MDB_C': 'TextEdit', 'MP_CODE': 'TextEdit', 'SP_CODE': 'TextEdit', 'EA_GTYPE_C': 'TextEdit', 'EA_GTYPE': 'TextEdit', 'EA_TYPE_C': 'TextEdit', 'EA_TYPE': 'TextEdit', 'FWS_CODE': 'TextEdit', 'FWC_CODE': 'TextEdit', 'EAperFWS_C': 'TextEdit', 'EAperFWC_C': 'TextEdit', 'AREA_SQ_KM': 'TextEdit', 'PERI_MTR_E': 'TextEdit', 'DEM_EA_SIZ': 'TextEdit', 'MP_NAME': 'TextEdit', 'SP_NAME': 'TextEdit', 'MN_NAME': 'TextEdit', 'MN_TYPE': 'TextEdit', 'DC_NAME': 'TextEdit', 'PR_NAME': 'TextEdit', 'MD_NAME': 'TextEdit', 'WD_CODE': 'TextEdit', 'WD_NO': 'TextEdit', 'POSTOFFICE': 'TextEdit', 'POSTOFFI_1': 'TextEdit', 'XMIN': 'TextEdit', 'YMIN': 'TextEdit', 'I_IMAGE_FR': 'TextEdit', 'O_IMAGE_CA': 'TextEdit', 'O_IMAGE_FR': 'TextEdit', 'IMAGE_IP': 'TextEdit', 'DF_COUNT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'EA_CODE_1': 'TextEdit', 'District': 'TextEdit', 'DSC_name': 'TextEdit', 'Survey': 'TextEdit', 'PSU_no': 'TextEdit', 'PSU_name': 'TextEdit', 'PSU_Sub_Pl': 'TextEdit', 'PSU_Type': 'TextEdit', 'Sampled_MR': 'TextEdit', 'Month_of_v': 'TextEdit', 'Comments': 'TextEdit', 'BUFF_DIST': 'TextEdit', });
lyr_CDC_Sampled_EAs_6.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'EA_CODE': 'TextEdit', 'PR_MDB_C': 'TextEdit', 'MP_CODE': 'TextEdit', 'SP_CODE': 'TextEdit', 'MP_NAME': 'TextEdit', 'MN_NAME': 'TextEdit', 'MN_TYPE': 'TextEdit', 'DC_NAME': 'TextEdit', 'PR_NAME': 'TextEdit', 'WD_CODE': 'TextEdit', 'WD_NO': 'TextEdit', 'XMIN': 'TextEdit', 'YMIN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WCPolice_Stations_7.set('fieldImages', {'FID_1': 'Range', 'COMPNT_NM': 'TextEdit', 'LOCATION_X': 'TextEdit', 'LOCATION_Y': 'TextEdit', 'CREATE_DT': 'TextEdit', 'VERSION': 'TextEdit', });
lyr_Complexes_8.set('fieldImages', {'OBJECTID': 'Range', 'CMPLX_NAME': 'TextEdit', 'GATED': 'Range', 'LU_CMPLX_T': 'Range', 'SHAPESTAre': 'TextEdit', 'SHAPESTLen': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'PROJECT': 'TextEdit', });
lyr_SOs_Geocoded_9.set('fieldImages', {'Count': 'TextEdit', 'Name': 'TextEdit', 'Surname': 'TextEdit', 'Physical_A': 'TextEdit', 'Office': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Activations_10.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', });
lyr_HTCs_3.set('fieldLabels', {'EA_CODE': 'inline label - always visible', 'EA_TYPE': 'inline label - always visible', 'MP_NAME': 'inline label - visible with data', 'XMIN': 'inline label - visible with data', 'YMIN': 'inline label - visible with data', 'DSC_name': 'inline label - always visible', 'PSU_name': 'inline label - always visible', 'PSU_Sub_Pl': 'inline label - visible with data', 'PSU_Type': 'inline label - visible with data', 'Comments': 'inline label - always visible', 'WardNo': 'inline label - always visible', 'Councilor': 'inline label - always visible', 'Email': 'inline label - visible with data', 'OfficeNo': 'inline label - visible with data', 'PoliceStn': 'inline label - visible with data', });
lyr_2km_Buffer_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'EA_CODE': 'no label', 'EA_TYPE': 'no label', 'DSC_name': 'no label', 'PSU_name': 'no label', 'PSU_Sub_Pl': 'no label', 'PSU_Type': 'no label', 'Comments': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_1kmBuffer_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'OBJECTID_3': 'no label', 'EA_CODE': 'no label', 'MN_CODE': 'no label', 'MN_MDB_C': 'no label', 'DC_MN_C': 'no label', 'DC_MDB_C': 'no label', 'DC_NAME_C': 'no label', 'PR_CODE': 'no label', 'PR_MDB_C': 'no label', 'MP_CODE': 'no label', 'SP_CODE': 'no label', 'EA_GTYPE_C': 'no label', 'EA_GTYPE': 'no label', 'EA_TYPE_C': 'no label', 'EA_TYPE': 'no label', 'FWS_CODE': 'no label', 'FWC_CODE': 'no label', 'EAperFWS_C': 'no label', 'EAperFWC_C': 'no label', 'AREA_SQ_KM': 'no label', 'PERI_MTR_E': 'no label', 'DEM_EA_SIZ': 'no label', 'MP_NAME': 'no label', 'SP_NAME': 'no label', 'MN_NAME': 'no label', 'MN_TYPE': 'no label', 'DC_NAME': 'no label', 'PR_NAME': 'no label', 'MD_NAME': 'no label', 'WD_CODE': 'no label', 'WD_NO': 'no label', 'POSTOFFICE': 'no label', 'POSTOFFI_1': 'no label', 'XMIN': 'no label', 'YMIN': 'no label', 'I_IMAGE_FR': 'no label', 'O_IMAGE_CA': 'no label', 'O_IMAGE_FR': 'no label', 'IMAGE_IP': 'no label', 'DF_COUNT': 'no label', 'Shape_Leng': 'no label', 'EA_CODE_1': 'no label', 'District': 'no label', 'DSC_name': 'no label', 'Survey': 'no label', 'PSU_no': 'no label', 'PSU_name': 'no label', 'PSU_Sub_Pl': 'no label', 'PSU_Type': 'no label', 'Sampled_MR': 'no label', 'Month_of_v': 'no label', 'Comments': 'no label', 'BUFF_DIST': 'no label', });
lyr_CDC_Sampled_EAs_6.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'EA_CODE': 'no label', 'PR_MDB_C': 'no label', 'MP_CODE': 'no label', 'SP_CODE': 'no label', 'MP_NAME': 'no label', 'MN_NAME': 'no label', 'MN_TYPE': 'no label', 'DC_NAME': 'no label', 'PR_NAME': 'no label', 'WD_CODE': 'no label', 'WD_NO': 'no label', 'XMIN': 'no label', 'YMIN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_WCPolice_Stations_7.set('fieldLabels', {'FID_1': 'no label', 'COMPNT_NM': 'no label', 'LOCATION_X': 'no label', 'LOCATION_Y': 'no label', 'CREATE_DT': 'no label', 'VERSION': 'no label', });
lyr_Complexes_8.set('fieldLabels', {'OBJECTID': 'no label', 'CMPLX_NAME': 'inline label - always visible', 'GATED': 'no label', 'LU_CMPLX_T': 'no label', 'SHAPESTAre': 'no label', 'SHAPESTLen': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'PROJECT': 'no label', });
lyr_SOs_Geocoded_9.set('fieldLabels', {'Count': 'no label', 'Name': 'no label', 'Surname': 'no label', 'Physical_A': 'no label', 'Office': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Activations_10.set('fieldLabels', {'fid': 'no label', 'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_Activations_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});