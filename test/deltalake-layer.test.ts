import * as cdk from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { DeltaLakeLayer } from '../src/deltalake-layer';

describe('DeltaLakeLayer', () => {
  test('DeltaLakeLayer', () => {
    const app = new cdk.App();
    const dummyStack = new cdk.Stack(app, 'DummyStack', {
      env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION,
      },
    });
    new DeltaLakeLayer(dummyStack, 'DeltaLake');
    const template = Template.fromStack(dummyStack);
    template.resourceCountIs('AWS::Lambda::LayerVersion', 1);
    template.hasResourceProperties('AWS::Lambda::LayerVersion', Match.objectLike({
      CompatibleRuntimes: [
        'python3.7',
        'python3.8',
        'python3.9',
      ],
      LayerName: 'deltalake_layer',
    }));
  });
});
