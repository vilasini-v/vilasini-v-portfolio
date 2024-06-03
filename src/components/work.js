import React from 'react'

const work = () => {
    const internships=[
        {
        company:"",
        year:"",
        position:"",
        desc:""
        }
    ];
    const hackathons=[
        {
            name:"WebDex",
            year:"2024",
            desc:"Secured 1st place in the hackathon conducted by ACM student chapter and received prize money and internship opportunity by Reverse Innovations. Developed a platform that that bridges the gap and creates an easy communication platform between volunteers and NGOs aligning with SDGs 4,8,9 and 17.",
            techStacks:"HTML5, CSS, JS"
        },
        {
            name:"Cook'Off Hackathon",
            year:"2024",
            desc:"A website that bridges the gap between nurseries and buyers, promoting sustainable practices in line with SDGs 15 (Life on Land) and 2 (Zero Hunger).",
            techStacks:"HTML5, CSS, JS, Node JS, Python"
        },
        {
            name:"UI/UX zero to hero",
            year:"2023",
            desc:"Created a FIGMA mockup for Music App and was ranked in top 3 out of 80 participants.",
            techStacks:""
        },
        {
            name:"IEEE Robotics Society Hackathon",
            year:"2023",
            desc:"Implemented a machine learning model to determine a patient’s condition with an accuracy of 0.76. Top 5 out of 60 teams.",
            techStacks:"Python"
        },
        {
            name:"SMART INDIA HACKATHON",
            year:"2023",
            desc:"Devised a web-app that helps students network with professors for research partnerships and mentorship programmes.",
            techStacks:"React JS, Django, Sci-kit learn"
        }
    ];
    const projects=[
        {
        name:'Affirmations generator',
        link:'https://affirmations-iota.vercel.app/',
        year:'2023',
        desc:'A frontend project that generates affirmations with the option to share it to twitter/X.',
        techStacks:"HTML, CSS, JavaScript"
    },
    {
        name:'Arcade',
        link:'https://arcade-navy.vercel.app/',
        year:'2024',
        desc:'An arcade with mini games made with javascript such as rock-paper-scissors, coin-flip, and guess-the-number',
        techStacks:"Javascript, HTML, CSS, React JS"
    }
    ];
    const [visibleCount, setVisibleCount] = useState(1);
    const handleViewMore = () => {
        setVisibleCount((prevCount) => prevCount + 2);
      };
      const handleViewLess = () => {
        setVisibleCount((prevCount) => (prevCount - 2 > 0 ? prevCount - 2 : 2));
      };

  return (
    <div className='work-container'>
        
      
    </div>
  )
}

export default work
