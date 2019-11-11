const links = document.querySelectorAll('.sidebar__element a');
const articles = document.querySelectorAll('.section__article');
const sidebar = document.querySelector('.sidebar');

const scrollTo = link => {
  const linkAttribute = link.getAttribute('href').replace('#', '');

  for (let article of articles) {
    const articleAttribute = article.getAttribute('data-attribute');
    if (linkAttribute == articleAttribute) {
      const scrollDestination = article.querySelector('.section__header');
      scrollDestination.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'start',
      });
      console.log(linkAttribute, articleAttribute);
    }
  }
};

for (let link of links) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    scrollTo(link);
    sidebar.classList.remove('sidebar--hide');
  });
}
