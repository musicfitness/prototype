FlowRouter.route('/plan', {
  name: 'plan',
  action: function() {
    var currentLayout = Session.get('currentLayout');
    var mainCanvasContent = 'plan';
    // Render the page.
    BlazeLayout.render(currentLayout, {
      mainCanvas: mainCanvasContent
    });
  }
});
