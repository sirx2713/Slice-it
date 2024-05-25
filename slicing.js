let myMessage = prompt("Enter message: ");;
characterCount = 280 - myMessage.slice(0,280).length;
alert("You have entered " + myMessage.slice(0,280) + " charactersR, you have " + characterCount + " characters left!");