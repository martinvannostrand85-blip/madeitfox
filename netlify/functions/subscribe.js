const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  try {
    const { email } = JSON.parse(event.body);

    if (!email) {
      return { statusCode: 400, body: JSON.stringify({ error: "Email required" }) };
    }

    await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: email,
      status: "subscribed",
      tags: ["website-signup"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    if (error.status === 400 && error.response?.body?.title === "Member Exists") {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, already: true }),
      };
    }

    console.error("Mailchimp error:", error.response?.body || error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Subscription failed" }),
    };
  }
};
