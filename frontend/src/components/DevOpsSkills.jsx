import { Box, Container, Typography } from "@mui/material"


const DevOpsSkills = () => {
  return (
    <Container sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height:'50vh',
    }}>
        <Box width={'70%'}>
            <Typography typography={'h5'} textAlign={'center'} fontWeight={'600'} color={'#fff'} fontSize={'1.4rem'}>En proceso...</Typography>
            <Typography typography={'p'} textAlign={'center'} color={'rgba(255,255,255,0.75)'} fontSize={'1.1rem'}>
                Todavía me encuentro en pleno desarrollo de aprendizaje de las habilidades necesarias para DevOps, próximamente adjuntaré mis avances más significativos en esta sección.
            </Typography>
        </Box>
    </Container>
  )
}

export default DevOpsSkills