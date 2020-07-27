import * as cdk from '@aws-cdk/core';
import { Bucket, BlockPublicAccess, BucketEncryption } from '@aws-cdk/aws-s3';
import { RemovalPolicy } from '@aws-cdk/core';
export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Bucket(this, 'hello-cdk-bucket', {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: BucketEncryption.KMS_MANAGED,
      publicReadAccess: false,
      removalPolicy: RemovalPolicy.DESTROY,
      versioned: false,
    });
  }
}
