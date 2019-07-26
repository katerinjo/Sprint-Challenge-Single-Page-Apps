import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage';
import LocationsList from './LocationsList';
import EpisodeList from './EpisodeList';

export default function AppRouter() {
  const count = "20";
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route 
        path='/characters'
        render={() => <CharacterList displayCount={count}/>}
      />
      <Route
        path='/locations'
        render={() => <LocationsList displayCount={count} />}
      />
      <Route
        path='/episodes'
        render={() => <EpisodeList displayCount={count} />}
      />
      <Route component={WelcomePage} />
    </Switch>
  </div>

}
