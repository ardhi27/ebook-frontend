import { ChangeEvent, useState } from "react";
import Input from "../../components/Input";
import Stack from "../../components/Stack";
import Header from "../../components/Header";
import Group from "../../components/Group";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import useAuthenticationHandlers from "../../hooks/useAuthenticationHandlers";
import useModal from "../../hooks/useModal";
import Modal from "../../components/Modal";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const { isOpen, open, close } = useModal();

  const toRegisterPage = () => {
    // navigate("/register");
    open();
  };
  const { login } = useAuthenticationHandlers();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(loginForm);
    console.table(loginForm);
  };

  const handleInputChange = (
    key: keyof typeof loginForm,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setLoginForm((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  return (
    <Stack className="w-full h-screen bg-black">
      <Modal isOpen={isOpen} close={close} variant={"warning"} />
      <Header />
      <Stack className="justify-center items-center-safe grow-1 w-full">
        <Form onSubmit={handleSubmit}>
          <Stack className="w-full items-center">
            <Stack className="bg-white w-1/3 items-center gap-y-3 rounded-lg p-5">
              <span className="text-black text-2xl text-center font-primary font-bold">
                Login
              </span>
              <Input
                placeholder="Email"
                value={loginForm.username}
                onChange={(e) => handleInputChange("username", e)}
              />
              <Input
                placeholder="Password"
                value={loginForm.password}
                onChange={(e) => handleInputChange("password", e)}
              />
              <Button
                className="bg-black w-full text-white p-2 rounded-lg"
                label="Submit"
              />
              <Group className="gap-x-1">
                <span>Dont have an account?</span>
                <Button
                  className="text-blue-700"
                  onClick={toRegisterPage}
                  label="Register"
                />
              </Group>
            </Stack>
          </Stack>
        </Form>
      </Stack>
    </Stack>
  );
};

export default LoginPage;
