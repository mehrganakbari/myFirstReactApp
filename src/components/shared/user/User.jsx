import React from "react";
import './User.css';

class User extends React.Component{
    editBarRef = React.createRef( );
    render(){
        return(
            <div className="user bg-primary">
                <img className="avatar" src={ this.props.user.avatar } alt="" />
                <h2 className="user-info">{ this.props.user.first_name } - { this.props.user.last_name } </h2>
                <div className="edit-bar hide" ref={ (element) => this.editBarRef.current = element }>
                    <input onChange={( ev ) => this.props.editUser( ev , this.props.user.id )} type="text" value={ this.props.user.first_name } />
                    <input id="family" onChange={( ev ) => this.props.editUser( ev , this.props.user.id )} type="text" value={ this.props.user.last_name } />
                </div>
                <h5>{ this.props.user.email }</h5>
                <div className="action-bar">
                    <button className="delete-user" onClick={ ( ev ) => this.props.deleteUser( ev , this.props.user.id ) }>Delete</button>
                    <button className="edit-user" onClick={ ( ev ) => {
                        this.editBarRef.current.classList.toggle("hide");
                    } }>Edit</button>
                </div>
            </div>
        )
    }
}
export default User;