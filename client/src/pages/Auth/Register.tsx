import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { postUserRegister } from '@/api/auth.api';
import { CustomAxiosError } from '@/type/error.type';
import { sxLogin } from './Login';
import { LogoKoreanWhiteIcon } from '@/assets/svg';
import useModal from '@/hooks/useModal';

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({ email: '', nickname: '', password: '', passwordConfirm: '' });
  const { showToast } = useModal();
  const navigate = useNavigate();

  const { mutate } = useMutation(postUserRegister, {
    onSuccess: () => {
      showToast('회원가입이 완료되었습니다.');
      navigate('/login');
    },
    onError: (err: CustomAxiosError) => {
      const errorMsg = err.response?.data?.message?.toString() || '회원가입에 실패하였습니다.';
      showToast(errorMsg);
    },
  });

  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    setRegisterInfo((prev) => ({ ...prev, [id]: value }));
  };

  const onRegisterSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    mutate(registerInfo);
  };

  return (
    <div className={sxLogin.container}>
      <LogoKoreanWhiteIcon />
      <form onSubmit={onRegisterSubmit} className={sxLogin.form}>
        <input id="email" value={registerInfo.email} onChange={handleChangeValue} placeholder="이메일" />
        <input id="nickname" value={registerInfo.nickname} onChange={handleChangeValue} placeholder="닉네임" />
        <input
          id="password"
          type="password"
          value={registerInfo.password}
          onChange={handleChangeValue}
          placeholder="비밀번호"
        />
        <input
          id="passwordConfirm"
          type="password"
          value={registerInfo.passwordConfirm}
          onChange={handleChangeValue}
          placeholder="비밀번호 확인"
        />
        <button type="submit" className={sxLogin.button}>
          회원가입
        </button>

        <div className={`${sxLogin.linkBox} mb-[80px]`}>
          <Link to={'/login'}>
            <button>로그인하러 가기</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
