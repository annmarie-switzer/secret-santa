import { StyleSheet, Text } from 'react-native';
import theme from '../styles';

export const HelloWorld = () => (
    <Text style={styles.container}>Hello, world.</Text>
);

const styles = StyleSheet.create({
    container: {
        color: theme.PRIMARY_COLOR,
        fontSize: 32,
        fontWeight: 'bold',
        backgroundColor: 'orange',
    }
});
