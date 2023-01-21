import { useRouter } from "next/router"


export default function Page02(props) {

    const router = useRouter();

    console.log(router);

    return <div>
        Example
    </div>
}