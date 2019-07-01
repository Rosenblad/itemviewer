import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export interface QueryFieldProps {
  field: {
    name: string;
    value: {
      key: string;
      value: string;
    };
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  };
}

export default function QueryField({
  field: {
    name,
    value: { key, value },
    onChange,
  },
}: QueryFieldProps) {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <TextField
          label="Key"
          name={`${name}.key`}
          value={key}
          onChange={onChange}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Value"
          name={`${name}.value`}
          value={value}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
}
