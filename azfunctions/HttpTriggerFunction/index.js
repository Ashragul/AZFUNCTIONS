module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.test)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.testss || req.body.test)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};