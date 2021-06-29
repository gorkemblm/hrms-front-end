import React, { useState, useEffect } from 'react'
import { Button, Icon, Segment, Header, Rating, Modal, Form } from 'semantic-ui-react'
import AddCoverLetter from './CurriculumVitae/AddCoverLetter'
import AddSchool from './CurriculumVitae/AddSchool'
import AddWorkExperience from './CurriculumVitae/AddWorkExperience'
import AddLanguage from './CurriculumVitae/AddLanguage'
import AddSocialMedia from './CurriculumVitae/AddSocialMedia'

export default function CurriculumVitaeAdd() {

    const [openResume, setOpenResume] = React.useState(false)
    const [openSchool, setOpenSchool] = React.useState(false)
    const [openExperience, setOpenExperience] = React.useState(false)
    const [openLanguage, setOpenLanguage] = React.useState(false)
    const [openGithub, setOpenGithub] = React.useState(false)
    const [openLinkedin, setOpenLinkedin] = React.useState(false)


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
                    trigger={<Button icon primary>Güncelle</Button>}
                >
                    <Header icon>
                        <Icon name='archive' />
                        ÖZ GEÇMİŞ
                    </Header>
                    <Modal.Content>
                        <AddCoverLetter />
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
                        <AddSchool />
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
                        <AddWorkExperience />
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
                        <AddLanguage />
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
                    <Modal
                        basic
                        onClose={() => setOpenGithub(false)}
                        onOpen={() => setOpenGithub(true)}
                        open={openGithub}
                        size='small'
                        trigger={<Button size='mini' primary icon>Düzenle</Button>}
                    >
                        <Header icon>
                            <Icon name='archive' />
                            SOSYAL MEDYA HESABI EKLE
                        </Header>
                        <Modal.Content>
                            <AddSocialMedia />
                        </Modal.Content>
                        <Modal.Actions>
                            <Button basic color='red' inverted onClick={() => setOpenGithub(false)}>
                                <Icon name='remove' /> Kapat
                            </Button>
                            <Button color='green' inverted onClick={() => setOpenGithub(false)}>
                                <Icon name='checkmark' /> Kaydet
                            </Button>
                        </Modal.Actions>
                    </Modal>
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
                    <Modal
                        basic
                        onClose={() => setOpenLinkedin(false)}
                        onOpen={() => setOpenLinkedin(true)}
                        open={openLinkedin}
                        size='small'
                        trigger={<Button size='mini' primary icon>Düzenle</Button>}
                    >
                        <Header icon>
                            <Icon name='archive' />
                            SOSYAL MEDYA HESABI EKLE
                        </Header>
                        <Modal.Content>
                            <Form>
                                <Segment.Group horizontal>
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
                            <Button basic color='red' inverted onClick={() => setOpenLinkedin(false)}>
                                <Icon name='remove' /> Kapat
                            </Button>
                            <Button color='green' inverted onClick={() => setOpenLinkedin(false)}>
                                <Icon name='checkmark' /> Kaydet
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </Segment.Group>
            </Segment>
        </div >
    )
}
