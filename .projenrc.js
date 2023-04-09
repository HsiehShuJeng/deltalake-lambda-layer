const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'scott.hsieh',
  authorName: 'Shu-Jeng Hsieh',
  authorAddress: 'https://fantasticsie.medium.com/',
  description: 'A Lambda layer which makes manipulating Delta Lake data with Pandas feasible',
  keywords: [
    'aws',
    'cdk',
    'delta-lake',
    'aws-lambda',
    'aws-lambda-layer',
    'pandas'
  ],
  cdkVersion: '2.73.0',
  majorVersion: 2,
  defaultReleaseBranch: 'main',
  name: 'deltalake-lambda-layer',
  repositoryUrl: 'https://github.com/HsiehShuJeng/deltalake-lambda-layer.git',
  deps: [
    'aws-cdk-lib',
    'constructs@^10.1.35'
  ],
  devDeps: [
    'aws-cdk-lib',
    'constructs@^10.1.35',
  ],
  bundledDeps: ['@types/jest'],
  eslint: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['HsiehShuJeng'],
  },
  releaseToNpm: true,
  publishToPypi: {
    distName: 'deltalake_lambda_layer',
    module: 'deltalake_lambda_layer',
  },
  publishToMaven: {
    mavenGroupId: 'io.github.hsiehshujeng',
    mavenArtifactId: 'cdk-emrserverless-quickdemo-with-delta-lake',
    javaPackage: 'io.github.hsiehshujeng.deltalake.lambda.layer',
    mavenEndpoint: 'https://s01.oss.sonatype.org', // check https://central.sonatype.org/publish/release/#login-into-ossrh
  },
  publishToNuget: {
    dotNetNamespace: 'ScottHsieh.Cdk',
    packageId: 'Deltalake.Lambda.Layer',
  },
  publishToGo: {
    moduleName: 'github.com/HsiehShuJeng/deltalake-lambda-layer-go'
  }
});
project.synth();