import "../index.css"
import "../css/Skills.css"
import SkillsItem from "./SkillIsItem"
import SkillsBar from "./SkillsBar"

import { Box, Container, List, Typography } from "@mui/material"
import Icon from "react-icons-kit"
import {aperture} from 'react-icons-kit/iconic/aperture'


const DevToolsSkills = () => {
  return (
    <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '115vh',
        gap: '.8rem',
        padding: '1rem 2rem 0 2rem'
    }}>
        <Box display={'flex'} gap={'1.5rem'} width={'100%'} height={'100%'}>
            <Box display={'flex'} flexDirection={'column'} gap={'.7rem'} width={'53%'}>
                <Box>
                    <Typography 
                        typography={'h5'} fontSize={'1.4rem'} 
                        color={'rgba(255,255,255,0.9)'} width={'100%'} paddingBottom={'7px'}
                        borderBottom={'.5px solid rgba(255,255,255,0.7)'}
                    >Lenguajes y tecnologías</Typography>
                    <List>
                        <SkillsItem skill='Git' percentage='95%'/>
                        <SkillsItem skill='Postman' percentage='85%'/>
                        <SkillsItem skill='IntelliJ' percentage='90%' />
                        <SkillsItem skill='AWS S3' percentage='80%' />
                        <SkillsItem skill='Amazon ECS' percentage='70%' />
                        <SkillsItem skill='Docker' percentage='67%'/>
                        <SkillsItem skill='VS Code' percentage='90%' />
                    </List>
                </Box>
                
                <Box>
                    <Typography display={'inline-block'} padding={'2px 0'} marginBottom={'.3rem'} borderBottom={'.5px solid rgba(255,255,255,.6)'} typography={'h4'} fontSize={'1.3rem'} color={'#fff'}>
                        Fuentes de aprendizaje:
                    </Typography>
                    <Typography typography={'p'} color={'rgba(255,255,255, .7)'}>
                        La gran mayoría de estas herramientas las aprendí por mi cuenta a lo largo de mí aprendizaje general leyendo documentación oficial, tutoriales y cursos de diversas fuentes por cuestiones de necesidad, preferencia u optimización/mejora en el desarrollo de mis aplicaciones. Otras, como Git, también las utilizo constantemente en la universidad.      
                    </Typography>
                </Box>
           </Box>

           <Box sx={{
            height: '100%',
            width: '.5px',
            background: 'rgba(255,255,255,.5)'
           }}></Box>

           <Box width={'45%'} height={'100%'}>
                <Typography 
                    typography={'h5'} fontSize={'1.4rem'} 
                    paddingBottom={'8px'}
                    color={'#fff'} borderBottom={'.5px solid rgba(255,255,255,0.7)'}>
                    Stack detallado de herramientas y habilidades
                </Typography>
                <Box 
                    display={'flex'} 
                    height={'40%'} 
                    justifyContent={'center'}
                    padding={'1rem 0'}
                    borderBottom={'.5px solid rgba(255,255,255,0.7)'}
                    marginBottom={'.5rem'}
                >
                    <SkillsBar percentage="90%" skill="Git/Github"/> 
                    <SkillsBar percentage="85%" skill='S3 Buckets'/>
                    <SkillsBar percentage="70%" skill="Docker Containers"/>
                    <SkillsBar percentage="75%" skill='AWS ECS'/>
                </Box>
                <Box paddingBottom={'10px'} marginBottom={'.3rem'} display={'flex'} flexDirection={'column'} rowGap={'.3rem'}>
                    
                    <Typography typography={'p'} color={'rgba(255,255,255,.7)'} >
                        <Icon className="list-item-icon" icon={aperture} size={6}></Icon>
                        <strong className="strong-text">Git/Github: </strong>Sistema de control de versiones y proveedor de alojamiento de repositorios que utilizo con el fin de almacenar el código e implementar nuevas versiones de mis proyectos.
                    </Typography>
                    <Typography typography={'p'} color={'rgba(255,255,255,.7)'} >
                        <Icon className="list-item-icon" icon={aperture} size={6}></Icon>
                        <strong className="strong-text">S3 Buckets: </strong>Servicio de Amazon Web Services para el almacenamiento de archivos en la nube.
                    </Typography>
                    <Typography typography={'p'} color={'rgba(255,255,255,.7)'} >
                        <Icon className="list-item-icon" icon={aperture} size={6}></Icon>
                        <strong className="strong-text">Docker: </strong>Mi uso de esta plataforma radica en la necesidad de empaquetar el software de mis aplicaciones en contenedores que puedan ser ejecutados correcta y rápidamente en cualquier entorno.
                    </Typography>
                    <Typography typography={'p'} color={'rgba(255,255,255,.7)'} >
                        <Icon className="list-item-icon" icon={aperture} size={6}></Icon>
                        <strong className="strong-text">Amazon ECS(Elastic Container Service): </strong>Servicio AWS que me facilita la implementación, administración y escalado de mis aplicaciones basadas en contenedores Docker.
                    </Typography>
                </Box>
                
                
           </Box>
        </Box>
    </Container>
  )
}

export default DevToolsSkills