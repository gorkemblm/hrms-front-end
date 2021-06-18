import React, { useEffect, useState } from 'react'
import JobSeekerService from '../services/jobSeekerService'
import { Table } from 'semantic-ui-react'

export default function JobSeekerList() {

    const [jobSeekers, setJobSeekers] = useState([])

    useEffect(() => {
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeekers().then(result => setJobSeekers(result.data.data))
    }, [])

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                        <Table.HeaderCell>Ad</Table.HeaderCell>
                        <Table.HeaderCell>Soyad</Table.HeaderCell>
                        <Table.HeaderCell>Kimlik numarası</Table.HeaderCell>
                        <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        jobSeekers.map((jobSeeker) => (
                            <Table.Row key={jobSeeker.id}>
                                <Table.Cell>{jobSeeker.email}</Table.Cell>
                                <Table.Cell>{jobSeeker.password}</Table.Cell>
                                <Table.Cell>{jobSeeker.firstName}</Table.Cell>
                                <Table.Cell>{jobSeeker.lastName}</Table.Cell>
                                <Table.Cell>{jobSeeker.identityNumber}</Table.Cell>
                                <Table.Cell>{jobSeeker.dateOfBirth}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
