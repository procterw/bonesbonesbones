
export const DefinitionCard = ({ activeCard }) => {
  return (
    <ul style={{
      listStyle: 'none',
      margin: '0',
      padding: '0',
      fontStyle: 'italic',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
    }}
    >
      <li style={{  }}>
        {activeCard.skeleton} {` skeleton > `} {activeCard.region} {` > `} {activeCard.subRegion}
      </li>
      <li style={{ fontSize: 24, fontStyle: 'normal', fontWeight: 400 }}>
        {activeCard.name}
      </li>
    </ul>
  );
};
