import React, { SyntheticEvent, FormEvent } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  margin: 0 16px;
`;

const Input = styled.input`
  display: block;
  padding: 6px 12px;
  flex-grow: 1;
  border: 1px solid #eee;
  outline: 0;
`;

const Button = styled.button`
  background: transparent;
  border: 0;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 600;
  margin-left: 6px;
  padding: 12px 16px;
  color: #666;
  cursor: pointer;
  border: 2px solid #666;
  outline: 0;
`;

interface CreateCollectionProps {
  onSubmit: (event: FormEvent) => void;
  onChange: (event: SyntheticEvent<HTMLInputElement>) => void;
  value: string;
}

export default function CreateCollection(
  props: CreateCollectionProps,
): JSX.Element {
  const { onSubmit, onChange, value } = props;

  return (
    <Form name="create-collection" onSubmit={onSubmit}>
      <Input type="text" onChange={onChange} value={value} />
      <Button type="submit">Create</Button>
    </Form>
  );
}
