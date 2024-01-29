

// React component for displaying a tennis match scoreboard
import React from 'react';
//import './MatchComponent.css'; // Import your CSS file

// Define TypeScript types for the props
type PlayerScore = {
    name: string;
    country: string;
    score: string[];
    isWinner: boolean;
  };
  
  type MatchProps = {
    teamA: PlayerScore;
    teamB: PlayerScore;
  };
  
  const Player: React.FC<PlayerScore> = ({ name, country, score, isWinner }) => (
    <div className={`player ${isWinner ? 'winner' : ''}`}>
      
      <span className="player-name">{name}</span>
      {score.map((set, index) => (
        <span key={index} className="score">{set}</span>
      ))}
    </div>
  );
  
  const MatchScoreboard: React.FC<MatchProps> = ({ teamA, teamB }) => (
    <div className="match-table">
      <Player {...teamA} />
      <Player {...teamB} />
    </div>
  );
  
export default MatchScoreboard;

