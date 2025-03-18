const neuroList = [
  {
    "name": "interneurons",
    "category": "neurons",
    "definition": "between sensory and motor pathways; mostly in CNS; 99% of neurons"
  },
  {
    "name": "afferent",
    "category": "neurons",
    "definition": "sensory neurons; mostly unipolar;"
  },
  {
    "name": "efferent",
    "category": "neurons",
    "definition": "motor neurons; carry impulses away from CNS to effector organs; multipolar"
  },
  {
    "name": "unipolar",
    "category": "neurons",
    "definition": "peripheral process (sensory receptor), left; central process (enters CNS), right"
  },
  {
    "name": "multipolar",
    "category": "neurons",
    "definition": "one axon, 2+ dendrites; 99% of neurons"
  },
  {
    "name": "Schwann cell",
    "category": "glia",
    "definition": "in PNS; form myelin sheathes"
  },
  {
    "name": "microglia",
    "category": "glia",
    "definition": "in CNS; protect neurons; transform into macrophages"
  },
  {
    "name": "astrocytes",
    "category": "glia",
    "definition": "in CNS; most abundant glial cell; support and brace neurons; anchor nutrient supply lines; manage chemical environment around neurons; mop up potassium and neurotransmitter"
  },
  {
    "name": "ependymal cells",
    "category": "glia",
    "definition": "in CNS; cilia move CSF around brain and spinal cord"
  },
  {
    "name": "oligodendrocytes",
    "category": "glia",
    "definition": "in CNS; wrap processes around axons to create myelin sheathes"
  },
  {
    "name": "satellite cells",
    "category": "glia",
    "definition": "in PNS: similar to astrocyte, structural support"
  },
  {
    "name": "cell body (soma)",
    "category": "neuronal structures",
    "definition": "major biosynthetic center and metabolic center of a neuron; mostly in CNS; clusters in CNS = nuclei, in PNS = ganglia"
  },
  {
    "name": "dendrites",
    "category": "neuronal structures",
    "definition": "convey incoming messages toward the cell body; dendritic spines collect information, form synapses"
  },
  {
    "name": "axon hillock",
    "category": "neuronal structures",
    "definition": "last site where membrane potentials propagated from synaptic inputs are summated before being transmitted to the axon"
  },
  {
    "name": "axon",
    "category": "neuronal structures",
    "definition": "long process where action potential travels; long axon = 'nerve fiber'; bundle in CNS = 'tract', in PNS = 'nerve'"
  },
  {
    "name": "axon collateral",
    "category": "neuronal structures",
    "definition": "branches in axon"
  },
  {
    "name": "synaptic terminal (or axon terminal)",
    "category": "neuronal structures",
    "definition": "branching end of axos where neurotransmitter is released"
  },
  {
    "name": "myelin sheath",
    "category": "neuronal structures",
    "definition": "protects and insulates axon; greatly increases speed of action potential"
  },
  {
    "name": "nodes of Ranvier",
    "category": "neuronal structures",
    "definition": "gap between myelin sheathes"
  },
  {
    "name": "synaptic cleft",
    "category": "neuronal structures",
    "definition": "space between presynaptic and postsynaptic neurorn where neurotransmitters diffuse and attach to receptors"
  },
  {
    "name": "presynaptic neuron",
    "category": "neuronal structures",
    "definition": ""
  },
  {
    "name": "postsynaptic neuron",
    "category": "neuronal structures",
    "definition": ""
  },
  {
    "name": "synaptic vesicles",
    "category": "neuronal structures",
    "definition": "bundle of neurotransmitter which fuses with membrane to release neurotransmitter"
  },
  {
    "name": "cerebral hemispheres",
    "category": "brain (external structures)",
    "definition": "left and right halves of cerebrum"
  },
  {
    "name": "cerebral cortex",
    "category": "brain (external structures)",
    "definition": "outer layer of grey matter; responsible for cognition: attention, perception, awareness, thought, memory, language, and consciousness"
  },
  {
    "name": "cerebrum",
    "category": "brain (external structures)",
    "definition": "largest part of the brain"
  },
  {
    "name": "midbrain",
    "category": "brain (external structures)",
    "definition": "functionally associated with vision, hearing, motor control, sleep and wakefulness, arousal (alertness), and temperature regulation"
  },
  {
    "name": "cerebellum",
    "category": "brain (external structures)",
    "definition": "plays an important role in motor control and cognitive functions such as attention and language as well as emotional control such as regulating fear and pleasure responses, but its movement-related functions are the most solidly established"
  },
  {
    "name": "pons",
    "category": "brain (external structures)",
    "definition": "mainly a conductive area; cranial nerves V-VII"
  },
  {
    "name": "medulla oblongata",
    "category": "brain (external structures)",
    "definition": "responsible for the autonomic functions of breathing, heart rate and blood pressure as well as the sleep–wake cycle; vomiting"
  },
  {
    "name": "central sulcus",
    "category": "brain (external structures)",
    "definition": "separates parietal and frontal lobes"
  },
  {
    "name": "precentral gyrus",
    "category": "brain (external structures)",
    "definition": "site of primary motor cortex"
  },
  {
    "name": "postcentral gyrus",
    "category": "brain (external structures)",
    "definition": "location of the primary somatosensory cortex, the main sensory receptive area for the sense of touch"
  },
  {
    "name": "lateral sulcus",
    "category": "brain (external structures)",
    "definition": "separates frontal and parietal lobes from temporal lobe"
  },
  {
    "name": "longitudinal fissure",
    "category": "brain (external structures)",
    "definition": "deep groove; separates left and right hemispheres; dura mater inside is called falx cerebri"
  },
  {
    "name": "frontal lobe",
    "category": "brain (external structures)",
    "definition": "contains primary motor cortext; manages reward, attention, short-term memory tasks, planning, and motivation"
  },
  {
    "name": "parietal lobe",
    "category": "brain (external structures)",
    "definition": "integrates sensory information; primary somatosensory cortex; language processing"
  },
  {
    "name": "occipital lobe",
    "category": "brain (external structures)",
    "definition": "visual processing"
  },
  {
    "name": "temporal lobe",
    "category": "brain (external structures)",
    "definition": "processes sensory input into meaning; contains hippocampus;"
  },
  {
    "name": "insula",
    "category": "brain (external structures)",
    "definition": "involves in conciousness; hunger, pain, fatigue;"
  },
  {
    "name": "primary motor cortex",
    "category": "brain (external structures)",
    "definition": "controls precise, skilled voluntary movement of skeletal muscle"
  },
  {
    "name": "primary sensory (somatosensory) cortex",
    "category": "brain (external structures)",
    "definition": "receive information skin and proprioceptors in skeletal muscle, joints, tendons"
  },
  {
    "name": "primary visual cortex",
    "category": "brain (external structures)",
    "definition": "processes visual information"
  },
  {
    "name": "primary auditory cortex",
    "category": "brain (external structures)",
    "definition": "processes auditory information, hearing"
  },
  {
    "name": "association cortices (in general)",
    "category": "brain (external structures)",
    "definition": "integrates information from various sources to support higher-order cognitive processes"
  },
  {
    "name": "corpus callosum",
    "category": "brain (internal stuctures)",
    "definition": "wide, thick nerve track connecting left and right hemispheres; contains commisural fibers"
  },
  {
    "name": "basal nuclei",
    "category": "brain (internal stuctures)",
    "definition": "regulates voluntary motor movements, procedural learning, habit formation, conditional learning, eye movements, cognition, and emotion"
  },
  {
    "name": "thalamus",
    "category": "brain (internal stuctures)",
    "definition": "sorts and edits information from sensory input; 'gateway' to cerebral cortex"
  },
  {
    "name": "hypothalamus",
    "category": "brain (internal stuctures)",
    "definition": "Master Autonomic controller (flip-switcher); Emotions, physical response to emotions; Body temperature regulation; Food intake (drives); Water balance/thirst; Sleep/wake cycles; Endocrine functions: Makes ADH and oxytocin, and controls the pituitary gland"
  },
  {
    "name": "pituitary gland",
    "category": "brain (internal stuctures)",
    "definition": "secretes hormones related to growth, stress, reproduction, metabolism etc"
  },
  {
    "name": "pineal gland",
    "category": "brain (internal stuctures)",
    "definition": "produces melatonin, which modulates sleep patterns"
  },
  {
    "name": "optic chiasm",
    "category": "brain (internal stuctures)",
    "definition": "location where optic nerves cross"
  },
  {
    "name": "lateral ventricles",
    "category": "brain (internal stuctures)",
    "definition": "circulates CSF; contains choroid plexus, which produces CSF;"
  },
  {
    "name": "third ventricle",
    "category": "brain (internal stuctures)",
    "definition": "circulates CSF; contains choroid plexus, which produces CSF;"
  },
  {
    "name": "fourth ventricle",
    "category": "brain (internal stuctures)",
    "definition": "circulates CSF; contains choroid plexus, which produces CSF;"
  },
  {
    "name": "cerebral aqueduct",
    "category": "brain (internal stuctures)",
    "definition": "canal connecting third and fourth ventricles"
  },
  {
    "name": "association",
    "category": "brain (fibers)",
    "definition": "nerve fibers) that connect cortical areas within the same cerebral hemisphere"
  },
  {
    "name": "projection",
    "category": "brain (fibers)",
    "definition": "consist of efferent and afferent fibers uniting the cortex with the lower parts of the brain and with the spinal cord"
  },
  {
    "name": "commissural",
    "category": "brain (fibers)",
    "definition": "axons that connect the two hemispheres of the brain; largest tract is the corpus callosum"
  },
  {
    "name": "gray matter",
    "category": "spinal cord structures",
    "definition": "distinguished from white matter in that it contains numerous cell bodies and relatively few myelinated axons"
  },
  {
    "name": "white matter",
    "category": "spinal cord structures",
    "definition": "areas of the central nervous system that are mainly made up of myelinated axons, also called tracts"
  },
  {
    "name": "ventral root",
    "category": "spinal cord structures",
    "definition": "the efferent motor root of a spinal nerve"
  },
  {
    "name": "ventral (anterior) horn",
    "category": "spinal cord structures",
    "definition": "contains motor neurons"
  },
  {
    "name": "dorsal root",
    "category": "spinal cord structures",
    "definition": "transmits sensory information, forming the afferent sensory root of a spinal nerve"
  },
  {
    "name": "dorsal (posterior) horn",
    "category": "spinal cord structures",
    "definition": "process and integrate sensory information from the peripheral nervous system"
  },
  {
    "name": "spinal nerves",
    "category": "spinal cord structures",
    "definition": "a mixed nerve, which carries motor, sensory, and autonomic signals between the spinal cord and the body"
  },
  {
    "name": "central canal",
    "category": "spinal cord structures",
    "definition": "transport nutrients to the spinal cord as well as protect it by cushioning impact; filled with CSF"
  },
  {
    "name": "Cranial nerve I",
    "category": "cranial nerves",
    "definition": "Olfactory (smell)"
  },
  {
    "name": "Cranial nerve II",
    "category": "cranial nerves",
    "definition": "Optic (vision)"
  },
  {
    "name": "Cranial nerve III",
    "category": "cranial nerves",
    "definition": "Oculomotor (eye movement)"
  },
  {
    "name": "Cranial nerve IV",
    "category": "cranial nerves",
    "definition": "Trochlear (eye movement)"
  },
  {
    "name": "Cranial nerve V",
    "category": "cranial nerves",
    "definition": "Trigeminal (general sensation)"
  },
  {
    "name": "Cranial nerve VI",
    "category": "cranial nerves",
    "definition": "Abducens (eye movement)"
  },
  {
    "name": "Cranial nerve VII",
    "category": "cranial nerves",
    "definition": "Facial (taste, facial movement)"
  },
  {
    "name": "Cranial nerve VIII",
    "category": "cranial nerves",
    "definition": "Vestibulocochlear (hearing, balance)"
  },
  {
    "name": "Cranial nerve IX",
    "category": "cranial nerves",
    "definition": "Glossopharyngeal (taste)"
  },
  {
    "name": "Cranial nerve X",
    "category": "cranial nerves",
    "definition": "Vagus (taste)"
  },
  {
    "name": "Cranial nerve XI",
    "category": "cranial nerves",
    "definition": "Acessory (head and shoulder movement)"
  },
  {
    "name": "Cranial nerve XII",
    "category": "cranial nerves",
    "definition": "Hypoglossal (tongue movement)"
  },
  {
    "name": "dura mater",
    "category": "meninges",
    "definition": "strongest outer layer; dense irregular connective tissue; brain has two layers, spinal cord one"
  },
  {
    "name": "arachnoid mater",
    "category": "meninges",
    "definition": "separates dura mater and subarachnoid space"
  },
  {
    "name": "pia mater",
    "category": "meninges",
    "definition": "delicate, thinest layer of connective tissue; contains tiny blood vessels"
  },
  {
    "name": "subarachnoid space",
    "category": "meninges",
    "definition": "filled with CSF and large blood vessels"
  }
];

import { useState, useEffect } from 'react';


export const pickFromNeuroList = (_neuroList, activeCard) => {
  const options = _neuroList.filter(d => activeCard?.name !== d.name);

  if (!options.length) return null;

  const index = Math.floor(Math.random() * options.length);

  return options[index];
};

export const useNeuroList = () => {
  const [filteredNeuroList, setFilteredNeuroList] = useState(neuroList);
  const [filters, setFilters] = useState(
    neuroList.map(b => b.category).filter((value, index, array) => array.indexOf(value) === index)
  );
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [seenCards, setSeenCards] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setActiveCard(pickFromNeuroList(filteredNeuroList, activeCard));
  }, []);

  useEffect(() => {
    const _filteredNeuroList = neuroList
      .filter(d => !seenCards.includes(d.name))
      .filter(d => !(selectedFilters.length && !selectedFilters.includes(d.category)));
    setFilteredNeuroList(_filteredNeuroList);
  }, [seenCards]);

  // useEffect(() => {
  //   setFilteredNeuroList(processNeuroList(neuroList));
  // }, [neuroList]);

  useEffect(() => {
    if (!filteredNeuroList.length) return;

    let _neuroList = neuroList
      .filter(d => !(selectedFilters.length && !selectedFilters.includes(d.category)))
      .filter(d => !seenCards.includes(d.name));

    setFilteredNeuroList(_neuroList);

    setActiveCard(pickFromNeuroList(_neuroList, activeCard));

  }, [selectedFilters])

  return {
    neuroList: filteredNeuroList,
    filters,
    selectedFilters,
    setSelectedFilters,
    seenCards,
    pickFromNeuroList: (activeCard) => pickFromNeuroList(filteredNeuroList, activeCard),
    clearCards: () => {
      setSeenCards([]);
      setActiveCard(pickFromNeuroList(filteredNeuroList, null));
    },
    activeCard,
    nextRight: () => {
      setSeenCards([...seenCards, activeCard.name]);
      setActiveCard(pickFromNeuroList(filteredNeuroList, activeCard));
    },
    nextWrong: () => {
      setActiveCard(pickFromNeuroList(filteredNeuroList, activeCard));
    },
  };
};

