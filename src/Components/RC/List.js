import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function generate(element) {
    return [0, 1, 2].map(value =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

const ListMenu = () => (
    <Wrapper>
            <Grid item xs={12} md={6}>
            <Typography variant="h6" >
              Category
            </Typography>
            <div>
              <List> 
                {generate(
                 <ListWrapper> 
                  <ListItem>
                    <ListItemText
                      primary="Sales Cloud"
                      secondary={'Secondary text'}
                    />
                    <ListItemSecondaryAction>
                    <Typography> (10) </Typography>
                    </ListItemSecondaryAction>
                  </ListItem>
                  </ListWrapper>,
                )}
              </List>
            </div>
          </Grid>

    </Wrapper>
)

const ListWrapper = styled.div`
    &on-ho
    cursor: pointer; 
`;

const Wrapper = styled.div`
    grid-column: 1/4;
    grid-row: 2/3;
    background-color: lightcoral;
    height: 1000px;
    width: 100%;
`;

export default ListMenu;