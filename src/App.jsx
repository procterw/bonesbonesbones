import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { getBoneList } from './getBoneList';
import './App.css'

// const imgUrl = new URL('./assets/react.svg', import.meta.url).href;
// console.log(imgUrl);

const processBoneList = (boneList) => {
  const processedBoneList = {};

  boneList.forEach((b) => {
    const id = `${b[0]}_${b[1]}_${b[2]}_${b[3]}`;

    processedBoneList[id] = {
      id,
      skeleton: b[0],
      region: b[1],
      subRegion: b[2],
      name: b[3],
    };
  });

  return processedBoneList;
};

const pickFromBoneList = (boneList, seenCards) => {
  const options = Object.values(boneList).filter(b => !seenCards.includes(b.id));

  if (!options.length) return null;

  const index = Math.floor(Math.random() * options.length);

  return Object.values(boneList)[index];
};

export const FlashcardSet = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [boneList, setBoneList] = useState(processBoneList(getBoneList()));
  const [seenCards, setSeenCards] = useState([]);

  const nextCard = () => {
    let _seenCards = [...seenCards];
    if (activeCard) {
      _seenCards.push(activeCard.id)
    }
    const _activeCard = pickFromBoneList(boneList, _seenCards);
    setActiveCard(_activeCard);
    setSeenCards(_seenCards);
  }
  
  useEffect(() => {
    nextCard();
  }, []);

  if (!activeCard) {
    return (
      <div>
        No cards left, sorry!
      </div>
    )
  }

  // Just saving some effort on the image processing end!
  const jpgurl = new URL(`./assets/${activeCard.id}.jpg`, import.meta.url).href;
  const pngurl = new URL(`./assets/${activeCard.id}.png`, import.meta.url).href;
  const url = jpgurl.includes('undefined') ? pngurl : jpgurl;

  return (
    <div>
      <ul style={{
        listStyle: 'none',
        textAlign: 'left',
        margin: '0 0 10px',
        padding: '5px 10px',
        background: 'white',
        border: '1px solid #ccc'
      }}>
        <li>
          <span style={{ width: 100, display: 'inline-block' }}>
          { `Skeleton: ` }
          </span>
          <span style={{
            fontWeight: 700
          }}>
            { activeCard.skeleton }
          </span>
        </li>
        <li>
          <span style={{ width: 100, display: 'inline-block' }}>
          { `Region: ` }
          </span>
          <span style={{
            fontWeight: 700
          }}>
            { activeCard.region }
          </span>
        </li>
        <li>
          <span style={{ width: 100, display: 'inline-block' }}>
          { `Subregion: ` }
          </span>
          <span style={{
            fontWeight: 700
          }}>
            { activeCard.subRegion }
          </span>
        </li>
        <li>
          <span style={{ width: 100, display: 'inline-block' }}>
          { `Name: ` }
          </span>
          <span style={{
            fontWeight: 700
          }}>
            { activeCard.name }
          </span>
        </li>
      </ul>

      <div style={{
        margin: '0 0 10px',
        padding: '5px 10px',
        background: 'white',
        border: '1px solid #ccc'
      }}>
        <img
          src={url}
          style={{
            maxHeight: 300
          }}
        />
      </div>

      <button
        onClick={() => nextCard()}
      >
        Next!
      </button>
      <pre>
        { JSON.stringify(activeCard, null, 2) }
        { JSON.stringify(seenCards, null, 2) }
      </pre>
    </div>
  );
};

const defaultSettings = {

};

function App() {
  const [settings, updateSettings] = useState(defaultSettings);

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '100vh',
      overflow: 'scroll',
    }}>
      <div style={{
        width: 400
      }}>
        Bones bones bones
      </div>

      <div style={{
        display: 'flex',
        flexGrow: 1,
        background: '#eee',
        padding: 20,
        // display: 'flex',
        // textAlign: 'center'
        justifyContent: 'center',
      }}>
        <div style={{
          width: 600
        }}>
          <FlashcardSet />
        </div>
      </div>
    </div>
  )
}

export default App
