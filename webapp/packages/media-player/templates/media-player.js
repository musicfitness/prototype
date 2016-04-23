/* global plyr */

Template.mediaPlayer.onRendered(() => {
  console.log('init');
  Meteor.defer(() => {
    plyr.setup('.plyr', {
      controls: [
        "restart",
        "rewind",
        "fast-forward",
        // "current-time",
        // "duration",
        "mute",
        "volume",
        "captions",
        "fullscreen"
      ]
    });
  });
});
