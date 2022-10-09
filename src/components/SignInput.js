import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 60px;  
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;

    
  
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #ccc;
    margin-left: 10px;
   padding-bottom: 10px;
    
    outline: 0;  
    border-bottom: 1px;
    border-color: white; 
    border-bottom-width: 1px;
   
`;

export default ({ IconSvg, placeholder, value, onChangeText, password }) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#ccc" />
            <Input
                placeholder={placeholder}
                placeholderTextColor="#ccc"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}