import React from 'react';
import Button from 'material-ui/Button';



const Characters = (props) => {
    return (
        <div>
            Here is a list of your characters!
            <Button onClick={props.retrieveChar} > Click Me </Button>
        </div>
    );
};

export default Characters;