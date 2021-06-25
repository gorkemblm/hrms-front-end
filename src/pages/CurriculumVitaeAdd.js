import React from 'react'
import { Menu, Grid, Button, Icon, Segment, Header, Rating, Modal, Form, TextArea, Checkbox, Dropdown } from 'semantic-ui-react'

export default function CurriculumVitaeAdd() {

    const [openResume, setOpenResume] = React.useState(false)
    const [openSchool, setOpenSchool] = React.useState(false)
    const [openExperience, setOpenExperience] = React.useState(false)
    const [openLanguage, setOpenLanguage] = React.useState(false)
    const [openSocial, setOpenSocial] = React.useState(false)

    return (
        <div>
            <Header style={{ color: 'white', backgroundColor: 'rgb(28, 27, 27)' }} as='h2' attached='top' >
                Görkem Bilim
            </Header>
            <Segment attached style={{ backgroundColor: 'rgb(28, 27, 27)' }} >
                <Header style={{ color: 'white' }} as='h5' >
                    ÖZ GEÇMİŞ
                </Header>
                <Segment>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </Segment>
                <Modal
                    basic
                    onClose={() => setOpenResume(false)}
                    onOpen={() => setOpenResume(true)}
                    open={openResume}
                    size='small'
                    trigger={<Button icon primary>Düzenle</Button>}
                >
                    <Header icon>
                        <Icon name='archive' />
                        ÖZ GEÇMİŞ
                    </Header>
                    <Modal.Content>
                        <Form>
                            <TextArea placeholder='Bize kendinden bahsedebilirsin' style={{ minHeight: 100 }} />
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='red' inverted onClick={() => setOpenResume(false)}>
                            <Icon name='remove' /> Kapat
                        </Button>
                        <Button color='green' inverted onClick={() => setOpenResume(false)}>
                            <Icon name='checkmark' /> Kaydet
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Segment>
            <Segment style={{ backgroundColor: 'rgb(28, 27, 27)' }}>
                <Header style={{ color: 'white' }} as='h5' >
                    Okuduğu Okullar
                </Header>
                <Segment color='black'>
                    <Segment.Group>
                        <Header as='h3' attached='top'>
                            <Icon name='graduation cap'></Icon>
                            Trakya Üniversitesi
                        </Header>
                        <Segment attached color='black'>
                            <Header as='h4'>Bilgisayar Mühendisliği</Header>
                        </Segment>
                        <Segment.Group horizontal>
                            <Segment >
                                <Header as='h4'>Başlangıç Yılı: 2012-23-23</Header>
                            </Segment>
                            <Segment>
                                <Header as='h4'>Bitiş Yılı: 2012-23-23</Header>
                            </Segment>
                        </Segment.Group>
                        <Segment>
                            <Header as='h4'>Mezuniyet Durumu: Mezun</Header>
                        </Segment>
                    </Segment.Group>
                </Segment>
                <Modal
                    basic
                    onClose={() => setOpenSchool(false)}
                    onOpen={() => setOpenSchool(true)}
                    open={openSchool}
                    size='small'
                    trigger={<Button primary icon>Ekle</Button>}
                >
                    <Header icon>
                        <Icon name='archive' />
                        OKUL EKLE
                    </Header>
                    <Modal.Content>
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
                                            <Form.Field>
                                                <Checkbox style={{ marginLeft: '1em' }} label='Devam ediyorum' />
                                            </Form.Field>
                                        </Form.Group>
                                    </Segment>
                                </Segment.Group>
                            </Segment>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='red' inverted onClick={() => setOpenSchool(false)}>
                            <Icon name='remove' /> Kapat
                        </Button>
                        <Button color='green' inverted onClick={() => setOpenSchool(false)}>
                            <Icon name='checkmark' /> Kaydet
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Segment>
            <Segment style={{ backgroundColor: 'rgb(28, 27, 27)' }}>
                <Header style={{ color: 'white' }} as='h5' >
                    İş Deneyimleri
                </Header>
                <Segment >
                    <Segment.Group>
                        <Header as='h3' attached='top'>
                            <Icon name='building'></Icon>
                            Raklet Inc.
                        </Header>
                        <Segment attached color='black'>
                            <Header as='h4'>Back End Developer</Header>
                        </Segment>
                        <Segment.Group horizontal>
                            <Segment>
                                <Header as='h4'>Başlangıç Yılı: 2012-23-23</Header>
                            </Segment>
                            <Segment>
                                <Header as='h4'>Bitiş Yılı: -</Header>
                            </Segment>
                        </Segment.Group>
                        <Segment>
                            <Header as='h4'>Çalışma Durumu: Devam Ediyor</Header>
                        </Segment>
                    </Segment.Group>
                </Segment>
                <Modal
                    basic
                    onClose={() => setOpenExperience(false)}
                    onOpen={() => setOpenExperience(true)}
                    open={openExperience}
                    size='small'
                    trigger={<Button primary icon>Ekle</Button>}
                >
                    <Header icon>
                        <Icon name='archive' />
                        İŞ DENEYİMİ EKLE
                    </Header>
                    <Modal.Content>
                        <Form>
                            <Segment>
                                <Segment.Group>
                                    <Header as='h3' attached='top'>
                                        <Form.Field>
                                            <label>İş Yeri Adı</label>
                                            <input placeholder='İş Yeri Adı' />
                                        </Form.Field>
                                    </Header>
                                    <Segment attached color='black'>
                                        <Form.Field>
                                            <label>Departman Adı</label>
                                            <input placeholder='Departman Adı' />
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
                                                <Checkbox label='İşten Ayrıldım' defaultChecked />
                                            </Form.Field>
                                            <Form.Field>
                                                <Checkbox style={{ marginLeft: '1em' }} label='Devam ediyorum' />
                                            </Form.Field>
                                        </Form.Group>
                                    </Segment>
                                </Segment.Group>
                            </Segment>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='red' inverted onClick={() => setOpenExperience(false)}>
                            <Icon name='remove' /> Kapat
                        </Button>
                        <Button color='green' inverted onClick={() => setOpenExperience(false)}>
                            <Icon name='checkmark' /> Kaydet
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Segment>
            <Segment style={{ backgroundColor: 'rgb(28, 27, 27)' }}>
                <Header style={{ color: 'white' }} as='h5' >
                    Bildiği Diller
                </Header>
                <Segment.Group horizontal>
                    <Segment>
                        <Header as='h4'>
                            <Icon name='language'></Icon>
                            İngilizce
                        </Header>
                    </Segment>
                    <Segment>
                        <Header as='h4'>
                            Seviye:
                            <Rating style={{
                                marginLeft: '1em'
                            }} size='large' icon='star' defaultRating={5} maxRating={5} />
                        </Header>
                    </Segment>
                </Segment.Group>
                <Modal
                    basic
                    onClose={() => setOpenLanguage(false)}
                    onOpen={() => setOpenLanguage(true)}
                    open={openLanguage}
                    size='small'
                    trigger={<Button primary icon>Ekle</Button>}
                >
                    <Header icon>
                        <Icon name='archive' />
                        DİL EKLE
                    </Header>
                    <Modal.Content>
                        <Form>
                            <Segment.Group horizontal>
                                <Segment>
                                    <Form.Field>
                                        <Header as='h4'>Dil:
                                            <Dropdown style={{
                                                marginLeft: '1em'
                                            }}
                                                placeholder='Dil seçiniz' search selection />
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
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='red' inverted onClick={() => setOpenLanguage(false)}>
                            <Icon name='remove' /> Kapat
                        </Button>
                        <Button color='green' inverted onClick={() => setOpenLanguage(false)}>
                            <Icon name='checkmark' /> Kaydet
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Segment>
            <Segment style={{ backgroundColor: 'rgb(28, 27, 27)' }}>
                <Header style={{ color: 'white' }} as='h5' >
                    Sosyal Medya Hesapları
                </Header>
                <Segment.Group horizontal>
                    <Segment>
                        <Header as='h4'>
                            <Icon name='github' />
                            GITHUB
                        </Header>
                    </Segment>
                    <Segment>
                        <Header as='h4'>
                            www.github.com
                        </Header>
                    </Segment>
                </Segment.Group>
                <Segment.Group horizontal>
                    <Segment>
                        <Header as='h4'>
                            <Icon name='linkedin' />
                            LINKEDIN
                        </Header>
                    </Segment>
                    <Segment>
                        <Header as='h4'>
                            www.linkedin.com
                        </Header>
                    </Segment>
                </Segment.Group>
                <Modal
                    basic
                    onClose={() => setOpenSocial(false)}
                    onOpen={() => setOpenSocial(true)}
                    open={openSocial}
                    size='small'
                    trigger={<Button primary icon>Ekle</Button>}
                >
                    <Header icon>
                        <Icon name='archive' />
                        SOSYAL MEDYA HESABI EKLE
                    </Header>
                    <Modal.Content>
                        <Form>
                            <Segment.Group horizontal>
                                <Segment>
                                    <Segment style={{ marginTop: '1em' }}>
                                        <Header as='h4'>Platform:
                                            <Dropdown style={{
                                                marginLeft: '1em'
                                            }}
                                                placeholder='Platform seçiniz' search selection />
                                        </Header>
                                    </Segment>
                                </Segment>
                                <Segment>
                                    <Segment>
                                        <Header as='h4'>Link:</Header>
                                        <input placeholder='url'></input>
                                    </Segment>
                                </Segment>
                            </Segment.Group>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='red' inverted onClick={() => setOpenSocial(false)}>
                            <Icon name='remove' /> Kapat
                        </Button>
                        <Button color='green' inverted onClick={() => setOpenSocial(false)}>
                            <Icon name='checkmark' /> Kaydet
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Segment>
        </div>
    )
}
