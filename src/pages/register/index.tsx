import { ChangeEvent, useState } from "react";
import Input from "../../components/Input";
import Stack from "../../components/Stack";
import Header from "../../components/Header";
import Group from "../../components/Group";
import Button from "../../components/Button";
import Form from "../../components/Form";
import useAuthenticationHandlers from "../../hooks/useAuthenticationHandlers";

const RegisterPage = () => {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
  });

  const { register } = useAuthenticationHandlers();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(registerForm);
    console.table(registerForm);
  };

  const handleInputChange = (
    key: keyof typeof registerForm,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setRegisterForm((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  return (
    <Stack className="w-full h-screen bg-black">
      <Header />
      <Stack className="justify-center items-center-safe grow-1 w-full">
        <Form onSubmit={handleSubmit}>
          <Stack className="w-full items-center">
            <Stack className="bg-white w-1/3 items-center gap-y-3 rounded-lg p-5">
              <span className="text-black text-2xl text-center font-primary font-bold">
                Register
              </span>
              <Input
                placeholder="Email"
                value={registerForm.username}
                onChange={(e) => handleInputChange("username", e)}
              />
              <Input
                placeholder="Password"
                value={registerForm.password}
                onChange={(e) => handleInputChange("password", e)}
              />
              <Button
                className="bg-black w-full text-white p-2 rounded-lg"
                label="Submit"
              />
              <Group className="gap-x-1">
                <span>Have an account?</span>
                <Button className="text-blue-700" label="Login" />
              </Group>
            </Stack>
          </Stack>
        </Form>
      </Stack>
    </Stack>
  );
};

export default RegisterPage;
