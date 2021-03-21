import React, { useState } from 'react';
import {
  f7,
  Page,
  LoginScreenTitle,
  List,
  ListInput,
  Button,
  BlockFooter,
} from 'framework7-react';

export default ({ f7router }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const load = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      f7router.navigate('/home/')
    }, 4000);
  };
  return (
    <Page noToolbar noNavbar noSwipeback loginScreen>
    <LoginScreenTitle>
        <img
          src="https://static.sehatq.com/web/assets/img/logo.svg?v=4"
          width='150'
        />
    </LoginScreenTitle>
        <List form>
                <ListInput
                label="Username"
                type="text"
                placeholder="Your username"
                value={username}
                onInput={(e) => {
                    setUsername(e.target.value);
                }}
                />
                <ListInput
                label="Password"
                type="password"
                placeholder="Your password"
                value={password}
                onInput={(e) => {
                    setPassword(e.target.value);
                }}
                />
            </List>
            <List
                style={{
                    padding:'0px 10px 0px 10px'
                }}
            >
                <Button fill preloader loading={isLoading} onClick={load}>
                    Sign In
                </Button>
            </List>
    </Page>
  );
};