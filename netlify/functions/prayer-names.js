exports.handler = async (event) => {
  if (event.httpMethod === "POST") {
    const body = JSON.parse(event.body);
    console.log("Received names:", body.names);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Names received", names: body.names })
    };
  }
  return { statusCode: 405, body: "Method not allowed" };
};