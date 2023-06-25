import { withLayoutContext } from "expo-router";
import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import { Text } from "react-native";
const DrawerNavigator = createDrawerNavigator().Navigator;
const Drawer = withLayoutContext(DrawerNavigator);

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
};

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#1DA1F2'
            }}>Dragon</Text>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default function DrawerLayout() {
    return (
        <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="(tabs)" options={{ headerShown: false, title: 'Home' }} />
            <Drawer.Screen name="bookmarks" options={{ title: 'Bookmarks' }} />
            <Drawer.Screen name="twitter-blue" options={{ title: 'Twitter Blue' }} />
        </Drawer>
    )
}