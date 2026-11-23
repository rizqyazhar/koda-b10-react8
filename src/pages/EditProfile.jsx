import { useNavigate } from "react-router";
import { AuthContextReducer } from "../contexts/contextsReducer/contextReducer";
import { useContext, useEffect, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

export default function EditProfile() {
  const { state, dispatch } = useContext(AuthContextReducer);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordChange, setPasswordChange] = useState(
    state?.loggedIn.user?.password,
  );
  const [usernameChange, setUsernameChange] = useState(
    state?.loggedIn.user?.username,
  );

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPasswordChange(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsernameChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "update",
      payload: {
        id: state.loggedIn.user.id,
        username: usernameChange,
        password: passwordChange,
      },
    });
  };

  const handleLogout = () => {
    dispatch({
      type: "logout",
    });
  };

  useEffect(() => {
    if (!state?.loggedIn?.status) navigate("/login");
  }, [state?.loggedIn?.status, navigate]);

  return (
    <div className='w-full min-h-dvh flex flex-col gap-5 justify-center items-center bg-stone-900'>
      <h1 className='text-4xl text-stone-100'>
        Welcome, {state?.loggedIn.user?.username}
      </h1>
      <div className='flex items-center gap-3'>
        <p className='text-stone-100'>Logout?</p>
        <button onClick={handleLogout} type='button'>
          <LuLogOut className='text-stone-100 cursor-pointer' />
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className='w-1/4 p-5 bg-stone-700 border border-stone-100 rounded-lg flex flex-col gap-5'>
        <div className='flex justify-center items-center'>
          <h2 className='text-2xl font-medium text-stone-100'>Update User</h2>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex flex-col gap-0.5'>
            <label
              htmlFor='email'
              className='tex-sm font-medium text-stone-100'>
              Email
            </label>
            <input
              disabled
              type='email'
              id='email'
              name='email'
              value={state?.loggedIn.user?.email}
              placeholder='Masukkan email'
              className='px-4 py-2 outline-none border border-stone-100 rounded-sm text-stone-50 overflow-hidden cursor-not-allowed'
            />
          </div>
          <div className='flex flex-col gap-0.5'>
            <label
              htmlFor='username'
              className='tex-sm font-medium text-stone-100'>
              Username
            </label>
            <input
              onChange={handleUsernameChange}
              type='text'
              id='username'
              name='username'
              value={usernameChange}
              placeholder='Masukkan username'
              className='px-4 py-2 outline-none border border-stone-100 rounded-sm text-stone-50 overflow-hidden'
            />
          </div>
          <div className='flex flex-col gap-0.5'>
            <label
              htmlFor='password'
              className='tex-sm font-medium text-stone-100'>
              Password
            </label>
            <div className='flex justify-between items-center px-4 py-2 border border-stone-100 rounded-sm text-stone-50 overflow-hidden'>
              <input
                onChange={handlePasswordChange}
                type={showPassword ? "text" : "password"}
                id='password'
                name='password'
                placeholder='Masukkan password'
                autoComplete='off'
                value={passwordChange}
                className='w-full outline-none border-none'
              />
              <button
                onClick={() => setShowPassword((prev) => !prev)}
                type='button'
                className='cursor-pointer'>
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>
          </div>
        </div>
        <button
          type='submit'
          className='w-full flex justify-center items-center py-2 rounded bg-stone-100 text-stone-700'>
          Submit
        </button>
      </form>
    </div>
  );
}
