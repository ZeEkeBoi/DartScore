import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

export interface KillerButtonProps {
  team: string;
  score: number;
  onClick: (score: number) => void;
}

export const KillerButton = ({ team, score, onClick }: KillerButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currScore, setCurrScore] = useState<number>(0);

  const handleIncrement = () => {
    if (currScore < 3) {
      setCurrScore((prev) => prev + 1);   
      onClick(currScore+1);
    }
  };

  const handleDecrement = () => {
    if (currScore > 0) {   
      setCurrScore((prev) => prev - 1);
      onClick(currScore-1);
    }
  };

  return ( 
    <Box
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
      width: '250px', // Width of the whole container
      height: '55px',
      overflow: 'hidden',
      cursor: 'pointer',
    }}
  >
    <Box   
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '200px',
        height: '50px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        overflow: 'hidden',    
        cursor: 'pointer',
      }}
      onClick={handleIncrement}
    >
      {/* Main button displaying the score */}
      <Button style={{
          fontSize: '54px',
          lineHeight: '1', 
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          padding: 0, 
          minWidth: 'auto', 
        }}>
        {Array(currScore).fill('X').join(' ')}
      </Button>
      </Box>
      {/* Delete button visible on hover */}
      {isHovered && currScore > 0 && (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handleDecrement();
          }}
          style={{
            height: '100%',
            minWidth: '50px',           
            backgroundColor: '#f44336',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        >
         <DeleteForeverTwoToneIcon/>
        </Button>
      )}
   </Box>
  );
};

export default KillerButton;
