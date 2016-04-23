FlowRouter.route('/plan2', {
  name: 'plan2',
  action: function() {
    var currentLayout = Session.get('currentLayout');
    var mainCanvasContent = 'plan2';
    // Render the page.
    BlazeLayout.render(currentLayout, {
      mainCanvas: mainCanvasContent
    });
  }
});
