const infoAboutList = array => {
  console.log(`Number of categories: ${array.length}`);

  for (const elem of array) {
    console.log(`Category: ${elem.querySelector('h2').textContent}`);
    console.log(`Elements: ${Array.from(elem.querySelectorAll('li')).length}`);
  }
};

infoAboutList(Array.from(document.querySelectorAll('.item')));
