let ul = document.querySelector('.tab-list__list');
let links = document.querySelectorAll('.tab-list__link');
let tabs = document.querySelectorAll('.tab__box');

ul.addEventListener('click', (e) => {
  e.preventDefault();
  
  if (e.target.classList.contains('tab-list__link') && !e.target.classList.contains('tab-list__link--is-active')) {
    links.forEach((el, idx) => {
      el.classList.remove('tab-list__link--is-active');
      tabs[idx].classList.remove('tab__box--is-visible');
    });
  
    e.target.classList.add('tab-list__link--is-active');
  
    let targetTabId = e.target.getAttribute('href').slice(1);
    let targetTab = document.getElementById(targetTabId);
  
    if (targetTab) {
      targetTab.classList.add('tab__box--is-visible');
    }
  }
});
// Get the filter options and content elements
const filterOptions = document.getElementById('filterOptions');
const content = document.querySelector('.content');

// Add event listener to filter options
filterOptions.addEventListener('change', function() {
  // Get the selected filter values
  const selectedFilters = Array.from(filterOptions.querySelectorAll('input[type="checkbox"]:checked'))
    .map(checkbox => checkbox.value);

  // Filter the content based on the selected filters
  const filteredContent = product.filter(item => selectedFilters.includes(item.category));

  // Update the displayed content
  displayItem(filteredContent);
});

// Function to display the filtered content
const displayItem = (items) => {
  content.innerHTML = items.map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
          <h3>${title}</h3>
          <div class='img-box'>
          <img class='images' src=${image}></img>
          </div>
          <div class='bottom'>
          <h2>$ ${price}.00</h2>
          <button>Add to cart</button>
          </div>
        </div>`
    );
  }).join('');
};
displayItem(product);
