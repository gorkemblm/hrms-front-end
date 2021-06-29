import React from 'react'
import { Button, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import BlncTextInput from '../utilities/customFormControls/BlncTextInput'

export default function JobSeekerSignUp() {

    const initialValues = {
        email: "",
        password: "",
        password_2: "",
        firstName: "",
        lastName: "",
        identityNumber: "",
        dateOfBirth: "",
    }

    const schema = Yup.object({
        email: Yup.string()
            .email("Email formatında olmalı")
            .required("Email alanı zorunlu"),

        password: Yup.string()
            .required('Parola alanı zorunlu')
            .min(8, 'Parola çok kısa - mimimun 8 karakter olmalı'),

        password_2: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Parola eşleşmiyor'),

        firstName: Yup.string()
            .min(2, 'Çok kısa')
            .max(50, 'Çok uzun')
            .required('İsim alanı zorunlu'),

        lastName: Yup.string()
            .min(2, 'Çok kısa')
            .max(50, 'Çok uzun')
            .required('Soy isim alanı zorunlu'),

        identityNumber: Yup.string()
            .length(11, 'Kimlik numarası 11 karakterden oluşmalıdır')
            .required("Kimlik numarası alanı zorunlu"),

        dateOfBirth: Yup.date().required("Doğum tarihi alanı zorunlu"),
    }
    )

    return (
        <div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='blue' textAlign='center'>
                        <Image circular src='https://res.cloudinary.com/gorkemblm/image/upload/v1623418004/file_lul3m6.jpg' /> İş Aramak için kaydol
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
                                <BlncTextInput name='email' placeholder='E posta' />
                                <BlncTextInput type='password' name='password' placeholder='Parola' />
                                <BlncTextInput type='password' name='password_2' placeholder='Parolayı tekrarla' />
                                <BlncTextInput name='firstName' placeholder='Ad' />
                                <BlncTextInput name='lastName' placeholder='Soyad' />
                                <BlncTextInput name='identityNumber' placeholder='Kimlik Numarası' />
                                <BlncTextInput name='dateOfBirth' placeholder='Doğum Tarihi' />
                                <Button color='black' fluid size='large' type='submit'>
                                    Kayıt Ol
                                </Button>
                            </Segment>
                            <Message>
                                Hesabın var mı?
                                <Link
                                    to='/sign-in'
                                >     Giriş Yap</Link>
                            </Message>
                        </Form>
                    </Formik>
                </Grid.Column>
            </Grid>
        </div>
    )
}
