import React from "react";

import { Img, Text, Button } from "components";

const VideoFullScreenPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-center mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="h-[1024px] w-[auto]"
          alt="navigationwebsi"
        />
        <div
          className="bg-cover bg-no-repeat flex h-[1024px] items-center justify-end md:ml-[0] ml-[5px] p-[40px] md:px-[20px] md:w-[100%] w-[89%]"
          style={{ backgroundImage: "url('images/img_leftindicator.svg')" }}
        >
          <div className="flex flex-col md:gap-[40px] gap-[640px] items-center justify-start mb-[5px] mt-[20px] w-[100%]">
            <div className="flex items-center justify-start md:w-[100%] w-[97%]">
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                  <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[12%]">
                    <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                      <div className="flex h-[48px] items-center justify-start w-[48px]">
                        <Img
                          src="images/img_avatar_8.png"
                          className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                          alt="avatar"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Edward Ford
                        </Text>
                        <Text
                          className="mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          5min ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 flex-row items-center justify-between sm:w-[100%] w-[26%]">
                    <Button
                      className="bg-white_A700_33 cursor-pointer flex items-center justify-center min-w-[65px] my-[4px] px-[8px] py-[6px] rounded-[4px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_favorite_bluegray_100.svg"
                          className="mr-[6px] my-[1px]"
                          alt="favorite"
                        />
                      }
                    >
                      <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                        326
                      </div>
                    </Button>
                    <Button
                      className="bg-white_A700_33 cursor-pointer flex items-center justify-center min-w-[63px] my-[4px] px-[8px] py-[6px] rounded-[4px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_laptop.svg"
                          className="mr-[6px] my-[1px]"
                          alt="laptop"
                        />
                      }
                    >
                      <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                        148
                      </div>
                    </Button>
                    <Button
                      className="bg-white_A700_33 cursor-pointer flex items-center justify-center min-w-[75px] my-[4px] px-[8px] py-[6px] rounded-[4px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_reply_white_a700.svg"
                          className="mr-[5px] my-[1px]"
                          alt="reply"
                        />
                      }
                    >
                      <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                        Share
                      </div>
                    </Button>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="h-[38px] w-[38px]"
                      alt="overflowmenu"
                    />
                  </div>
                </div>
                <Text
                  className="font-normal leading-[36.00px] not-italic text-left text-white_A700"
                  as="h1"
                  variant="h1"
                >
                  Tropical Fresh Tourism Is Back In Full Swing&lt;br /&gt;In
                  Cancun Mexico
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                <div className="flex items-center justify-end w-[100%]">
                  <div className="flex flex-col gap-[25px] items-center justify-start w-[100%]">
                    <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        01:23
                      </Text>
                      <Text
                        className="font-normal not-italic text-right text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        05:46
                      </Text>
                    </div>
                    <div className="h-[8px] relative w-[100%]">
                      <div className="absolute bg-white_A700_33 bottom-[0] h-[8px] inset-x-[0] mx-[auto] rounded-[3px] w-[100%]"></div>
                      <div className="absolute h-[8px] left-[0] overflow-hidden top-[0] w-[60%]">
                        <div className="w-full h-full absolute bg-white_A700_a2 rounded-[3px]"></div>
                        <div
                          className="h-full absolute bg-light_blue_200  rounded-[3px]"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[16%]">
                    <Img
                      src="images/img_iconpause.svg"
                      className="h-[30px] w-[30px]"
                      alt="iconpause"
                    />
                    <Img
                      src="images/img_iconvolume.svg"
                      className="h-[30px] w-[30px]"
                      alt="iconvolume"
                    />
                    <div className="h-[8px] my-[11px] overflow-hidden relative w-[auto]">
                      <div className="w-full h-full absolute bg-white_A700_33 rounded-[4px]"></div>
                      <div
                        className="h-full absolute bg-white_A700  rounded-[4px]"
                        style={{ width: "67%" }}
                      ></div>
                    </div>
                  </div>
                  <Img
                    src="images/img_calculator.svg"
                    className="h-[31px] w-[auto]"
                    alt="calculator"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoFullScreenPage;
