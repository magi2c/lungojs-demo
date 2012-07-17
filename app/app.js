var App = (function(lng, undefined) {

    //Define your LungoJS Application Instance
    lng.App.init({
        name: 'Camins',
        version: '1.1'
    });
    

    return {

    };

})(LUNGO);

// ToDo buscar geo actual
var _from = { latitude: 41.251998, longitude:  1.859241 };
var _to = { latitude: 41.2621, longitude:  1.8322  };


LUNGO.Sugar.GMap.init({
    el: '#map',
    zoom: 13,
    //type: 'HYBRID',
    center: _from
});



    
    