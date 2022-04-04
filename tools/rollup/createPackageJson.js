const content = `{
    "module": "%path%"
}
`;

/**
 * Creates the content of the package.json file, which specifies the path to the es-modules.
 * This is necessary for dynamic import and tree-shaking to work correctly.
 */
function createPackageJson(path) {
  return content.replace('%path%', path);
}

export default createPackageJson;
