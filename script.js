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
        }
    });
}

function reset()
{
  $("#poster").html();
  $("#info").html();
}

function next()
{
  index= (index+1)%modAmount;
  $("#poster").fadeOut(600);
  delayImage();
  $("#poster").fadeIn(600);
}

function image()
{
  $("#poster").html('<img src = "' + images.Search[index].Poster + '"/>');
}

function delayImage()
{
  var timeoutID = window.setTimeout(image, 600);
}

