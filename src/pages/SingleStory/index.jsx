import React from "react";

import { Img, Button, Text, Input } from "components";

const SingleStoryPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-sfprodisplay sm:gap-[20px] md:gap-[20px] items-center mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="h-[1024px] w-[auto]"
          alt="navigationwebsi"
        />
        <div className="flex md:flex-col flex-row gap-[10px] items-center justify-start pl-[5px] md:px-[20px] md:w-[100%] w-[89%]">
          <Img
            src="images/img_leftindicator.svg"
            className="h-[128px] w-[auto]"
            alt="leftindicator"
          />
          <div className="bg-gray_900 flex items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[91px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] md:w-[100%] w-[99%]">
            <div className="flex md:flex-col flex-row gap-[47px] items-center justify-end ml-[auto] w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start md:w-[100%] w-[60%]">
                <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between md:ml-[0] ml-[3px] md:w-[100%] w-[89%]">
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
                    <div className="flex font-inter items-start justify-start p-[5px] w-[auto]">
                      <Text
                        className="font-normal my-[5px] not-italic text-right text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Sara Scholz
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_group69.svg"
                    className="h-[768px] w-[auto]"
                    alt="groupSixtyNine"
                  />
                </div>
                <div className="bg-gray_900_6c border-[2px] border-gray_500_6c border-solid flex font-inter items-center justify-start p-[9px] rounded-[4px] md:w-[100%] w-[78%]">
                  <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-between md:w-[100%] w-[99%]">
                    <div className="h-[30px] relative sm:w-[100%] w-[94%]">
                      <Img
                        src="images/img_send_white_a700.svg"
                        className="h-[20px] ml-[auto] mr-[8px] my-[auto] w-[20px]"
                        alt="send"
                      />
                      <div className="absolute flex h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
                        <Input
                          wrapClassName="bg-gray_900 pl-[6px] pr-[12px] py-[6px] w-[93%]"
                          className="font-normal not-italic p-[0] placeholder:text-white_A700 text-[14px] text-left text-white_A700 w-[100%]"
                          name="frameSeven"
                          placeholder="Write a comment…"
                        ></Input>
                      </div>
                    </div>
                    <Img
                      src="images/img_user.svg"
                      className="h-[20px] w-[20px]"
                      alt="user"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 items-end justify-start pl-[20px] md:w-[100%] w-[37%]">
                <div className="bg-white_A700 flex flex-col gap-[46px] justify-end p-[30px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[100%]">
                  <div className="flex items-start justify-start md:ml-[0] ml-[214px] mr-[10px] mt-[15px] md:w-[100%] w-[35%]">
                    <Button className="bg-light_blue_200 cursor-pointer font-bold h-[48px] py-[10px] rounded-[12px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 w-[48px]">
                      1
                    </Button>
                  </div>
                  <div className="flex flex-col font-inter gap-[41px] items-start justify-start md:ml-[0] ml-[15px] mr-[20px] md:w-[100%] w-[90%]">
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Next Stories
                    </Text>
                    <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                      <div className="flex flex-row items-center justify-between pl-[5px] py-[5px] w-[100%]">
                        <Text
                          className="font-normal ml-[43px] not-italic text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MadeInAmerica
                        </Text>
                        <Button className="bg-indigo_A200_33 flex h-[28px] items-center justify-center p-[7px] rounded-[8px] w-[28px]">
                          <Img
                            src="images/img_checkmark_indigo_a200.svg"
                            className="h-[14px]"
                            alt="checkmark"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between pl-[5px] py-[5px] w-[100%]">
                        <Text
                          className="font-normal ml-[43px] not-italic text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MadeInAmerica
                        </Text>
                        <Button className="bg-indigo_A200_33 flex h-[28px] items-center justify-center p-[7px] rounded-[8px] w-[28px]">
                          <Img
                            src="images/img_checkmark_indigo_a200.svg"
                            className="h-[14px]"
                            alt="checkmark_One"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between pl-[5px] py-[5px] w-[100%]">
                        <Text
                          className="font-normal ml-[43px] not-italic text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MadeInAmerica
                        </Text>
                        <Button className="bg-indigo_A200_33 flex h-[28px] items-center justify-center p-[7px] rounded-[8px] w-[28px]">
                          <Img
                            src="images/img_checkmark_indigo_a200.svg"
                            className="h-[14px]"
                            alt="checkmark_Two"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between pl-[5px] py-[5px] w-[100%]">
                        <Text
                          className="font-normal ml-[43px] not-italic text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MadeInAmerica
                        </Text>
                        <Button className="bg-indigo_A200_33 flex h-[28px] items-center justify-center p-[7px] rounded-[8px] w-[28px]">
                          <Img
                            src="images/img_checkmark_indigo_a200.svg"
                            className="h-[14px]"
                            alt="checkmark_Three"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between pl-[5px] py-[5px] w-[100%]">
                        <Text
                          className="font-normal ml-[43px] not-italic text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MadeInAmerica
                        </Text>
                        <Button className="bg-indigo_A200_33 flex h-[28px] items-center justify-center p-[7px] rounded-[8px] w-[28px]">
                          <Img
                            src="images/img_checkmark_indigo_a200.svg"
                            className="h-[14px]"
                            alt="checkmark_Four"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between pl-[5px] py-[5px] w-[100%]">
                        <Text
                          className="font-normal ml-[43px] not-italic text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MadeInAmerica
                        </Text>
                        <Button className="bg-indigo_A200_33 flex h-[28px] items-center justify-center p-[7px] rounded-[8px] w-[28px]">
                          <Img
                            src="images/img_checkmark_indigo_a200.svg"
                            className="h-[14px]"
                            alt="checkmark_Five"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between pl-[5px] py-[5px] w-[100%]">
                        <Text
                          className="font-normal ml-[43px] not-italic text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MadeInAmerica
                        </Text>
                        <Button className="bg-indigo_A200_33 flex h-[28px] items-center justify-center p-[7px] rounded-[8px] w-[28px]">
                          <Img
                            src="images/img_checkmark_indigo_a200.svg"
                            className="h-[14px]"
                            alt="checkmark_Six"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between pl-[5px] py-[5px] w-[100%]">
                        <Text
                          className="font-normal ml-[43px] not-italic text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MadeInAmerica
                        </Text>
                        <Button className="bg-indigo_A200_33 flex h-[28px] items-center justify-center p-[7px] rounded-[8px] w-[28px]">
                          <Img
                            src="images/img_checkmark_indigo_a200.svg"
                            className="h-[14px]"
                            alt="checkmark_Seven"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between pl-[5px] py-[5px] w-[100%]">
                        <Text
                          className="font-normal ml-[43px] not-italic text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MadeInAmerica
                        </Text>
                        <Button className="bg-indigo_A200_33 flex h-[28px] items-center justify-center p-[7px] rounded-[8px] w-[28px]">
                          <Img
                            src="images/img_checkmark_indigo_a200.svg"
                            className="h-[14px]"
                            alt="checkmark_Eight"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between pl-[5px] py-[5px] w-[100%]">
                        <Text
                          className="font-normal ml-[43px] not-italic text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MadeInAmerica
                        </Text>
                        <Button className="bg-indigo_A200_33 flex h-[28px] items-center justify-center p-[7px] rounded-[8px] w-[28px]">
                          <Img
                            src="images/img_checkmark_indigo_a200.svg"
                            className="h-[14px]"
                            alt="checkmark_Nine"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between pl-[5px] py-[5px] w-[100%]">
                        <Text
                          className="font-normal ml-[43px] not-italic text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MadeInAmerica
                        </Text>
                        <Button className="bg-indigo_A200_33 flex h-[28px] items-center justify-center p-[7px] rounded-[8px] w-[28px]">
                          <Img
                            src="images/img_checkmark_indigo_a200.svg"
                            className="h-[14px]"
                            alt="checkmark_Ten"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between pl-[5px] py-[5px] w-[100%]">
                        <Text
                          className="font-normal ml-[43px] not-italic text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MadeInAmerica
                        </Text>
                        <Button className="bg-indigo_A200_33 flex h-[28px] items-center justify-center p-[7px] rounded-[8px] w-[28px]">
                          <Img
                            src="images/img_checkmark_indigo_a200.svg"
                            className="h-[14px]"
                            alt="checkmark_Eleven"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleStoryPage;
