import { useState, useEffect, act } from 'react';
import { getBoneList } from './getBoneList';

const getBoneId = b => `${b[0]}_${b[1]}_${b[2]}_${b[3]}`;

export const processBoneList = (boneList) => {
  const processedBoneList = {};

  boneList.forEach((b) => {
    const id = getBoneId(b);

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

export const pickFromBoneList = (boneList, activeCard) => {
  const options = Object.values(boneList).filter(b => activeCard?.id !== b.id);

  if (!options.length) return null;

  const index = Math.floor(Math.random() * options.length);

  return options[index];
};

export const useBoneList = () => {
  const [boneList, setBoneList] = useState([]);
  const [filteredBoneList, setFilteredBoneList] = useState({});
  const [filters, setFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [seenCards, setSeenCards] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const _boneList = getBoneList();
    setBoneList(_boneList);
    const _filters = _boneList.map(b => b[1]).filter((value, index, array) => array.indexOf(value) === index);
    setFilters(_filters);

    setActiveCard(pickFromBoneList(processBoneList(_boneList)), activeCard);
    // setSelectedFilters(_filters);
  }, []);

  useEffect(() => {
    setFilteredBoneList(processBoneList(boneList));
  }, [boneList]);

  useEffect(() => {
    if (!Object.keys(filteredBoneList).length) return;
    let _boneList = [...boneList]
      .filter(b => !(selectedFilters.length && !selectedFilters.includes(b[1])))
      .filter(b => !seenCards.includes(getBoneId(b)));

    const _filteredBoneList = processBoneList(_boneList);
    setFilteredBoneList(_filteredBoneList);

    setActiveCard(pickFromBoneList(_filteredBoneList, activeCard));

  }, [selectedFilters])

  useEffect(() => {
    let _boneList = [...boneList]
      .filter(b => !(selectedFilters.length && !selectedFilters.includes(b[1])))
      .filter(b => !seenCards.includes(getBoneId(b)));
      
    const _filteredBoneList = processBoneList(_boneList);
    setFilteredBoneList(_filteredBoneList);

    // in case of reset
    if (!seenCards.length && !activeCard) {
      const nextCard = pickFromBoneList(_filteredBoneList, null);
      if (nextCard) (setActiveCard(nextCard));
    }

  }, [seenCards])

  return {
    boneList: filteredBoneList,
    filters,
    selectedFilters,
    setSelectedFilters,
    seenCards,
    pickFromBoneList: (activeCard) => pickFromBoneList(filteredBoneList, activeCard),
    clearCards: () => {
      setSeenCards([]);
      setActiveCard(pickFromBoneList(filteredBoneList, null));
    },
    activeCard,
    nextRight: () => {
      setSeenCards([...seenCards, activeCard.id]);
      console.log(pickFromBoneList(filteredBoneList, activeCard));
      setActiveCard(pickFromBoneList(filteredBoneList, activeCard));
    },
    nextWrong: () => {
      setActiveCard(pickFromBoneList(filteredBoneList, activeCard));
    },
  };
};
