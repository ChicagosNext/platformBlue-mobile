import * as React from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { observer } from 'mobx-react';


import { images, globalStyles } from '../../config';
// import * as config from '../../config';
import { ILoadingProps, ILoadingState } from './';
import { styles } from './styles';
import { authStore } from '../../stores';

@observer
export class Loading extends Component <ILoadingProps, ILoadingState> { 

    //Check if authenticated
    //if not show login screen

    render() {
        return ( 
            <View style={styles.background}>
                <Image source={images.logo} style={styles.image} ></Image>
            </View>
        );
    }
}