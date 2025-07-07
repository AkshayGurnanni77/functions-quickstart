module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = req.body && req.body.name;
    const email = req.body && req.body.email;

    if (name && email) {
        context.res = {
            headers: { 'Content-Type': 'application/json' },
            body: {
                greeting: `Hello ${name}!`,
                email: email,
                message: "This is your POST response from Akshay's Azure Function.",
                status: "success"
            }
        };
    }
    else {
        context.res = {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
            body: {
                error: "Please provide both 'name' and 'email' in the JSON body.",
                status: "error"
            }
        };
    }

    context.done();
};
