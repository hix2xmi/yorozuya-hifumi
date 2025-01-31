const filterButtons = document.querySelectorAll('[data-filter]');
const categoryContents = document.querySelectorAll('[data-category]');

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener('click', buttonSwitch);
  filterButton.addEventListener('click', categoryFilter);
});

function buttonSwitch() {
  filterButtons.forEach((filterButton) => {
    filterButton.classList.remove("is-active");
    this.classList.add('is-active');
  });
}

function categoryFilter() {
  const buttonCategory = this.dataset.filter;
  const targetContents = document.querySelectorAll('[data-category="' + buttonCategory + '"]');

  categoryContents.forEach((categoryContent) => {

    categoryContent.animate([{
        opacity: 0
      },
      {
        opacity: 1
      }
    ], {
      duration: 600,
      fill: 'forwards'
    });

    if (buttonCategory == 'all') {
      categoryContent.classList.add('image');
    } else {
      categoryContent.classList.remove("image");
      targetContents.forEach((targetContent) => {
        targetContent.classList.add('image');
      });
    }
  });
}

