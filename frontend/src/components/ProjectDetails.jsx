/* eslint-disable react/prop-types */
import "../index.css"
import { Box, Typography } from "@mui/material"
import Icon from "react-icons-kit"
import { arrowRight2 } from "react-icons-kit/icomoon/arrowRight2"
import Carousel from "react-material-ui-carousel"
import { Link } from "react-router-dom"

const ProjectDetails = ({project}) => {
console.log(project)
    return (
        <Box sx={{
            width: '100%',
            height: 'auto',
            padding: '.5rem 2rem',
            background: 'radial-gradient(circle, rgba(40,40,40,1) 0%, rgba(17,17,17,1) 85%)'
        }}>
            <Box display={'flex'} height={'100vh'} width={'100%'} gap={'2rem'} alignItems={'center'}>
                <Box width={'55%'}>
                    <Box position={'relative'} marginBottom={'2.5rem'}>
                        <Box 
                            width={'85px'} 
                            height={'85px'} 
                            top={'-2rem'} 
                            right={'1.5rem'} 
                            borderRight={'1px solid rgba(255,255,255,0.8)'} 
                            borderTop={'1px solid rgba(255,255,255,0.8)'} 
                            position={'absolute'}
                        >
                        </Box>
                        <Box 
                            width={'120px'} 
                            height={'120px'} 
                            top={'-3rem'} 
                            right={'.5rem'} 
                            borderRight={'1px solid rgba(255,255,255,0.5)'} 
                            borderTop={'1px solid rgba(255,255,255,0.5)'} 
                            position={'absolute'}
                        >
                        </Box>

                        <Carousel sx={{
                            width: '100%',
                            padding: '.5rem 0',
                            textAlign: 'center'
                        }}>
                            {project.images.map((image) => {
                                console.log(image)
                               return (
                                    <> 
                                        <img className="project-dls-image dls-image-1" src={image.toString()} />
                                    </>
                               )
                            })}
                        </Carousel>

                        <Box 
                            width={'85px'} 
                            height={'85px'} 
                            bottom={'0'} 
                            left={'1.5rem'} 
                            borderLeft={'1px solid rgba(255,255,255,0.8)'} 
                            borderBottom={'1px solid rgba(255,255,255,0.8)'} 
                            position={'absolute'}
                        >
                        </Box>
                        <Box 
                            width={'120px'} 
                            height={'120px'} 
                            bottom={'-1rem'} 
                            left={'.5rem'} 
                            borderLeft={'1px solid rgba(255,255,255,0.5)'} 
                            borderBottom={'1px solid rgba(255,255,255,0.5)'} 
                            position={'absolute'}
                        >
                        </Box>
                    </Box>

                    <Link className="link-repo-project-dtls" to={project.repo} target="_blank">Ir al repositorio del proyecto<Icon icon={arrowRight2} size={17}></Icon></Link>
                </Box>
                
                <Box width={'43%'} height={'88%'}>
                    <Typography 
                        typography={'h4'} color={'#fff'}
                        fontSize={'1.8rem'} borderBottom={'.5px solid rgba(255,255,255,0.5)'}
                        paddingBottom={'.25rem'} marginBottom={'.4rem'}
                        sx={{animation: 'text_reveal_1 1s'}}
                    >{project.name}</Typography>
                    <Typography typography={'h5'} fontSize={'1.2rem'} position={'relative'} color={'rgba(255,255,255, 0.8)'} sx={{
                        marginBottom: '.5rem',
                        animation: 'text_reveal_2 1s',
                        ":before": {
                            content: '""',
                            position: 'absolute',
                            bottom: '0',
                            background: '#fff',
                            width: '18px',
                            height: '1.5px'
                        }
                    }}>{project.type}</Typography>
                    <Typography typography={'h5'} fontSize={'1.05rem'} color={'rgba(255,255,255, 0.7)'} sx={{
                        marginBottom: '.5rem',
                        animation: 'text_reveal_2 1s'
                    }}><strong className="strong-text">Stack utilizado:</strong> {project.stack}</Typography>
                    <Typography 
                        typography={'p'} fontSize={'.95rem'}
                        color={'rgba(255,255,255,.4)'} sx={{animation: 'text_reveal_3 1s'}}>{project.description}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ProjectDetails