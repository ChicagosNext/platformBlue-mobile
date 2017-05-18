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
import {INewTeamProps,INewTeamState} from './'
import {styles} from './'
import {ButtonReusable} from '../../Components/ButtonReusable'

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export class NewTeam extends Component<INewTeamProps, INewTeamState>{
    render(): JSX.Element{
        return (
            <View>
                <Text>Event Name - Add Teams</Text>
               
                {/*<Button
                    onPress ={onButtonPress}
                    title= "Create Team"
                    color= "#841584"
                />*/}
                <ButtonReusable/>
                 <TextInput
                    style = {styles.default}
                    autoFocus = {true}
                />
                    
                
            </View>
        )
    }
}