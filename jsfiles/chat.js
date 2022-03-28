var knowledge = {
        "name of developer":"I was developed by a programmer named Brilliant and assisted by knowledge.",
        "name of your developer":"I was developed by a programmer named Brilliant and assisted by knowledge.",
        "who is your developer":"I was developed by a programmer named Brilliant and assisted by knowledge.",
        "what is the name of  your developer":"I was developed by a programmer named Brilliant and assisted by knowledge.",
        "developed by who":"I was developed by a programmer named Brilliant and assisted by knowledge.",
        "developer name":"I was developed by a programmer named Brilliant and assisted by knowledge.",
        "developer ":"I was developed by a programmer named Brilliant and assisted by knowledge."
};

var greeting = {
        "hey":"Hi",
        "hello":"How are you doing?",
        "hi":"Hey, How are you doing?",
        "fine and you":"Doing great thanks for asking.",
        "doing great thanks for asking.":"You are welcome",
        "doing great thanks for asking":"You are welcome."
};

var gameoption = {
        "gist":"let play truth or dare or do you have anyother game  you like to play."
};

var bot_reply_end = "</h6></div></div>";
var user_reply_end = "</h6></div></div>"; 
var train = "<div class='d-grid w-75 mb-3'><button onclick='trains()' class='btn btn-outline-success'> Train Me <i class='fa fa-class'></i> </button></div>";
var errors = "I don't seem to understand what you just said will you like to train me give me a response on what to say next time. ";
var user_reply = "<div class='alkis-user-chat' style='height:auto;word-wrap:break-word;'><div class='alkis-user-chat-img'><img src='imgs/garra.jpg' alt='User Conver'></div><div class='alkis-user-chat-reply'>";
var bot_reply = "<div class='alkis-bot-chat' style='height:auto;word-wrap:break-word;'><div class='alkis-bot-chat-img'><img src='imgs/garra.jpg' alt='Alkis ChatBot'></div><div class='alkis-bot-chat-reply'><h6>";

function savetrain(){
        var typeofwords = document.getElementById('train');
        if (train.length === 0) {
                alert('Cants Save None');
        }
}

function send(){
        const said = document.querySelector(".said").value;
        var speech = new SpeechSynthesisUtterance();
        var talk = said.toLowerCase();
        if (said.length === 0) {               
                speech.lang = 'en-US';
                speech.text = "Please Write Some Words Cuz I can' be of any help if i don't know what you want.";
                speech.rate = .7;
                speech.pitch = 600;
                speech.volume = 10;
                window.speechSynthesis.speak(speech);
                document.querySelector(".said").value = '';
                document.querySelector(".text-result").innerHTML +=  bot_reply + "Please Write Some Words Cuz I can' be of any help if i don't know what you want." + bot_reply_end;
                document.querySelector(".text-result").scrollTop = document.querySelector(".text-result").scrollHeight;
        }else{
                if (talk in knowledge) {
                        speech.lang = 'en-US';
                        speech.text = knowledge[talk] ;
                        speech.rate = .7;
                        speech.pitch = 600;
                        window.speechSynthesis.speak(speech);
                        speech.volume = 10;
                        document.querySelector(".said").value = '';
                        document.querySelector(".text-result").innerHTML += user_reply + talk + user_reply_end;
                        document.querySelector(".text-result").innerHTML += bot_reply + knowledge[talk] + bot_reply_end;
                        document.querySelector(".text-result").scrollTop = document.querySelector(".text-result").scrollHeight;
                }else if (talk in greeting) {
                        speech.lang = 'en-US';
                        speech.text = greeting[talk] ;
                        speech.rate = .7;
                        speech.pitch = 600;
                        window.speechSynthesis.speak(speech);
                        speech.volume = 10;
                        document.querySelector(".said").value = '';
                        document.querySelector(".text-result").innerHTML += user_reply + talk + user_reply_end;
                        document.querySelector(".text-result").innerHTML += bot_reply + greeting[talk] + bot_reply_end;
                        document.querySelector(".text-result").scrollTop = document.querySelector(".text-result").scrollHeight;
                }else{
                        speech.lang = 'en-US';
                        speech.text = errors;
                        speech.rate = .7;
                        speech.pitch = 600;
                        speech.volume = 10;
                        window.speechSynthesis.speak(speech); 
                        document.querySelector(".said").value = '';
                        document.querySelector(".text-result").innerHTML += user_reply + talk + user_reply_end;
                        document.querySelector(".text-result").innerHTML +=  bot_reply + errors + bot_reply_end;
                        document.querySelector(".text-result").scrollTop = document.querySelector(".text-result").scrollHeight;
                }
        }
}

function trains(){
        alert('hello');
}