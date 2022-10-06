import { StyleSheet, TextInput, View } from 'react-native';
import { globalStyles } from '../styles';
import RNPickerSelect from 'react-native-picker-select';

export const Main = () => {
    return (
        <View style={[globalStyles.view, globalStyles.grey]}>
            <View style={styles.form}>
                <TextInput
                    style={styles.formField}
                    onChangeText={console.log}
                    placeholder="This is a placeholder"
                />
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' }
                    ]}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        backgroundColor: 'red',
        flex: 1
    },
    formField: {
        marginBottom: 22
    }
});
