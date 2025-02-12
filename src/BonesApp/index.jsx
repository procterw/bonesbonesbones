import { FlashcardSet } from './FlashcardSet';
import { useBoneList } from './useBoneList';

function BonesApp() {
  const bl = useBoneList();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      minHeight: '100vh',
      overflow: 'scroll',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
        <FlashcardSet {...bl} />

        <ul style={{
          listStyle: 'none',
          textAlign: 'left',
          width: '100%',
          maxWidth: 600,
          margin: '10px 0',
          padding: 0,
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
    </div>
  )
}

export default BonesApp
