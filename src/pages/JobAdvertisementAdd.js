import React from 'react'
import { Dropdown, Button, Header, Icon, Segment, Modal, Form, TextArea } from 'semantic-ui-react'


export default function JobAdvertisementAdd() {

    const [openJobAdvertisementAdd, setopenJobAdvertisementAdd] = React.useState(false)

    return (
        <div>
            <Header style={{ color: 'white', backgroundColor: 'rgb(28, 27, 27)' }} as='h2' attached='top' >
                İlanlarım
            </Header>
            <Segment attached style={{ backgroundColor: 'rgb(28, 27, 27)' }} >
                <Segment>
                    <Form>
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
                    </Form>
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
                        <Form>
                            <Segment>
                                <Segment.Group>
                                    <Header as='h3' attached='top'>
                                        <Form.Field>
                                            <label>İş Tanımı</label>
                                            <Form>
                                                <TextArea placeholder='Bize kendinden bahsedebilirsin' style={{ minHeight: 100 }} />
                                            </Form>
                                        </Form.Field>
                                    </Header>
                                    <Segment.Group horizontal>
                                        <Segment >
                                            <Form.Field>
                                                <Header as='h4'>İş Pozisyonu:
                                                    <Dropdown style={{
                                                        marginLeft: '1em'
                                                    }}
                                                        placeholder='İş Pozisyonu seçiniz' search selection />
                                                </Header>
                                            </Form.Field>
                                        </Segment>
                                        <Segment>
                                            <Form.Field>
                                                <Header as='h4'>Şehir:
                                                    <Dropdown style={{
                                                        marginLeft: '1em'
                                                    }}
                                                        placeholder='Şehir seçiniz' search selection />
                                                </Header>
                                            </Form.Field>
                                        </Segment>
                                    </Segment.Group>
                                    <Segment.Group horizontal>
                                        <Segment >
                                            <Form.Field>
                                                <Header as='h4'>Çalışma Zamanı:
                                                    <Dropdown style={{
                                                        marginLeft: '1em'
                                                    }}
                                                        placeholder='Çalışma Zamanı seçiniz' search selection />
                                                </Header>
                                            </Form.Field>
                                        </Segment>
                                        <Segment>
                                            <Form.Field>
                                                <Header as='h4'>Çalışma Türü:
                                                    <Dropdown style={{
                                                        marginLeft: '1em'
                                                    }}
                                                        placeholder='Çalışma Türü seçiniz' search selection />
                                                </Header>
                                            </Form.Field>
                                        </Segment>
                                    </Segment.Group>
                                    <Segment>
                                        <Segment.Group horizontal>
                                            <Segment >
                                                <Form.Field>
                                                    <label>Açık Pozisyon Sayısı:</label>
                                                    <input placeholder='Açık Pozisyon Sayısı' />
                                                </Form.Field>
                                            </Segment>
                                            <Segment>
                                                <Form.Field>
                                                    <label>Son Başvuru Tarihi:</label>
                                                    <input placeholder='Son Başvuru Tarihi' />
                                                </Form.Field>
                                            </Segment>
                                        </Segment.Group>
                                    </Segment>
                                </Segment.Group>
                            </Segment>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='red' inverted onClick={() => setopenJobAdvertisementAdd(false)}>
                            <Icon name='remove' /> Kapat
                        </Button>
                        <Button color='green' inverted onClick={() => setopenJobAdvertisementAdd(false)}>
                            <Icon name='checkmark' /> Kaydet
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Segment>
        </div>
    )
}
