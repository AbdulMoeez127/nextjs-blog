import { useRouter } from 'next/router';
export default function Doc() {
    const router = useRouter();
    console.log(router.query)
    return <div>Here are the simple params</div>
}