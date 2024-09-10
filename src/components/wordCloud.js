import React from 'react';
import '../styles/WordCloud.css'; // Ensure this path is correct

const words = [
  'Teamwork', 'Collaboration', 'Frontend', 'Backend', 'Full Stack',
  'React', 'Bootstrap', 'JavaScript', 'HTML', 'CSS', 'APIs', 'Database',
  'UXUI', 'Git', 'GitHub', 'Knowledge', 'Skills', 'Development',
  'Software Engineering', 'Mentorship', 'Life Long Learner', 'Learning',
  'Problem Solving', 'Communication', 'Self Motivation', 'Self-Improvement',
  'Practice', 'Synergy', 'Cooperation', 'Coordination', 'Group Work',
  'Team Building', 'Trust', 'Leadership', 'Support', 'Feedback', 'Engagement',
  'Shared Goals', 'Empowerment', 'Alignment', 'Conflict Resolution', 'Inclusion',
  'Flexibility', 'Adaptability', 'Critical Thinking', 'Motivation', 'Responsibility',
  'Brainstorming', 'Networking', 'Innovation', 'Creativity', 'Problem-Solving',
  'Strategic Thinking', 'Initiative', 'Resilience', 'Agility', 'Growth Mindset',
  'Goal Achievement', 'Learning Curve', 'Adaptation', 'Team Dynamics',
  'Collaboration Tools', 'Team Culture', 'Goal Setting', 'Consensus', 'Contribution',
  'Inclusivity', 'Cross-Functional Teams', 'Collaboration Culture', 'Skill Development',
  'Training', 'Workshops', 'Tutorials', 'Certification', 'Courses', 'Modules',
  'Seminars', 'Webinars', 'E-learning', 'Study Groups', 'Research', 'Academia',
  'Teaching', 'Learning Paths', 'Educational Resources', 'Knowledge Sharing',
  'Problem-Solving Skills', 'Learning Objectives', 'Assessments', 'Evaluation'
];

const getRandomPosition = () => {
  return {
    top: `${Math.random() * 100}vh`, // Use viewport height to make it more adaptable
    left: `${Math.random() * 100}vw` // Use viewport width for horizontal position
  };
};

const getRandomSize = () => {
  return `${Math.random() * 15 + 20}px`; // Ensure font size is legible
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
              fontSize: getRandomSize(),
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
