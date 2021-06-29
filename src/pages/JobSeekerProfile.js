import React from 'react'
import { Route } from 'react-router'
import { Menu, Grid, Icon, Label, Image } from 'semantic-ui-react'
import CurriculumVitaeAdd from './CurriculumVitaeAdd'

export default function JobSeekerProfile() {


    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Menu vertical inverted fixed>
                            <Menu.Item>
                                <Image circular spaced="right" src="https://res.cloudinary.com/gorkemblm/image/upload/v1623418067/file_oslkvg.jpg" />
                            </Menu.Item>
                            <Menu.Item
                                name='photo'
                            >
                                Fotoğraf Değiştir
                                <Icon name='edit'></Icon>
                            </Menu.Item>
                            <Menu.Item
                                name='messages'
                            >
                                Cv Oluştur
                                <Icon name='paperclip'></Icon> 
                            </Menu.Item>
                            <Menu.Item
                                name='messages'
                            >
                                Güvenlik
                                <Icon name='setting'></Icon>
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        {/* <Route  path='/curriculumVitaeAdd' component={CurriculumVitaeAdd} /> */}
                        <CurriculumVitaeAdd />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div >
    )
};

