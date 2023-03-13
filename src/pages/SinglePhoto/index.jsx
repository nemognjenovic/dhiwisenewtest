import React from "react";

import { Button, Img, Text, Input } from "components";

const SinglePhotoPage = () => {
  return (
    <>
      <div className="bg-gray_100 font-sfprodisplay h-[1024px] mx-[auto] relative w-[100%]">
        <div
          className="absolute bg-cover bg-no-repeat flex h-[100%] inset-y-[0] items-end justify-start my-[auto] pl-[85px] md:px-[20px] right-[0] w-[89%]"
          style={{ backgroundImage: "url('images/img_side.svg')" }}
        >
          <div className="flex md:flex-col flex-row gap-[49px] items-start justify-end ml-[auto] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[144px] md:gap-[40px] items-center justify-start md:mt-[0] mt-[40px] md:w-[100%] w-[59%]">
              <div className="flex flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[96%]">
                <Button
                  className="bg-white_A700_33 cursor-pointer flex items-center justify-center min-w-[103px] pl-[20px] pr-[23px] py-[20px] rounded-[12px] w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_arrowleft_white_a700.svg"
                      className="mr-[10px]"
                      alt="arrow_left"
                    />
                  }
                >
                  <div className="font-bold sm:pr-[20px] text-[14px] text-left text-white_A700">
                    Back
                  </div>
                </Button>
                <div className="flex flex-row font-inter gap-[10px] items-center justify-between w-[19%]">
                  <Text
                    className="font-normal not-italic text-right text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Edward Ford
                  </Text>
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="avatar"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <Button className="border-[2px] border-solid border-white_A700_33 flex h-[48px] items-center justify-center p-[14px] rounded-[12px] w-[48px]">
                  <Img
                    src="images/img_arrowleft_white_a700_48x48.svg"
                    className=""
                    alt="arrowleft"
                  />
                </Button>
                <Img
                  src="images/img_image_540x509.png"
                  className="md:flex-1 h-[540px] sm:h-[auto] object-cover rounded-[8px] md:w-[100%] w-[auto]"
                  alt="image"
                />
                <Button className="flex h-[48px] items-center justify-center outline outline-[1px] outline-white_A700_33 p-[14px] rounded-[12px] w-[48px]">
                  <Img
                    src="images/img_arrowright_white_a700_48x48.svg"
                    className=""
                    alt="arrowright"
                  />
                </Button>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 h-[1024px] items-end justify-end p-[40px] sm:px-[20px] md:w-[100%] w-[38%]"
              style={{ backgroundImage: "url('images/img_group10.svg')" }}
            >
              <div className="flex flex-col md:gap-[40px] gap-[843px] items-end justify-start mt-[5px] md:w-[100%] w-[92%]">
                <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[35%]">
                  <Button className="bg-light_blue_200 cursor-pointer font-bold h-[48px] py-[10px] rounded-[12px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 w-[48px]">
                    1
                  </Button>
                  <div className="flex h-[48px] items-center justify-start w-[48px]">
                    <Img
                      src="images/img_avatar_48x48.png"
                      className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                      alt="avatar_One"
                    />
                  </div>
                </div>
                <div className="bg-gray_100 flex flex-row font-inter gap-[10px] items-center justify-start p-[5px] rounded-[4px] w-[100%]">
                  <Input
                    wrapClassName="bg-gray_100 flex pl-[10px] pr-[6px] py-[10px] w-[87%]"
                    className="font-normal not-italic p-[0] placeholder:text-gray_500 text-[14px] text-gray_500 text-left w-[100%]"
                    name="frameEight"
                    placeholder="Write a comment…"
                    suffix={
                      <Img
                        src="images/img_user.svg"
                        className="mt-[1px] mb-[2px] ml-[12px]"
                        alt="user"
                      />
                    }
                  ></Input>
                  <Img
                    src="images/img_send.svg"
                    className="h-[14px] w-[14px]"
                    alt="send"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="absolute h-[1024px] inset-y-[0] left-[0] my-[auto] w-[auto]"
          alt="navigationwebsi"
        />
      </div>
    </>
  );
};

export default SinglePhotoPage;
