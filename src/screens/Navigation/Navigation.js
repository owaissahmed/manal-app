import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Splash from "../Splash";
import Home from "../Home";
import Login from "../Login";
import CarWash from "../CarWash";
import Signup from "../Signup";
import Services from "../Services";
import AddCar from "../AddCar";
import AddCarPhoto from "../AddCarPhoto";
import CarVehicle from "../CarVehicle";
import CarModel from "../CarModel";
import ScheduleOrder from "../ScheduleOrder";
import Location from "../Location";
import Subcriptions from "../Subcriptions";
import FrequencyDetail from "../FrequencyDetail";
import Payment from "../Payment";
import ThankYou from "../ThankYou";

const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} /> */}
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Location" component={Location} options={{ headerShown: true, headerTransparent: true, headerTitleStyle: { color: "#770996" }, headerTitle: 'Location' }} />
            <Stack.Screen name="ScheduleOrder" component={ScheduleOrder} options={{ headerShown: true, headerTransparent: true, headerTitleStyle: { color: "#770996" }, headerTitle: 'SCHEDULE YOUR ORDER' }} />
            <Stack.Screen name="CarVehicle" component={CarVehicle} options={{ headerShown: true, headerTransparent: true, headerTitleStyle: { color: "#770996" }, headerTitle: 'SELECT VEHICLE MAKE' }} />
            <Stack.Screen name="Subcriptions" component={Subcriptions} options={{ headerShown: true, headerTransparent: true, headerTitleStyle: { color: "#770996" }, headerTitle: 'CAR WASH' }} />
            <Stack.Screen name="FrequencyDetail" component={FrequencyDetail} options={{ headerShown: true, headerTransparent: true, headerTitleStyle: { color: "#770996" }, headerTitle: 'CAR WASH FREQUENCY:' }} />
            <Stack.Screen name="ThankYou" component={ThankYou} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: true, headerTransparent: true, headerTitleStyle: { color: "#770996" }, headerTitle: 'CREATE AN ACCOUNT' }} />
            <Stack.Screen name="CarWash" component={CarWash} options={{ headerShown: true, headerTransparent: true, headerTitleStyle: { color: "#770996" }, headerTitle: 'CAR WASH' }} />
            <Stack.Screen name="CarModel" component={CarModel} options={{ headerShown: true, headerTransparent: true, headerTitleStyle: { color: "#770996" }, headerTitle: 'MODEL YEAR & COLOR' }} />
            <Stack.Screen name="AddCar" component={AddCar} options={{ headerShown: true, headerTransparent: true, headerTitleStyle: { color: "#770996" }, headerTitle: 'ADD A CAR' }} />
            <Stack.Screen name="AddCarPhoto" component={AddCarPhoto} options={{ headerShown: true, headerTransparent: true, headerTitleStyle: { color: "#770996" }, headerTitle: 'ADD A CAR' }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: true, headerTransparent: true, headerTitleStyle: { color: "#770996" } }} />
            <Stack.Screen name="Services" component={Services} options={{ headerShown: true, headerTransparent: true, headerTitleStyle: { color: "#770996" }, headerTitle: 'OUR SERVICES' }} />
            <Stack.Screen name="Payment" component={Payment} options={{ headerShown: true, headerTransparent: true, headerTitleStyle: { color: "#770996" }, headerTitle: 'PAYMENT DETAILS' }} />
        </Stack.Navigator>
    )
}

export default Navigation
