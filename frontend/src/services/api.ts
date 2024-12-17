import axios from "axios";
import { Expenses } from "../types/Expenses";

const API_URL =  process.env.REACT_APP_API_URL!;

export const fetchData = async () =>{

    const response = await axios.get(API_URL)

    return response.data
};

export const saveExpense = async (data: Expenses)=>{


    try{

        const payload ={
            name: data.name,
            date: data.date,
            amount: data.amount
        }
    
        await axios.post(API_URL, payload)

    }
    catch(error){
        console.log(`Erro ao salvar despesa ${error}`)
    }
   
}

export const deleteExpense = async (id:any)=>{


    try{

        await axios.delete(`${API_URL}/${id}`)

    }
    catch(error){

        console.log(`Erro ao deletar despesa ${error}`)
    }

}

export const editExpense = async(newRow:any) =>{

    try{

        const payload = {

            name: newRow.name,
            date: newRow.date,
            amount: newRow.amount
    
        }

        await axios.put(`${API_URL}/${newRow.id}`, payload)

    }
    catch(error){

        console.log(`Erro ao editar despesa ${error}`)
    }
}
