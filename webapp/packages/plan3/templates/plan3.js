Template.plan3.events({
  'click .js-button-plan2': () => {
    FlowRouter.go('plan2');
  },
  'click .js-button-back': () => {
    history.back();
  }
});
