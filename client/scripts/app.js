// YOUR CODE HERE:
// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };


var app = {
  server: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
  init: function() {

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
        $(#rooms).append("dasdasdasd")








        app.renderMessage(data.results[0]);
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
    console.log(message);
   $('#chats').append("<p>" + "Name: " + message.username + "message: " + message.text + "</p>");
  },
  renderRoom: function(room) {
   $('#roomSelect').append("<p>" + room + "</p>");
  },

  handleSubmit: function() {

  }
}
app.init()

