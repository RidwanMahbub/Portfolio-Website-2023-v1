const welcome_words = ['bonjour,', 'hola,', 'nǐn hǎo,', 'salve,', 'konnichiwa,', 'olá,', 'namaste,', 'hello,', 'shalom,'];
const welcome_word = document.getElementById('welcome');
welcome_word.addEventListener('mouseenter', function(){
  const randomword = welcome_words[Math.floor(Math.random() * welcome_words.length)]
  welcome_word.style.opacity = 0;
  setTimeout(function() {
    welcome_word.textContent = randomword;
    welcome_word.style.opacity = 1;
  }, 300);
});

const name_words = ['i am ridwan,', '私はリドワンです,', 'আমি রিদোয়ান,', '我是里德万,', 'je suis ridwan,', 'انا رضوان,', '나는 리드완이다,', 'मैं रिदवान हूं,', 'yo soy ridwan,'];
const name_word = document.getElementById('name');
name_word.addEventListener('mouseenter', function(){
  const randomword = name_words[Math.floor(Math.random() * name_words.length)]
  name_word.style.opacity = 0;
  setTimeout(function() {
    name_word.textContent = randomword;
    name_word.style.opacity = 1;
  }, 300);
});


const nice_words = ['nice','i\'m delighted',' it\'s wonderful','lovely', 'my pleasure', 'i\'m glad'];
const nice_word = document.getElementById('nice');
nice_word.addEventListener('mouseenter', function(){
  const randomword = nice_words[Math.floor(Math.random() *nice_words.length)]
  nice_word.style.opacity = 0;
  setTimeout(function() {
    nice_word.textContent = randomword;
    nice_word.style.opacity = 1;
  }, 300);
});
