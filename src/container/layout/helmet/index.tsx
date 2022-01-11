import React from "react";
import {Helmet} from "react-helmet";

const THelmet = ()=>{
    //TODO: will change it after get API
    const title = "Te11 app";
    const relativePath = "https://te11test.herokuapp.com";
    const description = "Te11 app description";
    const verification = "googlebc518704c4c4ae36.html";

    return <Helmet>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <meta name="description" content={description} />
        <meta name="google-site-verification" content={verification}/>
        <link rel="canonical" href={relativePath}/>
    </Helmet>;
};

export default THelmet;