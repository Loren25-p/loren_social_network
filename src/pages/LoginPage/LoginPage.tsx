import { Heading } from "../../components/Typography/Heading";
import { Linktext } from "../../components/Typography/Linktext";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Contaainer.style";
import { RegistrationInfo } from "../../components/UI/RegistrationInfo/RegistrationInfo";
import { Input } from "../../components/UI/Input/Input";
import { StyledLoginPage } from "./LoginPage.style";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/Store";
import { changeUser } from "../../Store/userSlice";
import * as yup from "yup";

const mockUser = {
  mail: "qwer@gmai.com",
  phone_number: "+998",
  user_id: 1,
  name: "1",
  reg_data: new Date().toISOString(),
  city: "Ташкент",
};

interface ILoginForm {
  userEmail: string;
  userPassword: string;
}

const loginFormScheme = yup.object({
  userEmail: yup
    .string()
    .required("Обязательное поле")
    .email("Введите корректно свою почту"),
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Пароль должен содержать более 8 символов"),
});

export const LoginPage = () => {
  const user = useSelector((state: RootState) => state.userSlice.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormScheme),
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    dispatch(changeUser(mockUser));
    
    const storedData = JSON.parse(localStorage.getItem("users") || "[]");

    const user = storedData.find(
      (user: { userEmail: string; userPassword: string }) =>
        user.userEmail === data.userEmail &&
        user.userPassword === data.userPassword
    );

    if (user) {
      navigate("/profile-page");
    } else {
      setError("userPassword", {
        type: "manual",
        message: "Неправильный логин или пароль",
      });
      setLoginError("Неправильный логин или пароль");
    }
  };

  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="userEmail"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                placeholder="Ваша почта"
                errorText={errors.userEmail?.message || loginError}
                isError={!!errors.userEmail || !!loginError}
                {...field}
              />
            )}
          />

          <Controller
            name="userPassword"
            control={control}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Пароль"
                errorText={errors.userPassword?.message || loginError}
                isError={!!errors.userPassword || !!loginError}
                {...field}
              />
            )}
          />
          <Button isPrimary={isValid} buttonText="Войти" />
        </form>
        <Linktext text="Забыли пароль?" href="/forgotPassword-page" />
        <RegistrationInfo />
      </StyledLoginPage>
    </Container>
  );
};
