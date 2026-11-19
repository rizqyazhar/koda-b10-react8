import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContextReducer } from "../contexts/contextsReducer/contextReducer";

export default function Login() {
  const { state, dispatch } = useContext(AuthContextReducer);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const findUser = state.users.find((user) => user.email === email);

    if (!findUser) {
      window.alert(
        "Akun anda belom terdaftar, harap registrasi terlebih dahulu",
      );
      return navigate("/register");
    }

    if (findUser.password !== password)
      return window.alert("Email atau password anda salah");

    dispatch({
      type: "login",
      payload: { status: true, user: findUser },
    });

    e.target.reset();

    navigate("/");
  };

  return (
    <div className='w-full min-h-dvh flex justify-center items-center bg-stone-900'>
      <form
        onSubmit={handleSubmit}
        className='w-1/4 p-5 bg-stone-700 border border-stone-100 rounded-lg flex flex-col gap-5'>
        <div className='flex justify-center items-center'>
          <h1 className='text-2xl font-medium text-stone-100'>Login</h1>
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
