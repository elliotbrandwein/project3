function search(){
var test  = $.ajax(
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

return false;
}