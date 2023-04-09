import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

// export interface DeltaLakeLayer {

// }

export class DeltaLakeLayer extends Construct {
  readonly layer: lambda.LayerVersion;
  constructor(scope: Construct, name: string) {
    super(scope, name);

    const pythonAssetCode = lambda.Code.fromAsset(path.join(__dirname, 'python-assets'));
    this.layer = new lambda.LayerVersion(this, 'Layer', {
      code: pythonAssetCode,
      compatibleRuntimes: [
        lambda.Runtime.PYTHON_3_7,
        lambda.Runtime.PYTHON_3_8,
        lambda.Runtime.PYTHON_3_9,
      ],
      layerVersionName: 'deltalake_layer',
    });
  }
}