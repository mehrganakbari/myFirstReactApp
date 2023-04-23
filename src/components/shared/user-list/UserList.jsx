import React from "react";
import User from "../user/User";
import './UserList.css';

class UserList extends React.Component{

    constructor(){
        super();
    }
    
    render(){
        return(
            <div className="user-list">
                {
                    this.props.users.length > 0 ? 
                        this.props.users.map( user => <User key={user.id} user={user} deleteUser={this.props.deleteUser} editUser={this.props.editUser} /> )
                    :
                        ""
                }
            </div>
        )
    }

    componentDidMount(){}
}

export default UserList;