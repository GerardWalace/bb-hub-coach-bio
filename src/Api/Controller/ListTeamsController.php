<?php

namespace GerardWalace\BbHubCoachBio\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use GerardWalace\BbHubCoachBio\Api\Serializer\TeamSerializer;
use GerardWalace\BbHubCoachBio\Team;

class ListTeamsController extends AbstractListController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = TeamSerializer::class;

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        return Team::all();
    }
}
