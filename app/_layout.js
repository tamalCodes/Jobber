import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  const onReady = useCallback(() => {
    SplashScreen.hideAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack></Stack>;
};

export default Layout;
