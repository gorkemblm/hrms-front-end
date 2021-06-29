import React from 'react'
import { Button, Grid, Header, Image, Message, Segment, FormField, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import BlncTextInput from '../utilities/customFormControls/BlncTextInput'

export default function JobSeekerSignUp() {

    const initialValues = {
        email: "",
        password: "",
        password_2: "",
        companyName: "",
        webSite: "",
        phoneNumber: "",
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

        companyName: Yup.string()
            .min(2, 'Çok kısa')
            .max(50, 'Çok uzun')
            .required('Şirket adı zorunlu'),

        webSite: Yup.string()
            .min(2, 'Çok kısa')
            .max(50, 'Çok uzun')
            .required('Web site alanı zorunlu'),

        phoneNumber: Yup.string()
            .matches(/^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/i, "Geçersiz telefon numarası")
            .min(9, 'Çok kısa')
            .max(13, 'Çok uzun')
            .required('Telefon numarası zorunlu'),
    })
    return (
        <div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='blue' textAlign='center'>
                        <Image circular src='https://res.cloudinary.com/gorkemblm/image/upload/v1623418004/file_lul3m6.jpg' /> İlan vermek için kaydol
                    </Header>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) =>
                            console.log(values)
                        }
                    >
                        <Form className='ui form' size='large'>
                            <Segment stacked>
                                <BlncTextInput name='email' placeholder='E posta' />
                                <BlncTextInput type='password' name='password' placeholder='Parola' />
                                <BlncTextInput type='password' name='password_2' placeholder='Parolayı tekrarla' />
                                <BlncTextInput name='companyName' placeholder='Şirket Adı' />
                                <BlncTextInput name='webSite' placeholder='Web Site' />
                                <BlncTextInput name='phoneNumber' placeholder='Telefon Numarası' />
                                <Button color='black' fluid size='large' type='submit'>
                                    Kayıt Ol
                                </Button>
                            </Segment>
                        </Form>
                    </Formik>
                </Grid.Column>
            </Grid>
        </div>
    )
}
