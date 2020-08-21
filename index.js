const http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(
      `Hey\n
You can start developing your Shopify theme with the normal CLI commands in the terminal below.\n
Only need to set 2 secrets: \n\n\nTHEMEKIT_PASSWORD && THEMEKIT_STORE\n\n
More details here: https://shopify.github.io/themekit/configuration/#config-file`
    );
  })
  .listen(1337, "127.0.0.1");
console.log("Server running at http://127.0.0.1:1337/");
