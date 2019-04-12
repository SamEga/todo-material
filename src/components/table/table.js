import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './table.css';

const TableTasks = props => {
  const { tasks } = props;

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Статус</TableCell>
            <TableCell align="right">Название задачи</TableCell>
            <TableCell align="right">Описание задачи</TableCell>
            <TableCell align="right">Дата выполнения</TableCell>
            <TableCell align="right">Важность</TableCell>
            <TableCell align="right">Тэг</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map(row => (
            <TableRow
              onClick={() => {
                props.editTask(row.id);
              }}
              key={row.id}
              className="show-icons"
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.desc}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.important}</TableCell>
              <TableCell align="right">{row.tag}</TableCell>
              {/* <TableCell align="right" className="edit">
                edit
              </TableCell>
              <TableCell align="right" className="del">
                del
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
export default TableTasks;
