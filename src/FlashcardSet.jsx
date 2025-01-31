import { useState, useEffect } from 'react';
import { DefinitionCard } from './DefinitionCard';

export const pickFromBoneList = (boneList, seenCards, activeCard) => {
  if (activeCard) {
    seenCards = [...seenCards, activeCard];
  }
  const options = Object.values(boneList).filter(b => !seenCards.map(sc => sc.id).includes(b.id));

  if (!options.length) return null;

  const index = Math.floor(Math.random() * options.length);

  return options[index];
};

export const FlashcardSet = ({ boneList }) => {
  const [activeCard, setActiveCard] = useState(null);
  const [seenCards, setSeenCards] = useState([]);

  const [isDefRevealed, setIsDefRevealed] = useState(false);
  const toggleDef = () => setIsDefRevealed(!isDefRevealed);
  // const [iPicRevealed, setIPicRevealed] = useState(true);
  // const togglePic = () => setIsPicRevealed(!isPicRevealed);

  const removeCard = (card) => {
    setSeenCards([...seenCards, card]);
  }

  const nextCard = () => {
    setIsDefRevealed(false);
    const _activeCard = pickFromBoneList(boneList, seenCards, activeCard);
    setActiveCard(_activeCard);
  };

  useEffect(() => {
    nextCard();
  }, [boneList]);

  if (!activeCard) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', margin: 50, gap: 50 }}>
        No cards left smartie!
        <button onClick={() => setSeenCards([])}>
          Start over  
        </button>
      </div>
    );
  }

  // Just saving some effort on the image processing end!
  const jpgurl = new URL(`./assets/${activeCard.id}.jpg`, import.meta.url).href;
  const pngurl = new URL(`./assets/${activeCard.id}.png`, import.meta.url).href;
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
      }}
    >
      <div style={{
        margin: '0 0 10px',
        padding: '20px 10px 5px',
        background: 'white',
        height: '60%',
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
        // onClick={() => toggleDef()}
      >
        { isDefRevealed && <DefinitionCard activeCard={activeCard} /> }
        { !isDefRevealed && (
          <button
            onClick={() => toggleDef()}
            style={{
              width: '100%',
              height: '100%',
              fontStyle: 'italic',
              fontSize: 24,
              fontWeight: 300,
              // letterSpacing: 5,
              padding: 0,
              color: '#999',
              borderRadius: 0,
              border: 'none',
              background: '#eee',
            }}
          >
            Reveal Answer
          </button>
        )}
      </div>

      {/* <hr /> */}

      <div
        style={{
          display: 'flex',
          gap: 10,
          padding: '5px 10px',
        }}
      >

        <span style={{ style: 'inline-block', height: 50, padding: '14px', fontSize: 12, fontStyle: 'italic' }}>
          { Object.keys(boneList).length - seenCards.length }
          { ` bones left` }
        </span>

        <button
          onClick={() => {
            nextCard();
          }}
          style={{
            flexGrow: 1,
            height: 50,
            borderRadius: 0,
            background: '#ffd8d8',
          }}
        >
          I didn't know this
        </button>

        <button
          onClick={() => {
            removeCard(activeCard);
            nextCard();
          }}
          style={{
            flexGrow: 1,
            height: 50,
            borderRadius: 0,
            background: '#dafcea',
          }}
        >
          I knew this
        </button>
      </div>

      {/* <pre> */}
        {/* { JSON.stringify(activeCard, null, 2) } */}
        {/* {JSON.stringify(seenCards, null, 2)} */}
      {/* </pre> */}
    </div>
  );
};
