var images=null;
var index = 0;
var modAmount =5;
function onSearch() 
{
    var title = $('input[name=s]').val();
    var year =  $('input[name=y]').val();
    var searchType = null;

    if(document.getElementById("movie").checked) 
    {
      searchType = "movie";
    }
    if( document.getElementById("series").checked){
      searchType = "series";
    }
    if( document.getElementById("episode").checked){
      searchType = "episode";
    }
    console.log(searchType);
    $.ajax(
    {   
        url: "http://www.omdbapi.com/?",   
        data: 
        {     
          s: title,
          y: year,
          type: searchType
        },   
        dataType: "json",   
        success: function(response) 
        {    
          images=response;
          console.log(response);
          if (images.Search.length<5){
            modAmount=images.Search.length;
          }
          $("#poster").html('<img src = "' + response.Search[0].Poster + '"/>');
          document.getElementById("number-text").innerHTML = "Displaying 1 of " + modAmount;
          var s = "Title: " + response.Search[0].Title + "<br>";
          s += "Year: " + response.Search[0].Year + "<br>";
          document.getElementById("info-text").innerHTML = s;
        }
    });
  }
  function reset(){

  }
function next(){
  index= (index+1)%modAmount;
  $("#poster").html('<img src = "' + images.Search[index].Poster + '"/>');
  var num = (index%modAmount) +1;
  document.getElementById("number-text").innerHTML = "Displaying " + num + " of " + modAmount;
  var s = "Title: " + images.Search[0].Title + "<br>";
  s += "Year: " + images.Search[0].Year + "<br>";
  document.getElementById("info-text").innerHTML = s;
}

