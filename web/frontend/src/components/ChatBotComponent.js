import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/home.css'
import InfoContainer from './InfoContainer'
import PhotoContainer from './PhotoContainer'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components';
import ChatBubbleIcon from '@material-ui/icons/Comment';
import botLogo from "../images/botLogo.png"

class ChatBotComponent extends React.Component {
    state = {
        showBot: false
    }

    show = () => {
        this.setState({
            showBot: !this.state.showBot
        })
    }
    theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: ' #111111',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: ' #111111',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
        position: 'relative'
    };

    render() {
        return (
            <>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <ThemeProvider theme={this.theme}> <ChatBot height={'450px'} width={'350px'} botAvatar={botLogo} floating={true}

                        steps={[
                            {
                                id: '1',
                                message: 'Hi, welcome to Pyral!',
                                trigger: '2',
                            },
                            {
                                id: '2',
                                message: ' what is your name?',
                                trigger: '3',
                            },
                            {
                                id: '3',
                                user: true,
                                trigger: '4',
                            },
                            {
                                id: '4',
                                message: '{previousValue}, nice to meet you! Give us your email so we can send you the latest news about our products',
                                trigger: '5',
                            },
                            {
                                id: '5',
                                user: true,

                                validator: (value) => {
                                    var reMail = RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
                                    if (!reMail.test(value)) {
                                        return 'Value should be an email';
                                    }
                                    return true;
                                },
                                trigger: '6',
                            },
                            {
                                id: '6',
                                message: 'Thanks, we are going to send an email to {previousValue}, have a good day',
                                end: true,
                                placeholder: 'Thank you for contacting us!'
                            }
                        ]}
                    />
                    </ThemeProvider>

                </div>
            </>
        )
    }
}

export default ChatBotComponent