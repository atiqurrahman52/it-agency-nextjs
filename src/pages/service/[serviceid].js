import ClientSay from "@/components/serviceDetails/ClientSay";
import PricingPlan from "@/components/serviceDetails/PricingPlan";
import ServiceDescription from "@/components/serviceDetails/ServiceDescription";
import ServiceDetailsBanner from "@/components/serviceDetails/ServiceDetailsBanner";
import Subscribe from "@/components/share/Subscribe";
import Head from "next/head";
import React from "react";

const ServiceDetails = () => {
  return (
    <div>
      <Head>
        <title>Service Details</title>
      </Head>
      <ServiceDetailsBanner />
      <ServiceDescription />
      <PricingPlan />
      <ClientSay />
      <Subscribe />
    </div>
  );
};

export default ServiceDetails;
