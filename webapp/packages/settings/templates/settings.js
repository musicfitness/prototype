Template.settings.events({
  'click .js-button-planmenu': () => {
    FlowRouter.go('plan');
  }
});
Template.settings.onRendered(  () => {$('.dropdown-toggle').dropdown()}
);
