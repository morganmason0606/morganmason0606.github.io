import React from "react";

function Job(){
    return (
        <>
            <h1>Job Experience</h1>
            <div class="card_list">
                <div className="display_card">
                    <h2>AI Research and Development – Credit Risk Intern</h2>
                    <h3>US Bank, Summer 2024</h3>
                    <p>Conducted comprehensive research on AI use cases within the banking sector. Developed <a href="https://github.com/morganmason0606/LLM_Agents">an advanced chatbot</a> utilizing credit-risk model documentation to streamline the process for senior management in addressing onsite regulatory examination inquiries regarding model outputs. <a href="morganmason0606.github.io/excel_joiner/">Automated the collection and reporting</a> of profitability and asset quality ratios across bank competitors, reducing lead times for senior management to benchmark performance against peer banks. </p>
                </div>
                <div class="display_card">
                    <h2>Tech Support</h2>
                    <h3>Acalanes Union High School District, Summer 2021</h3>
                    <p>Performed computer and software upkeep tasks involving loading software, maintaining network
                        hardware, and installing new physical infrastructure such as internet routers.</p>
                </div>
                <div class="display_card">
                    <h2>Inventory Specialist</h2>
                    <h3>Channies Handwriting Guides, 2020-2022 </h3>
                    <p>Managed inventory tracking, ordering, receiving for physical inventory across multiple warehouse sites.
                        Created prospects database identifying school contacts. The list was used to increase sales by 10%.</p>
                </div>
                <div class="display_card">
                    <h2>Office Engineer Intern </h2>
                    <h3>California Department of Transportation (Caltrans), Summer 2019</h3>
                    <p>Performed general administrative/office tasks. Assisted Division of Construction district office engineers
                        with sorting and filing of construction project paperwork for audit purposes.
                        </p>
                </div>
            </div>
        </>
    )


};
export default Job