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
          console.log(response);
          $("#poster").html('<img src = "' + response.Search[0].Poster + '"/>');
        }
    });
  }

/*
var elements = document.getElementsByClassName("hideable");
var vis = getVisible(elements) + 1;
function toggleSlide(direction)
>>>>>>> b728274d995a32aee5b7a7cd2245e56d66376199
{
   url: "http://www.omdbapi.com/?",   data:
    { 
      s: $('input[name=t]').val()
    }
   ,   dataType: "json",   
   success: function(response)
    {   console.log(response);
      if(response.Response=="False")
      {
        $("#return").html('<h1>'+" no movie with that name found"+'</h1>');
        $("#plot").html("");
        $("#poster").html("");
      }
      else
      {
        $("#return").html('<h1> ' + response.Title + ' </h1>');
        $("#plot").html(response.Plot);
        $("#poster").html('<img src = " ' + response.Poster + ' "/>');
      }
    } 
});

<<<<<<< HEAD
return false;
}
=======
    // get the next slide
    else
    {
        var makeVisible = next(visibleID, elements.length); 
    }

    // show the previous or next slide
    elements[makeVisible].style.display = "block"; 
    //var sn = document.getElementById("slideNumber");
    //sn.innerHTML = (makeVisible + 1);
}
function getVisible(elements) {
    var visibleID = -1;
    for(var i = 0; i < elements.length; i++) {
        if(elements[i].style.display == "block") {
            visibleID = i;
        }
    }
    return visibleID;
}
 
function prev(num, arrayLength) {
    if(num == 0) return arrayLength-1;
    else return num-1;
}
 
function next(num, arrayLength) {
    if(num == arrayLength-1) return 0;
    else return num+1;
}
var myVar = setInterval(timermove, 4000);
function timermove(){
    toggleSlide(true);
}*/

