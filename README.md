# Cloud Resume Challenge - AWS

## Project Overview

The Cloud Resume Challenge is a comprehensive project that integrates various technologies and practices to build and deploy a personal resume website. After completing my AWS Cloud Practioner certificate, I wanted to put my knowledge to the test and challenge myself with a project developed around AWS services. Here’s how the different components work together:

## Tools, Technologies, and Learnings

### Frontend Development
* **HTML, CSS, and JavaScript**: Designed and developed a responsive website.
* **JavaScript Visitor Counter**: Implemented a dynamic visitor counter to track website visits.

### Infrastructure
* **AWS S3**: Hosted the static website content.
* **AWS Lambda**: Managed serverless functions.
* **AWS API Gateway**: Served as the API endpoint for the Lambda functions.
* **AWS DynamoDB**: Stored visitor count data.
* **AWS CloudFront & ACM**: Delivered content with low latency and managed custom domain name.

### DevOps Practices
* **Infrastructure as Code (IaC)**: Used Terraform to automate the provisioning of AWS resources.
* **Continuous Integration/Continuous Deployment (CI/CD)**: Set up GitHub Actions for automated deployment and testing.
* **Monitoring and Logging**: Utilized CloudWatch for monitoring application performance and logging events.

### Security
* **IAM Roles and Policies**: Implemented best practices for AWS Identity and Access Management.
* **Environment Variables and Secret Keys**: Secured sensitive information using environment variables.



* Gained experience with AWS CLI and SDKs
* Version control (Git and GitHub)


### Backend / Visitor Counter API Integration
* Implemented a dynamic visitor counter on my S3-hosted static website using AWS Lambda and DynamoDB.
* Configured Lambda with the function URL setting to create a lightweight API, with the Lambda function acting as an intermediary between the website and DynamoDB.
* Each page visit triggers the Lambda function via its HTTPS endpoint, which retrieves, increments, and updates the view count in DynamoDB, ensuring a scalable and real-time visitor tracking system.
  - Snippet of the Python code below:

```python
import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloudresumechallenge-db')

def lambda_handler(event, context):
    response = table.get_item(Key={
        'id':'1'
    })
    views = response['Item']['views']
    views = views + 1
    print(views)
    response = table.put_item(Item={
        'id':'1',
        'views': views
    })
    
    return views
```