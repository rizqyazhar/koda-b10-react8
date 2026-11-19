import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContextReducer } from "../contexts/contextsReducer/contextReducer";

export default function Register() {
  const { dispatch } = useContext(AuthContextReducer);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");

    dispatch({
      type: "register",
      payload: { email, username, password },
    });

    e.target.reset();

    window.alert("Register Berhasil");
    navigate("/login");
  };

  return (
    <div className='w-full min-h-dvh flex justify-center items-center bg-stone-900'>
      <form
        onSubmit={handleSubmit}
        className='w-1/4 p-5 bg-stone-700 border border-stone-100 rounded-lg flex flex-col gap-5'>
        <div className='flex justify-center items-center'>
          <h1 className='text-2xl font-medium text-stone-100'>Register</h1>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex flex-col gap-0.5'>
            <label
              htmlFor='email'
              className='tex-sm font-medium text-stone-100'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Masukkan email'
              className='px-4 py-2 outline-none border border-stone-100 rounded-sm text-stone-50 overflow-hidden'
            />
          </div>
          <div className='flex flex-col gap-0.5'>
            <label
              htmlFor='username'
              className='tex-sm font-medium text-stone-100'>
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
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
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Masukkan password'
              autoComplete='off'
              className='px-4 py-2 outline-none border border-stone-100 rounded-sm text-stone-50 overflow-hidden'
            />
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
