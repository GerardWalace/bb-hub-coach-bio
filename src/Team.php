<?php

namespace GerardWalace\BbHubCoachBio;

use Flarum\Database\AbstractModel;

class Team extends AbstractModel
{
    protected $table = 'bb_teams';
    protected $primaryKey = 'team_id';
    public $timestamps = false;
}
