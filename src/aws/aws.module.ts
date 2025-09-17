// src/aws/aws.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import awsConfig from '../config/aws.config';
import { DynamodbClientProvider } from './dynamodb.client';
import { S3ClientProvider } from './s3.client';
import { SqsClientProvider } from './sqs.client';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: false,       // 👈 only local to this module
      load: [awsConfig],     // 👈 load aws config
    }),
  ],
  providers: [DynamodbClientProvider, S3ClientProvider, SqsClientProvider],
  exports: [DynamodbClientProvider, S3ClientProvider, SqsClientProvider],
})
export class AwsModule {}
