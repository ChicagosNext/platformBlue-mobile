import * as React from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TextInput,
  Button,
  Alert
} from 'react-native';
import { observer } from 'mobx-react';
import {IButtonProps,IButtonState} from './'

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export class ButtonReusable extends Component<IButtonProps, IButtonState>{
    render(): JSX.Element{
        return (
            <View>
                <Button
                    onPress ={onButtonPress}
                    title= "Create Team"
                    color= "#841584"
                />
            </View>
        )
    }
}