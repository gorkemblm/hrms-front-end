import React from 'react'
import { Segment, Header, Rating, Form, Dropdown } from 'semantic-ui-react'


export default function AddLanguage() {
    return (
        <Form>
            <Segment.Group horizontal>
                <Segment>
                    <Form.Field>
                        <Header as='h4'>Dil:
                            <Dropdown style={{ marginLeft: '1em' }} placeholder='Dil seçiniz' search selection >
                            </Dropdown>
                        </Header>
                    </Form.Field>
                </Segment>
                <Segment>
                    <Header as='h4'>
                        Seviye:
                        <Rating style={{
                            marginLeft: '1em',
                            marginTop: '0.7em'
                        }} size='large' icon='star' defaultRating={1} maxRating={5} />
                    </Header>
                </Segment>
            </Segment.Group>
        </Form>
    )
}
