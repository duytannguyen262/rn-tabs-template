import FormInput from "@/components/Form/FormInput";
import { View, Text } from "@/components/Themed";
import { LOGIN_URL } from "@/constants/api-urls";
import { signIn } from "@/store/reducers/auth";
import customAxios from "@/utils/axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { SafeAreaView, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import * as yup from "yup";

type FormFields = {
  phone?: string;
  password?: string;
};

const SignIn = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const schema = yup.object({
    phone: yup.string().required("Required ne"),
    password: yup.string().required(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormFields) => {
    try {
      const { phone, password } = values;
      // const res = await customAxios.post(LOGIN_URL, {
      //   phoneCode: "84",
      //   phone,
      //   password,
      // });
      // console.log("res", res);
      dispatch(signIn({ phone, password }));
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text>{t("auth.login_title")}</Text>

        <FormInput
          control={control}
          placeholder="Enter phone"
          name="phone"
          errors={errors}
        />

        <FormInput
          control={control}
          placeholder="Enter password"
          name="password"
          errors={errors}
        />

        {/* <Button onPress={handleSubmit(onSubmit)}>
          <ButtonText>Log in</ButtonText>
        </Button> */}

        <Text>Don't have an account?</Text>
        <Link href={"/sign-up"}>Signup</Link>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
