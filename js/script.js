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
      // console.log(data.results);

      $("#main-content").empty();
      let filteredResults = data.results
        .filter(function(article) {
          return (
            article.multimedia[4] !== undefined &&
            article.subsection !== "Art & Design"
          );
        })
        .slice(0, 12);
      console.log(filteredResults);

      $.each(filteredResults, function(key, value) {
        // if
        // (value.multimedia[4].url==undefined || value.multimedia[4].url==null){
        //   continue;
        // }
        $("#main-content").append(
          `<article class="article" style="background-image:url(${value.multimedia[4].url})">
          <div class="story">
          <a href="${value.short_url}" target=_blank>
          <p>${value.abstract}</p></a></div></article>`
        );
        // $("#main-content").tagsinput({
        //   maxTags: 12
        // });
      });

      //        <p class="abstr" style="abstrac:(${value.abstract})"></p></div>`
      // .fail(function() {
      //   $(".user-name").append("Sorry there was an error.");
    });
  });
});
