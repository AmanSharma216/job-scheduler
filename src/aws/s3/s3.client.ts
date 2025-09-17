import { S3Client } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import awsConfig from 'src/config/aws.config';
@Injectable()
export class S3ClientProvider {
  public client: S3Client;

  constructor(private readonly configService: ConfigService) {
    this.client = new S3Client({
      region: this.configService.get<string>('aws.region', 'ap-south-1'),
      credentials: {
        accessKeyId: this.configService.get<string>('aws.accessKeyId', ''),
        secretAccessKey: this.configService.get<string>('aws.secretAccessKey', ''),
      },
      endpoint: this.configService.get<string>('aws.endpoint', ''),
      forcePathStyle: true,
    });
  }
}

