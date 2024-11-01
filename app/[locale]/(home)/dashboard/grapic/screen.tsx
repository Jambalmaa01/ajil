'use client'

import { Box, Button, Toolbar, Grid } from "@mui/material"

import { BureldehuunGraphic } from "../../graphic/BvreldehvvnGrapick"

import { AutoMashinTehnikGraphic } from "../../graphic/AutoMashinTehnikGraphic"
export function GrapikScreen(){
    return(
        <Box>
            <Toolbar>
                <Button>
                    Vndsen haagdats
                </Button>
            </Toolbar>
          <Grid>
            <BureldehuunGraphic/>
          </Grid>
          <Grid>
            <AutoMashinTehnikGraphic/> 
          </Grid>
        
        
        </Box>
    )
}