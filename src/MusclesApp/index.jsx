import { useMuscleList } from './useMuscleList';
import { FlashcardSet } from './FlashcardSet';
// import { useBoneList } from './useBoneList';

function MusclesApp() {
  const ml = useMuscleList();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      minHeight: '100vh',
      overflow: 'scroll',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
        <FlashcardSet {...ml} />

        <ul style={{
          listStyle: 'none',
          textAlign: 'left',
          width: '100%',
          maxWidth: 600,
          margin: '10px 0',
          padding: 0,
        }}>
          { ml.filters.map((f) => (
            <li>
              <label style={{
                fontSize: 18,
              }}>
                <input
                  type="checkbox"
                  checked={ml.selectedFilters.includes(f)}
                  style={{
                    marginRight: 10,
                  }}
                  onClick={() => {
                    if (ml.selectedFilters.includes(f)) {
                      ml.setSelectedFilters(ml.selectedFilters.filter(_f => f !== _f));
                    } else {
                      ml.setSelectedFilters([...ml.selectedFilters, f]);
                    }
                  }}
                />
                { f }
              </label>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default MusclesApp;
