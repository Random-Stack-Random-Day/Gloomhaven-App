import React, {Component} from 'react';
import Character from './Characters/Characters';

import CharacterService from '../../Services/CharacterService';

class Campaign extends Component {
    state = {
        characters: null

    }

    getCharacter = () => {
       const pull = CharacterService.getCharacter();
       pull.then((res) => {
           console.log('Here I am!', res)
           this.setState({characters: res.characters})
           console.log(this.state, "I'm a state")
       })
       .catch((err) => {
           console.log(err)
       })
    }
    
    render() {
        // let charDisplay = null
        if (this.state.characters)
            var charList = this.state.characters.map((char) => {
                return <div className="character" key={char.id}>{char.name}</div>
            })
        
        return (
            <div>
                {charList}
                <Character retrieveChar={this.getCharacter}/>
            </div>
        );
    }
}

export default Campaign;