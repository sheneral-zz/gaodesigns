var points = 0;

var buttonMap = {"set1":{"btn1":{"text":"Animation", "next":"4"},
                          "btn2":{"text":"Business","next":"5"},
                          "btn3":{"text":"Marine biology","next":"6"}},
                  "set2":{"btn1":{"text":"Fight Club", "next":"7"},
                          "btn2":{"text":"Spirited Away", "next":"8"},
                          "btn3":{"text":"Snowden", "next":"9"}},
                  "set3":{"btn1":{"text":"Civ 5", "next":"10"},
                          "btn2":{"text":"Call of Duty", "next":"11"},
                          "btn3":{"text":"Mario Party 7", "next":"12"}},
                  "set4":{"btn1":{"text":"Orcas", "next":"13"},
                          "btn2":{"text":"Humans", "next":"14"},
                          "btn3":{"text":"Seals", "next":"15"}}
              };

var map={"1":{"picture":'chad-happy.png',"text":"You look new, fresh meat. What's your major?","points":4,"buttons":"set1"},
         "2":{"picture":'chad-angry.png',"text":"What's up with you?","points":-5},
         "3":{"picture":'chad-neutral.png',"text":"Yeah, you. I haven't seen you before. What's your major?","points":2, "buttons":"set1"},
         "4":{"picture":'chad-neutral.png',"text":"That's cool. What's your favorite movie?","points":1, "buttons":"set2"},
         "5":{"picture":'chad-happy.png',"text":"I'm also studying business! What's your favorite movie?","points":2, "buttons":"set2"},
         "6":{"picture":'chad-angry.png',"text":"Oh...ok. What's your favorite movie?","points":-1, "buttons":"set2"},
          "7":{"picture":'chad-happy.png',"text":"Awesome! That's my favorite. What's your favorite video game?","points":2, "buttons":"set3"},
          "8":{"picture":'chad-angry.png',"text":"Oh, isn't that a kids movie? Do you have a favorite video game?","points":-1, "buttons":"set3"},
          "9":{"picture":'chad-neutral.png',"text":"Cool. What video game do you like to play?","points":1, "buttons":"set3"},
          "10":{"picture":'chad-angry.png',"text":"Never heard of that. What do you like to eat?","points":-1, "buttons":"set4"},
          "11":{"picture":'chad-happy.png',"text":"Sick. Anything you like to eat as a snack?","points":2, "buttons":"set4"},
          "12":{"picture":'chad-neutral.png',"text":"Oh nice. What's your favorite food?","points":1, "buttons":"set4"},
           "13":{"picture":'chad-happy.png',"text":"What's up with you?","points":2},
           "14":{"picture":'chad-angry.png',"text":"What's up with you?","points":-1},
           "15":{"picture":'chad-neutral.png',"text":"What's up with you?","points":1}
       };

function changeState(state){
  var newText = "<p>" + map[state]["text"] +"</p>";
  document.getElementById("text").innerHTML = newText;

  var newImg = "<img src='"+ map[state]["picture"] + "'>'";
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
    document.getElementById("text").innerHTML = "<p>You seem really interesting. Would you go out to dinner with me?</p>";
}

function neutralEnding() {
    document.getElementById("text").innerHTML = "<p>Cool, let's hang out sometime.</p>";
    document.getElementById("image").innerHTML = "<img src='chad-happy.png'>";
}

function badEnding() {
    clearButtons();
    document.getElementById("text").innerHTML = "<p>You GOT EATEN!!!!!!!!!</p>";
}
