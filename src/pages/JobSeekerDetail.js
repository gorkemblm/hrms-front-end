import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import JobSeekerService from '../services/jobSeekerService'


export default function JobSeekerDetail() {

    let { id } = useParams()

    const [jobSeeker, setJobSeeker] = useState({})

    useEffect(() => {
        let jobSeekerService = new JobSeekerService()

        jobSeekerService.getJobSeekerById(id).then(result => setJobSeeker(result.data.data))
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
                        <Card.Header>{jobSeeker.firstName}</Card.Header>
                        <Card.Meta>{jobSeeker.lastName}</Card.Meta>
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
