import React from 'react';

function About() {
  return (
    <section className="section">
      <h2>Education</h2>
      <p><strong>College:</strong> Malla Reddy College of Engineering and Technology</p>
      <p><strong>Schooling:</strong> Newton's High School</p>

      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>C++</li>
      </ul>

      <h2>Projects</h2>
      <div>
        <h4>Cozy House</h4>
        <p>
         Cozy House is a responsive website that provides detailed information about popular dog breeds for pet lovers and adopters. It helps users easily explore breed characteristics, care tips, and more through a clean and user-friendly design.

        </p>
      </div>
      <div>
        <h4>ParkWithEase</h4>
        <p>

          ParkWithEase is a smart parking solution that helps users find, book, and navigate to available parking spots in real time. It simplifies the parking experience with location-based services, live availability, and secure digital payments.

        </p>
      </div>
    </section>
  );
}

export default About;