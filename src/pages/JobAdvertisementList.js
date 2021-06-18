import React, { useState, useEffect } from 'react';
import '../App.css';
import '../pages/jobAdvertisement.css'
import { Item, Label, Container, Icon } from 'semantic-ui-react'
import { Pagination } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService';

export default function JobAdvertisementList() {

  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();

    jobAdvertisementService.getJobAdvertisements().then(result => setJobAdvertisements(result.data.data))
  }, [])



  return <div className='jobAdvertisements'>

    <Container className='jobAdvertisement'>
      <Item.Group divided>
        {
          jobAdvertisements.map((jobAdvertisement) => (
            <Item key={jobAdvertisement.id}>
              <Item.Image className='corporateImage' size='small' src='https://res.cloudinary.com/gorkemblm/image/upload/v1623418004/file_lul3m6.jpg' />
              <Item.Content>
                <div>
                  <Item.Header><h1 className='companyName'>{jobAdvertisement.employer.companyName}</h1></Item.Header><br />
                </div>

                <Item.Header as='a'><h3 className='occupationName'>{jobAdvertisement.occupation.occupationName}</h3></Item.Header>
                <Item.Meta>
                  <span>Tam Zamanlı</span> / <span>Remote</span>
                </Item.Meta>
                <Item.Description>
                  {jobAdvertisement.jobDescription}
                </Item.Description>
                <Item.Extra>
                  <Label>
                    <Icon name='map marker' />{jobAdvertisement.city.cityName}</Label><br />
                  <Label>Spring Boot</Label>
                  <Label>Java</Label>
                  <Label>SOLID</Label>
                  <Label>İngilizce</Label><br />
                  <Label as='a' basic color='red' >Son Başvuru Tarihi : {jobAdvertisement.applicationDeadline}</Label>
                  <Label as='a' basic color='green'>Yayınlanma Tarihi : {jobAdvertisement.updatedDate}</Label><br />
                  <Label as='a' basic color='black'>
                    Başvuru Sayısı
                    <Label.Detail>{jobAdvertisement.numberOfApplication}</Label.Detail>
                  </Label>
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
      </Item.Group>
    </Container>
    <Container>
      <div className='pagination'>
        <Pagination defaultActivePage={3} totalPages={10} />
      </div>
    </Container>
  </div>;

}
