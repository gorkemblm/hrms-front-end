import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default function SignIn() {
    return (
        <div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='blue' textAlign='center'>
                        <Image circular src='https://res.cloudinary.com/gorkemblm/image/upload/v1623418004/file_lul3m6.jpg' /> Hesabınla giriş yap
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-posta' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />

                            <Button color='black' fluid size='large'>
                                Giriş Yap
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Hesabın yok mu?
                        <Link
                            to='/sign-up'
                        >     Kayıt Ol</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    )
}
