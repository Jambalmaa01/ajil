import { AppBar, Avatar, Toolbar, Stack, Typography } from "@mui/material";
import { accountAtom,  } from "../account/atom";
import { useAtomValue } from "jotai";

export function HomeAppBar(){
    const account =useAtomValue(accountAtom)
    return(
        <AppBar>
            <Toolbar>
                <Stack>
                <Avatar>
                  {account?.ner?.[0]}
                </Avatar>
                <Stack>
                <Typography variant='body2'>{`${account?.tsol} ${account?.ner}`}</Typography>
                    <Typography variant="caption">{`${account?.person_role==='auser'
                     ? ('Ангийн хэрэглэгч')
                      :account?.person_role ==='euser'
                      ?('ХХЕГ хэрэглэгч')
                      :account?.person_role==='zuser'
                      ?('Заставын хэрэглэгч ')
                      :''
                    }`}</Typography>
                    
                </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}