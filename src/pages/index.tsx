import styles from '@/styles/Home.module.css'
import React, { useState } from 'react';
import InputField from '../pages/components/InputField';
import ButtonField from '../pages/components/ButtonField';


const IndexPage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [charCount, setCharCount] = useState<number>(0);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleButtonClick = () => {
    setCharCount(inputValue.length);
  };

  return (
    <div className={styles.container}>
      <br/>
      <div className={styles.inputContainer}>
      <p className={styles.charCount}>Character count: {charCount}</p>
        <InputField onChange={handleInputChange} value={inputValue} /> <br/><br/>
        <ButtonField onClick={handleButtonClick} /> 
      </div> 
      <div>
      <img
        src="https://thumbs.gfycat.com/NeglectedWideBuckeyebutterfly-max-1mb.gif"
        alt="CAT"
        width={200}
        height={100}
      />
       <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3cef56a-c034-4e20-abbd-989cf25e5db7/dc1ofwq-448b3af6-23dd-4375-99c0-d1da602590af.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IzY2VmNTZhLWMwMzQtNGUyMC1hYmJkLTk4OWNmMjVlNWRiN1wvZGMxb2Z3cS00NDhiM2FmNi0yM2RkLTQzNzUtOTljMC1kMWRhNjAyNTkwYWYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JUsLh0v4p7IRxXE0phKzsqRg4jugYcZKZx7HcSlmb6Q"
        alt="CAT"
        width={300}
        height={150}
      />
      </div>
     
    </div> 
  );
};

export default IndexPage;