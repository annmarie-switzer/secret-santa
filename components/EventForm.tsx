import { StyleSheet, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Feather } from '@expo/vector-icons';
import { vars } from '../styles';

export const EventForm = () => {
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                onChangeText={console.log}
                placeholder="This is a placeholder"
                placeholderTextColor="red"
            />
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' }
                ]}
                style={{
                    ...selectStyles,
                    iconContainer: {
                        top: 16,
                        right: 12
                    }
                }}
                Icon={() => {
                    return (
                        <Feather
                            name="chevron-down"
                            size={24}
                            color={vars.textColor}
                        />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        padding: 16,
        color: vars.textColor
    },
    input: {
        fontSize: 16,
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: vars.formFieldBorderColor,
        borderRadius: 4,
        color: vars.textColor,
        marginBottom: 16
    }
});

const selectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: vars.formFieldBorderColor,
        borderRadius: 4,
        color: vars.textColor,
        paddingRight: 30, // to ensure the text is never behind the icon
        marginBottom: 16
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: vars.formFieldBorderColor,
        borderRadius: 4,
        color: vars.textColor,
        paddingRight: 30, // to ensure the text is never behind the icon
        marginBottom: 16
    }
});
