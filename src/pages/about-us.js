import AboutBanner from "@/components/about/AboutBanner";
import OurAchieve from "@/components/about/OurAchieve";
import TeamMembers from "@/components/about/TeamMembers";
import Contact from "@/components/share/Contact";
import WorkFlow from "@/components/share/WorkFlow";
import Head from "next/head";

const about = () => {
    return (
        <div>
           <Head>
        <title>About Us</title>
      </Head>
          <AboutBanner />
          <WorkFlow />
          <OurAchieve />
          <TeamMembers />
          <Contact />
        </div>
    );
};

export default about;