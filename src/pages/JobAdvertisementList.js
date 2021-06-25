import React, { useState, useEffect } from 'react';
import '../App.css';
import '../pages/jobAdvertisement.css'
import { Button, Icon, Image, Item, Label, Grid, Segment, Container } from 'semantic-ui-react'
import { Pagination } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService';

export default function JobAdvertisementList() {

  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();

    jobAdvertisementService.getJobAdvertisements().then(result => setJobAdvertisements(result.data.data))
  }, [])

  const paragraph = <Image src='https://res.cloudinary.com/gorkemblm/image/upload/v1623418004/file_lul3m6.jpg' />

  return (
    <div className='jobAdvertisements'>


      {/*<Container>
          <div className='pagination'>
            <Pagination defaultActivePage={3} totalPages={10} />
          </div>
        </Container>
      </Container> */}

      <Grid>
        <Grid.Row>

        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
          </Grid.Column>
          <Grid.Column width={12}>
            {
              jobAdvertisements.map((jobAdvertisement) => (
                <Segment raised stacked textAlign='left' color='black'>
                  <Item.Group>
                    <Item>
                      <Item.Image src='https://res.cloudinary.com/gorkemblm/image/upload/v1623418004/file_lul3m6.jpg' />
                      <Item.Content>
                        <Item.Header as='a'>
                          Bilgisayar Mühendisi
                        </Item.Header>
                        <Item.Meta>
                          <span className='cinema'>Facebook</span>
                        </Item.Meta>
                        <Item>
                          <Item.Description><p>Bilgisayar mühendisliği temel olarak yazılım, programlama ve algoritma ile ilgilenir. Bilgisayar ağları, veri tabanı yöneticiliği ve gömülü sistemler de diğer çalışma alanlarıdır. Bilgisayar mühendisleri, programlama dilleri, yazılım tasarımı ve yazılım - donanım tümleştirmesi eğitimi alırlar.</p></Item.Description>
                        </Item>
                        <Item.Extra>
                          <Label as='a' basic color='blue'>
                            <Icon name='map marker' />Edirne</Label><br />
                          <Label as='a' basic color='black'>Yarı Zamanlı</Label>
                          <Label as='a' basic color='black'>İş Yerinde</Label><br />
                          <Label as='a' basic color='red' >Son Başvuru Tarihi : 123</Label>
                          <Label as='a' basic color='green'>Yayınlanma Tarihi : 2012-12-12</Label><br />
                          <Label as='a' basic color='black'>
                            Başvuru Sayısı
                            <Label.Detail>956</Label.Detail>
                          </Label><br />
                          <Label>Spring Boot</Label>
                          <Label>Java</Label>
                          <Label>SOLID</Label>
                          <Label>İngilizce</Label>
                          <Button primary floated='right'>
                            Başvur
                            <Icon name='right chevron' />
                          </Button>
                        </Item.Extra>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              ))
            }
          </Grid.Column>
          <Grid.Column width={2}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
