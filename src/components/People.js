import React, { Component } from 'react';
import getAge from '../getAge';

export default class Person extends Component {
    render() {
        return (
            <div className="people">
                {this.props.people.map(person => {
                return(
                <div className="person">
                    <img className="person-img" src={person.picture} />
                    <div className="name-age">
                        <p className="full-name">{person.name}</p>
                        <p className="age">{getAge(person.birthday.slice(6, 10))}</p>
                    </div>
                </div>)})}
            </div>
        );
    }
}
