
# React Native Movie TV 

This is a simple movie title revealer. It shows the title of a selected movie.


## Run Locally

This project will run in AndroidTV, TvOS, Web.



Apple Device Deployment.
```bash
  yarn
```
```bash
  cd ios && pod install
```
```bash
  yarn ios    (Test on Iphone device)
```
```bash
  yarn ios  --simulator "Apple TV" --scheme "TestApp-tvOS" (Test on TVOs)
```


Android Device Deployment.
```bash
  yarn
```
```bash
  yarn start
```
```bash
  Open Android Studio and select a TV or Android device
```
```bash
  Run this emulator
```

Web Deployment.
```bash
  yarn
```
```bash
  yarn web
```

## Tech Stack

**Client:** React-Native, Redux-toolkit, Webpack, React-native-web, Typescript, Javascript

**Navigation** @noriginmedia/norigin-spatial-navigation 


