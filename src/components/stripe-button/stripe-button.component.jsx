import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_GgxXU3MBtioXrEQTHzeiZqXh00JWTLI7Kh';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful!');
  };

  return (
    <StripeCheckout
      label='Pay With Card'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel='Pay With Card'
      token={onToken}
      stripeKey={publishableKey}
      currency='EUR'
    />
  );
};

export default StripeCheckoutButton;
