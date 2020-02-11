import _ from 'lodash';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import { FlatList } from 'react-native';
import {EmployeeFetch} from '../actions';
import ListItem from './listItem';
class EmployeeList extends Component{
    UNSAFE_componentWillMount(){
        this.props.EmployeeFetch();
    }
    renderItem(employee){
        return <ListItem employee={employee.item}/>
    }
render(){
    return(
        <FlatList style={{flex:1,height:100}} 
        data = {this.props.employees}
        renderItem={this.renderItem}
        keyExtractor={employee=>employee.phone}
        />
    );
    }
}
const mapStateToProps=state=>{
    const employees = _.map(state.employees,(val,uid)=>{
        return {...val,uid};
    });
    
    return {employees};
}
export default connect(mapStateToProps, {EmployeeFetch})(EmployeeList);

