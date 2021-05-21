
import { Component } from 'react';
import './Hero.scss';
import { NavLink, withRouter } from 'react-router-dom';
// import { HeroImg } from '../..assets/imgs/hero.svg'

export class Hero extends Component {

    render() {
        return (
            <div className="hero" >
                <div className="container hero-inner">
                    <div className="hero-text">
                        <h2>Take a step into the Crypto World</h2>
                        <NavLink className="sign-up-link" to="/signup">Try it</NavLink>
                    </div>
                    <img src={require('../../assets/imgs/hero.svg').default} />
                </div>
            </div>
        )
    }
}


