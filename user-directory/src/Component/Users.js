import React, { Component } from 'react';
import Data from './data'

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: Data,
            userIndex: 0
        }
        this.nextUser = this.nextUser.bind(this);
        this.previousUser = this.previousUser.bind(this);
    }

    

    nextUser() {
        let { userData, userIndex } = this.state;
        if (userIndex < userData.length - 1) {
            this.setState({ userIndex: userIndex + 1})
            //write a function that increments plus or minus one
        }
    }
    previousUser() {
        let { userData, userIndex } = this.state;
        if (userIndex != 0) {
            this.setState({ userIndex: userIndex - 1 })
        }
    }
        
    render() {
        let { userData, userIndex } = this.state;
        return (
            <div>
                <p>{userData[userIndex].name.first} {userData[userIndex].name.last}</p>
                <p>From: {userData[userIndex].city}, {userData[userIndex].country}</p>
                <p>Job Title: {userData[userIndex].title}</p>
                <p>Employer: {userData[userIndex].employer}</p>
                <p> </p>
                <p>Favorite Movies: </p>
                <p>1. {userData[userIndex].favoriteMovies[0]}</p>
                <p>2. {userData[userIndex].favoriteMovies[1]}</p>
                <p>3. {userData[userIndex].favoriteMovies[2]}</p>
                <button onClick={this.previousUser}>Previous</button>
                <button>Edit</button>
                <button>Delete</button>
                <button>New</button>
                <button onClick={this.nextUser}>Next</button>
            </div>
        )
    }
}