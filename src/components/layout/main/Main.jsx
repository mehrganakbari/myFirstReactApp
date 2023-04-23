import { Component } from "react";
import UserList from "../../shared/user-list/UserList";

class Main extends Component{

    constructor(){
        super();
    }

    state = {
        users : []
    }

    deleteUser( userId ){      
        this.setState(
            {
                users : this.state.users.filter( user => user.id != userId )
            }
        )
    }
    editUser( ev , userId ){
        var newUsers = [...this.state.users];
        var userIndex = newUsers.findIndex( user => user.id == userId )
        if( ev.target.getAttribute( 'id' ) == 'family' ){
            newUsers[userIndex].last_name = ev.target.value;
        }else{
            newUsers[userIndex].first_name = ev.target.value;
        }
        this.setState( {
            users : newUsers
        })
    }    

    render(){
        return (
            <UserList users={ this.state.users } deleteUser={this.deleteUser.bind( this ) } editUser={ this.editUser.bind(this) } />
        )
    }

    componentDidMount(){
        fetch("https://reqres.in/api/users?page=2")
        .then( res => res.json() )
        .then( res => {
            this.setState( {
                users : res.data
            } )
        } )
    }
    componentDidUpdate(){}
}

export default Main;