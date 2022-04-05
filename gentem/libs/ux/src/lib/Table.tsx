import {
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableCellProps,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import { ReactNode } from 'react';

export interface ITableHeader {
  label: ReactNode;
  props?: TableCellProps;
}

export interface ITableColumn {
  name: string;
  content: ReactNode;
  componentType?: 'textbox';
}

export interface ITableRow {
  columns: ITableColumn[];
}

export function Table(props: {
  headers: ITableHeader[];
  rows: ITableRow[];
  onDataChange?: (rowIndex: number, columnIndex: number, name: string, value: string | number) => void;
}) {
  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead>
          <TableRow>
            {props.headers.map((header, index) => {
              return (
                <TableCell key={index} {...(header.props ?? {})}>
                  {header.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {row.columns.map((column, columnIndex) => {
                return (
                  <TableCell key={columnIndex}>
                    {!column.componentType && column.content}
                    {column.componentType === 'textbox' && (
                      <TextField
                        value={column.content ?? ''}
                        size="small"
                        onChange={(e) => {
                          props.onDataChange?.(index, columnIndex, column.name, e.target.value);
                        }}
                      />
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
