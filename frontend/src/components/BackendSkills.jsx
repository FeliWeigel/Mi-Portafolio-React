/* eslint-disable react/jsx-no-target-blank */
import "../index.css"
import "../css/Skills.css"
import SkillsItem from "./SkillIsItem"
import SkillsBar from "./SkillsBar"

import { Box, Container, List, Typography } from "@mui/material"
import Icon from "react-icons-kit"
import {aperture} from 'react-icons-kit/iconic/aperture'
import {coffee} from 'react-icons-kit/ionicons/coffee'
import {leaf} from 'react-icons-kit/entypo/leaf'
import {arrowRight2} from 'react-icons-kit/icomoon/arrowRight2'
import { Link } from "react-router-dom"

const BackendSkills = () => {
  return (
    <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '246vh',
        gap: '.8rem',
        padding: '1rem 2rem'
    }}>
        <Box display={'flex'} gap={'1.5rem'} width={'100%'} height={'100%'} borderBottom={'.5px solid rgba(255,255,255,0.7)'}>
            <Box display={'flex'} flexDirection={'column'} gap={'.7rem'} width={'53%'}>
                <Box>
                    <Typography 
                        typography={'h5'} fontSize={'1.4rem'} 
                        color={'rgba(255,255,255,0.9)'} width={'100%'} paddingBottom={'7px'}
                        borderBottom={'.5px solid rgba(255,255,255,0.7)'}
                    >Lenguajes y tecnologías</Typography>
                    <List>
                        <SkillsItem skill='Java' percentage='95%'/>
                        <SkillsItem skill='Spring Framework' percentage='90%'/>
                        <SkillsItem skill='Amazon Web Services' percentage='60%'/>
                        <SkillsItem skill='JUnit Testing' percentage='75%' />
                    </List>
                </Box>
                <Box>
                    <Typography 
                        typography={'h5'} fontSize={'1.4rem'} 
                        color={'rgba(255,255,255,0.9)'} width={'100%'} paddingBottom={'7px'}
                        borderBottom={'.5px solid rgba(255,255,255,0.7)'}
                    >Bases de datos</Typography>
                    <List>
                        <SkillsItem skill='MySQL' percentage='75%'/>
                        <SkillsItem skill='PostgreSQL' percentage='85%'/>
                    </List>
                </Box>
                <Typography typography={'p'} color={'rgba(255,255,255,.7)'} >
                        <Icon className="list-item-icon strong-text" icon={aperture} size={9}></Icon>
                        Me desempeño como desarrollador Backend utilizando lenguaje  Java junto a Spring, framework que me facilita el desarrollo de aplicaciones robustas y seguras del lado del servidor.
                        Además, se gestionar bases de datos relacionales a través del lenguaje SQL y utilizando gestores de las mismas tales como PostgreSQL y MySQL.
                        Mis proyectos y habilidades como Backend Dev. se orientan a la arquitectura de Software API RESTful y microservicios. Autenticación y autorización de usuarios a través de JSON Web Token y Spring Security, así como al manejo de funciones CRUD, con Spring Data JPA. 
                        De todos modos, se adaptarme a todo tipo de proyectos y nuevos desafios(En mi perfil de Github se puede encontrar una amplia variedad de funcionalidades desarrolladas por mí).
                </Typography>
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
                    height={'32%'} 
                    justifyContent={'center'}
                    padding={'1rem 0'}
                    borderBottom={'.5px solid rgba(255,255,255,0.7)'}
                    marginBottom={'.5rem'}
                >
                    <SkillsBar percentage="90%" skill="Spring Security"/> 
                    <SkillsBar percentage="65%" skill='AWS S3'/>
                    <SkillsBar percentage="90%" skill='Swagger 2'/>
                    <SkillsBar percentage="95%" skill='Spring Data JPA'/>
                    <SkillsBar percentage="60%" skill='Docker'/>
                    <SkillsBar percentage="85%" skill='JWT'/>
                    <SkillsBar percentage="90%" skill='API REST'/>
                    <SkillsBar percentage="75%" skill='JUnit Testing'/>
                </Box>
                <Box display={'flex'} flexDirection={'column'} rowGap={'.3rem'}>
                    <Typography typography={'p'} color={'rgba(255,255,255,.7)'} >
                        <Icon className="list-item-icon" icon={aperture} size={6}></Icon>
                        <strong className="strong-text">Spring Security: </strong>Seguridad de la API, gestión de roles y autorización.
                    </Typography>
                    <Typography typography={'p'} color={'rgba(255,255,255,.7)'}>
                        <Icon className="list-item-icon" icon={aperture} size={6}></Icon>
                        <strong className="strong-text">AWS S3: </strong>Servicio de almacenamiento que utilizo para poder guardar archivos y persistirlos de una mejor y más optimizada manera.
                    </Typography>
                    <Typography typography={'p'} color={'rgba(255,255,255,.7)'}>
                        <Icon className="list-item-icon" icon={aperture} size={6}></Icon>
                        <strong className="strong-text">Spring Data JPA: </strong>Persistencia de datos, acceso y manipulación de los mismos a través de funciones CRUD(Create, Read, Update, Delete).
                    </Typography>
                    <Typography typography={'p'} color={'rgba(255,255,255,.7)'}>
                        <Icon className="list-item-icon" icon={aperture} size={6}></Icon>
                        <strong className="strong-text">JSON Web Token(JWT): </strong>Autenticación de usuarios vía token. El mismo, es almacenado en el cliente, por lo que se evita hacer uso de sesiones que sean guardadas del lado del servidor.
                    </Typography>
                    <Typography typography={'p'} color={'rgba(255,255,255,.7)'}>
                        <Icon className="list-item-icon" icon={aperture} size={6}></Icon>
                        <strong className="strong-text">Swagger 2: </strong>Documentación del servicio API REST.
                    </Typography>
                    <Typography typography={'p'} color={'rgba(255,255,255,.7)'}>
                        <Icon className="list-item-icon" icon={aperture} size={6}></Icon>
                        <strong className="strong-text">Docker: </strong>Empaquetamiento de la aplicación en contenedores de Software que automatizan el despliegue de la misma.
                    </Typography>
                    <Typography typography={'p'} color={'rgba(255,255,255,.7)'}>
                        <Icon className="list-item-icon" icon={aperture} size={6}></Icon>
                        <strong className="strong-text">JUnit 5: </strong>Testing y pruebas unitarias con el fin de garantizar el correcto funcionamiento del proyecto y el cumplimiento de la totalidad de sus requerimientos.
                    </Typography>
                </Box>
           </Box>
        </Box>

        <Box width={'100%'} display={'flex'} gap={'1rem'}>
            <Box width={'54%'} paddingRight={'1rem'} borderRight={'.5px solid rgba(255,255,255,.6)'}>
                <Typography display={'inline-block'} padding={'2px 0'} marginBottom={'.3rem'} borderBottom={'.5px solid rgba(255,255,255,.6)'} typography={'h4'} fontSize={'1.3rem'} color={'#fff'}>
                    Fuentes de aprendizaje:
                </Typography>
                <Typography typography={'p'} color={'rgba(255,255,255, .7)'}>La gran mayoria de lo relacionado a Java nativo y bases de datos lo aprendi en la propia facultad. Sin embargo, destaco haber tomado un curso avanzado de Java en Openbootcamp, de SQL en canales como HolaMundo y Midulive, y haber investigado euxhastivamente ambos lenguajes en internet. 
                    Por su parte, todo lo que sé entorno a Spring lo aprendi como autodidacta, tomando cursos en plataformas como OpenBootcamp, Udemy y Youtube(de esta última, mis mayores referencias son los canales Amigoscode y ATL Academy). Algo similar ocurre con lo referido a herramientas como AWS, Docker, JWT, Swagger, etc. En cuanto a algunas de estas últimas(Docker, AWS), actualmente me encuentro en el proceso de aprendizaje de las mismas, con el objetivo de orientar mi desarrollo a DevOps. 
                </Typography>
            </Box>
            <Box>
                <Typography display={'inline-block'} padding={'2px 0'} marginBottom={'.7rem'} borderBottom={'.5px solid rgba(255,255,255,.6)'} typography={'h4'} fontSize={'1.3rem'} color={'#fff'}>
                    Backend de proyectos Fullstack:
                </Typography>
                <Box display={'flex'} flexDirection={'column'} gap={'.4rem'}>
                    <Box padding={'.6rem .8rem'} boxShadow={'0px 0px 2px 0px rgba(255,255,255, 0.4)'}>
                        <Typography typography={'h5'} fontSize={'.95rem'} fontWeight={'600'} color={'#fff'}>
                            Dashboard para gestion de tareas, contactos y notas
                        </Typography>
                        <Box display={'flex'} alignItems={'center'} color={'#fff'} gap={'.3rem'} marginBottom={'.3rem'}>
                            <Typography typography={'p'} fontSize={'.9rem'} color={'rgba(255,255,255,.6)'}>
                                Stack Backend utilizado: 
                            </Typography>
                            <Icon icon={coffee} size={23}></Icon> ,
                            <Icon icon={leaf} size={18}></Icon> ,
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.17em" fill="#fff" viewBox="0 0 640 512"><path d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"/></svg> ,
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 24 24" fill="#fff"><path d="M10.74 12.89v-.11c.06-.15.12-.29.19-.43a5.15 5.15 0 0 0 .26-3.74.86.86 0 0 0-.66-.74 3.12 3.12 0 0 0-2.08.61v.18a11.34 11.34 0 0 1-.06 2.41 2.37 2.37 0 0 0 .62 2 2 2 0 0 0 1.43.63 8.05 8.05 0 0 1 .3-.81zM10 8.58a.36.36 0 0 1-.09-.23.19.19 0 0 1 .09-.12.74.74 0 0 1 .48-.07c.25 0 .5.16.48.34a.51.51 0 0 1-.49.33h-.06a.63.63 0 0 1-.41-.25z"></path><path d="M7.88 11a12.58 12.58 0 0 0 .06-2.3v-.28a7 7 0 0 1 1.54-4.55c-1-.32-3.4-1-4.87.1-.9.64-1.32 1.84-1.23 3.55a24.85 24.85 0 0 0 1 4.4c.68 2.22 1.45 3.62 2.11 3.85.1 0 .41.13.86-.41.64-.76 1.23-1.41 1.5-1.7l-.19-.19A2.89 2.89 0 0 1 7.88 11zm3.5 3.4c-.16-.06-.24-.1-.42.11a2.52 2.52 0 0 0-.29.35c-.35.43-.5.58-1.51.79a2 2 0 0 0-.4.11 1 1 0 0 0 .37.16 2.21 2.21 0 0 0 2.5-.8.41.41 0 0 0 0-.35.59.59 0 0 0-.25-.37zm6.29-5.82a5.29 5.29 0 0 0 .08-.79c-.66-.08-1.42-.07-1.72.36-.58.83.56 2.88 1 3.75a4.34 4.34 0 0 1 .26.48 1.79 1.79 0 0 0 .15.31 3.72 3.72 0 0 0 .16-2.13 7.51 7.51 0 0 1-.07-1.05 6 6 0 0 1 .14-.93zm-.56-.16a.6.6 0 0 1-.32.17h-.06a.47.47 0 0 1-.44-.3c0-.14.2-.24.44-.28s.48 0 .5.15a.38.38 0 0 1-.12.26z"></path><path d="M17 4.88a6.06 6.06 0 0 1 1.37 2.57.71.71 0 0 1 0 .15 5.67 5.67 0 0 1-.09 1.06 7.11 7.11 0 0 0-.09.86 6.61 6.61 0 0 0 .07 1 4 4 0 0 1-.36 2.71l.07.08c2.22-3.49 3-7.54 2.29-8.43a4.77 4.77 0 0 0-3.81-1.8 7.34 7.34 0 0 0-1.63.16A6.17 6.17 0 0 1 17 4.88z"></path><path d="M21.65 14c-.07-.2-.37-.85-1.47-.62a6.28 6.28 0 0 1-1 .13 19.74 19.74 0 0 0 2.06-4.88c.37-1.45.66-3.39-.11-4.38A5.91 5.91 0 0 0 16.37 2a8.44 8.44 0 0 0-2.46.35 9.38 9.38 0 0 0-1.45-.14 4.8 4.8 0 0 0-2.46.62 12.22 12.22 0 0 0-1.77-.44A5.44 5.44 0 0 0 4 3.05c-1.24.87-1.81 2.39-1.71 4.52a26.28 26.28 0 0 0 1 4.67A15.76 15.76 0 0 0 4.4 15a3.39 3.39 0 0 0 1.75 1.83 1.71 1.71 0 0 0 1.69-.37 2 2 0 0 0 1 .59 3.65 3.65 0 0 0 2.35-.14v.81a8.46 8.46 0 0 0 .31 2.36 1 1 0 0 1 0 .13 3 3 0 0 0 .71 1.24 2.08 2.08 0 0 0 1.49.56 3 3 0 0 0 .7-.08 3.27 3.27 0 0 0 2.21-1.27 7.34 7.34 0 0 0 .91-4v-.26h.17a5.24 5.24 0 0 0 2.4-.4c.45-.23 1.91-1 1.56-2zm-1.81 1.47a4.7 4.7 0 0 1-1.8.34 2.62 2.62 0 0 1-.79-.1c-.1.94-.32 2.69-.45 3.42a2.47 2.47 0 0 1-2.25 2.3 3.23 3.23 0 0 1-.66.07A2 2 0 0 1 12 20a16.77 16.77 0 0 1-.28-4.06 2.56 2.56 0 0 1-1.78.66 3.94 3.94 0 0 1-.94-.13c-.09 0-.87-.23-.86-.73s.66-.59.9-.64c.86-.18.92-.25 1.19-.59a2.79 2.79 0 0 1 .19-.24 2.56 2.56 0 0 1-1.11-.3c-.23.25-.86.93-1.54 1.74a1.43 1.43 0 0 1-1.11.63 1.23 1.23 0 0 1-.35 0C5.43 16 4.6 14.55 3.84 12a25.21 25.21 0 0 1-1-4.53c-.1-1.92.4-3.28 1.47-4 1.92-1.36 5-.31 5.7-.06a4 4 0 0 1 2.41-.66 5.58 5.58 0 0 1 1.4.18 7.51 7.51 0 0 1 2.5-.4 5.35 5.35 0 0 1 4.32 2c.69.88.23 3 0 3.89a18.84 18.84 0 0 1-2.41 5.41c.16.11.65.31 2 0 .46-.1.73 0 .82.25.22.55-.7 1.13-1.21 1.37z"></path>
                                <path d="M17.43 13.59a4 4 0 0 1-.62-1c0-.07-.12-.24-.23-.43-.58-1-1.79-3.22-1-4.34a2.16 2.16 0 0 1 2.12-.61 6.28 6.28 0 0 0-1.13-1.94 5.41 5.41 0 0 0-4.13-2 3.34 3.34 0 0 0-2.55.95A5.82 5.82 0 0 0 8.51 7.8l.15-.08A3.7 3.7 0 0 1 10 7.3a1.45 1.45 0 0 1 1.76 1.19 5.73 5.73 0 0 1-.29 4.09 3.29 3.29 0 0 0-.17.39v.11c-.1.27-.19.52-.25.73a.94.94 0 0 1 .57.07 1.16 1.16 0 0 1 .62.74v.16a.28.28 0 0 1 0 .09 22.22 22.22 0 0 0 .22 4.9 1.5 1.5 0 0 0 2 1.09A1.92 1.92 0 0 0 16.25 19c.15-.88.45-3.35.49-3.88 0-1.06.52-1.27.84-1.36z"></path><path d="m18 14.33-.08-.06h-.12c-.26.07-.5.14-.47.8a1.9 1.9 0 0 0 .93.12 4.29 4.29 0 0 0 1.38-.29 3 3 0 0 0 .79-.52 3.47 3.47 0 0 1-2.43-.05z"></path></svg>
                            , <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="#fff" viewBox="0 0 640 512"><path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"/></svg>
                        </Box>

                        <Link to="https://github.com/FeliWeigel/FullStackProject-Aws-S3/tree/master/WmFullStackProffesional" target="_blank" className="go-repo-btn">
                            Codigo del proyecto <Icon className="go-repo-btn-icon" icon={arrowRight2} size={16}></Icon>
                        </Link>
                    </Box>

                    <Box padding={'.6rem .8rem'} boxShadow={'0px 0px 2px 0px rgba(255,255,255, 0.4)'}>
                        <Typography typography={'h5'} fontSize={'.95rem'} fontWeight={'600'} color={'#fff'}>
                            Plataforma para venta de cursos online
                        </Typography>
                        <Box display={'flex'} alignItems={'center'} color={'#fff'} gap={'.3rem'} marginBottom={'.3rem'}>
                            <Typography typography={'h5'} fontSize={'.9rem'} color={'rgba(255,255,255,.6)'}>
                                Stack Backend utilizado: 
                            </Typography>
                            <Icon icon={coffee} size={23}></Icon> ,
                            <Icon icon={leaf} size={18}></Icon> ,
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 24 24" fill="#fff"><path d="M10.74 12.89v-.11c.06-.15.12-.29.19-.43a5.15 5.15 0 0 0 .26-3.74.86.86 0 0 0-.66-.74 3.12 3.12 0 0 0-2.08.61v.18a11.34 11.34 0 0 1-.06 2.41 2.37 2.37 0 0 0 .62 2 2 2 0 0 0 1.43.63 8.05 8.05 0 0 1 .3-.81zM10 8.58a.36.36 0 0 1-.09-.23.19.19 0 0 1 .09-.12.74.74 0 0 1 .48-.07c.25 0 .5.16.48.34a.51.51 0 0 1-.49.33h-.06a.63.63 0 0 1-.41-.25z"></path><path d="M7.88 11a12.58 12.58 0 0 0 .06-2.3v-.28a7 7 0 0 1 1.54-4.55c-1-.32-3.4-1-4.87.1-.9.64-1.32 1.84-1.23 3.55a24.85 24.85 0 0 0 1 4.4c.68 2.22 1.45 3.62 2.11 3.85.1 0 .41.13.86-.41.64-.76 1.23-1.41 1.5-1.7l-.19-.19A2.89 2.89 0 0 1 7.88 11zm3.5 3.4c-.16-.06-.24-.1-.42.11a2.52 2.52 0 0 0-.29.35c-.35.43-.5.58-1.51.79a2 2 0 0 0-.4.11 1 1 0 0 0 .37.16 2.21 2.21 0 0 0 2.5-.8.41.41 0 0 0 0-.35.59.59 0 0 0-.25-.37zm6.29-5.82a5.29 5.29 0 0 0 .08-.79c-.66-.08-1.42-.07-1.72.36-.58.83.56 2.88 1 3.75a4.34 4.34 0 0 1 .26.48 1.79 1.79 0 0 0 .15.31 3.72 3.72 0 0 0 .16-2.13 7.51 7.51 0 0 1-.07-1.05 6 6 0 0 1 .14-.93zm-.56-.16a.6.6 0 0 1-.32.17h-.06a.47.47 0 0 1-.44-.3c0-.14.2-.24.44-.28s.48 0 .5.15a.38.38 0 0 1-.12.26z"></path><path d="M17 4.88a6.06 6.06 0 0 1 1.37 2.57.71.71 0 0 1 0 .15 5.67 5.67 0 0 1-.09 1.06 7.11 7.11 0 0 0-.09.86 6.61 6.61 0 0 0 .07 1 4 4 0 0 1-.36 2.71l.07.08c2.22-3.49 3-7.54 2.29-8.43a4.77 4.77 0 0 0-3.81-1.8 7.34 7.34 0 0 0-1.63.16A6.17 6.17 0 0 1 17 4.88z"></path><path d="M21.65 14c-.07-.2-.37-.85-1.47-.62a6.28 6.28 0 0 1-1 .13 19.74 19.74 0 0 0 2.06-4.88c.37-1.45.66-3.39-.11-4.38A5.91 5.91 0 0 0 16.37 2a8.44 8.44 0 0 0-2.46.35 9.38 9.38 0 0 0-1.45-.14 4.8 4.8 0 0 0-2.46.62 12.22 12.22 0 0 0-1.77-.44A5.44 5.44 0 0 0 4 3.05c-1.24.87-1.81 2.39-1.71 4.52a26.28 26.28 0 0 0 1 4.67A15.76 15.76 0 0 0 4.4 15a3.39 3.39 0 0 0 1.75 1.83 1.71 1.71 0 0 0 1.69-.37 2 2 0 0 0 1 .59 3.65 3.65 0 0 0 2.35-.14v.81a8.46 8.46 0 0 0 .31 2.36 1 1 0 0 1 0 .13 3 3 0 0 0 .71 1.24 2.08 2.08 0 0 0 1.49.56 3 3 0 0 0 .7-.08 3.27 3.27 0 0 0 2.21-1.27 7.34 7.34 0 0 0 .91-4v-.26h.17a5.24 5.24 0 0 0 2.4-.4c.45-.23 1.91-1 1.56-2zm-1.81 1.47a4.7 4.7 0 0 1-1.8.34 2.62 2.62 0 0 1-.79-.1c-.1.94-.32 2.69-.45 3.42a2.47 2.47 0 0 1-2.25 2.3 3.23 3.23 0 0 1-.66.07A2 2 0 0 1 12 20a16.77 16.77 0 0 1-.28-4.06 2.56 2.56 0 0 1-1.78.66 3.94 3.94 0 0 1-.94-.13c-.09 0-.87-.23-.86-.73s.66-.59.9-.64c.86-.18.92-.25 1.19-.59a2.79 2.79 0 0 1 .19-.24 2.56 2.56 0 0 1-1.11-.3c-.23.25-.86.93-1.54 1.74a1.43 1.43 0 0 1-1.11.63 1.23 1.23 0 0 1-.35 0C5.43 16 4.6 14.55 3.84 12a25.21 25.21 0 0 1-1-4.53c-.1-1.92.4-3.28 1.47-4 1.92-1.36 5-.31 5.7-.06a4 4 0 0 1 2.41-.66 5.58 5.58 0 0 1 1.4.18 7.51 7.51 0 0 1 2.5-.4 5.35 5.35 0 0 1 4.32 2c.69.88.23 3 0 3.89a18.84 18.84 0 0 1-2.41 5.41c.16.11.65.31 2 0 .46-.1.73 0 .82.25.22.55-.7 1.13-1.21 1.37z"></path>
                                <path d="M17.43 13.59a4 4 0 0 1-.62-1c0-.07-.12-.24-.23-.43-.58-1-1.79-3.22-1-4.34a2.16 2.16 0 0 1 2.12-.61 6.28 6.28 0 0 0-1.13-1.94 5.41 5.41 0 0 0-4.13-2 3.34 3.34 0 0 0-2.55.95A5.82 5.82 0 0 0 8.51 7.8l.15-.08A3.7 3.7 0 0 1 10 7.3a1.45 1.45 0 0 1 1.76 1.19 5.73 5.73 0 0 1-.29 4.09 3.29 3.29 0 0 0-.17.39v.11c-.1.27-.19.52-.25.73a.94.94 0 0 1 .57.07 1.16 1.16 0 0 1 .62.74v.16a.28.28 0 0 1 0 .09 22.22 22.22 0 0 0 .22 4.9 1.5 1.5 0 0 0 2 1.09A1.92 1.92 0 0 0 16.25 19c.15-.88.45-3.35.49-3.88 0-1.06.52-1.27.84-1.36z"></path><path d="m18 14.33-.08-.06h-.12c-.26.07-.5.14-.47.8a1.9 1.9 0 0 0 .93.12 4.29 4.29 0 0 0 1.38-.29 3 3 0 0 0 .79-.52 3.47 3.47 0 0 1-2.43-.05z"></path></svg>
                        </Box>

                        <Link to="https://github.com/FeliWeigel/Plataforma-cursos-spring-react/tree/master/back" target="_blank" className="go-repo-btn">
                            Codigo del proyecto <Icon className="go-repo-btn-icon" icon={arrowRight2} size={16}></Icon>
                        </Link>
                    </Box>

                    <Box padding={'.6rem .8rem'} boxShadow={'0px 0px 2px 0px rgba(255,255,255, 0.4)'}>
                        <Typography typography={'h5'} fontSize={'.95rem'} fontWeight={'600'} color={'#fff'}>
                            Administrador de tareas
                        </Typography>
                        <Box display={'flex'} alignItems={'center'} color={'#fff'} gap={'.3rem'} marginBottom={'.3rem'}>
                            <Typography typography={'p'} fontSize={'.9rem'} color={'rgba(255,255,255,.6)'}>
                                Stack Backend utilizado: 
                            </Typography>
                            <Icon icon={coffee} size={23}></Icon> ,
                            <Icon icon={leaf} size={18}></Icon> ,
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 24 24" fill="#fff"><path d="M10.74 12.89v-.11c.06-.15.12-.29.19-.43a5.15 5.15 0 0 0 .26-3.74.86.86 0 0 0-.66-.74 3.12 3.12 0 0 0-2.08.61v.18a11.34 11.34 0 0 1-.06 2.41 2.37 2.37 0 0 0 .62 2 2 2 0 0 0 1.43.63 8.05 8.05 0 0 1 .3-.81zM10 8.58a.36.36 0 0 1-.09-.23.19.19 0 0 1 .09-.12.74.74 0 0 1 .48-.07c.25 0 .5.16.48.34a.51.51 0 0 1-.49.33h-.06a.63.63 0 0 1-.41-.25z"></path><path d="M7.88 11a12.58 12.58 0 0 0 .06-2.3v-.28a7 7 0 0 1 1.54-4.55c-1-.32-3.4-1-4.87.1-.9.64-1.32 1.84-1.23 3.55a24.85 24.85 0 0 0 1 4.4c.68 2.22 1.45 3.62 2.11 3.85.1 0 .41.13.86-.41.64-.76 1.23-1.41 1.5-1.7l-.19-.19A2.89 2.89 0 0 1 7.88 11zm3.5 3.4c-.16-.06-.24-.1-.42.11a2.52 2.52 0 0 0-.29.35c-.35.43-.5.58-1.51.79a2 2 0 0 0-.4.11 1 1 0 0 0 .37.16 2.21 2.21 0 0 0 2.5-.8.41.41 0 0 0 0-.35.59.59 0 0 0-.25-.37zm6.29-5.82a5.29 5.29 0 0 0 .08-.79c-.66-.08-1.42-.07-1.72.36-.58.83.56 2.88 1 3.75a4.34 4.34 0 0 1 .26.48 1.79 1.79 0 0 0 .15.31 3.72 3.72 0 0 0 .16-2.13 7.51 7.51 0 0 1-.07-1.05 6 6 0 0 1 .14-.93zm-.56-.16a.6.6 0 0 1-.32.17h-.06a.47.47 0 0 1-.44-.3c0-.14.2-.24.44-.28s.48 0 .5.15a.38.38 0 0 1-.12.26z"></path><path d="M17 4.88a6.06 6.06 0 0 1 1.37 2.57.71.71 0 0 1 0 .15 5.67 5.67 0 0 1-.09 1.06 7.11 7.11 0 0 0-.09.86 6.61 6.61 0 0 0 .07 1 4 4 0 0 1-.36 2.71l.07.08c2.22-3.49 3-7.54 2.29-8.43a4.77 4.77 0 0 0-3.81-1.8 7.34 7.34 0 0 0-1.63.16A6.17 6.17 0 0 1 17 4.88z"></path><path d="M21.65 14c-.07-.2-.37-.85-1.47-.62a6.28 6.28 0 0 1-1 .13 19.74 19.74 0 0 0 2.06-4.88c.37-1.45.66-3.39-.11-4.38A5.91 5.91 0 0 0 16.37 2a8.44 8.44 0 0 0-2.46.35 9.38 9.38 0 0 0-1.45-.14 4.8 4.8 0 0 0-2.46.62 12.22 12.22 0 0 0-1.77-.44A5.44 5.44 0 0 0 4 3.05c-1.24.87-1.81 2.39-1.71 4.52a26.28 26.28 0 0 0 1 4.67A15.76 15.76 0 0 0 4.4 15a3.39 3.39 0 0 0 1.75 1.83 1.71 1.71 0 0 0 1.69-.37 2 2 0 0 0 1 .59 3.65 3.65 0 0 0 2.35-.14v.81a8.46 8.46 0 0 0 .31 2.36 1 1 0 0 1 0 .13 3 3 0 0 0 .71 1.24 2.08 2.08 0 0 0 1.49.56 3 3 0 0 0 .7-.08 3.27 3.27 0 0 0 2.21-1.27 7.34 7.34 0 0 0 .91-4v-.26h.17a5.24 5.24 0 0 0 2.4-.4c.45-.23 1.91-1 1.56-2zm-1.81 1.47a4.7 4.7 0 0 1-1.8.34 2.62 2.62 0 0 1-.79-.1c-.1.94-.32 2.69-.45 3.42a2.47 2.47 0 0 1-2.25 2.3 3.23 3.23 0 0 1-.66.07A2 2 0 0 1 12 20a16.77 16.77 0 0 1-.28-4.06 2.56 2.56 0 0 1-1.78.66 3.94 3.94 0 0 1-.94-.13c-.09 0-.87-.23-.86-.73s.66-.59.9-.64c.86-.18.92-.25 1.19-.59a2.79 2.79 0 0 1 .19-.24 2.56 2.56 0 0 1-1.11-.3c-.23.25-.86.93-1.54 1.74a1.43 1.43 0 0 1-1.11.63 1.23 1.23 0 0 1-.35 0C5.43 16 4.6 14.55 3.84 12a25.21 25.21 0 0 1-1-4.53c-.1-1.92.4-3.28 1.47-4 1.92-1.36 5-.31 5.7-.06a4 4 0 0 1 2.41-.66 5.58 5.58 0 0 1 1.4.18 7.51 7.51 0 0 1 2.5-.4 5.35 5.35 0 0 1 4.32 2c.69.88.23 3 0 3.89a18.84 18.84 0 0 1-2.41 5.41c.16.11.65.31 2 0 .46-.1.73 0 .82.25.22.55-.7 1.13-1.21 1.37z"></path>
                                <path d="M17.43 13.59a4 4 0 0 1-.62-1c0-.07-.12-.24-.23-.43-.58-1-1.79-3.22-1-4.34a2.16 2.16 0 0 1 2.12-.61 6.28 6.28 0 0 0-1.13-1.94 5.41 5.41 0 0 0-4.13-2 3.34 3.34 0 0 0-2.55.95A5.82 5.82 0 0 0 8.51 7.8l.15-.08A3.7 3.7 0 0 1 10 7.3a1.45 1.45 0 0 1 1.76 1.19 5.73 5.73 0 0 1-.29 4.09 3.29 3.29 0 0 0-.17.39v.11c-.1.27-.19.52-.25.73a.94.94 0 0 1 .57.07 1.16 1.16 0 0 1 .62.74v.16a.28.28 0 0 1 0 .09 22.22 22.22 0 0 0 .22 4.9 1.5 1.5 0 0 0 2 1.09A1.92 1.92 0 0 0 16.25 19c.15-.88.45-3.35.49-3.88 0-1.06.52-1.27.84-1.36z"></path><path d="m18 14.33-.08-.06h-.12c-.26.07-.5.14-.47.8a1.9 1.9 0 0 0 .93.12 4.29 4.29 0 0 0 1.38-.29 3 3 0 0 0 .79-.52 3.47 3.47 0 0 1-2.43-.05z"></path></svg>
                        </Box>
                        
                        <Link to="https://github.com/FeliWeigel/React-Spring-TaskManager/tree/master/task-manager" target="_blank" className="go-repo-btn">
                            Codigo del proyecto <Icon className="go-repo-btn-icon" icon={arrowRight2} size={16}></Icon>
                        </Link>
                    </Box>

                    <Box padding={'.6rem .8rem'} boxShadow={'0px 0px 2px 0px rgba(255,255,255, 0.4)'}>
                        <Typography typography={'h5'} fontSize={'.95rem'} fontWeight={'600'} color={'#fff'}>
                            Proyecto ecommerce de zapatillas
                        </Typography>
                        <Box display={'flex'} alignItems={'center'} color={'#fff'} gap={'.3rem'} marginBottom={'.3rem'}>
                            <Typography typography={'p'} fontSize={'.9rem'} color={'rgba(255,255,255,.6)'}>
                                Stack Backend utilizado: 
                            </Typography>
                            <Icon icon={coffee} size={23}></Icon> ,
                            <Icon icon={leaf} size={18}></Icon> ,
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 24 24" fill="#fff"><path d="M10.74 12.89v-.11c.06-.15.12-.29.19-.43a5.15 5.15 0 0 0 .26-3.74.86.86 0 0 0-.66-.74 3.12 3.12 0 0 0-2.08.61v.18a11.34 11.34 0 0 1-.06 2.41 2.37 2.37 0 0 0 .62 2 2 2 0 0 0 1.43.63 8.05 8.05 0 0 1 .3-.81zM10 8.58a.36.36 0 0 1-.09-.23.19.19 0 0 1 .09-.12.74.74 0 0 1 .48-.07c.25 0 .5.16.48.34a.51.51 0 0 1-.49.33h-.06a.63.63 0 0 1-.41-.25z"></path><path d="M7.88 11a12.58 12.58 0 0 0 .06-2.3v-.28a7 7 0 0 1 1.54-4.55c-1-.32-3.4-1-4.87.1-.9.64-1.32 1.84-1.23 3.55a24.85 24.85 0 0 0 1 4.4c.68 2.22 1.45 3.62 2.11 3.85.1 0 .41.13.86-.41.64-.76 1.23-1.41 1.5-1.7l-.19-.19A2.89 2.89 0 0 1 7.88 11zm3.5 3.4c-.16-.06-.24-.1-.42.11a2.52 2.52 0 0 0-.29.35c-.35.43-.5.58-1.51.79a2 2 0 0 0-.4.11 1 1 0 0 0 .37.16 2.21 2.21 0 0 0 2.5-.8.41.41 0 0 0 0-.35.59.59 0 0 0-.25-.37zm6.29-5.82a5.29 5.29 0 0 0 .08-.79c-.66-.08-1.42-.07-1.72.36-.58.83.56 2.88 1 3.75a4.34 4.34 0 0 1 .26.48 1.79 1.79 0 0 0 .15.31 3.72 3.72 0 0 0 .16-2.13 7.51 7.51 0 0 1-.07-1.05 6 6 0 0 1 .14-.93zm-.56-.16a.6.6 0 0 1-.32.17h-.06a.47.47 0 0 1-.44-.3c0-.14.2-.24.44-.28s.48 0 .5.15a.38.38 0 0 1-.12.26z"></path><path d="M17 4.88a6.06 6.06 0 0 1 1.37 2.57.71.71 0 0 1 0 .15 5.67 5.67 0 0 1-.09 1.06 7.11 7.11 0 0 0-.09.86 6.61 6.61 0 0 0 .07 1 4 4 0 0 1-.36 2.71l.07.08c2.22-3.49 3-7.54 2.29-8.43a4.77 4.77 0 0 0-3.81-1.8 7.34 7.34 0 0 0-1.63.16A6.17 6.17 0 0 1 17 4.88z"></path><path d="M21.65 14c-.07-.2-.37-.85-1.47-.62a6.28 6.28 0 0 1-1 .13 19.74 19.74 0 0 0 2.06-4.88c.37-1.45.66-3.39-.11-4.38A5.91 5.91 0 0 0 16.37 2a8.44 8.44 0 0 0-2.46.35 9.38 9.38 0 0 0-1.45-.14 4.8 4.8 0 0 0-2.46.62 12.22 12.22 0 0 0-1.77-.44A5.44 5.44 0 0 0 4 3.05c-1.24.87-1.81 2.39-1.71 4.52a26.28 26.28 0 0 0 1 4.67A15.76 15.76 0 0 0 4.4 15a3.39 3.39 0 0 0 1.75 1.83 1.71 1.71 0 0 0 1.69-.37 2 2 0 0 0 1 .59 3.65 3.65 0 0 0 2.35-.14v.81a8.46 8.46 0 0 0 .31 2.36 1 1 0 0 1 0 .13 3 3 0 0 0 .71 1.24 2.08 2.08 0 0 0 1.49.56 3 3 0 0 0 .7-.08 3.27 3.27 0 0 0 2.21-1.27 7.34 7.34 0 0 0 .91-4v-.26h.17a5.24 5.24 0 0 0 2.4-.4c.45-.23 1.91-1 1.56-2zm-1.81 1.47a4.7 4.7 0 0 1-1.8.34 2.62 2.62 0 0 1-.79-.1c-.1.94-.32 2.69-.45 3.42a2.47 2.47 0 0 1-2.25 2.3 3.23 3.23 0 0 1-.66.07A2 2 0 0 1 12 20a16.77 16.77 0 0 1-.28-4.06 2.56 2.56 0 0 1-1.78.66 3.94 3.94 0 0 1-.94-.13c-.09 0-.87-.23-.86-.73s.66-.59.9-.64c.86-.18.92-.25 1.19-.59a2.79 2.79 0 0 1 .19-.24 2.56 2.56 0 0 1-1.11-.3c-.23.25-.86.93-1.54 1.74a1.43 1.43 0 0 1-1.11.63 1.23 1.23 0 0 1-.35 0C5.43 16 4.6 14.55 3.84 12a25.21 25.21 0 0 1-1-4.53c-.1-1.92.4-3.28 1.47-4 1.92-1.36 5-.31 5.7-.06a4 4 0 0 1 2.41-.66 5.58 5.58 0 0 1 1.4.18 7.51 7.51 0 0 1 2.5-.4 5.35 5.35 0 0 1 4.32 2c.69.88.23 3 0 3.89a18.84 18.84 0 0 1-2.41 5.41c.16.11.65.31 2 0 .46-.1.73 0 .82.25.22.55-.7 1.13-1.21 1.37z"></path>
                                <path d="M17.43 13.59a4 4 0 0 1-.62-1c0-.07-.12-.24-.23-.43-.58-1-1.79-3.22-1-4.34a2.16 2.16 0 0 1 2.12-.61 6.28 6.28 0 0 0-1.13-1.94 5.41 5.41 0 0 0-4.13-2 3.34 3.34 0 0 0-2.55.95A5.82 5.82 0 0 0 8.51 7.8l.15-.08A3.7 3.7 0 0 1 10 7.3a1.45 1.45 0 0 1 1.76 1.19 5.73 5.73 0 0 1-.29 4.09 3.29 3.29 0 0 0-.17.39v.11c-.1.27-.19.52-.25.73a.94.94 0 0 1 .57.07 1.16 1.16 0 0 1 .62.74v.16a.28.28 0 0 1 0 .09 22.22 22.22 0 0 0 .22 4.9 1.5 1.5 0 0 0 2 1.09A1.92 1.92 0 0 0 16.25 19c.15-.88.45-3.35.49-3.88 0-1.06.52-1.27.84-1.36z"></path><path d="m18 14.33-.08-.06h-.12c-.26.07-.5.14-.47.8a1.9 1.9 0 0 0 .93.12 4.29 4.29 0 0 0 1.38-.29 3 3 0 0 0 .79-.52 3.47 3.47 0 0 1-2.43-.05z"></path></svg>
                        </Box>
                        
                        <Link to="https://github.com/FeliWeigel/Shoes-Ecommerce/tree/main/back/sneakers" target="_blank" className="go-repo-btn">
                            Codigo del proyecto <Icon className="go-repo-btn-icon" icon={arrowRight2} size={16}></Icon>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Container>
  )
}

export default BackendSkills