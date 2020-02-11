import _ from 'lodash';
import React, {Component} from 'react';
import {Card,CardSection,Button,Confirm} from './common';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import {EmployeeUpdate,EmployeeSave,EmployeeDelete} from '../actions';
import EmployeeForm from './employeeForm';

class EmployeeEdit extends Component {
    state = {showModal:false}

    UNSAFE_componentWillMount(){
        _.each(this.props.employee,(value, prop)=>{
            this.props.EmployeeUpdate({prop,value});
        }); 
    }
    onButtonPress() {
        const {name,phone,shift} = this.props;
        this.props.EmployeeSave({name,phone,shift,uid:this.props.employee.uid});
    }
    onTextPress(){
        const {phone,shift} = this.props;
        Communications.text(phone,`Your upcoming schedule is ${shift}`);
    }
    onAccept(){
        const {uid} = this.props.employee;
        this.props.EmployeeDelete({uid});
    }
    onDecline(){
        this.setState({showModal:false})
    }
    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                <Button title="Save" onPress={this.onButtonPress.bind(this)}/>
                </CardSection>
                <CardSection>
                <Button title="Text Schedule" onPress={this.onTextPress.bind(this)}/>
                </CardSection>
                <CardSection>
                <Button title="Fire" onPress={()=>this.setState({showModal:!this.state.showModal})}/>
                </CardSection>
                <Confirm
                visible={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
                >
                    Are you sure?
                </Confirm>
            </Card>
        )
    }
}
const mapStateToProps=(state) =>{
    const {name,phone,shift} = state.employeeForm;
    return {name,phone,shift};
}
export default connect(mapStateToProps,{EmployeeSave,EmployeeUpdate,EmployeeDelete})(EmployeeEdit);