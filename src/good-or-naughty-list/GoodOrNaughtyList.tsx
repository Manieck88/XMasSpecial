// import "./styles.css";
import React, { memo } from "react";
import { useInputValue, usePersonsHook } from "./custom-hooks";
import Layout from "./components/Layout";
import AddPerson from "./components/AddPerson";
import Person from "./components/Person";
import { List } from "@material-ui/core";

const GoodOrNaughtyList = memo(() => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { persons, addPerson, setGiftsList, verifyIfWasGood } =
    usePersonsHook();
  const clearInputAndAddTodo = () => {
    clearInput();
    addPerson(inputValue);
  };

  return (
    <Layout>
      <AddPerson
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={(event) => keyInput(event, clearInputAndAddTodo)}
      />
      <List data-testid="persons-list">
        {persons.map((person, index) => (
          <Person
            person={person}
            saveGifts={(gifts: string) => setGiftsList(index, gifts)}
            verifyPerson={() => verifyIfWasGood(index)}
            key="name"
          />
        ))}
      </List>
    </Layout>
  );
});

export default GoodOrNaughtyList;
