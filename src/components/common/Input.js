import React from 'react';
import {TextInput,Text,View} from 'react-native';

const Input=({label,value,onChangeText,placeholder,secureTextEntry})=>
{
    const {inputStyle,textStyle,viewStyle}=styles;
    return(
        <View style={viewStyle}>
            <Text style={textStyle}>
                {label}
            </Text>
            <TextInput style={inputStyle}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            />
        </View>
    );
}

const styles={
    inputStyle:{
        color:'#000',
        paddingRight:3,
        fontSize:16,
        lineHeight:23,
        flex:2,
    },
    textStyle:{
        fontSize:18,
        paddingLeft:2,
        flex:1,
        fontWeight:'bold'
    },
    viewStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    }
}

export {Input}