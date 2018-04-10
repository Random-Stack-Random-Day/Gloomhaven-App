import axios from '../axios-user-management';

export default class CharacterService {

    static async getCharacter() {
        const { data } = await axios.get('api/v1/campaigns/1/characters');
        return data;
    }
}