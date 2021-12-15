import { useState } from "react";

export const usePersonsHook = (
  initialValue: { name: string; isGood?: boolean; giftsList?: string }[] = []
) => {
  const [persons, setPersons] = useState(initialValue);
  return {
    persons,
    addPerson: (name: string) => {
      if (name !== "") {
        setPersons(
          persons.concat({
            name,
          })
        );
      }
    },
    verifyIfWasGood: (idx: number) => {
      setPersons(
        persons.map((person, index) => {
          if (idx === index) {
            person.isGood = Math.random() * 10 > 4;
          }
          return person;
        })
      );
    },
    setGiftsList: (idx: number, giftsList: string) => {
      setPersons(
        persons.map((person, index) => {
          if (idx !== index && person.isGood) {
            person.giftsList = giftsList;
          }
          return person;
        })
      );
    },
  };
};
