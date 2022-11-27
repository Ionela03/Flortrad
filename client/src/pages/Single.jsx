import React from 'react'
import Menu from '../components/Menu'
import Hands from "../images/hands.jpg"
import Eu from "../images/eu.jpg"
import Edit from "../images/edit.png"
import Delete from "../images/delete.jpg"
import { Link } from 'react-router-dom'
const Single = () => {
    return(
        <div className="single">

            <div className="content">
                <img src={Hands} alt=""/>
            <div className="user">
                <img src={Eu} alt=""/>
                
            <div className="info">
                    <span>Ionela</span>
                    <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
                <Link to={`/write?edit=2`}>
                <img src={Edit} alt=""/>
                </Link>
                <img src={Delete} alt=""/>
            </div>
            </div>
            <h1>Ionela a publicat ceva dext iar aici este titlul</h1>
            <p>Informațiile colectate pot include numele, numele companiei, CUI-ul, adresa de corespondență sau reședința, numărul de telefon, adresa de e-mail și alte detalii despre tranzacție și înregistrare.
Dacă alegeți să nu ne furnizați informațiile dumneavoastră personale, este posibil să nu putem furniza informațiile, bunurile sau serviciul pe care îl puteți solicita de la noi.
            </p>
            </div>
       <Menu />
        </div>
    )
}

export default Single