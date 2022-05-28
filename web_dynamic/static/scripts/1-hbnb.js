$(document).ready(function () {
  const amenitiesList = {};
  $(document).on('change', "input[type='checkbox']",
    function () {
      if (this.checked) {
        amenitiesList[($(this).attr('data-id'))] = $(this).attr('data-name');
      } else {
        delete amenitiesList[($(this).attr('data-id'))];
      }
      $('div-amenities h4').html(Object.values(amenitiesList).join(', ') || '&nbsp;');
    });
});
