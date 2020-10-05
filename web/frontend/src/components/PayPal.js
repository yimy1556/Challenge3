import React, { useEffect, useRef } from 'react'

const PayPal = (props) => {
    const paypal = useRef()
    useEffect(() => {
        window.paypal.Buttons({
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
                console.log(data)
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, [])
    return (
        <>
            <div ref={paypal}></div>
            <h1>pago</h1>
        </>
    )
}

export default PayPal