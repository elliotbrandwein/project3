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