
import { FaMobile, FaPython, FaEthereum, FaFileWord } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import { MdBusiness, MdWebStories } from "react-icons/md";
import { FiFigma } from "react-icons/fi";
import { BsDatabase } from "react-icons/bs";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Business Stratagy"
            des="Crafting business strategies for success: web and mobile development, AI/ML integration, and blockchain solutions."
            icon={<MdBusiness/>}
          />
          <Card
            title="Mobile Development"
            des="Creating innovative mobile apps with React Native, merging seamless user experiences and cutting-edge technology for impact."
            icon={<FaMobile />}
          />
          <Card
            title="Web Development"
            des="Elevating web experiences with React, where design meets functionality for captivating and dynamic user interfaces."
            icon={<MdWebStories />}
          />
          <Card
            title="Artificial Intelligence"
            des="Harnessing AI's potential with Python, MATLAB, and OpenCV to unravel insights, automate tasks, and innovate solutions."
            icon={<FaPython />}
          />
          <Card
            title="UX Design"
            des="Crafting captivating UI designs with Figma, seamlessly blending creativity and functionality for a delightful user experience."
            icon={<FiFigma />}
          />
          <Card
            title="BlockChain Development"
            des="Pioneering Ethereum blockchain solutions with Solidity, shaping decentralized ecosystems for secure and transparent digital transactions."
            icon={<FaEthereum />}
          />
          <Card
            title="Data Base Management"
            des="Designing robust databases with SQL, MongoDB, and Firebase to ensure seamless data management for scalable and dynamic applications."
            icon={<BsDatabase />}
          />
          <Card
            title="Office Suit"
            des="Efficient data entry utilizing the power of Office 365, ensuring accuracy and productivity across diverse administrative tasks."
            icon={<FaFileWord />}
          />
          <Card
            title="Adobe Suit"
            des="Elevating designs with Adobe's creative suite, transforming concepts into visually stunning and impactful digital experiences."
            icon={<SiAdobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
