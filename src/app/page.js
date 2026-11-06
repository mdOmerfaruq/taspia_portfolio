import Image from "next/image";
const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

const skills = [
  {
    title: "Programming",
    icon: "💻",
    color: "purple",
    items: ["Python", "PHP"],
  },
  {
    title: "AI & Robotics",
    icon: "🤖",
    color: "violet",
    items: [
      "YOLOv8",
      "OpenCV",
      "Arduino",
      "Computer Vision",
      "Robotics",
      "Sensor Integration",
      "Servo Motor Control",
    ],
  },
  {
    title: "Web Technologies",
    icon: "🌐",
    color: "pink",
    items: ["HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Database & Tools",
    icon: "🛠️",
    color: "blue",
    items: ["VS Code", "XAMPP", "Overleaf", "Google Colab", "MATLAB"],
  },
  {
    title: "Research Areas",
    icon: "🔬",
    color: "purple",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "Intelligent Systems",
      "Data-efficient Computing",
      "Software Engineering",
      "Robotics",
    ],
  },
  {
    title: "Human Interaction",
    icon: "🧠",
    color: "violet",
    items: [
      "Human-Computer Interaction",
      "Human-Robot Interaction",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "AI-Based Recycling & Non-Recycling Automated Robotic Arm",
    description:
      "Developed an AI-powered robotic arm using YOLOv8 to identify and sort recyclable and non-recyclable waste through computer vision.",
    technologies: [
      "YOLOv8",
      "OpenCV",
      "Arduino Uno",
      "Servo Motors",
    ],
    icon: "🤖",
  },
  {
    number: "02",
    title: "AI-Based Student Clustering System",
    description:
      "Developed an intelligent student grouping and section allocation system using machine learning clustering and similarity techniques.",
    technologies: [
      "Python",
      "K-Means",
      "Hierarchical Clustering",
      "Jaccard Similarity",
    ],
    icon: "📊",
  },
  {
    number: "03",
    title: "Event Management System",
    description:
      "A software project designed to support event organization and management.",
    technologies: ["Software Development"],
    icon: "📅",
  },
  {
    number: "04",
    title: "Student Loan & Crowdfunding Platform",
    description:
      "A platform concept for student financial assistance and crowdfunding.",
    technologies: ["Software Development"],
    icon: "💡",
  },
  {
    number: "05",
    title: "Hostel Management System",
    description:
      "A software project focused on managing hostel-related information and operations.",
    technologies: ["Software Development"],
    icon: "🏢",
  },
  {
    number: "06",
    title: "Smart City Management System",
    description:
      "A software project exploring technology-driven solutions for smart city management.",
    technologies: ["Software Development"],
    icon: "🏙️",
  },
];

const colorStyles = {
  purple: "bg-purple-100 text-purple-800",
  violet: "bg-violet-100 text-violet-800",
  pink: "bg-pink-100 text-pink-800",
  blue: "bg-blue-100 text-blue-800",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5FF] text-slate-800">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-purple-100 bg-[#F8F5FF]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="#home" className="text-2xl font-bold text-slate-900">
            Taspia<span className="text-violet-600">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-violet-600"
              >
                {item.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-purple-200 transition hover:bg-violet-700"
          >
            Let's Talk
          </a>

        </div>
      </nav>

     
{/* ================= HERO SECTION ================= */}

<section
  id="home"
  className="relative overflow-hidden bg-gradient-to-br from-[#F3ECFF] via-[#F8F5FF] to-[#E9DFFF] py-20 md:py-28"
>
  <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 lg:px-8">

    {/* Left Side - Introduction */}
    <div className="space-y-6">

      <p className="font-semibold uppercase tracking-[0.25em] text-violet-600">
        Hello, I'm
      </p>

      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
        Taspia Akter Epou
      </h1>

      <h2 className="text-2xl font-semibold text-violet-600 md:text-3xl">
        Software Engineer
      </h2>

      <p className="max-w-xl text-lg leading-8 text-slate-600">
        A Computer Science and Engineering graduate passionate
        about Artificial Intelligence, Machine Learning,
        Robotics, Computer Vision, and intelligent software systems.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 pt-4">

        <a
          href="#projects"
          className="rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-violet-700"
        >
          View My Projects
        </a>

        <a
          href="#contact"
          className="rounded-xl border border-violet-300 bg-white/70 px-7 py-3 font-semibold text-violet-700 transition hover:bg-violet-100"
        >
          Contact Me
        </a>

        <a
          href="/Taspia_CV.pdf"
          download="Taspia_Akter_CV.pdf"
          className="rounded-xl border border-violet-300 bg-white/70 px-7 py-3 font-semibold text-violet-700 transition hover:bg-violet-100"
        >
          ↓ Download CV
        </a>

      </div>

      {/* Social Links */}
      <div className="flex flex-wrap items-center gap-5 pt-4">

        <a
          href="https://github.com/Taspiaakter"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-600 transition hover:text-violet-600"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/taspiaakter163/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-slate-600 transition hover:text-violet-600"
        >
          LinkedIn ↗
        </a>

        <a
          href="mailto:taspiaepou212163@gmail.com"
          className="font-medium text-slate-600 transition hover:text-violet-600"
        >
          Email ↗
        </a>

      </div>

    </div>

    {/* Right Side - Profile Image */}
    <div className="flex justify-center">

      <div className="relative flex h-80 w-80 items-center justify-center rounded-[3rem] bg-gradient-to-br from-purple-200 via-violet-100 to-indigo-200 shadow-2xl shadow-purple-200 md:h-[420px] md:w-[420px]">

        {/* Profile Picture */}
        <div className="relative h-64 w-64 overflow-hidden rounded-full border-8 border-[#F8F5FF] bg-purple-100 shadow-xl md:h-80 md:w-80">

          <Image
            src="/Taspia.jpg"
            alt="Taspia Akter Epou"
            fill
            priority
            sizes="(max-width: 768px) 256px, 320px"
            className="object-cover object-top"
          />

        </div>

        {/* Research Card */}
        <div className="absolute -bottom-5 -left-5 rounded-2xl border border-purple-100 bg-[#FCFAFF] p-4 shadow-lg">

          <p className="text-sm font-bold text-slate-800">
            AI & Robotics
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Research & Development
          </p>

        </div>

        {/* Education Card */}
        <div className="absolute -right-5 top-10 rounded-2xl border border-purple-100 bg-[#FCFAFF] p-4 shadow-lg">

          <p className="text-sm font-bold text-violet-600">
            CSE Graduate
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Software Engineering
          </p>

        </div>

      </div>

    </div>

  </div>
</section>


      {/* ABOUT SECTION */}
      <section id="about" className="bg-[#FCFAFF] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-widest text-violet-600">
              Get to know me
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              About Me
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-violet-600"></div>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">

            <div>
              <h3 className="text-2xl font-bold leading-relaxed text-slate-800">
                Exploring intelligent technologies
                and building innovative solutions.
              </h3>

              <p className="mt-6 leading-8 text-slate-600">
                I am Taspia Akter Epou, a Computer Science and
                Engineering graduate from United International
                University, Bangladesh. My interests include
                Artificial Intelligence, Machine Learning,
                Robotics, Computer Vision, and Intelligent
                Software Systems.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                I have research experience as a Research Assistant
                at the Institute for Advanced Research, UIU,
                contributing to machine learning-based healthcare
                security research and scientific publication activities.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                I enjoy exploring emerging technologies,
                conducting research, and developing intelligent
                solutions to real-world problems.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              {[
                {
                  icon: "🎓",
                  title: "Education",
                  description: "BSc in Computer Science & Engineering",
                  extra: "United International University",
                },
                {
                  icon: "🔬",
                  title: "Research",
                  description: "Machine Learning and Healthcare Security",
                },
                {
                  icon: "🤖",
                  title: "AI & Robotics",
                  description: "Computer Vision and Intelligent Systems",
                },
                {
                  icon: "📄",
                  title: "Publication",
                  description: "Springer Conference Publication",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-purple-100 bg-[#F3ECFF] p-7 transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg"
                >
                  <div className="text-3xl">{item.icon}</div>

                  <h4 className="mt-4 font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  {item.extra && (
                    <p className="mt-2 text-sm font-medium text-violet-600">
                      {item.extra}
                    </p>
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="bg-gradient-to-b from-[#EDE5FF] to-[#F3ECFF] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="font-semibold uppercase tracking-widest text-violet-600">
              What I work with
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Technical Skills
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Technologies, tools, and technical areas I use
              for software development and research.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-purple-100 bg-[#FCFAFF] p-7 shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {category.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full px-4 py-2 text-sm font-medium ${colorStyles[category.color]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="bg-[#FCFAFF] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="font-semibold uppercase tracking-widest text-violet-600">
              My work
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Featured Projects
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              A selection of academic and technical projects
              exploring intelligent software solutions.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group rounded-2xl border border-purple-100 bg-[#F8F5FF] p-7 transition hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-violet-600">
                    PROJECT {project.number}
                  </span>

                  <span className="text-4xl">{project.icon}</span>
                </div>

                <h3 className="mt-7 text-xl font-bold leading-8 text-slate-900 transition group-hover:text-violet-600">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-purple-100 px-3 py-1.5 text-xs font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH SECTION */}
      <section
        id="research"
        className="bg-gradient-to-b from-[#EDE5FF] to-[#F3ECFF] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="font-semibold uppercase tracking-widest text-violet-600">
              Academic Contributions
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Research & Publications
            </h2>
          </div>

          <div className="mx-auto max-w-4xl">

            {/* Publication */}
            <div className="rounded-3xl border border-purple-100 bg-[#FCFAFF] p-8 shadow-lg shadow-purple-100 md:p-10">

              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
                  Springer Conference Paper
                </span>

                <span className="text-sm font-medium text-slate-500">
                  ICTIS 2025
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-bold leading-relaxed text-slate-900">
                Energy Efficient Software Development Through
                Algorithm Optimization
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Research presented at the ICTIS 2025 International
                Conference held in New York, USA. The research explores
                algorithm optimization and energy-efficient software
                development.
              </p>

              <div className="mt-6">
                <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                  Third Author
                </span>
              </div>

              <div className="mt-8 grid gap-5 border-t border-purple-100 pt-7 sm:grid-cols-2">

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Publisher
                  </p>
                  <p className="mt-1 font-semibold text-slate-800">
                    Springer Nature
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Conference
                  </p>
                  <p className="mt-1 font-semibold text-slate-800">
                    ICTIS 2025
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Author Position
                  </p>
                  <p className="mt-1 font-semibold text-slate-800">
                    Third Author
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Book Series
                  </p>
                  <p className="mt-1 font-semibold text-slate-800">
                    Smart Innovation, Systems and Technologies
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    DOI
                  </p>
                  <p className="mt-1 break-all font-semibold text-violet-600">
                    10.1007/978-981-95-1365-9_38
                  </p>
                </div>

              </div>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="https://link.springer.com/chapter/10.1007/978-981-95-1365-9_38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-violet-700"
                >
                  View Official Publication ↗
                </a>

                <a
                  href="https://doi.org/10.1007/978-981-95-1365-9_38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-violet-300 px-6 py-3 font-semibold text-violet-700 transition hover:bg-violet-100"
                >
                  View DOI ↗
                </a>

              </div>

              <p className="mt-4 text-xs text-slate-500">
                Official publication record provided by Springer Nature.
              </p>

            </div>

            {/* Research Experience */}
            <div className="mt-8 rounded-3xl border border-purple-100 bg-[#FCFAFF] p-8 shadow-sm md:p-10">

              <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
                Research Experience
              </span>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Research Assistant
              </h3>

              <p className="mt-2 font-semibold text-violet-600">
                Institute for Advanced Research, UIU
              </p>

              <p className="mt-2 text-sm text-slate-500">
                January 2025 – June 2025
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>
                  Worked on ML-Based Cross-Tier Data Security
                  for Wireless Body Area Networks (WBANs).
                </li>

                <li>
                  Assisted in machine learning implementation,
                  research analysis, and publication preparation.
                </li>

                <li>
                  Conducted intelligent healthcare security
                  research and technical documentation.
                </li>
              </ul>

            </div>

          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section className="bg-[#FCFAFF] px-6 py-24">
        <div className="mx-auto max-w-5xl">

          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-widest text-violet-600">
              Milestones
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Achievements
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Research Assistant",
              "ICTIS 2025 Conference Presenter",
              "Springer Publication - Third Author",
              "UIU Research Grant",
              "2nd Runner-Up Award Winner",
              "AI Robotics Project Developer",
              "Computer Vision Research",
            ].map((achievement) => (
              <div
                key={achievement}
                className="flex items-center gap-3 rounded-2xl border border-purple-100 bg-[#F3ECFF] p-5"
              >
                <span className="text-xl text-violet-600">✦</span>
                <p className="text-sm font-semibold text-slate-700">
                  {achievement}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="bg-gradient-to-b from-[#F3ECFF] to-[#EDE5FF] px-6 py-24"
      >
        <div className="mx-auto max-w-4xl text-center">

          <p className="font-semibold uppercase tracking-widest text-violet-600">
            Get in touch
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
            I am interested in software development,
            artificial intelligence, research collaboration,
            and innovative technology projects.
            Feel free to connect with me.
          </p>

          <a
            href="mailto:taspiaepou212163@gmail.com"
            className="mt-9 inline-flex rounded-full bg-violet-600 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-violet-700"
          >
            Send Me an Email →
          </a>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-600">

            <a
              href="https://github.com/Taspiaakter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-600"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/taspiaakter163/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-600"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:taspiaepou212163@gmail.com"
              className="hover:text-violet-600"
            >
              Email ↗
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-purple-200 bg-[#EDE5FF] px-6 py-8 text-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <div>
            <p className="text-xl font-bold">
              Taspia<span className="text-violet-600">.</span>
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Software Engineer & Researcher
            </p>
          </div>

         <p className="text-sm text-slate-400">
  © 2026 Taspia Akter. All rights reserved.
</p>

        </div>
      </footer>

    </main>
  );
}
