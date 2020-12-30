var zomato = require('zomato');

var client = zomato.createClient({
    userKey: '85814b0e8e640d98c4e1452f970dd480', 
  });

  client.getCategories(null, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});

client.getCities({
    q:"New Delhi", //query by city name
    lat:"28.613939", //latitude
    lon:"77.209021", //longitude
    city_ids:"1,2,3", //comma separated city_ids value
    count:"2" // number of maximum result to display
    }, function(err, result){
        if(!err){
          console.log(result);
        }else {
          console.log(err);
        }
    });



    client.getCollections({
        city_id:"1", //id of the city for which collections are needed
        lat:"28.613939", //latitude
        lon:"77.209021", //longitude
        count:"2" // number of maximum result to display
        }, function(err, result){
            if(!err){
              console.log(result);
            }else {
              console.log(err);
            }
        });


        client.getEstablishments({
            city_id:"1", //id of the city for which collections are needed
            lat:"28.613939", //latitude
            lon:"77.209021" //longitude
            }, function(err, result){
                if(!err){
                  console.log(result);
                }else {
                  console.log(err);
                }
            });


            client.getGeocode({
                lat:"28.613939", //latitude
                lon:"77.209021" //longitude
                }, function(err, result){
                    if(!err){
                      console.log(result);
                    }else {
                      console.log(err);
                    }
                });


                client.getLocationDetails({
                    entity_id:"36932", //location id obtained from locations api
                    entity_type:"group" //location type obtained from locations api
                    }, function(err, result){
                        if(!err){
                          console.log(result);
                        }else {
                          console.log(err);
                        }
                    });

                    client.getLocations({
                        query:"New Delhi", // suggestion for location name
                        lat:"28.613939", //latitude
                        lon:"77.209021", //longitude
                        count:"2" // number of maximum result to fetch
                        }, function(err, result){
                            if(!err){
                              console.log(result);
                            }else {
                              console.log(err);
                            }
                        });


                        client.getDailyMenu({
                            res_id:"9186" // id of restaurant whose details are requested
                            }, function(err, result){
                                if(!err){
                                  console.log(result);
                                }else {
                                  console.log(err);
                                }
                            });

                            client.getRestaurant({
                                res_id:"9186" // id of restaurant whose details are requested
                                }, function(err, result){
                                    if(!err){
                                      console.log(result);
                                    }else {
                                      console.log(err);
                                    }
                                });


                                client.getReviews({
                                    res_id:"9186" , // id of restaurant whose details are requested
                                    start : "0" , //fetch results after this offset (Integer)
                                    count: "5" , //max number of results to retrieve
                                    
                                    }, function(err, result){
                                        if(!err){
                                          console.log(result);
                                        }else {
                                          console.log(err);
                                        }
                                    });


                                    client.search({
                                        entity_id:"36932",//location id
                                        entity_type:"group", // location type (city,subzone,zone , landmark, metro,group)
                                        q:"Cafe" ,//Search Keyword
                                        lat:"28.613939", //latitude
                                        lon:"77.209021", //longitude
                                        count:"2", // number of maximum result to display
                                        start:"1" , //fetch results after offset
                                        radius:"10000" , //radius around (lat,lon); to define search area, defined in meters(M)
                                        cuisines : "3,7" , //list of cuisine id's separated by comma
                                        establishment_type : "" , //estblishment id obtained from establishments call
                                        collection_id : "29" , //collection id obtained from collections call
                                        category :  "9" ,//	category ids obtained from categories call
                                        sort : " cost,rating,real_distance" ,//choose any one out of these available choices
                                        order: "asc" //	used with 'sort' parameter to define ascending(asc )/ descending(desc)
                                        
                                        }, function(err, result){
                                            if(!err){
                                              console.log(result);
                                            }else {
                                              console.log(err);
                                            }
                                        });