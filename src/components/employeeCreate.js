import React, {Component} from 'react';
import {Card,CardSection,Button} from './common'
import {connect} from 'react-redux';
import {EmployeeUpdate,employeeCreate} from '../actions';
import EmployeeForm from './employeeForm';

class EmployeeCreate extends Component {
    onButtonPress(){
        const {name,phone,shift}=this.props;
        this.props.employeeCreate({name,phone,shift:shift||'monday'});
    }

    render(){
        return (
           <Card>
               <EmployeeForm {...this.props} />
               <CardSection>
                   <Button title='Create'
                   onPress={this.onButtonPress.bind(this)}
                   />
               </CardSection>
           </Card>
        );
    }
}

const mapStateToProps =(state) =>{
    const {name,phone,shift}=state.employeeForm;
    return {name,phone,shift};
}
export default connect(mapStateToProps,{EmployeeUpdate,employeeCreate})(EmployeeCreate);