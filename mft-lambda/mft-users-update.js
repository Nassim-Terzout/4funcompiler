/* Lambda function code, not executed when application is run */

const aws = require("aws-sdk");

exports.handler = async(event, context) => {

    const documentClient = new aws.DynamoDB.DocumentClient();
    let responseBody = "";
    let status = 0;

    const { id, fins } = JSON.parse(event.body);

    const params = {
        Key: {
            id: id
        },
        TableName: "mft_users",
        UpdateExpression: "set fins = :f",
        ExpressionAttributeValues: {
            ":f": fins
        },
        ReturnValues : "UPDATED_NEW"
    };

    try {
        const data = await documentClient.update(params).promise();
        responseBody = JSON.stringify(data);
        status = 201;
    } catch (error) {
        responseBody = "Unable to update user" + error;
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
