import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const MyComponent = () => {
    const [value, setValue] = React.useState('first');

    return (
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
            <View>
                <Text>Uczeń</Text>
                <RadioButton value="uczen" />
            </View>
            <View style={{marginLeft:20}}>
                <Text>Nauczyciel</Text>
                <RadioButton value="Nauczyciel" />
            </View>
            </View>
        </RadioButton.Group>
    );
};

export default MyComponent;
