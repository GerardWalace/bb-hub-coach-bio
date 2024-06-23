import Extend from 'flarum/common/extenders';
import User from 'flarum/common/models/User';
import Team from './Team';

export default [new Extend.Store().add('teams', Team), new Extend.Model(User).hasMany<Team>('teams')];
