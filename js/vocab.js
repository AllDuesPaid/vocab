var questions = [
  {
    prompt: "hi",
    hint: "test"
  },
  {
    prompt: "人",
    hint: "person"
  },
  {
    prompt: "说",
    hint: "say"
  },
  {
    prompt: "什么",
    hint: "what"
  }
];

//I deleted the loop statement; it would just skip to the last question
var i = 0;

var input = document.getElementById("input");

document.getElementById("front").innerHTML = questions[i].prompt;
document.getElementById("back").innerHTML = questions[i].hint;

input.addEventListener("keyup", function (event) {
  //Even when the answer is right in English or Chinese, it alerts "wrong"
  if (input === questions[i].prompt && event.keyCode === 13) {
    document.getElementById("right").play();
    alert("correct");
  } else if (event.keyCode === 13) {
    document.getElementById("wrong").play();
    alert("wrong");
    document.querySelector("#input").value = "";
  }
});

var music = document.getElementById("audio");

function play() {
  return audio.paused ? audio.play() : audio.pause();
}

/* Bugs to fix:
1) Please make the program wait for user response when it cycles 
through questions.

2) Please make the questions cycle randonly without repeating

3) Plz make it so that it recognizes correct answers.*/
