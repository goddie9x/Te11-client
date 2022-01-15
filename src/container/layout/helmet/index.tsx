import React from "react";
import {Helmet} from "react-helmet";

const THelmet = ()=>{
    //TODO: will change it after get API
    const title = "Te11 app";
    const relativePath = "https://te11test.herokuapp.com";
    const description = "Te11test là trang thử nghiệm cho TE11 sắp ra mắt";
    const verification = "UJFzXrWNZ2ORr4imXzCXIWjc4O3QHHmvMTV4BzCmC6w";

    return <Helmet>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <meta name="description" content={description} />
        <meta name="google-site-verification" content={verification} />
        <link rel="canonical" href={relativePath}/>
    </Helmet>;
};

export default THelmet;