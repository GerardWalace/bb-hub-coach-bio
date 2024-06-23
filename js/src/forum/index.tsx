import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';
import CoachBio from './components/CoachBio';

export { default as extend } from './extend';

app.initializers.add('gerardwalace/bb-hub-coach-bio', () => {
  extend(UserCard.prototype, 'infoItems', function (items) {
    let user = this.attrs.user;
    items.add('coachBio', <CoachBio user={user} />);
  });
});
