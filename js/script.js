document.addEventListener("DOMContentLoaded", function() {
  // $("#section").on("click", function(event) {
  //   event.preventDefault();

  // });
  $("form").on("change", "#sections", function(event) {
    let home;
    home = $(this)
      .val()
      .toLowerCase();
    // console.log("heloloooll");
    $.ajax({
      method: "GET",
      url:
        "https://api.nytimes.com/svc/topstories/v2/" +
        home +
        ".json?api-key=JqxRLlt3a0VlwM6Ag5iAy5VAYiRgvIJg",
      dataType: "json"
    }).done(function(data) {
      console.log(data.results);
      $("#arts1").empty();
      $.each(data.results, function(key, value) {
        $("#arts1").append(
          `<div class="article" style="background-image:url(${value.multimedia[4].url})">
          <div class="story"><p>${value.abstract}</p></div></div>`
        );
      });

      //        <p class="abstr" style="abstrac:(${value.abstract})"></p></div>`
      // .fail(function() {
      //   $(".user-name").append("Sorry there was an error.");
    });
  });
});
