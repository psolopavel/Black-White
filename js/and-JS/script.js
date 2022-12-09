const header_search = document.querySelector('.header-account__search')
const burger_button = document.querySelector('.header__burger')
const burger_parent = document.querySelectorAll('.burger__parent')

header_search.querySelector('._icon-loop').addEventListener('click', function () {
   header_search.querySelector('input').classList.toggle('_active')
})

if (burger_button) {
   burger_button.addEventListener('click', function () {
      burger_button.classList.toggle('_active')
      document.querySelector('.burger').classList.toggle('_active')
      document.body.classList.toggle('_hidden')
   })
}

if (burger_parent) {
   burger_parent.forEach(el => {
      el.querySelector('.burger-items__item').classList.add('_arrow')
   });
}