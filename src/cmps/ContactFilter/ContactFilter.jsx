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
            console.log('[field]', [field]);
            console.log('insite on set filter', this.state);
            this.props.onSetFilter({ ...this.state })
        })

    }

    render() {
        const { term } = this.state;
        return <form className="robot-filter">
                <input type="text" name="term" value={ term } placeholder="Search" onChange={ this.onChangeHandler } />
               </form>
    }
}
