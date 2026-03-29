import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", tabBarIcon: () => <Text>🏠</Text> }}
      />
      <Tabs.Screen
        name="esplora"
        options={{
          title: "Esplora",
          tabBarIcon: () => <Text>🔍</Text>,
        }}
      />
      <Tabs.Screen
        name="profilo"
        options={{
          title: "Profilo",
          tabBarIcon: () => <Text>👤</Text>,
        }}
      />
    </Tabs>
  );
}
