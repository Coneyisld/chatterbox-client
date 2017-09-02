// YOUR CODE HERE:
// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };


var app = {
  server: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
  init: function() {
    // $.ajax({
    //   // This is the url you should use to communicate with the parse API server.
    //   url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
    //   type: 'POST',
    //   data: JSON.stringify(message),
    //   contentType: 'application/json',
    //   success: function (data) {
    //     console.log('chatterbox: Message sent', data);
    //     renderMessage("Hello");
    //   },
    //   error: function (data) {
    // // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    //     console.error('chatterbox: Failed to send message');
    //   }
    // });
    console.log("THISS", this)
    app.fetch();
    app.renderRoom();

  },
  send: function(message) {

    $.ajax({
      type: "POST",
       data: message
     });
  },
  fetch: function() {
    $.ajax({
      type: "GET",
      contentType: 'application/json',
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
  success: function (data) {
        console.log('chatterbox: Message sent', data);
        app.renderMessage("MESSAGE: ", data.results[0].objectId);
      },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
     });
  },


  clearMessages: function() {
   $('#chats').html('');
  },

  renderMessage: function(message) {
   $('#chats').append("<p>" + message + "</p>");
  },
  renderRoom: function(room) {
   $('#roomSelect').append("<p>" + room + "</p>");
  },

  handleSubmit: function() {

  }
}

