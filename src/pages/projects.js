import React from "react";


class ProjectCard {
    constructor(link, name, description, repo = null, tech=null) {
        this.link = link;
        this.name = name;
        this.description = description;
        this.repo = repo;
        this.tech = tech;
    }
    getCard() {
        const title = <h2>{this.link ? <a href={this.link} target="_blank" rel="noreferrer">{this.name}</a> : <>{this.name}</>}</h2>
        const repolink = this.repo ? <a href={this.repo} target="_blank" rel="noreferrer">Github repository link</a> : <></>
        const description = <ul>{this.description.map(v => <li>{v}</li>)}</ul>
        const technologies = this.tech?<p><b>Technologies used: </b>{this.tech.join(", ")}</p>:<></>
        return (
            <div className="display_card">
                {title}
                {repolink}
                {description}
                {technologies}
            </div>
        )
    }
}

const projects = [
    new ProjectCard(
        "https://colab.research.google.com/drive/1SbcN5KwfPFZ3c1h91yUZf6HuoEcKW3wl?usp=sharing",
        "Lunar Lander RL notebook",
        ["Developed Jupyter notebook to demonstrate reinforcement learning principals for ACM AI Presentation"],
        null,
        ["Python", "Jupyter", "Pytorch"]
    ),
    new ProjectCard(
        "https://morganmason0606.github.io/excel_joiner/",
        "Excel Joiner",
        [
            "Tool to help join multiple spreadsheets by row"
        ],
        "https://github.com/morganmason0606/excel_joiner",
        ["HTML", "JS", "React"]

    ),
    new ProjectCard(
        "https://github.com/morganmason0606/schedule_web_checker",
        "Github Actions Financial Report Reporter",
        [
            "Uses GitHub Actions to automatically scrape investor relation pages and detect changes",
            "Configurable through Python Tkinter gui"
        ],
        null,
        ["Python", "Tkinter", "Yaml", "Bash"]
    ),
    new ProjectCard(
        "https://coursera.org/share/14117d81ff6d1bb4837206e93416b44f",
        "Machine Learning Specialization (DeepLearning.AI, Stanford University)",
        [
            "Best practices for TensorFlow, a popular open-source machine learning framework to train a neural network for computer vision applications",
            "Handle real-world image data and explore strategies to prevent overfitting, including augmentation and dropout",
            "Build natural language processing systems using TensorFlow"
        ],
        null,
        ["Python", "Tensorflow", "Jupyter", "Scikit Learn"]
    ),
    new ProjectCard(
        "https://coursera.org/share/8a332dfd4234325044a51bfdf29ccc64",
        "Meta Front-End Developer Specialization",
        [
            "Create a responsive website using HTML to structure content, CSS to handle visual style, and JavaScript to develop interactive experiences",
            "Learn Bootstrap CSS Framework to create webpages and work with GitHub repositories and version control"
        ],
        "https://github.com/morganmason0606/meta-frontend-capstone",
        ["HTML", "CSS", "Bootstrap", "JavaScript", "React","Git", "Figma" ]

    ),
    new ProjectCard(
        "https://www.coursera.org/account/accomplishments/specialization/9FQ29KJ66ZTQ",
        "Meta Back-End Developer Specialization",
        [
            "Learn to use programming systems including Python Syntax, Linux commands, Git, SQL, Version Control, Cloud Hosting, APIs, JSON, XML and more"
        ],
        "https://github.com/morganmason0606/coursera_meta_backend",
        ["Python", "Linux", "SQL", "Git", "Insomnia", "REST"]
    ),
    new ProjectCard(
        "https://coursera.org/share/ccbbc6ffcf9c423a95064903eb8eb6e9",
        "IBM Full Stack Software Developer Specialization",
        [
            "Develop with front-end development languages and tools such as HTML, CSS, JavaScript, React and Bootstrap",
            "Program applications using back-end languages and frameworks like Express, Node.js, Python, Django, etc",
            "Deploy and scale applications using Cloud Native methodologies and tools like Containers, Kubernetes, Microservices and Serverless Functions"
        ],
        "https://github.com/morganmason0606/agfzb-CloudAppDevelopment_Capstone",
        ["HTML", "CSS", "JS", "React", "Node", "Express", "Python", "Django", "Docker", "Kubernetes"]
    ),
    new ProjectCard(
        "https://coursera.org/share/3f50f92bd8826103420c5cffa6715231",
        "IBM Data Science Specialization",
        [
            "Master the most up-to-date practical skills and knowledge that data scientists use in their daily roles",
            "Learn the tools, languages, and libraries used by professional data scientists, including Python and SQL",
            "Import and clean data sets, analyze and visualize data, and build machine learning models and pipelines"
        ],
        "https://github.com/morganmason0606/Coursera_IBM_AppliedDataScienceCapstone",
        ["Python", "numpy", "Pandas", "Jupyter", "SQL"]
    )


]

function Project() {
    return (
        <>
            <h1>Personal Projects and Self Learning</h1>

            <div class="card_list">
                {projects.map(v => v.getCard())}
            </div>
        </>
    );
}
export default Project;