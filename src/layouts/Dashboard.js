import React from 'react'
import { Route } from 'react-router'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import EmployerList from '../pages/EmployerList'
import OccupationList from '../pages/OccupationList'
import JobSeekerList from '../pages/JobSeekerList'
import CurriculumVitaeList from '../pages/CurriculumVitaeList'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import JobSeekerSignUp from '../pages/JobSeekerSignUp'
import EmployerSignUp from '../pages/EmployerSignUp'
import { Container, Grid } from 'semantic-ui-react'
import OccupationDetail from '../pages/OccupationDetail'
import EmployerDetail from '../pages/EmployerDetail'
import JobSeekerDetail from '../pages/JobSeekerDetail'
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
                <Route path='/employers' component={EmployerList} />
                <Route path='/jobSeekers' component={JobSeekerList} />
                <Route path='/occupations' component={OccupationList} />
                <Route path='/curriculumvitaes' component={CurriculumVitaeList} />
                <Route exact path='/sign-in' component={SignIn} />
                <Route path='/sign-up-job-seeker' component={JobSeekerSignUp} />
                <Route path='/sign-up-employer' component={EmployerSignUp} />
                <Route path='/occupation/:id' component={OccupationDetail} />
                <Route path='/employer/:id' component={EmployerDetail} />
                <Route path='/jobSeeker/:id' component={JobSeekerDetail} />
                <Route path='/jobseeker' component={JobSeekerProfile} />
                <Route path='/employer' component={EmployerProfile} />
            </Container>
        </div>
    )
}
