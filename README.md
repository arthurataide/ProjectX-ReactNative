# React Native Project

## Installation guide

Clone repository from GitHub.

Open a terminal:

`cd /ProjectX-ReactNative`

The command bellow installs the dependencies. 
```
npm install
yarn install
```
After finish we need to run and install CocoaPods dependencies.

`cd ios && pod install`

Finishing run `cd ..` to go back to the project root.

`cd ..`

Run the Project. 

With finder, go the ProjectX-ReactNative/iOS and open the file Project.xcworkspace.

### Obs: Before building and run the Project, check the signing & capabilites. You must have a developer account signed and a unique bundle identifier. Check the Image below.

![](/readmeFiles/ScreenShot.png)

Once Xcode is open and you check your developer account, click build and run the app.  The build might take a while.

Finished, the app will open on the simulator or device.