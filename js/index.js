$(document).ready(function(){
  getQuote();
  $("#get-quote").on("click",function(){
    getQuote();
  });
});


function getQuote(){
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/?",
    cache: false,
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(data){
      $("#quote").text('"'+data.quoteText+'"');
      $("#author").text(data.quoteAuthor + ':');
    }
  });
}