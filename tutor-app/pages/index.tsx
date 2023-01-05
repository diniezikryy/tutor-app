import { Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (data) {
        setUser(data.session?.user);
      }
    };

    loadUser();
  }, []);

  console.log(user);

  return (
    <>
      <div>
        {user ? (
          <div>
            <Text>Hello, {user.email}</Text>
          </div>
        ) : (
          <div>
            <Text>Hello, World</Text>
          </div>
        )}
      </div>
    </>
  );
}
