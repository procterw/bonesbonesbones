import { useState, useEffect } from 'react';
import { DefinitionCard } from './DefinitionCard';
import { FunctionCard } from './DefinitionCard';

export const FlashcardSet = ({
  muscleList,
  clearCards,
  activeCard,
  nextRight,
  nextWrong,
}) => {

  const [isMuscleRevealed, setIsMuscleRevealed] = useState(false);
  const toggleMuscle = () => setIsMuscleRevealed(!isMuscleRevealed);

  const [isFunctionRevealed, setIsFunctionRevealed] = useState(false);
  const toggleFunction = () => setIsFunctionRevealed(!isFunctionRevealed);

  useEffect(() => {
    setIsMuscleRevealed(false);
    setIsFunctionRevealed(false);
  }, [activeCard])

  if (!activeCard) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', margin: 50, gap: 50 }}>
        No cards left smartie!
        <button onClick={() => clearCards()}>
          Start over
        </button>
      </div>
    );
  }

  // Just saving some effort on the image processing end!
  const jpgurl = new URL(`./assets/${activeCard.muscle}.jpg`, import.meta.url).href;
  const pngurl = new URL(`./assets/${activeCard.muscle}.png`, import.meta.url).href;
  const url = jpgurl.includes('undefined') ? pngurl : jpgurl;

  return (
    <div
      style={{
        display: 'flex',
        // flexGrow: 1,
        // justifyContent: 'center',
        width: '100%',
        maxWidth: 600,
        height: '100vh',
        minHeight: 300,
        maxHeight: 700,
        flexDirection: 'column',
        // gap: 5,
      }}
    >

      <h4 style={{
        fontSize: 12,
        margin: 0,
        padding: 15,
        // borderBottom: '1px solid #ddd',
        fontStyle: 'italic',
        color: '#333',
      }}>
        💪 💪 💪 What muscle is this? 💪 💪 💪
      </h4>

      <div style={{
        margin: '0 0 10px',
        padding: '0 12px',
        // padding: '20px 10px 5px',
        background: 'white',
        height: '55%',
        maxHeight: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px solid #ccc'
      }}>
        <img
          src={url}
          style={{
            maxHeight: '100%',
            width: '100%',
            maxWidth: 450,
            objectFit: 'contain',
            boxShadow: '0px 2px 6px 1px rgba(0,0,0,0.1)',
          }} />
      </div>

      {/* <hr /> */}

      <div
        style={{
          listStyle: 'none',
          textAlign: 'left',
          margin: '0 0 10px',
          padding: '5px 10px',
          background: 'white',
          // minHeight: '25vh',
          flexGrow: 1,
          // maxHeight: 300,
          // border: '1px solid #ccc',
        }}
      >
        { isMuscleRevealed && <DefinitionCard activeCard={activeCard} /> }
        { !isMuscleRevealed && (
          <button
            onClick={() => toggleMuscle()}
            style={{
              width: '100%',
              height: '100%',
              fontStyle: 'italic',
              fontSize: 16,
              fontWeight: 700,
              // letterSpacing: 5,
              padding: 0,
              color: '#666',
              // borderRadius: 0,
              border: 'none',
              background: '#eee',
            }}
          >
            Reveal Muscle
          </button>
        )}
      </div>

      <div
        style={{
          listStyle: 'none',
          textAlign: 'left',
          margin: '0 0 10px',
          padding: '5px 10px',
          background: 'white',
          // minHeight: '25vh',
          flexGrow: 1,
          // maxHeight: 300,
          // border: '1px solid #ccc',
        }}
      >
        { isFunctionRevealed && <FunctionCard activeCard={activeCard} /> }
        { !isFunctionRevealed && (
          <button
            onClick={() => toggleFunction()}
            style={{
              width: '100%',
              height: '100%',
              fontStyle: 'italic',
              fontSize: 16,
              fontWeight: 700,
              // letterSpacing: 5,
              padding: 0,
              color: '#666',
              // borderRadius: 0,
              border: 'none',
              background: '#eee',
            }}
          >
            Reveal Function
          </button>
        )}
      </div>

      {/* <hr /> */}

      <div
        style={{
          display: 'flex',
          gap: 10,
          padding: '5px 10px',
          fontSize: 12,
        }}
      >

        <button
          onClick={() => {
            nextWrong();
          }}
          style={{
            flexGrow: 1,
            height: 50,
            // borderRadius: 0,
            background: '#ffd8d8',
          }}
        >
          Didn't know 💀
        </button>

        <button
          onClick={() => {
            nextRight();
          }}
          style={{
            flexGrow: 1,
            height: 50,
            // borderRadius: 0,
            background: '#dafcea',
          }}
        >
          Knew it 🦴
        </button>
      </div>

      <div>
        <span style={{ style: 'inline-block', height: 50, padding: '14px', fontSize: 12, fontStyle: 'italic' }}>
          { muscleList.length }
          { ` muscles to go` }
        </span>

        <span style={{ style: 'block', height: 50, padding: '14  px', fontSize: 12, fontStyle: 'italic' }}>
          {`↓ ↓ settings ↓ ↓`}
        </span>
      </div>

      {/* <pre> */}
        {/* { JSON.stringify(activeCard, null, 2) } */}
        {/* {JSON.stringify(seenCards, null, 2)} */}
      {/* </pre> */}
    </div>
  );
};
