import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const styles = {
  card: {
    maxWidth: 315,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <CardWrapper>    
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className={classes.media}
            height="140"
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
        <TextWrapper>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              New Leads
            </Typography>
            <Typography component="p">
              Sales Cloud
            </Typography>
          </CardContent>
        </TextWrapper>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Acquire
          </Button>
        </CardActions>
      </Card>
    </CardWrapper>
  );
}


const CardWrapper = styled.div`
    margin: 15px;
    font-weight: 500;
`;

const TextWrapper = styled.div`
  text-align: left;
`;

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);