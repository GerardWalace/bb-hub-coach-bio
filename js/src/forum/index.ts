import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';
import User from 'flarum/common/models/User';
import Model from 'flarum/common/Model';

app.initializers.add('gerardwalace/bb-hub-coach-bio', () => {
  console.log('[gerardwalace/bb-hub-coach-bio] Hello, forum!');
  // User.prototype.bio = Model.attribute('bio');
  // User.prototype.bioHtml = Model.attribute('bioHtml');

  extend(UserCard.prototype, 'infoItems', function (items) {
    // let user = this.attrs.user;
    // if (!user.attribute('canViewBio')) {
    //   return;
    // }
    // items.add('bio', <UserBio user={user} />, -100);
    items.add('coachBio', '<p>Coucou</p>', -100);
  });
  console.log('[gerardwalace/bb-hub-coach-bio] Great forum Bro!');
});
