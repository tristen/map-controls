## Building

TODO

### base64 encoding image controls in osx

    openssl enc -base64 -in design-src/your-controls.png | tr -d '\n' | pbcopy

__Note for IE7 users:__ base64 encoded images are not supported. To include these users you should link directly to a hosted .png version of the from the css.
