const path = require('path');

const componentsPrefix = '@hey-ui/';
const componentsDir = path.resolve(__dirname, '../../packages');

/**
 * Local import
 */
module.exports = componentResolver = {
  apply(resolver) {
    resolver.plugin('module', function (init, callback) {
      if (init.request.startsWith(componentsPrefix)) {
        const componentName = init.request.replace(componentsPrefix, '');

        console.log('!componentsPrefix!');

        this.doResolve(
          'resolve',
          { ...init, request: `${componentsDir}/${componentName}/src` },
          `Resolve ${init.request}`,
          callback,
        );
      } else {
        callback();
      }
    });
  },
};
