import "../index.css"
import "../css/Navigation.css"
import { Link } from "react-router-dom"

import myProjectsSvg from "../assets/myprojects.svg"
import mySkillsSvg from "../assets/myskills.svg"
import mySkillsSvg2 from "../assets/myskills2.svg"
import aboutSvg from "../assets/about.svg"
import aboutSvg2 from "../assets/about2.svg"

import { Box, Typography } from "@mui/material"

const NavigationPage = () => {
  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      background: 'rgba(0,0,0,0.7)'
    }}>
      <Box overflow={'hidden'} width={'100%'} height={"100vh"} display={'flex'} >
        
        <Link to="/navigate/skills" className="skills-link">
          <Box sx={{
            width: '95%',
            height: '95%',
            transition: '.4s',
            position: 'relative',
            ":hover": {
              transform: 'scale(1.02)'
            }
          }}>
            <Typography 
              typography={'h5'} 
              color={'#fff'} fontSize={'1.7rem'}
              position={'absolute'} 
              top={'.5rem'} left={'2rem'}
              sx={{
                ":before": {
                  content: "''",
                  position: "absolute",
                  bottom: '0',
                  width: '30px',
                  height: '2px',
                  backgroundColor: '#fff'
                }
            }}>Habilidades Tecnicas</Typography>
            
            <img className="skills-1" src={mySkillsSvg} alt="skills illustration"/>
            <img className="skills-2" src={mySkillsSvg2} alt="skills illustration"/>
          </Box>
        </Link>      

        <Box width={'45%'} display={'flex'} flexDirection={'column'} sx={{zIndex: '1000'}}>
          <Link className="projects-link" to="/navigate/projects">
            <Box sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              transition: '.4s',
              ":hover": {
                transform: 'scale(1.025)'
              }
            }}> 
              <Typography 
                typography={'h5'} 
                color={'#fff'} fontSize={'1.4rem'}
                position={'absolute'} 
                top={'1rem'} left={'2.3rem'}
                sx={{
                  ":before": {
                    content: "''",
                    position: "absolute",
                    bottom: '0',
                    width: '20px',
                    height: '1.5px',
                    backgroundColor: '#fff'
                  }
              }}>Mis proyectos</Typography>
              <img src={myProjectsSvg} alt="projects illustration"/>
            </Box>
          </Link>
          <Link className="about-link" to="/navigate/about">
            <Box sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              gap: '.2',
              transition: '.4s',
              ":hover": {
                transform: 'scale(1.025)'
              }
            }}> 
              <Typography 
                typography={'h5'} 
                color={'#fff'} fontSize={'1.4rem'}
                position={'absolute'} 
                top={'1rem'} left={'2.3rem'}
                sx={{
                  ":before": {
                    content: "''",
                    position: "absolute",
                    bottom: '0',
                    width: '20px',
                    height: '2px',
                    backgroundColor: '#fff'
                  }
              }}>Sobre mi</Typography>
              
              <img src={aboutSvg2} alt="about me illustration"/>
              <img src={aboutSvg} alt="about me illustration"/>
            </Box>
          </Link>
        </Box>

      </Box>
    </Box>
  )
}

export default NavigationPage