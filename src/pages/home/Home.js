import React from 'react'
import Slider from '../../components/slider/Slider'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'

import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import Typography from '@mui/material/Typography'
import ExcCourses from '../../components/exclusivity/ExcCourses'
import quality from '../../assets/quality.png'
import online from '../../assets/online.png'
import goals from '../../assets/goals.jpg'

import './Home.css'

import { useTranslation } from 'react-i18next'
import Footer from '../../components/footer/Footer'
const Home = () => {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <Slider />
      <ExcCourses />
      <Timeline style={{ padding: '8%' }} position='alternate'>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ backgroundColor: 'white' }}>
              {/* <CastForEducationIcon /> */}
              <img alt='online' width={150} height={150} src={online} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '18px', px: 2 }}>
            <Typography variant='h6' component='span'>
              En ligne
            </Typography>
            <Typography>
              Nos formation sont accessibles en format e-book et Audio, à vie
              sans aucune limite de temps, à votre rythme 24h depuis votre
              ordinateur, tablette, mobile
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ backgroundColor: 'white' }} color='primary'>
              {/* <PublishedWithChangesIcon /> */}
              <img
                alt='goals'
                style={{ borderRadius: '100%' }}
                width={150}
                src={goals}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '18px', px: 2 }}>
            <Typography variant='h6' component='span'>
              Objectifs
            </Typography>
            <Typography>
              Satisfaire nos étudiants, professionnels, chercheurs d’emploi par
              nos formations de qualité
              <br />
              Assurer un accompagnement, un conseil en ligne
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ backgroundColor: 'white' }}>
              {/* <VerifiedIcon /> */}
              <img
                alt='quality'
                style={{ borderRadius: '100%' }}
                width={150}
                src={quality}
              />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '18px', px: 2 }}>
            <Typography variant='h6' component='span'>
              Formations de qualités
            </Typography>
            <Typography>
              Nos formations sont certifiées, reconnues par L’Etat Tunisien et
              des Organismes Internationaux
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color='secondary'>
              <AccessibilityNewIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '18px', px: 2 }}>
            <Typography variant='h6' component='span'>
              Bienvenue
            </Typography>
            <Typography>Commencez votre formation</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <Footer />
    </div>
  )
}

export default Home
