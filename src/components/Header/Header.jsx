import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between py-4 mx-10 border-b-2'>
            <div>
                <h1 className='text-4xl font-bold'>Cyber<span className="text-red-400 ">Cafe</span> </h1>
            </div>
            <div>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;