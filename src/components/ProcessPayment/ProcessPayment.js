import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';



const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
        <CheckoutForm handlePayment={handlePayment}></CheckoutForm>
      </Elements>
    );
};

export default ProcessPayment;