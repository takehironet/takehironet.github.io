$(function() {
  var video = $('#webcam-movie')[0];
  navigator.mediaDevices.getUserMedia(
    {
      video: {
        mandatory: {
          chromeMediaSource: 'screen',
          chromeMediaSourceId: streamId
        },
        width: { min: 1280, max: 1920 },
        height: { min: 720, max: 1080 }
      }
    },
    function(stream) {
      video.src = window.URL.createObjectURL(stream);
      video.play();
    },
    function(error) {
      console.error(error.code, 'connection failed');
    }
  );
});
