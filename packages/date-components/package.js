Package.describe({
  name: 'mdg:date-components',
  version: '0.1.0',
  summary: 'Simple rendering of dates',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'mdg:classnames@0.1.0',
    'mdg:borealis@0.1.0',
    'mdg:chromatic@0.1.0',
    'momentjs:moment@2.10.6',
    'tracker'], 'client');
  api.addFiles([
    'DateVar.js',
    'RelativeDate.jsx',
    'FullDate.jsx'], 'client');
  api.export(['RelativeDate', 'FullDate'], 'client');
});
