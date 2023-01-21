import { useEffect, useState } from "react";


export default function Page01(props) {
    const [info, setInfo] = useState('Empty')
    const getInfo = async () => {
        let response = await fetch('/api/redirect', {
            method: 'POST',
            body: 1,
        })
        console.log(response);
    }

    useEffect(() => {
        getInfo();
    }, [])

    return <div>
        Example {info} {props.param}
    </div>
}


export async function getServerSideProps(context) {

    const { params, query } = context;


    const makeProps = async () => {

        let promise = new Promise(function (resolve, reject) {
            setTimeout(() => resolve({ props: { param: 245, params, query } }), 10000);
        });

        return promise

    }

    return await makeProps();
}