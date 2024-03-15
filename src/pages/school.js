import React from "react";

function School(){
    return(
        <>
        <h1>Notable Classes And School Projects</h1>
        <div class="card_list">
        
        <div class="display_card">
            <h2>CS 118 : Computer Network Fundamentals</h2>
            <p>Introduction to design and performance evaluation of computer networks, 
                including such topics as what protocols are, layered network architecture, 
                Internet protocol architecture, network applications, transport protocols, 
                routing algorithms and protocols, internetworking, congestion control, 
                and link layer protocols including Ethernet and wireless channels. 
            </p>
            <h3>Projects</h3>
            <h4><a href="https://github.com/SubramaniamSatyen/CS118-Project2" target="_blank" rel="noreferrer">Reliable Congestion Control</a></h4> <p>An implementatin of TCP using UDP and C++</p>
            <h4><a href="https://github.com/SubramaniamSatyen/CS118-Project1" target="_blank" rel="noreferrer">Server Implementation</a></h4> <p>An implementatin server for serving files using C++</p>
        </div>

        <div class="display_card">
            <h2>CS 111 :  Operating Systems Principles</h2>
            <p>Computer software systems performance, robustness, and functionality. 
                Kernel structure, bootstrapping, input/output (I/O) devices and interrupts. 
                Processes and threads; address spaces, memory management, and virtual memory. 
                Scheduling, synchronization. File systems: layout, performance, robustness. 
                Distributed systems: networking, remote procedure call (RPC), asynchronous RPC, 
                distributed file systems, transactions. Protection and security. Exercises involving 
                applications using, and internals of, real-world operating systems.
            </p>
            <h3>Projects</h3>
            <h4><a href="https://github.com/morganmason0606/cs111_lab4" target="_blank" rel="noreferrer">EXT2 file system implementation</a></h4> <p>Implementing an EXT2 file system using C</p>


        </div>    
        <div class="display_card">
            <h2>CS 35L : Software Construction</h2>
            <p>Fundamentals of tools and environments for software construction projects, 
                particularly open-source platforms used in upper-division computer science courses. 
                Software practice through collaborative student project. 
            </p>
            <h3>Projects</h3>
            <h4><a href="https://github.com/hiimvincent/bruin-ride-test" target="_blank" rel="noreferrer">Full MERN Stack Website</a></h4> <p>Ride coordination web app created using the MERN stack</p>

        </div>
        <div class="display_card">
            <h2>CS 180 : Introduction to Algorithms and Complexity</h2>
            <p>Introduction to design and analysis of algorithms. 
                Design techniques: divide-and-conquer, greedy method, 
                dynamic programming; selection of prototypical algorithms; 
                choice of data structures and representations; complexity measures: 
                time, space, upper, lower bounds, asymptotic complexity; NP-completeness.</p>
        </div>

        <div class="display_card">
            <h2>Math 61 : Introduction to Discrete Structures</h2>
            <p>Discrete structures commonly used in computer science and mathematics, 
                including sets and relations, permutations and combinations, 
                graphs and trees, induction.</p>
        </div>
        
        </div>
        </>
    )
}
export default School;