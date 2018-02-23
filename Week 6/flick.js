(function() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var input = '';
  $("#search-btn").click(function(){
    input = document.getElementById('search').value;
    $(".row").remove();
    console.log(input);
    $.getJSON( flickerAPI, {
      tags: input,
      tagmode: "any",
      format: "json"
    })

    .done(function( data ) {
      var arr = [];
      $.each( data.items, function( i, item ) {
        arr.push( "<div class='col-sm-4'><img src='" + item.media.m + "'></div>" );
        if ( i === 17 ) {
          return false;
        }
      });

      $( "<div/>", {
        "class": "row",
        html: arr.join( "" )
      }).appendTo( "#images" );
    });
  });
})();
