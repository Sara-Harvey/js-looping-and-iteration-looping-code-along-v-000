// Code your solutions in this file

function writeCards(names, event_name) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful surprise ${event_name} gift!`);
  }
  return names;
}

function writeCards(names, event_name) {
  for (let i = 0; i < names.length; i++){
    names[i] = (`Thank you, ${names[i]}, for the wonderful ${event_name} gift!`);
  }
  return names;
}