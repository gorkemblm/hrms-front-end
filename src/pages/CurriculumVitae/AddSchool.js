import React from 'react'
import { Segment, Header, Form, Checkbox } from 'semantic-ui-react'

export default function AddSchool() {
    return (
        <Form>
            <Segment>
                <Segment.Group>
                    <Header as='h3' attached='top'>
                        <Form.Field>
                            <label>Okul Adı</label>
                            <input placeholder='Okul Adı' />
                        </Form.Field>
                    </Header>
                    <Segment attached color='black'>
                        <Form.Field>
                            <label>Bölüm Adı</label>
                            <input placeholder='Bölüm Adı' />
                        </Form.Field>
                    </Segment>
                    <Segment.Group horizontal>
                        <Segment >
                            <Form.Field>
                                <label>Başlangıç Yılı:</label>
                                <input placeholder='Başlangıç Yılı' />
                            </Form.Field>
                        </Segment>
                        <Segment>
                            <Form.Field>
                                <label>Bitiş Yılı:</label>
                                <input placeholder='Bitiş Yılı' />
                            </Form.Field>
                        </Segment>
                    </Segment.Group>
                    <Segment>
                        <Form.Group>
                            <Form.Field>
                                <Checkbox label='Mezun oldum' defaultChecked />
                            </Form.Field>
                        </Form.Group>
                    </Segment>
                </Segment.Group>
            </Segment>
        </Form>
    )
}
