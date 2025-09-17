import { Injectable } from "@nestjs/common";
import { S3ClientProvider } from "./s3.client";
import { CreateBucketCommand, ListBucketsCommand } from "@aws-sdk/client-s3";

@Injectable()
export class S3Service{
    constructor (private readonly s3ClientProvider: S3ClientProvider){}
    async createBucket(bucketName: string){
        console.log('hi')
        const command = new CreateBucketCommand({ Bucket: bucketName });
        return await this.s3ClientProvider.client.send(command);
    }

    async listBuckets() {
        const command = new ListBucketsCommand({});
        return await this.s3ClientProvider.client.send(command);
      }

}