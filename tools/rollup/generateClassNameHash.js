import stringHash from 'string-hash';

const generateClassNameHash = (packageName, packageVersion, relativeFileName) =>
  stringHash(`${packageName}@${packageVersion}@${relativeFileName}`)
    .toString(36)
    .substr(0, 5);

export default generateClassNameHash;
