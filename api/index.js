export default function handler(req, res) {
  const data = {
    "name": "Aditya Sharma",
    "contact_information": {
      "email": "adityasharma56697@gmail.com",
      "phone": "+91 9289665096",
      "linkedin": "https://www.linkedin.com/in/aditya-sharma-334528296",
      "github": "https://github.com/adisha2003",
      "location": "Faridabad, Haryana, India"
    },
    "career_objective": "I am eager to join a forward-thinking company where I can apply my skills to drive success through collaboration and innovation. Committed to continuous learning and growth, I aim to contribute value and support the company in achieving its strategic goals, while advancing my own professional development.",
    "professional_summary": [
      "Aspiring QA Engineer with strong knowledge of manual testing, automation testing, API testing, and web testing.",
      "Hands-on experience with Playwright, Selenium WebDriver (JavaScript), Postman, and structured QA practices including STLC and Bug Lifecycle.",
      "Strong frontend and backend understanding, enabling effective end-to-end and integration testing.",
      "Solid foundation in Data Structures and Algorithms, applying programming skills to improve test efficiency and coverage."
    ],
    "skills": {
      "programming_languages": ["JavaScript", "Python", "Java"],
      "manual_testing": [
        "Functional Testing",
        "Regression Testing",
        "Smoke Testing",
        "Sanity Testing",
        "End-to-End Testing",
        "Edge Case Validation"
      ],
      "automation_testing": [
        "Playwright",
        "Selenium WebDriver (JavaScript)",
        "Puppeteer",
        "WebdriverIO",
        "Mocha",
        "Chai",
        "Data-driven Testing"
      ],
      "api_testing": [
        "REST APIs",
        "HTTP Status Codes",
        "Postman",
        "GET, POST, PUT, DELETE validation"
      ],
      "web_development": [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "Flask",
        "Responsive Design"
      ],
      "databases": [
        "MySQL",
        "PostgreSQL",
        "SQL",
        "NoSQL",
        "ACID",
        "Normalization",
        "Indexing",
        "Keys"
      ],
      "tools_and_platforms": [
        "Git",
        "GitHub",
        "VS Code",
        "Jira",
        "Jenkins",
        "Allure Reports",
        "Chrome DevTools",
        "BrowserStack",
        "Figma",
        "Vercel",
        "Google Apps Script"
      ],
      "cloud_and_system_concepts": [
        "Cloud Basics",
        "Cloud Servers",
        "Horizontal Scaling",
        "Vertical Scaling"
      ],
      "software_life_cycles": [
        "SDLC",
        "STLC",
        "Bug Lifecycle",
        "Test Case Design"
      ],
      "data_structures_and_algorithms": [
        "Arrays",
        "Strings",
        "Stacks",
        "Queues"
      ],
      "security_and_auth": ["JWT"]
    },
    "soft_skills": [
      "Strong problem-solving and analytical skills",
      "Clear communication",
      "Decision making",
      "Multi-tasking",
      "Eagerness to learn new technologies"
    ],
    "professional_experience": [
      {
        "role": "QA Engineer",
        "company": "Mosaic Digital (HT Media Group)",
        "duration": "July 2025 – Present",
        "experience_level": "Entry to Junior QA Engineer",
        "responsibilities": [
          "Performing manual testing including functional, regression, smoke, and sanity testing for web applications.",
          "Designing and executing test cases and test scenarios based on business requirements.",
          "Identifying, logging, and tracking defects using Jira with clear reproduction steps.",
          "Automating critical user journeys using Playwright to improve regression coverage.",
          "Conducting API testing using Postman to validate REST APIs and JSON responses.",
          "Executing automation test suites via Jenkins pipelines and analyzing CI failures.",
          "Collaborating with developers, product managers, and DevOps teams.",
          "Validating fixes across QA and UAT environments before production releases."
        ]
      },
      {
        "role": "Frontend Developer Intern",
        "company": "Realezi",
        "duration": "August 2024 – October 2024",
        "responsibilities": [
          "Converted Figma designs into fully responsive web pages using HTML, CSS, and JavaScript.",
          "Collaborated with UI/UX designers and backend developers."
        ]
      }
    ],
    "open_source_contributions": [
      {
        "project": "google-gemini/live-api-web-console",
        "issue": "#37",
        "url": "https://github.com/google-gemini/live-api-web-console/issues/37",
        "description": "Reported and documented a critical input validation bug causing empty submissions and irrelevant API calls. The issue was acknowledged, labeled as a bug, and resolved via a linked pull request."
      }
    ],
    "education": [
      {
        "degree": "Bachelor of Commerce (Hons.)",
        "institution": "Maharishi Dayanand University",
        "duration": "June 2021 – May 2024"
      },
      {
        "level": "Higher Secondary (Class XII)",
        "institution": "BVN Sr. Sec. Public School",
        "percentage": "86%"
      },
      {
        "level": "Senior Secondary (Class X)",
        "institution": "BVN Sr. Sec. Public School",
        "percentage": "81%"
      }
    ],
    "certifications": [
      {
        "title": "Mastering Web Automation with Playwright and Python",
        "issuer": "Udemy",
        "certificate_url": "ude.my/UC-0c84e036-d68a-449c-bc46-631307748241"
      },
      {
        "title": "Data Structures and Algorithms",
        "issuer": "freeCodeCamp"
      },
      {
        "title": "Introduction to Generative AI",
        "issuer": "Google"
      },
      {
        "title": "AI & ChatGPT for Productivity",
        "issuer": "Udemy"
      }
    ],
    "preferences": {
      "feedback_style": "Prefers honest, direct, and constructive feedback with immediate correction when something is wrong."
    }
  };

  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify(data, null, 2));
}