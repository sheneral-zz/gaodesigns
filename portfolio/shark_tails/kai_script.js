var points = 0;

var buttonMap = {"set1":{"btn1":{"text":"Animation", "next":"4"},
                          "btn2":{"text":"Business","next":"5"},
                          "btn3":{"text":"Marine biology","next":"6"}},
                  "set2":{"btn1":{"text":"Sharkshank Redemption", "next":"7"},
                          "btn2":{"text":"Jaws", "next":"8"},
                          "btn3":{"text":"I would watch most anything!", "next":"9"}},
                  "set3":{"btn1":{"text":"Civ 5", "next":"10"},
                          "btn2":{"text":"I don't game", "next":"11"},
                          "btn3":{"text":"Mario Party 7", "next":"12"}},
                  "set4":{"btn1":{"text":"Orcas", "next":"13"},
                          "btn2":{"text":"Seals", "next":"14"},
                          "btn3":{"text":"I love all food!", "next":"15"}}
              };

var map={"1":{"picture":'kai-happy.png',"text":"Great! What's your major?","points":4,"buttons":"set1"},
         "2":{"picture":'kai-angry.png',"text":"What's up with you?","points":-5},
         "3":{"picture":'kai-neutral.png',"text":"Yeah we sure will! What's your major?","points":2, "buttons":"set1"},
         "4":{"picture":'kai-happy.png',"text":"Hey! Me too! What's your favorite movie?","points":2, "buttons":"set2"},
         "5":{"picture":'kai-angry.png',"text":"Eww, how boring! What's your favorite movie?","points":-1, "buttons":"set2"},
         "6":{"picture":'kai-neutral.png',"text":"Oh really? Hmmm... What's your favorite movie?","points":1, "buttons":"set2"},
         "7":{"picture":'kai-angry.png',"text":"I fell asleep during that one. Hey, what's your favorite video game?","points":-1, "buttons":"set3"},
         "8":{"picture":'kai-neutral.png',"text":"That’s not a bad one. Hey, what's your favorite video game?","points":1, "buttons":"set3"},
         "9":{"picture":'kai-happy.png',"text":"Same! I could watch almost anything. Hey, what's your favorite video game?","points":2, "buttons":"set3"},
         "10":{"picture":'kai-neutral.png',"text":"I haven’t played that one yet. Anyways, what's your favorite food?","points":1, "buttons":"set4"},
         "11":{"picture":'kai-angry.png',"text":"What?! You don’t game?!!! Anyways, what's your favorite food?","points":-1, "buttons":"set4"},
         "12":{"picture":'kai-happy.png',"text":"Yay! That was a fun one! Anyways, what's your favorite food?","points":2, "buttons":"set4"},
         "13":{"picture":'kai-neutral.png',"text":" Totally! I’m always hungry after a polo match.","points":1},
         "14":{"picture":'kai-angry.png',"text":"Gah, that’s like a snack for me. ","points":-1},
         "15":{"picture":'kai-happy.png',"text":"Totally! I’m always hungry after a polo match.","points":2}
       };

function changeState(state){
  var newText = "<p>" + map[state]["text"] +"</p>";
  document.getElementById("text").innerHTML = newText;

  var newImg = "<img id='kai' src='"+ map[state]["picture"] + "'>'";
  document.getElementById("image").innerHTML = newImg;

  points += map[state]["points"];

  if(map[state]["buttons"]!=null){
  changeButtons(map[state]["buttons"]);
} else{
  endGame(points);
}

}

function changeButtons(set){
    var btn1_txt = buttonMap[set]["btn1"]["text"];
    var btn1_st = buttonMap[set]["btn1"]["next"];
    var newBtn1 = "<button onclick='changeState("+btn1_st+")'>"+btn1_txt+"</button>";
    document.getElementById("button1").innerHTML = newBtn1;

    var btn2_txt = buttonMap[set]["btn2"]["text"];
    var btn2_st = buttonMap[set]["btn2"]["next"];
    var newBtn2 = "<button onclick='changeState("+btn2_st+")'>"+btn2_txt+"</button>";
    document.getElementById("button2").innerHTML = newBtn2;

    var btn3_txt = buttonMap[set]["btn3"]["text"];
    var btn3_st = buttonMap[set]["btn3"]["next"];
    var newBtn3 = "<button onclick='changeState("+btn3_st+")'>"+btn3_txt+"</button>";
    document.getElementById("button3").innerHTML = newBtn3;
}

function endGame(p) {
    clearButtons();
    if (p >= 10 && p <= 14) {
        goodEnding();
    } else if (p >= 5 && p < 10) {
        neutralEnding();
    } else {
        badEnding();
    }

}

function clearButtons(){
  document.getElementById("button1").innerHTML = "";
  document.getElementById("button2").innerHTML = "";
  document.getElementById("button3").innerHTML = "";
}

function goodEnding() {
    document.getElementById("text").innerHTML = "<p>Woah! We’re like so compatible. We should date!</p>";
    document.getElementById("image").innerHTML = "<img src='kai-happy.png'>";
    document.body.style.background = 'url("simmons-love.png") no-repeat center center';
}

function neutralEnding() {
    document.getElementById("text").innerHTML = "<p>Hmmm. We don’t have much in common but I’m glad I got to meet a first year like myself. See ya around Simmons!</p>";
    document.getElementById("image").innerHTML = "<img src='kai-happy.png'>";
}

function badEnding() {
    clearButtons();
    document.getElementById("text").innerHTML = "<p>You GOT EATEN!!!!!!!!!</p>";
    document.getElementById("image").innerHTML = "";
    document.body.style.background = 'url("mouth.jpg") no-repeat';
}
