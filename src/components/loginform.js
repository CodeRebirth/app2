import React, { Component } from 'react';
import {Card,CardSection,Input,Button,Spinner} from './common';
import {View,Text} from 'react-native';
import {onEmailChanged,onPasswordChanged,loginControl} from '../actions';
import {connect} from 'react-redux';

class LoginForm extends Component {
    onEmailChange(text){
        this.props.onEmailChanged(text);
    }
    onPasswordChange(text){
        this.props.onPasswordChanged(text);
    }
    onButtonpress()
    {
        const {email,password}=this.props;
        this.props.loginControl({email,password});
    }
    renderError(){
        if(this.props.error){
            return(
                <View style={{backgroundColor:'white'}}>
                    <Text style={styles.errorStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }
    renderButton(){
        if(this.props.loading){
            return(
                <Spinner/>
            );
        }
        return(
    <Button 
    title='Login/Signup'
    onPress={this.onButtonpress.bind(this)}
    >
    </Button> 
        );
    }
    
    render() {
        return (
            <Card>
            <CardSection>
                <Input 
                label='Email' 
                placeholder='xyz@gmail.com'
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
                >
                </Input>
            </CardSection>
            <CardSection>
                <Input 
                secureTextEntry 
                label='Password' 
                placeholder='Password'
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
                >
                </Input>
            </CardSection>
            {this.renderError()}
            <CardSection>
               {this.renderButton()}
            </CardSection>
            </Card>  
        );
    }
}
const styles = {
    errorStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}

const mapStateToProps=state=>{
    return{
        email:state.auth.email,
        password:state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading
    }
};

export default connect(mapStateToProps,{onEmailChanged,onPasswordChanged,loginControl}) (LoginForm);