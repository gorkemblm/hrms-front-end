import React from 'react'
import { Segment, Header, Form } from 'semantic-ui-react'


export default function AddSocialMedia() {
    return (
        <Form>
            <Segment.Group horizontal>
                <Segment>
                    <Segment>
                        <Header as='h4'>Link:</Header>
                        <input placeholder='url'></input>
                    </Segment>
                </Segment>
            </Segment.Group>
        </Form>
    )
}
