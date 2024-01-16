import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Abbottabad University Of Science And Technology (2019 - 2023)"
            result="4/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Higher Secondary School Certificate"
            subTitle="Jinnah College, Pakistan (2017 - 2019)"
            result="70%"
            des="Higher secondary education is tertiary education leading to award of an academic Certificate. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Jinnah School, Pakistan(20015 - 2017)"
            result="82%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Jr. Software Engineer (ML)"
            subTitle="(2023 - Present)"
            result="PAK"
            des="Junior software developer specializing in machine learning, contributing to innovative projects with a focus on code efficiency and algorithm optimization."
          />
          <ResumeCard
            title="AI Instructor"
            subTitle="Pine Hills Institute Of Business & IT - (2021 - 2022)"
            result="PAK"
            des="AI instructor in Pakistan, empowering students with practical skills, fostering innovation, and shaping the next generation of AI enthusiasts."
          />
          <ResumeCard
            title="Web Dev Internee"
            subTitle="Abbottabad University of Science & Tech - (2022 - 2022)"
            result="PAK"
            des="Web development intern at AUST, honing skills, implementing web solutions, and contributing to the digital presence of our academic community."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
