const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris"
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "HTML", "Java", "C++"],
      answer: "HTML"
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
      answer: "William Shakespeare"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const nextButton = document.getElementById('next-button');
  const resultEl = document.getElementById('result');
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
  
    currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('option-button');
      button.addEventListener('click', selectOption);
      optionsEl.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = 'none';
    while (optionsEl.firstChild) {
      optionsEl.removeChild(optionsEl.firstChild);
    }
  }
  
  function selectOption(e) {
    const selectedButton = e.target;
    const selectedAnswer = selectedButton.textContent;
    const correctAnswer = questions[currentQuestionIndex].answer;
  
    if (selectedAnswer === correctAnswer) {
      selectedButton.style.backgroundColor = '#28a745';
      score++;
    } else {
      selectedButton.style.backgroundColor = '#dc3545';
    }
  
    Array.from(optionsEl.children).forEach(button => {
      button.disabled = true;
    });
  
    nextButton.style.display = 'block';
  }
  
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    resetState();
    questionEl.textContent = `You scored ${score} out of ${questions.length}!`;
    nextButton.style.display = 'none';
  }
  
  showQuestion();
  