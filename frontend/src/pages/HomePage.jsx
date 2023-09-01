import "../index.css"
import "../css/Home.css"

import { Box, Button, Container, Typography } from "@mui/material"
import { Icon } from "react-icons-kit"
import {logIn} from 'react-icons-kit/ionicons/logIn'
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <Container maxWidth="xl" sx={{
            width: '100%',
            height: '100vh',
            maxWidth: '1440px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'radial-gradient(circle, rgba(48,48,48,1) 0%, rgba(17,17,17,1) 85%)'
    }}>
        <Box width={'60%'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Typography id="home-title" typography={'h1'} fontSize={'2.2rem'} textAlign={'center'} marginBottom={'.5rem'} color={'#fff'}>
                <span></span>
                Hola! Mi nombre es Felipe Weigel Muñoz
            </Typography>
            <Typography id="home-subtitle" typography={'h3'} padding={'0 20px'} fontWeight={'500'} marginBottom={'1rem'} fontSize={'1.23rem'} color={'rgba(255,255,255,0.6)'} textAlign={'center'}>
                <span>Estudiante universitario para Técnico en Desarrollo de aplicaciones Web y desarrollador Fullstack autodidacta.</span>
            </Typography>
            <Typography id="home-portfolio" typography={'p'} color={'#fff'} marginBottom={'.4rem'} fontSize={'1.2rem'}>Ver portafolio</Typography>
            
            <Link to="/navigate">
              <Button id="home-btn" sx={{
                overflow: 'hidden',
                borderRadius: '50%',
                height: '52px',
                transition: 'all .7s',
                color: '#fff',
                background: 'transparent',
                border: '.5px solid rgba(255,255,255,0.2)',
                ":hover": {
                  color: 'rgb(0,0,0)',
                  background: '#fff',
                }
              }}><Icon icon={logIn} size={30}></Icon></Button>
            </Link>
        </Box>
    </Container>
  )
}

export default HomePage