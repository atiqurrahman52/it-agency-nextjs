import OurServices from "@/components/services/OurServices";
import Subscribe from "@/components/share/Subscribe";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <div>
      <Head>
        <title>Services</title>
      </Head>
      <OurServices />
      <Subscribe />
    </div>
  );
};

export default index;
