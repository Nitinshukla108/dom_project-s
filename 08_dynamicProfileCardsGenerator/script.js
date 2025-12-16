const users  = [
  {
    image: "photos/person1.avif",
    fullName: "Rahul Sharma",
    profession: "Web Developer",
    description: "Rahul is a frontend developer who specializes in React and UI designing."
  },
  {
    image: "photos/person2.avif",
    fullName: "Anjali Verma",
    profession: "Graphic Designer",
    description: "Anjali creates attractive UI designs and brand logos for startups."
  },
  {
    image: "photos/person3.avif",
    fullName: "Amit Patel",
    profession: "Software Engineer",
    description: "Amit works on backend APIs and database management systems."
  },
  {
    image: "photos/person4.avif",
    fullName: "Sneha Rao",
    profession: "Mobile App Developer",
    description: "Sneha develops Android and iOS applications."
  },

  // New Added Objects Below

  {
    image: "photos/person5.avif",
    fullName: "Karan Mehta",
    profession: "Data Analyst",
    description: "Karan works with SQL, Power BI and Python to analyze data insights."
  },
  {
    image: "photos/person6.avif",
    fullName: "Priya Singh",
    profession: "Digital Marketer",
    description: "Priya handles SEO campaigns and brand promotions through social media."
  },
  {
    image: "photos/person7.avif",
    fullName: "Sanjay Kumar",
    profession: "Cyber Security Expert",
    description: "Sanjay secures web applications and conducts penetration testing."
  },
  {
    image:"photos/person8..avif",
    fullName: "Neha Kapoor",
    profession: "Content Writer",
    description: "Neha writes technical blogs, branding content and case studies."
  },
  {
    image: "photos/person9.avif",
    fullName: "Deepak Joshi",
    profession: "Machine Learning Engineer",
    description: "Deepak trains ML models and works in predictive analytics."
  },
  {
    image: "photos/person10.avif",
    fullName: "Riya Shah",
    profession: "UI/UX Designer",
    description: "Riya designs modern and interactive user interfaces for apps."
  },
    {
    image:"photos/person11.avif",
    fullName: "Manoj Desai",
    profession: "Cloud Architect",
    description: "Manoj designs scalable cloud systems using AWS and Azure services."
  },
  {
    image: "photos/person12.avif",
    fullName: "Tanya Malhotra",
    profession: "DevOps Engineer",
    description: "Tanya automates deployments and manages CI/CD pipelines using Docker and Jenkins."
  }
];

// information of peoples in array of object 



var sum = '';
users.forEach(function(elem){
    sum = sum + ` <div id="cards">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
})

let main = document.querySelector('main');

main.innerHTML =  sum;