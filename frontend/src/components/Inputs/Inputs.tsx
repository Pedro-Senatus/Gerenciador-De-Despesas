import { useEffect, useState } from "react";
import { InputContainer, Cointainer } from "./InputStyles";
import Table from "../Table/Table";
import { deleteExpense, editExpense, fetchData,saveExpense } from "../../services/api";
import Modal from "../Modal/Modal";

const Input = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [newRowTable, setNewRowTable] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [currentRow, setCurrentRow] = useState(null)

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const data = await fetchData();
        setNewRowTable(data.expenses);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchInitialData();
  }, [newRowTable]);

  const handleCreateRowTable = async () => {
    if (!name || !date || !amount) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const newExpense = { name, date, amount };

    await saveExpense(newExpense);

    setName('');
    setDate('');
    setAmount('');
  };

  const handleDeleteRow = (id:any) => {

    deleteExpense(id)

  };

  const handleEditRow = (id:any,newRow:any) =>{

    setCurrentRow({id, ...newRow})
    setIsModalOpen(true)
  }

  const handleUpdateRow = (updatedRow:any)=>{

    editExpense(updatedRow)

  }

  return (
    <>
      <Cointainer>
        <InputContainer>
          <label>Nome</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <label>Data</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <label>Valores</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="00,00 R$" />
        </InputContainer>
        <button onClick={handleCreateRowTable}>Adicionar</button>
      </Cointainer>

      <Table rows={newRowTable} deleteRow={handleDeleteRow} editRow={handleEditRow} />

      {isModalOpen?<Modal  row={currentRow} onSave={handleUpdateRow} onClose={()=>{setIsModalOpen(false)}}/>: null}
    </>
  );
};

export default Input;
