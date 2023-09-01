/* eslint-disable react/prop-types */
import { Box, ListItem, Typography } from "@mui/material"
import "../css/Skills.css"

const SkillsItem = ({skill, percentage}) => {
  return (
    <ListItem sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '.7rem .5rem',
        borderBottom: '.5px solid rgba(255,255,255, 0.15)'
    }}>
        <Typography typography={'p'} fontSize={'1.2rem'} color={'#fff'}>{skill}</Typography>
        <Box 
            width={'270px'} 
            height={'7px'}
            borderRadius={'20px'} 
            sx={{backgroundColor: 'rgba(255,255,255,0.3)', transition: '.4s'}}>
                <Box 
                    display={'flex'}
                    alignItems={'center'}
                    position={'relative'} 
                    borderRadius={'20px'}  
                    width={percentage} 
                    height={'100%'} 
                    sx={{
                        background: '#fff', 
                        transition: 'all .4s', 
                        animation: 'complete_bar_horizontal 1s'
                }}>
                        
                    <Box 
                        width={'12px'} height={'12px'} 
                        position={'absolute'} right={'0'}
                        borderRadius={'50%'} sx={{background: '#fff'}}>    
                    </Box>
                </Box>
        </Box>
    </ListItem>
  )
}

export default SkillsItem