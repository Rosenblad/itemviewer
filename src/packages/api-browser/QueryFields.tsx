import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import QueryField from './QueryField';

export type Param = {
  key: string;
  value: string;
};

export interface QueryFieldsProps {
  onChange?(params: Param[]): void;
}

type FieldsMap = {
  [name: string]: Param;
};

export default function QueryFields({ onChange }: QueryFieldsProps) {
  const [fields, setFields] = React.useState<FieldsMap>({});

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    const [fieldName, inputName] = name.split('.');

    setFields(prevFields => {
      const prevField = prevFields[fieldName];

      return {
        ...prevFields,
        [fieldName]: {
          key: inputName === 'key' ? value : prevField.key,
          value: inputName === 'value' ? value : prevField.value,
        },
      };
    });
  }

  function handleAddField() {
    setFields(prevFields => ({
      ...prevFields,
      [`query[${Object.keys(prevFields).length + 1}]`]: {
        key: '',
        value: '',
      },
    }));
  }

  React.useEffect(() => {
    const params = Object.values(fields);

    if (onChange) {
      onChange(params);
    }
  }, [fields, onChange]);

  const fieldsSet = Object.entries(fields).map(([key, value]) => ({
    name: key,
    value,
  }));

  return (
    <Container maxWidth="sm">
      <Typography>Query Params</Typography>
      {fieldsSet.map(field => (
        <QueryField
          key={field.name}
          field={{
            name: field.name,
            value: field.value,
            onChange: handleChange,
          }}
        />
      ))}
      <Button onClick={handleAddField} variant="contained">
        Add
      </Button>
    </Container>
  );
}
