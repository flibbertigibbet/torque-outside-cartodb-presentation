// video fallback to flash bits, extracted from octopress.js
// https://github.com/imathis/octopres

$('document').ready(function() {
  wrapFlashVideos();
  flashVideoFallback();
});

function flashVideoFallback(){
  var flashplayerlocation = "/swf/jwplayer.flash.swf",
      flashplayerskin = "/swf/six.xml";
  $('video').each(function(i, video){
    video = $(video);
    if (!Modernizr.video.h264 && swfobject.getFlashPlayerVersion() || window.location.hash.indexOf("flash-test") !== -1){
      video.children('source[src$=mp4]').first().map(i, function(source){
        var src = $(source).attr('src'),
            id = 'video_'+Math.round(1 + Math.random()*(100000)),
            width = video.attr('width'),
            height = parseInt(video.attr('height'), 10) + 30;
            video.after('<div class="flash-video"><div><div id='+id+'>');
        swfobject.embedSWF(flashplayerlocation, id, width, height + 30, "9.0.0",
          { file : src, image : video.attr('poster'), skin : flashplayerskin } ,
          { movie : src, wmode : "opaque", allowfullscreen : "true" }
        );
      });
      video.remove();
    }
  });
}

function wrapFlashVideos() {
  $('object').each(function(i, object) {
    if( $(object).find('param[name=movie]').length ){
      $(object).wrap('<div class="flash-video">');
    }
  });
  $('iframe[src*=vimeo],iframe[src*=youtube]').wrap('<div class="flash-video">');
}