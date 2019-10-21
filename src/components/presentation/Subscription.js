import React, {Component} from 'react';
import {PricingCard} from 'react-native-elements';
import {featureNotImplemented} from '../../constants/Helpers';

class Subscription extends Component {
    render() {
        return (
            <>
                <PricingCard
                    color="#4f9deb"
                    title="Free"
                    price="$0"
                    info={['1 User', 'Basic Support', 'All Core Features', 'offers limited to 10 per month']}
                    button={{ title: 'Starter Pack', icon: 'flight-takeoff'}}
                    onButtonPress={() => featureNotImplemented('Subscriptions') }
                />
                <PricingCard
                    color="gold"
                    title="Basic"
                    price="$4.99"
                    info={['2 User', 'Moderate Support', 'All Core Features', 'offers limited to 10 per month' ]}
                    button={{ title: 'Gold Pack', icon: 'flight-takeoff' }}
                    onButtonPress={() => featureNotImplemented('Subscriptions') }

                />
                <PricingCard
                    color="purple"
                    title="Premium"
                    price="$19.99"
                    info={['Unlimited Users', 'Personal Support', 'All Core Features', 'unlimited offers',  ]}
                    button={{ title: 'Premium Pack', icon: 'flight-takeoff' }}
                    onButtonPress={() => featureNotImplemented('Subscriptions') }

                />

            </>
        );
    }
}

export default Subscription;
