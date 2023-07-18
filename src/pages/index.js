import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Banner from "@/components/home/Banner";
import WorkFlow from "@/components/home/WorkFlow";
import ProfessionalServices from "@/components/home/ProfessionalServices";
import Achieve from "@/components/home/Achieve";
import ItSupport from "@/components/home/ItSupport";
import RecentWork from "@/components/home/RecentWork";
import Pricing from "@/components/home/Pricing";
import ClientSay from "@/components/home/ClientSay";
import Subscribe from "@/components/share/Subscribe";
import OurClients from "@/components/home/OurClients";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>IT Agency</title>
      </Head>

      <div>
        <Banner />
        <WorkFlow />
        <ProfessionalServices />
        <Achieve />
        <ItSupport />
        <RecentWork />
        <Pricing />
        <ClientSay />
        <Subscribe />
        <OurClients />
      </div>
    </>
  );
}
