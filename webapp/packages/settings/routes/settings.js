FlowRouter.route('/settings', {
  name: 'settings',
  action: function() {
    var currentLayout = Session.get('currentLayout');
    var mainCanvasContent = 'settings';
    // Render the page.
    BlazeLayout.render(currentLayout, {
      mainCanvas: mainCanvasContent
    });
  }
});
