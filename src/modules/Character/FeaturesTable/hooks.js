import { useState } from 'react';

const useFeatureValue = ({
  currentHealthInitialValue,
  currentManaInitialValue,
  moneyInitialValue,
  experienceInitialValue,
},) => {
  const [currentHealthValue, setCurrentHealthValue] = useState(currentHealthInitialValue);
  const [currentManaValue, setCurrentManaValue] = useState(currentManaInitialValue);
  const [moneyValue, setMoneyValue] = useState(moneyInitialValue);
  const [experienceValue, setExperienceValue] = useState(experienceInitialValue);

  return [
    {
      currentHealthValue,
      currentManaValue,
      moneyValue,
      experienceValue,
    },
    {
      currentHealth: setCurrentHealthValue,
      currentMana: setCurrentManaValue,
      money: setMoneyValue,
      experience: setExperienceValue,
    },
  ];
};

export default useFeatureValue;
