<?php

namespace GerardWalace\BbHubCoachBio;

use Flarum\Database\AbstractModel;

class BbRace extends AbstractModel
{
    // protected $table = 'bb_races';
    protected $primaryKey = 'race_id';
    public $timestamps = false;
}
