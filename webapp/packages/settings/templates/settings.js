Template.settings.onCreated(function() {
  const instance = this;
  instance.genre = new ReactiveVar('rock');
  instance.fitness = new ReactiveVar('studio');
});

Template.settings.onRendered(() => {
  $('.dropdown-toggle').dropdown();
});

Template.settings.events({
  'click .js-button-planmenu': () => {
    FlowRouter.go('plan');
  },
  'click .js-classic-button': (event, instance) => {
    instance.genre.set('classic');
  },
  'click .js-rock-button': (event, instance) => {
    instance.genre.set('rock');
  },
  'click .js-jazz-button': (event, instance) => {
    instance.genre.set('jazz');
  },
  'click .js-studio-button': (event, instance) => {
    instance.fitness.set('studio');
  },
  'click .js-biking-button': (event, instance) => {
    instance.fitness.set('biking');
  },
  'click .js-running-button': (event, instance) => {
    instance.fitness.set('running');
  }
});
