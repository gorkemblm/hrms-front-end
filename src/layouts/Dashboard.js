import React from 'react'
import { Route } from 'react-router'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import JobSeekerSignUp from '../pages/JobSeekerSignUp'
import EmployerSignUp from '../pages/EmployerSignUp'
import { Container, Grid } from 'semantic-ui-react'
import JobSeekerProfile from '../pages/JobSeekerProfile'
import EmployerProfile from '../pages/EmployerProfile'

export default function Dashboard() {
    return (
        <div>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Route exact path='/sidebar' component={JobSeekerProfile}/>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Route exact path='/' component={Home} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Route path='/jobAdvertisements' component={JobAdvertisementList} />
                <Route exact path='/sign-in' component={SignIn} />
                <Route path='/sign-up-job-seeker' component={JobSeekerSignUp} />
                <Route path='/sign-up-employer' component={EmployerSignUp} />
                <Route exact path='/jobseeker' component={JobSeekerProfile} />
                <Route path='/employer' component={EmployerProfile} />
            </Container>
        </div>
    )
}
