

  // Referencia a Firebase
  var messagesRef = new Firebase('https://an22sj9l915.firebaseio-demo.com/');

  // Registrar los elementos
  var messageField = $('#messageInput');
  var nameField = $('#nameInput');
  var messageList = $('#example-messages');

  // Esperar a que el usuario pulse una tecla
  messageField.keypress(function (e) {
    if (e.keyCode == 13) {
      //Valores del campo
      var username = nameField.val();
      var message = messageField.val();

      //Guardar los datos que mete el usuario en Firebase
      messagesRef.push({name:username, text:message});
      messageField.val('');
    }
  });

  // AÃ±ade una lÃ­nea por cada mensaje
  messagesRef.limitToLast(10).on('child_added', function (snapshot) {
    //Obtener datos
    var data = snapshot.val();
    var username = data.name || "anonymous";
    var message = data.text;

    //Crea los elementos del mensaje
    var messageElement = $("<li>");
    var nameElement = $("<strong class='example-chat-username'></strong>")
    nameElement.text(username);
    messageElement.text(message).prepend(nameElement);

    //AÃ±ade el mensaje
    messageList.append(messageElement)

    //Moverse a travÃ©s de la lista de mensajes
    messageList[0].scrollTop = messageList[0].scrollHeight;
  });
