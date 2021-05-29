//query selectors
var meditationBell = document.querySelector('#meditation-graphic');
var displayedMessage = document.getElementById('displayed-message');
var inputMessage = document.getElementById('custom-message-input');
//buttons
var buttonReceiveMessage = document.getElementById('receive-message');
var buttonCreateMessage = document.getElementById('create-message');
var buttonCompileMessage = document.getElementById('compile-message');
var radioAffirmation = document.getElementById('affirmation');
var radioMantra = document.getElementById('mantra');
var radioCustomAffirmation = document.getElementById('affirmation-custom');
var radioCustomMantra = document.getElementById('mantra-custom');
//forms
var formRadioButtons = document.querySelector('.radio-buttons');
var formMessageCenter = document.querySelector('.message-center');
var formCustomMessageCenter = document.getElementById('custom-message-center');

//data
var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices.",
];

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather.",
];

//event listeners
buttonReceiveMessage.addEventListener("click", displayMessage);
buttonCreateMessage.addEventListener('click', showCustomForm);
buttonCompileMessage.addEventListener('click', compileNewMessage);
//functions and event handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayMessage() {
  if (!meditationBell.classList.contains("hidden")) {
    meditationBell.classList.add("hidden");
    displayedMessage.classList.remove('hidden');
  }
  if (radioAffirmation.checked) {
    displayedMessage.innerText = affirmations[getRandomIndex(affirmations)];
  }
  if (radioMantra.checked) {
    displayedMessage.innerText = mantras[getRandomIndex(mantras)];
  }
}

function showCustomForm() {
  if (!meditationBell.classList.contains("hidden")) {
    meditationBell.classList.add("hidden");
  }
  if(!displayedMessage.classList.contains("hidden")) {
    displayedMessage.classList.add("hidden");
  }
  formRadioButtons.classList.add('hidden');
  buttonCreateMessage.classList.add('hidden');
  buttonReceiveMessage.classList.add('hidden');
  formCustomMessageCenter.classList.remove('hidden');
}


function compileNewMessage() {
  if(radioCustomAffirmation.checked) {
    console.log('affirmation', inputMessage.value);
  } else if(radioCustomMantra.checked) {
    console.log('mantra', inputMessage.value);
  } else {
    alert('Please select \'Affirmation\' or \'Mantra\'');
  }

}
