window.onload=function(){
  document.getElementById("quoteSubmit").addEventListener("click", function(event) {
    event.preventDefault();         //This tells program to not go to server. Lets you handle it yourself

    const url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=25"
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let result = "";
      let randomNumber = Math.floor(Math.random() * Math.floor(25));

      result += json[randomNumber].content;
      result += "<i><b>" + json[randomNumber].title + "</i></b>";

      document.getElementById("quoteSubmit").innerHTML = result;
    });
  });
}
