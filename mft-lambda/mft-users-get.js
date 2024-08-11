/* Lambda function code, not executed when application is run */

const aws = require("aws-sdk");

exports.handler = async(event, context) => {

    const documentClient = new aws.DynamoDB();
    let responseBody = "";
    let status = 0;

    const { id } = event.pathParameters

    const params = {
        Key: {
            "id": {
                S: id
            }
        },
        TableName: "mft_users"
    }

    try {
        const data = await documentClient.getItem(params).promise();
        responseBody = JSON.stringify(data);
        status = 200;
    } catch (error) {
        responseBody = "Unable to get user " + error
        status = 403;
    }

    const response = {
        statusCode: status,
        headers: {
            "Content-Type" : "application/json"
        },
        body: responseBody
    };

    return response;

};
