import React from 'react';
import {Text,TouchableOpacity} from 'react-native';



const Button=({onPress,title})=>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.buttonStyles}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};
const styles={
    buttonStyles:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:4,
        borderWidth:3,
        borderColor:'#5FC9F9',
        marginTop:10,
        marginBottom:10,
        
    },
    text:{
        alignSelf:'center',
        fontSize:15,
        color:'#5FC9F9',
        fontWeight:'bold',
        backgroundColor:'#fff',
        paddingTop:8,
        paddingBottom:8,
    }
}
export {Button}