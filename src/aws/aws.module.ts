// src/aws/aws.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import awsConfig from '../config/aws.config';
import { DynamodbClientProvider } from './dynamodb/dynamodb.client';
import { S3ClientProvider } from './s3/s3.client';
import { SqsClientProvider } from './sqs/sqs.client';
import { S3Service } from './s3/s3.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: false,       // 👈 only local to this module
      load: [awsConfig],     // 👈 load aws config
    }),
  ],
  providers: [DynamodbClientProvider, S3ClientProvider, SqsClientProvider, S3Service],
  exports: [DynamodbClientProvider, S3ClientProvider, SqsClientProvider, S3Service],
})
export class AwsModule {}
