import ClientSay from '@/components/serviceDetails/ClientSay';
import PricingPlan from '@/components/serviceDetails/PricingPlan';
import ServiceDetailsBanner from '@/components/serviceDetails/ServiceDetailsBanner';
import Subscribe from '@/components/share/Subscribe';
import React from 'react';

const ServiceDetails = () => {
    return (
        <div>
            <ServiceDetailsBanner />
            <PricingPlan />
            <ClientSay />
            <Subscribe />
        </div>
    );
};

export default ServiceDetails;