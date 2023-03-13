import React from "react";

import { Img, Text, Button, Input } from "components";

const SignupPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex font-inter mx-[auto] relative w-[100%]">
        <div className="h-[1024px] my-[auto] md:px-[20px] md:w-[100%] w-[58%]">
          <Img
            src="images/img_image_1024x830.png"
            className="h-[1024px] m-[auto] object-cover w-[100%]"
            alt="image"
          />
          <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[27%]">
            <Text
              className="font-normal not-italic text-center text-white_A700 w-[auto]"
              as="h1"
              variant="h1"
            >
              Hello!
            </Text>
            <Text
              className="font-normal mt-[12px] not-italic text-center text-white_A700 w-[auto]"
              as="h4"
              variant="h4"
            >
              Already have an account?
            </Text>
            <Button className="bg-indigo_A200 cursor-pointer font-normal min-w-[220px] mt-[30px] not-italic py-[20px] rounded-[29px] text-[14px] text-center text-white_A700 w-[auto]">
              Login
            </Button>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex h-[1024px] items-center justify-end ml-[-45px] my-[auto] p-[48px] md:px-[20px] w-[46%] z-[1]"
          style={{ backgroundImage: "url('images/img_main.svg')" }}
        >
          <div className="flex flex-col items-start justify-start mt-[52px] md:w-[100%] w-[63%]">
            <Img
              src="images/img_question.svg"
              className="h-[41px] w-[41px]"
              alt="question"
            />
            <div className="flex flex-col gap-[14px] items-start justify-start mt-[50px] md:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-gray_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Create an account
              </Text>
              <Text
                className="font-normal not-italic text-gray_500 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Sign up to continue{" "}
              </Text>
            </div>
            <div className="flex flex-col gap-[20px] items-center justify-start mt-[60px] w-[100%]">
              <div className="flex flex-col gap-[11px] items-start justify-start pt-[3px] w-[100%]">
                <Text
                  className="not-italic text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  name
                </Text>
                <Input
                  wrapClassName="border-[1px] border-gray_500_6c border-solid pl-[15px] pr-[35px] py-[15px] rounded-[8px] w-[100%]"
                  className="font-normal not-italic p-[0] placeholder:text-gray_500 sm:pr-[20px] text-[14px] text-gray_500 text-left w-[100%]"
                  name="groupThirtyFour"
                  placeholder="Anne Carry"
                ></Input>
              </div>
              <div className="flex flex-col gap-[12px] items-start justify-start pt-[2px] w-[100%]">
                <Text
                  className="not-italic text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  email
                </Text>
                <Input
                  wrapClassName="border-[1px] border-gray_500_6c border-solid flex px-[15px] py-[14px] rounded-[8px] w-[100%]"
                  className="font-normal not-italic p-[0] placeholder:text-gray_500 text-[14px] text-gray_500 text-left w-[100%]"
                  type="email"
                  name="email"
                  placeholder="anne.carry@mail.com"
                  suffix={
                    <Img
                      src="images/img_checkmark_bluegray_100.svg"
                      className="mt-[auto] mb-[1px] ml-[35px]"
                      alt="checkmark"
                    />
                  }
                ></Input>
              </div>
              <div className="flex flex-col gap-[12px] items-start justify-start pt-[2px] w-[100%]">
                <Text
                  className="not-italic text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Password
                </Text>
                <Input
                  wrapClassName="border-[1px] border-gray_500_6c border-solid flex px-[15px] py-[14px] rounded-[8px] w-[100%]"
                  className="font-normal not-italic p-[0] placeholder:text-gray_500 text-[14px] text-gray_500 text-left w-[100%]"
                  type="password"
                  name="groupThirtyTwo"
                  placeholder="Password@123"
                  suffix={
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="mt-[auto] mb-[1px] ml-[35px]"
                      alt="overflow_menu"
                    />
                  }
                ></Input>
              </div>
            </div>
            <Button className="bg-indigo_A200 cursor-pointer font-normal min-w-[350px] mt-[40px] not-italic py-[20px] rounded-[29px] text-[14px] text-center text-white_A700 w-[auto]">
              Create an account
            </Button>
            <div className="flex flex-col gap-[32px] justify-start mt-[30px] pt-[2px] w-[100%]">
              <Text
                className="md:ml-[0] ml-[117px] not-italic text-gray_500 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Or connect with socials
              </Text>
              <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                <Button
                  className="bg-indigo_600 cursor-pointer flex items-center justify-center min-w-[350px] px-[35px] py-[20px] rounded-[29px] w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_facebook.svg"
                      className="mr-[5px]"
                      alt="facebook"
                    />
                  }
                >
                  <div className="font-normal not-italic sm:px-[20px] text-[14px] text-center text-white_A700">
                    Connect with Facebook
                  </div>
                </Button>
                <Button
                  className="bg-gray_900 cursor-pointer flex items-center justify-center min-w-[350px] px-[35px] py-[19px] rounded-[29px] w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_icon_apple.svg"
                      className="mb-[1px] mr-[8px]"
                      alt="Icon/Apple"
                    />
                  }
                >
                  <div className="font-normal not-italic sm:px-[20px] text-[14px] text-center text-white_A700">
                    Connect with Apple
                  </div>
                </Button>
                <Button
                  className="border-[2px] border-gray_500_66 border-solid cursor-pointer flex items-center justify-center min-w-[350px] px-[35px] py-[19px] rounded-[29px] w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_google.svg"
                      className="mb-[1px] mr-[7px]"
                      alt="google"
                    />
                  }
                >
                  <div className="font-normal not-italic sm:px-[20px] text-[14px] text-center text-gray_900">
                    Connect with Google+
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
