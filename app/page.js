import Image from "next/image";
import Header from "./header/page";
import ContactForm from "./contactForm/page";
import ProjectCard from "./projectCard/page";
import EducationCard from "./educationCard/page";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-yellow-500 via-indigo-600 to-orange-600 min-h-screen text-gray-200">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto p-4 flex-1">
          <div className="flex justify-center my-8 transform transition-transform duration-500 hover:scale-105">
            {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert drop-shadow-lg"
              width={100}
              height={200}
              priority
            /> */}
          </div>
          <section id="about" className="my-8 p-6 bg-indigo-700 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-gray-200">
            <h2 className="text-3xl font-bold mb-4">OBJECTIVE</h2>
            <p className="leading-relaxed text-lg">
            Seeking a fulfilling career opportunity that leverages my strong communication skills, time management abilities, and critical thinking. Eager to contribute significantly to the success and growth of the organization through proactive support and effective collaboration..
            </p>
          </section>
          <section id="projects" className="my-8 p-6 bg-indigo-700 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-gray-200">
            <h2 className="text-3xl font-bold mb-4">PROJECTS</h2>
            <ProjectCard
              title="Brain tumour detection"
              description="Detection of brain tumour using MATLAB software"
            />
            <ProjectCard
              title="Pressure ulcer classification"
              description="Pressure ulcer classification using deep learning"
            />
            <ProjectCard
              title="Automated microscope for magnifying skin surface"
              description="Programmed step movement of microscope across X and Y axes to capture images"
            />
          </section>
          <section id="education" className="my-8 p-6 bg-indigo-700 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-gray-200">
            <h2 className="text-3xl font-bold mb-4">EDUCATION</h2>
            <EducationCard
              school="Rajalakshmi Engineering College"
              degree="B.E. Biomedical engineering"
              cgpa="8.83"
              year="2019-2023"
            />
          </section>
          <section id="skills" className="my-8 p-6 bg-indigo-700 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-gray-200">
            <h2 className="text-3xl font-bold mb-4">SKILLS</h2>
            <ul className="list-disc list-inside">
              <li>Communication skills, time management skills, critical thinking, adaptability</li>
            </ul>
          </section>
          <section id="languages" className="my-8 p-6 bg-indigo-700 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-gray-200">
            <h2 className="text-3xl font-bold mb-4">LANGUAGE</h2>
            <p className="leading-relaxed text-lg">
              Proficient in Tamil and English. Speaking in Telugu. Reading in Hindi.
            </p>
          </section>
          <section id="contact" className="my-8 p-6 bg-indigo-700 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-gray-200">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <ul className="list-disc list-inside">
              <li>Contact : 9444752159</li>
              <li>Email : madhavm350@gmail.com</li>
            </ul>
          </section>
          <section id="linkedin" className="my-8 p-6 bg-indigo-700 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-gray-200 flex items-center">
            <h2 className="text-3xl font-bold mb-4 flex-grow">Connect with me on LinkedIn ▶️▶️</h2>
            <a href="https://www.linkedin.com/in/madhavm" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://th.bing.com/th/id/OIP.uyPcqkvOrqSM1TuUiA3_8QHaHa?rs=1&pid=ImgDetMain"
                alt="LinkedIn Logo"
                width={200}
                height={100}
                className="rounded-full hover:scale-110 transition-transform duration-300"
              />
            </a>
          </section>
          <ContactForm/> 
        </main>
        <footer className="bg-gray-900 text-gray-200 text-center p-4 shadow-inner">
          <p>© 2024 Madhav M. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
