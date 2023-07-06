import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function DataScience() {
  const careers = [
    {
      imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/05/Beginner-mistakes-in-data-science-career.webp",
      instruction: "8 Mistakes To Avoid When You Begin a Data Science Career",
      Description:
        "With leading modern-day companies relying on Data Science professionals to make more informed decisions and bring in better solutions, the field of Data Science is constantly evolving. We agree that the demand for data scientists is steadily increasing. On the other hand, Data Science is hands down one of the competitive fields where you need to be a skillful professional with appropriate expertise to sustain your stand in the field"
    },
    {
      imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/04/image-5.png",
      instruction: "Graphic Designer vs. UI/UX Designer: Key Differences You Should Know",
      Description:
        "It has always been confusing for people to understand the key differences between Graphic designers vs. UI/UX designers. To help you in clearing your confusion and clear your way to become one, this blog has been articulated"
    },
    {
      imgUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/01/maang-unit-14-1-1024x266-1.png",
      instruction: "7 Powerful Steps to Land a Software Developer Internship",
      Description:
        "The GUVI Blog Full Stack Development category is here to help you steer through a lot of opinions that float on the internet. High-Quality content created by experts While graphic designers primarily concentrate on visual communication and aesthetics, UI/UX designers are more concerned with creating intuitive and user-centered digital experiences"
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

export default DataScience