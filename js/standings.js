/**
 * Created by okeskiner on 15.12.2015.
 */
function getJsonData(url)
{

    $.get(url,  function( response ) {
        console.log( response );
        renderStandings(response);
    });
}

getJsonData("../json/standings/index.json");


function renderStandings(data)
{
    window.dust.render('_standings_container', data, function (err, out) {

        if (data.Standings.length > 0)
        {
         $(".content-slide").html(out);
        }
        else
        {
        console.log("hata oluştu");
        }
    });
}