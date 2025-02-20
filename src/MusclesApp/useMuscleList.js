const muscleList = [
  {
    "muscle": "biceps brachii (short head)",
    "function": "Flex forearm (at elbow)",
    "region": "Arm and Forearm",
    "origin": "coracoid process (of scapula)",
    "insertion": "radial tuberosity"
  },
  {
    "muscle": "biceps brachii (long head)",
    "function": "Flex forearm (at elbow)",
    "region": "Arm and Forearm",
    "origin": "edge of glenoid cavity/fossa",
    "insertion": "radial tuberosity"
  },
  {
    "muscle": "brachialis",
    "function": "Flex forearm (at elbow)",
    "region": "Arm and Forearm",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "triceps brachii",
    "function": "Extend forearm (at elbow)",
    "region": "Arm and Forearm",
    "origin": "glenoid cavity (of scapula) and posterior shaft of humerus",
    "insertion": "olecranon process (of ulna)"
  },
  {
    "muscle": "brachioradialis",
    "function": "Flex forearm (at elbow)",
    "region": "Arm and Forearm",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "flexor carpi radialis",
    "function": "Flex wrist",
    "region": "Arm and Forearm",
    "origin": "medial epicondyle of humerus",
    "insertion": "2nd and 3rd metacarpals"
  },
  {
    "muscle": "flexor carpi ulnaris",
    "function": "Flex wrist",
    "region": "Arm and Forearm",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "flexor digitorum (superficialis)",
    "function": "Flex fingers 2-5 at knuckles",
    "region": "Arm and Forearm",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "flexor pollicis longus",
    "function": "Flex thumb (pollex)",
    "region": "Arm and Forearm",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "extensor carpi radialis (brevis)",
    "function": "Extend wrist",
    "region": "Arm and Forearm",
    "origin": "lateral epicondyle of humerus",
    "insertion": "3rd metacarpal"
  },
  {
    "muscle": "extensor carpi ulnaris",
    "function": "Extend wrist",
    "region": "Arm and Forearm",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "extensor digitorum",
    "function": "Extend fingers 2-5 at knuckles",
    "region": "Arm and Forearm",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "extensor pollicis longus",
    "function": "Extend thumb (pollex)",
    "region": "Arm and Forearm",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "external oblique",
    "function": "Flex vertebral column (both); lateral flexion (single)",
    "region": "Abdominal Region",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "internal oblique",
    "function": "Flex vertebral column (both); lateral flexion (single)",
    "region": "Abdominal Region",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "transversus abdominis",
    "function": "Compress abdominal contents",
    "region": "Abdominal Region",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "rectus abdominis",
    "function": "Flex (and rotate) vertebral column",
    "region": "Abdominal Region",
    "origin": "pubic symphysis and crest",
    "insertion": "xiphoid and cartilage of ribs"
  },
  {
    "muscle": "epicranius (Occipitofrontalis) (frontal belly)",
    "function": "Raise skin of eyebrows",
    "region": "Head, face, neck",
    "origin": "epicranial aponeurosis",
    "insertion": "skin of eyebrows"
  },
  {
    "muscle": "epicranius (Occipitofrontalis) (occipital belly)",
    "function": "Tense back of scalp/pull scalp posteriorly",
    "region": "Head, face, neck",
    "origin": "Occipital bone Insertion",
    "insertion": "epicranial aponeurosis"
  },
  {
    "muscle": "corrugator supercilii",
    "function": "Pulls eyebrows medially/inferiorly",
    "region": "Head, face, neck",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "orbicularis oculi",
    "function": "Close eye",
    "region": "Head, face, neck",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "orbicularis oris",
    "function": "Closes lips/purses lips",
    "region": "Head, face, neck",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "buccinator",
    "function": "Compress cheek",
    "region": "Head, face, neck",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "zygomaticus major",
    "function": "Raise lateral corner of lip laterally/smile",
    "region": "Head, face, neck",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "masseter",
    "function": "Elevate mandible, jaw closure",
    "region": "Head, face, neck",
    "origin": "zygomatic arch/bone",
    "insertion": "angle of mandible"
  },
  {
    "muscle": "temporalis",
    "function": "Elevate mandible, close jaw, retract jaw",
    "region": "Head, face, neck",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "digastric",
    "function": "Depress mandible, open mouth",
    "region": "Head, face, neck",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "sternocleidomastoid (both heads)",
    "function": "Flex neck (both); (single)-rotate head to opposite shoulder",
    "region": "Head, face, neck",
    "origin": "manubrium (of sternum, hence sterno-),  medial clavicle (hence -cleido",
    "insertion": "mastoid process (of temporal bone) and nuchal line of occipital bone"
  },
  {
    "muscle": "splenius capitis",
    "function": "Extend or hyperextend neck",
    "region": "Head, face, neck",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "platysma",
    "function": "Tense skin of neck",
    "region": "Head, face, neck",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "pectoralis major",
    "function": "Adducts and medially rotates arm (at shoulder), also flex",
    "region": "Thorax and Ribs",
    "origin": "sternal end of clavicle, sternum and ribs",
    "insertion": "greater tubercle of humerus and inertubercular sulcus (of humerus)"
  },
  {
    "muscle": "serratus anterior",
    "function": "Protracts scapula/shoulder; abduct shoulder (upward)",
    "region": "Thorax and Ribs",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "external intercostals",
    "function": "Single- elevate inferior rib toward superior rib; as a set elevate rib cage",
    "region": "Thorax and Ribs",
    "origin": "inferior border of rib above (bottom edge of rib above)",
    "insertion": "superior (top) border of rib below"
  },
  {
    "muscle": "internal intercostals",
    "function": "Single- depress superior rib toward inferior rib; as a set depress and compress rib cage",
    "region": "Thorax and Ribs",
    "origin": "superior border of rib below",
    "insertion": "Inferior border of rib above"
  },
  {
    "muscle": "diaphragm",
    "function": "Flattens to expand thorax- drives inspiration",
    "region": "Thorax and Ribs",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "erector spinae",
    "function": "Extend vertebral column",
    "region": "Back and Shoulder",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "trapezius",
    "function": "Retract scapula, elevate scapula, help extend neck",
    "region": "Back and Shoulder",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "rhomboid major",
    "function": "Retract scapula; stabilize scapula",
    "region": "Back and Shoulder",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "levator scapulae",
    "function": "Elevates and adducts scapula",
    "region": "Back and Shoulder",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "latissimus dorsi",
    "function": "Extend arm, adduct arm, medial rotation arm",
    "region": "Back and Shoulder",
    "origin": "spines of lower thoracic and all lumbar vertebrae AND iliac crest",
    "insertion": "intertubercular sulcus of humerus"
  },
  {
    "muscle": "deltoid",
    "function": "Abduct arm",
    "region": "Back and Shoulder",
    "origin": "acromion and spine of scapula, lateral (third of) clavicle",
    "insertion": "deltoid tuberosity of humerus"
  },
  {
    "muscle": "supraspinatus",
    "function": "Stabilize shoulder joint, abduct arm",
    "region": "Back and Shoulder",
    "origin": "supraspinous fossa (of scapula)",
    "insertion": "greater tubercle (superior part, of humerus)"
  },
  {
    "muscle": "infraspinatus",
    "function": "Rotate arm laterally, stabilize shoulder joint",
    "region": "Back and Shoulder",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "subscapularis",
    "function": "Medially rotate arm, stabilize shoulder joint",
    "region": "Back and Shoulder",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "teres major",
    "function": "Extend arm, adduct arm, medially rotate arm",
    "region": "Back and Shoulder",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "psoas major",
    "function": "Flex thigh at hip or flex vertebral column at hip",
    "region": "Hip and thigh",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "iliacus",
    "function": "Flex thigh at hip or flex vertebral column at hip",
    "region": "Hip and thigh",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "gluteus maximus",
    "function": "Extend thigh at hip",
    "region": "Hip and thigh",
    "origin": "lium (dorsal), sacrum",
    "insertion": "gluteal tuberosity (of femur) and IT tract (or band)"
  },
  {
    "muscle": "gluteus medius",
    "function": "Abduct thigh at hip, medially rotate thigh",
    "region": "Hip and thigh",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "Sartorius",
    "function": "Flex, abducts and laterally rotate thigh; flex knee",
    "region": "Thigh",
    "origin": "ASIS, anterior superior iliac spine.",
    "insertion": "medial/proximal tibia."
  },
  {
    "muscle": "quadriceps femoris (rectus femoris)",
    "function": "Extend leg at knee; flex thigh at hip",
    "region": "Thigh",
    "origin": "AIIS, anterior inferior iliac spine.",
    "insertion": "tibial tuberosity!"
  },
  {
    "muscle": "quadriceps femoris (vastus lateralis)",
    "function": "Extend leg at knee",
    "region": "Thigh",
    "origin": "greater trochanter (of femur) and linea aspera (posterior femur!)",
    "insertion": "tibial tuberosity"
  },
  {
    "muscle": "quadriceps femoris (vastus medialis)",
    "function": "Extend leg at knee",
    "region": "Thigh",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "quadriceps femoris (vastus intermedius)",
    "function": "Extend leg at knee",
    "region": "Thigh",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "gracilis",
    "function": "Adducts thigh at hip",
    "region": "Thigh",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "adductor longus",
    "function": "Adducts thigh at hip",
    "region": "Thigh",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "Hamstrings (biceps femoris)",
    "function": "Extend thigh at hip; flex leg at knee",
    "region": "Thigh",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "Hamstrings (semitendinosus)",
    "function": "Extend thigh at hip; flex leg at knee",
    "region": "Thigh",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "Hamstrings (semimembranosus)",
    "function": "Extend thigh at hip; flex leg at knee",
    "region": "Thigh",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "tibialis anterior",
    "function": "Dorsiflexion of foot at ankle inversion of ankle",
    "region": "Lower Leg",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "fibularis (peroneus) longus",
    "function": "Plantarflexion of foot at ankle; eversion of ankle",
    "region": "Lower Leg",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "gastrocnemius",
    "function": "Plantarflexion of foot at ankle",
    "region": "Lower Leg",
    "origin": "medial and lateral condyles of femur",
    "insertion": "calcaneous"
  },
  {
    "muscle": "soleus",
    "function": "Plantarflexion of foot at ankle",
    "region": "Lower Leg",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "flexor digitorum longus",
    "function": "Flex toes; also plantar flex foot*",
    "region": "Lower Leg",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "flexor hallucis longus",
    "function": "Flex big toe (hallux)",
    "region": "Lower Leg",
    "origin": "posterior fibula (mid shaft)",
    "insertion": "distal phalanx of hallux"
  },
  {
    "muscle": "extensor digitorum longus",
    "function": "Extend toes; also dorsiflex foot*",
    "region": "Lower Leg",
    "origin": "",
    "insertion": ""
  },
  {
    "muscle": "extensor hallucis longus",
    "function": "Extend big toe (hallux)",
    "region": "Lower Leg",
    "origin": "",
    "insertion": ""
  }
];

import { useState, useEffect } from 'react';


export const pickFromMuscleList = (_muscleList, activeCard) => {
  const options = _muscleList.filter(d => activeCard?.muscle !== d.muscle);

  if (!options.length) return null;

  const index = Math.floor(Math.random() * options.length);

  return options[index];
};

export const useMuscleList = () => {
  const [filteredMuscleList, setFilteredMuscleList] = useState(muscleList);
  const [filters, setFilters] = useState(
    muscleList.map(b => b.region).filter((value, index, array) => array.indexOf(value) === index)
  );
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [seenCards, setSeenCards] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setActiveCard(pickFromMuscleList(filteredMuscleList, activeCard));
  }, []);

  useEffect(() => {
    const _filteredMuscleList = muscleList
      .filter(d => !seenCards.includes(d.muscle))
      .filter(d => !(selectedFilters.length && !selectedFilters.includes(d.region)));
    setFilteredMuscleList(_filteredMuscleList);
  }, [seenCards]);

  // useEffect(() => {
  //   setFilteredMuscleList(processMuscleList(muscleList));
  // }, [muscleList]);

  useEffect(() => {
    if (!filteredMuscleList.length) return;

    let _muscleList = muscleList
      .filter(d => !(selectedFilters.length && !selectedFilters.includes(d.region)))
      .filter(d => !seenCards.includes(d.muscle));

    setFilteredMuscleList(_muscleList);

    setActiveCard(pickFromMuscleList(_muscleList, activeCard));

    // let _muscleList = [...muscleList]
    //   .filter(b => !(selectedFilters.length && !selectedFilters.includes(b[1])))
    //   .filter(b => !seenCards.includes(getBoneId(b)));

    // const _filteredMuscleList = processMuscleList(_muscleList);
    // setFilteredMuscleList(_filteredMuscleList);

    // setActiveCard(pickFromMuscleList(_filteredMuscleList, activeCard));

  }, [selectedFilters])

  // useEffect(() => {
  //   let _muscleList = [...muscleList]
  //     .filter(b => !(selectedFilters.length && !selectedFilters.includes(b[1])))
  //     .filter(b => !seenCards.includes(getBoneId(b)));
      
  //   const _filteredMuscleList = processMuscleList(_muscleList);
  //   setFilteredMuscleList(_filteredMuscleList);

  //   // in case of reset
  //   if (!seenCards.length && !activeCard) {
  //     const nextCard = pickFromMuscleList(_filteredMuscleList, null);
  //     if (nextCard) (setActiveCard(nextCard));
  //   }

  // }, [seenCards])

  console.log(selectedFilters)
  console.log(filteredMuscleList)

  return {
    muscleList: filteredMuscleList,
    filters,
    selectedFilters,
    setSelectedFilters,
    seenCards,
    pickFromMuscleList: (activeCard) => pickFromMuscleList(filteredMuscleList, activeCard),
    clearCards: () => {
      setSeenCards([]);
      setActiveCard(pickFromMuscleList(filteredMuscleList, null));
    },
    activeCard,
    nextRight: () => {
      setSeenCards([...seenCards, activeCard.muscle]);
      setActiveCard(pickFromMuscleList(filteredMuscleList, activeCard));
    },
    nextWrong: () => {
      setActiveCard(pickFromMuscleList(filteredMuscleList, activeCard));
    },
  };
};

