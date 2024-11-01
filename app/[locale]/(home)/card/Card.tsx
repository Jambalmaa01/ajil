import React from "react";
import {Box, Typography} from '@mui/material'

interface CardProps{
    img:JSX.Element |string;
    title:string;
    subtitle:string;
    background:string;
    iconColor:string;
    iconBorderColor:string
}

export const Card: React.FC<CardProps>=({
    img,
    title,
    subtitle,
    background,
    iconColor,
    iconBorderColor,
})=>{
    return(
        <Box 
        sx={{
            mx:1,
            boxShadow:3,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            padding:1,
            borderColor:'secondary.main',
            borderRadius:2,
            position:'relative',
            background: background

        }}>
          {typeof img==='string'?(
            <img
              src={img}
              alt="Icon"
              width={24}
              style={{position:'absolute', top:-15, left:-15}}
            />
          ):(
            <Box 
              style={{position:'absolute', top:-15, left:-15}}
              sx={{
                border:1,
                borderRadius:'50%',
                paddingY:1,
                paddingX:1,
                borderColor:iconBorderColor,
                backgroundColor: iconBorderColor,
                color:iconColor
              }}
              >
                 {
                    React.cloneElement(img,{style:{color:iconColor, fontSize:24}})
                 }
            </Box>
          )}
          <Box 
          sx={{
            display:'flex',
            alignItems:'center'
          }}
          >
            <Typography sx={{
            fontSize:{
                xs:'1rem',
                sm:'1rem',
                md:'0.8rem',
                lg:'0.9rem',
                xl:'16px',
            },
            marginLeft:1
          }}>
             {title}
            </Typography>

          </Box>
          <Typography sx={{
            fontSize: {
                xs: '1rem',
                sm: '1rem',
                md: '0.8rem',
                lg: '0.9rem',
                xl: '16px',
              },
          }}>
           {subtitle}
          </Typography>
        </Box>
    )
}