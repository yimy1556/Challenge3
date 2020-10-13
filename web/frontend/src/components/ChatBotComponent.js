import React from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import { NavLink } from 'react-router-dom'

// Images
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
        fontFamily: 'Roboto',
        headerBgColor: ' #111111',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: ' #111111',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
        position: 'relative',
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
                                message: ' What\'s your name?',
                                trigger: '3',
                            },
                            {
                                id: '3',
                                user: true,
                                trigger: '4',
                            },
                            {
                                id: '4',
                                message: '{previousValue}, nice to meet you! Tell us how we can help you',
                                trigger: '5',
                            },

                            {
                                id: '5',
                                options: [
                                    { value: 1, label: 'Help with my order', trigger: '7' },
                                    { value: 2, label: 'Know the latest releases', trigger: '10' },
                                    { value: 3, label: 'Questions about the purchase method', trigger: '13' },
                                    { value: 4, label: 'Where is our store?', trigger: '15' },
                                ],
                            },
                            // Empieza mensaje soporte
                            {
                                id: '7',
                                message: 'Please leave us your email',
                                trigger: '8',
                            },
                            {
                                id: '8',
                                user: true,

                                validator: (value) => {
                                    var reMail = RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
                                    if (!reMail.test(value)) {
                                        return 'Value should be an email';
                                    }
                                    return true;
                                },
                                trigger: '9',
                            },
                            {
                                id: '9',
                                message: 'Thanks,support will contact you soon, have a nice day!',
                                end: true,
                                placeholder: 'Thank you for contacting us!'
                            },
                            // Empieza mensaje ultimas noticias
                            {
                                id: '10',
                                message: 'Sure, please leave us your email',
                                trigger: '11'
                            },
                            {
                                id: '11',
                                user: true,

                                validator: (value) => {
                                    var reMail = RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
                                    if (!reMail.test(value)) {
                                        return 'Value should be an email';
                                    }
                                    return true;
                                },
                                trigger: '12',
                            },
                            {
                                id: '12',
                                message: 'Thanks, we are going to send an email to {previousValue} with the latest releases, have a good day',
                                end: true,
                                placeholder: 'Thank you for contacting us!'
                            },
                            {
                                id: '13',
                                message: 'Sure, here are the answers to the most frequently questions',
                                trigger: '14',
                            },
                            {
                                id: '14',
                                component: (
                                    <NavLink to="/faqs" style={{ textDecoration: 'none', color: "white", background: '#111111', textAlign: 'center', cursor: 'pointer' }}> Frequently asked questions </NavLink>
                                ),
                                end: true,
                                placeholder: 'Thank you for contacting us!'
                            },
                            {
                                id: '15',
                                component: (
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <strong>We are on 955 5th Ave</strong>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.3940066551254!2d-73.96680248522493!3d40.77535134167548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258946558c215%3A0xd5b0663f733bc4f7!2s955%205th%20Ave%2C%20New%20York%2C%20NY%2010075%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1602216172883!5m2!1ses-419!2sar" style={{ border: 'none' }}></iframe>
                                    </div>
                                ),
                                end: true,
                                placeholder: 'Thank you for contacting us!'
                            },
                        ]}
                    />
                    </ThemeProvider>

                </div>
            </>
        )
    }
}

export default ChatBotComponent