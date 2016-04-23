/* global WaveSurfer */

let wavesurfer;

Template.mediaPlayer.onCreated(function() {
  const instance = this;
  instance.playing = new ReactiveVar(false);
});

Template.mediaPlayer.onRendered(function() {
  wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'white',
    progressColor: '#00E78D'
  });
  wavesurfer.load('/music/kieser.std.90.cut.mp3');
});

Template.mediaPlayer.events({
  'click .js-play-button': function(event, instance) {
    const playing = !instance.playing.get();
    instance.playing.set(playing);
    if (playing) {
      wavesurfer.play();
    } else {
      wavesurfer.pause();
    }
  }
});
