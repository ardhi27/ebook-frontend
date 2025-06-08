import React from "react";
import Input from "../../components/Input";
import Stack from "../../components/Stack";
import Header from "../../components/Header";
import Group from "../../components/Group";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
const LoginPage = () => {
  const navigate = useNavigate();
  const toRegisterPage = () => {
    navigate("/register");
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log("Test Handle Submit Function");
  };

  return (
    <Stack className="w-full h-screen bg-black">
      <Header />
      <Stack className="justify-center h-full w-full">
        <Form onSubmit={handleSubmit}>
          <Stack className="w-full items-center">
            <Stack className="bg-white w-1/3 items-center gap-y-3 rounded-lg p-5">
              <span className="text-black text-2xl text-center font-primary font-bold">
                Login
              </span>
              <Input placeholder="Email" />
              <Input placeholder="Password" />
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
