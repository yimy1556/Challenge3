import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import shoppingCartActions from '../redux/actions/shoppingCartActions'

const PayPal = (props) => {
    const paypal = useRef()
    useEffect(() => {

        window.paypal.Buttons({
            style: {
                layout: 'vertical',
                color: 'blue',
                shape: 'rect',
                label: 'paypal'
            },
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                        {
                            description: 'Pyral',
                            amount: {
                                value: props.total,
                                currency_code: 'USD'

                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                props.finishBuying()
                localStorage.removeItem("carito")
                localStorage.setItem("carito", JSON.stringify([]))
                props.redirect('success')

            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, [])

    return (
        <>
            <div ref={paypal} className='buttonsPaypal' style={{ width: '60%', display: 'flex', justifyContent: 'center', paddingTop: '2em' }}></div>
        </>
    )
}

const mapDispatchToProps = {
    finishBuying: shoppingCartActions.finishBuying
}

export default connect(null, mapDispatchToProps)(PayPal)
