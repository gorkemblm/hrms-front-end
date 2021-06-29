import React, { useState, useEffect } from 'react'
import { Form } from 'formik-semantic-ui-react'
import { Button, Header, Icon, Segment, Modal, FormField } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import BlncDropdown from '../utilities/customFormControls/BlncDropdown'
import BlncTextInput from '../utilities/customFormControls/BlncTextInput'

export default function JobAdvertisementAdd() {

    const [openJobAdvertisementAdd, setopenJobAdvertisementAdd] = React.useState(false)

    const [cities, setCities] = useState([])
    const [workingTimes, setWorkingTimes] = useState([])
    const [wayOfWorkings, setWayOfWorkings] = useState([])
    const [occupations, setOccupations] = useState([])
    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()

        jobAdvertisementService.getCities().then(result => setCities(result.data.data))
        jobAdvertisementService.getWayOfWorkings().then(result => setWayOfWorkings(result.data.data))
        jobAdvertisementService.getWorkingTimes().then(result => setWorkingTimes(result.data.data))
        jobAdvertisementService.getOccupations().then(result => setOccupations(result.data.data))
        jobAdvertisementService.getJobAdvertisements().then(result => setJobAdvertisements(result.data.data))
    }, [])

    const city = cities.map((city) => ({
        key: city.id,
        text: city.cityName,
        value: city.id
    }))

    const occupation = occupations.map((occupation) => ({
        key: occupation.id,
        text: occupation.occupationName,
        value: occupation.id
    }))

    const wayOfWorking = wayOfWorkings.map((wayOfWorking) => ({
        key: wayOfWorking.id,
        text: wayOfWorking.type,
        value: wayOfWorking.id
    }))

    const workingTime = workingTimes.map((workingTime) => ({
        key: workingTime.id,
        text: workingTime.type,
        value: workingTime.id
    }))

    const initialValues = {
        description: "",
        occupation: "",
        city: "",
        workingTime: "",
        wayOfWorking: "",
        numberOfOpenPosition: "",
        applicationDeadline: "",
    }

    /* const schema = Yup.object({
        description: Yup.string()
            .required()
            .min(2)
            .max(128, 'Maksimum 128 karakterden oluşmalıdır.'),

        occupation: Yup.string().required('Meslek alanı zorunlu'),

        city: Yup.string().required('Şehir alanı zorunlu'),

        workingTime: Yup.string().required('Çalışma zamanı zorunlu'),

        wayOfWorking: Yup.string().required('Çalışma türü zorunlu'),

        numberOfOpenPosition: Yup.number().required('Açık pozisyon alanı zorunlu'),

        applicationDeadline: Yup.date().required('Son başvuru tarihi zorunlu'),
    }) */

    return (
        <div>
            <Header style={{ color: 'white', backgroundColor: 'rgb(28, 27, 27)' }} as='h2' attached='top' >
                İlanlarım
            </Header>
            <Segment attached style={{ backgroundColor: 'rgb(28, 27, 27)' }} >
                <Segment>
                    <Segment>
                        <Segment.Group>
                            <Header as='h3' attached='top'>
                                <Icon name='clipboard'></Icon>
                                Bilgisayar Mühendisi
                            </Header>
                            <Segment>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </Segment>
                            <Segment.Group horizontal>
                                <Segment>
                                    <Segment >
                                        <Header as='h4'>Tam Zamanlı</Header>
                                    </Segment>
                                    <Segment>
                                        <Header as='h4'>Uzaktan</Header>
                                    </Segment>
                                    <Segment>
                                        <Header as='h4'>Edirne</Header>
                                    </Segment>
                                </Segment>
                            </Segment.Group>
                            <Segment.Group horizontal>
                                <Segment >
                                    <Header as='h4'>Açık Pozisyon: 12</Header>
                                </Segment>
                                <Segment>
                                    <Header as='h4'>Başvuru Sayısı: 32</Header>
                                </Segment>
                            </Segment.Group>
                        </Segment.Group>
                    </Segment>
                </Segment>
                <Modal
                    basic
                    onClose={() => setopenJobAdvertisementAdd(false)}
                    onOpen={() => setopenJobAdvertisementAdd(true)}
                    open={openJobAdvertisementAdd}
                    size='small'
                    trigger={<Button icon primary>Ekle</Button>}
                >
                    <Header icon>
                        <Icon name='archive' />
                        İŞ İLANI VER
                    </Header>
                    <Modal.Content>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={(values) => {
                                console.log(values)
                            }}
                        >
                            <Form>
                                <Segment>
                                    <Segment.Group>
                                        <Header as='h3' attached='top'>
                                            <Header as='h4'>İş Tanımı
                                                <BlncTextInput name='description' placeholder='Bize kendinden bahsedebilirsin' style={{ minHeight: 100 }} />
                                            </Header>
                                        </Header>
                                        <Segment.Group horizontal>
                                            <Segment >
                                                <Header as='h4'>İş Pozisyonu
                                                    <BlncDropdown options={occupation} name='occupation' placeholder='İş Pozisyonu seçiniz' />
                                                </Header>
                                            </Segment>
                                            <Segment>
                                                <Header as='h4'>Şehir
                                                    <BlncDropdown options={city} name='city' placeholder='Şehir seçiniz' />
                                                </Header>
                                            </Segment>
                                        </Segment.Group>
                                        <Segment.Group horizontal>
                                            <Segment >
                                                <Header as='h4'>Çalışma Zamanı
                                                    <BlncDropdown options={workingTime} name='workingTime' placeholder='Çalışma Zamanı seçiniz' />
                                                </Header>
                                            </Segment>
                                            <Segment>
                                                <Header as='h4'>Çalışma Türü
                                                    <BlncDropdown options={wayOfWorking} name='wayOfWorking' placeholder='Çalışma Türü seçiniz' />
                                                </Header>
                                            </Segment>
                                        </Segment.Group>
                                        <Segment>
                                            <Segment.Group horizontal>
                                                <Segment >
                                                    <Header as='h4'>Çalışma Türü
                                                        <BlncTextInput name='numberOfOpenPosition' placeholder='Açık Pozisyon Sayısı' />
                                                    </Header>
                                                </Segment>
                                                <Segment>
                                                    {/* Bu kısmı date türüne çevirmemiz gerekiyor */}
                                                    <FormField>
                                                        <label>Son Başvuru Tarihi:</label>
                                                        <Field name='applicationDeadline' placeholder='Son Başvuru Tarihi'></Field>
                                                    </FormField>
                                                </Segment>
                                            </Segment.Group>
                                        </Segment>
                                    </Segment.Group>
                                </Segment>
                                <Modal.Actions>
                                    <Button basic color='red' inverted onClick={() => setopenJobAdvertisementAdd(false)}>
                                        <Icon name='remove' /> Kapat
                                    </Button>
                                    <Button type='submit' color='green' inverted /* onClick={() => setopenJobAdvertisementAdd(false)} */>
                                        <Icon name='checkmark' /> Kaydet
                                    </Button>
                                </Modal.Actions>
                            </Form>
                        </Formik>
                    </Modal.Content>
                </Modal>
            </Segment>
        </div>
    )
}
