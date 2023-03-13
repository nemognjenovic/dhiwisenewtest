import React from "react";

import { Img, Input, Button, Text, Line, List } from "components";
import { CloseSVG } from "../../assets/images";

const MessagesPage = () => {
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
            <div className="flex flex-col md:gap-[40px] gap-[60px] items-center justify-start w-[100%]">
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
              <div className="flex flex-col gap-[39px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold text-gray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Inbox
                </Text>
                <div className="flex flex-row font-inter items-start justify-start w-[100%]">
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
            <List
              className="flex-col font-inter gap-[40px] grid items-center w-[98%]"
              orientation="vertical"
            >
              <div className="h-[48px] relative w-[100%]">
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
              <div className="h-[48px] relative w-[100%]">
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
              <div className="h-[48px] relative w-[100%]">
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
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 flex-col gap-[291px] md:gap-[40px] h-[1024px] items-center justify-start p-[40px] md:px-[20px] md:w-[100%] w-[auto]"
            style={{ backgroundImage: "url('images/img_group10.svg')" }}
          >
            <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] mt-[5px] md:w-[100%] w-[17%]">
              <Button className="bg-light_blue_200 cursor-pointer font-bold h-[48px] py-[10px] rounded-[12px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 w-[48px]">
                1
              </Button>
              <div className="flex h-[48px] items-center justify-start w-[48px]">
                <Img
                  src="images/img_avatar_48x48.png"
                  className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                  alt="avatar"
                />
              </div>
            </div>
            <div className="flex flex-col font-inter gap-[319px] md:gap-[40px] items-center justify-start mb-[16px] sm:px-[20px] px-[23px] md:w-[100%] w-[66%]">
              <div className="flex flex-col gap-[19px] items-center justify-start w-[100%]">
                <div className="bg-gray_100 flex h-[160px] items-center justify-start p-[41px] sm:px-[20px] md:px-[40px] rounded-[50px] w-[160px]">
                  <Img
                    src="images/img_mail_bluegray_100.svg"
                    className="h-[78px] w-[78px]"
                    alt="mail"
                  />
                </div>
                <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-center text-gray_500 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    It&#39;s nice to chat with someone
                  </Text>
                  <Text
                    className="font-normal not-italic text-center text-gray_500 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Pick a person from left menu and start your conversation
                  </Text>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center md:w-[100%] w-[74%]">
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-[18px] w-[18px]"
                  alt="arrowdown"
                />
                <Text
                  className="font-normal ml-[5px] not-italic text-gray_500 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Social is available for Mac
                </Text>
                <Text
                  className="font-normal ml-[7px] not-italic text-gray_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Download it now
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagesPage;
