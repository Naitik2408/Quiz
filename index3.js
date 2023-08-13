let questions = [
  {
    question: "1. Who is current PM of India?",
    Option_A: "Narendra Modi",
    Option_B: "Naitik Kumar",
    Option_C: "Virat Kolhi",
    Correct_Option: "Narendra Modi",
  },
  {
    question: "2. Who is current CM of Bihar?",
    Option_A: "Narendra Modi",
    Option_B: "Nitish Kumar",
    Option_C: "Virat Kolhi",
    Correct_Option: "Nitish Kumar",
  },
  {
    question: "3. Who is current CM of Jharkhand?",
    Option_A: "Narendra Modi",
    Option_B: "Naitik Kumar",
    Option_C: "Hement Soren",
    Correct_Option: "Hement Soren",
  },
];

let total = [];

let question_box = document.getElementById("questions");
let aption_A = document.getElementById("option_A");
let aption_B = document.getElementById("option_B");
let aption_C = document.getElementById("option_C");
let Next = document.getElementById("next");
let Previous = document.getElementById("previous");
let Options = document.getElementsByClassName("All_options");
let Array_options = Array.from(Options);
let score_box=document.getElementById('total_value');

function reset() {
  Array_options.forEach((element) => {
    element.style.backgroundColor = "rgb(255, 179, 0)";
  });
}

i = 0;
let firstClick = true;
Array_options.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.innerText === questions[i].Correct_Option) {
      element.style.backgroundColor = "green";
      if (firstClick) {
        total.push(1);
        firstClick = false;
      }

      console.log(total);
    } else if (e.target.innerText != questions[i].Correct_Option) {
      e.target.style.backgroundColor = "red";
      firstClick = false;
    }
  });
});

a = 0;
Next.addEventListener("click", () => {
  reset();
  firstClick = true;
  a = a + 1;
  i = i + 1;
  if (a < questions.length - 1 && a >= 0) {
    question_box.innerText = questions[a].question;
    aption_A.innerText = questions[a].Option_A;
    aption_B.innerText = questions[a].Option_B;
    aption_C.innerText = questions[a].Option_C;
  } else if (a === questions.length - 1) {
    question_box.innerText = questions[a].question;
    aption_A.innerText = questions[a].Option_A;
    aption_B.innerText = questions[a].Option_B;
    aption_C.innerText = questions[a].Option_C;
  }
});
Previous.addEventListener("click", () => {
  reset();
  a = a - 1;
  i = i - 1;
  question_box.innerText = questions[a].question;
  aption_A.innerText = questions[a].Option_A;
  aption_B.innerText = questions[a].Option_B;
  aption_C.innerText = questions[a].Option_C;
});

let sum = 0;
let score = document.getElementById("submit");
score.addEventListener("click", () => {
    for (let b = 0; b < total.length; b++) {
        sum += total[b];
      }
      console.log(sum);
      score_box.innerHTML=`You have got ${sum} out of ${questions.length} `
});

  
