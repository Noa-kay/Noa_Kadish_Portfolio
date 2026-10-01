import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4', // 210 x 297 mm
});

const pageWidth = 210;
const margin = 14;
const contentWidth = pageWidth - margin * 2; // 182 mm
const colGap = 9;
const colWidth = (contentWidth - colGap) / 2; // 86.5 mm

const col1Left = margin;
const col2Left = margin + colWidth + colGap;

let y = 14;

// 1. Accent Camel Tab
doc.setFillColor(197, 155, 109); // #C59B6D
doc.roundedRect(col1Left, y, 12, 3, 0.4, 0.4, 'F');
y += 6.5;

// 2. Name
doc.setTextColor(15, 23, 42); // #0F172A
doc.setFont('helvetica', 'bold');
doc.setFontSize(22);
doc.text('Noa Kadish', col1Left, y);
y += 6.2;

// 3. Subtitle
doc.setFontSize(11);
doc.setTextColor(51, 65, 85); // #334155
doc.setFont('helvetica', 'normal');
doc.text('Junior Full Stack Developer', col1Left, y);
y += 5.2;

// 4. Contact Details Line
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.2);
doc.setTextColor(51, 65, 85);
const contactLine = 'noa.kadish@outlook.com   |   0548527526   |   Petach tikva   |   Noa-kay   |   Noa kadish';
doc.text(contactLine, col1Left, y);
y += 4;

// 5. Divider Line
doc.setDrawColor(226, 232, 240); // #E2E8F0
doc.setLineWidth(0.4);
doc.line(margin, y, margin + contentWidth, y);
y += 6;

const topColumnsY = y;

// --- Helper Functions ---
function drawSectionHeader(title, x, curY) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text(title, x, curY);
  curY += 1.8;
  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(0.4);
  doc.line(x, curY, x + colWidth, curY);
  curY += 4.5;
  return curY;
}

// --- COLUMN 1 (LEFT) ---
let y1 = topColumnsY;

// Professional Profile
y1 = drawSectionHeader('Professional Profile', col1Left, y1);
doc.setFont('helvetica', 'normal');
doc.setFontSize(7.7);
doc.setTextColor(51, 65, 85);
const profileText = 'Results-driven Full Stack Developer with strong logical thinking and a passion for deep system investigation. Proven track record of mastering new technologies quickly and delivering precise, creative solutions under pressure. Looking to join a development team as a Full Stack Developer to drive technical growth.';
const profileLines = doc.splitTextToSize(profileText, colWidth);
doc.text(profileLines, col1Left, y1);
y1 += profileLines.length * 3.3 + 4.5;

// Education
y1 = drawSectionHeader('Education', col1Left, y1);

// 2020-2024
doc.setFont('helvetica', 'bold');
doc.setFontSize(8);
doc.setTextColor(15, 23, 42);
doc.text('2020–2024:', col1Left, y1);
y1 += 3.3;
doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(51, 65, 85);
const ed1Lines = doc.splitTextToSize('Full Matriculation Certificate: Beit Yaakov High School, Petah Tikva.', colWidth);
doc.text(ed1Lines, col1Left, y1);
y1 += ed1Lines.length * 3.1 + 2.5;

// 09/2024-05/2026
doc.setFont('helvetica', 'bold');
doc.setFontSize(8);
doc.setTextColor(15, 23, 42);
doc.text('09/2024–05/2026:', col1Left, y1);
y1 += 3.3;
doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(51, 65, 85);
const ed2_1 = doc.splitTextToSize('MAHAT Studies: Specialization in Full-Stack Development, Databases, Systems Analysis, and Software Engineering.', colWidth);
doc.text(ed2_1, col1Left, y1);
y1 += ed2_1.length * 3.1 + 1.2;
const ed2_2 = doc.splitTextToSize('UltraCode: Advanced technological training focusing on complex web architectures, client and server-side code optimization, and data-intensive application development.', colWidth);
doc.text(ed2_2, col1Left, y1);
y1 += ed2_2.length * 3.1 + 2.5;

// Practical Experience
doc.setFont('helvetica', 'bold');
doc.setFontSize(8);
doc.setTextColor(15, 23, 42);
doc.text('Practical Experience 05/2026 – 07/2026:', col1Left, y1);
y1 += 3.3;
doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(51, 65, 85);
const ed3 = doc.splitTextToSize('Chip Design & Verification Practicum: Successfully completed a comprehensive 250-hour, 9.5-week intensive program specializing in semiconductor planning, advanced simulation technologies, and hardware design verification methodologies.', colWidth);
doc.text(ed3, col1Left, y1);
y1 += ed3.length * 3.1 + 1.2;
doc.setFont('courier', 'normal');
doc.setFontSize(7.2);
doc.setTextColor(100, 116, 139);
doc.text('Github: WIFI-RX-Decimation-Verification', col1Left, y1);
y1 += 3.6;

// Self Learning
doc.setFont('helvetica', 'bold');
doc.setFontSize(8);
doc.setTextColor(15, 23, 42);
doc.text('Self-Learning & Enrichment:', col1Left, y1);
y1 += 3.3;
doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(51, 65, 85);
const ed4 = doc.splitTextToSize('Completed professional online courses via the Campus IL platform in technology, development, and more. Continuous independent learning of new tools and technologies at all times.', colWidth);
doc.text(ed4, col1Left, y1);
y1 += ed4.length * 3.1 + 4.5;

// Technical Skills
y1 = drawSectionHeader('Technical Skills', col1Left, y1);

function drawSkill(label, desc) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.7);
  doc.setTextColor(15, 23, 42);
  doc.text(label, col1Left, y1);
  y1 += 3.2;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.4);
  doc.setTextColor(51, 65, 85);
  const lines = doc.splitTextToSize(desc, colWidth);
  doc.text(lines, col1Left, y1);
  y1 += lines.length * 3.1 + 2.2;
}

drawSkill('Languages & Frameworks:', 'HTML, CSS, JavaScript, TS, Node.js, Angular, React, Java, C#, Python, SQL, Spring Boot, .NET Core, H2, MongoDB, AWS, Unix, Verilog, UVM.');
drawSkill('Tools & Infrastructure:', 'Git & GitHub, Salesforce, Algorithms, Data Structures, SOC fundamentals, DevOps fundamentals - Docker, Copilot, Claude, Cursor, Chip Design & Verification fundamentals, Logic Simulation.');
drawSkill('Design & Software:', 'Microsoft Office, Canva, Photoshop.');
drawSkill('Operating Systems:', 'macOS, Windows, Linux (Project experience)');
y1 += 2;

// Languages
y1 = drawSectionHeader('Languages', col1Left, y1);
doc.setFont('helvetica', 'bold');
doc.setFontSize(7.7);
doc.setTextColor(15, 23, 42);
doc.text('Hebrew: ', col1Left, y1);
doc.setFont('helvetica', 'normal');
doc.setTextColor(51, 65, 85);
doc.text('Native', col1Left + 13, y1);
y1 += 3.5;

doc.setFont('helvetica', 'bold');
doc.setTextColor(15, 23, 42);
doc.text('English: ', col1Left, y1);
doc.setFont('helvetica', 'normal');
doc.setTextColor(51, 65, 85);
doc.text('Very high proficiency, daily exposure and usage.', col1Left + 12, y1);

// --- COLUMN 2 (RIGHT): SELECTED PROJECTS ---
let y2 = topColumnsY;
y2 = drawSectionHeader('Selected Projects', col2Left, y2);

function drawProject(title, desc, tools, github) {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.2);
  doc.setTextColor(15, 23, 42);
  doc.text(title, col2Left, y2);
  y2 += 3.4;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.4);
  doc.setTextColor(51, 65, 85);
  const descLines = doc.splitTextToSize(desc, colWidth);
  doc.text(descLines, col2Left, y2);
  y2 += descLines.length * 3.1 + 1.2;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.4);
  doc.setTextColor(15, 23, 42);
  doc.text('Tools: ', col2Left, y2);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  const toolsLines = doc.splitTextToSize(tools, colWidth - 11);
  doc.text(toolsLines, col2Left + 10, y2);
  y2 += toolsLines.length * 3.1 + 0.8;

  doc.setFont('courier', 'normal');
  doc.setFontSize(7.2);
  doc.setTextColor(100, 116, 139);
  doc.text('GitHub: ' + github, col2Left, y2);
  y2 += 4;
}

drawProject(
  'Cars – E-commerce Platform:',
  'Designed and developed a responsive vehicle showcase and sales site using HTML and CSS. Optimized loading times and utilized Media Queries to ensure full responsiveness.',
  'HTML, CSS.',
  'Cars-website'
);

drawProject(
  'Color Bomb – Interactive Browser Game:',
  'Developed a game application based on JavaScript, implementing complex client-side algorithmic logic.',
  'HTML, CSS, JavaScript.',
  'Color-bomb game'
);

drawProject(
  'Fynx – Collaborative Full-Stack Application:',
  'Developed an end-to-end web system using Angular and Spring Boot for real-time data management and user interaction. Implemented REST APIs, multipart file uploads, and integrated an AI Chatbot while maintaining clear data separation through DTOs and Mappers.',
  'Angular, Java, Spring Boot, H2 Database.',
  'web-app Fynx'
);

drawProject(
  'Fynx – Automation & Testing Framework:',
  'Developed a robust regression testing framework using C# and Selenium (POM), handling dynamic elements and advanced synchronization to ensure platform stability.',
  'C#, Selenium, JS Executor, WebDriverWait.',
  'Fynx-Automation'
);

drawProject(
  'Recipes – RESTful API Recipe Management Server:',
  'Developed a backend system for user and content management, including authentication and RBAC. Implemented core server-side logic, data validation, and cloud-based database management.',
  'Node.js, Express, MongoDB Atlas, Joi, Postman.',
  'Recipes-Project-NodeJS'
);

drawProject(
  'Seminar-Site – Student Profile Component in Institutional System:',
  'Developed a microservice for an integrated system, enabling management of personal profiles, projects, skills, and a CV-generator chatbot. Implemented an End-to-End architecture featuring a secured API server and a dynamic Vite-based client interface.',
  'ASP.NET Core 7, React (Vite), Entity Framework Core, JWT, Material UI.',
  'Microservice-Profile'
);

// Save to public directory
const outputPath = path.resolve('public', 'Noa_Kadish_Resume.pdf');
const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync(outputPath, pdfBuffer);

console.log('Successfully generated:', outputPath, 'size:', pdfBuffer.length, 'bytes');
