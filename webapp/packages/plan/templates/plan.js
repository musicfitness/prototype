Template.plan.events({
  'click .js-button-bauch': () => {
    FlowRouter.go('plan2');
  }
});
Template.plan.events({
  'click .js-button-settings': () => {
    FlowRouter.go('settings');
  }
});
