# finn-bolig-scraping

I hate myself so this project is written in vanilla js. Because the aws-lambda runtime is a pain in the ass.

For this project to work you need some infrastructure, i could write som terraform for it, but I dont feel like it. 

The things you need are:
- a S3 bucket 
- a lambda function
- a sns notifcation that triggers your lambda function every 12 hours. 

To deploy the project, use the aws-cli.

```
zip -r lambdaFunc.zip . -q && aws lambda update-function-code --function-name scrapeFinnApi --zip-file fileb://./lambdaFunc.zip
```
