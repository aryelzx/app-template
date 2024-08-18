import {
  Button,
  FlatList,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";
import {
  PushNotificationState,
  usePushNotifications,
} from "../../shared/hooks/usePushNotifications";

export const HomeScreen = () => {
  const { expoPushToken, notification, sendPushNotification } =
    usePushNotifications();
  const data = JSON.stringify(notification, undefined, 2);

  return (
    <>
      <View style={styles.container}>
        <Text>Token: {expoPushToken}</Text>
        <Text style={{ color: "#000" }}>{data}</Text>
        <Button
          title="Send notification"
          onPress={() => sendPushNotification}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    maxHeight: 900,
    overflow: "scroll"
  },
});
