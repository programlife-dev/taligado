import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #142340;
    flex: 1;
`;
export const InputArea = styled.View`
    width: 100%;
    padding: 20px;
`;

export const IconArea = styled.View` 
    flex: 1;   
    justify-content: center;    
    align-items: center;
    margin-bottom: 10px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #000;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;  
    margin-bottom: 10px;
    justify-content: center;

`;
export const SignMessageButtonText = styled.Text`
    font-size: 16px;    
    color: #fff; 
    
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;  
    color: #fff;
    font-weight: bold;
    margin-left: 5px;
`;

export const SignSkipButton = styled.TouchableOpacity`
    flex-direction: row;  
    margin-bottom: 20px;
    justify-content: flex-end;
    
`;
export const SignSkipButtonText = styled.Text`
    font-size: 16px;    
    color: #fff; 
    
`;