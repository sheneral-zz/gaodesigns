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

var map={"1":{"picture":'chad-happy.png',"text":"Great! What's your major?","points":4,"buttons":"set1"},
         "2":{"picture":'chad-angry.png',"text":"What's up with you?","points":-5},
         "3":{"picture":'chad-neutral.png',"text":"Alright, what's your major?","points":2, "buttons":"set1"},
         "4":{"picture":'chad-neutral.png',"text":"I have a hard time finding that subject interesting. What's your favorite movie?","points":1, "buttons":"set2"},
         "5":{"picture":'chad-happy.png',"text":"Same here.  What's your favorite movie?","points":2, "buttons":"set2"},
         "6":{"picture":'chad-angry.png',"text":"Oh, I see...  What's your favorite movie?","points":-1, "buttons":"set2"},
         "7":{"picture":'chad-angry.png',"text":"You have bad taste in films.  What's your favorite video games?","points":-1, "buttons":"set3"},
         "8":{"picture":'chad-happy.png',"text":"I enjoyed that one. What's your favorite video games?","points":2, "buttons":"set3"},
         "9":{"picture":'chad-neutral.png',"text":"I’ve seen some bad ones. What's your favorite video games?","points":1, "buttons":"set3"},
         "10":{"picture":'chad-angry.png',"text":"I heard some bad reviews about that. What's your favorite food?","points":-1, "buttons":"set4"},
         "11":{"picture":'chad-happy.png',"text":" I agree, I don’t play either. What's your favorite food?","points":2, "buttons":"set4"},
         "12":{"picture":'chad-neutral.png',"text":"I heard that got good reviews. Never played it though. What's your favorite food?","points":1, "buttons":"set4"},
         "13":{"picture":'chad-happy.png',"text":" Same, I like my food to put up a fight.","points":2},
         "14":{"picture":'chad-angry.png',"text":"Not worth the energy.","points":-1},
         "15":{"picture":'chad-neutral.png',"text":"Food is food, I guess.","points":1}
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
    document.getElementById("text").innerHTML = "<p>We have some interests in common. I wonder… Maybe we can grab coffee and/orca juice sometime.</p>";
    document.getElementById("image").innerHTML = "<img src='chad-happy.png'>";
    document.body.style.background = 'url("simmons-love.png") no-repeat center center';

}

function neutralEnding() {
    document.getElementById("text").innerHTML = "<p>Well, you’ll find a club that you fit into. I’ll have my secretary contact you about that. Bye.</p>";
    document.getElementById("image").innerHTML = "<img src='chad-happy.png'>";
}

function badEnding() {
    clearButtons();
    document.getElementById("text").innerHTML = "<p>You GOT EATEN!!!!!!!!!</p>";
    document.getElementById("image").innerHTML = "";
    document.body.style.background = 'url("mouth.jpg") no-repeat';
}
