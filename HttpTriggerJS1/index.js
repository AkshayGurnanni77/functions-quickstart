module.exports = async function (context, req) {
  try {
    context.log('HTTP trigger received');

    // Safely parse the body
    const body = req.body ?? {};
    const name = body.name ?? "";
    const email = body.email ?? "";

    if (!name || !email) {
      context.log.warn('Missing name or email in request body:', body);
      context.res = {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
        body: {
          error: "Please provide both 'name' and 'email' in the JSON body.",
          status: "error"
        }
      };
      return;
    }

    // Success response
    context.res = {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: {
        greeting: `Hello ${name}!`,
        email,
        message: "POST response from Akshay's Azure Function.",
        status: "success"
      }
    };

  } catch (err) {
    // Much better error logging
    context.log.error('Unhandled exception:', {
      message: err.message,
      stack: err.stack
    });

    context.res = {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
      body: {
        error: err.message,
        stack: err.stack,
        status: "error"
      }
    };
  }
};
