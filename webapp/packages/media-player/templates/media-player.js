/* global WaveSurfer */

let wavesurfer;

Template.mediaPlayer.onRendered(() => {
  wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'white',
    progressColor: '#00E78D'
  });
  wavesurfer.load('/music/kieser.std.90.mp3');
});

Template.mediaPlayer.events({
  'click .js-play-button': () => {
    wavesurfer.play();
    // console.log('playing');
    // $('.js-player')[0].play();
  }
});
