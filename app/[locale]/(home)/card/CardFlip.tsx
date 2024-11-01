'use client';

import React, { useState, ReactNode } from 'react';
import { styled } from '@mui/material';

interface CardFlipProps {
  frontCard: ReactNode;
  backCard: ReactNode;
  height: string;
}

interface FlipCardContainerProps {
  isFlipped: boolean;
  height: string;
}

const FlipCardContainer = styled('div')<FlipCardContainerProps>(
  ({ isFlipped, height }) => ({
    perspective: '1000px',
    '& .inner': {
      transition: 'transform 0.6s',
      transformStyle: 'preserve-3d',
      position: 'relative',
      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      height: height,
      width: '100%',
      marginBottom: '5px',
      padding: '0',
    },
    '& .front, & .back': {
      backfaceVisibility: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      padding: '0',
      width: '100%',
      marginY: '10px',
      height: height,
    },
    '& .back': {
      transform: 'rotateY(180deg)',
    },
  })
);

const CardFlip: React.FC<CardFlipProps> = ({ frontCard, backCard, height }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <FlipCardContainer
      isFlipped={isFlipped}
      height={height}
      onClick={handleCardClick}
    >
      <div className='inner'>
        <div className='front'>
          <div>{frontCard} </div>
        </div>
        <div className='back'>
          <div>{backCard}</div>
        </div>
      </div>
    </FlipCardContainer>
  );
};

export default CardFlip;
