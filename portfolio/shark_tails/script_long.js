var points = 0;

var buttons1 = ["Animation","Business","Marine biology"];
var buttons2 = ["Fight Club","Spirited Away","Snowden"];

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
         "2":{"picture":'chad-angry.png',"text":"What's up with you?","points":-5, "buttons":buttonMap["set1"]}
       };

function changeState(state){
  var newText = "<p>" + map[state]["text"] +"</p>";
  document.getElementById("text").innerHTML = newText;

  var newImg = "<img src='"+ map[state]["picture"] + "'>'";
  document.getElementById("image").innerHTML = newImg;

  points += map[state][points];

  changeButtons(map[state]["buttons"]);

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


function opA1() {
    document.getElementById("text").innerHTML = "<p>You look new, fresh meat. What's your major?</p>";
    document.getElementById("image").innerHTML = "<img src='chad-happy.png'>";
    step2();
    points += 4;
}

function opB1() {
    document.getElementById("text").innerHTML = "<p>What's up with you?</p>";
    document.getElementById("image").innerHTML = "<img src='chad-angry.png'>"
    document.getElementById("button1").innerHTML = "<button onclick='badEnding()'>Uhhhh... bye</button>";
    document.getElementById("button2").innerHTML = "";
    document.getElementById("button3").innerHTML = "";

}

function opC1() {
    document.getElementById("text").innerHTML = "<p>Yeah, you. I haven't seen you before. What's your major?</p>";
    document.getElementById("image").innerHTML = "<img src='chad-neutral.png'>";
    step2();
    points += 2;
}


function step2() {
    document.getElementById("button1").innerHTML = "<button onclick='opA2()'>Animation</button>";
    document.getElementById("button2").innerHTML = "<button onclick='opB2()'>Business</button>";
    document.getElementById("button3").innerHTML = "<button onclick='opC2()'>Marine Biology</button>";
}

function opA2() {
    document.getElementById("text").innerHTML = "<p>That's cool. What's your favorite movie?</p>";
    document.getElementById("image").innerHTML = "<img src='chad-neutral.png'>";
    step3();
    points += 1;
}

function opB2() {
    document.getElementById("text").innerHTML = "<p>I'm also studying business! What's your favorite movie?</p>";
    document.getElementById("image").innerHTML = "<img src='chad-happy.png'>";
    step3();
    points += 1;
}

function opC2() {
    document.getElementById("text").innerHTML = "<p>Oh...ok. What's your favorite movie?</p>";
    document.getElementById("image").innerHTML = "<img src='chad-angry.png'>";
    step3();
    points -= 1;
}


function step3() {
    document.getElementById("button1").innerHTML = "<button onclick='opA3()'>Fight Club</button>";
    document.getElementById("button2").innerHTML = "<button onclick='opB3()'>Spirited Away</button>";
    document.getElementById("button3").innerHTML = "<button onclick='opC3()'>Snowden</button>";
}



function opA3() {
    document.getElementById("text").innerHTML = "<p>Awesome! That's my favorite. What's your favorite video game?</p>";
    document.getElementById("image").innerHTML = "<img src='chad-happy.png'>";
    step4();
    points += 2;
}

function opB3() {
    document.getElementById("text").innerHTML = "<p>Oh, isn't that a kids movie? Do you have a favorite video game?</p>";
    document.getElementById("image").innerHTML = "<img src='chad-angry.png'>";
    step4();
    points -= 1;
}

function opC3() {
    document.getElementById("text").innerHTML = "<p>Cool. What video game do you like to play?</p>";
    document.getElementById("image").innerHTML = "<img src='chad-neutral.png'>";
    step4();
    points += 1;
}

function step4() {
    document.getElementById("button1").innerHTML = "<button onclick='opA4()'>Civ 5</button>";
    document.getElementById("button2").innerHTML = "<button onclick='opB4()'>Call of Duty</button>";
    document.getElementById("button3").innerHTML = "<button onclick='opC4()'>Mario Party 7</button>";
}

function opA4() {
    document.getElementById("text").innerHTML = "<p>Never heard of that. What do you like to eat?</p>";
    document.getElementById("image").innerHTML = "<img src='chad-angry.png'>";
    step5();
    points -= 1;
}

function opB4() {
    document.getElementById("text").innerHTML = "<p>Sick. Anything you like to eat as a snack?</p>";
    document.getElementById("image").innerHTML = "<img src='chad-happy.png'>";
    step5();
    points += 2;
}

function opC4() {
    document.getElementById("text").innerHTML = "<p>Oh nice. What's your favorite food?</p>";
    document.getElementById("image").innerHTML = "<img src='chad-neutral.png'>";
    step5();
    points += 1;
}

function step5() {
    document.getElementById("button1").innerHTML = "<button onclick='opA5()'>Orcas</button>";
    document.getElementById("button2").innerHTML = "<button onclick='opB5()'>Humans</button>";
    document.getElementById("button3").innerHTML = "<button onclick='opC5()'>Seals</button>";
}

function opA5() {
    points += 2;
    endGame(points);
}

function opB5() {
    points -= 1;
    endGame(points);
}

function opC5() {
    points += 1;
    endGame(points);
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
