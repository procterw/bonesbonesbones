
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
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      // gap: 18,
      fontSize: 13,
    }}
    >
      {/* <li style={{  }}> */}
        {/* {activeCard.region} {` > `} {activeCard.subRegion} */}
      {/* </li> */}
      <li style={{ fontSize: 15, fontStyle: 'normal', fontWeight: 400 }}>
        <b style={{ fontSize: 18 }}>
          {activeCard.muscle}
        </b>
      </li>
      { activeCard.origin && (
        <li>
          <b>{`Insertion: `}</b> {activeCard.origin} <b>{` > Origin: `}</b> { activeCard.insertion}
        </li>
      )}
    </ul>
  );
};

export const FunctionCard = ({ activeCard }) => {
  return (
    <ul style={{
      listStyle: 'none',
      margin: '0',
      padding: '0',
      fontStyle: 'italic',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      // gap: 18,
      // fontSize: 16,
    }}
    >
      {/* <li style={{  }}> */}
        {/* {activeCard.region} {` > `} {activeCard.subRegion} */}
      {/* </li> */}
      <li style={{ fontSize: 15, fontStyle: 'normal', fontWeight: 400 }}>
        {activeCard.function}
      </li>
    </ul>
  );
};
