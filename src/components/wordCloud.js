import React, { useState, useEffect } from 'react';
import '../styles/WordCloud.css'; // Ensure this path is correct

const words = [
  'Teamwork', 'Collaboration', 'Frontend', 'Backend', 'Full Stack',
  'React', 'Bootstrap', 'JavaScript', 'HTML', 'CSS', 'APIs', 'Database',
  'UXUI', 'Git', 'GitHub', 'Knowledge', 'Skills', 'Development',
  'Software Engineering','Life Long Learner', 'Learning',
  'Problem Solving', 'Communication', 'Self Motivation', 'Self-Improvement',
  'Practice', 'Synergy', 'Cooperation', 'Coordination', 'Group Work',
  'Team Building', 'Trust', 'Leadership', 'Support', 'Feedback', 'Engagement',
  'Shared Goals', 'Empowerment', 'Alignment', 'Conflict Resolution', 'Inclusion',
  'Flexibility', 'Adaptability', 'Critical Thinking', 'Motivation', 'Responsibility',
  'Brainstorming', 'Networking', 'Innovation', 'Creativity', 'Problem-Solving',
  'Strategic Thinking', 'Initiative', 'Resilience', 'Agility', 'Growth Mindset',
  'Goal Achievement', 'Learning Curve', 'Adaptation', 'Team Dynamics',
  'Team Culture', 'Goal Setting', 'Consensus', 'Contribution',
  'Collaboration Culture', 'Skill Development',
  'Certification', 'Courses', , 'Study Groups', 'Research', 'Learning Paths', 'Educational Resources', 'Knowledge Sharing',
  'Problem-Solving Skills', 'Learning Objectives', 'Assessments', 'Evaluation'
];

const getRandomPosition = () => {
  return {
    top: `${Math.random() * 100}vh`, // Use viewport height to make it more adaptable
    left: `${Math.random() * 100}vw` // Use viewport width for horizontal position
  };
};

const getRandomSize = (windowWidth) => {
  const minSize = windowWidth <= 768 ? 10 : 20; // Smaller words for smaller screens
  const maxSize = windowWidth <= 768 ? 30 : 50; // Limit the maximum size
  return `${Math.random() * (maxSize - minSize) + minSize}px`;
};

const getRandomColor = () => {
  const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F0FF33', '#FF33A1', 
    '#FF8C00', '#00BFFF', '#FF1493', '#FFD700', '#32CD32', 
    '#1E90FF', '#FF6347', '#FF4500', '#DA70D6', '#FF69B4'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const WordCloud = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="word-cloud-container">
      {words.map((word, index) => {
        const position = getRandomPosition();
        return (
          <div
            key={index}
            className="floating-word"
            style={{
              top: position.top,
              left: position.left,
              fontSize: getRandomSize(windowWidth),
              color: getRandomColor()
            }}
          >
            {word}
          </div>
        );
      })}
    </div>
  );
};

export default WordCloud;
