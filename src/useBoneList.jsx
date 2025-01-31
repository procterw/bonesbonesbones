import { useState, useEffect } from 'react';
import { getBoneList } from './getBoneList';

export const processBoneList = (boneList) => {
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

export const useBoneList = () => {
  const [boneList, setBoneList] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    const _boneList = getBoneList();
    setBoneList(_boneList);
    const _filters = _boneList.map(b => b[1]).filter((value, index, array) => array.indexOf(value) === index);
    setFilters(_filters);
    setSelectedFilters(_filters);
  }, []);

  return {
    boneList: processBoneList(boneList.filter(b => selectedFilters.includes(b[1]))),
    filters,
    selectedFilters,
    setSelectedFilters,
  };
};
