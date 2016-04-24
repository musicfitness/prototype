/* global WaveSurfer */

const exercises = [{
  title: 'A1 Sit-up',
  music: '/music/SportiMusicDreamPop.low.mp3'
}, {
  title: 'B9 Hanging Leg Raise',
  music: '/music/SportiMusicRock.low.mp3'
}, {
  title: 'C3 Elliptical Machine Minutes',
  music: '/music/kieser.std.90.cut.mp3'
}, {
  title: 'X1 Treadmill Calories',
  music: '/music/SportiMusicRock.low.mp3'
}];

let wavesurfer;
let lastExercise = 0;

Template.mediaPlayer.onCreated(function() {
  const instance = this;
  instance.playing = new ReactiveVar(false);
  instance.currentExercise = new ReactiveVar(0);
  instance.autorun(function() {
    const currentExercise = instance.currentExercise.get();
    if (currentExercise !== lastExercise) {
      const exercise = exercises[currentExercise];
      wavesurfer.load(exercise.music);
      lastExercise = currentExercise;
    }
  });
});

Template.mediaPlayer.onRendered(function() {
  const instance = this;
  const currentExercise = instance.currentExercise.get();
  const exercise = exercises[currentExercise];
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
    let currentExercise = instance.currentExercise.get();
    currentExercise = --currentExercise < 0 ? max : currentExercise;
    instance.currentExercise.set(currentExercise);
    instance.playing.set(false);
  },
  'click .js-button-forward': function(event, instance) {
    const max = exercises.length - 1;
    let currentExercise = instance.currentExercise.get();
    currentExercise = ++currentExercise > max ? 0 : currentExercise;
    instance.currentExercise.set(currentExercise);
    instance.playing.set(false);
  }
});

Template.mediaPlayer.helpers({
  exercise: function() {
    const instance = Template.instance();
    const currentExercise = instance.currentExercise.get();
    const exercise = exercises[currentExercise];
    return exercise;
  }
});
