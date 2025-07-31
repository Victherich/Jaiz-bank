
// const AfricasTalking = require('africastalking');

// // TODO: Initialize Africa's Talking



// module.exports = async function sendSMS() {
    
//     // TODO: Send message

// };








// CODE 2
const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: 'atsk_655bd48e3d31523d31e1747650afcdd81d2b3dde86348f5f07bbe72dabbea51019b50a36', 
  username: 'sandbox'
});


module.exports = async function sendSMS() {
    
    // TODO: Send message
    try {
  const result=await africastalking.SMS.send({
    to: '+2347063480314', 
    message: 'Hey AT Ninja! Wassup...',
    from: 'DEWISETEST'
  });
  console.log(result);
} catch(ex) {
  console.error(ex);
} 

};