exports.handler = async (event) => {
  if (event.httpMethod === "POST") {
    const body = JSON.parse(event.body);
    console.log("Invite sent to:", body.email);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Invite sent to ${body.email}` })
    };
  }
  return { statusCode: 405, body: "Method not allowed" };
};