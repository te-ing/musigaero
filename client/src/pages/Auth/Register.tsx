import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { postUserRegister } from '@/api/auth.api';
import { isValidate, registerInputValidate } from '@/utils/validation';
import { CustomAxiosError } from '@/type/error';

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({ email: '', nickname: '', password: '', passwordConfirm: '' });
  const [registerError, setRegisterError] = useState({ email: '', nickname: '', password: '', passwordConfirm: '' });
  const navigate = useNavigate();

  const { mutate } = useMutation(postUserRegister, {
    onSuccess: () => navigate('/login'),
    onError: (err: CustomAxiosError) => {
      const errorMsg = err.response?.data?.message?.toString() || '회원가입에 실패하였습니다.';
    },
  });

  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    setRegisterInfo((prev) => ({ ...prev, [id]: value }));
  };

  const onRegisterSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const validation = registerInputValidate(registerInfo);
    if (isValidate(validation)) {
      mutate(registerInfo);
    }
    setRegisterError(validation);
  };

  return (
    <div>
      <div>
        <form onSubmit={onRegisterSubmit}>
          <input id="email" value={registerInfo.email} onChange={handleChangeValue} />
          <input id="nickname" value={registerInfo.nickname} onChange={handleChangeValue} />
          <input id="password" type="password" value={registerInfo.password} onChange={handleChangeValue} />
          <input
            id="passwordConfirm"
            type="password"
            value={registerInfo.passwordConfirm}
            onChange={handleChangeValue}
          />
          <div>
            <button type="submit">회원가입</button>
            <Link to={'/login'}>
              <button>취소</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
