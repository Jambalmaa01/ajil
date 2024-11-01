import {Card, CardContent, Grid,   Typography, useTheme} from '@mui/material'
import { useDashboard } from './useDashoard'
import CardFlip from '../card/CardFlip'


export function UGBHManaa(){

    const theme=useTheme();
    const isDarkMode=theme.palette.mode==='dark'
    const {data, isLoading, isError}=useDashboard()
    const tomilgooData=data?.tomilgoo;

    const labelsAndValues=tomilgooData
    ?[
        {label:'Заставаас гарсан манаа', value:tomilgooData.niitManaa},
        { label:'харуулаас гарсан манаа', value:tomilgooData.niitHaruul},
        {label:'Нийт манаа', value:tomilgooData.hzgbcTomilgoo},
        {label:'Нийм хүн', value:tomilgooData.niitHvn},
        { label: 'ХЗГБЧ-д гарсан харуул', value: tomilgooData.hzgbcHaruul },
        { label: 'ХЗГБЧ-д гарсан манаа', value: tomilgooData.hzgbcManaa },
        { label: 'ХЗГБЧ-д гарсан хүн', value: tomilgooData.hzgbcTomilgoo }
    ]:[]

 const frontCard=()=>{
    return(
        <Card 
        sx={{
            height:'25vh',
            boxShadow:3,
            bgcolor:'yellow',
            color:isDarkMode ? 'text.primary' : 'text.secondary',
            borderColor:'background.paper',
            margin:1,
            borderRadius:2,
            fontSize:12,
            position:'relative',
            borderRight:`4px solid ${isDarkMode} ?  '#2e3b55' : '#A0DEFF' `

        }}>

            <CardContent>
                <Grid fontSize={10} columnSpacing={{xs:1, sm:2, md:3}}>
                   <Grid>
                    <Typography 
                    sx={{ 
                     fontSize:{
                        xs: '1rem',
                        sm: '0.5rem',
                        md: '1rem',
                        lg: '0.8rem',
                        xl: '1rem',
                     },
                     textAlign:'center',
                   }}>vvreg gvitsetgej bui haruul, manaa </Typography>
                   </Grid>
                 {isLoading?(
                    <Typography textAlign='center'>loading</Typography>
                 ):isError?(
                    <Typography textAlign='center'>aldaa</Typography>
                 ): tomilgooData ?(
                    <>
                     <Grid sx={{
                    fontSize: {
                      xs: '3rem',
                      sm: '0.5rem',
                      md: '2.6rem',
                      lg: '1.8rem',
                      xl: '2.5rem',
                    },
                    textAlign: 'center',
                  }}
                  fontWeight={'bold'}
                  textAlign='center'
                  color={'#5AB2FF'}
                  marginRight={0.1}>
                        {tomilgooData.niitManaa}
                     </Grid>
                     <Grid fontSize={10} textAlign={'center'} marginRight={0.1}>niit manaa</Grid>
                      
                    </>
                 ):(
                    <Typography>medeelel baihgvi</Typography>
                 )

                 }

                </Grid>
            </CardContent>

        </Card>
    )
 }

  



 const backCard=()=>{
    return(
        <Card 
          sx={{
            height: '25vh',
            boxShadow: 3,
            bgcolor: 'background.paper',
            color: isDarkMode ? 'text.primary' : 'text.secondary',
            borderColor: 'background.paper',
            borderRadius: 2,
            margin: 1,
            fontSize: 12,
            position: 'relative',
            borderRight: `4px solid ${isDarkMode ? '#2e3b55' : '#A0DEFF'}`,
          }}>
            <CardContent>
                <Grid fontSize={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid>
                        <Typography 
                        sx={{
                            fontSize: {
                              xs: '1rem',
                              sm: '0.5rem',
                              md: '0.7rem',
                              lg: '0.9rem',
                              xl: '1rem',
                            },
                          }}
                          textAlign='center'
                          paddingBottom={1}>
                            vvreg gvitsetgej bui haruul manaa
                          </Typography>
                    </Grid>

                      {isLoading ?(
                        <Typography textAlign={'center'}>loading</Typography>
                      ):isError ?(
                        <Typography textAlign={'center'}>aldaa</Typography>
                      ):labelsAndValues.length>0 ?(
                         labelsAndValues.map((item, index)=>(
                            <Grid key={index} 
                            display='flex'
                            justifyContent='space-between'
                            sx={{
                                fontSize:{xs:'0.8rem', sm:'0.4rem', md:'0.5rem', lg:'0.5rem', xl:'12px'},
                            
                            }}
                            >
                              <Grid> {item.label}</Grid>
                              <Grid> {item.value ??'...'}</Grid>
                            </Grid>
                         ))
                      ):(
                        <Typography textAlign='center'>
                            medeelel baihgvv
                        </Typography>
                      )

                      }


                </Grid>
            </CardContent>
        </Card>
    )
 }


 return(
    <CardFlip frontCard={frontCard()} backCard={backCard()} height='25vh'/>
 )
}
