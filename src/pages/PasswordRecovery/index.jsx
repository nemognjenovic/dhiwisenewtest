import React from "react";

import { Text, Button, Img, Input } from "components";

const PasswordRecoveryPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex font-inter mx-[auto] relative w-[100%]">
        <div className="bg-gray_900_33 flex flex-col items-center justify-center my-[auto] p-[305px] md:px-[20px] w-[58%]">
          <Text
            className="font-normal mt-[129px] not-italic text-center text-white_A700 w-[auto]"
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
            Remember your password?
          </Text>
          <Button className="bg-indigo_A200 cursor-pointer font-normal mb-[130px] min-w-[220px] mt-[30px] not-italic py-[20px] rounded-[29px] text-[14px] text-center text-white_A700 w-[auto]">
            Lognin
          </Button>
        </div>
        <div
          className="bg-cover bg-no-repeat flex h-[1024px] items-center justify-start ml-[-45px] my-[auto] p-[90px] md:px-[20px] w-[46%] z-[1]"
          style={{ backgroundImage: "url('images/img_main.svg')" }}
        >
          <div className="flex flex-col items-start justify-start mb-[468px] md:w-[100%] w-[74%]">
            <Img
              src="images/img_question.svg"
              className="h-[41px] w-[41px]"
              alt="question"
            />
            <div className="flex flex-col gap-[11px] items-start justify-start mt-[59px] pt-[3px] md:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-gray_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Password Recovery
              </Text>
              <Text
                className="font-normal not-italic text-gray_500 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Enter your email to recover your password
              </Text>
            </div>
            <div className="flex flex-col gap-[12px] items-start justify-start mt-[60px] pt-[2px] w-[100%]">
              <Text
                className="not-italic text-gray_900 text-left tracking-[1.00px] w-[auto]"
                as="h5"
                variant="h5"
              >
                Email
              </Text>
              <Input
                wrapClassName="border-[1px] border-gray_500_6c border-solid flex px-[15px] py-[14px] rounded-[8px] w-[100%]"
                className="font-normal not-italic p-[0] placeholder:text-gray_500 text-[14px] text-gray_500 text-left w-[100%]"
                type="email"
                name="email"
                placeholder="anne.carry@mail.com"
                suffix={
                  <Img
                    src="images/img_checkmark_bluegray_100_18x18.svg"
                    className="mt-[auto] mb-[1px] ml-[35px]"
                    alt="checkmark"
                  />
                }
              ></Input>
            </div>
            <Button className="bg-indigo_A200 cursor-pointer font-normal min-w-[350px] mt-[20px] not-italic py-[20px] rounded-[29px] text-[14px] text-center text-white_A700 w-[auto]">
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordRecoveryPage;
