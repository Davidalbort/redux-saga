import React from 'react';


const Logo = ({className}) =>{
    const urlLogo= 'http://www.realhost.com.mx/site/img/LogoRealhostBlue.png';
    return(
        <a href='http://www.realhost.com.mx/site/' className={className}>
            <img src={urlLogo} alt='Logo de REALHOST'  className=''/>
        </a>
    )
}

export {Logo};