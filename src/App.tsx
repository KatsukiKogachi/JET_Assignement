import React, { ChangeEvent, useState } from 'react';
import './App.css';
import InputComponent from './components/input';
import CardComponent from './components/card';
import { Text, Image } from '@chakra-ui/react';
import axios from 'axios';

function App() {
  const [restaurants, setRestaurants] = useState<any>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event?.target?.value)
  }

  const getApi = () => {
    if (inputValue) {
      axios.get(`/api/restaurants/${inputValue}`).then((response) => {
        setRestaurants(response.data?.restaurants ?? []);
      });
    }
  };

  return (
    <div className="App" >
      <Text fontFamily='TakeawaySans-Bold' />
      <div className='logo-wrapper'>
        <Image margin='0 auto 20px auto' minW='200px' w='30%' alt='Company Logo' src='https://cdn.phenompeople.com/CareerConnectResources/TAKEGLOBAL/images/v-1628605777422-newlogo-1629957935245.svg' />
      </div>

      <InputComponent inputValue={inputValue} getApi={getApi} handleChange={handleChange}></InputComponent>

      <CardComponent restaurants={restaurants}></CardComponent>
    </div>
  );
}

export default App;
