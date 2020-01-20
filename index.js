// Code your solutions in this file

function writeCards(names, event_name) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${name[i]}, for the wonderful surprise ${event_name[i]} gift!`);
  }
  return names;
}
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}

    it( 'returns an array of thank you messages for each name provided to the function', () => {
      expect( writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' ) )
        .to.deep.eq( [ 'Thank you, Lisa, for the wonderful surprise gift!', 'Thank you, Kaitlin, for the wonderful surprise gift!', 'Thank you, Jan, for the wonderful surprise gift!' ] );