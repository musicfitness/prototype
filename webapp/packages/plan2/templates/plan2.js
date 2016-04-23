Template.plan2.events({
  'click .js-button-situp': () => {
    FlowRouter.go('plan3');
  }
});
Template.plan2.events({
  'click .js-button-plan': () => {
    FlowRouter.go('plan');
  },
  'click .js-button-back': () => {
    history.back();
  }
});
