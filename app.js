/*
// Example quiz object might look like:
var QUIZ = [
    {
        title: "Question 1",
        questionText: "What is the 3rd letter in the alphabet?",
        answers: [
            {text: "a", correct: false},
            {text: "b", correct: false},
            {text: "c", correct: true},
            {text: "d", correct: false}
        ],
        userAnswer: ""
    },
    {
        title: "Question 2",
        questionText: "How many licks to the center of a tootsie pop?",
        answers: [
            {text: "3", correct: true},
            {text: "682", correct: false},
            {text: "841", correct: false},
            {text: "1000", correct: false},
        ],
        userAnswer: ""
    }
]
*/



var app = new Vue({
    el: "#app",
    data:{
        // to attach your global quiz variable to a data variable:
        // myQuiz: QUIZ,
        page:1,
        score: 0,
        
        quiz:[{
            question: "What is the 3rd letter in the alphabet?",
            answers: [
            {text: "a", correct: false},
            {text: "b", correct: false},
            {text: "c", correct: true},
            {text: "d", correct: false}
            ],
            userAnswer: ""},
            {
            question: "How many licks to the center of a tootsie pop?",
        answers: [
            {text: "3", correct: true},
            {text: "682", correct: false},
            {text: "841", correct: false},
            {text: "1000", correct: false},
        ],
        userAnswer: ""},
        {
            question: "What is the largest shark?",
        answers: [
            {text: "Great white shark", correct: false},
            {text: "Whale Shark", correct: true},
            {text: "bull shark", correct: false},
            {text: "tiger shark", correct: false},
        ],
        userAnswer: ""},
        {
            question: "Sharks have exsisted for approximately how long?",
        answers: [
            {text: "350 million years", correct: true},
            {text: "10,000 years", correct: false},
            {text: "1 million years", correct: false},
            {text: "10 million years", correct: false},
        ],
        userAnswer: ""},
        {
            question: "What unusual thing can the bull shark do?",
        answers: [
            {text: "Survive in freshwater", correct: true},
            {text: "Survive out water", correct: false},
            {text: "Eat seaweed", correct: false},
            {text: "Talk", correct: false},
        ],
        userAnswer: ""}
    ],
    },
    methods:{
        // used for showing questions individually
        nextQuestion : function () {},

        // used for showing questions individually
        previousQuestion : function () {},

        setPage: function (page) {
            this.page = page;
        },
        
        calculateScore: function () {
            for (let i = 0; i < this.quiz.length; i++) {
                for(let j =0; j< this.quiz[i].answers.length; j++){
                    if(this.quiz[i].userAnswer == this.quiz[i].answers[j].text){
                        if(this.quiz[i].answers[j].correct){
                            this.score++;

                        }
                    }

                }
            } 
            this.page = 3;
        }
    },
    computed: {
        // a function that returns true if 0 userAnswer fields are blank ("")
        // IF there is still 1 or more blank ("") userAnswer field, return false
        areAllQuestionsAnswered: function () {}
    }
});