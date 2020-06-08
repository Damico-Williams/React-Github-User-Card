import React from 'react';
import { Card, Image } from 'semantic-ui-react';


const Followers = props => {

    return(
        <div>
           {props.followers && props.followers.map(follow => {
               return (
                   <Card>
                       <Image size='large' src={follow.avatar_url}/>
                       <Card.Content>
                           <Card.Header>{follow.login}</Card.Header>
                       </Card.Content>
                   </Card>
               )
           })}
        </div>
    )
};

export default Followers;