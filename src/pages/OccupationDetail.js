import React, { useState, useEffect } from 'react'
import OccupationService from '../services/occupationService'
import { Button, Card, Image } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'

export default function OccupationDetail() {

    let { id } = useParams()

    const [occupation, setOccupation] = useState({})

    useEffect(() => {
        let occupationService = new OccupationService()

        occupationService.getOccupationById(id).then(result => setOccupation(result.data.data))
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
                        <Card.Header>{occupation.occupationName}</Card.Header>
                        <Card.Meta>{occupation.description}</Card.Meta>
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
