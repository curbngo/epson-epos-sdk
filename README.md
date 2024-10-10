# Epson ePOS SDK for JavaScript

This project contains the ePOS Device SDK, which allows web applications to communicate with Epson POS devices.

## Overview

The ePOS Device SDK provides JavaScript APIs to interact with various POS peripherals like:

- Printers
- Cash drawers  
- Customer displays
- Barcode scanners
- Card readers
- Keyboards

It enables web-based POS applications to control these devices through a network connection.

## Key Components

- `epson-epos-sdk.js` - The main SDK file containing the device APIs
- `ePOSBuilder` - Class for building print commands
- `ePOSPrint` - Class for sending print jobs
- `Display` - Class for controlling customer displays
- `Keyboard` - Class for handling keyboard input
- `MSR` - Class for magnetic stripe readers
- `OtherPeripheral` - Generic class for other devices

## Usage

Include the SDK in your web application:

```html
<script src="epson-epos-sdk.js"></script>
```

Create a connection to the ePOS device:

```js
var eposDevice = new epson.ePOSDevice();
eposDevice.connect('192.168.1.1', 8008, callback);
```

Use the device objects to control peripherals:

```js 
var printer = new epson.ePOSPrint();
printer.addTextAlign(printer.ALIGN_CENTER);
printer.addText('Hello World!');
printer.send();
```

## Documentation

Refer to the Epson ePOS Device SDK documentation for full API details and usage instructions.

## License

Copyright (C) Seiko Epson Corporation 2016 - 2023. All rights reserved.
```