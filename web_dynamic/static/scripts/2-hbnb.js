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
     $.get('http://0.0.0.0:5001/api/v1/status/',function (data, statusText){
        if (statusText === "success") {
            if (data.status == 'OK') {
                $('div#api_status').addClass('available');
            } else {
                $('div#api_status').removeClass('available');
            }
        }
     });
});
  