import React from 'react';
import {Text,View,Modal} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';

const Confirm=({children,visible,onAccept,onDecline})=>{
    const {CardSectionStyle,textstyle,containerStyle} = styles;
    return(
        <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={()=>{}}
        >
            <View style = {containerStyle}>
                <CardSection style = {CardSectionStyle}>
                    <Text style = {textstyle}>
                        {children}
                    </Text>
                </CardSection>
                <CardSection>
                    <Button title="Yes" onPress={onAccept}>

                    </Button>
                    <Button title="No" onPress={onDecline}>

                    </Button>
                </CardSection>
            </View>
        </Modal>
        );
}

const styles = {
    CardSectionStyle:{
        justifyContent:'center'
    },
    textstyle:{
        flex:1,
        fontSize:18,
        textAlign:'center',
        lineHeight:40
    },
    containerStyle:{
        backgroundColor:'rgba(0,0,0,0.75)',
        position:'relative',
        flex:1,
        justifyContent:'center',
    }
};

export {Confirm};