import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CyberSecurity() {
  const careers = [
    {
      imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
      instruction: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      Description:"First off, we will understand what Cybersecurity is and how it is related to your online activities. We will consider numerous points and have an in-depth comparison, to find out the difference between Cybersecurity and Ethical Hacking"
    },
    {
      imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      instruction: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      Description:"Look around today, you will witness that we are more reliant on technology and devices than ever before. Benefits of this trend range from getting rid of Yellowbook, and having near-instant access to information on the internet o the modern conveniences provided by smart home automation technology and concepts like IoT devices"
    },
    {
      imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Blue-Purple-Futuristic-Virus-Hacks-Youtube-Thumbnail.png",
      instruction: "Top 10 Ethical Hacking Books for Beginner to Advanced",
      Description:
        "Before jumping into the list of the top 10 ethical hacking books, let’s speak a bit about cybersecurity. I’m sure you already know “what cybersecurity is” but here’s a refresher. Cyber security refers to the practice of protecting networks, programs, computer systems, and their components from unauthorized digital access and attacks"
    }
  ];

  return (
    <div className="row" style={{ marginLeft: '-10px', marginRight: '-10px' }}>
  {careers.map((career, index) => (
    <div key={index} className="col-md-4" style={{ marginTop: '20px', marginBottom: '20px', paddingLeft: '10px', paddingRight: '10px' }}>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={career.imgUrl} />
        <Card.Body>
          <Card.Title>{career.instruction}</Card.Title>
          <Card.Text>{career.Description}</Card.Text>
          <Button variant="primary">Learn more</Button>
        </Card.Body>
      </Card>
    </div>
  ))}
</div>
  );
}


export default CyberSecurity