import {useForm, Controller} from 'react-hook-form';
import React, {useState} from 'react';
import Title from '../../components/Title';
import ScrollView from '../../../../shared/components/ScrollView';
import Input from '../../components/Input';
import {LoginForm} from '../../shared/types';
import Box from '../../../../shared/components/Box';

const Login = () => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const {control} = useForm<LoginForm>();

  return (
    <ScrollView flex={1} paddingX={20}>
      <Box marginTop={95}>
        <Title>Login</Title>
      </Box>

      <Controller
        control={control}
        name="email"
        rules={{required: true}}
        render={({field: {onChange, value}, formState: {errors}}) => (
          <Box marginY={12}>
            <Input
              title="E-mail"
              error={errors.email}
              onChangeText={onChange}
              value={value}
            />
          </Box>
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: true,
          minLength: {
            value: 8,
            message: 'Minimum 8 characters',
          },
        }}
        render={({field: {onChange, value}, formState: {errors}}) => (
          <Box marginY={12}>
            <Input
              title="Password"
              error={errors.email}
              onChangeText={onChange}
              value={value}
              placeholder="Minimum 8 characters"
              secureTextEntry={isSecureTextEntry}
            />
          </Box>
        )}
      />
    </ScrollView>
  );
};

export default Login;
