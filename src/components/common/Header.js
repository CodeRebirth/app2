import React from 'react';
import {Text,View} from 'react-native';

const Header = (props) =>{
const {viewStyle,textStyle}=styles;
return (
    <View style={viewStyle}>
<Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};
const styles={
    viewStyle:{
        backgroundColor:'#64DD17',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        padding:20,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.5,
        elevation:2,
        position:'relative'
    },
    textStyle:{
        color:'white',
        fontSize:20,
        backgroundColor:'#64DD17',
        padding:5,
        borderRadius:3,
        fontWeight:'bold'
    }
    };
export {Header}