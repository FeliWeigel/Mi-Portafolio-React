/* eslint-disable react/prop-types */
import { useState } from "react"

import { Box, Typography } from "@mui/material"


const SkillsBar = ({percentage, skill}) => {
    const [skillDetails, setSkillDetails] = useState(false)
    
    function showSkillDetails(){
        setSkillDetails(true)
    }

    function hiddenSkillDetails(){
        setSkillDetails(false)
    }
    return (
        <Box 
            display={'flex'} 
            flexDirection={'column'} 
            alignItems={'center'}
            width={'100%'}
            gap={'.3rem'}
            alignSelf={'flex-end'}
            height={percentage}
            sx={{
                transition: '.4s', 
                animation: 'complete_bar_vertical 1s'
        }}>
            <Box 
                onMouseOver={showSkillDetails}
                onMouseLeave={hiddenSkillDetails}
                height={'100%'} 
                position={'relative'}
                borderRadius={'4px'} 
                width={'37%'} 
                sx={{
                    backgroundColor: '#fff',
                    cursor: 'pointer',
                    transition: '.4s',
                    ":hover": {
                        transform: 'scale(1.06)'
                    }
            }}>
                {skillDetails ? 
                    <Typography 
                        typography={'p'} 
                        position={'absolute'}
                        width={'85px'}
                        padding={'4px'}
                        top={'30%'} 
                        left={'-80px'}
                        borderRadius={'5px'}
                        boxShadow={'0px 0px 3px 0px rgba(0,0,0,0.87)'}
                        textAlign={'center'} 
                        fontSize={'.9rem'}
                        sx={{background: '#fff'}}>{skill}</Typography> 
                    : null
                }
            </Box>
            <Typography typography={'p'} fontSize={'.95rem'} color={'rgba(255,255,255,0.5)'}>({percentage})</Typography>
        </Box>
    )
}

export default SkillsBar