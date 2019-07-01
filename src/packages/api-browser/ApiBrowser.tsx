import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ItemViewer, { ItemProps } from '../itemviewer';
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from '../../state/libs/localStorage';

import QueryFields, { Param } from './QueryFields';
import requestHelpers from './requestHelpers';

export default function ApiBrowser() {
  const [externalApiRoot, setExternalApiRoot] = React.useState('');
  const [params, setParams] = React.useState<Param[]>([]);
  const [url, setUrl] = React.useState('');
  const [items, setItems] = React.useState<ItemProps[]>([]);
  const [hidden, setHidden] = React.useState<string[]>([]);

  const filterItems = React.useCallback(
    (arr: string[]) => {
      setItems(prevState => prevState.filter(item => !arr.includes(item.id)));
    },
    [setItems],
  );

  React.useEffect(() => {
    const storedHidden = getFromLocalStorage('hidden');

    if (!storedHidden) return;

    setHidden(storedHidden);
    filterItems(storedHidden);
  }, [setHidden, filterItems]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event) return;

    setExternalApiRoot(event.target.value);
  }

  function handleHide(id: string) {
    const nextHidden = [...hidden, id];
    setHidden(nextHidden);
    filterItems(nextHidden);
    saveToLocalStorage('hidden', nextHidden);
  }

  function handleResponse(response: any) {
    const transformedItems = response.map((document: any) => {
      return {
        title: document.title,
        id: document.id.toString(),
        image: document.image,
        url: document.url,
        // eslint-disable-next-line no-underscore-dangle
        _id: document._id,
      };
    });

    const filteredItems = transformedItems.filter(
      (item: ItemProps) => !hidden.includes(item.id),
    );

    setItems(filteredItems);
  }

  function handleSend() {
    requestHelpers
      .send(url)
      .then(handleResponse)
      .catch(console.log);
  }

  const handleChangeParams = React.useCallback(
    (nextParams: Param[]) => {
      setParams(nextParams);
    },
    [setParams],
  );

  React.useEffect(() => {
    try {
      const nextUrl = new URL('/videos', externalApiRoot);

      params.forEach(param => {
        nextUrl.searchParams.set(param.key, param.value);
      });

      setUrl(nextUrl.href);
    } catch (error) {
      console.log('Invalid URL');
    }
  }, [params, externalApiRoot]);

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <Typography>URL</Typography>
          {url}
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="External API root"
            value={externalApiRoot}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <QueryFields onChange={handleChangeParams} />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleSend} variant="contained">
            Send
          </Button>
        </Grid>
        <Grid item xs={12}>
          <ItemViewer items={items} onHide={handleHide} />
        </Grid>
      </Grid>
    </Container>
  );
}
