var galleryImages = $( ".gallery_image" );
$( ".next" ).click( function() {
  var active = $( ".gallery_image.active" );
  var nextNeighbor = active.next( ".gallery_image" );
  if( nextNeighbor.length ){
    nextNeighbor.addClass( "active" );
  } else {
    $( ".gallery_image:first" ).addClass( "active" );
  }
  active.removeClass( "active" );
});

$( ".prev" ).click( function() {
  var active = $( ".gallery_image.active" );
  var prevNeighbor = active.prev( ".gallery_image" );
  if( prevNeighbor.length ){
    prevNeighbor.addClass( "active" );
  } else {
    pageImages.find( ".gallery_image:last" ).addClass( "active" );
  }
  active.removeClass( "active" );
});
