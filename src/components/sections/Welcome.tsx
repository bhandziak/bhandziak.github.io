import React from 'react';

interface WelcomeProps {
  title: string;
  description: string;
  avatarUrl?: string;
}

const Welcome: React.FC<WelcomeProps> = ({ 
  title,
  description,
  avatarUrl, }) => {
  return (
    <div className="welcome-container">
      <img 
        src={avatarUrl} 
        className="welcome-avatar"
        loading="eager"
        width={150}
        height={150}
      />
      <h1 className="main-title">
        {title}
      </h1>
      <p className="main-description">
        {description}
      </p>
    </div>
  );
};

export default Welcome;