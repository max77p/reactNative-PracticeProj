import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30)
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              name: `navigation.playground.SideDrawer`,
              passProps: {
                text: "This is a left side menu screen"
              }
            }
          },
          center: {
            bottomTabs: {
              children: [
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: "navigation.playground.FindPlaceScreen",
                          options: {
                            bottomTab: {
                              text: "Find Place",
                              icon: sources[0]
                            },
                            topBar: {
                              visible: true,
                              title: {
                                text: "Find Place"
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: "navigation.playground.SharePlaceScreen",
                          options: {
                            bottomTab: {
                              text: "Share Place",
                              icon: sources[1]
                            },
                            topBar: {
                              // visible: true,
                              title: {
                                text: "Share Place"
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      }
    });
  });
};

export default startTabs;
