import Model from 'flarum/common/Model';
import BbRace from './BbRace';
export default class Team extends Model {
    team_nom: () => unknown;
    race: () => false | BbRace;
}
