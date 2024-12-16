import Expenses from "../models/Expenses.js"

class ExpensesController {

    static saveExpenses = async (req, res) => {

        try {
            const { name, date, amount } = req.body 

            const expense = {
                name: name,
                date: date,
                amount: amount
            }

            if (expense) {
                await Expenses.create(expense)

                res.status(201).json({ message: 'Despesa salva com sucesso' })
            }
            else {
                res.status(500).json({ message: 'Erro ao salvar despesa no banco de dados' })
            }

        }
        catch(error){
            console.error(`Erro ao salvar usuário no banco de dados ${error}`)
        }

        
    }


    static editExpenses = async (req,res)=>{

        try{

            const {id} = req.params

            if(id){

                const { name, date, amount } = req.body

                const newExpense = {
                    name: name,
                    date: date,
                    amount: amount
                }

                await Expenses.findByIdAndUpdate(

                    id,
                    newExpense,
                    {new: true, runValidators: true},

                )

                res.status(200).json({message: 'Despesa atualizada com sucesso'})

            }else{

                res.status(404).json({message: `Erro id não encontrado no banco de dados`})
            }
            

            

        }
        catch(error){
            console.error(`Erro ao encontrar despesa na api ${error}`)
        }


    }

    static deleteExpenses = async (req,res) =>{

        try{

            const {id} = req.params
   
            const deletedExpense = await Expenses.findByIdAndDelete(id)

            if(!deletedExpense){

                res.status(404).json({message: 'Despesa não encontrada'})

            }

            res.status(200).json({message: 'Despesa deletada com sucesso'})
        }
        catch(error){

            console.error(`Erro ao deletar despesa ${error}`)
        }
    }

    static listExpenses = async (req,res) =>{

        try{

            const expenses = await Expenses.find()

            res.status(200).json({expenses})
            
        }
        catch(error){

            console.error(`Erro ao buscar dados do banco de dados ${error}`)
            
        }

    }
}

export default ExpensesController;