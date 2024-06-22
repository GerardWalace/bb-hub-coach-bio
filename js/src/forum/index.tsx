import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';
import User from 'flarum/common/models/User';
import Model from 'flarum/common/Model';
import CoachBio from './components/CoachBio';

app.initializers.add('gerardwalace/bb-hub-coach-bio', () => {
  // User.prototype.bio = Model.attribute('bio');
  // User.prototype.bioHtml = Model.attribute('bioHtml');

  extend(UserCard.prototype, 'infoItems', function (items) {
    let user = this.attrs.user;
    items.add('coachBio', <CoachBio user={user}/>);
  });
});
