import React from 'react'
import { Menu, Grid, Button, Header, Icon, Segment, Image, Label, Modal, Form, TextArea } from 'semantic-ui-react'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import JobAdvertisementAdd from './JobAdvertisementAdd'

export default function EmployerProfile() {



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
                                İlanlarım
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
                        {/* <JobAdvertisementAdd /> */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div >
    )
}
