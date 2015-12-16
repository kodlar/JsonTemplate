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

//Lig tipi
/*getJsonData("../json/standings/League.json");*/
//Grup tipi
getJsonData("../json/standings/Group.json");

function renderStandings(data)
{
    if(data.StageType === "League")
    {
        dust.render('_standings_container', data, function (err, out) {
            if (data.Standings.length > 0) {
                $(".content-slide").html(out);
            } else {
                console.log(err);
            }
        });
    }
    else
    {
        dust.render('_standings_group_container', data, function (err, out) {
            if (data.Standings.length > 0) {
                $(".content-slide").html(out);
            } else {
                console.log(err);
            }
        });
    }

}