import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, Text, View } from 'react-native';
import { Main } from './components/Main';
import { globalStyles } from './styles';

export const App = () => {
    const Wrapper = Platform.OS === 'ios' ? SafeAreaView : View;
    return (
        <Wrapper style={globalStyles.view}>
            <StatusBar style="auto" />
            <Main />
            <Text>Platform: {Platform.OS}</Text>
        </Wrapper>
    );
};

export default App;
