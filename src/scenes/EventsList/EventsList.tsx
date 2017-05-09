import * as React from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { observer } from 'mobx-react';




// I'm going to look at this later import { images, globalStyles } from '../../config';
// import * as config from '../../config';
import { IEventsListProps, IEventsListState } from './';
import { styles } from './styles';


@observer
export class Loading extends Component <IEventsListProps, IEventsListState> { 

    //Check if authenticated
    //if not show login screen

    render() {

    
        return ( 
            <View style={styles.background}>
                
            </View>
        );
    }
}