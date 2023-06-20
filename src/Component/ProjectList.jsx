import React from 'react'
import { List, ListItem, ListItemButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function ProjectList() {
  return (
    <div>
      <List>
        <ListItem>
            <ListItemButton>
                <div className="round-1" style={{height:'8px', width:'8px', backgroundColor:'#7AC555', borderRadius:'50%', marginRight:'16px', marginBottom:'1  px'}}></div>
                <div className="firstText" style={{lineHeight:'19.36px', fontSize:'16px', margin:'10px 0px 10px 0px'}}>Mobile App</div>
                <MoreHorizIcon></MoreHorizIcon>
            </ListItemButton>
        </ListItem>
      </List>
    </div>
  )
}

export default ProjectList
