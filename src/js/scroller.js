const links = document.querySelectorAll('.sidebar__element a');
const articles = document.querySelectorAll('.section__article');

const scrollTo = link => {
  const linkAttribute = link.getAttribute('href').replace('#', '');

  for (let article of articles) {
    const articleAttribute = article.getAttribute('data-attribute');
    if (linkAttribute == articleAttribute) {
      article.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'end',
      });
      console.log(linkAttribute, articleAttribute);
    }
  }
};

for (let link of links) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    scrollTo(link);
  });
}
