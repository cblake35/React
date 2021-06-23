import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';

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
                </Switch>
            </div>
        </div>


    )
}