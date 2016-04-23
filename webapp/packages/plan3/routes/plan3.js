FlowRouter.route('/plan3', {
  name: 'plan3',
  action: function() {
    var currentLayout = Session.get('currentLayout');
    var mainCanvasContent = 'plan3';
    // Render the page.
    BlazeLayout.render(currentLayout, {
      mainCanvas: mainCanvasContent
    });
  }
});
