const quoteList = [
  {
    'quote': 'Beware of what you become in pursuit of what you want.',
    'author': 'Jim Rohn',
  },
  {
    'quote': 'Be yourself; everyone else is already taken.',
    'author': 'Oscar Wilde',
  },
  {
    'quote': 'You miss 100% of the shots you don\'t take.',
    'author': 'Wayne Gretzy',
  },
  {
    'quote': 'A room without books is like a body without a soul.',
    'author': 'Marcus Tullius Cicero',
  },
  {
    'quote': 'If you tell the truth, you don\'t have to remember anything.',
    'author': 'Mark Twain',
  },
  {
    'quote': 'I have not failed. I\'ve just found 10,000 ways that won\'t work.',
    'author': 'Thomas A. Edison',
  },

];

function generateQuote() {
  let random = Number.parseInt(Math.random() * quoteList.length + 1);
  document.getElementById('quoteOutput').textContent = `\"${quoteList[random].quote}\"`;
  document.getElementById('authorOutput').textContent = `--${quoteList[random].author}`;
}