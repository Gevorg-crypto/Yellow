import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { handlerGetToken } from '../Store/Action';

const Home: NextPage = () => {
  const router = useRouter();
  const handlerLetMeIn = () => {
    try {
      const token = handlerGetToken();
      token.then((data) => {
        console.log(data);
        localStorage.setItem('token', data.response.access_token);
      });
      setTimeout(() => {
        router.push('/account');
      }, 2000);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="h-96 w-screen flex flex-col items-center justify-center">
      <div className="md:bg-pink-800 md:w-96 h-80 rounded-xl flex flex-col justify-center items-center">
        <div className="pt-10 md:pt-5">
          <img src="/images/bearFace.png" className="md:hidden" alt="" />
          <img src="/bear-face.png" className="hidden md:block" alt="" />
        </div>
        <div className="pt-10 md:pt-5">
          <button
            className="px-10 py-3 rounded-full border-4
               border-pink-800 text-pink-800 md:border-white md:text-white"
            onClick={handlerLetMeIn}
          >
            Let me in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
