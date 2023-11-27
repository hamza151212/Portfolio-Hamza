import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo, project4, pro5, pro6 } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Instagram CLONE"
            des="Innovative Instagram clone crafted with React, delivering a seamless social media experience with modern design and dynamic features."
            src={projectOne}
          />
          <ProjectsCard
            title="E-commerce Website"
            des="Dynamic E-commerce website offering a seamless shopping experience, featuring user-friendly design, secure transactions, and a diverse product catalog."
            src={projectTwo}
          />
          <ProjectsCard
            title="Chatting App"
            des="Sleek and intuitive chatting app, fostering seamless communication with modern design, real-time messaging, and a user-friendly interface."
            src={projectThree}
          />
          <ProjectsCard
            title="NFT Auction Mobile DAPP"
            des="Revolutionizing digital assets with an NFT auction mobile DApp, combining blockchain technology for secure transactions and a user-centric auction experience."
            src={project4}
          />
          <ProjectsCard
            title="Hotel Reservation System"
            des="Efficient hotel reservation system ensuring seamless bookings, user-friendly interface, real-time availability, and secure transactions for a stress-free travel experience."
            src={pro5}
          />
          <ProjectsCard
            title="Cost Estimation App"
            des="Streamline project planning with a Cost Estimation App—accurate, user-friendly, and equipped to optimize budgeting for successful outcomes."
            src={pro6}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
