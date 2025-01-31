import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { FlashcardSet } from './FlashcardSet';
import { useBoneList } from './useBoneList';

const defaultSettings = {

};

function App() {
  const [settings, updateSettings] = useState(defaultSettings);
  const { boneList, filters, selectedFilters, setSelectedFilters } = useBoneList();

  console.log(boneList);

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      minHeight: '100vh',
      overflow: 'scroll',
      // justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      // alignItems: 'center',
    }}>
      {/* <div style={{
        width: 400
      }}>
        Bones bones bones
      </div> */}

      {/* <div style={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        width: '100%',
        maxWidth: 600,
        height: '100vh',
        minHeight: 600,
      }}> */}
        <FlashcardSet boneList={boneList} />

        <ul style={{
          listStyle: 'none',
          textAlign: 'left',
          width: '100%',
          maxWidth: 600,
          margin: 0,
          padding: 0,
          // width: '100%',
        }}>
          { filters.map((f) => (
            <li>
              <label style={{}}>
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(f)}
                  style={{
                    marginRight: 10,
                  }}
                  onClick={() => {
                    if (selectedFilters.includes(f)) {
                      setSelectedFilters(selectedFilters.filter(_f => f !== _f));
                    } else {
                      setSelectedFilters([...selectedFilters, f]);
                    }
                  }}
                />

                { f }
              </label>
            </li>
          ))}
        </ul>
      {/* </div> */}
    </div>
  )
}

export default App
