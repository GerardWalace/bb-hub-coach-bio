<?php

namespace GerardWalace\BbHubCoachBio\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use GerardWalace\BbHubCoachBio\Api\Serializer\TeamSerializer;
use GerardWalace\BbHubCoachBio\Team;

class ShowTeamController extends AbstractShowController
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
        $modelId = Arr::get($request->getQueryParams(), 'id');

        $model = Team::findOrFail($modelId);

        return $model;
    }
}
