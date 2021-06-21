import React, { useEffect, useState } from 'react'
import CurriculumVitaeService from '../services/curriculumVitaeService'
import { Table, Dropdown } from 'semantic-ui-react'

export default function CurriculumVitaeList() {

    const [curriculumVitaes, setCurriculumVitaes] = useState([])

    useEffect(() => {
        let curriculumVitaeService = new CurriculumVitaeService()
        curriculumVitaeService.getCurriculumVitaes().then(result => setCurriculumVitaes(result.data.data))
    }, [])

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ad</Table.HeaderCell>
                        <Table.HeaderCell>Soyad</Table.HeaderCell>
                        <Table.HeaderCell>Okul Adı</Table.HeaderCell>
                        <Table.HeaderCell>Dil</Table.HeaderCell>
                        <Table.HeaderCell>Yetenek</Table.HeaderCell>
                        <Table.HeaderCell>Deneyim</Table.HeaderCell>
                        <Table.HeaderCell>Sosyal Medya</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        curriculumVitaes.map((curriculumVitae) => (
                            <Table.Row key={curriculumVitae.id}>
                                <Table.Cell>{curriculumVitae.jobSeeker.firstName}</Table.Cell>
                                <Table.Cell>{curriculumVitae.jobSeeker.lastName}</Table.Cell>
                                <Table.Cell><Dropdown placeholder='Okul' search selection /></Table.Cell>
                                <Table.Cell><Dropdown placeholder='Dil' search selection /></Table.Cell>
                                <Table.Cell><Dropdown placeholder='Yetenek' search selection /></Table.Cell>
                                <Table.Cell><Dropdown placeholder='Deneyim' search selection /></Table.Cell>
                                <Table.Cell><Dropdown placeholder='Sosyal Medya' search selection /></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
