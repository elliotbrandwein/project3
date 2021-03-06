var images=null;
var index = 0;
var modAmount =5;
var setButton =true;
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
          document.getElementById("next-button").style.display = 'block';
        }
    });
    return false;
}
function image()
{

  $("#poster").html('<img src = "' + images.Search[index].Poster + '"/>');
  var num = (index%modAmount) +1;
  document.getElementById("number-text").innerHTML = "Displaying " + num + " of " + modAmount;
  var s = "Title: " + images.Search[index].Title + "<br>";
  s += "Year: " + images.Search[index].Year + "<br>";
  document.getElementById("info-text").innerHTML = s;
}
function next()
{
  //button();
  index= (index+1)%modAmount;
  $("#poster").fadeOut(600);
  $("#info-text").slideUp(600);
  delay();
  $("#poster").fadeIn(600);
  $("#info-text").slideDown(600);
}

function button()
{
  if(setButton)
  {
    $("#next-button").hide();
    setButton=false;
  }
  else{
    setButton=true;
    $("#next-button").show();
  }

  $("#poster").html('<img src = "' + images.Search[index].Poster + '"/>');
  var num = (index%modAmount) +1;
  document.getElementById("number-text").innerHTML = "Displaying " + num + " of " + modAmount;
  var s = "Title: " + images.Search[index].Title + "<br>";
  s += "Year: " + images.Search[index].Year + "<br>";
  document.getElementById("info-text").innerHTML = s;
}
function delay()
{
  var timeoutID = window.setTimeout(image, 600);
  //var timeoutButtonID = window.setTimeout(button, 600);
}

function onReset() {
    document.getElementById("poster").innerHTML ="";
    document.getElementById("info-text").innerHTML ="";
    document.getElementById("number-text").innerHTML = "";
    document.getElementById("next-button").style.display = 'none';
}

