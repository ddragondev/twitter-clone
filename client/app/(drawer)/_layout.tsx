import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import { Text } from "react-native";
// const DrawerNavigator = createDrawerNavigator().Navigator;
// const Drawer = withLayoutContext(DrawerNavigator);
import { Drawer } from "expo-router/drawer";

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
};

function CustomDrawerContent(props: any) {

    const filterRoutes = props?.state?.routes?.filter((route: any) => route.name !== 'index')

    return (
        <DrawerContentScrollView {...props}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#1DA1F2'
            }}>Dragon</Text>


            <DrawerItemList {...props}
                state={{ ...props?.state, routes: filterRoutes }}
            />

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