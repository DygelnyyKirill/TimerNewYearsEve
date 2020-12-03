const quizDate = [
    {
        question: 'How old is Kirill?',
        a: '10',
        b: '17',
        c: '26',
        d: '115',
        correct: 'c'
    }, {
        question: 'Whot is the most used programming language in 2020?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Who is he president of Ukraine?',
        a: 'V.Zelensky',
        b: 'D.Trump',
        c: 'V.Putin',
        d: 'A.Merkel',
        correct: 'a'
    }, {
        question: 'Whot does HTML stand for?',
        a: 'Hypertext Narkup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    }, {
        question: 'What year was JavaScript launched',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'd'
    }
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuize = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizeData = quizDate[currentQuize];

    questionEl.innerText = currentQuizeData.question;

    a_text.innerText = currentQuizeData.a;
    b_text.innerText = currentQuizeData.b;
    c_text.innerText = currentQuizeData.c;
    d_text.innerText = currentQuizeData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
             answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
        }
    );
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer);

    if (answer) {
        if (answer === quizDate[currentQuize].correct) {
           score++;
        }
        currentQuize++;
        if (currentQuize < quizDate.length) {
           loadQuiz();  
        } else {
           quiz.innerHTML = `<h2>You answers correctly at ${score}/${quizDate.length} questions.</h2>
           <button onclick="location.reload()">Reload</bytton>`;
        }
    };
})