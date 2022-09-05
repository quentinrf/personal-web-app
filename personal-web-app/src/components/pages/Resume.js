import React from "react";

export default function Resume() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <title>Quentin's Resume</title>
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
        />
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <div class="container">
          <section>
            <div class=""></div>
            <div>
              <div class="my-name">Quentin Roy-Foster</div>
              <div class="my-title">3rd Year Computer Engineering Student</div>
              <div class="links">
                <div class="link-item">
                  <a href="https://github.com/quentinrf">
                    github.com/quentinrf
                  </a>
                </div>
                <div class="link-item">
                  <a href="mailto:quentinrf@gmail.com">quentinrf@gmail.com</a>
                </div>
                <div class="link-item">
                  <a href="tel:613-897-9550">613-897-9550</a>
                </div>
              </div>
            </div>
          </section>
          <section>
          <div class="section-title">Professional Experience</div>
          <div class="">
          <div class="job">
          <div class="job-title-container">
          <div class="">
                <div class="job-company">HEXO Corporation</div>
                <div class="job-title">Software Engineering Intern</div>
              </div>
              <div class="">
                May 2019 - August 2019
              </div>
          </div>
          <p>   • Automated database integration using REST API’s in Python, deployed to an Azure Runbook;<br></br>
                • Automated business processes using Microsoft Flow to increase operation efficiency;<br></br>
                • Quality assurance testing in Microsoft Azure DevOps;<br></br>
                • Developed an employee search tool for Human Resources using JavaScript, HTML and CSS.
          </p>
          </div>
          
          </div>
          </section>
        </div>
      </body>
    </>
  );
}
