import AboutBanner from "@/components/about/AboutBanner";
import OurAchieve from "@/components/about/OurAchieve";
import TeamMembers from "@/components/about/TeamMembers";
import Contact from "@/components/share/Contact";
import WorkFlow from "@/components/share/WorkFlow";

const about = () => {
    return (
        <div>
          <AboutBanner />
          <WorkFlow />
          <OurAchieve />
          <TeamMembers />
          <Contact />
        </div>
    );
};

export default about;