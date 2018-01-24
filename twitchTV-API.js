$(document).ready(function() {  
  var channels = ["freecodecamp","test_channel","ESL_SC2", "eleaguetv"];
  channels.forEach(function(channel) {
    var url = 'https://wind-bow.glitch.me/twitch-api/streams/'+channel;
    $.getJSON(url, function(data) {
      var logo = "";
      if(data.stream !== null) logo = data.stream.channel.logo;
      else logo = "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
      var name = "";
      if(data.stream !== null) name = "<a href='https://www.twitch.tv/"+channel+"'><span class='titles'>"+data.stream.channel.display_name+"</span></a>";
      else name = "<a href='https://www.twitch.tv/"+channel+"'><span class='titles'>"+channel+"</span></a>";
      var streamstatus = "";
      if (data.stream !== null) streamstatus = data.stream.channel.game+" "+data.stream.channel.status;
      else streamstatus = "Offline";
      var child = document.createElement("div");
      var temp0 = ""; 
      if (data.stream) temp0="on";
      else temp0="off";
      child.innerHTML = "<div class='stream "+ temp0 +"'><div><img class='logo' src='"+logo+"'/></div><div class='stitle'>"+name+"</div><div class='status'>"+streamstatus+"</div></div>";
      if(data.stream === null) { 
        child.style = "background-color:#D9534F"
        $(".online").append(child); 
                               }
      else {
        child.style = "background-color:#5CB85C"
        $(".online").prepend(child);
      }
    });
  });
  $("#offline").click(function() {
    $('.on').hide();
    $('.off').show();
  });
  $("#online").click(function() {
    $('.off').hide();
    $('.on').show();
  });
  $("#all").click(function() {
    $('.on').show();
    $('.off').show();
  });
});
