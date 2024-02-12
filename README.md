# DeepAR SDK Demo in Iframes

This project is a simple demonstration showing how to load the [DeepAR](https://www.deepar.ai/) SDK in an iframe. The project contains three HTML files:

1. `deepar.html`: This page loads the DeepAR SDK from a CDN and initializes it with a license key and effect.
2. `friendly-iframe.html`: This page hosts an iframe which loads the `deepar.html` file from the same origin.
3. `cross-origin-iframe.html`: This page hosts an iframe which loads the DeepAR demo from a different origin.

## Usage

To run this project locally:

1. Clone the repository.
2. If you are deploying to a URL other than `localhost`, replace the placeholder `'your_license_key_here'` in `deepar.html` with your actual DeepAR license key.
3. Start a local web server in the project directory.
4. Open the `index.html` (containing the friendly iframe) and `cross-origin-iframe.html` files in your web browser through the local web server.

## Prerequisites

You only need a DeepAR license key to run the `deepar.html` file if you are deploying to a URL other than `localhost`. You can obtain one by signing up for a free account on the [DeepAR Developer Portal](https://developer.deepar.ai/).

You also need a web server to serve the HTML files. For simple local development, you can use Python's built-in HTTP server. Navigate to the project directory in your terminal and run `python3 -m http.server` (for Python 3) or `python -m SimpleHTTPServer` (for Python 2).

## Important Note

Different browsers handle cross-origin requests differently. Make sure to test your application in the same browser environment(s) that your users will be using.

Also, keep in mind that the DeepAR SDK requires access to the webcam, which might not work properly in a cross-origin iframe depending on the user's browser settings and permissions.
