(function(){dust.register("_standings_container",body_0);function body_0(chk,ctx){return chk.write("<div class=\"puan_durumu\"><div class=\"head_text\"><b>").reference(ctx.get(["LeageuName"], false),ctx,"h").write("</b><span>P</span><span>Av</span><span>O</span></div>").section(ctx.get(["Standings"], false),ctx,{"block":body_1},null).write("</div>");}function body_1(chk,ctx){return chk.partial("_standings_item",ctx,null);}return body_0;})();