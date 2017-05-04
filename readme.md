## Platform-Blue Mobile App ##

This readct-native app will display data for all of the Blue events.


### Typescript ### 

* All typescript source files are located under the './src' directory
* All javascript files will be built into the './artifacts' directory
* Both android and ios entrypoints reference the javascript files so the project must be transpiled in order run on an emulator. 

### Install ###

Clone the repository to your local machine and install all required packages.

```
git clone https://github.com/ChicagosNext/platformBlue-mobile platformBlueMobile
npm install
```

### Testing and Debugging ###

Transpile:

```
npm run build 

or to watch files:

npm run build -- --watch
```

To start the react-native packager run this in a command window and leave it open:

```
npm run start
```

To build for android run the following command in a separate command window:
```
npm run android
```