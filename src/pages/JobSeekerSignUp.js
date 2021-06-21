import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function JobSeekerSignUp() {
    return (
        <div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='blue' textAlign='center'>
                        <Image circular src='https://res.cloudinary.com/gorkemblm/image/upload/v1623418004/file_lul3m6.jpg' /> İş Aramak için kaydol
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
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />
                            <Form.Input fluid icon='arrow circle right' iconPosition='left' placeholder='Ad' />
                            <Form.Input fluid icon='arrow circle right' iconPosition='left' placeholder='Soyad' />
                            <Form.Input fluid icon='arrow circle right' iconPosition='left' placeholder='Kimlik Numarası' />
                            <Form.Input fluid icon='arrow circle right' iconPosition='left' placeholder='Doğum Yılı' />
                            <Button color='black' fluid size='large'>
                                Kayıt Ol
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Hesabın var mı?
                        <Link
                            to='/sign-in'
                        >     Giriş Yap</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    )
}
