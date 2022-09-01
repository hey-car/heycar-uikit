const path = require('path');

const componentsPrefix = '@heycar-uikit/';
const componentsDir = path.resolve(__dirname, '../../packages');

/**
 * Local import
 */


class WebpackResolveComponentSourcePlugin {
  apply(resolver) {
    const target = resolver.ensureHook('resolved');

    resolver
      .getHook('module')
      .tapAsync('pluginName', (request, resolveContext, callback) => {
        const {
          descriptionFileData,
          request: requestPath,
        } = request;

        if (requestPath && requestPath.match(componentsPrefix)) {

          const componentName = requestPath.replace(`./${componentsPrefix}`, '');
          const path = `${componentsDir}`;

        console.log('requestPath -->', requestPath);
        console.log('path -->', path, '---', `./${componentName}/src`);
          console.log('descriptionFileData -->', request);


          const resolveRequest = {
            ...request,
            path,
            request: `./${componentName}/src`
          }


          // '/Users/oleksandrzhukov/Heycar/hey-ui/node_modules',
          // './@heycar-uikit/collapse',
          // '/Users/oleksandrzhukov/Heycar/hey-ui/packages',
          // './xxxxx/src',

          console.log('resolveRequest', resolveRequest);


            resolver.doResolve(
              // 'resolve',
              target,
              resolveRequest,
              `Resolve ${requestPath}`,
              resolveContext,
              callback,
            );
          } else {
            callback();
          }
      }
    );
  }
}
module.exports =  WebpackResolveComponentSourcePlugin;

const componentResolver = {
  apply(resolver) {

    // resolver.hooks.emit.tapAsync(
    //   'module',
    //   (init, callback) => {
        // if (init.request.startsWith(componentsPrefix)) {
        //   const componentName = init.request.replace(componentsPrefix, '');

        //   this.doResolve(
        //     'resolve',
        //     { ...init, request: `${componentsDir}/${componentName}/src` },
        //     `Resolve ${init.request}`,
        //     callback,
        //   );
        // } else {
        //   callback();
        // }
    }

    // resolver.plugin('module', function (init, callback) {
      // if (init.request.startsWith(componentsPrefix)) {
      //   const componentName = init.request.replace(componentsPrefix, '');

      //   this.doResolve(
      //     'resolve',
      //     { ...init, request: `${componentsDir}/${componentName}/src` },
      //     `Resolve ${init.request}`,
      //     callback,
      //   );
      // } else {
      //   callback();
      // }
    // });
};
