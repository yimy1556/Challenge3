import React from 'react'
import { Trail, animated } from 'react-spring/renderprops'
import '../styles/styles.css'
import { foto } from '../images/image01.jpg'

class Trail2 extends React.Component {
    state = { toggle: true, items: [{ foto }, { foto }, { foto }, { foto }, { foto }] }
    toggle = () => this.setState(state => ({ toggle: !state.toggle }))
    render() {
        const { toggle, items } = this.state
        return (
            <div
                style={{
                    backgroundColor: '#247BA0',
                    position: 'relative',
                    maxWidth: '100vw',
                    height: '60vh',
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

