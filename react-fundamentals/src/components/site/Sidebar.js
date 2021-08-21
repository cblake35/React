import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
import JSXRules from '../concepts/JSXRules';
import State from '../concepts/State';
import Effects from '../concepts/Effects';
import PropsDemo from '../concepts/PropsDemo';
import Hooks2 from '../concepts/Hooks'
import TimePieceApp from '../apps/timer-apps/TimePiecesApp'
import NytApp from '../apps/nyt-app/NytApp'
import MovieApp from '../apps/the-movie-db/MovieApp';
import Bitcoin from '../apps/bitcoin-api-app/Bitcoin';
import ClassComponentDemo from '../concepts/ClassComponentDemo';
import ClassComponentProps from '../concepts/ClassComponentProps';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    {/* Link tells react-router-dom where to go. After we click this link, it'll then re-direct our page 
                    (without refreshing) and direct our application to the new path, at which point our Route should render the appropriate content! */}
                    <li><Link to='/'>Home</Link></li> 
                    <li><Link to='/resources'>Resources</Link></li>
                    <li><Link to='/functionalcomponent'>Functional Component</Link></li>
                    <li><Link to='/classcomponent'>Class Component</Link></li>
                    <li><Link to='/classcomponentprops'>Class Component Props</Link></li>
                    <li><Link to='/jsxrules'>JSX Rules</Link></li>
                    <li><Link to='/state'>State</Link></li>
                    <li><Link to='/effects'>Effects</Link></li>
                    <li><Link to='/propsdemo'>Props Demo</Link></li>
                    <li><Link to='/hooks'>Hooks</Link></li>
                    <li><Link to='/timepieceapp'>Time Piece App</Link></li>
                    <li><Link to='/nytapp'>NYT App</Link></li>
                    <li><Link to='/movieapp'>Movie App</Link></li>
                    <li><Link to='/bitcoinapp'>BitCoin App</Link></li>

                </ul>
            </div>
            <div className='sidebar-route'>
                {/* We use this to wrap our Routes since the Switch acts as a vanilla JS switch statement, and 
                iterates over the routes and only renders the first one that matches the current path name. 
                This is just an extra assurance that we're not going to have unintentional multiple components render at one time! */}
                <Switch>
                    <Route exact path='/home'><Home /></Route> {/* exact limits the path that can match this route to only the words shown */}
                    <Route exact path='/resources'><Resources /></Route> {/* path is just saying that the path where this component should be shown is /resources*/}
                    <Route exact path='/'><Home /></Route> {/* One more important thing, notice how the component is declared between the open and closing Route tags. Ensure that there are no excess spaces in between the Routes as well, as this could cause it to break. */}
                    <Route exact path='/functionalcomponent'><FunctionalComponentDemo /></Route>
                    <Route exact path='/classcomponent'><ClassComponentDemo /></Route>
                    <Route exact path='/classcomponentprops'><ClassComponentProps /></Route>
                    <Route exact path='/jsxrules'><JSXRules /></Route>
                    <Route exact path='/state'><State /></Route>
                    <Route exact path='/effects'><Effects /></Route>
                    <Route exact path='/propsdemo'><PropsDemo /></Route>
                    <Route exact path='/hooks'><Hooks2 /></Route>
                    <Route exact path='/timepieceapp'><TimePieceApp /></Route>
                    <Route exact path='/nytapp'><NytApp /></Route>
                    <Route exact path='/movieapp'><MovieApp /></Route>
                    <Route exact path='/bitcoinapp'><Bitcoin /></Route>
                </Switch>
            </div>
        </div>


    )
}

export default Sidebar;