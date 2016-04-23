/* global plyr */

Template.mediaPlayer.onRendered(() => {
  Meteor.setTimeout(() => {
    plyr.setup('.js-plyr');
    //   plyr.setup('.plyr', {
    //     controls: [
    //       "restart",
    //       "rewind",
    //       "fast-forward",
    //       // "current-time",
    //       // "duration",
    //       "mute",
    //       "volume",
    //       "captions",
    //       "fullscreen"
    //     ]
    //   });
  }, 200);
});
