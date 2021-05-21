
import { Component } from 'react';
import './AppHeader.scss';
import { NavLink, withRouter } from 'react-router-dom';

class _AppHeader extends Component {

    render() {
        return (
            <>
                <nav className="app-header" >
                    <div className="app-header-inner container">
                        <NavLink exact activeClassName="active" className="app-header-inner-logo" to="/"><h1>Bitcoin</h1></NavLink>
                        <NavLink to="/contact" >Contacts</NavLink>
                        <NavLink className="sign-up-link" to="/signup">Sign up</NavLink>
                        {/* <NavLink to="/about">About</NavLink> */}
                        {/* <button onClick={ this.onBack }>Back</button> */}
                    </div>
                </nav>
                
            </>
        )
    }
}

export const AppHeader = withRouter(_AppHeader)
