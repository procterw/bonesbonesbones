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
  const bl = useBoneList();

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
        <FlashcardSet {...bl} />

        <ul style={{
          listStyle: 'none',
          textAlign: 'left',
          width: '100%',
          maxWidth: 600,
          margin: '10px 0',
          padding: 0,
          // width: '100%',
        }}>
          { bl.filters.map((f) => (
            <li>
              <label style={{
                fontSize: 18,
              }}>
                <input
                  type="checkbox"
                  checked={bl.selectedFilters.includes(f)}
                  style={{
                    marginRight: 10,
                  }}
                  onClick={() => {
                    if (bl.selectedFilters.includes(f)) {
                      bl.setSelectedFilters(bl.selectedFilters.filter(_f => f !== _f));
                    } else {
                      bl.setSelectedFilters([...bl.selectedFilters, f]);
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
