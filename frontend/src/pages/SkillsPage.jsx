import { useState } from "react"
import "../index.css"
import "../css/Skills.css"

import BackendSkills from "../components/BackendSkills"
import FrontendSkills from "../components/FrontendSkills"

import { Alert, Box, Container, Typography } from "@mui/material"
import DevToolsSkills from "../components/DevToolsSkills"
import DevOpsSkills from "../components/DevOpsSkills"

const SkillsPage = () => {
    const [backend, setBackend] =  useState(true)
    const [frontend, setFrontend] =  useState(false)
    const [devTools, setDevTools] =  useState(false)
    const [devOps, setDevOps] =  useState(false)

    function handleBackend(){
        if(!backend){
            setFrontend(false)
            setDevOps(false)
            setDevTools(false)
            setBackend(true)
            document.getElementById('frontend-btn').classList.remove('skills-selected-btn')
            document.getElementById('devops-btn').classList.remove('skills-selected-btn')
            document.getElementById('devtools-btn').classList.remove('skills-selected-btn')
            document.getElementById('backend-btn').classList.add('skills-selected-btn')
        }   
    }

    function handleFrontend(){
        if(!frontend){
            setBackend(false)
            setDevOps(false)
            setDevTools(false)
            setFrontend(true)
            document.getElementById('backend-btn').classList.remove('skills-selected-btn')
            document.getElementById('devops-btn').classList.remove('skills-selected-btn')
            document.getElementById('devtools-btn').classList.remove('skills-selected-btn')
            document.getElementById('frontend-btn').classList.add('skills-selected-btn')
        }
    }

    function handleDevOps(){
        if(!devOps){
            setBackend(false)
            setFrontend(false)
            setDevTools(false)
            setDevOps(true)
            document.getElementById('backend-btn').classList.remove('skills-selected-btn')
            document.getElementById('frontend-btn').classList.remove('skills-selected-btn')
            document.getElementById('devtools-btn').classList.remove('skills-selected-btn')
            document.getElementById('devops-btn').classList.add('skills-selected-btn')
        }
    }

    function handleDevTools(){
        if(!devTools){
            setFrontend(false)
            setBackend(false)
            setDevOps(false)
            setDevTools(true)
            document.getElementById('frontend-btn').classList.remove('skills-selected-btn')
            document.getElementById('backend-btn').classList.remove('skills-selected-btn')
            document.getElementById('devops-btn').classList.remove('skills-selected-btn')
            document.getElementById('devtools-btn').classList.add('skills-selected-btn')
        }
    }

    return (
        <Container maxWidth="xl" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            height: 'auto',
            minHeight: '100vh',
            backgroundColor: 'rgba(0,0,0,0.87)'
        }}>
            <Typography 
                typography={'h3'} width={'85%'}
                fontSize={'1.8rem'} textAlign={'center'} 
                fontWeight={'600'} letterSpacing={'.5px'} color={'#fff'} 
                borderBottom={'.5px solid rgba(255,255,255,0.3)'} paddingBottom={'1rem'}
                marginBottom={'1rem'} 
            >
                Mis habilidades técnicas
            </Typography>
            <Box display={'flex'} gap={'1rem'}>
                <button id="backend-btn" className="skills-btn skills-selected-btn" onClick={handleBackend}>Backend</button>
                
                <button id="frontend-btn" className="skills-btn" onClick={handleFrontend}>Frontend</button>

                <button id="devops-btn" className="skills-btn" onClick={handleDevOps}>DevOps</button>

                <button id="devtools-btn" className="skills-btn" onClick={handleDevTools}>Herramientas de desarrollo</button>
            </Box>

            {
                backend ? <BackendSkills/> : 
                frontend ? <FrontendSkills/> : 
                devTools ? <DevToolsSkills/> :
                devOps ? <DevOpsSkills/> : 
                <Alert severity="error" sx={{marginTop: '2rem'}}>Error 404</Alert>
            }
        </Container>
        
    )
    
}

export default SkillsPage