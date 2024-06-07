import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeSlash, Lock } from 'iconsax-react-native';
import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { ControlledInput, Text, View } from '@/ui';
import ButtonLinear from '@/ui/core/button-linear';

const schema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;

export type LoginFormProps = {
  onSubmit?: SubmitHandler<FormType>;
  isLoading?: boolean;
};

export const LoginForm = ({
  onSubmit = () => {},
  isLoading,
}: LoginFormProps) => {
  const [isShowPw, setIsShowPw] = useState<boolean>(true);
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  return (
    <View className="flex-1 justify-center p-4">
      <Text testID="form-title" variant="h1" className="pb-6 text-center">
        Sign In
      </Text>
      <ControlledInput
        testID="email-input"
        control={control}
        name="email"
        label="Email"
        placeholder="Nhập Email"
      />
      <ControlledInput
        testID="password-input"
        control={control}
        name="password"
        label="Password"
        placeholder="nhập mật khẩu"
        secureTextEntry={isShowPw}
        iconLeft={{ name: Lock }}
        iconRight={{
          name: isShowPw ? Eye : EyeSlash,
          onPress: () => setIsShowPw((prev) => !prev),
        }}
      />
      <ButtonLinear
        borderRadius="medium"
        loading={isLoading}
        testID="login-button"
        label="Login"
        onPress={handleSubmit(onSubmit)}
        variant="primary"
      />
    </View>
  );
};
