import { Button, PasswordInput, TextInput, Title } from "@mantine/core";
import React, { useState } from "react";
import { supabase } from "../../supabase";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "diniezikrymc@gmail.com",
      password: "P@ssword1",
    });

    console.log(data);
    console.log(error);
  };

  return (
    <div>
      <Title order={1}>Login page</Title>
      <TextInput placeholder="Email" label="Email" withAsterisk />
      <PasswordInput
        placeholder="Password"
        label="Password"
        description="Password must include at least one letter, number and special character"
        withAsterisk
      />
      <Button onClick={handleSubmit}>Login</Button>
    </div>
  );
};

export default LoginPage;
