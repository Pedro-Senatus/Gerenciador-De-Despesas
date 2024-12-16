import Router from 'express';
import ExpensesController from '../controllers/ExpensesController.js';

const router = Router()

router.post('/expenses', ExpensesController.saveExpenses)
router.get('/expenses', ExpensesController.listExpenses)
router.put('/expenses/:id', ExpensesController.editExpenses)
router.delete('/expenses/:id', ExpensesController.deleteExpenses)

export default router