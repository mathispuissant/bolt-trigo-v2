const loginForm = document.getElementById('login-form');
const quizSection = document.getElementById('quiz-section');
const loginSection = document.getElementById('login-section');
const welcomeMessage = document.getElementById('welcome-message');
const quizForm = document.getElementById('quiz-form');
const resultsDiv = document.getElementById('results');

// Les corrections et explications
const corrections = {
  q1: {
    correct: 'B',
    explanations: {
      A: 'Faux : Cette définition correspond au cosinus.',
      B: '✅ Bonne réponse : Le sinus est le rapport entre le côté opposé et l’hypoténuse.',
      C: 'Faux : Cette définition correspond à la tangente.',
      D: 'Faux : Le sinus et le cosinus ne sont pas des inverses.'
    }
  },
  q2: {
    correct: 'B',
    explanations: {
      A: 'Faux : Cette définition correspond au sinus.',
      B: '✅ Bonne réponse : Le cosinus est le rapport entre le côté adjacent et l’hypoténuse.',
      C: 'Faux : Cette définition correspond à la tangente.',
      D: 'Faux : Le cosinus et le sinus ne sont pas des inverses.'
    }
  },
  q3: {
    correct: 'B',
    explanations: {
      A: 'Faux : sin(0°) = 0, mais sin(90°) = 1.',
      B: '✅ Bonne réponse : Par définition, sin(90°) = 1.',
      C: 'Faux : Le sinus est positif pour les angles entre 0° et 180°.',
      D: 'Faux : √2/2 correspond à sin(45°).'
    }
  },
  q4: {
    correct: 'B',
    explanations: {
      A: 'Faux : cos(90°) = 0, pas cos(0°).',
      B: '✅ Bonne réponse : Par définition, cos(0°) = 1.',
      C: 'Faux : cos(180°) = -1, mais cos(0°) = 1.',
      D: 'Faux : cos(45°) = √2/2, mais pas cos(0°).'
    }
  },
  q5: {
    correct: 'A',
    explanations: {
      A: '✅ Bonne réponse : L’identité fondamentale est sin²(x) + cos²(x) = 1.',
      B: 'Faux : Il n’y a pas de soustraction dans cette relation.',
      C: 'Faux : Ce n’est vrai que pour x = 45°.',
      D: 'Faux : L’addition des valeurs de sinus et cosinus n\'est pas toujours égale à 1.'
    }
  },
  q6: {
    correct: 'A',
    explanations: {
      A: '✅ Bonne réponse : Le cosinus d’un angle est l’abscisse du point correspondant sur le cercle.',
      B: 'Faux : L’ordonnée correspond au sinus.',
      C: 'Faux : La tangente est définie par sin(x) / cos(x).',
      D: 'Faux : Le rayon est toujours 1 sur le cercle trigonométrique.'
    }
  }
};

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  welcomeMessage.textContent = `Bienvenue ${prenom} ${nom} !`;
  loginSection.style.display = 'none';
  quizSection.style.display = 'block';
});

quizForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let score = 0;
  let feedbackHTML = '';
  
  Object.keys(corrections).forEach((qKey, index) => {
    const qNum = index + 1;
    const userAnswer = quizForm[`q${qNum}`].value;
    const correctAnswer = corrections[qKey].correct;
    const explanations = corrections[qKey].explanations;
    
    if (userAnswer === correctAnswer) {
      score++;
    }
    
    feedbackHTML += `<div class="feedback">
      <h3>QCM ${qNum} :</h3>
      <p>Votre réponse : ${userAnswer} ${userAnswer === correctAnswer ? '✅' : '❌'}</p>
      <p>${explanations[userAnswer]}</p>
      <p>Correction : La bonne réponse est ${correctAnswer}.</p>
    </div>`;
  });
  
  feedbackHTML = `<h2>Score : ${score} / 6</h2>` + feedbackHTML;
  resultsDiv.innerHTML = feedbackHTML;
});
