import React from 'react'
import { Trail, animated } from 'react-spring/renderprops'
import { foto } from '../images/image01.jpg'

class Trail2 extends React.Component {
    state = { toggle: true, items: [{ foto }, { foto }, { foto }, { foto }, { foto }] }
    toggle = () => this.setState(state => ({ toggle: !state.toggle }))
    render() {
        const { toggle, items } = this.state
        return (
            <div
                style={{
                    backgroundImage: 'url(https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    maxWidth: '100vw',
                    height: '60vh',
                    margin: '20px 0'
                }}>
                <Trail
                    native
                    reverse={toggle}
                    initial={null}
                    items={items}
                    from={{ opacity: 0, x: -100 }}
                    to={{ opacity: 1, x: toggle ? 0 : 100 }}
                    style={{
                        width: '50vw'
                    }}>
                    {item => ({ x, opacity }) => (
                        <animated.div
                            className="box"
                            onClick={this.toggle}
                            style={{
                                opacity,
                                transform: x.interpolate(x => `translate3d(${x}%,0,0)`),

                            }}
                        >NEW IN</animated.div>
                    )}
                </Trail>
            </div>
        )
    }
}
export default Trail2

