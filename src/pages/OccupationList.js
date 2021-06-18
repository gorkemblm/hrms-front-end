import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import OccupationService from '../services/occupationService'

export default function OccupationList() {

    const [occupations, setOccupations] = useState([])

    useEffect(() => {
        let occupationService = new OccupationService()
        occupationService.getOccupations().then(result => setOccupations(result.data.data))
    }, [])

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İsim</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        occupations.map((occupation) => (
                            <Table.Row key={occupation.id}>
                                <Table.Cell>{occupation.occupationName}</Table.Cell>
                                <Table.Cell>{occupation.description}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
