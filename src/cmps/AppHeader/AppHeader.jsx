
import { Component } from 'react';
import './AppHeader.scss';
import { NavLink, withRouter } from 'react-router-dom';

class _AppHeader extends Component {

    render() {
        return (
            <>
                <nav className="app-header" >
                    <NavLink exact activeClassName="active" to="/">Home</NavLink>
                    <NavLink to="/contact">Contacts</NavLink>
                    {/* <NavLink to="/about">About</NavLink> */}
                    {/* <button onClick={ this.onBack }>Back</button> */}
                    <NavLink exact activeClassName="active" to="/">Bitcoin</NavLink>
                </nav>
                
            </>
        )
    }
}

export const AppHeader = withRouter(_AppHeader)
