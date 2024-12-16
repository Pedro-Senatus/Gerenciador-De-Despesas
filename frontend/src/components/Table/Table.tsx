import { TableContainer, TableStyled } from "./TableStyles"
import Button from "../Button/Button"
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { FaRegEdit } from "react-icons/fa";

const Table = ({ rows, deleteRow, editRow }:any) => {

  return (

    <TableContainer>
      <TableStyled>

        <thead>
          <tr>
            <th>Nome</th>
            <th>Data</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>

          {rows.map((row:any) => (
            <tr key={row._id}>
              <td>{row.name}</td>
              <td>{row.date}</td>
              <td>{row.amount}</td>
              <div className="buttons">
                <Button icon={HiArchiveBoxXMark} color={'#DA2633'} size={27} onClick={()=>deleteRow(row._id)}/>
                <Button icon={FaRegEdit} color={'#56A2E8'} size={25} onClick={()=> editRow(row._id, row)} />
              </div>
            </tr>
          ))
          }

        </tbody>

      </TableStyled>
    </TableContainer>
  )
}

export default Table