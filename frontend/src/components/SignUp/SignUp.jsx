import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <h1 className='text-center font-[700] text-[60px]'>Sign Up</h1>
            <form className='w-[75%] mx-auto flex flex-col justify-between drop-shadow-xl'>
                <section className='my-3'>
                    <label className='text-left font-[600] text-[38px]'>
                        Full Name
                    </label>
                    <input
                        name='name'
                        type='text'
                        className='border-[3.5px] rounded-[25px] w-[100%] border-black text-[30px] px-5 py-2 transition-all duration-200 ease-in-out hover:border-devBlue'
                        required={true}
                        placeholder='Enter Full Name'
                    />
                </section>
                <section className='my-3'>
                    <label className='text-left font-[600] text-[38px]'>
                        Email Id
                    </label>
                    <input
                        name='email'
                        type='email'
                        className='border-[3.5px] rounded-[25px] w-[100%] border-black text-[30px] px-5 py-2 transition-all duration-200 ease-in-out hover:border-devBlue'
                        required={true}
                        placeholder='Enter Email Id'
                    />
                </section>
                <section className='my-3'>
                    <label className='text-left font-[600] text-[38px]'>
                        Password
                    </label>
                    <input
                        name='password'
                        type='password'
                        className='border-[3.5px] rounded-[25px] w-[100%] border-black text-[30px] px-5 py-2 transition-all duration-200 ease-in-out hover:border-devBlue'
                        required={true}
                        placeholder='Enter Password'
                    />
                </section>
                <section className='my-3'>
                    <label className='text-left font-[600] text-[38px]'>
                        Confirm Password
                    </label>
                    <input
                        name='confirmPassword'
                        type='password'
                        className='border-[3.5px] rounded-[25px] w-[100%] border-black text-[30px] px-5 py-2 transition-all duration-200 ease-in-out hover:border-devBlue'
                        required={true}
                        placeholder='Re-Enter Password'
                    />
                </section>

                <button
                    type='submit'
                    className='text-[35px] font-[700] text-white bg-[#3F00F3] w-[16%] h-[10vh] text-center flex justify-center items-center mx-auto mt-5 border-[3px] rounded-[36px] border-black transition-all duration-200 ease-in-out hover:text-devYellow'
                >
                    Sign Up
                </button>
            </form>
            <section className='flex flex-col justify-center items-center mt-2 mb-5 text-[30px]'>
                <p>Already on AI Powered Chat Application?</p>
                <Link to='/login'>
                    <p className='text-[#3F00F3]'>Log In</p>
                </Link>
            </section>
        </div>
    );
};

export default SignUp;
