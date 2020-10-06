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
                props.redirect('success')

            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, [])

    return (
        <>
            <div ref={paypal} className='buttonsPaypal'></div>
        </>
    )
}

export default PayPal