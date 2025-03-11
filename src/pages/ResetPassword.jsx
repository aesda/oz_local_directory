import { HashtagIcon, LockClosedIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router';
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../validation/register';

function ResetPassword() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    
      const onSubmit = (data) => console.log(data)


    return (
        <>
            <p className="text-sm text-gray-500">
                One DeepSeek account is all you need to access to all DeepSeek services.
            </p>

            <p className="text-sm text-gray-500">
                Only email registration is supported in your region.
            </p>


            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
               

                <div>
                <div className="mt-2 grid grid-cols-1">
                    <input
                        id="password"
                        {...register("password")}
                        type="password"
                        placeholder="Password"
                        className="col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5 pl-10 pr-3 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
                    />
                    <LockClosedIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                    />
                </div>
                {errors.password && (<span className='text-sm text-red-500'>{errors.password.message}</span>)}
                </div>

                <div><div className="mt-2 grid grid-cols-1">
                    <input
                        id="confirm_password"
                        {...register("confirm_password")}
                        type="password"
                        placeholder="Confirm Password"
                        className="col-start-1 row-start-1 block w-full rounded-md bg-white py-2.5 pl-10 pr-3 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
                    />
                    <LockClosedIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                    />
                </div>
                {errors.confirm_password && (<span className='text-sm text-red-500'>{errors.confirm_password.message}</span>)}
                </div>


                


               


                <input type='submit' value="Sign up" className=" mt-8 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"/>
                {errors.submit && (<span className='text-sm text-red-500'>{errors.submit.message}</span>)}


            </form>

            <div className='flex justify-between'>
                <Link to="/forgot-password" className='text-blue-600 text-sm'>Forgot Password?</Link>
                <Link to="/login" className='text-blue-600 text-sm'>Log in</Link>
            </div>

        </>
    );
}

export default ResetPassword;