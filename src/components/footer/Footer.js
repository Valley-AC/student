import React from 'react'
import { CDBBox, CDBBtn, CDBBtnGrp, CDBInput, CDBModalFooter } from 'cdbreact'
import logo from '../../assets/logo.png'
import { useTranslation } from 'react-i18next'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineLinkedin
} from 'react-icons/ai'

const Footer = () => {
  const { t, i18n } = useTranslation()

  return (
    <CDBModalFooter style={{ backgroundColor: 'whitesmoke' }} className='shadow'>
      <CDBBox
        display='flex'
        alignItems='center'
        className='mx-auto py-2 '
        style={{ width: '100%' }}
      >
        <CDBBox alignItems='center' style={{ width: '70%', padding: 30 }}>
          <a href='/' className='d-flex align-items-center p-0 text-dark'>
            <img alt='logo' src={logo} width='40%' />
          </a>
          <CDBBox marginTop='50px'>
            <p style={{ fontSize: 20 }}>{t('footer_desc')}</p>
            <p>Email:</p>
            <a href='www.gmail.com'>Contact.valleyac@gmail.com </a>
          </CDBBox>
        </CDBBox>
        <CDBBox style={{ width: '30%', padding: 20 }} alignItems='center'>
          <CDBBox>
            <p style={{ fontSize: 20 }}>Rechercher une formation </p>
            <CDBInput
              placeholder='Rechercher des cours'
              background
              color='dark'
            />
          </CDBBox>
          <CDBBox
            display='flex'
            style={{ flexDirection: 'column', fontSize: 18 }}
          >
            <a>Contact</a> <br />
            <a>Politique de confidentialité</a> <br />
            <a> Conditions Générales de Ventes</a> <br />
            <a>Vendre nos Formations</a> <br />
            <a>Proposer vos Formations en ligne</a> <br />
            <a>Mentions Légales</a> <br />
            <a>VALLEY AC Consulting & Training Avis</a> <br />
          </CDBBox>
        </CDBBox>
      </CDBBox>

      <CDBBox
        display='flex'
        alignItems='center'
        className='d-flex align-items-center p-0'
        style={{ width: '50%' }}
      >
        <AiFillFacebook
          style={{
            width: '50px',
            height: '50px',
            margin: 20,
            color: '#191970'
          }}
        />
        <AiFillInstagram
          style={{
            width: '50px',
            height: '50px',
            margin: 20,
            color: '#b82010'
          }}
        />
        <AiOutlineLinkedin
          style={{
            width: '50px',
            height: '50px',
            margin: 20,
            color: '	#4682B4'
          }}
        />
      </CDBBox>
    </CDBModalFooter>
  )
}

export default Footer
