import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native'
export default class NewProjectPage extends Component<Props> {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
            }}>
            <Text style={styles.welcome}>NewProjectPage</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    }
})