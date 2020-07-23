import React, {useState} from 'react';
import { StyledWrapper } from './styles/StyledBackground';
import { createBoard, initiateBoard } from '../gameHelper';
import Board from './Board';
import StartButton from './StartButton';
import {useBoard} from '../hooks/useBoard';


const Main = () => {
    const [gameOver, setGameOver] = useState(false);
    const [board, setBoard, moveBoard] = useBoard(createBoard());

    const startGame = () => {
        console.log("test")
        // Reset everything
        setBoard(initiateBoard());
        setGameOver(false);
      }

    const moveHorizontal = (dir) => {
      moveBoard(dir)
      }



    const move = ({ keyCode }) => {
    if (!gameOver) {
        if (keyCode === 37) {
        moveHorizontal(0);
        } else if (keyCode === 38) {
        moveHorizontal(3);
        }else if (keyCode === 39) {
        moveHorizontal(2);
        } else if (keyCode === 40) {
        moveHorizontal(1);
        }
    }
    }


    return(
        <StyledWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
            <Board Board={board} />
            <aside>
          <StartButton callback={startGame} />
        </aside>
        </StyledWrapper>
    )
}

export default Main