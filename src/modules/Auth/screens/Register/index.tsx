import {useForm, Controller} from 'react-hook-form';
import uuid from 'react-native-uuid';
import React, {useState, useCallback} from 'react';
import Toast from 'react-native-toast-message';
import Title from '../../components/Title';
import ScrollView from '../../../../shared/components/ScrollView';
import Input from '../../../../shared/components/Input';
import {User} from '../../shared/types';
import Box from '../../../../shared/components/Box';
import {Icon} from '../../../../shared/components/Icon';
import Button from '../../../../shared/components/Button';
import Typography from '../../../../shared/components/Typography';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {register} from '../../store';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProps} from '../../../../routes/types';
import Header from '../../../../shared/components/Header';
import Checkbox from '../../../../shared/components/Checkbox';

const Register = () => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const {goBack, navigate} = useNavigation<RootNavigationProps<'Login'>>();

  const {control, handleSubmit, getValues, setValue, watch} = useForm<User>({
    defaultValues: {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      agreeTerms: false,
    },
  });
  const dispatch = useDispatch();

  const agreeTerms = watch('agreeTerms');

  const toggleIsSecure = useCallback(() => {
    setIsSecureTextEntry(!isSecureTextEntry);
  }, [isSecureTextEntry]);

  const onSubmit = useCallback(() => {
    const data = getValues();
    try {
      const userData: User = {
        ...data,
        id: uuid.v4().toString(),
      };

      dispatch(register(userData));
      Toast.show({
        type: 'success',
        text1: 'Profile registered successfully',
      });
      navigate('Login');
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: err as string,
      });
    }
  }, [dispatch, getValues, navigate]);

  return (
    <ScrollView flex={1} paddingX={20} paddingBottom={40}>
      <Header handleBack={goBack}>
        <Box height={5} width={50} backgroundColor="#e8e8e8" marginRight={2} />
        <Box height={5} width={50} backgroundColor="#e8e8e8" marginRight={2} />
        <Box height={5} width={50} backgroundColor="#e8e8e8" />
      </Header>
      <Box marginTop={5}>
        <Title>Create your account</Title>
      </Box>

      <Controller
        control={control}
        name="firstName"
        rules={{required: true}}
        render={({field: {onChange, value}, formState: {errors}}) => (
          <Box marginY={12}>
            <Input
              title="First Name"
              error={errors.firstName}
              onChangeText={onChange}
              value={value}
              placeholder="Type your first name"
            />
          </Box>
        )}
      />

      <Controller
        control={control}
        name="lastName"
        rules={{required: true}}
        render={({field: {onChange, value}, formState: {errors}}) => (
          <Box marginY={12}>
            <Input
              title="Last Name"
              error={errors.lastName}
              onChangeText={onChange}
              value={value}
              placeholder="Type your last name"
            />
          </Box>
        )}
      />

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
              placeholder="Type your e-mail"
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
              error={errors.password}
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

      <Controller
        control={control}
        name="agreeTerms"
        rules={{required: true}}
        render={({formState: {errors}}) => (
          <Box display="flex" width="100%" flexDirection="row" marginTop={19}>
            <Box marginRight={2}>
              <Checkbox
                onSelect={() => {
                  setValue('agreeTerms', !agreeTerms);
                }}
                isSelected={agreeTerms}
                error={errors.agreeTerms}
              />
            </Box>
            <Box>
              <Typography>
                I am over 18 years of age and I have read and agree to the Terms
                of Service and Privacy policy.
              </Typography>
            </Box>
          </Box>
        )}
      />

      <Box marginTop={37}>
        <Button onPress={handleSubmit(onSubmit)}>Create account</Button>
      </Box>

      <Box
        marginTop={13}
        display="flex"
        flexDirection="row"
        width="100%"
        justifyContent="center">
        <Typography fontSize={12} color="#A0A0A0">
          Already have an account?{' '}
        </Typography>
        <TouchableOpacity onPress={goBack}>
          <Typography fontSize={12} color="#000000" textDecoration>
            Log in Here
          </Typography>
        </TouchableOpacity>
      </Box>
    </ScrollView>
  );
};

export default Register;
