Package.describe({
  name: 'fitness:scanner',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'QR-Code Scanner',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['templating', 'ecmascript']);
  api.use('fourseven:scss@3.2.0');
  api.use(['kadira:flow-router@2.6.0', 'kadira:blaze-layout@2.1.0']);
  addTemplates(api, []);
});

Cordova.depends({
  'phonegap-plugin-barcodescanner': '4.1.0'
});

function addTemplates(api, templates) {
  for (var t in templates) {
    var path = 'templates/' + templates[t];
    var files = [path + '.html', path + '.js', path + '.scss'];
    api.addFiles(files, 'client');
  }
}
