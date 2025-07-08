module.exports = async function (context, req) {
  try {
    context.log('HTTP trigger received');

    const { name, email } = req.body || {};

    if (!name || !email) {
      context.res = { status:400, body:{ error:"Provide name AND email", status:"error"} };
      return;
    }

    context.res = {
      headers:{ 'Content-Type':'application/json' },
      body: {
        greeting:`Hello ${name}!`,
        email,
        message:"POST response from Akshay's Azure Function.",
        status:"success"
      }
    };
  } catch (err) {
    context.log.error('Unhandled exception:', err);
    context.res = {
      status:500,
      headers:{ 'Content-Type':'application/json' },
      body:{ error: err.message, status:"error" }
    };
  }
};
