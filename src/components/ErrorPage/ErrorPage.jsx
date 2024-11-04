import { Link } from 'react-router-dom';
import errPage from '../../assets/errPage.jpg'
const ErrorPage = () => {
    return (
        <div>
            <img className='w-2/3 mx-auto' src={errPage} alt="" />
            <div className='mx-auto text-center pb-4'>
                <Link className='' to='/'> <button className=" mt-8 font-semibold rounded-full px-6 py-3 bg-purple-600 text-white">Back Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;