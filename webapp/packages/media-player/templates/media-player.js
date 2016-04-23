Template.mediaPlayer.onRendered(() => {


});

Template.mediaPlayer.events({
  'click .js-play-button': () => {
    console.log('playing');
    $('.js-player')[0].play();
  }
});
