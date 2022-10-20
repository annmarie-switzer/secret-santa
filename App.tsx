import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { EventForm } from './components/EventForm';

export const App = () => {
    const [fontsLoaded] = useFonts({
        XmasSweaterStitch: require('./assets/fonts/XmasSweaterStitch.ttf')
    });

    console.log(fontsLoaded);

    const Wrapper = Platform.OS === 'ios' ? SafeAreaView : View;

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Wrapper style={styles.wrapper}>
            <StatusBar style="auto" />
            <Text style={{ fontFamily: 'XmasSweaterStitch', fontSize: 50 }}>
                Merry Christmas! ™§«†®
            </Text>
            <EventForm />
            <Text style={styles.footer}>Platform: {Platform.OS}</Text>
        </Wrapper>
    );
};

export default App;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 5,
        padding: 0
    },
    footer: {
        marginTop: 'auto',
        borderColor: 'green',
        borderWidth: 5
    }
});
