import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react'

const Githubcard = props => {
    console.log(props)

    return(
        <div>
           <Card centered>
               <Image size='large' src={props.userData.avatar_url}/>
               <Card.Content>
                  <Card.Header>{props.userData.name}</Card.Header>
               </Card.Content>
               </Card> 
        </div>
    )
};

export default Githubcard