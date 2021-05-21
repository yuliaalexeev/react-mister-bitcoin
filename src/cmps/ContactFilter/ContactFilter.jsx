import React, { Component } from 'react'


export class ContactFilter extends Component {
    state = {
        term: ''
    }

    onChangeHandler = (ev) => {
        console.log('ev', ev.target)

        const field = ev.target.name
        const value = ev.target.value
        this.setState({ [field]: value }, () => {
            //state[field]= value
            this.props.onSetFilter({ ...this.state })
        })

    }

    render() {
        const { term } = this.state;
        return <form className="robot-filter">
                <input type="text" className="form-input" name="term" value={ term } placeholder="Search" onChange={ this.onChangeHandler } />
               </form>
    }
}
