import React, { useState } from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';

export interface ScorebuttonProps {
  team: string;
  score: number;
  onClick: () => void;
}

export const Scorebutton = ({ team, score, onClick }: ScorebuttonProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid #ccc',
          borderRadius: '4px',
          overflow: 'hidden',
          width: '200px', // Fixed width
          height: '50px', // Fixed height for consistent size
        }}
      >
        <Button style={{ flex: 1,fontSize: '40px' }}>{score}</Button>
        <Box
          style={{
            display: isHovered ? 'flex' : 'none',
            flexDirection: 'column',
            marginLeft: '8px',
          }}
        >
          <Button style={{ height: '25px', fontSize: '12px', border: '1px solid #ccc' }}>x2</Button>
          <Button style={{ height: '25px', fontSize: '12px',border: '1px solid #ccc' }}>x3</Button>
        </Box>
      </Box>
    );
  };


export default Scorebutton;
