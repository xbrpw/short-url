balapaCop = function(title,theFontColor) {
  
  var title,
      theFontColor;
  
  var style = "@import url(https://fonts.googleapis.com/css?family=Quicksand:400,700);.copyright{position:fixed;right:15px;bottom:15px;font-family:Quicksand}.copyright span{line-height:30px;color:" + theFontColor +";margin-right:7.5px;float:left}.copyright span a{font-weight:400;text-decoration:none;color:#ea4c89}.copyright .balapa{width:24px;height:24px;display:block;background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/111167/balapa.jpg);background-size:cover;border-radius:50%;border:3px solid rgba(0,0,0,.25);float:right}";

  var tag = "<span>" + title + " by</span><a class='balapa' href='http://balap.us' target='_blank'></a>";
  
  var genTag, genStyle;
  
  genStyle = document.createElement("style");
  genStyle.innerHTML = style;
  
  genTag = document.createElement("div");
  genTag.className = "copyright";
  genTag.innerHTML = tag;
  
  document.body.appendChild(genStyle);
  document.body.appendChild(genTag);
};

// balapaCop("pen title", "black");