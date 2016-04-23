/* global WaveSurfer */

const exercises = [{
  title: 'A1 Sit-up',
  music: '/music/kieser.std.90.cut.mp3'
}, {
  title: 'B9 Hanging Leg Raise',
  music: '/music/kieser.std.90.cut.mp3'
}, {
  title: 'C3 Elliptical Machine Minutes',
  music: '/music/kieser.std.90.cut.mp3'
}, {
  title: 'X1 Treadmill Calories',
  music: '/music/kieser.std.90.cut.mp3'
}];
let wavesurfer;

Template.mediaPlayer.onCreated(function() {
  const instance = this;
  instance.playing = new ReactiveVar(false);
  instance.exerciseIndex = new ReactiveVar(0);
});

Template.mediaPlayer.onRendered(function() {
  const instance = this;
  const exerciseIndex = instance.exerciseIndex.get();
  const exercise = exercises[exerciseIndex];
  wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'white',
    progressColor: '#00E78D'
  });
  wavesurfer.load(exercise.music);
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
  },
  'click .js-button-back': function(event, instance) {
    const max = exercises.length - 1;
    let exerciseIndex = instance.exerciseIndex.get();
    exerciseIndex = --exerciseIndex < 0 ? max : exerciseIndex;
    instance.exerciseIndex.set(exerciseIndex);
  },
  'click .js-button-forward': function(event, instance) {
    const max = exercises.length - 1;
    let exerciseIndex = instance.exerciseIndex.get();
    exerciseIndex = ++exerciseIndex > max ? 0 : exerciseIndex;
    instance.exerciseIndex.set(exerciseIndex);
  }
});

Template.mediaPlayer.helpers({
  exercise: function() {
    const instance = Template.instance();
    const exerciseIndex = instance.exerciseIndex.get();
    const exercise = exercises[exerciseIndex];
    return exercise;
  }
});
