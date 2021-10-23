// Copyright 2012 Google Inc. All rights reserved.
(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');
(function() {

    var data = {
        "resource": {
            "version": "31",

            "macros": [{
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "pagetype"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "{}",
                "vtp_name": "orderInfo"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 1], 8, 16], ".orderItems||[]})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=[],b=", ["escape", ["macro", 2], 8, 16], ",c;for(c in b)-1==a.indexOf(b[c].simpleSku)\u0026\u0026a.push(b[c].sku_id);return a})();"]
            }, {
                "function": "__e"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-49088239-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": false
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ELEMENT"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__c",
                "vtp_value": "UA-53331019-1"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "[]",
                "vtp_name": "pdt_category"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){if(\"undefined\"!==typeof ", ["escape", ["macro", 10], 8, 16], ")return-1==", ["escape", ["macro", 10], 8, 16], ".indexOf(\",\")?", ["escape", ["macro", 10], 8, 16], ":", ["escape", ["macro", 10], 8, 16], ".slice(0,", ["escape", ["macro", 10], 8, 16], ".indexOf(\",\"))})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){if(\"undefined\"!==typeof ", ["escape", ["macro", 10], 8, 16], ")return-1==", ["escape", ["macro", 10], 8, 16], ".indexOf(\",\")?", ["escape", ["macro", 10], 8, 16], ":", ["escape", ["macro", 10], 8, 16], ".split(\",\")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"undefined\"!==typeof ", ["escape", ["macro", 10], 8, 16], "?Array.isArray(", ["escape", ["macro", 12], 8, 16], ")?", ["escape", ["macro", 12], 8, 16], ".length:1:0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "brand_name"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"category\"==", ["escape", ["macro", 0], 8, 16], "?void 0===", ["escape", ["macro", 14], 8, 16], "?", ["escape", ["macro", 0], 8, 16], ":\"CatBrand\":", ["escape", ["macro", 0], 8, 16], "})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "{}",
                "vtp_name": "core"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 16], 8, 16], ".language})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "{}",
                "vtp_name": "page"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 18], 8, 16], ".filterTypes})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 18], 8, 16], ".filters||[]})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "visitor"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 21], 8, 16], ".customerID})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "transaction_count"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 12], 8, 16], ";return\"undefined\"!==typeof ", ["escape", ["macro", 10], 8, 16], "?-1==", ["escape", ["macro", 10], 8, 16], ".indexOf(\",\")?", ["escape", ["macro", 10], 8, 16], ":a[a.length-1]:\"not set\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 18], 8, 16], ".resultNr})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 2], 8, 16], ",b,c=0;for(b in a)c+=a[b].price*a[b].quantity;return c})();"]
            }, {
                "function": "__c",
                "vtp_value": "880228432"
            }, {
                "function": "__c",
                "vtp_value": "BDT"
            }, {
                "function": "__c",
                "vtp_value": "hVEgCIDt0mcQ0PDcowM"
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "{}",
                "vtp_name": "arguments"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 31], 8, 16], ".product_price})();"]
            }, {
                "function": "__d",
                "vtp_elementSelector": ".quantity-content-warning",
                "vtp_selectorType": "CSS"
            }, {
                "function": "__cid"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "{}",
                "vtp_name": "criteo_arguments"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 16], 8, 16], ".layoutType})();"]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 36],
                "vtp_defaultValue": "m",
                "vtp_map": ["list", ["map", "key", "desktop", "value", "d"]]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 21], 8, 16], ".firstPurchaseDate})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 21], 8, 16], ".lastPurchaseDate})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "{}",
                "vtp_name": "cart_item_list"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 21], 8, 16], ".transactionCount})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 22], 8, 16], ";if(a){if(a\u0026\u0026!parseInt(", ["escape", ["macro", 41], 8, 16], "))return 3;if(a\u0026\u0026parseInt(", ["escape", ["macro", 41], 8, 16], "))return 4}else return 0})();"]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 0],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "0",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "search|sis|seller|category|campaign|brand", "value", "1"]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "top_catalog_skus"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"index\"==", ["escape", ["macro", 0], 8, 16], "?1:0})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=\"\";", ["escape", ["macro", 18], 8, 16], ".xParams.split(\"\\x26\").forEach(function(a){a=a.split(\"\\x3d\");\"_p_item\"==a[0]\u0026\u0026(b=a[1])});return b})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 1], 8, 16], ".order_id||0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "customer_first_purchase"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 16], 8, 16], ".country})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 22], 8, 16], "?1:0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "{}",
                "vtp_name": "cart_items"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 21], 8, 16], ".type})();"]
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "is_mobile_app"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var c=", ["escape", ["macro", 2], 8, 16], ";if(!c)return{};var b={};c.map(function(a){\"undefined\"==typeof b[a.simple_sku]?b[a.simple_sku]=a:b[a.simple_sku].quantity+=a.quantity});return b})();"]
            }, {
                "function": "__c",
                "vtp_value": "enhance_ecommerce_page_view"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "pdt_sku"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0",
                "vtp_name": "pdt_price"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "brand_id"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 18], 8, 16], ".regCategoryId})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 31], 8, 16], ".sku})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 60], 8, 16], ",b=", ["escape", ["macro", 0], 8, 16], ";return\"undefined\"!==a\u0026\u0026\"pdp\"!==b?a:\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 61], 8, 16], ";return\"undefined\"!==a\u0026\u0026\"pdp\"!==", ["escape", ["macro", 0], 8, 16], "?a:\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a={},c=", ["escape", ["macro", 56], 8, 16], ",g=[{brandIds:[\"29233\"],fbKey:\"2285952628298343\",items:[]},{brandIds:[\"30360\"],fbKey:\"2044828949140244\",items:[]},{brandIds:[\"39316\",\"28618\",\"23977\"],fbKey:\"166251104120435\",conversionLabel:\"go5OCL2nkXoQnuGPiwM\",conversionId:\"828633246\",items:[]},{brandIds:\"28151 28164 98407 76634 28605 32794 41290 94101 67595 67594\".split(\" \"),fbKey:\"1884234255179221\",items:[]},{brandIds:[\"28629\"],fbKey:\"634451883558131\",items:[]},{brandIds:[\"24241\",\"32408\"],conversionLabel:\"Jci2CPDF538Q1-CPiwM\",\nconversionId:\"828633175\",items:[]},{brandIds:\"4173 12932 25024 4170 12949 25142 24597 98999\".split(\" \"),fbKey:\"2031991733745942\",items:[]},{brandIds:\"69989 69993 69979 69976 69988 69990\".split(\" \"),fbKey:\"295660930936995\",conversionLabel:\"a3SRCPTHnHkQ65nHmQM\",conversionId:\"858901739\",items:[]},{brandIds:[\"28406\",\"24230\",\"27533\",\"59548\",\"27405\"],fbKey:\"137606103458200\",items:[]},{brandIds:[\"25090\"],fbKey:\"951025391734250\",conversionLabel:\"aJY5CM319H8QupmjiwM\",conversionId:\"828951738\",items:[]},{brandIds:\"31116 3750 72407 70063 30971 36870 14719 31113 35464 61450 31115 64192 62436 27225 68011 35460 68085\".split(\" \"),\nfbKey:\"1884413948503010\",items:[]}];Object.keys(c).forEach(function(b){var d=c[b].brand_id;g.forEach(function(e){-1!==e.brandIds.indexOf(d)\u0026\u0026(a[d]?a[d].items.push(c[b]):(e.items.push(c[b]),a[d]=e))})});var f=[];Object.keys(a).forEach(function(b){f.push(a[b])});return f})();"]
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "pdt_simplesku"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return((", ["escape", ["macro", 52], 8, 16], "||[])[0]||{}).name})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 18], 8, 16], ".internalSearchTerm})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return((", ["escape", ["macro", 2], 8, 16], "||[])[0]||{}).brand_name})();"]
            }, {
                "function": "__c",
                "vtp_value": "162682717744192"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "pdt_name"
            }, {
                "function": "__k",
                "vtp_decodeCookie": true,
                "vtp_name": "mi_campaign"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 73],
                "vtp_defaultValue": "true",
                "vtp_map": ["list", ["map", "key", "344275", "value", "false"]]
            }, {
                "function": "__hid"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 2], 8, 16], ",b,c=[];for(b in a)c.push(a[b].brand_id);return c.join()})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var d=\"sessionStatus\\x3dtrue\",b=0,e=document.cookie.split(\";\"),c=0;c\u003Ce.length;c++){for(var a=e[c];\" \"==a.charAt(0);)a=a.substring(1,a.length);0==a.indexOf(d)\u0026\u0026(b=1)}0==b\u0026\u0026(document.cookie=d);return b})();"]
            }, {
                "function": "__c",
                "vtp_value": "727187910694531"
            }, {
                "function": "__c",
                "vtp_value": "1378193579116538"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "conversionId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "conversionLabel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "anon_uid"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "category_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "sess_uid"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "[]",
                "vtp_name": "top_catalog_skus"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "_ga"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_useEcommerceDataLayer": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": true,
                "vtp_trackingId": "UA-53331019-10",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_ecommerceIsEnabled": true,
                "vtp_enableGA4Schema": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=[],b=", ["escape", ["macro", 40], 8, 16], ",c;for(c in b)a.push(b[c].simpleSku);return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 18], 8, 16], ".categories||[]})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\"device\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=[],b=", ["escape", ["macro", 2], 8, 16], ",c;for(c in b)-1==a.indexOf(b[c].simple_sku)\u0026\u0026a.push(b[c].simple_sku);return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 26], 8, 16], ",a=1;switch(", ["escape", ["macro", 50], 8, 16], "){case \"ID\":a=7.7E-5;break;case \"TH\":a=.031;break;case \"MY\":a=.27;break;case \"PH\":a=.023;break;case \"VN\":a=4.7E-5;break;case \"SG\":a=.74}return b*a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 21], 8, 16], ".subscriberID})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=\"\";", ["escape", ["macro", 18], 8, 16], ".xParams.split(\"\\x26\").forEach(function(a){a=a.split(\"\\x3d\");\"_sb_storeid\"==a[0]\u0026\u0026(b=a[1])});return b})();"]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 0],
                "vtp_defaultValue": "searchresults",
                "vtp_map": ["list", ["map", "key", "index", "value", "home"],
                    ["map", "key", "indexpage", "value", "home"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 0],
                "vtp_defaultValue": "category",
                "vtp_map": ["list", ["map", "key", "index", "value", "home"],
                    ["map", "key", "indexpage", "value", "home"]
                ]
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 0],
                "vtp_defaultValue": ["macro", 85],
                "vtp_map": ["list", ["map", "key", "pdp", "value", ["macro", 58]]]
            }, {
                "function": "__u",
                "vtp_component": "PROTOCOL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__k",
                "vtp_decodeCookie": true,
                "vtp_name": "mi_content"
            }, {
                "function": "__k",
                "vtp_decodeCookie": true,
                "vtp_name": "mi_gclid"
            }, {
                "function": "__k",
                "vtp_decodeCookie": true,
                "vtp_name": "mi_medium"
            }, {
                "function": "__k",
                "vtp_decodeCookie": true,
                "vtp_name": "mi_source"
            }, {
                "function": "__k",
                "vtp_decodeCookie": true,
                "vtp_name": "mi_term"
            }, {
                "function": "__j",
                "vtp_name": "document.title"
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }],
            "tags": [{
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "live_up",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 5],
                "vtp_eventAction": "transaction_has_sku",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 18
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "SSU",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 5],
                "vtp_eventAction": "UserLinkClick",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 53
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_doubleClick": true,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Add to Cart",
                "vtp_eventLabel": ["macro", 0],
                "vtp_enableEcommerce": true,
                "vtp_trackingId": ["macro", 9],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 60
            }, {
                "function": "__ua",
                "setup_tags": ["list", ["tag", 56, 0]],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_contentGroup": ["list", ["map", "index", "1", "group", ["macro", 0]],
                    ["map", "index", "2", "group", ["macro", 11]],
                    ["map", "index", "3", "group", ["macro", 13]],
                    ["map", "index", "4", "group", ["macro", 15]],
                    ["map", "index", "5", "group", ["macro", 17]]
                ],
                "vtp_dimension": ["list", ["map", "index", "3", "dimension", ["macro", 10]],
                    ["map", "index", "10", "dimension", ["macro", 19]],
                    ["map", "index", "11", "dimension", ["macro", 20]],
                    ["map", "index", "12", "dimension", ["macro", 22]],
                    ["map", "index", "16", "dimension", ["macro", 23]],
                    ["map", "index", "8", "dimension", ["macro", 0]],
                    ["map", "index", "2", "dimension", ["macro", 13]],
                    ["map", "index", "7", "dimension", ["macro", 24]],
                    ["map", "index", "20", "dimension", ["macro", 25]],
                    ["map", "index", "9", "dimension", ["macro", 15]],
                    ["map", "index", "1", "dimension", "UAT"]
                ],
                "vtp_enableEcommerce": true,
                "vtp_trackingId": ["macro", 9],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 62
            }, {
                "function": "__ua",
                "setup_tags": ["list", ["tag", 56, 0]],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_contentGroup": ["list", ["map", "index", "1", "group", ["macro", 0]],
                    ["map", "index", "2", "group", ["macro", 11]],
                    ["map", "index", "3", "group", ["macro", 13]],
                    ["map", "index", "4", "group", ["macro", 15]],
                    ["map", "index", "5", "group", ["macro", 17]]
                ],
                "vtp_dimension": ["list", ["map", "index", "3", "dimension", ["macro", 10]],
                    ["map", "index", "10", "dimension", ["macro", 19]],
                    ["map", "index", "11", "dimension", ["macro", 20]],
                    ["map", "index", "12", "dimension", ["macro", 22]],
                    ["map", "index", "16", "dimension", ["macro", 23]],
                    ["map", "index", "8", "dimension", ["macro", 0]],
                    ["map", "index", "2", "dimension", ["macro", 13]],
                    ["map", "index", "7", "dimension", ["macro", 24]],
                    ["map", "index", "20", "dimension", ["macro", 25]],
                    ["map", "index", "9", "dimension", ["macro", 15]],
                    ["map", "index", "1", "dimension", "UAT"]
                ],
                "vtp_trackingId": ["macro", 9],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 72
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "UAT",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "UAT",
                "vtp_eventLabel": "UAT",
                "vtp_trackingId": ["macro", 9],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 77
            }, {
                "function": "__awct",
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionValue": ["macro", 26],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": ["macro", 27],
                "vtp_currencyCode": ["macro", 28],
                "vtp_conversionLabel": ["macro", 29],
                "vtp_url": ["macro", 30],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableShoppingQualitySettings": true,
                "tag_id": 84
            }, {
                "function": "__gclidw",
                "once_per_event": true,
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "vtp_enableCookieFlagsFeature": true,
                "tag_id": 87
            }, {
                "function": "__awct",
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionValue": ["macro", 32],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "961863614",
                "vtp_currencyCode": ["macro", 28],
                "vtp_conversionLabel": "zHPiCLrirmIQvr_TygM",
                "vtp_url": ["macro", 30],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableShoppingQualitySettings": true,
                "tag_id": 89
            }, {
                "function": "__awct",
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionValue": ["macro", 26],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "961863614",
                "vtp_currencyCode": ["macro", 28],
                "vtp_conversionLabel": "JX-BCPzTjmIQvr_TygM",
                "vtp_url": ["macro", 30],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableShoppingQualitySettings": true,
                "tag_id": 90
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "404",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventLabel": ["macro", 7],
                "vtp_trackingId": ["macro", 9],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 103
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "OOS",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventLabel": ["macro", 7],
                "vtp_trackingId": ["macro", 9],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 104
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Soft 404",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventLabel": ["macro", 7],
                "vtp_trackingId": ["macro", 9],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 105
            }, {
                "function": "__gaawc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendPageView": true,
                "vtp_enableSendToServerContainer": false,
                "vtp_measurementId": "G-PC3XY01BZ9",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettings": true,
                "vtp_enableEuid": false,
                "tag_id": 108
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "9511387_35",
                "tag_id": 109
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "3000",
                "vtp_limit": "1",
                "vtp_uniqueTriggerId": "9511387_63",
                "tag_id": 110
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.criteo_q=window.criteo_q||[];if(window.criteo_q.push==Array.prototype.push){var a=document.getElementsByTagName(\"script\")[0],b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=\"\/\/static.criteo.net\/js\/ld\/ld.js\";a.parentNode.insertBefore(b,a)}a=", ["escape", ["macro", 35], 8, 16], ";window.criteo_q.push({event:\"setAccount\",account:45922},{event:\"setCustomerId\",id:\"", ["escape", ["macro", 22], 7], "\"},{event:\"setSiteType\",type:\"", ["escape", ["macro", 37], 7], "\"},a,{event:\"setHashedEmail\",email:\"", ["escape", ["macro", 22], 7], "\"},\n{event:\"setData\",exdFirstPurchaseDate:", ["escape", ["macro", 38], 8, 16], ",exdLastPurchaseDate:", ["escape", ["macro", 39], 8, 16], "})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 20
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=", ["escape", ["macro", 40], 8, 16], ",c=[],d=window.dataLayer||[],b;for(b in a)c.push({id:a[b].configSku,price:a[b].price?a[b].price.replace(\/[^\\d.-]\/g,\"\"):\"\",quantity:a[b].quantity});d.push({event:\"criteo_template_event\",criteo_arguments:{event:\"viewBasket\",item:c,user_segment:\"", ["escape", ["macro", 42], 7], "\"}})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 21
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window.dataLayer||[];a.push({event:\"criteo_template_event\",criteo_arguments:{event:\"viewList\",item:", ["escape", ["macro", 44], 8, 16], ",user_segment:\"", ["escape", ["macro", 42], 7], "\"}})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 22
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window.dataLayer||[];a.push({event:\"criteo_template_event\",criteo_arguments:{event:\"viewHome\",user_segment:\"", ["escape", ["macro", 42], 7], "\"}})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 23
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window.dataLayer||[];a.push({event:\"criteo_template_event\",criteo_arguments:{event:\"viewItem\",item:\"", ["escape", ["macro", 46], 7], "\",user_segment:\"", ["escape", ["macro", 42], 7], "\"}})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 24
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=", ["escape", ["macro", 2], 8, 16], ",c=[],f={},e=0;for(i=0;i\u003Cb.length;i++){var g=b[i].item_id,d=b[i].price,h=b[i].quantity,a=f[g];a?(c[a].quantity+=h,0\u003Cd\u0026\u0026(c[a].price=d)):(a={},a.id=b[i].item_id,a.price=0\u003Cd?d:1,a.quantity=h,c[e]=a,f[g]=e,e++)}b=window.dataLayer||[];b.push({event:\"criteo_template_event\",criteo_arguments:{event:\"trackTransaction\",id:\"", ["escape", ["macro", 47], 7], "\",new_customer:\"", ["escape", ["macro", 48], 7], "\",item:c,user_segment:\"", ["escape", ["macro", 42], 7], "\"}})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 25
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var c=\"https:\/\/email.lazada.com\/pub\/rf\",a={_ri_:\"X0Gzc2X%3DYQpglLjHJlYQGrnud6nbR1H47FyCTaEu2azeaOb657nzf8PdkVwjpnpgHlpgneHmgJoXX0Gzc2X%3DYQpglLjHJlYQGNGsFzgoPdmujEdlW1GJjzaSSaOb657nzf8Pdk\",bob_id_customer:", ["escape", ["macro", 22], 8, 16], ",ga_client_id:", ["escape", ["macro", 49], 8, 16], ",client_id:", ["escape", ["macro", 50], 8, 16], ".toLowerCase()};if(0!=", ["escape", ["macro", 51], 8, 16], "){var d=Object.keys(a).map(function(b){return encodeURIComponent(b)+\"\\x3d\"+encodeURIComponent(a[b])}).join(\"\\x26\");(new Image).setAttribute(\"src\",c+\"?\"+d+\n\"\\x26callback\\x3d?\")}})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 27
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efor(var url=\"https:\/\/email.lazada.com\/pub\/rf\",core=", ["escape", ["macro", 16], 8, 16], ",visitor=", ["escape", ["macro", 21], 8, 16], ",cartItems=", ["escape", ["macro", 52], 8, 16], ",data={_ri_:\"X0Gzc2X%3DYQpglLjHJlYQGzbE9im3SsULTStMzaYLtjnNP7zaicNb5A6slCVwjpnpgHlpgneHmgJoXX0Gzc2X%3DYQpglLjHJlYQGtWumpPMoMUNzfzdN0hWjeszad7zaicNb5A6slC\",bob_id_customer:", ["escape", ["macro", 22], 8, 16], ",client_id:", ["escape", ["macro", 50], 8, 16], ".toLowerCase(),visitor_type:", ["escape", ["macro", 53], 8, 16], ",ga_client_id:", ["escape", ["macro", 49], 8, 16], ",url_path:", ["escape", ["macro", 7], 8, 16], ",email_encoded:", ["escape", ["macro", 22], 8, 16], ",\nlayout:", ["escape", ["macro", 36], 8, 16], "},i=0;3\u003Ei;i++)\"undefined\"!=typeof cartItems[i]\u0026\u0026\"add_to_cart\"==", ["escape", ["macro", 54], 8, 16], "?(data[\"sku\"+(i+1)]=cartItems[i].simpleSku,data[\"sku\"+(i+1)+\"_price\"]=cartItems[i].price||\"\"):(data[\"sku\"+(i+1)]=\"\",data[\"sku\"+(i+1)+\"_price\"]=\"\");if(", ["escape", ["macro", 51], 8, 16], "\u0026\u00260!=", ["escape", ["macro", 22], 8, 16], "){var params=Object.keys(data).map(function(a){return encodeURIComponent(a)+\"\\x3d\"+encodeURIComponent(data[a])}).join(\"\\x26\");(new Image).setAttribute(\"src\",url+\"?\"+params+\"\\x26callback\\x3d?\")};\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 28
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c){var a=b.createElement(c),d=b.getElementsByTagName(c)[0],e=+new Date\/72E5|0;a.async=1;a.crossOrigin=\"anonymous\";a.src=\"https:\/\/assets.alicdn.com\/g\/secdev\/entry\/index.js?t\\x3d\"+e;d.parentNode.insertBefore(a,d)})(document,\"script\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 55
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=[],b=", ["escape", ["macro", 2], 8, 16], ",c;for(c in b)-1==a.indexOf(b[c].simple_sku)\u0026\u0026a.push(b[c].simple_sku);var d={_p_ord_id:\"", ["escape", ["macro", 47], 7], "\",_p_ord_prods:a.join(\"\/\/\"),ord_number:\"", ["escape", ["macro", 47], 7], "\",_p_client_type:1==", ["escape", ["macro", 55], 8, 16], "?\"app\":\"web\"};a=url=Object.keys(d).map(function(a){return encodeURIComponent(a)+\"\\x3d\"+encodeURIComponent(d[a])}).join(\"\\x26\");window.goldlog_queue=window.goldlog_queue||[];window.goldlog_queue.push({action:\"goldlog.record\",arguments:[\"\/lzdpub.ord.new\",\n\"CLK\",a]})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 57
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=", ["escape", ["macro", 56], 8, 16], ",c=[];Object.keys(b).map(function(a){a=b[a];c.push({name:a.simple_sku,id:a.sku_id,price:a.price,brand:a.brand_id,category:a.reg_category,variant:\"\",quantity:a.quantity,coupon:\"\"})});window.dataLayer.push({event:", ["escape", ["macro", 57], 8, 16], ",ecommerce:{purchase:{actionField:{id:", ["escape", ["macro", 47], 8, 16], ",affiliation:\"\",revenue:", ["escape", ["macro", 26], 8, 16], ",tax:\"\",shipping:\"\",coupon:\"\"},products:c}}})})();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 58
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer=dataLayer||[];dataLayer.push({event:", ["escape", ["macro", 57], 8, 16], ",ecommerce:{detail:{products:[{name:", ["escape", ["macro", 46], 8, 16], ",id:", ["escape", ["macro", 58], 8, 16], ",price:", ["escape", ["macro", 59], 8, 16], ",brand:", ["escape", ["macro", 60], 8, 16], ",category:", ["escape", ["macro", 61], 8, 16], ",variant:\"\"}]}}});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 59
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];window.dataLayer.push({event:\"addToCartUA\",ecommerce:{currencyCode:\"BDT\",add:{products:[{id:", ["escape", ["macro", 62], 8, 16], ",brand:", ["escape", ["macro", 63], 8, 16], ",category:", ["escape", ["macro", 64], 8, 16], ",quantity:1}]}}});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 61
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer=dataLayer||[];dataLayer.push({event:", ["escape", ["macro", 57], 8, 16], "});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 63
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar parameters=", ["escape", ["macro", 65], 8, 16], "||[];window.dataLayer=window.dataLayer||[];parameters.forEach(function(a){a.conversionId\u0026\u0026window.dataLayer.push({event:\"googleAdwordConversionTracking\",conversionId:a.conversionId,conversionLabel:a.conversionLabel})});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 65
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,f,m,g,n){var c,h=\"Promise\"in a,d={then:function(){return d},\"catch\":function(b){return b(Error(\"Airship SDK Error: Unsupported browser\")),d}},l=h?new Promise(function(b,e){c=function(k,p){k?e(k):b(p)}}):d;l._async_setup=function(b){if(h)try{c(null,b(n))}catch(e){c(e)}};a[g]=l;a=f.createElement(\"script\");a.src=m;a.async=!0;a.id=\"_uasdk\";a.rel=g;f.head.appendChild(a)}(window,document,\"https:\/\/aswpsdkeu.com\/notify\/v1\/ua-sdk.min.js\",\"UA\",{workerUrl:\"\/push-worker.js\",registrationDomain:\"www.daraz.com.bd\",\nmixedRegistrationDomains:!0,secureBridgeUrl:\"https:\/\/daraz-by.accengage.net\/pushweb\/assets\/secure-bridge.html\",allowedDomains:[\"https:\/\/daraz.com.bd\",\"https:\/\/www.daraz.com.bd\"],vapidPublicKey:\"BPnqL43zhLkdfbcXnJ81dfEmZd3qDE4352_xF4qi_iwI6vFZQzr-vbTS1zPgc-OWwF-5vbk54Bx5WaEppzh6ylg\",appKey:\"aATXTCQJSA6Gcn3oTbDU9Q\",token:\"MTphQVRYVENRSlNBNkdjbjNvVGJEVTlROnFXQVYwSjBzYlkzY29wLVdGajkwMlN5VW0tZmw0OWpvUEpyQVhxNzU5WU0\"});\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar IDBOpenDBRequest=indexedDB.open(\"ACC\",2);\nIDBOpenDBRequest.onsuccess=function(a){a=a.target.result;0!=a.objectStoreNames.length\u0026\u0026(a=a.transaction([\"settings\"],\"readwrite\"),a=a.objectStore(\"settings\"),a=a.get(\"me\"),a.onsuccess=function(e){var c=e.target.result;UA.then(function(b){b.channel\u0026\u0026c\u0026\u0026\"Y\"==c.system_optin_notifs\u0026\u0026\"granted\"==Notification.permission?b.channel.optOut():(b.register(),b.getChannel().then(function(f){console.log(\"Channel ID: %s\",f.id);b.channel.attributes.set({Country:\"", ["escape", ["macro", 50], 7], "\"}).then(function(d){console.log(\"Country set!\")})[\"catch\"](function(d){console.error(\"An error occured while setting Country attribute: %s\",d)})}))})})};\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 69
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar d=new Date,month=\"\"+(d.getMonth()+1),day=\"\"+d.getDate(),year=d.getFullYear();2\u003Emonth.length\u0026\u0026(month=\"0\"+month);2\u003Eday.length\u0026\u0026(day=\"0\"+day);var datedate=[year,month,day].join(\"-\")+\" 00:00:00\";\nUA.then(function(b){b.channel.attributes.set({Purchase_Status:1,URL_Cart:\"https:\/\/cart.daraz.com.bd\/cart\",Last_product_added_to_cart_URL:\"https:\/\/", ["escape", ["macro", 66], 7], "\/catalog\/?q\\x3d", ["escape", ["macro", 67], 7], "\\x26utm_source\\x3dweb\\x26utm_medium\\x3dpn\\x26utm_campaign\\x3d", ["escape", ["macro", 50], 7], "-%5B%5D%20CartRetargeting\",Date_last_added_to_cart:datedate,Country:\"", ["escape", ["macro", 50], 7], "\",Last_Language:\"\",LastBrandAddedtoCartURL:\"https:\/\/", ["escape", ["macro", 66], 7], "\/catalog\/?q\\x3d\"+\"", ["escape", ["macro", 60], 7], "\".replace(\" \",\n\"+\")+\"\\x26utm_source\\x3dweb\\x26utm_medium\\x3dpn\\x26utm_campaign\\x3d", ["escape", ["macro", 50], 7], "-%5B%5D%20CartRetargeting\",LastBrandAddedtoCartName:\"", ["escape", ["macro", 68], 7], "\",LastCategoryAddedtoCartURL:\"https:\/\/", ["escape", ["macro", 66], 7], "\/catalog\/?q\\x3d\"+\"", ["escape", ["macro", 10], 7], "\".replace(\" \",\"+\")+\"\\x26utm_source\\x3dweb\\x26utm_medium\\x3dpn\\x26utm_campaign\\x3d", ["escape", ["macro", 50], 7], "-%5B%5D%20CartRetargeting\",LastCategoryAddedtoCartName:\"", ["escape", ["macro", 10], 7], "\"}).then(function(a){console.log(\"AddToCart attributes set!\")})[\"catch\"](function(a){console.error(\"An error occured while setting AddToCart attributes: %s\",\na)})});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 70
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar userId=", ["escape", ["macro", 22], 8, 16], ";userId\u0026\u0026\"\"!==userId\u0026\u0026UA.then(function(b){b.channel.attributes.set({userID:", ["escape", ["macro", 22], 8, 16], "}).then(function(a){console.log(\"userID set!\")})[\"catch\"](function(a){console.error(\"An error occured while setting userID attribute: %s\",a)})});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 71
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003EUA.then(function(b){b.plugins.load(\"html-prompt\",\"https:\/\/aswpsdkus.com\/notify\/v1\/ua-html-prompt.min.js\",{stylesheet:\"https:\/\/g.alicdn.com\/daraz-fe\/static\/1.0.10\/airship\/airship-popup.css\",askAgainDelay:168,auto:!0,i18n:{en:{title:\"Daz wants to be friends with you\",message:\"Become friends with Daz to be the first one to know about exclusive deals and discounts.\",accept:\"Be Friends\",deny:\"Not Interested\"}},logo:\"https:\/\/mobilecrm.accengage.com\/images\/logo_application\/1511.png\"}).then(function(a){console.log(a);\na.prompt()})[\"catch\"](function(a){console.log(a)})});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 74
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar d=new Date,month=\"\"+(d.getMonth()+1),day=\"\"+d.getDate(),year=d.getFullYear();2\u003Emonth.length\u0026\u0026(month=\"0\"+month);2\u003Eday.length\u0026\u0026(day=\"0\"+day);var datedate=[year,month,day].join(\"-\")+\" 00:00:00\";\nUA.then(function(b){b.channel.attributes.set({LastSearchTerm:\"", ["escape", ["macro", 69], 7], "\",LastSearchURL:\"", ["escape", ["macro", 7], 7], "\\x26utm_source\\x3dweb\\x26utm_medium\\x3dpn\\x26utm_campaign\\x3d", ["escape", ["macro", 50], 7], "-%5B%5D%20SearchRetargeting\",ProductCountLastSearchResults:\"", ["escape", ["macro", 25], 7], "\",LastSearchDate:datedate}).then(function(a){console.log(\"Search Attributes set!\")})[\"catch\"](function(a){console.error(\"An error occured while setting Search attributes: %s\",a)})});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 75
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar d=new Date,month=\"\"+(d.getMonth()+1),day=\"\"+d.getDate(),year=d.getFullYear();2\u003Emonth.length\u0026\u0026(month=\"0\"+month);2\u003Eday.length\u0026\u0026(day=\"0\"+day);var datedate=[year,month,day].join(\"-\")+\" 00:00:00\",brand=", ["escape", ["macro", 70], 8, 16], ",categories=\"\",lastCategory=\"\";\nUA.then(function(b){b.channel.attributes.set({lastOrderDate:datedate,Purchase_Status:0,LastBrandPurchasedURL:\"https:\/\/", ["escape", ["macro", 66], 7], "\/catalog\/?q\\x3d\"+brand.replace(\" \",\"+\")+\"\\x26utm_source\\x3dweb\\x26utm_medium\\x3dpn\\x26utm_campaign\\x3d", ["escape", ["macro", 50], 7], "-%5B%5D%20CartRetargeting\",LastBrandPurchasedName:brand,LastCategoryPurchasedURL:\"https:\/\/", ["escape", ["macro", 66], 7], "\/catalog\/?q\\x3d\"+lastCategory.replace(\" \",\"+\")+\"\\x26utm_source\\x3dweb\\x26utm_medium\\x3dpn\\x26utm_campaign\\x3d", ["escape", ["macro", 50], 7], "-%5B%5D%20CartRetargeting\",\nLastCategoryPurchasedName:lastCategory}).then(function(a){console.log(\"Success Attributes set!\")})[\"catch\"](function(a){console.error(\"An error occured while setting Success Attributes: %s\",a)})});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 76
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",", ["escape", ["macro", 71], 8, 16], ");fbq(\"track\",\"PageView\");\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 78
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 37, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_name:", ["escape", ["macro", 72], 8, 16], ",content_category:", ["escape", ["macro", 11], 8, 16], ",content_ids:", ["escape", ["macro", 67], 8, 16], ",content_type:\"product\",value:", ["escape", ["macro", 59], 8, 16], ",currency:", ["escape", ["macro", 28], 8, 16], ",brand:", ["escape", ["macro", 14], 8, 16], ",category:", ["escape", ["macro", 24], 8, 16], ",categoryTier:", ["escape", ["macro", 13], 8, 16], ",pageType:", ["escape", ["macro", 15], 8, 16], "});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 79
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 37, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"ViewCategory\",{content_name:", ["escape", ["macro", 11], 8, 16], ",content_category:", ["escape", ["macro", 10], 8, 16], ",content_ids:", ["escape", ["macro", 44], 8, 16], ",content_type:\"product\",brand:\"\",category:", ["escape", ["macro", 24], 8, 16], ",categoryTier:", ["escape", ["macro", 13], 8, 16], ",pageType:", ["escape", ["macro", 15], 8, 16], "});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 80
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 37, 1]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Search\",{search_string:", ["escape", ["macro", 69], 8, 16], ",content_ids:", ["escape", ["macro", 44], 8, 16], ",content_type:\"product\",brand:\"\",customerType:\"\",pageType:", ["escape", ["macro", 15], 8, 16], "});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 81
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 37, 1]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar order_items=", ["escape", ["macro", 56], 8, 16], ",contents=[];Object.keys(order_items).map(function(a){a=order_items[a];contents.push({id:a.sku_id,quantity:a.quantity,item_price:a.price})});fbq(\"track\",\"Purchase\",{contents:contents,content_type:\"product\",value:", ["escape", ["macro", 26], 8, 16], ",currency:", ["escape", ["macro", 28], 8, 16], ",customerType:\"\",pageType:", ["escape", ["macro", 15], 8, 16], "});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 82
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 37, 1]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{content_name:\"\",content_category:", ["escape", ["macro", 11], 8, 16], ",content_ids:", ["escape", ["macro", 62], 8, 16], ",content_type:\"product\",value:", ["escape", ["macro", 32], 8, 16], ",currency:", ["escape", ["macro", 28], 8, 16], ",brand:\"\",category:", ["escape", ["macro", 24], 8, 16], ",categoryTier:", ["escape", ["macro", 13], 8, 16], ",customerType:\"\",pageType:", ["escape", ["macro", 15], 8, 16], "});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 83
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.itsClickPI={siteId:\"\",advId:\"i4461180\",ttrcDomain:\"marketing.net.daraz.com.bd\"};var e=function(a){if(a)return\"function\"==typeof encodeURIComponent?encodeURIComponent(a):escape(a)},g=function(a){if(document.images){if(\"object\"!=typeof d)var d=[];var b=d.length;d[b]=new Image;d[b].src=a;d[b].onload=function(){}}else document.write('\\x3cimg src\\x3d\"'+a+'\" height\\x3d\"1\" width\\x3d\"1\" border\\x3d\"0\" alt\\x3d\"\" style\\x3d\"display:none;\"\\x3e')},h=\"http\"+(\"https:\"==document.location.protocol?\n\"s\":\"\")+\":\",c=function(a){var d=h+\"\/\/\"+a.trcDomain+\"\/ts\/\"+a.advId+\"\/tsc?\";var b=new Date;b=b.getTime();b=\"tst\\x3d\"+b;a.admCode\u0026\u0026(b+=\"\\x26amc\\x3d\"+e(a.admCode));a.subCode\u0026\u0026(b+=\"\\x26smc\\x3d\"+e(a.subCode));a.siteId\u0026\u0026(b+=\"\\x26sid\\x3d\"+e(a.siteId));var c=window.document.referrer;c\u0026\u0026(b+=\"\\x26rrf\\x3d\"+e(c));a.paramRef\u0026\u0026(b+=\"\\x26prf\\x3d\"+e(a.paramRef));a.userVal1\u0026\u0026(b+=\"\\x26uv1\\x3d\"+e(a.userVal1));a.userVal2\u0026\u0026(b+=\"\\x26uv2\\x3d\"+e(a.userVal2));b+=\"\\x26rmd\\x3d0\";a=screen.width?screen.width:\"0\";a+=\"X\";a+=screen.height?\nscreen.height:\"0\";a+=\"X\";a+=screen.colorDepth?screen.colorDepth:\"0\";b+=\"\\x26scr\\x3d\"+a;b+=\"\\x26nck\\x3d\";b+=navigator.cookieEnabled?navigator.cookieEnabled:\"null\";b+=\"\\x26njv\\x3d\";a=b+=navigator.javaEnabled()?navigator.javaEnabled():\"null\";d+=a;g(d)};c(itsClickPI);c=document.createElement(\"script\");c.type=\"text\/javascript\";c.async=!0;c.src=\"http\"+(\"https:\"==document.location.protocol?\"s\":\"\")+\":\/\/\"+itsClickPI.trcDomain+\"\/scripts\/ts\/\"+itsClickPI.advId+\"contC.js\";var f=document.getElementsByTagName(\"script\")[0];\nf.parentNode.insertBefore(c,f)})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 85
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\n\u003Cscript type=\"text\/gtmscript\"\u003Evar convTargetValue=\"NewCustomer\";0\u003C", ["escape", ["macro", 23], 8, 16], "\u0026\u0026(convTargetValue=\"Sale\");var orderValue=", ["escape", ["macro", 26], 8, 16], ",order_items=", ["escape", ["macro", 2], 8, 16], ",basket=order_items.map(function(b){return{prn:b.simple_sku,pid:b.sku_id,pri:b.price,trc:b.reg_category,prc:b.reg_category,qty:b.quantity}});basket=JSON.stringify(basket);\nvar itsConv={trcCat:\"basket\",convTarget:convTargetValue,siteId:\"checkout_page\",convId:", ["escape", ["macro", 47], 8, 16], ",ordValue:orderValue,ordCurr:", ["escape", ["macro", 28], 8, 16], ",discValue:\"\",discCode:\"\",basket:basket,advId:\"i4461180\",trcDomain:\"marketing.net.daraz.com.bd\"};console.log(basket);en=function(b){if(b)return\"function\"==typeof encodeURIComponent?encodeURIComponent(b):escape(b)};ts=function(){var b=new Date;return b=b.getTime()};\nim=function(b){if(document.images){if(\"object\"!=typeof c)var c=[];var d=c.length;c[d]=new Image;c[d].src=b;c[d].onload=function(){}}else document.write('\\x3cimg src\\x3d\"'+b+'\" height\\x3d\"1\" width\\x3d\"1\" border\\x3d\"0\" alt\\x3d\"\"\\x3e')};var pr=\"http\"+(\"https:\"==document.location.protocol?\"s\":\"\")+\":\";\nfr=function(b){var c=document,d=c.createElement(\"iframe\");d.src=b;d.frameBorder=0;d.width=0;d.height=0;d.vspace=0;d.hspace=0;d.marginWidth=0;d.marginHeight=0;d.scrolling=\"no\";d.allowTransparency=!0;try{c.body.insertBefore(d,c.body.firstChild)}catch(e){c.write('\\x3ciframe src\\x3d\"'+b+'\" width\\x3d\"0\" height\\x3d\"0\" frameborder\\x3d\"0\" vspace\\x3d\"0\" hspace\\x3d\"0\" marginwidth\\x3d\"0\" marginheight\\x3d\"0\" scrolling\\x3d\"no\" allowtransparency\\x3d\"true\"\\x3e\\x3c\/iframe\\x3e')}};\nap=function(b){var c=\"tst\\x3d\"+ts();b.trcCat\u0026\u0026(c+=\"\\x26trc\\x3d\"+en(b.trcCat));c+=\"\\x26ctg\\x3d\"+en(b.convTarget);var d=b.convId?b.convId:b.convTarget+\":\"+ts();c+=\"\\x26cid\\x3d\"+en(d);b.ordValue\u0026\u0026(c+=\"\\x26orv\\x3d\"+en(b.ordValue));b.ordCurr\u0026\u0026(c+=\"\\x26orc\\x3d\"+en(b.ordCurr));b.discValue\u0026\u0026(c+=\"\\x26dsv\\x3d\"+en(b.discValue));b.discCode\u0026\u0026(c+=\"\\x26dsc\\x3d\"+en(b.discCode));b.invValue\u0026\u0026(c+=\"\\x26inv\\x3d\"+en(b.invValue));b.confStat\u0026\u0026(c+=\"\\x26cfs\\x3d\"+en(b.confStat));b.admCode\u0026\u0026(c+=\"\\x26amc\\x3d\"+en(b.admCode));\nb.subCode\u0026\u0026(c+=\"\\x26smc\\x3d\"+en(b.subCode));b.userVal1\u0026\u0026(c+=\"\\x26uv1\\x3d\"+en(b.userVal1));b.userVal2\u0026\u0026(c+=\"\\x26uv2\\x3d\"+en(b.userVal2));b.userVal3\u0026\u0026(c+=\"\\x26uv3\\x3d\"+en(b.userVal3));b.userVal4\u0026\u0026(c+=\"\\x26uv4\\x3d\"+en(b.userVal4));b.isCustNew\u0026\u0026(d=b.isCustNew.toLowerCase(),c+=\"\\x26csn\\x3d\",c+=\"true\"==d||\"false\"==d?d:\"null\");b.custId\u0026\u0026(c+=\"\\x26csi\\x3d\"+en(b.custId));b.custGend\u0026\u0026(d=b.custGend.toLowerCase(),c+=\"\\x26csg\\x3d\",c+=\"m\"==d||\"f\"==d?d:\"null\");b.custAge\u0026\u0026(c+=\"\\x26csa\\x3d\"+en(b.custAge));b.basket\u0026\u0026\n(c+=\"\\x26bsk\\x3d\"+en(b.basket));b.addData\u0026\u0026(c+=\"\\x26adt\\x3d\"+en(b.addData));b.custSurv\u0026\u0026(c+=\"\\x26csr\\x3d\"+en(b.custSurv));b.siteId\u0026\u0026(c+=\"\\x26sid\\x3d\"+en(b.siteId));b=screen.width?screen.width:\"0\";b+=\"X\";b+=screen.height?screen.height:\"0\";b+=\"X\";b+=screen.colorDepth?screen.colorDepth:\"0\";c+=\"\\x26scr\\x3d\"+b;c+=\"\\x26nck\\x3d\";c+=navigator.cookieEnabled?navigator.cookieEnabled:\"null\";c+=\"\\x26njv\\x3d\";return c+=navigator.javaEnabled()?navigator.javaEnabled():\"null\"};\nitsStartConv=function(b){b=pr+\"\/\/\"+b.trcDomain+\"\/ts\/\"+b.advId+\"\/tsa?typ\\x3df\\x26\"+ap(b);fr(b)};itsStartConv(itsConv);var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"http\"+(\"https:\"==document.location.protocol?\"s\":\"\")+\":\/\/\"+itsConv.trcDomain+\"\/scripts\/ts\/\"+itsConv.advId+\"contA.js\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(a,s);\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 86
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_yBgjI25wPkz0gaEMp4w3_basketadd_", ["escape", ["macro", 62], 12], "\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 91
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_yBgjI25wPkz0gaEMp4w3_category2_", ["escape", ["macro", 12], 12], "\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 92
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_yBgjI25wPkz0gaEMp4w3_home\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 94
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_yBgjI25wPkz0gaEMp4w3_offer_", ["escape", ["macro", 67], 12], "\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 96
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_yBgjI25wPkz0gaEMp4w3_listing_\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 97
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_yBgjI25wPkz0gaEMp4w3_orderstatus2_", ["escape", ["macro", 26], 12], "_", ["escape", ["macro", 47], 12], "_\u0026amp;cd=", ["escape", ["macro", 74], 12], "\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 98
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar items={id:\"", ["escape", ["macro", 62], 7], "\",pn:\"", ["escape", ["macro", 72], 7], "\",price:", ["escape", ["macro", 32], 8, 16], ",currency:\"", ["escape", ["macro", 28], 7], "\"};UA.then(function(a){(new a.CustomEvent.templates.retail.AddedToCartEvent(", ["escape", ["macro", 32], 8, 16], ",{item:items})).track()});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 99
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar items={id:\"", ["escape", ["macro", 11], 7], "\",cn:\"", ["escape", ["macro", 11], 7], "\",cu:\"", ["escape", ["macro", 7], 7], "\"};UA.then(function(a){(new a.CustomEvent(\"category_viewed\",0,{id:1001,item:items,details:{event:\"OK\"}})).track()});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 100
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar items={id:\"", ["escape", ["macro", 58], 7], "\",pn:\"", ["escape", ["macro", 72], 7], "\",currency:\"", ["escape", ["macro", 28], 7], "\"};UA.then(function(a){(new a.CustomEvent(\"product_viewed\",0,{id:1002,details:{event:\"OK\",items:items}})).track();a.channel.attributes.set({lastProductViewed:\"", ["escape", ["macro", 72], 7], "\",lastProductURL:\"", ["escape", ["macro", 7], 7], "\"}).then(function(b){console.log(\"Product attributes set!\")})[\"catch\"](function(b){console.error(\"An error occured while setting Product attributes: %s\",b)})});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 101
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003EUA.then(function(a){(new a.CustomEvent.templates.retail.PurchasedEvent(", ["escape", ["macro", 26], 8, 16], ",{id:\"", ["escape", ["macro", 47], 7], "\",price:", ["escape", ["macro", 26], 8, 16], ",currency:\"", ["escape", ["macro", 28], 7], "\"})).track()});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 102
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/c.o-s.io\/61252\/tracker.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 106
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar gtm=google_tag_manager[", ["escape", ["macro", 34], 8, 16], "];\ntry{var memory=!0,getQueryString=function(a){a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=new RegExp(\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\");a=a.exec(location.search);return null===a?\"\":decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))},d=new Date,ed=new Date(d.getFullYear(),d.getMonth()+6,d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds(),d.getMilliseconds()),domain=-1\u003Cwindow.location.host.toLowerCase().indexOf(\"shop.com.mm\")?\"shop.com.mm\":\"daraz\",referrer=document.referrer.toLowerCase();if(\"\"==referrer||\nvoid 0!==referrer.split(\"\/\")[2]\u0026\u0026-1==referrer.split(\"\/\")[2].indexOf(domain)){var source=getQueryString(\"utm_source\"),medium=getQueryString(\"utm_medium\"),campaign=getQueryString(\"utm_campaign\"),term=getQueryString(\"utm_term\"),content=getQueryString(\"utm_content\"),gclid=getQueryString(\"gclid\");memory\u0026\u0026\"\"==referrer\u0026\u0026\"\"==source\u0026\u0026\"\"==medium\u0026\u0026\"\"==campaign\u0026\u0026\"\"==term\u0026\u0026\"\"==content\u0026\u0026\"\"==gclid||(document.cookie=\"mi_source\\x3d\"+encodeURI(source)+\"; expires\\x3d\"+ed.toUTCString()+\"; path\\x3d\/;\",document.cookie=\n\"mi_medium\\x3d\"+encodeURI(medium)+\"; expires\\x3d\"+ed.toUTCString()+\"; path\\x3d\/;\",document.cookie=\"mi_campaign\\x3d\"+encodeURI(campaign)+\"; expires\\x3d\"+ed.toUTCString()+\"; path\\x3d\/;\",document.cookie=\"mi_term\\x3d\"+encodeURI(term)+\"; expires\\x3d\"+ed.toUTCString()+\"; path\\x3d\/;\",document.cookie=\"mi_content\\x3d\"+encodeURI(content)+\"; expires\\x3d\"+ed.toUTCString()+\"; path\\x3d\/;\",document.cookie=\"mi_gclid\\x3d\"+encodeURI(gclid)+\"; expires\\x3d\"+ed.toUTCString()+\"; path\\x3d\/;\")}gtm.onHtmlSuccess(", ["escape", ["macro", 75], 8, 16], ")}catch(a){gtm.onHtmlFailure(", ["escape", ["macro", 75], 8, 16], ")};\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 73
            }],
            "predicates": [{
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "success"
            }, {
                "function": "_re",
                "arg0": ["macro", 3],
                "arg1": "19113171[3-5]"
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": "gtm.load"
            }, {
                "function": "_re",
                "arg0": ["macro", 6],
                "arg1": "lazadacb\\.formstack|sellercenter\\.lazada"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "\/sell-on-lazada\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 8],
                "arg1": "(^$|((^|,)9511387_35($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": "addToCartUA"
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": "enhance_ecommerce_page_view"
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": "checkout_success"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "shop"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "brand"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "category"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "pdp"
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": "add_to_cart"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "error"
            }, {
                "function": "_eq",
                "arg0": ["macro", 33],
                "arg1": "Out of stock"
            }, {
                "function": "_lt",
                "arg0": ["macro", 25],
                "arg1": "1"
            }, {
                "function": "_cn",
                "arg0": ["macro", 34],
                "arg1": "GTM-M2M4QT3"
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": "criteo_template_event"
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": "cart_page"
            }, {
                "function": "_eq",
                "arg0": ["macro", 43],
                "arg1": "1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": "page_view"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "wow\/i\/sg\/im\/chat"
            }, {
                "function": "_eq",
                "arg0": ["macro", 45],
                "arg1": "1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": "cart_edit"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "\/wow\/i\/sg\/im\/chat"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "privacy-policy"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "user\/pure-login"
            }, {
                "function": "_cn",
                "arg0": ["macro", 66],
                "arg1": "university.daraz.com.bd"
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": "gtm.timer"
            }, {
                "function": "_re",
                "arg0": ["macro", 8],
                "arg1": "(^$|((^|,)9511387_63($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "search"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "success"
            }],
            "rules": [
                [
                    ["if", 0, 1, 2],
                    ["add", 0]
                ],
                [
                    ["if", 3, 4, 5, 6],
                    ["add", 1]
                ],
                [
                    ["if", 7],
                    ["add", 2, 42]
                ],
                [
                    ["if", 8],
                    ["add", 3]
                ],
                [
                    ["if", 2],
                    ["add", 4]
                ],
                [
                    ["if", 14],
                    ["add", 5, 7, 13, 31, 33, 37, 43, 55, 14]
                ],
                [
                    ["if", 9],
                    ["add", 6, 9, 21, 22, 25, 26, 30, 36, 41, 50, 54],
                    ["block", 4]
                ],
                [
                    ["if", 15],
                    ["add", 8, 28, 45, 51]
                ],
                [
                    ["if", 14, 16],
                    ["add", 10]
                ],
                [
                    ["if", 14, 17],
                    ["add", 11]
                ],
                [
                    ["if", 14, 18],
                    ["add", 12]
                ],
                [
                    ["if", 14, 19],
                    ["add", 15]
                ],
                [
                    ["if", 20],
                    ["add", 16]
                ],
                [
                    ["if", 21],
                    ["add", 17]
                ],
                [
                    ["if", 22, 23],
                    ["add", 18]
                ],
                [
                    ["if", 2, 22],
                    ["unless", 24],
                    ["add", 18]
                ],
                [
                    ["if", 2, 25],
                    ["add", 19, 47]
                ],
                [
                    ["if", 2, 13],
                    ["add", 20, 27, 38, 48, 53],
                    ["block", 4]
                ],
                [
                    ["if", 26],
                    ["add", 23, 32]
                ],
                [
                    ["if", 2],
                    ["unless", 27],
                    ["add", 24]
                ],
                [
                    ["if", 2, 12],
                    ["add", 29, 39, 46, 52],
                    ["block", 4]
                ],
                [
                    ["if", 2, 10],
                    ["add", 29],
                    ["block", 4]
                ],
                [
                    ["if", 2, 11],
                    ["add", 29],
                    ["block", 4]
                ],
                [
                    ["if", 31, 32],
                    ["add", 34]
                ],
                [
                    ["if", 2, 33],
                    ["add", 35, 40, 49]
                ],
                [
                    ["if", 2, 34],
                    ["add", 44],
                    ["block", 43]
                ],
                [
                    ["if", 14, 28],
                    ["block", 31]
                ],
                [
                    ["if", 14, 29],
                    ["block", 31]
                ],
                [
                    ["if", 14, 30],
                    ["block", 31]
                ]
            ]
        },
        "runtime": []




    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ea = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        fa;
    if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                    a: !0
                },
                ja = {};
            try {
                ja.__proto__ = ia;
                ha = ja.a;
                break a
            } catch (a) {}
            ha = !1
        }
        fa = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ka = fa,
        ma = function(a, b) {
            a.prototype = ea(b.prototype);
            a.prototype.constructor = a;
            if (ka) ka(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.wj = b.prototype
        },
        na = this || self,
        oa = function(a) {
            return a
        };
    var pa = function() {},
        ra = function(a) {
            return "function" == typeof a
        },
        sa = function(a) {
            return "string" == typeof a
        },
        ta = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        ua = Array.isArray,
        va = function(a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        wa = function(a, b) {
            if (a && ua(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        xa = function(a, b) {
            if (!ta(a) || !ta(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b -
                a + 1) + a)
        },
        za = function(a, b) {
            for (var c = new ya, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        Aa = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Da = function(a) {
            return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Ea = function(a) {
            return Math.round(Number(a)) || 0
        },
        Fa = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        Ia = function(a) {
            var b = [];
            if (ua(a))
                for (var c =
                        0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        La = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Oa = function() {
            return new Date(Date.now())
        },
        h = function() {
            return Oa().getTime()
        },
        ya = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    ya.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    ya.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Pa = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Qa = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Ra = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Sa = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ta = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Ua = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Va = /^\w{1,9}$/,
        Wa = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Aa(a, function(d, e) {
                Va.test(d) && e && c.push(d)
            });
            return c.join(b)
        };
    var Xa, Ya = function() {
        if (void 0 === Xa) {
            var a = null,
                b = na.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: oa,
                        createScript: oa,
                        createScriptURL: oa
                    })
                } catch (c) {
                    na.console && na.console.error(c.message)
                }
                Xa = a
            } else Xa = a
        }
        return Xa
    };
    var $a = function(a, b) {
        this.m = b === Za ? a : ""
    };
    $a.prototype.toString = function() {
        return this.m + ""
    };
    var Za = {},
        ab = function(a) {
            var b = Ya(),
                c = b ? b.createScriptURL(a) : a;
            return new $a(c, Za)
        };
    var bb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var cb;
    a: {
        var gb = na.navigator;
        if (gb) {
            var hb = gb.userAgent;
            if (hb) {
                cb = hb;
                break a
            }
        }
        cb = ""
    }

    function ib(a) {
        return -1 != cb.indexOf(a)
    };
    var jb = {},
        kb = function(a, b, c) {
            this.m = c === jb ? a : ""
        };
    kb.prototype.toString = function() {
        return this.m.toString()
    };
    var mb = function(a) {
            return a instanceof kb && a.constructor === kb ? a.m : "type_error:SafeHtml"
        },
        nb = function(a) {
            var b = Ya(),
                c = b ? b.createHTML(a) : a;
            return new kb(c, null, jb)
        },
        ob = new kb(na.trustedTypes && na.trustedTypes.emptyHTML || "", 0, jb);
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function pb(a, b) {
        a.src = b instanceof $a && b.constructor === $a ? b.m : "type_error:TrustedResourceUrl";
        var c, d, e = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
            f = null === (d = e.querySelector) || void 0 === d ? void 0 : d.call(e, "script[nonce]");
        (c = f ? f.nonce || f.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };
    var qb = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        rb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var sb = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        var c = a.firstChild.firstChild;
        a.innerHTML = mb(ob);
        return !c.parentElement
    });
    var m = window,
        B = document,
        tb = navigator,
        ub = B.currentScript && B.currentScript.src,
        vb = function(a, b) {
            var c = m[a];
            m[a] = void 0 === c ? b : c;
            return m[a]
        },
        wb = function(a) {
            var b = B.getElementsByTagName("script")[0] || B.body || B.head;
            b.parentNode.insertBefore(a, b)
        },
        xb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        yb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        zb = function(a, b, c, d) {
            var e = B.createElement("script");
            d && Aa(d, function(f, g) {
                f = f.toLowerCase();
                yb.hasOwnProperty(f) || e.setAttribute(f, g)
            });
            e.type = "text/javascript";
            e.async = !0;
            pb(e, ab(a));
            xb(e, b);
            c && (e.onerror = c);
            wb(e);
            return e
        },
        Ab = function() {
            if (ub) {
                var a = ub.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Bb = function(a, b) {
            var c = B.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = B.body && B.body.lastChild || B.body || B.head;
            d.parentNode.insertBefore(c,
                d);
            xb(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        Cb = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        Db = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Eb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        G = function(a) {
            m.setTimeout(a, 0)
        },
        Fb = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value :
                null
        },
        Gb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Hb = function(a) {
            var b = B.createElement("div"),
                c = nb("A<div>" + a + "</div>"),
                d = b;
            if (sb())
                for (; d.lastChild;) d.removeChild(d.lastChild);
            d.innerHTML = mb(c);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Jb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Kb = function(a) {
            var b;
            try {
                b = tb.sendBeacon && tb.sendBeacon(a)
            } catch (c) {}
            b || Cb(a)
        },
        Lb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Mb = function(a) {
            var b = B.featurePolicy;
            return b && ra(b.features) ? -1 !== b.features().indexOf(a) : !1
        },
        Nb = function() {
            return tb.userLanguage || tb.language
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ob = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Pb = function(a) {
            if (null == a) return String(a);
            var b = Ob.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Qb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Rb = function(a) {
            if (!a || "object" != Pb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Qb(a, "constructor") && !Qb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Qb(a, b)
        },
        H = function(a, b) {
            var c = b || ("array" == Pb(a) ? [] : {}),
                d;
            for (d in a)
                if (Qb(a, d)) {
                    var e = a[d];
                    "array" == Pb(e) ? ("array" != Pb(c[d]) && (c[d] = []), c[d] = H(e, c[d])) : Rb(e) ? (Rb(c[d]) || (c[d] = {}), c[d] = H(e, c[d])) : c[d] = e
                }
            return c
        };
    var Sb = function(a) {
        if (void 0 === a || ua(a) || Rb(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var Tb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Ng: a("consent"),
            Og: a("consent_always_fire"),
            Re: a("convert_case_to"),
            Se: a("convert_false_to"),
            Te: a("convert_null_to"),
            Ue: a("convert_true_to"),
            Ve: a("convert_undefined_to"),
            gj: a("debug_mode_metadata"),
            jj: a("event_data_overrides"),
            lb: a("function"),
            Ch: a("instance_name"),
            Eh: a("live_only"),
            Fh: a("malware_disabled"),
            Gh: a("metadata"),
            kj: a("original_activity_id"),
            lj: a("original_vendor_template_id"),
            Kh: a("once_per_event"),
            Bf: a("once_per_load"),
            nj: a("priority_override"),
            oj: a("respected_consent_types"),
            Ff: a("setup_tags"),
            Hf: a("tag_id"),
            If: a("teardown_tags")
        }
    }();
    var Ub = [],
        Vb = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        ac = function(a) {
            return Vb[a]
        },
        bc = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var fc = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        gc = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\x0B": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        },
        hc = function(a) {
            return gc[a]
        };
    Ub[7] = function(a) {
        return String(a).replace(fc, hc)
    };
    Ub[8] = function(a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(fc, hc) + "'"
        }
    };
    var nc = /['()]/g,
        oc = function(a) {
            return "%" + a.charCodeAt(0).toString(16)
        };
    Ub[12] = function(a) {
        var b =
            encodeURIComponent(String(a));
        nc.lastIndex = 0;
        return nc.test(b) ? b.replace(nc, oc) : b
    };
    var pc = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        wc = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\x0B": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        xc = function(a) {
            return wc[a]
        };
    Ub[16] = function(a) {
        return a
    };
    var zc;
    var Ac = [],
        Bc = [],
        Cc = [],
        Dc = [],
        Ec = [],
        Fc = {},
        Gc, Hc, Ic, Jc = function(a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = Fc[c],
                e = {},
                f;
            for (f in a)
                if (a.hasOwnProperty(f))
                    if (0 === f.indexOf("vtp_")) d && b && b.Tf && b.Tf(a[f]), e[void 0 !== d ? f : f.substr(4)] = a[f];
                    else if (f === Tb.Og.toString() && a[f]) {}
            d && b && b.Sf && (e.vtp_gtmCachedValues = b.Sf);
            return void 0 !== d ? d(e) : zc(c, e, b)
        },
        Lc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Kc(a[e], b, c));
            return d
        },
        Kc = function(a, b, c) {
            if (ua(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Kc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = Ac[f];
                        if (!g || b.Be(g)) return;
                        c[f] = !0;
                        try {
                            var k = Lc(g, b, c);
                            k.vtp_gtmEventId = b.id;
                            d = Jc(k, b);
                            Ic && (d = Ic.Yh(d, k))
                        } catch (z) {
                            b.jg && b.jg(z, Number(f)), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[Kc(a[l], b, c)] = Kc(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var q = Kc(a[p], b, c);
                            Hc && (n = n || q === Hc.Wc);
                            d.push(q)
                        }
                        return Hc && n ? Hc.bi(d) : d.join("");
                    case "escape":
                        d = Kc(a[1], b, c);
                        if (Hc && ua(a[1]) && "macro" === a[1][0] && Hc.yi(a)) return Hc.Ni(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Ub[a[u]] && (d = Ub[a[u]](d));
                        return d;
                    case "tag":
                        var t = a[1];
                        if (!Dc[t]) throw Error("Unable to resolve tag reference " +
                            t + ".");
                        return d = {
                            $f: a[2],
                            index: t
                        };
                    case "zb":
                        var r = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        r["function"] = a[1];
                        var v = Pc(r, b, c),
                            x = !!a[4];
                        return x || 2 !== v ? x !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Pc = function(a, b, c) {
            try {
                return Gc(Lc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Sc = function(a) {
            function b(u) {
                for (var t = 0; t < u.length; t++) d[u[t]] = !0
            }
            for (var c = [], d = [], e = Qc(a), f = 0; f < Bc.length; f++) {
                var g = Bc[f],
                    k = Rc(g, e);
                if (k) {
                    for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
                    b(g.block || [])
                } else null === k && b(g.block || []);
            }
            for (var p = [], q = 0; q < Dc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Rc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var k = b(f[g]);
                if (2 === k) return null;
                if (1 === k) return !1
            }
            return !0
        },
        Qc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Pc(Cc[c], a));
                return b[c]
            }
        };
    var Tc = {
        Yh: function(a, b) {
            b[Tb.Re] && "string" === typeof a && (a = 1 == b[Tb.Re] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Tb.Te) && null === a && (a = b[Tb.Te]);
            b.hasOwnProperty(Tb.Ve) && void 0 === a && (a = b[Tb.Ve]);
            b.hasOwnProperty(Tb.Ue) && !0 === a && (a = b[Tb.Ue]);
            b.hasOwnProperty(Tb.Se) && !1 === a && (a = b[Tb.Se]);
            return a
        }
    };
    var M = {
        bc: "_ee",
        bd: "_syn_or_mod",
        pj: "_uei",
        Wd: "_eu",
        mj: "_pci",
        Cb: "event_callback",
        Mc: "event_timeout",
        ya: "gtag.config",
        Ha: "gtag.get",
        ra: "purchase",
        Ab: "refund",
        eb: "begin_checkout",
        yb: "add_to_cart",
        zb: "remove_from_cart",
        Xg: "view_cart",
        Xe: "add_to_wishlist",
        sa: "view_item",
        fb: "view_promotion",
        Hc: "select_promotion",
        zd: "select_item",
        Sa: "view_item_list",
        We: "add_payment_info",
        Wg: "add_shipping_info",
        Ja: "value_key",
        Ta: "value_callback",
        za: "allow_ad_personalization_signals",
        Xb: "restricted_data_processing",
        Sb: "allow_google_signals",
        Ca: "cookie_expires",
        Ub: "cookie_update",
        Zb: "session_duration",
        Qc: "session_engaged_time",
        Ka: "user_properties",
        na: "transport_url",
        R: "ads_data_redaction",
        va: "user_data",
        Vb: "first_party_collection",
        C: "ad_storage",
        H: "analytics_storage",
        Pe: "region",
        Qe: "wait_for_update",
        Ba: "conversion_linker",
        Aa: "conversion_cookie_prefix",
        ca: "value",
        ba: "currency",
        xf: "trip_type",
        V: "items",
        qf: "passengers",
        Cd: "allow_custom_scripts",
        $b: "session_id",
        vf: "quantity",
        Wa: "transaction_id",
        jb: "language",
        Kc: "country",
        Ic: "allow_enhanced_conversions",
        Hd: "aw_merchant_id",
        Fd: "aw_feed_country",
        Gd: "aw_feed_language",
        Ed: "discount",
        aa: "developer_id",
        Rc: "delivery_postal_code",
        Nd: "estimated_delivery_date",
        Ld: "shipping",
        Sd: "new_customer",
        Id: "customer_lifetime_value",
        Md: "enhanced_conversions",
        Rb: "page_view",
        ma: "linker",
        M: "domains",
        Fb: "decorate_forms",
        lf: "enhanced_conversions_automatic_settings",
        gh: "auto_detection_enabled",
        nf: "ga_temp_client_id",
        Ad: "user_engagement",
        Rg: "app_remove",
        Sg: "app_store_refund",
        Tg: "app_store_subscription_cancel",
        Ug: "app_store_subscription_convert",
        Vg: "app_store_subscription_renew",
        Yg: "first_open",
        Zg: "first_visit",
        $g: "in_app_purchase",
        ah: "session_start",
        bh: "user_data_login",
        dh: "user_data_logout",
        eh: "allow_display_features",
        Tb: "campaign",
        Ze: "campaign_content",
        $e: "campaign_id",
        af: "campaign_medium",
        bf: "campaign_name",
        cf: "campaign_source",
        df: "campaign_term",
        Bb: "client_id",
        ka: "cookie_domain",
        Jc: "cookie_name",
        hb: "cookie_path",
        Ia: "cookie_flags",
        ef: "custom_map",
        Pd: "groups",
        ij: "non_interaction",
        Gb: "page_location",
        pf: "page_path",
        Va: "page_referrer",
        Td: "page_title",
        Yb: "send_page_view",
        kb: "send_to",
        Ud: "session_engaged",
        Oc: "_logged_in_state",
        Vd: "session_number",
        yh: "tracking_id",
        Xa: "url_passthrough",
        Eb: "accept_incoming",
        Wb: "url_position",
        tf: "phone_conversion_number",
        rf: "phone_conversion_callback",
        sf: "phone_conversion_css_class",
        uf: "phone_conversion_options",
        uh: "phone_conversion_ids",
        th: "phone_conversion_country_code",
        Ye: "aw_remarketing",
        Dd: "aw_remarketing_only",
        Bd: "gclid",
        fh: "auid",
        lh: "affiliation",
        kf: "tax",
        Kd: "list_name",
        jf: "checkout_step",
        hf: "checkout_option",
        mh: "coupon",
        nh: "promotions",
        Hb: "user_id",
        vh: "retoken",
        la: "cookie_prefix",
        ff: "disable_merchant_reported_purchases",
        kh: "dc_natural_search",
        jh: "dc_custom_params",
        rh: "method",
        xh: "search_term",
        ih: "content_type",
        sh: "optimize_id",
        oh: "experiments",
        Ua: "google_signals",
        Nc: "google_tld",
        Sc: "update",
        Od: "firebase_id",
        Db: "ga_restrict_domain",
        Lc: "event_settings",
        Jd: "dynamic_event_settings",
        ac: "user_data_settings",
        wh: "screen_name",
        qh: "_x_19",
        ib: "_ecid",
        ph: "_x_20",
        Rd: "internal_traffic_results",
        wf: "traffic_type",
        Pc: "referral_exclusion_definition",
        Qd: "ignore_referrer",
        hh: "content_group"
    };
    var wd = {};
    M.zf = Object.freeze((wd[M.We] = 1, wd[M.Wg] = 1, wd[M.yb] = 1, wd[M.zb] = 1, wd[M.Xg] = 1, wd[M.eb] = 1, wd[M.zd] = 1, wd[M.Sa] = 1, wd[M.Hc] = 1, wd[M.fb] = 1, wd[M.ra] = 1, wd[M.Ab] = 1, wd[M.sa] = 1, wd[M.Xe] = 1, wd));
    M.Yd = Object.freeze([M.za, M.Sb, M.Ub]);
    M.Ih = Object.freeze([].concat(M.Yd));
    M.Zd = Object.freeze([M.Ca, M.Mc, M.Zb, M.Qc]);
    M.Jh = Object.freeze([].concat(M.Zd));
    var yd = {},
        zd = function(a, b) {
            yd[a] = yd[a] || [];
            yd[a][b] = !0
        },
        Ad = function(a) {
            for (var b = [], c = yd[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
    var Bd = function(a) {
        zd("GTM", a)
    };
    var Cd = function(a) {
        this.m = a;
        this.defaultValue = !1
    };
    var Dd = new Cd(1933),
        Ed = new Cd(1956);
    var Gd = function() {
        var a = Fd,
            b = "ze";
        if (a.ze && a.hasOwnProperty(b)) return a.ze;
        var c = new a;
        a.ze = c;
        a.hasOwnProperty(b);
        return c
    };
    var Fd = function() {
            var a = {};
            this.m = function(b, c) {
                return null != a[b] ? a[b] : c
            };
            this.o = function() {
                a[Dd.m] = !0
            }
        },
        Hd = function(a) {
            return Gd().m(a.m, a.defaultValue)
        };
    var Id = [];

    function Jd() {
        var a = vb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Kd,
            update: Rd,
            addListener: Sd,
            notifyListeners: Td,
            active: !1,
            usedDefault: !1
        });
        return a.ics
    }

    function Kd(a, b, c, d, e, f) {
        var g = Jd();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var k = g.entries,
                l = k[a] || {},
                n = l.region,
                p = c && sa(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === l.update),
                    u = {
                        region: p,
                        initial: "granted" === b,
                        update: l.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== l.initial) k[a] = u;
                q && m.setTimeout(function() {
                    k[a] === u && u.quiet && (u.quiet = !1, Ud(a), Td(), zd("TAGGING", 2))
                }, f)
            }
        }
    }

    function Rd(a, b) {
        var c = Jd();
        c.active = !0;
        if (void 0 != b) {
            var d = Vd(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Vd(a);
            f.quiet ? (f.quiet = !1, Ud(a)) : g !== d && Ud(a)
        }
    }

    function Sd(a, b) {
        Id.push({
            pe: a,
            ki: b
        })
    }

    function Ud(a) {
        for (var b = 0; b < Id.length; ++b) {
            var c = Id[b];
            ua(c.pe) && -1 !== c.pe.indexOf(a) && (c.og = !0)
        }
    }

    function Td(a) {
        for (var b = 0; b < Id.length; ++b) {
            var c = Id[b];
            if (c.og) {
                c.og = !1;
                try {
                    c.ki({
                        consentEventId: a
                    })
                } catch (d) {}
            }
        }
    }
    var Vd = function(a) {
            var b = Jd().entries[a] || {};
            return void 0 !== b.update ? b.update : b.initial
        },
        Wd = function(a) {
            return (Jd().entries[a] || {}).initial
        },
        Xd = function(a) {
            return !(Jd().entries[a] || {}).quiet
        },
        Yd = function() {
            return Hd(Dd) ? Jd().active : !1
        },
        Zd = function() {
            return Jd().usedDefault
        },
        $d = function(a, b) {
            Jd().addListener(a, b)
        },
        ae = function(a) {
            Jd().notifyListeners(a)
        },
        be = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Xd(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                $d(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        ce = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var k = d[g];
                    !1 === Vd(k) || e[k] || (f.push(k), e[k] = !0)
                }
                return f
            }
            var d = sa(b) ? [b] : b,
                e = {};
            c().length !== d.length && $d(d, function(f) {
                var g = c();
                0 < g.length && (f.pe = g, a(f))
            })
        };

    function de(a) {
        for (var b = [], c = 0; c < ee.length; c++) {
            var d = a(ee[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var ee = [M.C, M.H],
        fe = function(a) {
            var b = a[M.Pe];
            b && Bd(40);
            var c = a[M.Qe];
            c && Bd(41);
            for (var d = ua(b) ? b : [b], e = {
                    Ob: 0
                }; e.Ob < d.length; e = {
                    Ob: e.Ob
                }, ++e.Ob) Aa(a, function(f) {
                return function(g, k) {
                    if (g !== M.Pe && g !== M.Qe) {
                        var l = d[f.Ob];
                        Jd().set(g, k, l, "BD", "BD-C", c)
                    }
                }
            }(e))
        },
        ge = 0,
        he = function(a, b) {
            Aa(a, function(e, f) {
                Jd().update(e, f)
            });
            ae(b);
            var c = h(),
                d = c - ge;
            ge && 0 <= d && 1E3 > d && Bd(66);
            ge = c
        },
        ie = function(a) {
            var b = Vd(a);
            return void 0 != b ? b : !0
        },
        je = function() {
            return "G1" + de(Vd)
        },
        ke = function() {
            return "G1" +
                de(Wd)
        },
        le = function(a, b) {
            ce(a, b)
        },
        me = function(a, b) {
            be(a, b)
        };
    var oe = function(a) {
            return ne ? B.querySelectorAll(a) : null
        },
        pe = function(a, b) {
            if (!ne) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!B.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        qe = !1;
    if (B.querySelectorAll) try {
        var re = B.querySelectorAll(":root");
        re && 1 == re.length && re[0] == B.documentElement && (qe = !0)
    } catch (a) {}
    var ne = qe;
    var se = function(a) {
            return void 0 === a || null === a ? "" : sa(a) ? La(String(a)) : "e0"
        },
        ue = function(a) {
            return a.replace(te, "")
        },
        we = function(a) {
            return ve(a.replace(/\s/g, ""))
        },
        ve = function(a) {
            return La(a.replace(xe, "").toLowerCase())
        },
        ze = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return ye.test(a) ? a : "e0"
        },
        Be = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (Ae.test(c)) return c
            }
            return "e0"
        },
        Ee = function(a, b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== Ce.indexOf(c.name) ? De(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        De = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (m.crypto && m.crypto.subtle) try {
                var b = Fe(a);
                return m.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) {
                        return String.fromCharCode(e)
                    }).join("");
                    return m.btoa(d).replace(/\+/g,
                        "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (c) {
                return Promise.resolve("e2")
            } else return Promise.resolve("e1")
        },
        Fe = function(a) {
            var b;
            if (m.TextEncoder) b = (new m.TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        xe = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        Ae = /^\S+@\S+\.\S+$/,
        ye = /^\+\d{11,15}$/,
        te = /[.~]/g,
        Ge = {},
        He = (Ge.email = "em", Ge.phone_number = "pn", Ge.first_name = "fn", Ge.last_name = "ln", Ge.street = "sa", Ge.city = "ct", Ge.region = "rg", Ge.country = "co", Ge.postal_code = "pc", Ge.error_code = "ec", Ge),
        Ie = function(a, b) {
            function c(n, p, q) {
                var u = n[p];
                ua(u) || (u = [u]);
                for (var t = 0; t < u.length; ++t) {
                    var r = se(u[t]);
                    "" !== r && f.push({
                        name: p,
                        value: q(r),
                        index: void 0
                    })
                }
            }

            function d(n, p, q, u) {
                var t = se(n[p]);
                "" !== t && f.push({
                    name: p,
                    value: q(t),
                    index: u
                })
            }

            function e(n) {
                return function(p) {
                    Bd(64);
                    return n(p)
                }
            }
            var f = [];
            if ("https:" === m.location.protocol) {
                c(a, "email", Be);
                c(a, "phone_number", ze);
                c(a, "first_name", e(we));
                c(a, "last_name", e(we));
                var g = a.home_address || {};
                c(g, "street", e(ve));
                c(g, "city", e(ve));
                c(g, "postal_code", e(ue));
                c(g, "region", e(ve));
                c(g, "country", e(ue));
                var k = a.address || {};
                ua(k) || (k = [k]);
                for (var l = 0; l < k.length; l++) d(k[l], "first_name", we, l), d(k[l], "last_name", we, l), d(k[l], "street", ve, l), d(k[l], "city", ve, l), d(k[l], "postal_code", ue, l), d(k[l],
                    "region", ve, l), d(k[l], "country", ue, l);
                Ee(f, b)
            } else f.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), b(f)
        },
        Je = function(a, b) {
            Ie(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        k = c[f].value,
                        l = c[f].index,
                        n = He[g];
                    n && k && (-1 === Ce.indexOf(g) || /^e\d+$/.test(k) || /^[0-9A-Za-z_-]{43}$/.test(k)) && (void 0 !== l && (n += l), d.push(n + "." + k), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        Ke = function(a) {
            if (m.Promise) try {
                return new Promise(function(b) {
                    Je(a,
                        function(c, d) {
                            b({
                                vc: c,
                                tj: d
                            })
                        })
                })
            } catch (b) {}
        },
        Ce = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var Le = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0;
            this.isGtmEvent = !1
        },
        Me = function(a) {
            var b = new Le;
            b.eventModel = a;
            return b
        },
        Ne = function(a, b) {
            a.targetConfig = b;
            return a
        },
        Ve = function(a, b) {
            a.containerConfig = b;
            return a
        },
        We = function(a, b) {
            a.globalConfig = b;
            return a
        },
        Xe = function(a,
            b) {
            a.remoteConfig = b;
            return a
        },
        Ye = function(a, b) {
            a.onSuccess = b;
            return a
        },
        Ze = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a
        },
        $e = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a
        },
        af = function(a, b) {
            a.onFailure = b;
            return a
        };
    Le.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
    };
    var bf = function(a) {
            function b(d) {
                for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1
            }
            var c = {};
            b(a.eventModel);
            b(a.targetConfig);
            b(a.containerConfig);
            b(a.globalConfig);
            return Object.keys(c)
        },
        cf = function(a, b, c) {
            function d(g) {
                Rb(g) && Aa(g, function(k, l) {
                    f = !0;
                    e[k] = l
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.remoteConfig[b]), d(a.globalConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
            c && 2 !== c || d(a.eventModel[b]);
            return f ? e : void 0
        },
        df = function(a) {
            var b = [M.Tb, M.Ze, M.$e, M.af, M.bf, M.cf, M.df],
                c = {},
                d = !1,
                e = function(f) {
                    for (var g =
                            0; g < b.length; g++) void 0 !== f[b[g]] && (c[b[g]] = f[b[g]], d = !0);
                    return d
                };
            if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig)) return c;
            e(a.remoteConfig);
            return c
        };
    var ef = {},
        P = null,
        ff = Math.random();
    ef.I = "GTM-M2M4QT3";
    ef.$c = "ak0";
    ef.Qg = "ChAI8OXOiwYQnMaG6LKB3N9UEiQA+J7hWbK0h4Xsgy8fULvohOPOcIlwK31P8aY6UgZ3KYCANK0aAlh8";
    var gf = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        hf = {
            __paused: !0,
            __tg: !0
        },
        jf;
    for (jf in gf) gf.hasOwnProperty(jf) && (hf[jf] = !0);
    ef.xd = "www.googletagmanager.com";
    var kf = ef.xd + "/gtm.js";
    var lf = kf,
        mf = Fa(""),
        nf = null,
        of = null,
        pf = "https://www.googletagmanager.com/a?id=" + ef.I + "&cv=31",
        qf = {},
        rf = {},
        sf = function() {
            var a = P.sequence || 1;
            P.sequence = a + 1;
            return a
        };
    ef.Pg = "";
    var tf = "";
    ef.ad = tf;
    var uf = {},
        vf = new ya,
        wf = {},
        xf = {},
        Af = {
            name: "shadowDatalayerYZ9j",
            set: function(a, b) {
                H(Ua(a, b), wf);
                yf()
            },
            get: function(a) {
                return zf(a, 2)
            },
            reset: function() {
                vf = new ya;
                wf = {};
                yf()
            }
        },
        zf = function(a, b) {
            return 2 != b ? vf.get(a) : Bf(a)
        },
        Bf = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = wf, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== va(b, d)) return
            }
            return d
        },
        Cf = function(a, b) {
            xf.hasOwnProperty(a) || (vf.set(a, b), H(Ua(a, b), wf), yf())
        },
        yf = function(a) {
            Aa(xf, function(b, c) {
                vf.set(b, c);
                H(Ua(b,
                    void 0), wf);
                H(Ua(b, c), wf);
                a && delete xf[b]
            })
        },
        Ef = function(a, b, c) {
            uf[a] = uf[a] || {};
            uf[a][b] = Df(b, c)
        },
        Df = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Bf(a) : vf.get(a);
            "array" === Pb(d) || "object" === Pb(d) ? c = H(d) : c = d;
            return c
        },
        Ff = function(a, b) {
            if (uf[a]) return uf[a][b]
        },
        Gf = function(a, b) {
            uf[a] && delete uf[a][b]
        };
    var Hf, If = !1,
        Jf = function(a) {
            if (!If) {
                If = !0;
                Hf = Hf || {}
            }
            return Hf[a]
        };
    var Kf = function(a) {
        if (B.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle) return !0;
        var c = m.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                0 <= k && (g = g.substring(k + 8, g.indexOf(")", k)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = m.getComputedStyle(d,
                null))
        }
        return !1
    };
    var Tf = /:[0-9]+$/,
        Uf = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        Xf = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = Vf(a.protocol) || Vf(m.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : m.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || m.location.hostname).replace(Tf, "").toLowerCase());
            return Wf(a, b, c, d, e)
        },
        Wf = function(a, b, c, d, e) {
            var f, g = Vf(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = Yf(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(Tf, "").toLowerCase();
                    if (c) {
                        var k = /^www\d*\./.exec(f);
                        k && k[0] && (f = f.substr(k[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || zd("TAGGING",
                        1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var l = f.split("/");
                    0 <= va(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
                    f = l.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = Uf(f, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        Vf = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        Yf = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        Zf = function(a) {
            var b = B.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || zd("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(Tf, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        $f = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 != p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = Zf(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                k = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === k[0] && (k = k.substring(1));
            g = c(g);
            k = c(k);
            "" !== g && (g = "?" + g);
            "" !== k && (k = "#" + k);
            var l = "" + f + g + k;
            "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
            return l
        };
    var ag = {};
    var dg = function(a) {
            if (0 == a.length) return null;
            var b;
            b = bg(a, function(c) {
                return !cg.test(c.Pa)
            });
            b = bg(b, function(c) {
                return "INPUT" === c.element.tagName.toUpperCase()
            });
            b = bg(b, function(c) {
                return !Kf(c.element)
            });
            return b[0]
        },
        bg = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        eg = function(a) {
            var b;
            if (a === B.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) {
                                        e =
                                            g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = eg(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        fg = !0,
        gg = !1;
    ag.Lg = "true";
    var hg = function(a) {
            if ("false" === ag.Lg || !fg) return !1;
            if (gg) return !0;
            var b = Jf("AW-" +
                a);
            return !!b && !!b.preAutoPii
        },
        ig = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        jg = new RegExp(/@(gmail|googlemail)\./i),
        cg = new RegExp(/support|noreply/i),
        kg = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
        lg = ["BR"],
        mg = {},
        ng = function(a) {
            a = a || {
                xe: !0,
                ye: !0
            };
            a.$a = a.$a || {
                email: !0,
                phone: !0,
                Qf: !0
            };
            var b, c = a,
                d = !!c.xe + "." + !!c.ye;
            c && c.kd && c.kd.length && (d += "." + c.kd.join("."));
            c && c.$a && (d += "." + c.$a.email + "." + c.$a.phone + "." + c.$a.Qf);
            b = d;
            var e = mg[b];
            if (e && 200 > h() - e.timestamp) return e.result;
            var f;
            var g = [],
                k = B.body;
            if (k) {
                for (var l = k.querySelectorAll("*"), n = 0; n < l.length && 1E4 > n; n++) {
                    var p = l[n];
                    if (!(0 <= kg.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var q = !1, u = 0; u < p.childElementCount && 1E4 > u; u++)
                            if (!(0 <= lg.indexOf(p.children[u].tagName.toUpperCase()))) {
                                q = !0;
                                break
                            }
                        q || g.push(p)
                    }
                }
                f = {
                    elements: g,
                    status: 1E4 < l.length ? "2" : "1"
                }
            } else f = {
                elements: g,
                status: "4"
            };
            var t = f,
                r = t.status,
                v;
            if (a.$a && a.$a.email) {
                for (var x = t.elements, z = [], w = 0; w < x.length; w++) {
                    var y = x[w],
                        A = y.textContent;
                    "INPUT" === y.tagName.toUpperCase() &&
                        y.value && (A = y.value);
                    if (A) {
                        var C = A.match(ig);
                        if (C) {
                            var F = C[0],
                                D;
                            if (m.location) {
                                var E = Wf(m.location, "host", !0);
                                D = 0 <= F.toLowerCase().indexOf(E)
                            } else D = !1;
                            D || z.push({
                                element: y,
                                Pa: F
                            })
                        }
                    }
                }
                var O;
                var K = a && a.kd;
                if (K && 0 !== K.length) {
                    for (var L = [], N = 0; N < z.length; N++) {
                        for (var J = !0, I = 0; I < K.length; I++) {
                            var V = K[I];
                            if (V && pe(z[N].element, V)) {
                                J = !1;
                                break
                            }
                        }
                        J && L.push(z[N])
                    }
                    O = L
                } else O = z;
                v = dg(O);
                10 < z.length && (r = "3")
            }
            var T = [];
            if (v) {
                var X = v.element,
                    S = {
                        Pa: v.Pa,
                        tagName: X.tagName,
                        type: 1
                    };
                a.xe && (S.querySelector = eg(X));
                a.ye && (S.isVisible = !Kf(X));
                T.push(S)
            }
            var W = {
                elements: T,
                status: r
            };
            mg[b] = {
                timestamp: h(),
                result: W
            };
            return W
        },
        og = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.Pa.length + ":" + jg.test(a.Pa)
        };
    var pg = function(a, b, c) {
            if (c) {
                var d = c.selector_type,
                    e = String(c.value),
                    f;
                if ("js_variable" === d) {
                    e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                    for (var g = e.split(","), k = 0; k < g.length; k++) {
                        var l = g[k].trim();
                        if (l) {
                            if (0 === l.indexOf("dataLayer.")) f = zf(l.substring(10));
                            else {
                                var n = l.split(".");
                                f = m[n.shift()];
                                for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                            }
                            if (void 0 !== f) break
                        }
                    }
                } else if ("css_selector" === d && ne) {
                    var q = oe(e);
                    q && 0 < q.length && (f = Gb(q[0]) || La(q[0].value))
                }
                f && (a[b] = f)
            }
        },
        qg = function(a) {
            if (a) {
                var b = {};
                pg(b, "email",
                    a.email);
                pg(b, "phone_number", a.phone);
                b.address = [];
                for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                    var e = {};
                    pg(e, "first_name", c[d].first_name);
                    pg(e, "last_name", c[d].last_name);
                    pg(e, "street", c[d].street);
                    pg(e, "city", c[d].city);
                    pg(e, "region", c[d].region);
                    pg(e, "country", c[d].country);
                    pg(e, "postal_code", c[d].postal_code);
                    b.address.push(e)
                }
                return b
            }
        },
        rg = function(a) {
            if (a) switch (a.mode) {
                case "selectors":
                    return qg(a.selectors);
                case "auto_detect":
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = ng({
                                xe: !1,
                                ye: !1,
                                kd: c.exclude_element_selectors,
                                $a: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    Qf: !!c.address
                                }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if (1 === g.type) {
                                    e.email = g.Pa;
                                    break
                                }
                            }
                        b = e
                    } else b = void 0;
                    return b
            }
        },
        sg = function(a) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    var b = a.enhanced_conversions_manual_var;
                    return void 0 !== b ? b : m.enhanced_conversion_data;
                case "automatic":
                    return qg(a[M.lf])
            }
        };
    var tg = {},
        ug = function(a, b) {
            if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a)) return m._gtmexpgrp[a];
            void 0 === tg[a] && (tg[a] = Math.floor(Math.random() * b));
            return tg[a]
        };
    var vg = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
    var wg = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                k = g[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var l = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    };

    function xg(a) {
        return "null" !== a.origin
    };
    var Ag = function(a, b, c, d) {
            return yg(d) ? wg(a, String(b || zg()), c) : []
        },
        Ig = function(a, b, c, d, e) {
            if (yg(e)) {
                var f = Bg(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Cg(f, function(g) {
                        return g.hd
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Cg(f, function(g) {
                        return g.wc
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Jg(a, b, c, d) {
        var e = zg(),
            f = window;
        xg(f) && (f.document.cookie = a);
        var g = zg();
        return e != g || void 0 != c && 0 <= Ag(b, g, !1, d).indexOf(c)
    }
    var Ng = function(a, b, c) {
            function d(t, r, v) {
                if (null == v) return delete g[r], t;
                g[r] = v;
                return t + "; " + r + "=" + v
            }

            function e(t, r) {
                if (null == r) return delete g[r], t;
                g[r] = !0;
                return t + "; " + r
            }
            if (!yg(c.Fa)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Kg(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var k;
            c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
            f = d(f, "expires", k);
            f = d(f, "max-age", c.sj);
            f = d(f, "samesite",
                c.uj);
            c.vj && (f = e(f, "secure"));
            var l = c.domain;
            if (l && "auto" === l.toLowerCase()) {
                for (var n = Lg(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        u = d(f, "domain", q);
                    u = e(u, c.flags);
                    if (!Mg(q, c.path) && Jg(u, a, b, c.Fa)) return 0
                }
                return 1
            }
            l && "none" !== l.toLowerCase() && (f = d(f, "domain", l));
            f = e(f, c.flags);
            return Mg(l, c.path) ? 1 : Jg(f, a, b, c.Fa) ? 0 : 1
        },
        Og = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Ng(a, b, c)
        };

    function Cg(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                l = b(k);
            l === c ? d.push(k) : void 0 === f || l < f ? (e = [k], f = l) : l === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function Bg(a, b, c) {
        for (var d = [], e = Ag(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var l = g.shift();
                l && (l = l.split("-"), d.push({
                    id: g.join("."),
                    hd: 1 * l[0] || 1,
                    wc: 1 * l[1] || 1
                }))
            }
        }
        return d
    }
    var Kg = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Pg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Qg = /(^|\.)doubleclick\.net$/i,
        Mg = function(a, b) {
            return Qg.test(window.document.location.hostname) || "/" === b && Pg.test(a)
        },
        zg = function() {
            return xg(window) ? window.document.cookie : ""
        },
        Lg = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Qg.test(e) || Pg.test(e) || a.push("none");
            return a
        },
        yg = function(a) {
            if (!Hd(Dd) || !a || !Yd()) return !0;
            if (!Xd(a)) return !1;
            var b = Vd(a);
            return null == b ? !0 : !!b
        };
    var Rg = function(a) {
            var b = Math.round(2147483647 * Math.random()),
                c = b;
            a && (c = b ^ vg(a) & 2147483647);
            return [c, Math.round(h() / 1E3)].join(".")
        },
        Ug = function(a, b, c, d, e) {
            var f = Sg(b);
            return Ig(a, f, Tg(c), d, e)
        },
        Vg = function(a, b, c, d) {
            var e = "" + Sg(c),
                f = Tg(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Sg = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Tg = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };

    function Wg(a, b, c) {
        var d, e = Number(null != a.ab ? a.ab : void 0);
        0 !== e && (d = new Date((b || h()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    };
    var Xg = ["1"],
        Yg = {},
        ah = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = Zg(a.prefix);
            if (!Yg[c] && !$g(c, a.path, a.domain) && b) {
                var d = Zg(a.prefix),
                    e = Rg(),
                    f = Vg(e, "1", a.domain, a.path),
                    g = Wg(a);
                g.Fa = "ad_storage";
                if (0 === Og(d, f, g)) {
                    var k = vb("google_tag_data", {});
                    k._gcl_au ? zd("GTM", 57) : k._gcl_au = e
                }
                $g(c, a.path, a.domain)
            }
        };

    function $g(a, b, c) {
        var d = Ug(a, b, c, Xg, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (Yg[a] = e.slice(0, 2).join("."), e.slice(2, 4).join(".")) : 3 === e.length ? e.slice(0, 2).join(".") : Yg[a] = d;
        return !0
    }

    function Zg(a) {
        return (a || "_gcl") + "_au"
    };
    var bh = function(a) {
        for (var b = [], c = B.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Me: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    };

    function ch(a, b) {
        var c = bh(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Me] || (d[c[e].Me] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    oa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Me].push(g)
            }
        }
        return d
    };

    function dh() {
        for (var a = eh, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function fh() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var eh, gh;

    function hh(a) {
        eh = eh || fh();
        gh = gh || dh();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                l = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | k >> 6,
                q = k & 63;
            e || (q = 64, d || (p = 64));
            b.push(eh[l], eh[n], eh[p], eh[q])
        }
        return b.join("")
    }

    function ih(a) {
        function b(l) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = gh[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }
        eh = eh || fh();
        gh = gh || dh();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != k && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    };
    var jh, kh = function(a) {
        var b;
        if (!(b = jh)) {
            for (var c = Array(256), d = 0; 256 > d; d++) {
                for (var e = d, f = 0; 8 > f; f++) e = e & 1 ? e >>> 1 ^ 3988292384 : e >>> 1;
                c[d] = e
            }
            b = c
        }
        jh = b;
        for (var g = 4294967295, k = 0; k < a.length; k++) g = g >>> 8 ^ jh[(g ^ a.charCodeAt(k)) & 255];
        return (g ^ -1) >>> 0
    };
    var oh = function() {
            var a = lh,
                b = mh,
                c = nh(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Db(B, "mousedown", d);
                Db(B, "keyup", d);
                Db(B, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        ph = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            nh().decorators.push(f)
        },
        qh = function(a, b, c) {
            for (var d = nh().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    k;
                if (k = !c || g.forms) a: {
                    var l = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (l && (p || n !== B.location.hostname))
                        for (var q = 0; q < l.length; q++)
                            if (l[q] instanceof RegExp) {
                                if (l[q].test(n)) {
                                    k = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(l[q]) || p && 0 <= l[q].indexOf(n)) {
                        k = !0;
                        break a
                    }
                    k = !1
                }
                if (k) {
                    var u = g.placement;
                    void 0 == u && (u = g.fragment ? 2 : 1);
                    u === b && Ra(e, g.callback())
                }
            }
            return e
        };

    function nh() {
        var a = vb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var rh = /(.*?)\*(.*?)\*(.*)/,
        sh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        th = /^(?:www\.|m\.|amp\.)+/,
        uh = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function vh(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var yh = function(a, b) {
        var c = [],
            d;
        for (d in a)
            if (a.hasOwnProperty(d)) {
                var e = a[d];
                void 0 !== e && e === e && null !== e && "[object Object]" !== e.toString() && (c.push(d), c.push(hh(String(e))))
            }
        var f = c.join("*");
        if (void 0 !== b) {
            var g = "xp_" + b,
                k = wh[b](f);
            f = f + "*" + [g, hh(String(k))].join("*")
        }
        return ["1", xh(f), f].join("*")
    };

    function xh(a, b) {
        var c = [m.navigator.userAgent, (new Date).getTimezoneOffset(), Nb(), Math.floor(h() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
        return kh(c).toString(36)
    }
    var zh = {},
        wh = (zh[1] = Ah, zh[2] = Bh, zh);

    function Ah(a, b) {
        var c = [(new Date).getTimezoneOffset(), Nb(), Math.floor(h() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
        return kh(c).toString(36)
    }

    function Bh(a, b) {
        if (tb.userAgentData) {
            var c = [(new Date).getTimezoneOffset(), Nb(), Math.floor(h() / 60 / 1E3) - (void 0 === b ? 0 : b), tb.userAgentData.brands, tb.userAgentData.mobile, tb.userAgentData.platform, a].join("*");
            return kh(c).toString(36)
        }
    }

    function Ch() {
        return function(a) {
            var b = Zf(m.location.href),
                c = b.search.replace("?", ""),
                d = Uf(c, "_gl", !0) || "";
            a.query = Dh(d) || {};
            var e = Xf(b, "fragment").match(vh("_gl"));
            a.fragment = Dh(e && e[3] || "") || {}
        }
    }
    var Eh = function(a) {
            var b = Ch(),
                c = nh();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ra(d, e.query), a && Ra(d, e.fragment));
            return d
        },
        Dh = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = rh.exec(d);
                            if (f) {
                                c = f;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var g = c;
                    if (g && "1" === g[1]) {
                        var k = g[3],
                            l;
                        a: {
                            for (var n = g[2], p = 0; p < b; ++p)
                                if (n === xh(k, p)) {
                                    l = !0;
                                    break a
                                }
                            l = !1
                        }
                        if (l) {
                            for (var q = {}, u = k ? k.split("*") : [], t = 0; t < u.length; t += 2) q[u[t]] = ih(u[t + 1]);
                            return q
                        }
                    }
                }
            } catch (r) {}
        };

    function Fh(a, b, c, d) {
        function e(p) {
            var q = p,
                u = vh(a).exec(q),
                t = q;
            if (u) {
                var r = u[2],
                    v = u[4];
                t = u[1];
                v && (t = t + r + v)
            }
            p = t;
            var x = p.charAt(p.length - 1);
            p && "&" !== x && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = uh.exec(c);
        if (!f) return "";
        var g = f[1],
            k = f[2] || "",
            l = f[3] || "",
            n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : k = "?" + e(k.substring(1));
        return "" + g + k + l
    }

    function Gh(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = qh(b, 1, c),
            e = qh(b, 2, c),
            f = qh(b, 3, c);
        if (Sa(d)) {
            var g = yh(d, void 0);
            c ? Hh("_gl", g, a) : Ih("_gl", g, a, !1)
        }
        if (!c && Sa(e)) {
            var k = yh(e);
            Ih("_gl", k, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l)) a: {
                var n = l,
                    p = f[l],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        Ih(n, p, q, void 0);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        Hh(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && Fh(n, p, q, void 0)
            }
    }

    function Ih(a, b, c, d) {
        if (c.href) {
            var e = Fh(a, b, c.href, void 0 === d ? !1 : d);
            bb.test(e) && (c.href = e)
        }
    }

    function Hh(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var k = e[g];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = B.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var n = Fh(a, b, c.action);
                bb.test(n) && (c.action = n)
            }
        }
    }

    function lh(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Gh(e, e.hostname)
            }
        } catch (g) {}
    }

    function mh(a) {
        try {
            if (a.action) {
                var b = Xf(Zf(a.action), "host");
                Gh(a, b)
            }
        } catch (c) {}
    }
    var Jh = function(a, b, c, d) {
            oh();
            ph(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Kh = function(a, b) {
            oh();
            ph(a, [Wf(m.location, "host", !0)], b, !0, !0)
        },
        Lh = function() {
            var a = B.location.hostname,
                b = sh.exec(B.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(th, ""),
                l = e.replace(th, ""),
                n;
            if (!(n = k === l)) {
                var p = "." + l;
                n = k.substring(k.length - p.length,
                    k.length) === p
            }
            return n
        },
        Mh = function(a, b) {
            return !1 === a ? !1 : a || b || Lh()
        };
    var Nh = {};
    var Oh = /^\w+$/,
        Ph = /^[\w-]+$/,
        Qh = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        Rh = function() {
            if (!Hd(Dd) || !Yd()) return !0;
            var a = Vd("ad_storage");
            return null == a ? !0 : !!a
        },
        Sh = function(a, b) {
            Xd("ad_storage") ? Rh() ? a() : ce(a, "ad_storage") : b ? zd("TAGGING", 3) : be(function() {
                Sh(a, !0)
            }, ["ad_storage"])
        },
        Uh = function(a) {
            return Th(a).map(function(b) {
                return b.oa
            })
        },
        Th = function(a) {
            var b = [];
            if (!xg(m) || !B.cookie) return b;
            var c = Ag(a, B.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Dc: d.Dc
                }, e++) {
                var f = Vh(c[e]);
                if (null != f) {
                    var g = f,
                        k = g.version;
                    d.Dc = g.oa;
                    var l = g.timestamp,
                        n = g.labels,
                        p = wa(b, function(q) {
                            return function(u) {
                                return u.oa === q.Dc
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, l), p.labels = Wh(p.labels, n || [])) : b.push({
                        version: k,
                        oa: d.Dc,
                        timestamp: l,
                        labels: n
                    })
                }
            }
            b.sort(function(q, u) {
                return u.timestamp - q.timestamp
            });
            return Xh(b)
        };

    function Wh(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Yh(a) {
        return a && "string" == typeof a && a.match(Oh) ? a : "_gcl"
    }
    var $h = function() {
            var a = Zf(m.location.href),
                b = Xf(a, "query", !1, void 0, "gclid"),
                c = Xf(a, "query", !1, void 0, "gclsrc"),
                d = Xf(a, "query", !1, void 0, "wbraid"),
                e = Xf(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || Uf(f, "gclid", void 0);
                c = c || Uf(f, "gclsrc", void 0);
                d = d || Uf(f, "wbraid", void 0)
            }
            return Zh(b, c, e, d)
        },
        Zh = function(a, b, c, d) {
            var e = {},
                f = function(g, k) {
                    e[k] || (e[k] = []);
                    e[k].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Ph.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Ph)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        bi = function(a) {
            var b = $h();
            Sh(function() {
                ai(b, !1, a)
            })
        };

    function ai(a, b, c, d, e) {
        function f(x, z) {
            var w = ci(x, g);
            w && (Og(w, z, k), l = !0)
        }
        c = c || {};
        e = e || [];
        var g = Yh(c.prefix);
        d = d || h();
        var k = Wg(c, d, !0);
        k.Fa = "ad_storage";
        var l = !1,
            n = Math.round(d / 1E3),
            p = function(x) {
                var z = ["GCL", n, x];
                0 < e.length && z.push(e.join("."));
                return z.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == Nh.enable_gbraid_cookie_write ? 0 : Nh.enable_gbraid_cookie_write) && !l && a.gb) {
            var q = a.gb[0],
                u = ci("gb", g),
                t = !1;
            if (!b)
                for (var r = Th(u), v = 0; v < r.length; v++) r[v].oa === q && r[v].labels && 0 < r[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var ei = function(a, b) {
            var c = Eh(!0);
            Sh(function() {
                for (var d = Yh(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Qh[f]) {
                        var g = ci(f, d),
                            k = c[g];
                        if (k) {
                            var l = Math.min(di(k), h()),
                                n;
                            b: {
                                var p = l;
                                if (xg(m))
                                    for (var q = Ag(g, B.cookie, void 0, "ad_storage"), u = 0; u < q.length; ++u)
                                        if (di(q[u]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = Wg(b, l, !0);
                                t.Fa = "ad_storage";
                                Og(g, k, t)
                            }
                        }
                    }
                }
                ai(Zh(c.gclid, c.gclsrc), !1, b)
            })
        },
        ci = function(a, b) {
            var c = Qh[a];
            if (void 0 !== c) return b + c
        },
        di = function(a) {
            return 0 !== fi(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function Vh(a) {
        var b = fi(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            oa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function fi(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Ph.test(a[2]) ? [] : a
    }
    var gi = function(a, b, c, d, e) {
            if (ua(b) && xg(m)) {
                var f = Yh(e),
                    g = function() {
                        for (var k = {}, l = 0; l < a.length; ++l) {
                            var n = ci(a[l], f);
                            if (n) {
                                var p = Ag(n, B.cookie, void 0, "ad_storage");
                                p.length && (k[n] = p.sort()[p.length - 1])
                            }
                        }
                        return k
                    };
                Sh(function() {
                    Jh(g, b, c, d)
                })
            }
        },
        Xh = function(a) {
            return a.filter(function(b) {
                return Ph.test(b.oa)
            })
        },
        hi = function(a, b) {
            if (xg(m)) {
                for (var c = Yh(b.prefix), d = {}, e = 0; e < a.length; e++) Qh[a[e]] && (d[a[e]] = Qh[a[e]]);
                Sh(function() {
                    Aa(d, function(f, g) {
                        var k = Ag(c + g, B.cookie, void 0, "ad_storage");
                        k.sort(function(t,
                            r) {
                            return di(r) - di(t)
                        });
                        if (k.length) {
                            var l = k[0],
                                n = di(l),
                                p = 0 !== fi(l.split(".")).length ? l.split(".").slice(3) : [],
                                q = {},
                                u;
                            u = 0 !== fi(l.split(".")).length ? l.split(".")[2] : void 0;
                            q[f] = [u];
                            ai(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function ii(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var ji = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (Yd()) {
            var c = $h();
            if (ii(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Kh(function() {
                    return d
                }, 3);
                Kh(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };

    function ki(a, b) {
        var c = Yh(b),
            d = ci(a, c);
        if (!d) return 0;
        for (var e = Th(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function li(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var mi = function(a) {
            var b = [];
            Aa(a, function(c, d) {
                d = Xh(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].oa);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        oi = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = ni("gcl" + a);
                if (d) return d.split(".")
            }
            var e = Yh(b);
            if ("_gcl" == e) {
                c = void 0 === c ? !0 : c;
                var f = !ie(M.C) && c,
                    g;
                g = $h()[a] || [];
                if (0 < g.length) return f ? ["0"] : g
            }
            var k = ci(a, e);
            return k ? Uh(k) : []
        },
        ni = function(a) {
            var b = Zf(m.location.href),
                c = Xf(b, "host", !1);
            if (c && c.match(pi)) {
                var d = Xf(b, "path").split(a +
                    "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        },
        qi = function(a, b) {
            Xd(M.C) ? ie(M.C) ? a() : ce(a, M.C) : b ? Bd(42) : me(function() {
                qi(a, !0)
            }, [M.C])
        },
        pi = /^\d+\.fls\.doubleclick\.net$/,
        ri = function(a, b) {
            return oi("aw", a, b)
        },
        si = function(a, b) {
            return oi("dc", a, b)
        },
        ti = function(a) {
            var b = ni("gac");
            return b ? !ie(M.C) && a ? "0" : decodeURIComponent(b) : mi(Rh() ? ch() : {})
        },
        ui = function(a) {
            var b = ni("gacgb");
            return b ? !ie(M.C) && a ? "0" : decodeURIComponent(b) : mi(Rh() ? ch("_gac_gb", !0) : {})
        },
        vi = function(a) {
            var b = $h(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw";
            !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
                oa: d,
                ue: f
            });
            e && c.push({
                oa: e,
                ue: "ds"
            });
            qi(function() {
                ah(a);
                var g = Yg[Zg(a.prefix)];
                if (g && 0 < c.length)
                    for (var k = P.joined_auid = P.joined_auid || {}, l = 0; l < c.length; l++) {
                        var n =
                            c[l],
                            p = n.oa,
                            q = n.ue,
                            u = (a.prefix || "_gcl") + "." + q + "." + p;
                        if (!k[u]) {
                            var t = "https://adservice.google.com/pagead/regclk";
                            t = "gb" === q ? t + "?gbraid=" + p + "&auid=" + g : t + "?gclid=" + p + "&auid=" + g + "&gclsrc=" + q;
                            Kb(t);
                            k[u] = !0
                        }
                    }
            })
        },
        wi = function(a) {
            var b;
            if (ni("gclaw") || ni("gac") || 0 < ($h().aw || []).length) b = !1;
            else {
                var c;
                if (0 < ($h().gb || []).length) c = !0;
                else {
                    var d = Math.max(ki("aw", a), li(Rh() ? ch() : {}));
                    c = Math.max(ki("gb", a), li(Rh() ? ch("_gac_gb", !0) : {})) > d
                }
                b = c
            }
            return b
        };
    var xi = function(a) {
        var b = tb && tb.userAgent || "";
        if (0 > b.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)) return !1;
        var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
        if ("" === c) return !1;
        for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
            if (void 0 === d[f]) return !0;
            if (e[f] != d[f]) return Number(e[f]) > Number(d[f])
        }
        return e.length >= d.length
    };
    var zi = function(a) {
            var b = a ? sg(a) : m.enhanced_conversion_data,
                c = (a || {}).enhanced_conversions_mode,
                d = void 0;
            if ("manual" === c && b) switch (b._tag_mode) {
                case "CODE":
                    d = "c";
                    break;
                case "AUTO":
                    d = "a";
                    break;
                case "MANUAL":
                    d = "m";
                    break;
                default:
                    d = "c"
            } else d = "automatic" === c ? yi(a) ? "a" : "m" : "c";
            if (m.Promise) try {
                return b ? Ke(b).then(function(e) {
                    e.se = d;
                    return e
                }) : Promise.resolve({
                    vc: "",
                    se: void 0
                })
            } catch (e) {}
        },
        yi = function(a) {
            var b = a && a[M.lf];
            return b && b[M.gh]
        },
        Ai = function(a) {
            if (ie(M.C)) return a;
            a = a.replace(/&url=([^&#]+)/,
                function(b, c) {
                    var d = $f(decodeURIComponent(c));
                    return "&url=" + encodeURIComponent(d)
                });
            a = a.replace(/&ref=([^&#]+)/, function(b, c) {
                var d = $f(decodeURIComponent(c));
                return "&ref=" + encodeURIComponent(d)
            });
            return a
        },
        Bi = function() {
            if (mf || !0 !== m._gtmdgs && !xi("11")) return -1;
            var a = Ea('1');
            return ug(1, 100) < a ? ug(2, 2) : -1
        },
        Ci = function() {
            return -1 !== tb.userAgent.toLowerCase().indexOf("firefox")
        },
        Di = function(a) {
            var b;
            if (!a || !a.length) return;
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = a[d];
                e && e.estimated_delivery_date ? c.push("" + e.estimated_delivery_date) : c.push("")
            }
            b = c.join(",");
            return b
        },
        Ei = function() {
            var a = !1;
            return a
        };
    var Fi = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Gi = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Hi = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Ii = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Ji = function() {
            var a = !1;
            return a
        },
        Li = function(a) {
            var b = zf("gtm.allowlist") || zf("gtm.whitelist");
            b && Bd(9);
            Ji() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && Ta(Ia(b), Gi),
                d = zf("gtm.blocklist") ||
                zf("gtm.blacklist");
            d || (d = zf("tagTypeBlacklist")) && Bd(3);
            d ? Bd(8) : d = [];
            Ki() && (d = Ia(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= va(Ia(d), "google") && Bd(2);
            var e = d && Ta(Ia(d), Hi),
                f = {};
            return function(g) {
                var k = g && g[Tb.lb];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== f[k]) return f[k];
                var l = rf[k] || [],
                    n = a(k, l);
                if (b) {
                    var p;
                    if (p =
                        n) a: {
                        if (0 > va(c, k))
                            if (l && 0 < l.length)
                                for (var q = 0; q < l.length; q++) {
                                    if (0 > va(c, l[q])) {
                                        Bd(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var u = !1;
                if (d) {
                    var t = 0 <= va(e, k);
                    if (t) u = t;
                    else {
                        var r = za(e, l || []);
                        r && Bd(10);
                        u = r
                    }
                }
                var v = !n || u;
                v || !(0 <= va(l, "sandboxedScripts")) || c && -1 !== va(c, "sandboxedScripts") || (v = za(e, Ii));
                return f[k] = v
            }
        },
        Ki = function() {
            return Fi.test(m.location && m.location.hostname)
        };
    var Mi = !1,
        Ni = 0,
        Oi = [];

    function Pi(a) {
        if (!Mi) {
            var b = B.createEventObject,
                c = "complete" == B.readyState,
                d = "interactive" == B.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Mi = !0;
                for (var e = 0; e < Oi.length; e++) G(Oi[e])
            }
            Oi.push = function() {
                for (var f = 0; f < arguments.length; f++) G(arguments[f]);
                return 0
            }
        }
    }

    function Qi() {
        if (!Mi && 140 > Ni) {
            Ni++;
            try {
                B.documentElement.doScroll("left"), Pi()
            } catch (a) {
                m.setTimeout(Qi, 50)
            }
        }
    }
    var Ri = function(a) {
        Mi ? a() : Oi.push(a)
    };
    var Ti = function(a, b) {
            this.m = !1;
            this.D = [];
            this.N = {
                tags: []
            };
            this.Z = !1;
            this.o = this.B = 0;
            Si(this, a, b)
        },
        Ui = function(a, b, c, d) {
            if (hf.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Rb(d) && (e = H(d, e));
            e.id = c;
            e.status = "timeout";
            return a.N.tags.push(e) - 1
        },
        Vi = function(a, b, c, d) {
            var e = a.N.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Wi = function(a) {
            if (!a.m) {
                for (var b = a.D, c = 0; c < b.length; c++) b[c]();
                a.m = !0;
                a.D.length = 0
            }
        },
        Si = function(a, b, c) {
            ra(b) && Xi(a, b);
            c && m.setTimeout(function() {
                return Wi(a)
            }, Number(c))
        },
        Xi = function(a,
            b) {
            var c = Qa(function() {
                return G(function() {
                    b(ef.I, a.N)
                })
            });
            a.m ? c() : a.D.push(c)
        },
        Yi = function(a) {
            a.B++;
            return Qa(function() {
                a.o++;
                a.Z && a.o >= a.B && Wi(a)
            })
        };
    var Zi = function() {
            function a(d) {
                return !ta(d) || 0 > d ? 0 : d
            }
            if (!P._li && m.performance && m.performance.timing) {
                var b = m.performance.timing.navigationStart,
                    c = ta(Af.get("gtm.start")) ? Af.get("gtm.start") : 0;
                P._li = {
                    cst: a(c - b),
                    cbt: a( of -b)
                }
            }
        },
        $i = function(a) {
            m.performance && m.performance.mark(ef.I + "_" + a + "_start")
        },
        aj = function(a) {
            if (m.performance) {
                var b = ef.I + "_" + a + "_start",
                    c = ef.I + "_" + a + "_duration";
                m.performance.measure(c, b);
                var d = m.performance.getEntriesByName(c)[0];
                m.performance.clearMarks(b);
                m.performance.clearMeasures(c);
                var e = P._p || {};
                void 0 === e[a] && (e[a] = d.duration, P._p = e);
                return d.duration
            }
        },
        bj = function() {
            if (m.performance && m.performance.now) {
                var a = P._p || {};
                a.PAGEVIEW = m.performance.now();
                P._p = a
            }
        };
    var cj = {},
        dj = function() {
            return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject]
        },
        ej = !1;
    var fj = function(a) {
            m.GoogleAnalyticsObject || (m.GoogleAnalyticsObject = a || "ga");
            var b = m.GoogleAnalyticsObject;
            if (m[b]) m.hasOwnProperty(b) || Bd(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Oa());
                m[b] = c
            }
            Zi();
            return m[b]
        },
        gj = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = dj();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        },
        hj = function(a) {
            if (!Yd()) return;
            var b = dj();
            b(a + "require", "linker");
            b(a + "linker:passthrough", !0);
        };

    function ij() {
        return m.GoogleAnalyticsObject || "ga"
    }
    var jj = function(a) {},
        kj = function(a, b) {
            return function() {
                var c = dj(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            k = f.get("hitCallback"),
                            l = 0 > g.indexOf("&tid=" + b);
                        l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        l && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var rj = function(a) {},
        vj = function(a) {},
        wj =
        function() {
            return "&tc=" + Dc.filter(function(a) {
                return a
            }).length
        },
        zj = function() {
            2022 <= xj().length && yj()
        },
        Aj = function(a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
        },
        Cj = function() {
            Bj || (Bj = m.setTimeout(yj, 500))
        },
        yj = function() {
            Bj && (m.clearTimeout(Bj), Bj = void 0);
            void 0 === Dj || Ej[Dj] && !Fj && !Gj || (Hj[Dj] || Ij.zi() || 0 >= Jj-- ? (Bd(1), Hj[Dj] = !0) : (Ij.Ui(), Cb(xj(!0)), Ej[Dj] = !0, Kj = Lj = Mj = Gj = Fj = ""))
        },
        xj = function(a) {
            var b = Dj;
            if (void 0 === b) return "";
            var c = Ad("GTM"),
                d = Ad("TAGGING");
            return [Nj, Ej[b] ? "" : "&es=1",
                Oj[b], rj(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", wj(), Fj, Gj, Mj, Lj, vj(a), Kj, "&z=0"
            ].join("")
        },
        Qj = function() {
            Nj = Pj()
        },
        Pj = function() {
            return [pf, "&v=3&t=t", "&pid=" + xa(), "&rv=" + ef.$c].join("")
        },
        uj = ["L", "S", "Y"],
        qj = ["S", "E"],
        Rj = {
            sampleRate: "0.005000",
            Ig: "",
            Hg: Number("5")
        },
        Sj = 0 <= B.location.search.indexOf("?gtm_latency=") || 0 <= B.location.search.indexOf("&gtm_latency="),
        Tj;
    if (!(Tj = Sj)) {
        var Uj = Math.random(),
            Vj = Rj.sampleRate;
        Tj = Uj < Vj
    }
    var Wj = Tj,
        Xj = {
            label: ef.I + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        },
        Nj = Pj(),
        Ej = {},
        Fj = "",
        Gj = "",
        Kj = "",
        Lj = "",
        tj = {},
        sj = !1,
        pj = {},
        Yj = {},
        Mj = "",
        Dj = void 0,
        Oj = {},
        Hj = {},
        Bj = void 0,
        Zj = 5;
    0 < Rj.Hg && (Zj = Rj.Hg);
    var Ij = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                zi: function() {
                    return c < a ? !1 : h() - d[c % a] < b
                },
                Ui: function() {
                    var f = c++ % a;
                    d[f] = h()
                }
            }
        }(Zj, 1E3),
        Jj = 1E3,
        bk = function(a, b) {
            if (Wj && !Hj[a] && Dj !==
                a) {
                yj();
                Dj = a;
                Kj = Fj = "";
                Oj[a] = "&e=" + Aj(b) + "&eid=" + a;
                Cj();
            }
        },
        ck = function(a, b, c, d) {
            if (Wj && b) {
                var e, f = String(b[Tb.lb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!Hj[a]) {
                    a !== Dj && (yj(), Dj = a);
                    Fj = Fj ? Fj + "." + g : "&tr=" + g;
                    var k = b["function"];
                    if (!k) throw Error("Error: No function name given for function call.");
                    var l = (Fc[k] ? "1" : "2") + e;
                    Kj = Kj ? Kj + "." + l : "&ti=" + l;
                    Cj();
                    zj()
                }
            }
        };
    var jk = function(a, b, c) {
            if (Wj && !Hj[a]) {
                a !== Dj && (yj(), Dj = a);
                var d = c + b;
                Gj = Gj ? Gj + "." + d : "&epr=" + d;
                Cj();
                zj()
            }
        },
        kk = function(a, b, c) {};
    var lk = {
            active: !0,
            isAllowed: function() {
                return !0
            }
        },
        mk = function(a) {
            var b = P.zones;
            return b ? b.checkState(ef.I, a) : lk
        },
        nk = function(a) {
            var b = P.zones;
            !b && a && (b = P.zones = a());
            return b
        };

    function ok() {}

    function pk() {};

    function qk(a, b, c, d) {
        var e = Dc[a],
            f = rk(a, b, c, d);
        if (!f) return null;
        var g = Kc(e[Tb.Ff], c, []);
        if (g && g.length) {
            var k = g[0];
            f = qk(k.index, {
                onSuccess: f,
                onFailure: 1 === k.$f ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function rk(a, b, c, d) {
        function e() {
            if (f[Tb.Fh]) k();
            else {
                var x = Lc(f, c, []);
                var z = x[Tb.Ng];
                if (null != z)
                    for (var w = 0; w < z.length; w++)
                        if (!ie(z[w])) {
                            k();
                            return
                        }
                var y = Ui(c.mb, String(f[Tb.lb]), Number(f[Tb.Hf]), x[Tb.Gh]),
                    A = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var D = h() - F;
                        ck(c.id, Dc[a], "5", D);
                        Vi(c.mb, y, "success",
                            D);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var D = h() - F;
                        ck(c.id, Dc[a], "6", D);
                        Vi(c.mb, y, "failure", D);
                        k()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                ck(c.id, f, "1");
                var C = function() {
                    var D = h() - F;
                    ck(c.id, f, "7", D);
                    Vi(c.mb, y, "exception", D);
                    A || (A = !0, k())
                };
                var F = h();
                try {
                    Jc(x, c)
                } catch (D) {
                    C(D)
                }
            }
        }
        var f = Dc[a],
            g = b.onSuccess,
            k = b.onFailure,
            l = b.terminate;
        if (c.Be(f)) return null;
        var n = Kc(f[Tb.If], c, []);
        if (n && n.length) {
            var p = n[0],
                q = qk(p.index, {
                    onSuccess: g,
                    onFailure: k,
                    terminate: l
                }, c, d);
            if (!q) return null;
            g = q;
            k = 2 === p.$f ? l : q
        }
        if (f[Tb.Bf] || f[Tb.Kh]) {
            var u = f[Tb.Bf] ? Ec :
                c.bj,
                t = g,
                r = k;
            if (!u[a]) {
                e = Qa(e);
                var v = sk(a, u, e);
                g = v.onSuccess;
                k = v.onFailure
            }
            return function() {
                u[a](t, r)
            }
        }
        return e
    }

    function sk(a, b, c) {
        var d = [],
            e = [];
        b[a] = tk(d, e, c);
        return {
            onSuccess: function() {
                b[a] = uk;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = vk;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function tk(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function uk(a) {
        a()
    }

    function vk(a, b) {
        b()
    };
    var yk = function(a, b) {
        for (var c = [], d = 0; d < Dc.length; d++)
            if (a[d]) {
                var e = Dc[d];
                var f = Yi(b.mb);
                try {
                    var g = qk(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = c,
                            l = k.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = Fc[p];
                        l.call(k, {
                            Ag: n,
                            pg: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else wk(d, b), f()
                } catch (r) {
                    f()
                }
            }
        var u = b.mb;
        u.Z = !0;
        u.o >= u.B && Wi(u);
        c.sort(xk);
        for (var t = 0; t < c.length; t++) c[t].execute();
        return 0 < c.length
    };

    function xk(a, b) {
        var c, d = b.pg,
            e = a.pg;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Ag,
                k = b.Ag;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function wk(a, b) {
        if (!Wj) return;
        var c = function(d) {
            var e = b.Be(Dc[d]) ? "3" : "4",
                f = Kc(Dc[d][Tb.Ff], b, []);
            f && f.length && c(f[0].index);
            ck(b.id, Dc[d], e);
            var g = Kc(Dc[d][Tb.If], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var zk = !1,
        Fk = function(a) {
            var b = h(),
                c = a["gtm.uniqueEventId"],
                d = a.event;
            if ("gtm.js" === d) {
                if (zk) return !1;
                zk = !0;
            }
            var g = mk(c),
                k = !1;
            if (!g.active) {
                if ("gtm.js" !== d) return !1;
                k = !0;
                g = mk(Number.MAX_SAFE_INTEGER)
            }
            bk(c, d);
            var l = a.eventCallback,
                n = a.eventTimeout,
                p = l;
            var q = {
                id: c,
                name: d,
                Be: Li(g.isAllowed),
                bj: [],
                jg: function() {
                    Bd(6)
                },
                Tf: Ak(c),
                mb: new Ti(p, n)
            };
            q.Sf = Bk();
            Ck(c, q.mb);
            var u = Sc(q);
            k && (u = Dk(u));
            var t = yk(u, q);
            "gtm.js" !== d && "gtm.sync" !== d || jj(ef.I);
            return Ek(u, t)
        };

    function Ak(a) {
        return function(b) {
            Wj && (Sb(b) || kk(a, "input", b))
        }
    }

    function Ck(a, b) {
        Ef(a, "event", 1);
        Ef(a, "ecommerce", 1);
        Ef(a, "gtm");
        Ef(a, "eventModel");
    }

    function Bk() {
        var a = {};
        a.event = Df("event", 1);
        a.ecommerce = Df("ecommerce", 1);
        a.gtm = Df("gtm");
        a.eventModel = Df("eventModel");
        return a
    }

    function Dk(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && gf[String(Dc[c][Tb.lb])] && (b[c] = !0);
        return b
    }

    function Ek(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Dc[c] && !hf[String(Dc[c][Tb.lb])]) return !0;
        return !1
    }

    function Gk(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Zf("" + c + b).href
        }
    }

    function Hk(a, b) {
        return Ik() ? Gk(a, b) : void 0
    }

    function Ik() {
        var a = !1;
        return a
    }

    function Jk() {
        return !!ef.ad && "SGTM_TOKEN" !== ef.ad.replaceAll("@@", "")
    };
    var Kk = function() {
        var a = !1;
        return a
    };
    var Lk;
    if (3 === ef.$c.length) Lk = "g";
    else {
        var Mk = "G";
        Lk = Mk
    }
    var Nk = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Lk,
            OPT: "o"
        },
        Ok = function(a) {
            var b = ef.I.split("-"),
                c = b[0].toUpperCase(),
                d = Nk[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === ef.$c.length) {
                var g = "w";
                f = "2" + g
            } else f = "";
            return f + d + ef.$c + e
        };

    function Pk(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Qk = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };

    function Rk() {
        return ib("iPhone") && !ib("iPod") && !ib("iPad")
    };
    ib("Opera");
    ib("Trident") || ib("MSIE");
    ib("Edge");
    !ib("Gecko") || -1 != cb.toLowerCase().indexOf("webkit") && !ib("Edge") || ib("Trident") || ib("MSIE") || ib("Edge"); - 1 != cb.toLowerCase().indexOf("webkit") && !ib("Edge") && ib("Mobile");
    ib("Macintosh");
    ib("Windows");
    ib("Linux") || ib("CrOS");
    var Sk = na.navigator || null;
    Sk && (Sk.appVersion || "").indexOf("X11");
    ib("Android");
    Rk();
    ib("iPad");
    ib("iPod");
    Rk() || ib("iPad") || ib("iPod");
    cb.toLowerCase().indexOf("kaios");
    var Tk = function(a, b) {
            for (var c = a, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames[b])
                } catch (k) {
                    e = !1
                }
                if (e) return c;
                var f;
                a: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break a
                        }
                    } catch (k) {}
                    f = null
                }
                if (!(c = f)) break
            }
            return null
        },
        Uk = function(a) {
            var b = B;
            b = void 0 === b ? window.document : b;
            if (!a || !b.head) return null;
            var c, d, e;
            e = void 0 === e ? document : e;
            d = "META";
            "application/xhtml+xml" === (null == e ? void 0 : e.contentType) && (d = d.toLowerCase());
            c = e.createElement(d);
            b.head.appendChild(c);
            c.httpEquiv = "origin-trial";
            c.content = a;
            return c
        };
    var Vk = function() {};
    var Wk = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Xk = function(a, b) {
            this.o = a;
            this.m = null;
            this.D = {};
            this.Z = 0;
            this.N = void 0 === b ? 500 : b;
            this.B = null
        };
    ma(Xk, Vk);
    var Zk = function(a) {
        return "function" === typeof a.o.__tcfapi || null != Yk(a)
    };
    Xk.prototype.addEventListener = function(a) {
        var b = {},
            c = rb(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.N && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.N));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = Wk(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            $k(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    Xk.prototype.removeEventListener = function(a) {
        a && a.listenerId && $k(this, "removeEventListener", null, a.listenerId)
    };
    var bl = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var k = c;
            2 === c ? (k = 0, 2 === g && (k = 1)) : 3 === c && (k = 1, 1 === g && (k = 0));
            var l;
            if (0 === k)
                if (a.purpose && a.vendor) {
                    var n = al(a.vendor.consents, void 0 === d ? "755" : d);
                    l = n && "1" === b && a.purposeOneTreatment && ((Hd(Ed) ? 0 : "DE" === a.publisherCC) || "CH" === a.publisherCC) ? !0 : n && al(a.purpose.consents, b)
                } else l = !0;
            else l =
                1 === k ? a.purpose && a.vendor ? al(a.purpose.legitimateInterests, b) && al(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return l
        },
        al = function(a, b) {
            return !(!a || !a[b])
        },
        $k = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (Yk(a)) {
                cl(a);
                var f = ++a.Z;
                a.D[f] = c;
                if (a.m) {
                    var g = {};
                    a.m.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Yk = function(a) {
            if (a.m) return a.m;
            a.m = Tk(a.o, "__tcfapiLocator");
            return a.m
        },
        cl = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.D[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Qk(a.o, a.B))
        };
    var dl = !0;
    dl = !1;
    var el = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        fl = Pk("", 550),
        gl = Pk("", 500);

    function hl() {
        var a = P.tcf || {};
        return P.tcf = a
    }
    var il = function(a, b) {
            this.B = a;
            this.m = b;
            this.o = h();
        },
        jl = function(a) {},
        kl = function(a) {},
        ql = function() {
            var a = hl(),
                b = new Xk(m, dl ? 3E3 : -1),
                c = new il(b, a);
            if ((ll() ? !0 === m.gtag_enable_tcf_support : !1 !== m.gtag_enable_tcf_support) && !a.active && ("function" === typeof m.__tcfapi || Zk(b))) {
                a.active = !0;
                a.yc = {};
                ml();
                var d = null;
                dl ? d = m.setTimeout(function() {
                    nl(a);
                    ol(a);
                    d = null
                }, gl) : a.tcString = "tcunavailable";
                try {
                    b.addEventListener(function(e) {
                        d && (clearTimeout(d), d = null);
                        if (0 !== e.internalErrorState) nl(a), ol(a), jl(c);
                        else {
                            var f;
                            a.gdprApplies = e.gdprApplies;
                            if (!1 === e.gdprApplies) f = pl(), b.removeEventListener(e);
                            else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                                var g = {},
                                    k;
                                for (k in el)
                                    if (el.hasOwnProperty(k))
                                        if ("1" === k) {
                                            var l, n = e,
                                                p = !0;
                                            p = void 0 === p ? !1 : p;
                                            var q;
                                            var u = n;
                                            !1 === u.gdprApplies ? q = !0 : (void 0 === u.internalErrorState && (u.internalErrorState = Wk(u)), q = "error" === u.cmpStatus || 0 !== u.internalErrorState || "loaded" === u.cmpStatus && ("tcloaded" === u.eventStatus || "useractioncomplete" ===
                                                u.eventStatus) ? !0 : !1);
                                            l = q ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : bl(n, "1", 0) : !1;
                                            g["1"] = l
                                        } else g[k] = bl(e, k, el[k]);
                                f = g
                            }
                            f && (a.tcString = e.tcString || "tcempty", a.yc = f, ol(a), jl(c))
                        }
                    }), kl(c)
                } catch (e) {
                    d && (clearTimeout(d), d = null), nl(a), ol(a)
                }
            }
        };

    function nl(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        dl && (a.yc = pl())
    }

    function ml() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = fl, a);
        fe(b)
    }
    var ll = function() {
        var a = !1;
        a = !0;
        return a
    };

    function pl() {
        var a = {},
            b;
        for (b in el) el.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function ol(a) {
        var b = {},
            c = (b.ad_storage = a.yc["1"] ? "granted" : "denied", b);
        rl();
        he(c, 0)
    }
    var sl = function() {
            var a = hl();
            if (a.active && void 0 !== a.loadTime) return Number(a.loadTime)
        },
        rl = function() {
            var a = hl();
            return a.active ? a.tcString || "" : ""
        },
        tl = function() {
            var a = hl();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        ul = function(a) {
            if (!el.hasOwnProperty(String(a))) return !0;
            var b = hl();
            return b.active && b.yc ? !!b.yc[String(a)] : !0
        };
    var vl = function(a, b) {
            var c = a && !ie(M.C);
            return b && c ? "0" : b
        },
        zl = function(a) {
            function b(r) {
                var v;
                P.reported_gclid || (P.reported_gclid = {});
                v = P.reported_gclid;
                var x;
                x = !g || Yd() && !ie(M.C) ? l + (r ? "gcu" : "gcs") : l + "." + (f.prefix || "_gcl") + (r ? "gcu" : "gcs");
                if (!v[x]) {
                    v[x] = !0;
                    var z = [],
                        w = {},
                        y = function(K, L) {
                            L && (z.push(K + "=" + encodeURIComponent(L)), w[K] = !0)
                        },
                        A = "https://www.google.com";
                    if (Yd()) {
                        var C = ie(M.C);
                        y("gcs", je());
                        r && y("gcu", "1");
                        Zd() && y("gcd", ke());
                        P.dedupe_gclid || (P.dedupe_gclid = "" + Rg());
                        y("rnd", P.dedupe_gclid);
                        if ((!l || n && "aw.ds" !== n) && ie(M.C)) {
                            var F = Uh("_gcl_aw");
                            y("gclaw", F.join("."))
                        }
                        y("url", String(m.location).split(/[?#]/)[0]);
                        y("dclid", vl(d, p));
                        var D = !1;
                        D = !0;
                        C || !d && !D || (A = "https://pagead2.googlesyndication.com")
                    }
                    y("gdpr_consent",
                        rl()), y("gdpr", tl());
                    "1" === Eh(!1)._up && y("gtm_up", "1");
                    y("gclid", vl(d, l));
                    y("gclsrc", n);
                    if (!(w.gclid || w.dclid || w.gclaw) && (y("gbraid", vl(d, q)), !w.gbraid && Yd() && ie(M.C))) {
                        var E = Uh("_gcl_gb");
                        y("gclgb", E.join("."))
                    }
                    y("gtm", Ok(!e));
                    g && ie(M.C) && (ah(f || {}), y("auid", Yg[Zg(f.prefix)] || ""));
                    xl || a.gd &&
                        y("did", a.gd), yl && (a.Kb && y("gdid", a.Kb), a.Jb && y("edid", a.Jb));
                    var O = A + "/pagead/landing?" + z.join("&");
                    Kb(O)
                }
            }
            var c = !!a.oe,
                d = !!a.Ea,
                e = a.P,
                f = void 0 === a.nb ? {} : a.nb,
                g = void 0 === a.pd ? !0 : a.pd,
                k = $h(),
                l = k.gclid || "",
                n = k.gclsrc,
                p = k.dclid || "",
                q = k.gbraid || "",
                u = !c && ((!l || n && "aw.ds" !== n ? !1 : !0) || q),
                t = Yd();
            if (u || t) t ? me(function() {
                b();
                ie(M.C) || le(function(r) {
                    return b(!0, r.consentEventId)
                }, M.C)
            }, [M.C]) : b()
        },
        wl = function(a) {
            var b = String(m.location).split(/[?#]/)[0],
                c = ef.Qg || m._CONSENT_MODE_SALT;
            return a ? c ? String(vg(b + a + c)) : "0" : ""
        },
        xl = !1;
    var yl = !1;
    var Bl = function(a) {
            if (!Yd() || Vd(M.C)) {
                var b = Al(a);
                if (b && !(18E5 < h() - b.hg)) return b.Yf
            }
        },
        Al = function(a) {
            a = a || {};
            if (xg(m) && B.cookie) {
                var b = Ug(Yh(a.prefix) + "_ec", a.domain, a.path, ["1"], M.C);
                if (b) {
                    var c = b.split(".");
                    if (3 === c.length) {
                        var d = 1E3 * Number(c[1]) || 0;
                        if (0 !== d) return {
                            Yf: c[0] + "." + c[1],
                            ci: d,
                            hg: 1E3 * Number(c[2]) || 0
                        }
                    }
                }
            }
        };
    var Cl = !1;
    var Dl = function() {
            this.m = {}
        },
        El = function(a, b, c) {
            null != c && (a.m[b] = c)
        },
        Fl = function(a) {
            return Object.keys(a.m).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b])
            }).join("&")
        },
        Hl = function(a, b, c, d, e) {};
    var Jl = /[A-Z]+/,
        Kl = /\s/,
        Ll = function(a) {
            if (sa(a)) {
                a = La(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Jl.test(c)) {
                        var d = !1;
                        d = !0;
                        for (var e = a.substring(b + 1).split("/"), f = 0; f < e.length; f++)
                            if (!e[f] || Kl.test(e[f]) && ("AW" !== c || 1 !== f || !d)) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + e[0],
                            K: e
                        }
                    }
                }
            }
        },
        Nl = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d =
                    Ll(a[c]);
                d && (b[d.id] = d)
            }
            Ml(b);
            var e = [];
            Aa(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function Ml(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.K[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Pl = function(a, b, c, d) {
            return (2 === Ol() || d || "http:" != m.location.protocol ? a : b) + c
        },
        Ol = function() {
            var a = Ab(),
                b;
            if (1 === a) a: {
                var c = lf;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = B.getElementsByTagName("script"), k = 0; k < g.length && 100 > k; k++) {
                    var l = g[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === l.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var Rl = function(a, b, c) {
            if (m[a.functionName]) return b.Fe && G(b.Fe), m[a.functionName];
            var d = Ql();
            m[a.functionName] = d;
            if (a.dd)
                for (var e = 0; e < a.dd.length; e++) m[a.dd[e]] = m[a.dd[e]] || Ql();
            a.od && void 0 === m[a.od] && (m[a.od] = c);
            zb(Pl("https://", "http://", a.Ke), b.Fe, b.Ki);
            return d
        },
        Ql = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Sl = {
            functionName: "_googWcmImpl",
            od: "_googWcmAk",
            Ke: "www.gstatic.com/wcm/loader.js"
        },
        Tl = {
            functionName: "_gaPhoneImpl",
            od: "ga_wpid",
            Ke: "www.gstatic.com/gaphone/loader.js"
        },
        Ul = {
            Mg: "",
            Lh: "5"
        },
        Vl = {
            functionName: "_googCallTrackingImpl",
            dd: [Tl.functionName, Sl.functionName],
            Ke: "www.gstatic.com/call-tracking/call-tracking_" + (Ul.Mg || Ul.Lh) + ".js"
        },
        Wl = {},
        Xl = function(a, b, c, d) {
            Bd(22);
            if (c) {
                d = d || {};
                var e = Rl(Sl, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.Na && (f.autoreplace = c);
                e(2, d.Na, f, c, 0, Oa(), d.options)
            }
        },
        Yl = function(a, b, c, d) {
            Bd(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Oa()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    Wl[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.K.length ? (e.adData = {
                            ak: g.K[0],
                            cl: g.K[1]
                        }, Wl[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.containerId
                        }, Wl[g.id] = !0))
                }(e.gaData || e.adData) && Rl(Vl, d)(d.Na, e, d.options)
            }
        },
        Zl = function() {
            var a = !1;
            return a
        },
        $l = function(a, b) {
            if (a)
                if (Kk()) {} else {
                    if (sa(a)) {
                        var c =
                            Ll(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(M.uh);
                    if (f && ua(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var k = Ll(f[g]);
                            k && (d.push(k), (a.id === k.id || a.id === a.containerId && a.containerId === k.containerId) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var l = b.getWithConfig(M.tf),
                            n;
                        if (l) {
                            ua(l) ? n = l : n = [l];
                            var p = b.getWithConfig(M.rf),
                                q = b.getWithConfig(M.sf),
                                u = b.getWithConfig(M.uf),
                                t = b.getWithConfig(M.th),
                                r = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var x = 0; x < n.length; x++)
                                if (x < v)
                                    if (d) Yl(d, n[x], t, {
                                        Na: r,
                                        options: u
                                    });
                                    else if ("AW" === a.prefix &&
                                a.K[1]) Zl() ? Yl([a], n[x], t || "US", {
                                Na: r,
                                options: u
                            }) : Xl(a.K[0], a.K[1], n[x], {
                                Na: r,
                                options: u
                            });
                            else if ("UA" === a.prefix)
                                if (Zl()) Yl([a], n[x], t || "US", {
                                    Na: r
                                });
                                else {
                                    var z = a.containerId,
                                        w = n[x],
                                        y = {
                                            Na: r
                                        };
                                    Bd(23);
                                    if (w) {
                                        y = y || {};
                                        var A = Rl(Tl, y, z),
                                            C = {};
                                        void 0 !== y.Na ? C.receiver = y.Na : C.replace = w;
                                        C.ga_wpid = z;
                                        C.destination = w;
                                        A(2, Oa(), C)
                                    }
                                }
                        }
                    }
                }
        };
    var bm = function() {
            var a = P.floc;
            if (a) {
                var b = a.ts,
                    c = a.floc;
                if (b && c && 1E3 > h() - b) return Promise.resolve(c)
            }
            var d = void 0;
            try {
                d = Promise.race([B.interestCohort().then(function(e) {
                    P.floc = {
                        ts: h(),
                        floc: e
                    };
                    return e
                }), new Promise(function(e) {
                    m.setTimeout(function() {
                        return e()
                    }, am)
                })]).catch(function() {})
            } catch (e) {
                return
            }
            return d
        },
        dm = function() {
            if (!m.Promise) return !1;
            ra(B.interestCohort) || cm || (cm = !0, Uk("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"));
            return ra(B.interestCohort)
        },
        cm = !1,
        am = Number("200");
    var fn = function() {
            var a = !0;
            ul(7) && ul(9) && ul(10) || (a = !1);
            var b = !0;
            b = !1;
            b && !en() && (a = !1);
            return a
        },
        en = function() {
            var a = !0;
            ul(3) && ul(4) || (a = !1);
            return a
        };
    var kn = function(a, b) {},
        ln = function(a, b) {
            var c = a[M.Wb];
            gj(b + ".", a[M.M] || "", void 0 === c ? !!a.use_anchor : "fragment" === c, !!a[M.Fb])
        },
        pn = function(a, b, c) {
            if (Yd() && (!c.isGtmEvent || !mn[a])) {
                var d = !ie(M.H),
                    e = function() {
                        var f, g, k = dj(),
                            l = nn(b, "", c),
                            n, p = l.fa._useUp;
                        if (c.isGtmEvent || on(b, l.fa)) {
                            var q = !0;
                            if (c.isGtmEvent) {
                                f = "gtm" + sf();
                                g = l.fa;
                                l.gtmTrackerName && (g.name = f);
                                q = !1;
                                q = !0;
                            }
                            q && k(function() {
                                var t = k.getByName(b);
                                t && (n = t.get("clientId"));
                                c.isGtmEvent || k.remove(b)
                            });
                            k("create", a, c.isGtmEvent ? g : l.fa);
                            d && ie(M.H) && (d = !1, k(function() {
                                var t = dj().getByName(c.isGtmEvent ? f : b);
                                !t || t.get("clientId") == n && p || (c.isGtmEvent ? l.kc["&gcu"] = "1" : l.ia["&gcu"] = "1", t.set(l.kc), c.isGtmEvent ? t.send("pageview") : t.send("pageview", l.ia))
                            }));
                            c.isGtmEvent && k(function() {
                                k.remove(f)
                            })
                        }
                    };
                ce(e, M.H);
                ce(e, M.C);
                c.isGtmEvent &&
                    (mn[a] = !0)
            }
        },
        yn = function(a, b, c) {
            function d() {
                var O = c.getWithConfig("custom_map");
                k(function() {
                    if (!c.isGtmEvent && Rb(O)) {
                        var K = r.ia,
                            L = l().getByName(n),
                            N;
                        for (N in O)
                            if (O.hasOwnProperty(N) && /^(dimension|metric)\d+$/.test(N) && void 0 != O[N]) {
                                var J = L.get(jn(O[N]));
                                qn(K, N, J)
                            }
                    }
                })
            }

            function e() {
                if (r.displayfeatures) {
                    var O = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: O
                    })
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                k = c.isGtmEvent ? fj(c.getWithConfig("gaFunctionName")) :
                fj();
            if (ra(k)) {
                var l = dj,
                    n;
                c.isGtmEvent ? n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(O) {
                        var K = [].slice.call(arguments, 0);
                        K[0] = n ? n + "." + K[0] : "" + K[0];
                        k.apply(window, K)
                    },
                    q = function(O) {
                        var K = function(T, X) {
                                for (var S = 0; X && S < X.length; S++) p(T, X[S])
                            },
                            L = c.isGtmEvent,
                            N = L ? rn(r) : sn(b, c);
                        if (N) {
                            var J = {};
                            Jk() && O && (J._x_19 = O);
                            p("require", "ec", "ec.js", J);
                            L && N.qe && p("set", "&cu", N.qe);
                            var I = N.action;
                            if (L || "impressions" === I)
                                if (K("ec:addImpression", N.gg), !L) return;
                            if ("promo_click" === I || "promo_view" === I || L && N.xc) {
                                var V = N.xc;
                                K("ec:addPromo", V);
                                if (V && 0 < V.length && "promo_click" === I) {
                                    L ? p("ec:setAction", I, N.Ya) : p("ec:setAction", I);
                                    return
                                }
                                if (!L) return
                            }
                            "promo_view" !== I && "impressions" !== I && (K("ec:addProduct", N.rb), p("ec:setAction", I, N.Ya))
                        }
                    },
                    u = function(O) {
                        if (O) {
                            var K = {};
                            if (Rb(O))
                                for (var L in tn) tn.hasOwnProperty(L) && un(tn[L], L, O[L], K);
                            p("require", "linkid", K)
                        }
                    },
                    t = function() {
                        if (Kk()) {} else {
                            var O =
                                c.getWithConfig(M.sh);
                            O && (p("require", O, {
                                dataLayer: "shadowDatalayerYZ9j"
                            }), p("require", "render"))
                        }
                    },
                    r = nn(n, b, c),
                    v = function(O, K, L) {
                        L && (K = "" + K);
                        r.ia[O] = K
                    };
                !c.isGtmEvent && on(n, r.fa) && (k(function() {
                    l() && l().remove(n)
                }), vn[n] = !1);
                k("create", f, r.fa);
                if (r.fa._x_19 && !c.isGtmEvent) {
                    var x = Hk(r.fa._x_19, "/analytics.js");
                    x && (g = x)
                }
                if (c.isGtmEvent ? r.kc._x_19 : r.fa._x_19) {
                    var z = c.isGtmEvent ? r.kc._x_20 : r.fa._x_20;
                    z && !vn[n] && (vn[n] = !0, k(kj(n, z)))
                }
                c.isGtmEvent ? r.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(),
                    u(r.linkAttribution));
                var w = r[M.ma];
                w && w[M.M] && ln(w, n);
                p("set", r.kc);
                c.isGtmEvent && r.enableLinkId && p("require", "linkid", "linkid.js");
                c.isGtmEvent && Yd() && pn(f, n, c);
                var y = r.fa._x_19 ? r.fa._x_19 : void 0;
                if (b === M.Rb)
                    if (c.isGtmEvent) {
                        e();
                        if (r.remarketingLists) {
                            var A = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", {
                                cookieName: A
                            })
                        }
                        q(y);
                        p("send", "pageview");
                        r.fa._useUp && hj(n + ".")
                    } else t(), p("send", "pageview", r.ia);
                else b === M.ya ? (t(), $l(f, c), c.getWithConfig(M.Xa) && (ji(["aw", "dc"]), hj(n + ".")),
                    0 != r.sendPageView && p("send", "pageview", r.ia), pn(f, n, c)) : b === M.Ha ? kn(n, c) : "screen_view" === b ? p("send", "screenview", r.ia) : "timing_complete" === b ? (r.ia.hitType = "timing", v("timingCategory", r.eventCategory, !0), c.isGtmEvent ? v("timingVar", r.timingVar, !0) : v("timingVar", r.name, !0), v("timingValue", Ea(r.value)), void 0 !== r.eventLabel && v("timingLabel", r.eventLabel, !0), p("send", r.ia)) : "exception" === b ? p("send", "exception", r.ia) : "optimize.callback" === b || "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (r.ia.hitType =
                    "social", v("socialNetwork", r.socialNetwork, !0), v("socialAction", r.socialAction, !0), v("socialTarget", r.socialTarget, !0)) : ((c.isGtmEvent || wn[b]) && q(y), c.isGtmEvent && e(), r.ia.hitType = "event", v("eventCategory", r.eventCategory, !0), v("eventAction", r.eventAction || b, !0), void 0 !== r.eventLabel && v("eventLabel", r.eventLabel, !0), void 0 !== r.value && v("eventValue", Ea(r.value))), p("send", r.ia));
                var C = !1;
                var F = xn;
                C && (F = c.getContainerTypeLoaded("UA"));
                if (!F && !c.isGtmEvent) {
                    xn = !0;
                    C && c.setContainerTypeLoaded("UA", !0);
                    Zi();
                    var D = function() {
                            C && c.setContainerTypeLoaded("UA", !1);
                            c.onFailure()
                        },
                        E = function() {
                            l().loaded || D()
                        };
                    Kk() ? G(E) : zb(g, E, D)
                }
            } else G(c.onFailure)
        },
        zn = function(a, b, c, d) {
            me(function() {
                yn(a, b, d)
            }, [M.H, M.C])
        },
        Bn = function(a, b) {
            function c(f) {
                function g(p, q) {
                    for (var u = 0; u < q.length; u++) {
                        var t = q[u];
                        if (f[t]) {
                            l[p] = f[t];
                            break
                        }
                    }
                }

                function k() {
                    if (f.category) l.category = f.category;
                    else {
                        for (var p = "", q = 0; q <
                            An.length; q++) void 0 !== f[An[q]] && (p && (p += "/"), p += f[An[q]]);
                        p && (l.category = p)
                    }
                }
                var l = H(f),
                    n = !1;
                if (n || b) g("id", ["id", "item_id", "promotion_id"]), g("name", ["name", "item_name", "promotion_name"]), g("brand", ["brand", "item_brand"]), g("variant", ["variant", "item_variant"]), g("list", ["list_name", "item_list_name"]), g("position", ["list_position", "creative_slot", "index"]),
                    k();
                g("listPosition", ["list_position"]);
                g("creative", ["creative_name"]);
                g("list", ["list_name"]);
                g("position", ["list_position", "creative_slot"]);
                return l
            }
            b = void 0 === b ? !1 : b;
            for (var d = [], e = 0; a && e < a.length; e++) a[e] && Rb(a[e]) && d.push(c(a[e]));
            return d.length ? d : void 0
        },
        Cn = function(a) {
            return ie(a)
        },
        Dn = !1;
    var En = !1;
    var xn, vn = {},
        mn = {},
        gn = Object.freeze({
            client_id: 1,
            client_storage: "storage",
            conversion_linker: "storeGac",
            cookie_domain: 1,
            cookie_expires: 1,
            cookie_flags: 1,
            cookie_name: 1,
            cookie_path: 1,
            cookie_update: 1,
            sample_rate: 1,
            site_speed_sample_rate: 1,
            store_gac: 1,
            use_amp_client_id: 1
        }),
        Fn = Object.freeze({
            _cd2l: 1,
            _cs: 1,
            _useUp: 1,
            allowAnchor: 1,
            allowLinker: 1,
            alwaysSendReferrer: 1,
            clientId: 1,
            cookieDomain: 1,
            cookieExpires: 1,
            cookieFlags: 1,
            cookieName: 1,
            cookiePath: 1,
            cookieUpdate: 1,
            legacyCookieDomain: 1,
            legacyHistoryImport: 1,
            name: 1,
            sampleRate: 1,
            siteSpeedSampleRate: 1,
            storage: 1,
            storeGac: 1,
            useAmpClientId: 1
        }),
        Gn = {
            anonymize_ip: 1
        },
        hn = Object.freeze({
            campaign: {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            },
            app_id: 1,
            app_installer_id: 1,
            app_name: 1,
            app_version: 1,
            currency: "currencyCode",
            description: "exDescription",
            fatal: "exFatal",
            language: 1,
            non_interaction: 1,
            page_hostname: "hostname",
            page_location: "location",
            page_path: "page",
            page_referrer: "referrer",
            page_title: "title",
            screen_name: 1,
            transport_type: "transport",
            user_id: 1
        }),
        Hn = Object.freeze({
            content_id: 1,
            event_action: 1,
            event_category: 1,
            event_label: 1,
            link_attribution: 1,
            linker: 1,
            method: 1,
            name: 1,
            send_page_view: 1,
            value: 1
        }),
        In = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        An = Object.freeze(["item_category", "item_category2",
            "item_category3", "item_category4", "item_category5"
        ]),
        tn = Object.freeze({
            cookie_expires: "duration",
            cookie_name: 1,
            levels: 1
        }),
        Jn = Object.freeze({
            anonymize_ip: 1,
            conversion_linker: 1,
            fatal: 1,
            non_interaction: 1,
            send_page_view: 1,
            store_gac: 1,
            use_amp_client_id: 1
        }),
        un = function(a, b, c, d) {
            if (void 0 !== c)
                if (Jn[b] && (c = Fa(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[jn(b)] = c;
                else if (sa(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        jn = function(a) {
            return a && sa(a) ? a.replace(/(_[a-z])/g,
                function(b) {
                    return b[1].toUpperCase()
                }) : a
        },
        Kn = {},
        wn = Object.freeze((Kn.checkout_progress = 1, Kn.select_content = 1, Kn.set_checkout_option = 1, Kn[M.yb] = 1, Kn[M.zb] = 1, Kn[M.eb] = 1, Kn[M.Sa] = 1, Kn[M.fb] = 1, Kn[M.ra] = 1, Kn[M.Ab] = 1, Kn[M.sa] = 1, Kn)),
        Ln = {},
        Mn = Object.freeze((Ln.checkout_progress = 1, Ln.set_checkout_option = 1, Ln[M.We] = 1, Ln[M.yb] = 1, Ln[M.zb] = 1, Ln[M.eb] = 1, Ln[M.ra] = 1, Ln[M.Ab] = 1, Ln[M.Xe] = 1, Ln)),
        Nn = {},
        On = Object.freeze((Nn.generate_lead = 1, Nn.login = 1, Nn.search = 1, Nn.select_content = 1, Nn.share = 1, Nn.sign_up = 1, Nn.view_search_results =
            1, Nn[M.Sa] = 1, Nn[M.fb] = 1, Nn[M.sa] = 1, Nn)),
        Pn = function(a) {
            var b = "general";
            Mn[a] ? b = "ecommerce" : On[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        Qn = {},
        Rn = Object.freeze((Qn.view_search_results = 1, Qn[M.Sa] = 1, Qn[M.fb] = 1, Qn[M.sa] = 1, Qn)),
        qn = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        Sn = function(a) {
            if (ua(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        nn = function(a,
            b, c) {
            function d(L, N) {
                void 0 !== N && (k[L] = N)
            }
            var e = function(L) {
                    return c.getWithConfig(L)
                },
                f = {},
                g = {},
                k = {},
                l = {},
                n = Sn(e(M.oh));
            !c.isGtmEvent && n && qn(g, "exp", n);
            k["&gtm"] = Ok(!0);
            Yd() && (l._cs = Cn);
            var p = e("custom_map");
            if (!c.isGtmEvent && Rb(p))
                for (var q in p)
                    if (p.hasOwnProperty(q) && /^(dimension|metric)\d+$/.test(q) && void 0 != p[q]) {
                        var u = e(String(p[q]));
                        void 0 !== u && qn(g, q, u)
                    }
            for (var t = bf(c), r = 0; r < t.length; ++r) {
                var v = t[r];
                if (c.isGtmEvent) {
                    var x = e(v);
                    In.hasOwnProperty(v) ? f[v] = x : Fn.hasOwnProperty(v) ? l[v] = x : "currencyCode" !=
                        v && (k[v] = x)
                } else {
                    var z = void 0;
                    z = v !== M.aa ? e(v) : cf(c, v);
                    if (Hn.hasOwnProperty(v)) un(Hn[v], v, z, f);
                    else if (Gn.hasOwnProperty(v)) un(Gn[v], v, z, k);
                    else if (hn.hasOwnProperty(v)) un(hn[v], v, z, g);
                    else if (gn.hasOwnProperty(v)) un(gn[v], v, z, l);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v)) un(1, v, z, g);
                    else if (v === M.aa) {
                        if (!Dn) {
                            var w = Wa(z);
                            w && (g["&did"] = w)
                        }
                        if (En) {
                            var y = Wa(cf(c, v, 1), ".");
                            y && (g["&gdid"] = y);
                            var A = Wa(cf(c, v, 2), ".");
                            A && (g["&edid"] = A)
                        }
                    } else v === M.la && 0 > va(t, M.Jc) && (l.cookieName = z + "_ga")
                }
            }!1 !==
                e(M.eh) && !1 !== e(M.Sb) && fn() || (k.allowAdFeatures = !1);
            if (!1 === e(M.za) || !en()) {
                var C = c.isGtmEvent ? "allowAdPersonalizationSignals" : "allowAdFeatures";
                C = "allowAdPersonalizationSignals";
                k[C] = !1
            }!c.isGtmEvent && e(M.Xa) && (l._useUp = !0);
            if (c.isGtmEvent) {
                l.name = l.name || f.gtmTrackerName;
                var F = k.hitCallback;
                k.hitCallback = function() {
                    ra(F) && F();
                    c.onSuccess()
                }
            } else {
                qn(l, "cookieDomain", "auto");
                qn(k, "forceSSL", !0);
                qn(f,
                    "eventCategory", Pn(b));
                Rn[b] && qn(g, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? qn(f, "eventLabel", e(M.rh)) : "search" === b || "view_search_results" === b ? qn(f, "eventLabel", e(M.xh)) : "select_content" === b && qn(f, "eventLabel", e(M.ih));
                var D = f[M.ma] || {},
                    E = D[M.Eb];
                E || 0 != E && D[M.M] ? l.allowLinker = !0 : !1 === E && qn(l, "useAmpClientId", !1);
                g.hitCallback = c.onSuccess;
                l.name = a
            }
            Yd() && (k["&gcs"] = je(), ie(M.H) || (l.storage = "none"), ie(M.C) || (k.allowAdFeatures = !1, l.storeGac = !1));
            var O = e(M.na) || e(M.qh),
                K = e(M.ph);
            if (O) {
                c.isGtmEvent || (l._x_19 = O);
                l._cd2l = !0;
            }
            K &&
                !c.isGtmEvent && (l._x_20 = K);
            f.ia = g;
            f.kc = k;
            f.fa = l;
            return f
        },
        rn = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.qe = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.gg = "impressions" === b.translateIfKeyEquals ? Bn(d, !0) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.xc = "promoView" === b.translateIfKeyEquals ? Bn(e, !0) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.xc = "promoClick" === b.translateIfKeyEquals ?
                    Bn(f, !0) : f;
                c.Ya = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action = g;
                    var k = b[g].products;
                    c.rb = "products" === b.translateIfKeyEquals ? Bn(k, !0) : k;
                    c.Ya = b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        sn = function(a, b) {
            function c(t) {
                return {
                    id: d(M.Wa),
                    affiliation: d(M.lh),
                    revenue: d(M.ca),
                    tax: d(M.kf),
                    shipping: d(M.Ld),
                    coupon: d(M.mh),
                    list: d(M.Kd) || t
                }
            }
            for (var d = function(t) {
                        return b.getWithConfig(t)
                    },
                    e = d(M.V), f, g = 0; e && g < e.length && !(f = e[g][M.Kd]); g++);
            var k = d("custom_map");
            if (Rb(k))
                for (var l = 0; e && l < e.length; ++l) {
                    var n = e[l],
                        p;
                    for (p in k) k.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != k[p] && qn(n, p, n[k[p]])
                }
            var q = null,
                u = d(M.nh);
            a === M.ra || a === M.Ab ? q = {
                    action: a,
                    Ya: c(),
                    rb: Bn(e)
                } : a === M.yb ? q = {
                    action: "add",
                    rb: Bn(e)
                } : a === M.zb ? q = {
                    action: "remove",
                    rb: Bn(e)
                } : a === M.sa ? q = {
                    action: "detail",
                    Ya: c(f),
                    rb: Bn(e)
                } : a === M.Sa ? q = {
                    action: "impressions",
                    gg: Bn(e)
                } : "view_promotion" === a ? q = {
                    action: "promo_view",
                    xc: Bn(u)
                } :
                "select_content" === a && u && 0 < u.length ? q = {
                    action: "promo_click",
                    xc: Bn(u)
                } : "select_content" === a ? q = {
                    action: "click",
                    Ya: {
                        list: d(M.Kd) || f
                    },
                    rb: Bn(e)
                } : a === M.eb || "checkout_progress" === a ? q = {
                    action: "checkout",
                    rb: Bn(e),
                    Ya: {
                        step: a === M.eb ? 1 : d(M.jf),
                        option: d(M.hf)
                    }
                } : "set_checkout_option" === a && (q = {
                    action: "checkout_option",
                    Ya: {
                        step: d(M.jf),
                        option: d(M.hf)
                    }
                });
            q && (q.qe = d(M.ba));
            return q
        },
        Tn = {},
        on = function(a, b) {
            var c = Tn[a];
            Tn[a] = H(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) &&
                    c[e] !== b[e]) return !0;
            return !1
        };
    var Un = !1;
    Un = !0;

    function Vn() {
        var a = P;
        return a.gcq = a.gcq || new Wn
    }
    var Xn = function(a, b, c) {
            Vn().register(a, b, c)
        },
        Yn = function(a, b, c, d) {
            Vn().push("event", [b, a], c, d)
        },
        Zn = function(a, b) {
            Vn().push("config", [a], b)
        },
        $n = function(a, b, c, d) {
            Vn().push("get", [a, b], c, d)
        },
        ao = {},
        bo = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.B = null;
            this.m = !1
        },
        co = function(a, b, c, d, e) {
            this.type = a;
            this.B = b;
            this.P = c || "";
            this.m = d;
            this.o = e
        },
        Wn = function() {
            this.o = {};
            this.B = {};
            this.m = [];
            this.D = {
                AW: !1,
                UA: !1
            }
        },
        eo = function(a, b) {
            var c = Ll(b);
            return a.o[c.containerId] =
                a.o[c.containerId] || new bo
        },
        fo = function(a, b, c) {
            if (b) {
                var d = Ll(b);
                if (d && 1 === eo(a, b).status) {
                    eo(a, b).status = 2;
                    var e = {};
                    Wj && (e.timeoutId = m.setTimeout(function() {
                        Bd(38);
                        Cj()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    ao[d.containerId] = h();
                    if (Kk()) {} else {
                        var g =
                            "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=shadowDatalayerYZ9j&cx=c";
                        Jk() && (g += "&sign=" + ef.ad);
                        var k = ("http:" != m.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                            l = Hk(c, g) || k;
                        zb(l)
                    }
                }
            }
        },
        go = function(a, b, c, d) {
            if (d.P) {
                var e = eo(a, d.P),
                    f = e.B;
                if (f) {
                    var g = H(c),
                        k = H(e.targetConfig[d.P]),
                        l = H(e.containerConfig),
                        n = H(e.remoteConfig),
                        p = H(a.B),
                        q = zf("gtm.uniqueEventId"),
                        u = Ll(d.P).prefix,
                        t = Qa(function() {
                            var v = g[M.Cb];
                            v && G(v)
                        }),
                        r = $e(Ze(af(Ye(We(Xe(Ve(Ne(Me(g), k), l), n), p), function() {
                            jk(q, u, "2");
                            Un && t()
                        }), function() {
                            jk(q, u, "3");
                            Un && t()
                        }), function(v, x) {
                            a.D[v] = x
                        }), function(v) {
                            return a.D[v]
                        });
                    try {
                        jk(q, u, "1");
                        f(d.P, b, d.B, r)
                    } catch (v) {
                        jk(q, u, "4");
                    }
                }
            }
        };
    Wn.prototype.register = function(a, b, c) {
        var d = eo(this, a);
        if (3 !== d.status) {
            d.B = b;
            d.status = 3;
            c && (H(d.remoteConfig, c), d.remoteConfig = c);
            var e = Ll(a),
                f = ao[e.containerId];
            if (void 0 !== f) {
                var g = P[e.containerId].bootstrap,
                    k = e.prefix.toUpperCase();
                P[e.containerId]._spx && (k = k.toLowerCase());
                var l = zf("gtm.uniqueEventId"),
                    n = k,
                    p = h() - g;
                if (Wj && !Hj[l]) {
                    l !== Dj && (yj(), Dj = l);
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Lj = Lj ? Lj + "," + q : "&cl=" + q
                }
                delete ao[e.containerId]
            }
            this.flush()
        }
    };
    Wn.prototype.push = function(a, b, c, d) {
        var e = Math.floor(h() / 1E3);
        fo(this, c, b[0][M.na] || this.B[M.na]);
        c && eo(this, c).m && (d = !1);
        this.m.push(new co(a, e, c, b, d));
        d || this.flush()
    };
    Wn.prototype.insert = function(a, b, c) {
        var d = Math.floor(h() / 1E3);
        0 < this.m.length ? this.m.splice(1, 0, new co(a, d, c, b, !1)) : this.m.push(new co(a, d, c, b, !1))
    };
    Wn.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.m.length;) {
            var f = this.m[0];
            if (f.o) !f.P || eo(this, f.P).m ? (f.o = !1, this.m.push(f)) : c.push(f), this.m.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== eo(this, f.P).status && !a) {
                            this.m.push.apply(this.m, c);
                            return
                        }
                        Wj && m.clearTimeout(f.m[0].timeoutId);
                        break;
                    case "set":
                        Aa(f.m[0], function(u, t) {
                            H(Ua(u, t), b.B)
                        });
                        break;
                    case "config":
                        e.Ga = {};
                        Aa(f.m[0], function(u) {
                            return function(t, r) {
                                H(Ua(t, r), u.Ga)
                            }
                        }(e));
                        var g = !!e.Ga[M.Sc];
                        delete e.Ga[M.Sc];
                        var k =
                            eo(this, f.P),
                            l = Ll(f.P),
                            n = l.containerId === l.id;
                        g || (n ? k.containerConfig = {} : k.targetConfig[f.P] = {});
                        k.m && g || go(this, M.ya, e.Ga, f);
                        k.m = !0;
                        delete e.Ga[M.bc];
                        n ? H(e.Ga, k.containerConfig) : H(e.Ga, k.targetConfig[f.P]);
                        d = !0;
                        break;
                    case "event":
                        e.Cc = {};
                        Aa(f.m[0], function(u) {
                            return function(t, r) {
                                H(Ua(t, r), u.Cc)
                            }
                        }(e));
                        go(this, f.m[1], e.Cc, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[M.Ja] = f.m[0], p[M.Ta] = f.m[1], p);
                        go(this, M.Ha, q, f)
                }
                this.m.shift();
                ho(this, f)
            }
            e = {
                Ga: e.Ga,
                Cc: e.Cc
            }
        }
        this.m.push.apply(this.m, c);
        d && this.flush()
    };
    var ho = function(a, b) {
        if ("require" !== b.type)
            if (b.P)
                for (var c = a.getCommandListeners(b.P)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], k = 0; k < g.length; k++) g[k]()
                    }
    };
    Wn.prototype.getRemoteConfig = function(a) {
        return eo(this, a).remoteConfig
    };
    Wn.prototype.getCommandListeners = function(a) {
        return eo(this, a).o
    };
    var io = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Lb(a, "className"),
                "gtm.elementId": a["for"] || Fb(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Lb(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Lb(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        jo = function(a) {
            P.hasOwnProperty("autoEventsSettings") || (P.autoEventsSettings = {});
            var b = P.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        ko = function(a, b, c) {
            jo(a)[b] = c
        },
        lo = function(a, b, c, d) {
            var e = jo(a),
                f = Pa(e, b, d);
            e[b] = c(f)
        },
        mo = function(a, b, c) {
            var d = jo(a);
            return Pa(d, b, c)
        };
    var wo = !1,
        xo = [];

    function yo() {
        if (!wo) {
            wo = !0;
            for (var a = 0; a < xo.length; a++) G(xo[a])
        }
    }
    var zo = function(a) {
        wo ? G(a) : xo.push(a)
    };

    function Ao(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var Bo = new ya;

    function Co(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Bo.get(e);
            f || (f = new RegExp(b, d), Bo.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Do(a, b) {
        function c(g) {
            var k = Zf(g),
                l = Xf(k, "protocol"),
                n = Xf(k, "host", !0),
                p = Xf(k, "port"),
                q = Xf(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == p || "https" == l && "443" == p) l = "web", p = "default";
            return [l, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Eo(a) {
        return Fo(a) ? 1 : 0
    }

    function Fo(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && ua(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = H(a, {});
                H({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Eo(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) {
                        var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var k = 0; k < g.length; k++)
                                if (b[g[k]]) {
                                    f = b[g[k]](c);
                                    break a
                                }
                        } catch (n) {}
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return Ao(b, c);
            case "_eq":
                return String(b) ==
                    String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var l;
                l = String(b).split(",");
                return 0 <= va(l, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Co(b, c, a.ignore_case);
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return Do(b, c)
        }
        return !1
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    var Jo = "HA GF G UA AW DC".split(" "),
        Ko = !1;
    Ko = !0;
    var Lo = !1,
        Mo = !1;

    function No(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = H(b), b[M.Cb] && (c.eventCallback = b[M.Cb]), b[M.Mc] && (c.eventTimeout = b[M.Mc]));
        return c
    }

    function Oo(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: sf()
        });
        return a["gtm.uniqueEventId"]
    }

    function Po() {
        return Lo
    }
    var Qo = {
            config: function(a) {
                var b, c = Oo(a);
                return b
            },
            consent: function(a) {
                function b() {
                    Po() && H(a[2], {
                        subcommand: a[1]
                    })
                }
                if (3 === a.length) {
                    Bd(39);
                    var c = sf(),
                        d = a[1];
                    "default" === d ? (b(), fe(a[2])) : "update" === d && (b(), he(a[2], c))
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && sa(b)) {
                    var c;
                    if (2 < a.length) {
                        if (!Rb(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        c = a[2]
                    }
                    var d = No(b, c),
                        e = Oo(a);
                    d["gtm.uniqueEventId"] = e;
                    return d
                }
            },
            get: function(a) {},
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    Mo = !0;
                    Po();
                    var b = {};
                    return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(), b["gtm.uniqueEventId"] = Oo(a), b
                }
            },
            policy: function() {},
            set: function(a) {
                var b;
                2 == a.length && Rb(a[1]) ?
                    b = H(a[1]) : 3 == a.length && sa(a[1]) && (b = {}, Rb(a[2]) || ua(a[2]) ? b[a[1]] = H(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    b._clear = !0;
                    return b
                }
            }
        },
        Ro = {
            policy: !0
        };
    var So = function(a, b) {
            var c = a.hide;
            if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0,
                    e;
                for (e in c)
                    if (c.hasOwnProperty(e) && !0 === c[e]) {
                        d = !1;
                        break
                    }
                d && (c.end(), c.end = null)
            }
        },
        Uo = function(a) {
            var b = To(),
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var kp = function(a) {
        if (jp(a)) return a;
        this.m = a
    };
    kp.prototype.ri = function() {
        return this.m
    };
    var jp = function(a) {
        return !a || "object" !== Pb(a) || Rb(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    kp.prototype.getUntrustedUpdateValue = kp.prototype.ri;
    var lp = [],
        mp = !1,
        np = !1,
        op = function(a) {
            return m["shadowDatalayerYZ9j"].push(a)
        },
        pp = function(a, b) {
            var c = P["shadowDatalayerYZ9j"],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = m.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (m.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function qp(a) {
        var b = a._clear;
        Aa(a, function(d, e) {
            "_clear" !== d && (b && Cf(d, void 0), Cf(d, e))
        });
        nf || (nf = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = sf(), a["gtm.uniqueEventId"] = c, Cf("gtm.uniqueEventId", c));
        return Fk(a)
    }

    function rp() {
        var a = lp[0];
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Da(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0
        }
        return !1
    }

    function sp() {
        for (var a = !1; !np && 0 < lp.length;) {
            if (!mp && rp()) {
                var b = {},
                    c = (b.event = "gtm.init_consent", b),
                    d = {},
                    e = (d.event = "gtm.init", d),
                    f = lp[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                lp.unshift(c, e);
                mp = !0
            }
            np = !0;
            delete wf.eventModel;
            yf();
            var g = lp.shift();
            if (null != g) {
                var k = jp(g);
                if (k) {
                    var l = g;
                    g = jp(l) ? l.getUntrustedUpdateValue() : void 0;
                    for (var n = ["gtm.allowlist",
                            "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"
                        ], p = 0; p < n.length; p++) {
                        var q = n[p],
                            u = zf(q, 1);
                        if (ua(u) || Rb(u)) u = H(u);
                        xf[q] = u
                    }
                }
                try {
                    if (ra(g)) try {
                        g.call(Af)
                    } catch (A) {} else if (ua(g)) {
                        var t = g;
                        if (sa(t[0])) {
                            var r = t[0].split("."),
                                v = r.pop(),
                                x = t.slice(1),
                                z = zf(r.join("."), 2);
                            if (void 0 !== z && null !== z) try {
                                z[v].apply(z, x)
                            } catch (A) {}
                        }
                    } else {
                        if (Da(g)) {
                            a: {
                                var w = g;
                                if (w.length && sa(w[0])) {
                                    var y = Qo[w[0]];
                                    if (y && (!k || !Ro[w[0]])) {
                                        g = y(w);
                                        break a
                                    }
                                }
                                g = void 0
                            }
                            if (!g) {
                                np = !1;
                                continue
                            }
                        }
                        a = qp(g) || a
                    }
                } finally {
                    k && yf(!0)
                }
            }
            np = !1
        }
        return !a
    }

    function tp() {
        var b = sp();
        try {
            So(m["shadowDatalayerYZ9j"], ef.I)
        } catch (c) {}
        return b
    }
    var vp = function() {
            var a = vb("shadowDatalayerYZ9j", []),
                b = vb("google_tag_manager", {});
            b = b["shadowDatalayerYZ9j"] = b["shadowDatalayerYZ9j"] || {};
            Ri(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            zo(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < P.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++) e[f] = new kp(arguments[f])
                } else e = [].slice.call(arguments, 0);
                var g = c.apply(a, e);
                lp.push.apply(lp, e);
                if (300 <
                    this.length)
                    for (Bd(4); 300 < this.length;) this.shift();
                var k = "boolean" !== typeof g || g;
                return sp() && k
            };
            var d = a.slice(0);
            lp.push.apply(lp, d);
            if (up()) {
                G(tp)
            }
        },
        up = function() {
            var a = !0;
            return a
        };
    var wp = {};
    wp.Wc = new String("undefined");
    var xp = function(a) {
        this.m = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === wp.Wc ? b : a[d]);
            return c.join("")
        }
    };
    xp.prototype.toString = function() {
        return this.m("undefined")
    };
    xp.prototype.valueOf = xp.prototype.toString;
    wp.Mh = xp;
    wp.ie = {};
    wp.bi = function(a) {
        return new xp(a)
    };
    var yp = {};
    wp.Vi = function(a, b) {
        var c = sf();
        yp[c] = [a, b];
        return c
    };
    wp.Vf = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = yp[c];
            if (d && "function" === typeof d[b]) d[b]();
            yp[c] = void 0
        }
    };
    wp.yi = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    wp.Ni = function(a) {
        if (a === wp.Wc) return a;
        var b = sf();
        wp.ie[b] = a;
        return 'google_tag_manager["' + ef.I + '"].macro(' + b + ")"
    };
    wp.Ii = function(a, b, c) {
        a instanceof wp.Mh && (a = a.m(wp.Vi(b, c)), b = pa);
        return {
            vi: a,
            onSuccess: b
        }
    };
    var Jp = m.clearTimeout,
        Kp = m.setTimeout,
        R = function(a, b, c, d) {
            if (Kk()) {
                b && G(b)
            } else return zb(a, b, c, d)
        },
        Lp = function() {
            return new Date
        },
        Mp = function() {
            return m.location.href
        },
        Np = function(a) {
            return Xf(Zf(a), "fragment")
        },
        Op = function(a) {
            return Yf(Zf(a))
        },
        Pp = function(a, b) {
            return zf(a, b || 2)
        },
        Qp = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = op(a)) : d = op(a);
            return d
        },
        Rp = function(a, b) {
            m[a] = b
        },
        U = function(a, b,
            c) {
            b && (void 0 === m[a] || c && !m[a]) && (m[a] = b);
            return m[a]
        },
        Sp = function(a, b, c) {
            return Ag(a, b, void 0 === c ? !0 : !!c)
        },
        Tp = function(a, b, c) {
            return 0 === Og(a, b, c)
        },
        Up = function(a, b) {
            if (Kk()) {
                b && G(b)
            } else Bb(a, b)
        },
        Vp = function(a) {
            return !!mo(a, "init", !1)
        },
        Wp = function(a) {
            ko(a, "init", !0)
        },
        Xp = function(a) {
            var b = lf,
                c = "?id=" + encodeURIComponent(a) + "&l=shadowDatalayerYZ9j";
            Jk() && (c += "&sign=" + ef.ad, ub && (b = ub.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
            var d = Pl("https://", "http://", b + c);
            R(d)
        },
        Yp = function(a, b, c) {
            Wj && (Sb(a) || kk(c, b, a))
        };
    var Zp = wp.Ii;
    var vq = encodeURI,
        Y = encodeURIComponent,
        wq = Cb;
    var xq = function(a, b) {
        if (!a) return !1;
        var c = Xf(Zf(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var yq = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };
    var zq = function(a, b, c) {
        for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]))
    };

    function gs() {
        return m.gaGlobal = m.gaGlobal || {}
    }
    var hs = function() {
            var a = gs();
            a.hid = a.hid || xa();
            return a.hid
        },
        is = function(a, b) {
            var c = gs();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var Js = function() {
        if (ra(m.__uspapi)) {
            var a = "";
            try {
                m.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var it = window,
        jt = document,
        kt = function(a) {
            var b = it._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === it["ga-disable-" + a]) return !0;
            try {
                var c = it.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = wg("AMP_TOKEN", String(jt.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return jt.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var lt = {};

    function ot(a) {
        delete a.eventModel[M.bc];
        qt(a.eventModel)
    }
    var qt = function(a) {
        Aa(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[M.Ka] || {};
        Aa(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var tt = function(a, b, c) {
            Yn(b, c, a)
        },
        ut = function(a, b, c) {
            Yn(b, c, a, !0)
        },
        yt = function(a, b) {};

    function vt(a, b) {}
    var Z = {
        g: {}
    };
    Z.g.gaawc = ["google"],
        function() {
            (function(a) {
                Z.__gaawc = a;
                Z.__gaawc.h = "gaawc";
                Z.__gaawc.isVendorTemplate = !0;
                Z.__gaawc.priorityOverride = 10
            })(function(a) {
                var b = String(a.vtp_measurementId);
                if (sa(b) && 0 === b.indexOf("G-")) {
                    var c = yq(a.vtp_fieldsToSet, "name", "value") || {};
                    if (c.hasOwnProperty(M.Ka) || a.vtp_userProperties) {
                        var d = c[M.Ka] || {};
                        H(yq(a.vtp_userProperties, "name", "value"), d);
                        c[M.Ka] = d
                    }
                    a.vtp_enableSendToServerContainer && a.vtp_serverContainerUrl && (c[M.na] = a.vtp_serverContainerUrl, c[M.Vb] = !0);
                    var e = a.vtp_userDataVariable;
                    e && (c[M.va] = e);
                    zq(c, M.Yd, function(f) {
                        return Fa(f)
                    });
                    zq(c, M.Zd, function(f) {
                        return Number(f)
                    });
                    c.send_page_view = a.vtp_sendPageView;
                    Zn(c, b);
                    G(a.vtp_gtmOnSuccess)
                } else G(a.vtp_gtmOnFailure)
            })
        }();




    Z.g.jsm = ["customScripts"],
        function() {
            (function(a) {
                Z.__jsm = a;
                Z.__jsm.h = "jsm";
                Z.__jsm.isVendorTemplate = !0;
                Z.__jsm.priorityOverride = 0
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = U("google_tag_manager");
                        var d = c && c.e && c.e(b);
                        Yp(d, "jsm", a.vtp_gtmEventId);
                        return d
                    } catch (e) {}
                }
            })
        }();
    Z.g.c = ["google"],
        function() {
            (function(a) {
                Z.__c = a;
                Z.__c.h = "c";
                Z.__c.isVendorTemplate = !0;
                Z.__c.priorityOverride = 0
            })(function(a) {
                Yp(a.vtp_value, "c", a.vtp_gtmEventId);
                return a.vtp_value
            })
        }();
    Z.g.d = ["google"],
        function() {
            (function(a) {
                Z.__d = a;
                Z.__d.h = "d";
                Z.__d.isVendorTemplate = !0;
                Z.__d.priorityOverride = 0
            })(function(a) {
                var b = null,
                    c = null,
                    d = a.vtp_attributeName;
                if ("CSS" == a.vtp_selectorType) try {
                    var e = oe(a.vtp_elementSelector);
                    e && 0 < e.length && (b = e[0])
                } catch (f) {
                    b = null
                } else b = B.getElementById(a.vtp_elementId);
                b && (d ? c = Fb(b, d) : c = Gb(b));
                return La(String(b && c))
            })
        }();
    Z.g.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.h = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                var b = String(Ff(a.vtp_gtmEventId, "event"));
                a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
                return b
            })
        }();
    Z.g.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.h = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0
            })(function(a) {
                var b = Pp("gtm.referrer", 1) || B.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? Xf(Zf(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Op(String(b)) : String(b)
            })
        }();
    Z.g.j = ["google"],
        function() {
            (function(a) {
                Z.__j = a;
                Z.__j.h = "j";
                Z.__j.isVendorTemplate = !0;
                Z.__j.priorityOverride = 0
            })(function(a) {
                for (var b = String(a.vtp_name).split("."), c = U(b.shift()), d = 0; d < b.length; d++) c = c && c[b[d]];
                Yp(c, "j", a.vtp_gtmEventId);
                return c
            })
        }();
    Z.g.k = ["google"],
        function() {
            (function(a) {
                Z.__k = a;
                Z.__k.h = "k";
                Z.__k.isVendorTemplate = !0;
                Z.__k.priorityOverride = 0
            })(function(a) {
                return Sp(a.vtp_name, Pp("gtm.cookie", 1), !!a.vtp_decodeCookie)[0]
            })
        }();

    Z.g.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.h = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Pp("gtm.url", 1)) || Mp();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Op(String(c));
                var e = Zf(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        k = b[a("vtp_queryKey").toString()] || "",
                        l = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? ua(k) ?
                    n = k : n = String(k).replace(/\s+/g, "").split(",") : n = [String(k)];
                    for (var p = 0; p < n.length; p++) {
                        var q = Xf(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!l || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = Xf(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
                return f
            })
        }();
    Z.g.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.h = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = Pp(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                Yp(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();
    Z.g.tl = ["google"],
        function() {
            function a(b) {
                return function() {
                    if (b.De && b.Ee >= b.De) b.Ae && U("self").clearInterval(b.Ae);
                    else {
                        b.Ee++;
                        var c = Lp().getTime();
                        Qp({
                            event: b.eventName,
                            "gtm.timerId": b.Ae,
                            "gtm.timerEventNumber": b.Ee,
                            "gtm.timerInterval": b.interval,
                            "gtm.timerLimit": b.De,
                            "gtm.timerStartTime": b.zg,
                            "gtm.timerCurrentTime": c,
                            "gtm.timerElapsedTime": c - b.zg,
                            "gtm.triggers": b.ej
                        })
                    }
                }
            }(function(b) {
                Z.__tl = b;
                Z.__tl.h = "tl";
                Z.__tl.isVendorTemplate = !0;
                Z.__tl.priorityOverride = 0
            })(function(b) {
                G(b.vtp_gtmOnSuccess);
                if (!isNaN(b.vtp_interval)) {
                    var c = {
                        eventName: b.vtp_eventName,
                        Ee: 0,
                        interval: Number(b.vtp_interval),
                        De: isNaN(b.vtp_limit) ? 0 : Number(b.vtp_limit),
                        ej: String(b.vtp_uniqueTriggerId || "0"),
                        zg: Lp().getTime()
                    };
                    c.Ae = U("self").setInterval(a(c), 0 > Number(b.vtp_interval) ? 0 : Number(b.vtp_interval))
                }
            })
        }();
    Z.g.ua = ["google"],
        function() {
            function a(r) {
                return ie(r)
            }

            function b(r, v, x) {
                var z = !1;
                if (Yd() && !z && !f[r]) {
                    var w = !ie(M.H),
                        y = function() {
                            var A = dj(),
                                C = "gtm" + sf(),
                                F = q(v);
                            F["&gtm"] = Ok(!0);
                            var D = {
                                name: C
                            };
                            p(F, D, !0);
                            var E = void 0,
                                O = D._useUp;
                            A(function() {
                                var K = A.getByName(x);
                                K && (E = K.get("clientId"))
                            });
                            A("create", r, D);
                            w && ie(M.H) && (w = !1, A(function() {
                                var K = dj().getByName(C);
                                !K || K.get("clientId") === E && O || (F["&gcs"] = je(), F["&gcu"] = "1", K.set(F), K.send("pageview"))
                            }));
                            A(function() {
                                A.remove(C)
                            })
                        };
                    ce(y, M.H);
                    ce(y, M.C);
                    f[r] = !0
                }
            }
            var c = !1;
            c = !0;
            var d, e = {},
                f = {},
                g = {
                    name: !0,
                    clientId: !0,
                    sampleRate: !0,
                    siteSpeedSampleRate: !0,
                    alwaysSendReferrer: !0,
                    allowAnchor: !0,
                    allowLinker: !0,
                    cookieName: !0,
                    cookieDomain: !0,
                    cookieExpires: !0,
                    cookiePath: !0,
                    cookieUpdate: !0,
                    cookieFlags: !0,
                    legacyCookieDomain: !0,
                    legacyHistoryImport: !0,
                    storage: !0,
                    useAmpClientId: !0,
                    storeGac: !0,
                    _cd2l: !0,
                    _useUp: !0,
                    _cs: !0
                },
                k = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                l = {
                    urlPassthrough: !0
                };
            var n = function(r, v) {
                if (r)
                    for (var x in r)
                        if (!l[x] && r.hasOwnProperty(x)) {
                            var z = k[x] ? Fa(r[x]) : r[x];
                            "anonymizeIp" != x || z || (z = void 0);
                            v[x] = z
                        }
            };
            var p = function(r, v, x) {
                    var z = 0;
                    if (r)
                        for (var w in r)
                            if (!l[w] &&
                                r.hasOwnProperty(w) && (x && g[w] || !x && void 0 === g[w])) {
                                var y = k[w] ? Fa(r[w]) : r[w];
                                "anonymizeIp" != w || y || (y = void 0);
                                v[w] = y;
                                z++
                            }
                    return z
                },
                q = function(r) {
                    var v = {};
                    r.vtp_gaSettings && H(yq(r.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), v);
                    H(yq(r.vtp_fieldsToSet, "fieldName", "value"), v);
                    Fa(v.urlPassthrough) && (v._useUp = !0);
                    r.vtp_transportUrl && (v._x_19 = r.vtp_transportUrl);
                    if (!c) {
                        v._x_19 && (v._cd2l = !0);
                        ie(M.H) || (v.storage = "none");
                        ie(M.C) || (v.allowAdFeatures = !1, v.storeGac = !1);
                        fn() || (v.allowAdFeatures = !1);
                        en() || (v.allowAdPersonalizationSignals = !1);
                        if (Fa(v.urlPassthrough)) {
                            var x = !1;
                            Yd() && !x && (v._cs = a)
                        }
                    }
                    return v
                },
                u = function(r, v) {},
                t = function(r) {
                    function v(qa, da) {
                        void 0 !== r[da] && N("set", qa, r[da])
                    }

                    function x() {
                        if (r.vtp_doubleClick || "DISPLAY_FEATURES" == r.vtp_advertisingFeaturesType) {
                            var qa = "_dc_gtm_" + String(r.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                            N("require", "displayfeatures", void 0, {
                                cookieName: qa
                            })
                        }
                    }
                    var z = {},
                        w = {},
                        y = {},
                        A = {};
                    if (r.vtp_gaSettings) {
                        var C = r.vtp_gaSettings;
                        H(yq(C.vtp_contentGroup, "index", "group"), w);
                        H(yq(C.vtp_dimension, "index", "dimension"), y);
                        H(yq(C.vtp_metric, "index", "metric"), A);
                        var F = H(C);
                        F.vtp_fieldsToSet =
                            void 0;
                        F.vtp_contentGroup = void 0;
                        F.vtp_dimension = void 0;
                        F.vtp_metric = void 0;
                        r = H(r, F)
                    }
                    H(yq(r.vtp_contentGroup, "index", "group"), w);
                    H(yq(r.vtp_dimension, "index", "dimension"), y);
                    H(yq(r.vtp_metric, "index", "metric"), A);
                    var D = q(r),
                        E = "",
                        O = fj(r.vtp_functionName);
                    if (ra(O)) {
                        var K = "",
                            L = "";
                        r.vtp_setTrackerName && "string" == typeof r.vtp_trackerName ? "" !== r.vtp_trackerName && (L = r.vtp_trackerName, K = L + ".") : (L = "gtm" + sf(), K = L + ".");
                        var N = function(qa) {
                                var da = [].slice.call(arguments, 0);
                                da[0] = K + da[0];
                                O.apply(window, da)
                            },
                            J =
                            function(qa, da) {
                                return void 0 === da ? da : qa(da)
                            },
                            I = function(qa, da) {
                                if (da)
                                    for (var Ma in da) da.hasOwnProperty(Ma) && (c ? D[qa + Ma] = da[Ma] : N("set", qa + Ma, da[Ma]))
                            },
                            V = function() {
                                var qa = {
                                        transaction_id: "id",
                                        affiliation: "affiliation",
                                        value: "revenue",
                                        tax: "tax",
                                        shipping: "shipping",
                                        coupon: "coupon",
                                        item_list_name: "list"
                                    },
                                    da = {},
                                    Ma = (da[M.zd] = "click", da[M.sa] = "detail", da[M.yb] = "add", da[M.zb] = "remove", da[M.eb] = "checkout", da[M.ra] = "purchase", da[M.Ab] =
                                        "refund", da),
                                    sc = {
                                        item_id: "id",
                                        item_name: "name",
                                        item_list_name: "list",
                                        item_brand: "brand",
                                        item_variant: "variant",
                                        index: "position",
                                        promotion_id: "id",
                                        promotion_name: "name",
                                        creative_name: "creative",
                                        creative_slot: "position"
                                    },
                                    Mc = {
                                        item_category: 0,
                                        item_category2: 1,
                                        item_category3: 2,
                                        item_category4: 3,
                                        item_category5: 4
                                    },
                                    db = function(fb, Na, Ga) {
                                        var Ha = c ? Ga : fb,
                                            lb;
                                        for (lb in fb) qa.hasOwnProperty(lb) && (Ha[Na] = Ha[Na] || {}, Ha[Na].actionField = Ha[Na].actionField || {}, Ha[Na].actionField[qa[lb]] = fb[lb])
                                    },
                                    Ib = function(fb, Na) {
                                        for (var Ga =
                                                "", Ha = 0; Ha < Na.length; Ha++) void 0 !== Na[Ha] && ("" !== Ga && (Ga += "/"), Ga += Na[Ha]);
                                        fb.category = Ga
                                    },
                                    eb = function(fb) {
                                        for (var Na = [], Ga = {}, Ha = 0; Ha < fb.length; Ga = {
                                                vb: Ga.vb,
                                                Pb: Ga.Pb
                                            }, Ha++) {
                                            Ga.vb = {};
                                            var lb = fb[Ha];
                                            Ga.Pb = [];
                                            Aa(lb, function(Qd) {
                                                return function(vc, pd) {
                                                    sc.hasOwnProperty(vc) ? Qd.vb[sc[vc]] = pd : Mc.hasOwnProperty(vc) ? Qd.Pb[Mc[vc]] = pd : Qd.vb[vc] = pd
                                                }
                                            }(Ga));
                                            0 < Ga.Pb.length && Ib(Ga.vb, Ga.Pb);
                                            Na.push(Ga.vb)
                                        }
                                        return Na
                                    },
                                    Ka = function(fb, Na, Ga) {
                                        if (!Rb(Na)) return !1;
                                        for (var Ha = Pa(Object(Na), Ga, []), lb = 0; Ha && lb < Ha.length; lb++) N(fb,
                                            Ha[lb]);
                                        return !!Ha && 0 < Ha.length
                                    },
                                    Q;
                                if (r.vtp_useEcommerceDataLayer) {
                                    var md = !1;
                                    if (r.vtp_useGA4SchemaForEcommerce) {
                                        r.vtp_gtmCachedValues && (Q = r.vtp_gtmCachedValues.eventModel);
                                        Q = Q || Ff(r.vtp_gtmEventId, "eventModel");
                                        md = !!Q
                                    }
                                    md || (Q = Pp("ecommerce", 1))
                                } else r.vtp_ecommerceMacroData && (Q = r.vtp_ecommerceMacroData.ecommerce, !Q && r.vtp_useGA4SchemaForEcommerce && (Q = r.vtp_ecommerceMacroData));
                                if (!Rb(Q)) return null;
                                Q = Object(Q);
                                r.vtp_gtmCachedValues && (E = r.vtp_gtmCachedValues.event);
                                E = E || String(Ff(r.vtp_gtmEventId, "event"));
                                if (!c && r.vtp_useGA4SchemaForEcommerce)
                                    if (Q = H(Q), E === M.Sa && !Q.impressions && Q.items) Q.impressions = eb(Q.items);
                                    else if (E === M.fb && !Q.promoView && Q.items) Q.promoView = {}, Q.promoView.promotions = eb(Q.items);
                                else if (E === M.Hc && !Q.promoClick) Q.items && (Q.promoClick = {}, Q.promoClick.promotions = eb(Q.items)), db(Q, "promoClick");
                                else if (Ma.hasOwnProperty(E)) {
                                    var Nd = Ma[E];
                                    Q[Nd] || (Q.items && (Q[Nd] = {}, Q[Nd].products = eb(Q.items)), db(Q, Nd))
                                }
                                var Ca = {},
                                    Re = Q.currencyCode;
                                r.vtp_useGA4SchemaForEcommerce &&
                                    (Re = Re || Q.currency);
                                var nd = Pa(D, "currencyCode", Re);
                                if (c) {
                                    nd && (Ca.currencyCode = nd);
                                    Q.impressions && (Ca.impressions = Q.impressions);
                                    Q.promoView && (Ca.promoView = Q.promoView);
                                    if (r.vtp_useGA4SchemaForEcommerce) {
                                        if (E === M.Sa && !Q.impressions) Q.items && (Ca.impressions = Q.items, Ca.translateIfKeyEquals = "impressions");
                                        else if (E === M.fb && !Q.promoView) Q.promoView = {}, Q.items && (Ca.promoView = {}, Ca.promoView.promotions = Q.items, Ca.translateIfKeyEquals = "promoView");
                                        else if (E === M.Hc && !Q.promoClick) Q.promoClick = {}, Q.items &&
                                            (Ca.promoClick = {}, Ca.promoClick.promotions = Q.items, Ca.translateIfKeyEquals = "promoClick", db(Q, "promoClick", Ca));
                                        else if (Ma.hasOwnProperty(E)) {
                                            var Nc = Ma[E];
                                            !Q[Nc] && Q.items && (Ca[Nc] = {}, Ca[Nc].products = Q.items, Ca.translateIfKeyEquals = "products", db(Q, Nc, Ca))
                                        }
                                        var Od = Ca.translateIfKeyEquals;
                                        if ("promoClick" === Od || "products" === Od) return Ca
                                    }
                                    if (Q.promoClick) return Ca.promoClick = Q.promoClick, Ca
                                } else if (void 0 !== nd && N("set", "&cu", nd), Ka("ec:addImpression", Q, "impressions"), Ka("ec:addPromo", Q[Q.promoClick ? "promoClick" :
                                        "promoView"], "promotions") && Q.promoClick) return N("ec:setAction", "promo_click", Q.promoClick.actionField), null;
                                for (var tc = "detail checkout checkout_option click add remove purchase refund".split(" "), Pd = "refund purchase remove checkout checkout_option add click detail".split(" "), uc = 0; uc < tc.length; uc++) {
                                    var od = Q[tc[uc]];
                                    if (od) {
                                        c ? Ca[tc[uc]] = od : (Ka("ec:addProduct", od, "products"), N("ec:setAction", tc[uc], od.actionField));
                                        if (Wj)
                                            for (var Se = 0; Se < Pd.length; Se++) {
                                                var Gg = Q[Pd[Se]];
                                                if (Gg) {
                                                    Gg !== od && Bd(13);
                                                    break
                                                }
                                            }
                                        return Ca
                                    }
                                }
                                c &&
                                    r.vtp_useGA4SchemaForEcommerce && Ma.hasOwnProperty(E) && db(Q, Ma[E], Ca);
                                return Ca;
                                return null
                            },
                            T = function(qa, da) {
                                return void 0 === r[qa] ? z[da] : r[qa]
                            },
                            X = String(r.vtp_trackingId || z.trackingId || "");
                        if (c) {
                            var S = function() {
                                if (r.vtp_doubleClick || "DISPLAY_FEATURES" == r.vtp_advertisingFeaturesType) D.displayfeatures = !0
                            };
                            I("contentGroup", w);
                            I("dimension", y);
                            I("metric", A);
                            var W = {};
                            r.vtp_enableEcommerce && (D.gtmEcommerceData = V());
                            if ("TRACK_EVENT" === r.vtp_trackType) E = "track_event", S(), D.eventCategory = String(T("vtp_eventCategory", "category")), D.eventAction = String(T("vtp_eventAction", "action")), D.eventLabel = J(String, T("vtp_eventLabel", "label")), D.value = J(Ea, T("vtp_eventValue", "value"));
                            else if ("TRACK_PAGEVIEW" == r.vtp_trackType) {
                                if (E = M.Rb, S(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == r.vtp_advertisingFeaturesType && (D.remarketingLists = !0), r.vtp_autoLinkDomains) {
                                    var ca = {};
                                    ca[M.M] =
                                        r.vtp_autoLinkDomains;
                                    ca.use_anchor = r.vtp_useHashAutoLink;
                                    ca[M.Fb] = r.vtp_decorateFormsAutoLink;
                                    D[M.ma] = ca
                                }
                            } else "TRACK_SOCIAL" === r.vtp_trackType ? (E = "track_social", D.socialNetwork = String(r.vtp_socialNetwork), D.socialAction = String(r.vtp_socialAction), D.socialTarget = String(r.vtp_socialActionTarget)) : "TRACK_TIMING" == r.vtp_trackType && (E = "timing_complete", D.eventCategory = String(T("vtp_timingCategory", "category")), D.timingVar = String(T("vtp_timingVar", "name")), D.value = Ea(T("vtp_timingValue", "value")), D.eventLabel =
                                J(String, T("vtp_timingLabel", "label")));
                            r.vtp_enableRecaptcha && (D.enableRecaptcha = !0);
                            r.vtp_enableLinkId && (D.enableLinkId = !0);
                            n(D, W);
                            D.name || (W.gtmTrackerName = L);
                            W.gaFunctionName = r.vtp_functionName;
                            void 0 !== r.vtp_nonInteraction && (W.nonInteraction = r.vtp_nonInteraction);
                            var la = af(Ye(Me(W), r.vtp_gtmOnSuccess), r.vtp_gtmOnFailure);
                            la.isGtmEvent = !0;
                            zn(X, E, Date.now(), la)
                        }
                        if (!c) {
                            var Ba = function(qa, da) {
                                    void 0 !== da && N("set", qa, da)
                                },
                                Ja = {
                                    name: L
                                };
                            p(D, Ja, !0);
                            O("create", X, Ja);
                            N("set", "&gtm", Ok(!0));
                            I("contentGroup", w);
                            I("dimension", y);
                            I("metric", A);
                            var jd = !1;
                            Yd() && !jd && (N("set", "&gcs", je()), b(X, r, L));
                            D._x_19 && D._x_20 && !e[L] && (e[L] = !0, O(kj(L, String(D._x_20))));
                            r.vtp_enableRecaptcha && N("require", "recaptcha", "recaptcha.js");
                            v("nonInteraction", "vtp_nonInteraction");
                            var Oe = {};
                            p(D, Oe, !1) && N("set", Oe);
                            r.vtp_enableLinkId && N("require", "linkid", "linkid.js");
                            N("set", "hitCallback", function() {
                                var qa = D && D.hitCallback;
                                ra(qa) && qa();
                                r.vtp_gtmOnSuccess()
                            })
                        }
                        var Wb;
                        if ("TRACK_EVENT" == r.vtp_trackType) {
                            if (!c) {
                                if (r.vtp_enableEcommerce) {
                                    var Pe = {};
                                    Jk() && D._x_19 && (Pe._x_19 = D._x_19);
                                    N("require", "ec", "ec.js", Pe);
                                    V()
                                }
                                x();
                                var Ld = {
                                    hitType: "event",
                                    eventCategory: String(T("vtp_eventCategory", "category")),
                                    eventAction: String(T("vtp_eventAction", "action")),
                                    eventLabel: J(String, T("vtp_eventLabel", "label")),
                                    eventValue: J(Ea, T("vtp_eventValue", "value"))
                                };
                                p(Wb, Ld, !1);
                                N("send", Ld);
                            }
                        } else if ("TRACK_SOCIAL" == r.vtp_trackType) {
                            if (!c) {}
                        } else if ("TRACK_TRANSACTION" == r.vtp_trackType) {} else if ("TRACK_TIMING" == r.vtp_trackType) {
                            if (!c) {}
                        } else if ("DECORATE_LINK" == r.vtp_trackType) {} else if ("DECORATE_FORM" == r.vtp_trackType) {} else if ("TRACK_DATA" == r.vtp_trackType) {} else if (!c) {
                            if (r.vtp_enableEcommerce) {
                                var Md = {};
                                Jk() && D._x_19 && (Md._x_19 = D._x_19);
                                N("require", "ec", "ec.js", Md);
                                V()
                            }
                            x();
                            if ("DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == r.vtp_advertisingFeaturesType) {
                                var Eg =
                                    "_dc_gtm_" + String(r.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                                N("require", "adfeatures", {
                                    cookieName: Eg
                                })
                            }
                            Wb ? N("send", "pageview", Wb) : N("send", "pageview");
                            u(r, K);
                            Fa(D.urlPassthrough) && hj(K)
                        }
                        if (!d) {
                            var $b = r.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                            r.vtp_useInternalVersion && !r.vtp_useDebugVersion && ($b = "internal/" + $b);
                            d = !0;
                            var rc = Hk(D._x_19, "/analytics.js"),
                                Fg = Pl("https:", "http:", "//www.google-analytics.com/" + $b, D && !!D.forceSSL);
                            R("analytics.js" === $b && rc ? rc : Fg, function() {
                                var qa = dj();
                                qa && qa.loaded || r.vtp_gtmOnFailure();
                            }, r.vtp_gtmOnFailure)
                        }
                    } else G(r.vtp_gtmOnFailure)
                };
            (function(r) {
                Z.__ua = r;
                Z.__ua.h = "ua";
                Z.__ua.isVendorTemplate = !0;
                Z.__ua.priorityOverride = 0
            })(function(r) {
                me(function() {
                    t(r)
                }, [M.H, M.C])
            })
        }();

    Z.g.cid = ["google"],
        function() {
            (function(a) {
                Z.__cid = a;
                Z.__cid.h = "cid";
                Z.__cid.isVendorTemplate = !0;
                Z.__cid.priorityOverride = 0
            })(function() {
                return ef.I
            })
        }();

    Z.g.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gb"];
            (function(b) {
                Z.__gclidw = b;
                Z.__gclidw.h = "gclidw";
                Z.__gclidw.isVendorTemplate = !0;
                Z.__gclidw.priorityOverride = 100
            })(function(b) {
                G(b.vtp_gtmOnSuccess);
                var c, d, e, f;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, b.vtp_enableCookieFlagsFeature && (f = b.vtp_cookieFlags));
                var g = {
                    prefix: e,
                    path: c,
                    domain: d,
                    flags: f
                };
                b.vtp_enableCrossDomainFeature && (b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming || (b.vtp_enableCrossDomain ||
                    Lh()) && ei(a, g));
                bi(g);
                hi(["aw", "dc"], g);
                vi(g);
                var k = e;
                if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                    var l = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    gi(a, l, b.vtp_urlPosition, !!b.vtp_formDecoration, k)
                }
                var n = Pp(M.R);
                zl({
                    oe: !1,
                    Ea: void 0 != n && !1 !== n,
                    nb: g,
                    pd: !0
                });
                b.vtp_enableUrlPassthrough && ji(["aw", "dc", "gb"])
            })
        }();
    Z.g.aev = ["google"],
        function() {
            function a(t, r, v) {
                var x = t || Ff(r, "gtm");
                if (x) return x[v]
            }

            function b(t, r, v, x, z) {
                z || (z = "element");
                var w = r + "." + v,
                    y;
                if (p.hasOwnProperty(w)) y = p[w];
                else {
                    var A = a(t, r, z);
                    if (A && (y = x(A), p[w] = y, q.push(w), 35 < q.length)) {
                        var C = q.shift();
                        delete p[C]
                    }
                }
                return y
            }

            function c(t, r, v, x) {
                var z = a(t, r, u[v]);
                return void 0 !== z ? z : x
            }

            function d(t, r) {
                if (!t) return !1;
                var v = e(Mp());
                ua(r) || (r = String(r || "").replace(/\s+/g, "").split(","));
                for (var x = [v], z = 0; z < r.length; z++) {
                    var w = r[z];
                    if (w.hasOwnProperty("is_regex"))
                        if (w.is_regex) try {
                            w =
                                new RegExp(w.domain)
                        } catch (A) {
                            continue
                        } else w = w.domain;
                    if (w instanceof RegExp) {
                        if (w.test(t)) return !1
                    } else {
                        var y = w;
                        if (0 != y.length) {
                            if (0 <= e(t).indexOf(y)) return !1;
                            x.push(e(y))
                        }
                    }
                }
                return !xq(t, x)
            }

            function e(t) {
                n.test(t) || (t = "http://" + t);
                return Xf(Zf(t), "HOST", !0)
            }

            function f(t, r, v, x) {
                switch (t) {
                    case "SUBMIT_TEXT":
                        return b(r, v, "FORM." + t, g, "formSubmitElement") || x;
                    case "LENGTH":
                        var z = b(r, v, "FORM." + t, k);
                        return void 0 === z ? x : z;
                    case "INTERACTED_FIELD_ID":
                        return l(r, v, "id", x);
                    case "INTERACTED_FIELD_NAME":
                        return l(r,
                            v, "name", x);
                    case "INTERACTED_FIELD_TYPE":
                        return l(r, v, "type", x);
                    case "INTERACTED_FIELD_POSITION":
                        var w = a(r, v, "interactedFormFieldPosition");
                        return void 0 === w ? x : w;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = a(r, v, "interactSequenceNumber");
                        return void 0 === y ? x : y;
                    default:
                        return x
                }
            }

            function g(t) {
                switch (t.tagName.toLowerCase()) {
                    case "input":
                        return Fb(t, "value");
                    case "button":
                        return Gb(t);
                    default:
                        return null
                }
            }

            function k(t) {
                if ("form" === t.tagName.toLowerCase() && t.elements) {
                    for (var r = 0, v = 0; v < t.elements.length; v++) po(t.elements[v]) &&
                        r++;
                    return r
                }
            }

            function l(t, r, v, x) {
                var z = a(t, r, "interactedFormField");
                return z && Fb(z, v) || x
            }
            var n = /^https?:\/\//i,
                p = {},
                q = [],
                u = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(t) {
                Z.__aev = t;
                Z.__aev.h = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0
            })(function(t) {
                var r = t.vtp_gtmEventId,
                    v = t.vtp_defaultValue,
                    x = t.vtp_varType,
                    z;
                t.vtp_gtmCachedValues && (z = t.vtp_gtmCachedValues.gtm);
                switch (x) {
                    case "TAG_NAME":
                        var w = a(z, r, "element");
                        return w && w.tagName || v;
                    case "TEXT":
                        return b(z, r, x, Gb) || v;
                    case "URL":
                        var y;
                        a: {
                            var A = String(a(z, r, "elementUrl") || v || ""),
                                C = Zf(A),
                                F = String(t.vtp_component || "URL");
                            switch (F) {
                                case "URL":
                                    y = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    y = d(A, t.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = Xf(C, F, t.vtp_stripWww, t.vtp_defaultPages, t.vtp_queryKey)
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var D;
                        if (void 0 === t.vtp_attribute) D = c(z, r, x, v);
                        else {
                            var E = t.vtp_attribute,
                                O = a(z, r, "element");
                            D = O && Fb(O, E) || v || ""
                        }
                        return D;
                    case "MD":
                        var K = t.vtp_mdValue,
                            L = b(z, r, "MD", Fp);
                        return K && L ? Ip(L, K) || v : L || v;
                    case "FORM":
                        return f(String(t.vtp_component || "SUBMIT_TEXT"), z, r, v);
                    default:
                        var N = c(z, r, x, v);
                        Yp(N, "aev", t.vtp_gtmEventId);
                        return N
                }
            })
        }();

    Z.g.gas = ["google"],
        function() {
            (function(a) {
                Z.__gas = a;
                Z.__gas.h = "gas";
                Z.__gas.isVendorTemplate = !0;
                Z.__gas.priorityOverride = 0
            })(function(a) {
                var b = H(a),
                    c = b;
                c[Tb.lb] = null;
                c[Tb.Ch] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();

    Z.g.awct = ["google"],
        function() {
            var a = !1;
            var b = !1,
                c = [],
                d = function(k) {
                    var l = U("google_trackConversion"),
                        n = k.gtm_onFailure;
                    "function" == typeof l ? l(k) || n() : n()
                },
                e = function() {
                    for (; 0 < c.length;) d(c.shift())
                },
                f = function() {
                    return function() {
                        e();
                        b = !1
                    }
                },
                g = function() {
                    return function() {
                        e();
                        c = {
                            push: d
                        };
                    }
                };
            (function(k) {
                Z.__awct = k;
                Z.__awct.h = "awct";
                Z.__awct.isVendorTemplate = !0;
                Z.__awct.priorityOverride = 0
            })(function(k) {
                function l(S) {
                    E.google_gtm_experiments = E.google_gtm_experiments || {};
                    E.google_gtm_experiments[S] = !0
                }

                function n(S, W, ca) {
                    return "DATA_LAYER" === S ? Pp(ca) : k[W]
                }

                function p() {
                    J("gdpr_consent", rl()), J("gdpr", tl());
                }

                function q() {
                    if (hg(k.vtp_conversionId)) {
                        var S = h(),
                            W = ng();
                        if (0 !== W.elements.length) {
                            for (var ca = [], la = [], Ba = 0; Ba < W.elements.length; ++Ba) {
                                var Ja = W.elements[Ba];
                                ca.push(Ja.querySelector);
                                la.push(og(Ja))
                            }
                            var jd = h();
                            J("ec_sel", ca.join(","));
                            J("ec_meta", la.join(","));
                            J("ec_lat", String(jd - S));
                            J("ec_s", W.status)
                        }
                    }
                }

                function u() {
                    if (k.vtp_enableEnhancedConversion) {
                        var S;
                        void 0 === k.vtp_dataSource ? S = k.vtp_cssProvidedEnhancedConversionValue ||
                            k.vtp_enhancedConversionObject : "DATA_OBJECT" === k.vtp_dataSource ? S = k.vtp_enhancedConversionObject : "INDIVIDUAL_FIELDS" === k.vtp_dataSource && (S = k.vtp_cssProvidedEnhancedConversionValue);
                        if (S) return {
                            enhanced_conversions_mode: "manual",
                            enhanced_conversions_manual_var: S
                        }
                    }
                }

                function t(S) {
                    var W = [];
                    if (S) {
                        q();
                        if (r) {
                            var ca = {};
                            k.vtp_conversionCookiePrefix && (ca.prefix = k.vtp_conversionCookiePrefix);
                            ah(ca);
                            J("auid", Yg[Zg(ca.prefix)])
                        }
                    }
                    if ((k.vtp_enableEnhancedConversions || k.vtp_enableEnhancedConversion) && S) {
                        var Ba = zi(u());
                        Ba && W.push(Ba.then(function(Ja) {
                            J("em", Ja.vc);
                            J("ec_mode", Ja.se)
                        }))
                    }
                    if (W.length) try {
                        Promise.all(W).then(function() {
                            c.push(E)
                        });
                        return
                    } catch (Ja) {}
                    c.push(E)
                }
                var r = !k.hasOwnProperty("vtp_enableConversionLinker") ||
                    !!k.vtp_enableConversionLinker,
                    v = !!k.vtp_enableEnhancedConversions || !!k.vtp_enableEnhancedConversion;
                if (a) {} else {
                    Zi();
                    var E = {
                            google_basket_transaction_type: "purchase",
                            google_conversion_domain: "",
                            google_conversion_id: k.vtp_conversionId,
                            google_conversion_label: k.vtp_conversionLabel,
                            google_conversion_value: k.vtp_conversionValue || 0,
                            google_remarketing_only: !1,
                            onload_callback: k.vtp_gtmOnSuccess,
                            gtm_onFailure: k.vtp_gtmOnFailure,
                            google_gtm: Ok()
                        },
                        O = Ei();
                    O && l("apcm");
                    if (!O) {
                        l("capi");
                    }
                    k.vtp_rdp && (E.google_restricted_data_processing = !0);
                    void 0 != Pp(M.R) && !1 !== Pp(M.R) && (E.google_gtm_url_processor = function(S) {
                        return S = Ai(S)
                    });
                    var K = function(S) {
                            return function(W, ca, la) {
                                var Ba = n(S, ca, la);
                                Ba && (E[W] = Ba)
                            }
                        },
                        L = K("JSON");
                    L("google_conversion_currency", "vtp_currencyCode");
                    L("google_conversion_order_id", "vtp_orderId");
                    k.vtp_enableProductReporting && (L =
                        K(k.vtp_productReportingDataSource), L("google_conversion_merchant_id", "vtp_awMerchantId", "aw_merchant_id"), L("google_basket_feed_country", "vtp_awFeedCountry", "aw_feed_country"), L("google_basket_feed_language", "vtp_awFeedLanguage", "aw_feed_language"), L("google_basket_discount", "vtp_discount", "discount"), L("google_conversion_items", "vtp_items", "items"), E.google_conversion_items && E.google_conversion_items.map && (E.google_conversion_items = E.google_conversion_items.map(function(S) {
                            return {
                                value: S.price,
                                quantity: S.quantity,
                                item_id: S.id
                            }
                        })));
                    var N = function(S, W) {
                            (E.google_additional_params = E.google_additional_params || {})[S] = W
                        },
                        J = function(S, W) {
                            void 0 !== W && ((E.google_additional_conversion_params = E.google_additional_conversion_params || {})[S] = W)
                        },
                        I = function(S) {
                            return function(W, ca, la, Ba) {
                                var Ja = n(S, ca, la);
                                Ba(Ja) && J(W, Ja)
                            }
                        };
                    var V = Pp("developer_id"),
                        T = Wa(Rb(V) ? V : {});
                    T && J("did", T);
                    (function() {
                        if (!k.vtp_enableShippingData) return;
                        J("delopc", k.vtp_deliveryPostalCode);
                        J("oedeld", k.vtp_estimatedDeliveryDate);
                        J("delc", k.vtp_deliveryCountry);
                        J("shf", k.vtp_shippingFee);
                        if (k.vtp_enableProductReporting) {
                            var S = n(k.vtp_productReportingDataSource, "vtp_items", "items");
                            J("iedeld", Di(S))
                        }
                    })();
                    k.vtp_transportUrl && (E.google_transport_url = k.vtp_transportUrl);
                    var X = Hk(k.vtp_transportUrl, "/pagead/conversion_async.js");
                    X || (X = Ci() ? "https://www.google.com/pagead/conversion_async.js" :
                        "//www.googleadservices.com/pagead/conversion_async.js");
                    k.vtp_enableNewCustomerReporting && (L = I(k.vtp_newCustomerReportingDataSource), L("vdnc", "vtp_awNewCustomer", "new_customer", function(S) {
                        return void 0 != S && "" !== S
                    }), L("vdltv", "vtp_awCustomerLTV", "customer_lifetime_value", function(S) {
                        return void 0 != S && "" !== S
                    }));
                    r ? (k.vtp_conversionCookiePrefix && (E.google_gcl_cookie_prefix = k.vtp_conversionCookiePrefix), E.google_read_gcl_cookie_opt_out = !1) : E.google_read_gcl_cookie_opt_out = !0;
                    "1" === Eh(!1)._up && J("gtm_up",
                        "1");
                    p();
                    (function() {})();
                    (function() {
                        var S = !1;
                        !Yd() || S ? t(!0) : me(function() {
                            p();
                            var W = ie(M.C),
                                ca = void 0 != Pp(M.R) && !1 !== Pp(M.R),
                                la = !1;
                            la = !0;
                            k.vtp_transportUrl || W || !ca && !la || (E.google_transport_url = "https://pagead2.googlesyndication.com/");
                            J("gcs", je());
                            Zd() && J("gcd", ke());
                            t(W);
                            W || le(function() {
                                E = H(E);
                                p();
                                !k.vtp_transportUrl && E.google_transport_url &&
                                    delete E.google_transport_url;
                                J("gcs", je());
                                Zd() && J("gcd", ke());
                                J("gcu", "1");
                                t(!0)
                            }, M.C)
                        }, [M.C])
                    })();
                    b || (b = !0, R(X, g(), f(X)))
                }
            })
        }();
    Z.g.remm = ["google"],
        function() {
            (function(a) {
                Z.__remm = a;
                Z.__remm.h = "remm";
                Z.__remm.isVendorTemplate = !0;
                Z.__remm.priorityOverride = 0
            })(function(a) {
                for (var b = a.vtp_input, c = a.vtp_map || [], d = a.vtp_fullMatch, e = a.vtp_ignoreCase ? "gi" : "g", f = a.vtp_defaultValue, g = 0; g < c.length; g++) {
                    var k = c[g].key || "";
                    d && (k = "^" + k + "$");
                    var l = new RegExp(k, e);
                    if (l.test(b)) {
                        var n = c[g].value;
                        a.vtp_replaceAfterMatch && (n = String(b).replace(l, n));
                        f = n;
                        break
                    }
                }
                Yp(f, "remm", a.vtp_gtmEventId);
                return f
            })
        }();



    Z.g.smm = ["google"],
        function() {
            (function(a) {
                Z.__smm = a;
                Z.__smm.h = "smm";
                Z.__smm.isVendorTemplate = !0;
                Z.__smm.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_input,
                    c = yq(a.vtp_map, "key", "value") || {},
                    d = c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue;
                Yp(d, "smm", a.vtp_gtmEventId);
                return d
            })
        }();

    Z.g.hid = ["google"],
        function() {
            (function(a) {
                Z.__hid = a;
                Z.__hid.h = "hid";
                Z.__hid.isVendorTemplate = !0;
                Z.__hid.priorityOverride = 0
            })(function() {
                return wp.Wc
            })
        }();
    Z.g.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var k = e.shift(),
                                l = a(d, e, f, g);
                            if ("SCRIPT" == String(k.nodeName).toUpperCase() && "text/gtmscript" == k.type) {
                                var n = B.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = k.id;
                                n.text = k.text || k.textContent || k.innerHTML || "";
                                k.charset && (n.charset = k.charset);
                                var p = k.getAttribute("data-gtmsrc");
                                p && (n.src = p, xb(n, l));
                                d.insertBefore(n, null);
                                p || l()
                            } else if (k.innerHTML && 0 <= k.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var q = []; k.firstChild;) q.push(k.removeChild(k.firstChild));
                                d.insertBefore(k, null);
                                a(k, q, l, g)()
                            } else d.insertBefore(k, null), l()
                        } else f()
                    } catch (u) {
                        G(g)
                    }
                }
            }
            var c = function(d) {
                if (B.body) {
                    var e =
                        d.vtp_gtmOnFailure,
                        f = Zp(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        g = f.vi,
                        k = f.onSuccess;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? b(g, k, e) : a(B.body, Hb(g), k, e)()
                } else Kp(function() {
                        c(d)
                    },
                    200)
            };
            Z.__html = c;
            Z.__html.h = "html";
            Z.__html.isVendorTemplate = !0;
            Z.__html.priorityOverride = 0
        }();








    Z.g.lcl = [],
        function() {
            function a() {
                var c = U("document"),
                    d = 0,
                    e = function(f) {
                        var g = f.target;
                        if (g && 3 !== f.which && !(f.xi || f.timeStamp && f.timeStamp === d)) {
                            d = f.timeStamp;
                            g = Jb(g, ["a", "area"], 100);
                            if (!g) return f.returnValue;
                            var k = f.defaultPrevented || !1 === f.returnValue,
                                l = mo("lcl", k ? "nv.mwt" : "mwt", 0),
                                n;
                            n = k ? mo("lcl", "nv.ids", []) : mo("lcl", "ids", []);
                            if (n.length) {
                                var p = io(g, "gtm.linkClick", n);
                                if (b(f, g, c) && !k && l && g.href) {
                                    var q = !!wa(String(Lb(g, "rel") || "").split(" "), function(v) {
                                        return "noreferrer" === v.toLowerCase()
                                    });
                                    q && Bd(36);
                                    var u = U((Lb(g, "target") || "_self").substring(1)),
                                        t = !0,
                                        r = pp(function() {
                                            var v;
                                            if (v = t && u) {
                                                var x;
                                                a: if (q) {
                                                    var z;
                                                    try {
                                                        z = new MouseEvent(f.type, {
                                                            bubbles: !0
                                                        })
                                                    } catch (w) {
                                                        if (!c.createEvent) {
                                                            x = !1;
                                                            break a
                                                        }
                                                        z = c.createEvent("MouseEvents");
                                                        z.initEvent(f.type, !0, !0)
                                                    }
                                                    z.xi = !0;
                                                    f.target.dispatchEvent(z);
                                                    x = !0
                                                } else x = !1;
                                                v = !x
                                            }
                                            v && (u.location.href = Lb(g, "href"))
                                        }, l);
                                    if (Qp(p, r, l)) t = !1;
                                    else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                                } else Qp(p, function() {}, l || 2E3);
                                return !0
                            }
                        }
                    };
                Db(c, "click", e, !1);
                Db(c, "auxclick",
                    e, !1)
            }

            function b(c, d, e) {
                if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
                var f = Lb(d, "href"),
                    g = f.indexOf("#"),
                    k = Lb(d, "target");
                if (k && "_self" !== k && "_parent" !== k && "_top" !== k || 0 === g) return !1;
                if (0 < g) {
                    var l = Op(f),
                        n = Op(e.location);
                    return l !== n
                }
                return !0
            }(function(c) {
                Z.__lcl = c;
                Z.__lcl.h = "lcl";
                Z.__lcl.isVendorTemplate = !0;
                Z.__lcl.priorityOverride = 0
            })(function(c) {
                var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                    e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
                    f = Number(c.vtp_waitForTagsTimeout);
                if (!f || 0 >= f) f = 2E3;
                var g = c.vtp_uniqueTriggerId || "0";
                if (d) {
                    var k = function(n) {
                        return Math.max(f, n)
                    };
                    lo("lcl", "mwt", k, 0);
                    e || lo("lcl", "nv.mwt", k, 0)
                }
                var l = function(n) {
                    n.push(g);
                    return n
                };
                lo("lcl", "ids", l, []);
                e || lo("lcl", "nv.ids", l, []);
                Vp("lcl") || (a(), Wp("lcl"));
                G(c.vtp_gtmOnSuccess)
            })
        }();
    var zt = {};
    zt.macro = function(a) {
        if (wp.ie.hasOwnProperty(a)) return wp.ie[a]
    }, zt.onHtmlSuccess = wp.Vf(!0), zt.onHtmlFailure = wp.Vf(!1);
    zt.dataLayer = Af;
    zt.callback = function(a) {
        qf.hasOwnProperty(a) && ra(qf[a]) && qf[a]();
        delete qf[a]
    };
    zt.bootstrap = 0;
    zt._spx = !1;

    function At() {
        P[ef.I] = zt;
        Ra(rf, Z.g);
        Hc = Hc || wp;
        Ic = Tc
    }

    function Bt() {
        var a = !1;
        a && $i("INIT");
        Gd().o();
        P = m.google_tag_manager = m.google_tag_manager || {};
        ql();
        Nh.enable_gbraid_cookie_write = !0;
        var b = !!P[ef.I];
        if (b) {
            var c = P.zones;
            c && c.unregisterChild(ef.I);
        } else {
            for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) Ac.push(e[f]);
            for (var g = d.tags || [], k = 0; k < g.length; k++) Dc.push(g[k]);
            for (var l = d.predicates || [], n = 0; n < l.length; n++) Cc.push(l[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var u = p[q], t = {}, r = 0; r < u.length; r++) t[u[r][0]] = Array.prototype.slice.call(u[r], 1);
                Bc.push(t)
            }
            Fc = Z;
            Gc = Eo;
            At();
            vp();
            Mi = !1;
            Ni = 0;
            if ("interactive" == B.readyState && !B.createEventObject || "complete" == B.readyState) Pi();
            else {
                Db(B, "DOMContentLoaded", Pi);
                Db(B, "readystatechange", Pi);
                if (B.createEventObject && B.documentElement.doScroll) {
                    var v = !0;
                    try {
                        v = !m.frameElement
                    } catch (A) {}
                    v &&
                        Qi()
                }
                Db(m, "load", Pi)
            }
            wo = !1;
            "complete" === B.readyState ? yo() : Db(m, "load", yo);
            Wj && m.setInterval(Qj, 864E5); of = (new Date).getTime();
            if (a) {
                var y = aj("INIT");
            }
        }
    }
    (function(a) {
        function b(t) {
            if (null == t || 0 === t.length) return !1;
            var r = Number(t),
                v = h();
            return r < v + 3E5 && r > v - 9E5
        }
        if (!m["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (B.referrer) {
                var d = Zf(B.referrer);
                c = "cct.google" === Wf(d, "host")
            }
            if (!c) {
                var e = Ag("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (m["__TAGGY_INSTALLED"] = !0, zb("https://cct.google/taggy/agent.js"))
        }
        var g = function(t) {
                var r = "GTM",
                    v = "GTM";
                var x = m["google.tagmanager.debugui2.queue"];
                x || (x = [], m["google.tagmanager.debugui2.queue"] = x, zb("https://" + ef.xd + "/debug/bootstrap?id=" + ef.I + "&src=" + v +
                    "&cond=" + t + "&gtm=" + Ok()));
                var z = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: ub,
                        containerProduct: r,
                        debug: !1,
                        id: ef.I
                    }
                };
                z.data.resume = function() {
                    a()
                };
                ef.Pg && (z.data.initialPublish = !0);
                x.push(z)
            },
            k = void 0,
            l = Xf(m.location, "query", !1, void 0, "gtm_debug"),
            n = !0;
        n = !1;
        n && "x" === l && (k = 1);
        !k && b(l) && (k = 2);
        if (!k && B.referrer) {
            var p = Zf(B.referrer);
            "tagassistant.google.com" ===
            Wf(p, "host") && (k = 3)
        }
        if (!k) {
            var q = Ag("__TAG_ASSISTANT");
            q.length && q[0].length && (k = 4)
        }
        if (!k && B.documentElement.hasAttribute("data-tag-assistant-present")) {
            k = 5;
            var u = B.documentElement.getAttribute("data-tag-assistant-present");
            k = b(u) ? 5 : void 0;
        }
        k && ub ? g(k) : a()
    })(Bt);

})()