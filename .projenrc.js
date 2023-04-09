const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'scott.hsieh',
  authorAddress: 'https://fantasticsie.medium.com/',
  cdkVersion: '2.73.0',
  defaultReleaseBranch: 'main',
  name: 'deltalake-lambda-layer',
  repositoryUrl: 'https://github.com/HsiehShuJeng/deltalake-lambda-layer.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();