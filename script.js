
function onSearch() 
{
    var title = $('input[name=s]').val();
    var year =  $('input[name=y]').val();
    var searchType = null;

    if(document.getElementById("movie").checked) 
    {
      searchType = "movie";
    }

    $.ajax(
    {   
        url: "http://www.omdbapi.com/?",   
        data: 
        {     
          s: title,
          y: year,
          type: "movie"
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
{
    // gets all the "slides" in our slideshow
    var elements = document.getElementsByClassName("hideable");

    // Find the LI that's currently displayed
    var visibleID = getVisible(elements);

    // hide the currently visible LI
    elements[visibleID].style.display = "none";

    // get the previous slide
    if(!direction)
    {
        var makeVisible = prev(visibleID, elements.length); 
    }

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