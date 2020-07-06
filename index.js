function writeCards( all_names, event ) {
  let cards = []
  for ( let i = 0; i < all_names.length; i++ ) {
    cards.push( `Thank you, ${all_names[i]}, for the wonderful ${event} gift!` )
  }
  return cards
}

function countDown( countdown ) {
  while ( countdown > 0 ) {
    console.log( countdown );
    countdown -= 1;
  }
  console.log( countdown );
}