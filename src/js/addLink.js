const linksArticle = document.querySelector('.links');
const list = linksArticle.querySelector('.section__list');
const addLinkButton = linksArticle.querySelector('.btn');
const form = linksArticle.querySelector('.addLink');
const addButton = form.querySelector('.btn');
let newLink, linkTitle, link;

/*W pełnej aplikacji form wysyła dane do bazy danych*/

const createLink = () => {
  form.classList.toggle('addLink--hide');
  newLink = document.createElement('li');
  newLink.className = 'section__list-element';
};

const addLink = newLink => {
  linkTitle = form.querySelector('input[name="Site name"]').value;
  link = form.querySelector('textarea[name="link"]').value;
  console.log('newLink', newLink, linkTitle, link);
  newLink.innerHTML =
    `<p>${linkTitle}</p>` +
    `<a href='http://${link}'>http://${link}</a>` +
    "<img src='./images/icons/links.svg' alt='' />" +
    "<img src='./images/icons/trash.svg' alt='' />";
  list.appendChild(newLink);
  form.classList.add('addLink--hide');
};

addLinkButton.addEventListener('click', createLink);
addButton.addEventListener('click', function(event) {
  event.preventDefault();
  addLink(newLink);
});
