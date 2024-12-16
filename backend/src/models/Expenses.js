import mongoose from "mongoose";

const ExpensesSchema = new mongoose.Schema({

    name: {type: String, required: true},
    date: {type: String, required: true},
    amount: {type: String, required: true}

})

export default mongoose.model("Expenses", ExpensesSchema)