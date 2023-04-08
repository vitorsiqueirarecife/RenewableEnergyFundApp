import {useForm, Controller} from 'react-hook-form';
import React, {useState, useCallback} from 'react';
import Title from '../../components/Title';
import ScrollView from '../../../../shared/components/ScrollView';
import Input from '../../../../shared/components/Input';
import {LoginForm} from '../../shared/types';
import Box from '../../../../shared/components/Box';
import {Icon} from '../../../../shared/components/Icon';
import Button from '../../../../shared/components/Button';
import Typography from '../../../../shared/components/Typography';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../../store';

const Login = () => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const {control, handleSubmit, getValues} = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const dispatch = useDispatch();

  const toggleIsSecure = useCallback(() => {
    setIsSecureTextEntry(!isSecureTextEntry);
  }, [isSecureTextEntry]);

  const onSubmit = useCallback(() => {
    const data = getValues();
    dispatch(login(data));
  }, [dispatch, getValues]);

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
              adornment={
                <Icon
                  size="large"
                  color="#A0A0A0"
                  name={isSecureTextEntry ? 'eye' : 'eye-off'}
                />
              }
              adornmentAction={toggleIsSecure}
            />
          </Box>
        )}
      />

      <Box marginTop={37}>
        <Button onPress={handleSubmit(onSubmit)}>Login</Button>
      </Box>

      <Box
        marginTop={13}
        display="flex"
        flexDirection="row"
        width="100%"
        justifyContent="center">
        <Typography fontSize={12} color="#A0A0A0">
          Don’t have an account?{' '}
        </Typography>
        <TouchableOpacity onPress={() => {}}>
          <Typography fontSize={12} color="#A0A0A0" textDecoration>
            Sign up
          </Typography>
        </TouchableOpacity>
        <Typography fontSize={12} color="#A0A0A0">
          {' '}
          here
        </Typography>
      </Box>
    </ScrollView>
  );
};

export default Login;
