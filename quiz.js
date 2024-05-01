// Define questions
const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Rome"],
      correctAnswer: "Paris",
      score: 1
    },
    // Add more questions here
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const submitButton = document.getElementById('submit-btn');
  const nextButton = document.getElementById('next-btn');
  const scoreElement = document.getElementById('score');
  const resultContainer = document.getElementById('result-container');
  const answersElement = document.getElementById('answers');
  const restartButton = document.getElementById('restart-btn');
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
  
    currentQuestion.options.forEach(option => {
      const optionElement = document.createElement('input');
      optionElement.type = 'radio';
      optionElement.name = 'option';
      optionElement.value = option;
      optionsElement.appendChild(optionElement);
  
      const labelElement = document.createElement('label');
      labelElement.textContent = option;
      optionsElement.appendChild(labelElement);
  
      optionsElement.appendChild(document.createElement('br'));
    });
  
    submitButton.style.display = 'inline';
    nextButton.style.display = 'none';
  }
  
  function showResult() {
    resultContainer.style.display = 'block';
    scoreElement.textContent = score;
    answersElement.innerHTML = '';
  
    questions.forEach((question, index) => {
      const answerElement = document.createElement('p');
      answerElement.textContent = `Q${index + 1}. ${question.question} - Correct Answer: ${question.correctAnswer}`;
      answersElement.appendChild(answerElement);
    });
  }
  
  submitButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
      alert('Please select an option');
      return;
    }
  
    if (selectedOption.value === questions[currentQuestionIndex].correctAnswer) {
      score += questions[currentQuestionIndex].score;
      alert('Correct!');
    } else {
      alert('Incorrect!');
    }
  
    submitButton.style.display = 'none';
    nextButton.style.display = 'inline';
    selectedOption.disabled = true;
  });
  
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = 'none';
    showQuestion();
  });
  
  // Display first question initially
  showQuestion();
  