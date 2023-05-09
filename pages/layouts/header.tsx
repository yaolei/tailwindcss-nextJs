import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { useState } from 'react';

type headersOptions = "headers";

interface headersOptionsValue  {
    title:string,
    url:string;
}
const headers:Record<headersOptions, headersOptionsValue> = {
    headers:{title: "2", url: "@"}
}


 const Header = ():void => {
    console.log(headers)
}

export default Header

