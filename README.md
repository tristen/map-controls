## Building

TODO

## Icon Assets

Icon src is in .svg format. exported as .png and base64 encoded in unix using the following command:

    openssl enc -base64 -in design-src/your-controls.png | tr -d '\n' | pbcopy

__Note:__ base64 encoded data is not supported in IE7.


## TODO

- Write this readme
- Build script
