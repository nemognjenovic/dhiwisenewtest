import React from "react";

import { Img, Input, Button, Text, Line, List } from "components";
import { CloseSVG } from "../../assets/images";

const DirectMessagePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex font-sfprodisplay items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
          <Img
            src="images/img_navigationwebsidebar.svg"
            className="h-[1024px] w-[auto]"
            alt="navigationwebsi"
          />
          <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:px-[20px] md:w-[100%] w-[auto]">
            <div className="flex flex-col md:gap-[40px] gap-[60px] items-center justify-start md:w-[100%] w-[92%]">
              <div className="flex flex-row gap-[15px] items-center justify-between md:w-[100%] w-[98%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  wrapClassName="bg-white_A700 flex pl-[20px] pr-[35px] py-[20px] rounded-[12px] w-[auto]"
                  className="font-medium p-[0] placeholder:text-gray_500 sm:pr-[20px] text-[14px] text-gray_500 text-left w-[100%]"
                  name="search"
                  placeholder="Search in social…"
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer mr-[15px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      color="#8f92a1"
                      className="cursor-pointer my-[auto]"
                      onClick={() => setInputvalue("")}
                      style={{
                        visibility:
                          inputvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                    />
                  }
                ></Input>
                <Button className="bg-green_400 flex h-[48px] items-center justify-center my-[5px] p-[12px] rounded-[12px] w-[48px]">
                  <Img
                    src="images/img_laptop.svg"
                    className="h-[22px]"
                    alt="laptop"
                  />
                </Button>
              </div>
              <div className="flex flex-col font-inter gap-[40px] items-start justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Inbox
                </Text>
                <div className="flex flex-row items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[7px] items-center justify-start w-[33%]">
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Direct Messages
                    </Text>
                    <Line className="bg-gray_900 h-[2px] w-[100%]" />
                  </div>
                  <div className="flex items-center justify-start ml-[20px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Group Chat
                    </Text>
                  </div>
                  <div className="flex items-center justify-start ml-[26px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Archived
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-inter gap-[20px] items-center justify-start w-[100%]">
              <List
                className="flex-col gap-[40px] grid items-center w-[90%]"
                orientation="vertical"
              >
                <div className="h-[48px] my-[0] relative w-[100%]">
                  <div className="absolute flex flex-col items-end justify-start pl-[3px] pt-[3px] right-[0] top-[6%] w-[auto]">
                    <Text
                      className="font-inter not-italic text-gray_500 text-right w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      3:03pm
                    </Text>
                    <Text
                      className="bg-red_A200 font-bold font-sfprodisplay h-[18px] justify-center mt-[3px] px-[6px] py-[2px] rounded-[6px] text-center text-white_A700 tracking-[1.00px] w-[17px]"
                      as="h6"
                      variant="h6"
                    >
                      1
                    </Text>
                  </div>
                  <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] sm:pr-[20px] md:pr-[40px] pr-[87px] w-[84%]">
                    <div className="h-[48px] relative w-[25%]">
                      <Img
                        src="images/img_avatar_26.png"
                        className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[48px]"
                        alt="avatar"
                      />
                      <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="bg-gray_100 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                        <div className="absolute bg-green_400 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[48px] my-[0] relative w-[100%]">
                  <div className="absolute flex flex-col items-end justify-start pl-[3px] pt-[3px] right-[0] top-[6%] w-[auto]">
                    <Text
                      className="font-inter not-italic text-gray_500 text-right w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      3:03pm
                    </Text>
                    <Text
                      className="bg-red_A200 font-bold font-sfprodisplay h-[18px] justify-center mt-[3px] px-[6px] py-[2px] rounded-[6px] text-center text-white_A700 tracking-[1.00px] w-[17px]"
                      as="h6"
                      variant="h6"
                    >
                      1
                    </Text>
                  </div>
                  <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] sm:pr-[20px] md:pr-[40px] pr-[87px] w-[84%]">
                    <div className="h-[48px] relative w-[25%]">
                      <Img
                        src="images/img_avatar_27.png"
                        className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[48px]"
                        alt="avatar"
                      />
                      <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="bg-gray_100 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                        <div className="absolute bg-green_400 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[48px] my-[0] relative w-[100%]">
                  <div className="absolute flex flex-col items-end justify-start pl-[3px] pt-[3px] right-[0] top-[6%] w-[auto]">
                    <Text
                      className="font-inter not-italic text-gray_500 text-right w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      3:03pm
                    </Text>
                    <Text
                      className="bg-red_A200 font-bold font-sfprodisplay h-[18px] justify-center mt-[3px] px-[6px] py-[2px] rounded-[6px] text-center text-white_A700 tracking-[1.00px] w-[17px]"
                      as="h6"
                      variant="h6"
                    >
                      1
                    </Text>
                  </div>
                  <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] sm:pr-[20px] md:pr-[40px] pr-[87px] w-[84%]">
                    <div className="h-[48px] relative w-[25%]">
                      <Img
                        src="images/img_avatar_28.png"
                        className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[48px]"
                        alt="avatar"
                      />
                      <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="bg-gray_100 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                        <div className="absolute bg-green_400 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="bg-white_A700 flex items-center justify-start p-[20px] rounded-[12px] w-[100%]">
                <div className="h-[48px] relative w-[100%]">
                  <div className="absolute flex items-end justify-start pl-[3px] py-[3px] right-[0] top-[6%] w-[auto]">
                    <Text
                      className="mb-[18px] not-italic text-gray_500 text-right w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Yesterday
                    </Text>
                  </div>
                  <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] sm:pr-[20px] md:pr-[40px] pr-[87px] w-[84%]">
                    <div className="h-[48px] relative w-[25%]">
                      <Img
                        src="images/img_avatar_29.png"
                        className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[48px]"
                        alt="avatar"
                      />
                      <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="bg-gray_100 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                        <div className="absolute bg-green_400 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="flex-col gap-[40px] grid items-center w-[90%]"
                orientation="vertical"
              >
                <div className="h-[48px] relative w-[100%]">
                  <div className="absolute flex items-end justify-start pl-[3px] py-[3px] right-[0] top-[6%] w-[auto]">
                    <Text
                      className="mb-[18px] not-italic text-gray_500 text-right w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Yesterday
                    </Text>
                  </div>
                  <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] sm:pr-[20px] md:pr-[40px] pr-[87px] w-[84%]">
                    <div className="h-[48px] relative w-[25%]">
                      <Img
                        src="images/img_avatar_30.png"
                        className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[48px]"
                        alt="avatar"
                      />
                      <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="bg-gray_100 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                        <div className="absolute bg-green_400 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[48px] relative w-[100%]">
                  <div className="absolute flex items-end justify-start pl-[2px] py-[2px] right-[0] top-[6%] w-[auto]">
                    <Text
                      className="mb-[20px] not-italic text-gray_500 text-right w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Oct 26
                    </Text>
                  </div>
                  <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] sm:pr-[20px] md:pr-[40px] pr-[87px] w-[84%]">
                    <div className="h-[48px] relative w-[25%]">
                      <Img
                        src="images/img_avatar_31.png"
                        className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[48px]"
                        alt="avatar"
                      />
                      <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="bg-gray_100 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                        <div className="absolute bg-green_400 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[48px] relative w-[100%]">
                  <div className="absolute flex flex-col items-end justify-start pl-[2px] pt-[2px] right-[0] top-[6%] w-[auto]">
                    <Text
                      className="font-inter not-italic text-gray_500 text-right w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Oct 26
                    </Text>
                    <Text
                      className="bg-red_A200 font-bold font-sfprodisplay h-[18px] justify-center mt-[4px] px-[6px] py-[2px] rounded-[6px] text-center text-white_A700 tracking-[1.00px] w-[17px]"
                      as="h6"
                      variant="h6"
                    >
                      1
                    </Text>
                  </div>
                  <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] sm:pr-[20px] md:pr-[40px] pr-[87px] w-[84%]">
                    <div className="h-[48px] relative w-[25%]">
                      <Img
                        src="images/img_avatar_32.png"
                        className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[48px]"
                        alt="avatar"
                      />
                      <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="bg-gray_100 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                        <div className="absolute bg-green_400 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[48px] relative w-[100%]">
                  <div className="absolute flex flex-col items-end justify-start pl-[2px] pt-[2px] right-[0] top-[6%] w-[auto]">
                    <Text
                      className="font-inter not-italic text-gray_500 text-right w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Oct 26
                    </Text>
                    <Text
                      className="bg-red_A200 font-bold font-sfprodisplay h-[18px] justify-center mt-[4px] px-[6px] py-[2px] rounded-[6px] text-center text-white_A700 tracking-[1.00px] w-[17px]"
                      as="h6"
                      variant="h6"
                    >
                      1
                    </Text>
                  </div>
                  <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] sm:pr-[20px] md:pr-[40px] pr-[87px] w-[84%]">
                    <div className="h-[48px] relative w-[25%]">
                      <Img
                        src="images/img_avatar_33.png"
                        className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[48px]"
                        alt="avatar"
                      />
                      <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="bg-gray_100 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                        <div className="absolute bg-green_400 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="h-[1024px] pl-[5px] md:px-[20px] relative md:w-[100%] w-[56%]">
            <Img
              src="images/img_group10.svg"
              className="h-[1024px] m-[auto] w-[auto]"
              alt="modaldesktopwhi"
            />
            <div className="absolute flex flex-col md:gap-[40px] gap-[60px] h-[max-content] inset-[0] items-end justify-center m-[auto] w-[87%]">
              <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[17%]">
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
              <div className="flex flex-col font-inter items-start justify-start w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[99%]">
                  <div className="flex flex-row gap-[15px] items-center justify-between md:w-[100%] w-[30%]">
                    <div className="flex h-[58px] items-center justify-start w-[58px]">
                      <div className="h-[58px] relative w-[58px]">
                        <Img
                          src="images/img_avatar_54.png"
                          className="h-[58px] m-[auto] object-cover rounded-[16px] w-[58px]"
                          alt="avatar_Two"
                        />
                        <Img
                          src="images/img_settings_white_a700.svg"
                          className="absolute h-[15px] right-[0] top-[0] w-[15px]"
                          alt="settings"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Marriet Miles
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Online
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_camera.svg"
                    className="h-[32px] md:ml-[0] ml-[254px] w-[32px]"
                    alt="camera"
                  />
                  <Img
                    src="images/img_call.svg"
                    className="h-[25px] md:ml-[0] ml-[40px] w-[25px]"
                    alt="call"
                  />
                  <Img
                    src="images/img_videocamera.svg"
                    className="h-[25px] md:ml-[0] ml-[40px] w-[25px]"
                    alt="videocamera"
                  />
                  <Img
                    src="images/img_overflowmenu.svg"
                    className="h-[25px] md:ml-[0] ml-[40px] w-[25px]"
                    alt="overflowmenu"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-[70px] md:w-[100%] w-[43%]">
                  <div className="flex items-center justify-start pb-[9px] w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-between w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="images/img_avatar_42.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="avatar_Three"
                        />
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start w-[83%]">
                        <div className="flex flex-row gap-[9px] items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[57%]">
                          <Text
                            className="font-normal not-italic text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Anne Carry
                          </Text>
                          <Text
                            className="not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            4min
                          </Text>
                        </div>
                        <div className="bg-gray_100 flex flex-row items-center justify-between p-[10px] rounded-[12px] w-[100%]">
                          <Button className="bg-light_blue_200_33 flex h-[38px] items-center justify-center p-[10px] rounded-[12px] w-[38px]">
                            <Img
                              src="images/img_forward.svg"
                              className="h-[18px]"
                              alt="forward"
                            />
                          </Button>
                          <Line className="bg-gray_500_7e h-[4px] my-[17px] rounded-[2px] w-[68%]" />
                          <Text
                            className="not-italic text-gray_500 text-right w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            0:06
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-[40px] grid mt-[40px] w-[84%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-[15px] items-start justify-between pb-[3px] pr-[3px] w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="images/img_avatar.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="avatar"
                        />
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start mb-[7px] w-[79%]">
                        <div className="flex flex-row gap-[9px] items-start justify-start md:w-[100%] w-[72%]">
                          <Text
                            className="font-normal not-italic text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            4min
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Yes, I saw his post yesterday
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-between pb-[3px] pr-[3px] w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="images/img_avatar_42.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="avatar"
                        />
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start mb-[7px] w-[79%]">
                        <div className="flex flex-row gap-[9px] items-start justify-start md:w-[100%] w-[72%]">
                          <Text
                            className="font-normal not-italic text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            4min
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Yes, I saw his post yesterday
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex items-center justify-start mt-[40px] pb-[9px] w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-between w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="images/img_avatar.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="avatar_Four"
                        />
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start w-[83%]">
                        <div className="flex flex-row gap-[9px] items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[57%]">
                          <Text
                            className="font-normal not-italic text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Anne Carry
                          </Text>
                          <Text
                            className="not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            4min
                          </Text>
                        </div>
                        <div className="bg-gray_100 flex flex-row items-center justify-between p-[10px] rounded-[12px] w-[100%]">
                          <Button className="bg-light_blue_200_33 flex h-[38px] items-center justify-center p-[10px] rounded-[12px] w-[38px]">
                            <Img
                              src="images/img_forward.svg"
                              className="h-[18px]"
                              alt="forward_One"
                            />
                          </Button>
                          <Line className="bg-gray_500_7e h-[4px] my-[17px] rounded-[2px] w-[68%]" />
                          <Text
                            className="not-italic text-gray_500 text-right w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            0:06
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[15px] items-start justify-start mt-[40px] pb-[3px] pr-[3px] md:w-[100%] w-[84%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="images/img_avatar_42.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="avatar_Five"
                      />
                    </div>
                    <div className="flex flex-col gap-[12px] items-start justify-start mb-[7px] w-[79%]">
                      <div className="flex flex-row gap-[9px] items-start justify-start md:w-[100%] w-[72%]">
                        <Text
                          className="font-normal not-italic text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Marriet Miles
                        </Text>
                        <Text
                          className="not-italic text-gray_500 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          4min
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Yes, I saw his post yesterday
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start mt-[30px] md:w-[100%] w-[29%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="images/img_avatar.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="avatar_Six"
                      />
                    </div>
                    <Img
                      src="images/img_signal.svg"
                      className="h-[13px] w-[auto]"
                      alt="signal"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between mt-[45px] w-[100%]">
                  <Button className="bg-indigo_A200 flex h-[48px] items-center justify-center md:mt-[0] my-[5px] p-[12px] rounded-[12px] w-[48px]">
                    <Img
                      src="images/img_minimize.svg"
                      className="h-[22px]"
                      alt="minimize"
                    />
                  </Button>
                  <Input
                    wrapClassName="bg-gray_100 flex md:flex-1 px-[20px] py-[19px] rounded-[12px] md:w-[100%] w-[auto]"
                    className="font-normal not-italic p-[0] placeholder:text-gray_500 text-[14px] text-gray_500 text-left w-[100%]"
                    name="field"
                    placeholder="Start typing…"
                    suffix={
                      <Img
                        src="images/img_user.svg"
                        className="mt-[auto] mb-[1px] ml-[35px]"
                        alt="user"
                      />
                    }
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectMessagePage;
