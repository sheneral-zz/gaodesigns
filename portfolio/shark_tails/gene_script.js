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

var map={"1":{"picture":'gene-happy.png',"text":"Great! Firstly, what's your major?","points":4,"buttons":"set1"},
         "2":{"picture":'gene-sad.png',"text":"What's up with you?","points":-5},
         "3":{"picture":'gene-neutral.png',"text":"It will only take a few moments. What's your major?","points":2, "buttons":"set1"},
         "4":{"picture":'gene-sad.png',"text":"Animation is a nuisance. Not even worth studying. What's your favorite movie?.","points":-1, "buttons":"set2"},
         "5":{"picture":'gene-neutral.png',"text":"I must admit, I don’t have sufficient knowledge of business to have an opinion of it. What's your favorite movie?","points":1, "buttons":"set2"},
         "6":{"picture":'gene-happy.png',"text":"I was top student in marine biology - as well as everything else but I enjoyed that course in particular. What's your favorite movie?","points":2, "buttons":"set2"},
         "7":{"picture":'gene-happy.png',"text":"I’m usually very critical of films but that one is a favorite of mine as well. What's your favorite video game?","points":2, "buttons":"set3"},
         "8":{"picture":'gene-neutral.png',"text":"That wouldn’t be on my top 372 films but I have seen many more inferior works. What's your favorite video game?","points":1, "buttons":"set3"},
         "9":{"picture":'gene-sad.png',"text":"I can't agree on watching a film without any critical analysis. What's your favorite video game?","points":-1, "buttons":"set3"},
         "10":{"picture":'gene-happy.png',"text":"That’s a well-developed story and the graphics are stunning. What's your favorite food?","points":2, "buttons":"set4"},
         "11":{"picture":'gene-neutral.png',"text":"I see. There are much more productive hobbies. What's your favorite food?","points":1, "buttons":"set4"},
         "12":{"picture":'gene-sad.png',"text":" I caught so many glitches on that one. What's your favorite food?","points":-1, "buttons":"set4"},
         "13":{"picture":'gene-sad.png',"text":"That has very little nutritional value","points":-1},
         "14":{"picture":'gene-happy.png',"text":"I’ve also found that provides the best nutrients.","points":2},
         "15":{"picture":'gene-neutral.png',"text":"At least you’re not a seaweed junky.","points":1}
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
  endGame(map[state]["text"],points);
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

function endGame(txt,p) {
    clearButtons();
    if (p >= 10 && p <= 14) {
        goodEnding(txt);
    } else if (p >= 5 && p < 10) {
        neutralEnding(txt);
    } else {
        badEnding();
    }

}

function clearButtons(){
  document.getElementById("button1").innerHTML = "";
  document.getElementById("button2").innerHTML = "";
  document.getElementById("button3").innerHTML = "";
}

function goodEnding(txt) {
    document.getElementById("text").innerHTML = "<p>"+txt+"</p><p><p>It appears we have many compatible interests. I would like to continue this conversation sometime, maybe over some seal tea.</p></p>";
    document.getElementById("image").innerHTML = "<img src='gene-happy.png'>";
    document.body.style.background = 'url("simmons-love.png") no-repeat center center';
}

function neutralEnding() {
    document.getElementById("text").innerHTML = "<p>I believe I’ve received sufficient data to complete your profile. Enjoy your time at Simmons Academy.</p>";
    document.getElementById("image").innerHTML = "<img src='gene-happy.png'>";
}

function badEnding() {
    clearButtons();
    document.getElementById("text").innerHTML = "<p>You GOT EATEN!!!!!!!!!</p>";
    document.getElementById("image").innerHTML = "";
    document.body.style.background = 'url("mouth.jpg") no-repeat';
}
