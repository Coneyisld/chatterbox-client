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
      data: JSON.stringify(message),
      contentType: 'application/json',
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      success: function (data) {
      console.log('success sending', data);

      },
      error: function (data) {
      console.log('error sending', data);
      }
     });
  },
  fetch: function() {
    $.ajax({
      type: "GET",
      contentType: 'application/json',
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',

  success: function (data) {
        console.log('chatterbox: Message sent', data);
        var getRooms = function(data) {
            var result = data.results.map( el => el.roomname);
            //console.log("result", result)
            var unique = result.filter((v, i, a) => a.indexOf(v) === i).join(' ');
            //console.log("unique", unique)
            app.renderRoom(unique);
        }
        getRooms(data);
        var roomName = $('#roomSelect option:selected').text();
        //console.log(roomName);
        app.renderMessage(data);
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
    //console.log('hasOwnProperty: '+message.hasOwnProperty('result'));
    if(message.hasOwnProperty('results') === false) {
      $('#chats').append("<p></p>");

    } else {
      console.log('it rendeerMessage');
      var roomSelected = $('#roomSelect option:selected').text();
      var newArray = message.results;
      var output = newArray.filter( item => {
        return item.roomname === roomSelected
      });

     output.forEach(person => {
     $('#chats').append("<p class=`username`><span>" + "@" + person.username + "</span>: " +  person.text + "</p>");
      })
   }
  },
  renderRoom: function(room) {
    if(typeof room === "string") {
      room.split(' ').forEach(el => {
        $('#roomSelect').append(`<option value="${el}">${el}</option>`);
      })
    }

  },

  handleSubmit: function() {

  }
}

var newDropDown = function() {
  app.clearMessages();
  app.init()
}
var getInput = function() {
  //console.log('i get some input!!');
  var text = $('#message').val();
  var roomName = $('#roomSelect option:selected').text()
  var username = window.location.search.slice(10);
  $('#chats').prepend("<p><span>" + "@" + username + "</span>: " +  text + "</p>");
  $('#message').val('');
  app.send({'username':username,'roomname':roomName,'text':text});
}
app.init()

