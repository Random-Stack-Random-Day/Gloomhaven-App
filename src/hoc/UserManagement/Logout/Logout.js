import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


const Logout = (props) => {
    const { classes } = props;

    return (
        <div>
            <Button variant="raised" color="secondary" className={classes.button} onClick={props.logMeOut}>
                Logout
            </Button>
        </div>
    );
};

Logout.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Logout);