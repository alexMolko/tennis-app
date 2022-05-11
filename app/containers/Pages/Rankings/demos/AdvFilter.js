/* eslint-disable linebreak-style */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';

const styles = theme => ({
  table: {
    '& > div': {
      overflow: 'auto'
    },
    '& table': {
      '& td': {
        wordBreak: 'keep-all'
      },
      [theme.breakpoints.down('md')]: {
        '& td': {
          height: 60,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    }
  }
});
/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
function AdvFilter(props) {
  const columns = [
    {
      name: 'Ranking',
      options: {
        filter: false
      }
    },
    {
      name: 'Jugador',
      options: {
        filter: false,
      }
    },
    {
      name: 'Edad',
      options: {
        filter: true,
      }
    },
    {
      name: 'Status',
      options: {
        filter: true,
        customBodyRender: (value) => {
          if (value === 'Activo') {
            return (<Chip label="Activo" color="secondary" />);
          }
          if (value === 'Inactivo') {
            return (<Chip label="Inactivo" color="primary" />);
          }
          return (<Chip label="Desconocido" />);
        }
      }
    },
    {
      name: 'Puntos',
      options: {
        filter: true
      }
    },
  ];

  const data = [
    ['1', 'Carlos Maya', 30, 'Activo', 1000],
    ['2', 'Jorge Castillo', 55, 'Activo', 800],
    ['3', 'Eduardo Gonzalez', 27, 'Inactivo', 500],
    ['4', 'Frederick Leal', 60, 'Activo', 500],
    ['5', 'Carlos Maya', 30, 'Activo', 250],
    ['6', 'Jorge Castillo', 55, 'Activo', 250],
    ['7', 'Eduardo Gonzalez', 27, 'Activo', 250],
    ['8', 'Frederick Leal', 42, 'Activo', 250],
  ];

  const options = {
    filterType: 'dropdown',
    responsive: 'vertical',
    print: false,
    rowsPerPage: 10,
    page: 0,
    selectableRows: 'none'
  };

  const { classes } = props;

  return (
    <div className={classes.table}>
      <MUIDataTable
        title="Ranking de jugadores"
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

AdvFilter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdvFilter);
