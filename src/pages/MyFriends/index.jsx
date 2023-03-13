import React from "react";

import { Img, Input, Text, Button, List } from "components";
import { CloseSVG } from "../../assets/images";

const MyFriendsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-center mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="h-[1024px] w-[auto]"
          alt="navigationwebsi"
        />
        <div className="flex flex-col md:gap-[40px] gap-[60px] items-center justify-start md:ml-[0] ml-[65px] md:px-[20px] md:w-[100%] w-[53%]">
          <div className="bg-white_A700 flex md:flex-col flex-row gap-[13px] items-center justify-start p-[12px] rounded-[12px] w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              wrapClassName="bg-white_A700 flex md:flex-1 pl-[9px] pr-[35px] py-[7px] md:w-[100%] w-[89%]"
              className="font-normal not-italic p-[0] placeholder:text-gray_500 sm:pr-[20px] text-[14px] text-gray_500 text-left w-[100%]"
              name="frameOne"
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
                    visibility: inputvalue?.length <= 0 ? "hidden" : "visible",
                  }}
                />
              }
            ></Input>
            <Text
              className="not-italic text-gray_500 text-left tracking-[1.00px] w-[auto]"
              as="h5"
              variant="h5"
            >
              Filters
            </Text>
          </div>
          <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between pr-[2px] pt-[2px] w-[100%]">
              <Text
                className="font-normal not-italic text-gray_900 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                My Friends
              </Text>
              <Button
                className="bg-transparent cursor-pointer flex items-center justify-center min-w-[51px] mr-[6px] w-[auto]"
                rightIcon={
                  <Img
                    src="images/img_computer_bluegray_100.svg"
                    className="ml-[3px] my-[1px]"
                    alt="computer"
                  />
                }
              >
                <div className="font-normal not-italic text-[14px] text-gray_900 text-left">
                  Filter
                </div>
              </Button>
            </div>
            <div className="flex items-center justify-start w-[100%]">
              <div className="md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                <div className="bg-white_A700 flex flex-1 flex-col gap-[12px] items-center justify-end p-[37px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[3px] w-[58px]">
                    <Img
                      src="images/img_avatar_55.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[53%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-[2px] not-italic text-center text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 cursor-pointer flex items-center justify-center min-w-[84px] mt-[15px] px-[8px] py-[6px] rounded-[4px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] my-[1px]"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-[12px] items-center justify-end p-[37px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[3px] w-[58px]">
                    <Img
                      src="images/img_avatar_56.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[53%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-[2px] not-italic text-center text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 cursor-pointer flex items-center justify-center min-w-[84px] mt-[15px] px-[8px] py-[6px] rounded-[4px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] my-[1px]"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-[12px] items-center justify-end p-[37px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[3px] w-[58px]">
                    <Img
                      src="images/img_avatar_57.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[53%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-[2px] not-italic text-center text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 cursor-pointer flex items-center justify-center min-w-[84px] mt-[15px] px-[8px] py-[6px] rounded-[4px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] my-[1px]"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-[12px] items-center justify-end p-[37px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[3px] w-[58px]">
                    <Img
                      src="images/img_avatar_58.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[53%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-[2px] not-italic text-center text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 cursor-pointer flex items-center justify-center min-w-[84px] mt-[15px] px-[8px] py-[6px] rounded-[4px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] my-[1px]"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-[12px] items-center justify-end p-[37px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[3px] w-[58px]">
                    <Img
                      src="images/img_avatar_59.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[53%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-[2px] not-italic text-center text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 cursor-pointer flex items-center justify-center min-w-[84px] mt-[15px] px-[8px] py-[6px] rounded-[4px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] my-[1px]"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-[12px] items-center justify-end p-[37px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[3px] w-[58px]">
                    <Img
                      src="images/img_avatar_60.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[53%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-[2px] not-italic text-center text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 cursor-pointer flex items-center justify-center min-w-[84px] mt-[15px] px-[8px] py-[6px] rounded-[4px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] my-[1px]"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-[12px] items-center justify-end p-[37px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[3px] w-[58px]">
                    <Img
                      src="images/img_avatar_61.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[53%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-[2px] not-italic text-center text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 cursor-pointer flex items-center justify-center min-w-[84px] mt-[15px] px-[8px] py-[6px] rounded-[4px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] my-[1px]"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-[12px] items-center justify-end p-[37px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[3px] w-[58px]">
                    <Img
                      src="images/img_avatar_62.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[53%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-[2px] not-italic text-center text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 cursor-pointer flex items-center justify-center min-w-[84px] mt-[15px] px-[8px] py-[6px] rounded-[4px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] my-[1px]"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-[12px] items-center justify-end p-[37px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[3px] w-[58px]">
                    <Img
                      src="images/img_avatar_63.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[53%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="mt-[2px] not-italic text-center text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_400 cursor-pointer flex items-center justify-center min-w-[84px] mt-[15px] px-[8px] py-[6px] rounded-[4px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] my-[1px]"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex font-sfprodisplay h-[1024px] items-end justify-end md:ml-[0] ml-[30px] p-[30px] md:px-[20px] md:w-[100%] w-[30%]"
          style={{ backgroundImage: "url('images/img_side.svg')" }}
        >
          <div className="flex flex-col gap-[45px] justify-start mr-[10px] mt-[15px] md:w-[100%] w-[88%]">
            <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[37%]">
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
            <div className="flex flex-col font-inter gap-[41px] items-start justify-start mr-[10px] md:w-[100%] w-[97%]">
              <Text
                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                as="h2"
                variant="h2"
              >
                Who to Follow
              </Text>
              <List
                className="flex-col gap-[30px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A200 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_100.svg"
                      className="h-[14px]"
                      alt="camera"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_41.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A200 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_100.svg"
                      className="h-[14px]"
                      alt="camera"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_34.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A200 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_100.svg"
                      className="h-[14px]"
                      alt="camera"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_64.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A200 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_100.svg"
                      className="h-[14px]"
                      alt="camera"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_47.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A200 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_100.svg"
                      className="h-[14px]"
                      alt="camera"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_49.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A200 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_100.svg"
                      className="h-[14px]"
                      alt="camera"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_65.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A200 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_100.svg"
                      className="h-[14px]"
                      alt="camera"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_66.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A200 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_100.svg"
                      className="h-[14px]"
                      alt="camera"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_67.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A200 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_100.svg"
                      className="h-[14px]"
                      alt="camera"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_68.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A200 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_100.svg"
                      className="h-[14px]"
                      alt="camera"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_69.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A200 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_100.svg"
                      className="h-[14px]"
                      alt="camera"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_36.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="avatar"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A200 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_100.svg"
                      className="h-[14px]"
                      alt="camera"
                    />
                  </Button>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyFriendsPage;
