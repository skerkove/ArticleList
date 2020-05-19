

const InitialNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    App: AppNavigator
  });
  
  export default createAppContainer(InitialNavigator);