import { Popover, Typography } from '@mui/material';
import { useState } from 'react';

export default function Janelinha() {
  const [ancora, setAncora] = useState();
  const dados = ['dados 1', 'dados 2', 'dados 3', 'dados 4', 'dados 5'];

  const gatilhoDeClique = (event) => {
    setAncora(event.currentTarget);
  };

  const gatilhoDeFechamento = () => {
    setAncora(null);
  };

  const open = Boolean(ancora);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={ancora}
        onClose={gatilhoDeFechamento}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
          {dados.map((d, i) => {
            return <p key={i}>{d}</p>;
          })}
        </Typography>
      </Popover>
      <button
        onMouseOver={gatilhoDeClique}
        type="button"
        aria-describedby="1"
        variant="typography"
      >
        Ativar
      </button>
    </div>
  );
}
