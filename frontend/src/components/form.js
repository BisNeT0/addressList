import React, {useRef} from "react";
import styled from "styled-components";

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap:10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding:20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label``;

const Button= styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;

const Form = ({onEdit})=>{
    const ref = useRef();
    return(
        <FormContainer ref={ref}>
            <InputArea>
                <Label>NOME</Label>
                <Input name= "nome"/>
            </InputArea>
            <InputArea>
                <Label>E-MAIL</Label>
                <Input name= "email" type="email"/>
            </InputArea>
            <InputArea>
                <Label>TELEFONE</Label>
                <Input name= "telefone"/>
            </InputArea>
            <InputArea>
                <Label>DATA DE NASCIMENTO</Label>
                <Input name= "data_nascimento" type="date"/>
            </InputArea>

            <Button type="submit">SALVAR</Button>
        </FormContainer>
    );
};

export default Form;