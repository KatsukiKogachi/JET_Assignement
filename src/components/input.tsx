import React, { ChangeEvent } from 'react';
import { Input, InputRightElement, InputGroup } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const InputComponent = ({ inputValue, getApi, handleChange }: { inputValue: string, getApi: () => void, handleChange: (event: ChangeEvent<HTMLInputElement>) => void}) => (
    <InputGroup margin='40px auto 40px auto' width='80%'>
        <InputRightElement marginLeft='auto' marginRight='auto' onClick={getApi}>
            <SearchIcon color='orange' />
        </InputRightElement>
        <Input type='int' value={inputValue} placeholder='Postcode' _placeholder={{ color: 'orange' }} onChange={handleChange} onKeyDown={getApi} />
    </InputGroup>
)

export default InputComponent;