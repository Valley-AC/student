import React from 'react'
import { Button, Container, Dropdown, DropdownButton, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../../assets/logo.png'
import { useTranslation } from 'react-i18next'
import langIcon from '../../assets/language.png'
const Header = () => {
  const { t, i18n } = useTranslation()
  return (
    <div>
        <Navbar   style={{
          backgroundImage: 'linear-gradient(to right, #FCB813 , #404041)'
        }} bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> contact@valleyac-consulting.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
          </Nav>
          <img alt='language' width={30} style = {{margin:5}} src={langIcon}></img>
         
          <Form.Select 
          className="d-flex"
      onChange={(e) => {
        i18n.changeLanguage(e.target.value)
      }}
      style = {{width:"10%",backgroundColor:"#D9D9D9",border:"1px solid #FCB813"}} size="sm">
        <option >Langues</option>
        <option value='ar'>AR</option>
        <option value='fr'>FR </option>
        <option value='en'>EN</option>
      </Form.Select>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
   

      <Navbar
        style={{ height: '100px', backgroundColor: '#D9D9D9' }}
        expand='lg'
      >
        <Container fluid>
          <Navbar.Brand href='/'>
            <img src={logo} width='250px' alt='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto  my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href='/'>{t('nav1')}</Nav.Link>
              <NavDropdown
                title={t('nav2')}
                id='navbarScrollingDropdown'
              >
                <NavDropdown.Item href='/Coaching'>
                {t('sub_nav2')}
                </NavDropdown.Item>
                <NavDropdown.Item href='/soft'>
                {t('sub_nav2_A')}
                </NavDropdown.Item>
                <NavDropdown.Item href='/hard'>
                {t('sub_nav2_B')}
                </NavDropdown.Item>
                <NavDropdown.Item href='/métiers'>
                {t('sub_nav2_C')}
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t('nav3')} id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#action3'>
                {t('sub_nav3_A')}
                </NavDropdown.Item>
                <NavDropdown.Item href='#action4'>
                {t('sub_nav3_B')}
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t('nav4')}id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#action3'>
                {t('sub_nav4_A')}
                </NavDropdown.Item>
                <NavDropdown.Item href='#action4'>
                {t('sub_nav4_B')}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#'>{t('nav5')}</Nav.Link>
            </Nav>

            <Button variant='outline-dark'>{t('auth')}</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
