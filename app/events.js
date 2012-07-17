App.Events = (function(lng, app, undefined) {
    var makeSearch = function(){
        app.Services.getSearch(app.Data.getSearchTerm());
    }

    // makePullDown method. Calculates distance to top and container to make the pulldown.
    var makePullDown = function(){
        var pulldown_offset_top = (lng.dom("#pullDown").offset().top);
        var container_top = (lng.dom("#tweet_container").offset().top);
        if (pulldown_offset_top >= container_top && !pulldown_offset_top < container_top){
            lng.dom("#pullDown").toggleClass('loading');
            $$('.pullDownLabel').html('Actualizando ...');
            // update the request
            App.Data.setSearchTerm($$("#text_search_input").val());
            makeSearch();

        }

    };

    lng.dom('#search_button').tap(function(event) {
        if($$("#text_search_input").val() != ''){
            App.Data.setSearchTerm($$("#text_search_input").val());
            makeSearch();
        }
    })

    lng.dom('#tweet_container').on('longTap', function(){
        makePullDown();
    });



   /** maps **/

    lng.dom('#btn-clean').tap(function(event) {
        lng.Sugar.GMap.zoom(13);
        lng.Sugar.GMap.clean();
        lng.Sugar.GMap.center(_from);
    });
    
    
    lng.dom('#btn-allrouter').tap(function(event) {
        
        flightPlanCoordinates = [
          new google.maps.LatLng(41.240300, 1.810834),
          new google.maps.LatLng(41.244254, 1.810923),
          new google.maps.LatLng(41.247993, 1.812560),
          new google.maps.LatLng(41.250244, 1.813127),
          new google.maps.LatLng(41.254476, 1.819695),
          new google.maps.LatLng(41.262068, 1.830583),
          new google.maps.LatLng(41.238794, 1.854693),
          new google.maps.LatLng(41.251998, 1.859241),
          new google.maps.LatLng(41.265888, 1.845818),
          new google.maps.LatLng(41.239669, 1.810226)
       ];
        
        lng.Sugar.GMap.addPolyline(flightPlanCoordinates);
    });
    

    return {
        makeSearch:makeSearch,
        makePullDown:makePullDown
    }

})(LUNGO, App);