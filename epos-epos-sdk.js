(function (window, undefined) {
  // A simple function to say Hello
  function helloWorld() {
    console.log("Hello, World! from Epson ePOS SDK");
  }

  // Attach helloWorld function to the global window object
  window.helloWorld = helloWorld;

  // Log a message to verify the SDK is loaded
  console.log("epson-epos-sdk.js has been loaded successfully.");
})(window);
