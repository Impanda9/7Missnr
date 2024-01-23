document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const selectedAnswer = document.getElementById('missing-number').value;

  if (selectedAnswer && selectedAnswer.match(/^[0-9]$/)) {
    localStorage.setItem("MissingNr", selectedAnswer);
    console.log("Selected answer registered in local storage:", selectedAnswer);

    window.location.href = "https://impanda9.github.io/8misltr/";
  } else {
    console.log("No answer selected or invalid input");
  }
});

const answerInput = document.getElementById('missing-number');
answerInput.addEventListener('input', function() {
  if (answerInput.value) {
    answerInput.classList.add('selected');
  } else {
    answerInput.classList.remove('selected');
  }
});
