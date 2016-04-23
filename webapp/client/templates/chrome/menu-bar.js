Template.menubar.onCreated(function() {
  const instance = this;
  instance.editPlan = new ReactiveVar(false);
});

Template.menubar.events({
  'click .js-button-plan': function(event, instance) {
    const edit = !instance.editPlan.get();
    instance.editPlan.set(edit);
    console.log(edit);
    if (edit) {
      FlowRouter.go('plan');
    } else {
      FlowRouter.go('/');
    }
  }
});
