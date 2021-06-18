import React from 'react'
import { Route } from 'react-router'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import EmployerList from '../pages/EmployerList'
import OccupationList from '../pages/OccupationList'
import JobSeekerList from '../pages/JobSeekerList'
import CurriculumVitaeList from '../pages/CurriculumVitaeList'
import Home from '../pages/Home'

export default function Dashboard() {
    return (
        <div>
                <Route exact path='/' component={Home}/>
                <Route path='/jobAdvertisements' component={JobAdvertisementList}/>
                <Route path='/employers' component={EmployerList}/>
                <Route path='/jobSeekers' component={JobSeekerList}/>
                <Route path='/occupations' component={OccupationList}/>
                <Route path='/curriculumvitaes' component={CurriculumVitaeList}/>
        </div>
    )
}
