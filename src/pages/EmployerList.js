import React, { useState, useEffect } from 'react'
import EmployerService from '../services/employerService'
import { Table } from 'semantic-ui-react'

export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then(result => setEmployers(result.data.data))
    }, [])

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Web Site</Table.HeaderCell>
                        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        employers.map((employer) => (
                            <Table.Row key={employer.id}>
                                <Table.Cell>{employer.email}</Table.Cell>
                                <Table.Cell>{employer.password}</Table.Cell>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.website}</Table.Cell>
                                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
