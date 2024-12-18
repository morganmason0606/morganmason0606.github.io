import React from "react";
class Project{
    constructor(title, link, description){
        this.title = title; 
        this.link = link;
        this.description = description
    }
}
class ClassCard{
    constructor(title, description, projects){
        this.title = title;
        this.description = description;
        this.projects = projects
    }
    getCard(){
        const project_list = this.projects?<>
        <h3>Projects</h3>
            {this.projects.map((v,_)=>{
                return <>
                <h4>
                    <a href={v.link} target="_blank" rel="noreferrer">
                    {v.title}
                </a>
                </h4> 
                <p>{v.description}</p>
                </>
            })}
        </>:<></>
        return (
        <div className="display_card">
            <h2>{this.title}</h2>
            <p>{this.description}</p>
            {project_list}
        </div>
        )
    }
}
const classes = [
    new ClassCard(
        "CS 130: Software Engineering",
        "Structured programming, program specification, program proving, modularity, abstract data types, composite design, software tools, software control systems, program testing, team programming.",
        [
            new Project(
                "Vital Motion",
                "https://nimble-starlight-cd143d.netlify.app/",
                "Capstone project of CS 130. Implemented application with agile practices. Created an application for managing physical therapy and medication."
            )
        ]
    ),
    new ClassCard(
        "CS M148: Introduction to Data Science",
        "How to analyze data arising in real world so as to understand corresponding phenomenon. Covers topics in machine learning, data analytics, and statistical modeling classically employed for prediction. Comprehensive, hands-on overview of data science domain by blending theoretical and practical instruction. Data science lifecycle: data selection and cleaning, feature engineering, model selection, and prediction methodologies.", 
        [
            new Project(
                "Student Test Score Analysis",
                "https://github.com/morganmason0606/24F_CSM148_Final",
                "Analyzed data relating to student tests scores and created a model to predict if a student would improve."
            )
        ]

    ),
    new ClassCard(
        "CS 134: Distributed Systems",
        "Covers fundamental concepts regarding design and implementation of distributed systems. Topics include synchronization (e.g., clock synchronization, logical clocks, vector clocks), failure recovery (e.g., snapshotting, primary-backup), consistency models (e.g., linearizability, eventual, causal), consensus protocols (e.g., Paxos, Raft), distributed transactions, and lock. Students gain hands-on, practical experience through multiple programming assignments that work through steps of creating fault-tolerant, sharded key/value store. Exploration of how these concepts have manifested in several real-world, large-scale distributed systems used by Internet companies like Google, Facebook, and Amazon.",
        [
            new Project(
                "Map Reduce",
                "https://github.com/morganmason0606/CS_134/tree/main/mapreduce", 
                "implemented map reduce program using go"
            ), 
            new Project(
                "Paxos Sharded Database", 
                "https://github.com/morganmason0606/CS_134/tree/main/kvstore", 
                "implemented sharded database. Servers maintain consistency and partition tolerance through paxos."
            )
        ]
    ),
    new ClassCard(
        "CS M146 : Introduction to Machine Learning", 
        "Introduction to breadth of data science. Foundations for modeling data sources, principles of operation of common tools for data analysis, and application of tools and models to data gathering and analysis. Topics include statistical foundations, regression, classification, kernel methods, clustering, expectation maximization, principal component analysis, decision theory, reinforcement learning and deep learning.", 
        [
            new Project(
                "Implementation of ML Regression", 
                "https://github.com/morganmason0606/ECEM146_HW1",
                "An implementation of common ML regression techniques using numpy"
            ),
            new Project(
                "Implementation of Classification",
                "https://github.com/morganmason0606/ECEM146_HW2",
                "n implementation of common ML classification techniques using numpy and sklearn"

            )
        ]
    ), 
    new ClassCard(
        "CS 181 : Computing Theory",
        "Finite state machines, context-free languages, and pushdown automata. Closure properties and pumping lemmas. Turing machines, undecidability. Introduction to computability.",
        null
    ),
    new ClassCard(
        "CS 131 : Programming Languages",
        "Basic concepts in design and use of programming languages, including abstraction, modularity, control mechanisms, types, declarations, syntax, and semantics. Study of several different language paradigms, including functional, object-oriented, and logic programming.",
        [
            new Project(
                "OCaml Parser",
                "https://github.com/morganmason0606/UCLA_CS131/tree/main/24W%20CS%20131%20HW2",
                "An implementation of a parser using OCaml"
            ),
            new Project(
                "Prolog Problem Solver",
                "https://github.com/morganmason0606/UCLA_CS131/tree/main/24W_CS131_HW4",
                "An implementation of a tower problem solver using prolog"
            ),
            new Project(
                "Python Server",
                "https://github.com/morganmason0606/UCLA_CS131/tree/main/24W_CS131_Project",
                "An implementation of a server herd application implemented in Python"
            )
        ]
    ),
    new ClassCard(
        "CS 118 : Computer Network Fundamentals",
        "Introduction to design and performance evaluation of computer networks, including such topics as what protocols are, lay network architecture, Internet protocol architecture, network application transport protocols, routing algorithms and protocols, internet work, congestion control, and link layer protocols including Ethernet and wire channels.",
        [
            new Project(
                "Reliable Congestion Control",
                "https://github.com/SubramaniamSatyen/CS118-Project2",
                "An implementation of TCP using UDP and C++"
            ),
            new Project(
                "Server Implementation",
                "https://github.com/SubramaniamSatyen/CS118-Project1",
                "An implementation server for serving files using C++"
            )
        ]
    ),
    new ClassCard(
        "CS 111 :  Operating Systems Principles",
        "Computer software systems performance, robustness, and functionality. Kernel structure, bootstrapping, input/output (I/O) devices and interrupts. Processes and threads; address spaces, memory management, and virtual memory. Scheduling, synchronization. File systems: layout, performance, robustness. Distributed systems: networking, remote procedure call (RPC), asynchronous RPC, distributed file systems, transactions. Protection and security. Exercises involving applications using, and internals of, real-world operating systems.",
        [
            new Project(
                "EXT2 file system implementation",
                "https://github.com/morganmason0606/cs111_lab4",
                "Implementing an EXT2 file system using C"
            )
        ]
    ),
    new ClassCard(
        "CS 35L : Software Construction",
        "Fundamentals of tools and environments for software construction projects, particularly open-source platforms used in upper-division computer science courses. Software practice through collaborative student project.",
        [
            new Project(
                "Bruin Rides",
                "https://github.com/hiimvincent/bruin-ride-test",
                "Ride coordination web app created using the MERN stack"
            )
        ]

    ), 
    new ClassCard(
        "CS 180 : Introduction to Algorithms and Complexity",
        "Introduction to design and analysis of algorithms. Design techniques: divide-and-conquer, greedy method, dynamic programming; selection of prototypical algorithms; choice of data structures and representations; complete measures: time, space, upper, lower bounds, asymptotic complex NP-completeness.",
        null   
    ),
    new ClassCard(
        "Math 61 : Introduction to Discrete Structures",
        "Discrete structures commonly used in computer science and mathematics, including sets and relations, permutations and combinations, graphs and trees, induction.",
        null
    )
]

function School(){
    return(
<>
    <h1>Notable Classes And School Projects</h1>
    <div class="card_list">
        {classes.map((v,_)=>v.getCard())}       
    </div>
</>
    )
}
export default School;

