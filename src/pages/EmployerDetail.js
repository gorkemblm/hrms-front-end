import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EmployerService from '../services/employerService'
import { Button, Card, Image } from 'semantic-ui-react'


export default function EmployerDetail() {

    let { id } = useParams()

    const [employer, setEmployer] = useState({})

    useEffect(() => {
        let employerService = new EmployerService()

        employerService.getEmployerById(id).then(result => setEmployer(result.data.data))
    }, [])

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated="right"
                            size="mini"
                            src="/images/avatar/large/steve.jpg"
                        />
                        <Card.Header>{employer.companyName}</Card.Header>
                        <Card.Meta>{employer.website}</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className="ui two buttons">
                            <Button basic color="green">
                                Approve
                            </Button>
                            <Button basic color="red">
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
