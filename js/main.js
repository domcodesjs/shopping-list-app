// attaches to existing list items when the page loads
addDeleteItemEventListener();
addToggleItemListener();

$('#js-shopping-list-form').submit(function (e) {
  e.preventDefault();

  // we create a new item
  $('ul').append(
    `<li> <span class="shopping-item"> ${$(
      '#shopping-list-entry'
    ).val()} </span> <div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div> </li>`
  );

  // attaches to new list items that are created
  addDeleteItemEventListener();
  addToggleItemListener();
});

function addToggleItemListener() {
  $('.shopping-item-toggle').on('click', function () {
    $(this)
      .closest('li')
      .find('.shopping-item')
      .toggleClass('shopping-item__checked');
  });
}

function addDeleteItemEventListener() {
  $('.shopping-item-delete').on('click', function () {
    this.closest('li').remove();
  });
}
