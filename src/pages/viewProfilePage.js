import React from 'react';

import UserInfo from '../components/userInfo'
import {useParams } from 'react-router-dom'


const ViewProfilePage = () =>{
    const { id } = useParams()

    return(
        <div>
               <UserInfo userId={id}/> 
        </div>
    )
}


export default ViewProfilePage