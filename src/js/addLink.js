const linksArticle = document.querySelector('.links');
const list = linksArticle.querySelector('.section__list');
const addLinkButton = linksArticle.querySelector('.btn');
const form = linksArticle.querySelector('.addLink');
const addButton = form.querySelector('.btn');
let newLink, linkTitle;

const createLink = () => {
  form.classList.toggle('addLink--hide');
};

const fetchAllLinks = () => {
  fetch('http://localhost:3131/links')
    .then(response => response.json())
    .then(response => displayLinks(response));
};

const displayLinks = links => {
  list.innerHTML = '';
  links.forEach(link => {
    linkTitle = link.id;
    link = link.href;
    newLink = document.createElement('li');
    newLink.className = 'section__list-element';
    newLink.innerHTML =
      `<p>${linkTitle}</p>` +
      `<a href='http://${link}'>${link}</a>` +
      '<img src="./images/icons/links.svg" alt="" />' +
      '<img src="./images/icons/trash.svg" alt="" /';
    list.appendChild(newLink);
    form.classList.add('addLink--hide');
  });
};

fetchAllLinks();

const sendLink = (id, href) => {
  fetch('http://localhost:3131/links', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, href }),
  }).then(fetchAllLinks);
};

addLinkButton.addEventListener('click', createLink);

addButton.addEventListener('click', event => {
  event.preventDefault();
  const linkName = form.querySelector('[name="Site name"]').value;
  const link = form.querySelector('[name="link"]').value;
  sendLink(linkName, link);
});
