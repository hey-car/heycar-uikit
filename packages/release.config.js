module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ['@semantic-release/npm', { pkgRoot: './' }],
  ],
  branches: ['main'],
  repositoryUrl: 'https://github.com/hey-car/heycar-uikit',
};
