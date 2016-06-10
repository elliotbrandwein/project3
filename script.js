var images=null;
var index = 0;
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
          $("#poster").html('<img src = "' + response.Search[0].Poster + '"/>');
        }
    });
  }
function next(){
  index= (index+1)%5;
  $("#poster").html('<img src = "' + images.Search[index].Poster + '"/>');
}

