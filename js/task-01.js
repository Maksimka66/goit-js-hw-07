// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const infoAboutList = array => {
  console.log(`Number of categories: ${array.length}`);

  for (const elem of array) {
    console.log(`Category: ${elem.querySelector('h2').textContent}`);
    console.log(`Elements: ${Array.from(elem.querySelectorAll('li')).length}`);
  }
};

infoAboutList(Array.from(document.querySelectorAll('.item')));
