import Outstanding from './components/Outstanding';
import RecentNovels from './components/RecentNovels';
import RecentAdd from './components/RecentAdd';
import ChapterAdd from './components/ChapterAdd';
import { useEffect, useState } from 'react';
import { AuthState, Payment, UserFull } from '../../types/auth';
import { checkLogin } from '../Auth/utils/login.util';

const Home = () => {
    const [user, setUser] = useState<UserFull>()
    const [auth, setAuth] = useState<AuthState>();

    useEffect(() => {
        const checkout = async () => {
            const data = await checkLogin();
            setAuth(data);
            const data2 = await fetch(`http://localhost:8888/api/users/${data.user.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${data.accessToken}`
                }
            })
            const res = await data2.json();
            setUser(res);
            console.log(1);
            res.payment.map(async (payment: Payment) => {
                console.log(payment.orderId);

                let data3 = await fetch("http://localhost:8888/api/check-status-transaction", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${data.accessToken}`
                    },
                    body: JSON.stringify({
                        orderId: payment.orderId
                    })
                })
            })
            console.log(2);
        }
        checkout()
    }, [])

    return (
        <div className="min-h-screen bg-gray-900 p-6 flex flex-col gap-8">
            {/* Content */}
            <div className="w-full max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl text-white text-center mb-10 font-medium">
                    Digital Library
                </h1>

                <div className="w-full flex flex-col lg:flex-row gap-6 mb-8">
                    <div className="w-full lg:w-3/4">

                        <Outstanding />
                    </div>

                    <div className="w-full lg:w-1/4">
                        <RecentNovels />
                    </div>
                </div>

                <div className="w-full mb-8">
                    <RecentAdd />
                </div>

                <div className="w-full">
                    <ChapterAdd />
                </div>
            </div>
        </div>
    );
};

export default Home;