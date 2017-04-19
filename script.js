const me = 'LambdaSchool';

const you = 'Student';

let numberOfCatsIOwn = 0;

const buycat = () => {
  numberOfCatsIOwn++;
  conosle.log('I now own ' + numberOfCatsIOwn + ' cats!');
}

const favoriteBooks = [
  'Captain Underpants',
  'Magic Treehouse',
  'Brown Bear, Brown Bear, What Do You See?',
  'Slaughterhouse 5',
]

const likesCaptainUnderpants = (bookList) => {
  let yes = false;
  bookList.forEach(function(book) {
    if (book === 'Captain Underpants') yes = true;
  });
  return yes;
}

const result = likesCaptainUnderpants(favoriteBooks);

const sumInput = () => {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

const sum = sumInput(1, 2, 3, 4, 5);

const add = (x, y) => {
  return x + y;
}

const addSum = add(5, 5);
