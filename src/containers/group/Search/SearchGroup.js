import React, {Component} from 'react';

import Input from '../../../components/UI/Input/Input';
import GroupItem from '../Item/GroupItem';

import classes from './SearchGroup.module.css';

class SearchGroup extends Component {
    state = {
        searchString: '',
        groups:[]
    }

    onChangeSearchHandler = (event) => {
        this.setState({searchString: event.target.value});
    }

    onClickSearchHandler = () => {
        this.setState({groups:[
            {id:1,name:'Группа 1'},
            {id:5,name:'Группа еще одна'},
            {id:4,name:'Группа хиппи'},
            {id:7,name:'Группа 4'},
            {id:56,name:'Группа 7'},
            {id:123,name:'братство'},
        ]});
    }

    render() {
        let groupsFound = null;

        if (this.state.groups.length !== 0) {
            groupsFound = this.state.groups.map(el => {
                return (<GroupItem key={el.id} name={el.name} id={el.id} clicked={this.props.addGroup}/>);
            });
        }

        return(
            <>
                <div className={classes.SearchPanel}>
                    <Input
                        elementType='input'
                        inputType='search'
                        elementClass='search'
                        inputClass='inputSearch'
                        placeholder='Название группы ...'
                        changed={this.onChangeSearchHandler}/>
                    {/* <button className={classes.Search} onClick={() => {this.props.searchGroup(this.state.searchString)}}>Найти</button> */}
                    <button className={classes.Search} onClick={this.onClickSearchHandler}><i class="fas fa-search"></i></button>
                </div>
                <ul className={classes.GroupList}>
                    {groupsFound}
                </ul>
            </>
        );
    }
}

export default SearchGroup;