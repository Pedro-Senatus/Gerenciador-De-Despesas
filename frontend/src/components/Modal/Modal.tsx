import { useState } from "react";
import { ButtonStyled, ContainerButton, InputsContainer, ModalContainer } from "./ModalStyles"

const Modal = ({row, onSave, onClose}:any) =>{

    const [name, setName] = useState(row.name);
    const [date, setDate] = useState(row.date);
    const [amount, setAmount] = useState(row.amount);

    const handleSave = () =>{

        onSave({id: row._id, name, date, amount})
        onClose()
    }

    return(

        <ModalContainer>
            
            <InputsContainer>
                <label>Nome</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Data</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <label>Valor</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <ContainerButton>
                    <ButtonStyled color="#CA9849" onClick={handleSave}>Salvar</ButtonStyled>
                    <ButtonStyled color="#DA2633" onClick={onClose}>Cancelar</ButtonStyled>
                </ContainerButton>
            </InputsContainer>
            
        </ModalContainer>
    )

}

export default Modal