$(document).ready(function() {
  getQuote();
  $("#newQuote").on("click", () => getQuote());
});

function getQuote() {
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/?",
    cache: false,
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(data) {
      $("#quoteText").text(data.quoteText);
      $("#quoteAuthor").text(data.quoteAuthor + "\u2014");
      $("#tweetQuote").click(function() {
        const currentQuote = encodeURIComponent(
          '"' + data.quoteText + '"' + " " + "-" + data.quoteAuthor
        );
        const tweetQuote =
          "https://twitter.com/intent/tweet?text=" + currentQuote;
        window.open(tweetQuote, "_blank");
      });
    }
  });
}