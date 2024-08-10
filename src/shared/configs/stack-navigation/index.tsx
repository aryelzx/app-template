import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../../../routes/main.routes";
import { AuthContextProvider } from "../../contexts/auth-context";
import { SafeAreaView } from "react-native-safe-area-context";

export const StackNavigator = () => {
  return (
    <NavigationContainer>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "#FFFF",
          }}
        >
          <AuthContextProvider>
            <Routes />
          </AuthContextProvider>
        </SafeAreaView>
    </NavigationContainer>
  );
};
