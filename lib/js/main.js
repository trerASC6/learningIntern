let internList = [];
const khanTutor = new Intern("Intern For A Tutoring", "Tutoring","This position will require a working commitment of at least 6 months. We require regular attendance at least 2 days a week, with weekends being preferred. Working hours are Saturdays and/or Sundays from 10:00 AM - 6:00 PM and up to 1 weeknight from 5:00 PM - 7:00 PM. High performing individuals have many opportunities for growth within the company. Interns can use the internship to fulfill volunteer hours for school.","Khan's Tutorial","New York, NY","5 Days ago","Part-Time","Paid","High School GPA of at least 90, Ability to work well with teammates, Preferred:Students of Stuyvesant, Bronx Science, Brooklyn Tech, new Specialized High Schools, or Top Screened High Schools");
internList.push(khanTutor);
const apolloMan = new Intern("Marketing And Strategy Intern", "Marketing and Strategdy","We are seeking a driven and enthusiastic individual to join our team as a Marketing & Strategy intern. The position requires an organized and multifaceted individual who is not uncomfortable speaking with high level clientele in both the sports and entertainment industries. The hired individual will help with marketing strategies and implementation, for a number of clients. Applicants must be seeking internship credit through a college or university to be approved.","New York, NY","3 Days Ago","Full-Time","Paid","Experience:relevant: 1 year (Preferred) ,Education:High school or equivalent (Preferred)");
internList.push(apolloMan);
const drumTeach = new Intern("Drum Teacher Intern","Teacher","Are you talented in the arts and interested in passing on your knowledge? Looking to make money doing something you love? Perhaps a teaching job is the right fit for you! So often, getting a job teaching is extremely difficult. Qualified performing arts jobs are highly sought after. Most schools require you to have a high level of experience and various degrees. Our school is no different, however we have developed an innovative training method, which allows high school and college students an opportunity to develop their skills and find placement in jobs within months.","Prodigy School of the Arts","East Meadow, NY","3 Days Ago","Part-Time","Paid","Sumbit a Resume");
internList.push(drumTeach);
const musicLabel = new Intern("Music Label Social Media Intern","Social Media","Our Social Media Intern is responsible for coordinating and executing our independent labels social media strategy, working across key social media channels including Facebook, Instagram,Twitter and LinkedIn.","Hometownheroes914","Yonkers, NY","4 Days Ago","Full-Time","Paid","Must have social media experience, general Microsoft Office proficiency, minimum education is high school senior/graduate.");
internList.push(musicLabel);
const entertainMark = new Intern("Fall Entertainment Marketing Intern","Marketing","  Partner management – Interns are required to help the marketing department in soliciting new partners, developing and maintaining partner relationships. They will also insist in collecting proof of service from these partners. This will be key for building out campaigns for clients including, but not limited to: HBO, Cirque du Soleil, and Sony Pictures. Research – Interns are required to help the marketing department compile lists of potential partners, and curate specific information requested by the client. Creative Brainstorms – Interns are required to participate in all creative meetings held by the company. They are meant to come prepared and to bring ideas to the table that can be presented to the client. Shipping – Interns are required to assist the marketing department with their shipping needs and help keep track of packages that come into and out of the office. Final Project – Interns are required to complete a project as part of their time with the company. They will pitch to the staff a branding campaign for a client as part of a team.","The Awareness Group","New York, NY","3 Days Ago","Part-Time","Unpaid","Special Demands: Interns may be required to lift boxes. Required level of education: High School. Required graduation Year:2020. Requirements: Please apply with resume and availability, Interns must receive credit");
internList.push(entertainMark);
const softEng = new Intern ("Software Engineering/Data Analytics Internship","Computer Science","Cowen Sustainable Investments is seeking an intern to design technology systems in ASP.NET and build web user interface. The project involves building and improving existing web user interface and web APIs. The job includes coordinating with our technology group to incorporate quantitative models into web-based user interface. This role involves direct engagement with the Co-Heads of the Cowen Sustainable Investments group and technology group within Cowen. The objective is to build a range of models to analyze structured and unstructured data and sample tasks include building data gathering, data cleaning, and data analysis in both deal-specific and non-deal specific scenarios. Responsibilities also include working on web development projects to integrate the above models.","Requirements: Enrolled in an Undergraduate or Graduate Program in a quantitative field such as Computer Science, Statistics, Engineering, Applied Mathematics, or Physics. Candidates with applied experience in object-oriented programming, client/server programming and statistical analysis.","New York, NY","07-29-19","Full-Time","Paid","Requirements: Enrolled in an Undergraduate or Graduate Program in a quantitative field such as Computer Science, Statistics, Engineering, Applied Mathematics, or Physics. Candidates with applied experience in object-oriented programming, client/server programming and statistical analysis. Programming experience - Web development (Microsoft technology stack preferrred). JavaScript,SQL, Nuget or Git SVN or equivalent. Optional: ReactJS, Angular JS, Web API, Matlab. Strong analytical and programming skills. Demonstrated ability to work cooperatively with a team. Ability to work independently in a fast-paced enviorment. Execptional work ethic");
internList.push(softEng);
const dataSci = new Intern ("Data Scientist","Computer Science","Analyze data sets and protoype as many experiments as necessary to converge to the optimal practical solution. Work with New York-based Alpha Pro machine learning team in order to expand the predictive modeling services, and work with state-of-the art stack of data modeling paradigms. Get responsibility right from the first day and the unique chance to enrich the environment of key metrics Portware's predictive services rely on. Extract, transform, and load data. Write reusable research code and prototypes for predictive models. Take part in all aspects of the software life cycle, including specification, analysis, design, development, unit testing, product deployment and support. Search, read, understand, and communicate relevant academic papers related to your projects. Participate in brainstorming sessions for new ideas","FactSet","New York City, NY","08-02-19","Full-Time","Unpaid","requirements: Pursuing a MSc/PhD in a quantitative field, such as Applied Mathematics, Computer Science, Engineering, Physics, Operations Research, Econometrics, Stochastic Finance. Excellent analytical skills. Hands-on design and implementation of machine learning solutions. Interest in the financial markets as well as previous experience in financial services. Sounds knowledge and application of advanced statistical methods and time series analysis. Proficiency with R, Python, and Matlab. Strong computer science fundamentals (data structures & algorithms) and solid object-oriented design skills");
internList.push(dataSci);
const hrAssis = new Intern("HR Assistant","Computer Science","Displays excellent communication skills and telephone etiquette. Answers incoming calls in a courteous and professional manner - identifies self and company. Places calls to referring candidates and scheduling. Updates candidates information at the point of scheduling. Communicates and interacts with all departments effectively and professionally. Meets incoming call volume quota. Pre-registers, email applications, scans documents as needed for on-boarding of candidates.","JBCPlatform","New York, NY","08-12-19","Part-Time","Unpaid","Applicants must have prior office work experience, computer skills, the ability to multi-task, social media knowledge, excellent customer service skills, and great communication skills!");
internList.push(hrAssis);
group = document.body.getElementsByClassName("group");
var btn = 0;
for(let i = 0; i < internList.length; i++){
    btn = document.createElement("h4");
    btn.innerText = internList[i].name;
    btn.setAttribute("id","identification")
    console.log("Added to Array")
}
let filteredList = [];
let checkForPaid = 0;
let checkForUnpaid = 0;
function checkPay (){
    checkForPaid = document.getElementById("paidCheck").checked;
    checkForUnpaid = document.getElementById("unpaidCheck").checked;
    if (checkForPaid == true){
        
        for(let i = 0; i < internList.length; i++){
            if(internList[i].pay == "Paid")
                filteredList.push(internList[i])
            else 
            console.log("unchecked")
        }
    }
    if (checkForUnpaid == true){
        
        for(let i = 0; i < internList.length; i++){
            if(internList[i].pay == "Unpaid")
                filteredList.push(internList[i])
            else 
            console.log("unchecked")
        }
    }
}
console.log("eeeeeeeeeeei")
document.body.addEventListener("click", checkPay)