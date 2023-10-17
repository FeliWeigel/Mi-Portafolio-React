import "../index.css"
import "../css/About.css"

import { Box, Typography } from "@mui/material"
import profileImg from "../assets/about-img1.jpg"

import Icon from "react-icons-kit"
import {github} from 'react-icons-kit/icomoon/github'
import {linkedin} from 'react-icons-kit/icomoon/linkedin'
import {mail4} from 'react-icons-kit/icomoon/mail4'
import {newTab} from 'react-icons-kit/icomoon/newTab'
import {location} from 'react-icons-kit/entypo/location'
import {university} from 'react-icons-kit/fa/university'
import { Link } from "react-router-dom"

const AboutPage = () => {
  return (
    <Box sx={{
        width: '100%',
        height: 'auto',
        minHeight: '100vh',
        padding: '3rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.87)',
    }}>
        
        <Box width={'92%'} display={'flex'} columnGap={'2rem'}>
            <Box width={'36%'} height={'86vh'} padding={'2rem 0'} borderRight={'.5px solid rgba(255,255,255, .2)'}>
                <Box width={'60%'} textAlign={'center'} position={'relative'}> 
                    <Box 
                        width={'100px'} 
                        height={'150px'} 
                        top={'-1.3rem'} 
                        left={'0'} 
                        borderTop={'1px solid rgba(255,255,255,0.9)'} 
                        borderLeft={'1px solid rgba(255,255,255,0.9)'} 
                        position={'absolute'}
                    >
                    </Box>
                    <Box 
                        width={'80px'} 
                        height={'90px'} 
                        top={'-2.4rem'} 
                        left={'-1.3rem'} 
                        borderTop={'1px solid rgba(255,255,255,0.4)'} 
                        borderLeft={'1px solid rgba(255,255,255,0.4)'} 
                        position={'absolute'}
                    >
                    </Box>        
                    <img className="profile-img" src={profileImg}></img> 
                    <Box 
                        width={'100px'} 
                        height={'150px'} 
                        bottom={'-1.3rem'} 
                        right={'0'} 
                        borderBottom={'1px solid rgba(255,255,255,0.9)'} 
                        borderRight={'1px solid rgba(255,255,255,0.9)'} 
                        position={'absolute'}
                    >
                    </Box>
                    <Box 
                        width={'80px'} 
                        height={'90px'} 
                        bottom={'-2.4rem'} 
                        right={'-1.3rem'} 
                        borderBottom={'1px solid rgba(255,255,255,0.4)'} 
                        borderRight={'1px solid rgba(255,255,255,0.4)'} 
                        position={'absolute'}
                    >
                    </Box>
                </Box>
                
                <Box marginTop={'3.5rem'} display={'flex'} flexDirection={'column'} rowGap={'.5rem'}>
                    <Box display={'flex'} alignItems={'center'} color={'#fff'} gap={'.5rem'}>
                        <Icon className="about-link-icon" size={19} icon={github}></Icon>
                        <Typography typography={'p'} color={'rgb(255,255,255,0.7)'} marginRight={'.3rem'} fontSize={'1.15rem'}>FeliWeigel</Typography>
                        <Link to="https://github.com/FeliWeigel" target="_blank" className="about-link">
                            <Icon icon={newTab} size={15}></Icon>
                        </Link>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} color={'#fff'} gap={'.5rem'}>
                        <Icon className="about-link-icon" size={18} icon={linkedin}></Icon>
                        <Typography typography={'p'} color={'rgb(255,255,255,0.7)'} marginRight={'.3rem'} fontSize={'1.15rem'}>Felipe Weigel</Typography>
                        <Link to="https://www.linkedin.com/in/felipe-weigel-006614214/" target="_blank" className="about-link">
                            <Icon icon={newTab} size={15}></Icon>
                        </Link>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} color={'#fff'} gap={'.5rem'}>
                        <Icon className="about-link-icon" size={20} icon={mail4}></Icon>
                        <Typography typography={'p'} color={'rgb(255,255,255,0.7)'} marginRight={'.3rem'} fontSize={'1.15rem'}>fweigel24@gmail.com</Typography>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} color={'#fff'} gap={'.5rem'}>
                        <Icon className="about-link-icon" size={20} icon={location}></Icon>
                        <Typography typography={'p'} color={'rgb(255,255,255,0.7)'} marginRight={'.3rem'} fontSize={'1.15rem'}>Ituzaingó, Buenos Aires, Argentina.</Typography>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} color={'#fff'} gap={'.5rem'}>
                        <Icon className="about-link-icon" size={20} icon={university}></Icon>
                        <Typography typography={'p'} color={'rgb(255,255,255,0.7)'} marginRight={'.3rem'} fontSize={'1.15rem'}>Universidad Nacional de La Matanza</Typography>
                        <Link to="https://www.unlam.edu.ar/" target="_blank" className="about-link">
                            <Icon icon={newTab} size={15}></Icon>
                        </Link>
                    </Box>
                </Box>
            </Box>

            <Box width={'60%'}>
                <Box>
                    <Typography 
                        typography={'h4'} fontSize={'1.7rem'} width={'100%'}
                        color={'rgba(255,255,255, .9)'} paddingBottom={'.2rem'}
                        borderBottom={'.5px solid rgba(255,255,255, .35)'} marginBottom={'.4rem'}
                    >Datos personales</Typography>
                    <Typography typography={'p'} color={'rgba(255,255,255, .50)'} fontSize={'1.05rem'} marginBottom={'.4rem'}>
                        Tengo 20 años y actualmente resido en Ituzaingó, provincia de Buenos Aires.
                        <br></br>Soy estudiante de la carrera para Técnico en desarrollo de aplicaciones Web de la UNLAM (segundo año) y desarrollador Web Fullstack autodidacta, capacitándome a través de numerosos cursos, bootcamps, tutoriales, libros, documentación oficial y demás contenido que se puede encontrar en internet.
                        <br></br>Lo que mas me apasiona y motiva de la disciplina en el día a día es lo desafiante y dinámica que es, ya que te obliga a estar en constante aprendizaje para no quedarte atrás conforme evoluciona a muy alto ritmo. 
                        <br></br>En cuanto a mi, los principales rasgos que considero que me caracterizan son: disciplina, responsabilidad, liderazgo y capacidad de adaptabilidad. Soy sumamente detallista y trabajo bajo el lema de que lo que comienza, siempre se debe finalizar en el tiempo y de la forma establecida y/o esperada. 
                        Me encanta asumir nuevos desafíos y trabajar en equipo, enfrentarme a proyectos grandes y aprender de los demás.
                    </Typography>

                    <Typography 
                        typography={'h4'} fontSize={'1.7rem'} width={'100%'}
                        color={'rgba(255,255,255, .9)'} paddingBottom={'.2rem'}
                        borderBottom={'.5px solid rgba(255,255,255, .35)'} marginBottom={'.4rem'}
                    >Perfil técnico</Typography>
                    <Typography typography={'p'} color={'rgba(255,255,255, .50)'} fontSize={'1.05rem'}>
                        Mi stack de tecnologías utilizado para crear aplicaciones web SPA (Single Page Aplication) dinámicas, seguras y optimizadas es: Java(Spring), Javascript(React Js.), SQL(MySQL, PostgreSQL), Material UI, Amazon Web Services y Docker(sobre estas últimas dos, actualmente me encuentro en progreso de aprendizaje).
                    </Typography>
                </Box>
            </Box>

            
        </Box>
    </Box>
  )
}

export default AboutPage