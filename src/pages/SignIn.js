import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import BlncTextInput from '../utilities/customFormControls/BlncTextInput'

export default function SignIn() {

    const initialValues = { email: "", password: "" }

    const schema = Yup.object({
        email: Yup.string()
        .email()
        .required("Email alanı zorunlu"),
        
        password: Yup.string()
            .required('Parola alanı zorunlu')
            .min(8, 'Parola çok kısa - mimimun 8 karakter olmalı')
    })

    return (
        <div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='blue' textAlign='center'>
                        <Image circular src='https://res.cloudinary.com/gorkemblm/image/upload/v1623418004/file_lul3m6.jpg' /> Hesabınla giriş yap
                    </Header>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >
                        <Form className='ui form' size='large'>
                            <Segment stacked>
                                <BlncTextInput name='email' placeholder='E mail'/>
                                <BlncTextInput type='password' name='password' placeholder='Parola'/>
                                <Button color='black' fluid size='large' type='submit'>
                                    Giriş Yap
                                </Button>
                            </Segment>
                        </Form>
                    </Formik>
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
