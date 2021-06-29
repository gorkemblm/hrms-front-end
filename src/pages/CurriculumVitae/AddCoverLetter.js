import React from 'react'
import { Form } from 'semantic-ui-react'
import { TextArea } from 'semantic-ui-react'

export default function AddCoverLetter() {
    return (
        <Form>
            <TextArea placeholder='Bize kendinden bahsedebilirsin' style={{ minHeight: 100 }} />
        </Form>
    )
}
