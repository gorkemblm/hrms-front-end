import React from 'react'
import { Menu, Grid, Icon, Label, Image} from 'semantic-ui-react'
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
                                name='messages'
                            >
                                Bildirimler
                                <Label color='red'><Icon name='filter'></Icon>12</Label>
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
                        {/* <CurriculumVitaeAdd/> */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div >
    )
};

