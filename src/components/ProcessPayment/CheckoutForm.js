import React from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        if (error) {
            console.log('[error]', error)
            setPaymentError(error.message)
            setPaymentSuccess(null)
        }
        else {
            console.log('[PaymentMethod]', paymentMethod)
            setPaymentSuccess(paymentMethod.id)
            setPaymentError(null)
            handlePayment(paymentMethod.id)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe || !elements}>
                    Pay
                </button>
            </form>
            {
                paymentError && <p style={{color: 'red',marginTop:'20px'}}>{paymentError}</p>
            }
             {
                paymentSuccess && <p style={{color: 'green',marginTop:'20px'}}>Payment is successful</p>
            }
        </div>
    );
};


export default CheckoutForm;