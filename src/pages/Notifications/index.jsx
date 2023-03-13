import React from "react";

import { Img, Input, Text, Button, List } from "components";
import { CloseSVG } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const NotificationsPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="h-[1024px] w-[auto]"
          alt="navigationwebsi"
        />
        <div className="flex flex-col items-center justify-end md:ml-[0] ml-[65px] md:mt-[0] mt-[40px] md:px-[20px] md:w-[100%] w-[53%]">
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
          <div className="bg-white_A700 flex flex-col gap-[34px] justify-end mt-[40px] sm:pl-[20px] pl-[30px] py-[30px] rounded-[12px] w-[100%]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between mr-[30px] mt-[4px] rounded-[12px] md:w-[100%] w-[96%]">
              <Text
                className="font-normal not-italic text-gray_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Featured Stories
              </Text>
              <Button
                className="bg-gray_500_36 cursor-pointer flex items-center justify-center min-w-[97px] px-[11px] py-[6px] rounded-[12px] w-[auto]"
                rightIcon={
                  <div className="h-[14px] ml-[-2px] w-[14px] rounded-[50%] my-[1px]">
                    <Img
                      src="images/img_arrowright.svg"
                      className="rounded-[7px]"
                      alt="arrow_right"
                    />
                  </div>
                }
              >
                <div className="font-normal not-italic text-[14px] text-gray_900 text-left">
                  See more
                </div>
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end md:ml-[0] ml-[10px] rounded-[12px] md:w-[100%] w-[99%]">
              <Button className="bg-light_blue_200_33 flex h-[45px] items-center justify-center md:mt-[0] my-[10px] p-[11px] rounded-[12px] w-[45px]">
                <Img
                  src="images/img_plus.svg"
                  className="h-[22px]"
                  alt="plus"
                />
              </Button>
              <List
                className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 grid-cols-7 md:ml-[0] ml-[30px] md:w-[100%] w-[80%]"
                orientation="horizontal"
              >
                <div className="bg-gradient  p-[2px] rounded-[12px] w-[100%] ">
                  <div className="bg-white_A700 border-solid flex h-[65px] items-center justify-end p-[5px] rounded-[12px] w-[100%]">
                    <Img
                      src="images/img_image.png"
                      className="h-[54px] md:h-[auto] object-cover rounded-[12px] w-[54px]"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="bg-gradient  p-[2px] rounded-[12px] w-[100%] ">
                  <div className="bg-white_A700 border-solid flex h-[65px] items-center justify-end p-[5px] rounded-[12px] w-[100%]">
                    <Img
                      src="images/img_image_54x54.png"
                      className="h-[54px] md:h-[auto] object-cover rounded-[12px] w-[54px]"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="border-[2px] border-gray_500_66 border-solid flex h-[65px] items-center justify-end p-[5px] rounded-[12px] w-[100%]">
                  <Img
                    src="images/img_image_1.png"
                    className="h-[54px] md:h-[auto] object-cover rounded-[12px] w-[54px]"
                    alt="image"
                  />
                </div>
                <div className="bg-gradient  p-[2px] rounded-[12px] w-[100%] ">
                  <div className="bg-white_A700 border-solid flex h-[65px] items-center justify-end p-[5px] rounded-[12px] w-[100%]">
                    <Img
                      src="images/img_image_2.png"
                      className="h-[54px] md:h-[auto] object-cover rounded-[12px] w-[54px]"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="bg-gradient  p-[2px] rounded-[12px] w-[100%] ">
                  <div className="bg-white_A700 border-solid flex h-[65px] items-center justify-end p-[5px] rounded-[12px] w-[100%]">
                    <Img
                      src="images/img_image_3.png"
                      className="h-[54px] md:h-[auto] object-cover rounded-[12px] w-[54px]"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="bg-gradient  p-[2px] rounded-[12px] w-[100%] ">
                  <div className="bg-white_A700 border-solid flex h-[65px] items-center justify-end p-[5px] rounded-[12px] w-[100%]">
                    <Img
                      src="images/img_image_4.png"
                      className="h-[54px] md:h-[auto] object-cover rounded-[12px] w-[54px]"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="bg-gradient  p-[2px] rounded-[12px] w-[100%] ">
                  <div className="bg-white_A700 border-solid flex h-[65px] items-center justify-end p-[5px] rounded-[12px] w-[100%]">
                    <Img
                      src="images/img_image_5.png"
                      className="h-[54px] md:h-[auto] object-cover rounded-[12px] w-[54px]"
                      alt="image"
                    />
                  </div>
                </div>
              </List>
              <div className="bg-gradient  md:ml-[0] md:w-[100%] ml-[20px] p-[2px] rounded-[12px] sm:ml-[0] sm:w-[100%] w-[7%] ">
                <div className="bg-white_A700 border-solid flex items-end justify-end pl-[5px] py-[5px] rounded-[12px]">
                  <Img
                    src="images/img_image_54x44.png"
                    className="h-[54px] md:h-[auto] object-cover rounded-[12px] w-[98%]"
                    alt="image_One"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex items-center justify-start mt-[30px] p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
              <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex flex-row gap-[15px] items-center justify-start w-[auto]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="avatar"
                    />
                  </div>
                  <Text
                    className="font-normal not-italic text-gray_500 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    What are you thinking?{" "}
                  </Text>
                </div>
                <Img
                  src="images/img_overflowmenu.svg"
                  className="h-[38px] w-[38px]"
                  alt="overflowmenu"
                />
              </div>
              <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                <Img
                  src="images/img_icons.svg"
                  className="h-[38px] w-[auto]"
                  alt="icons"
                />
                <Button className="bg-indigo_A200 cursor-pointer font-normal min-w-[121px] not-italic py-[20px] rounded-[29px] text-[14px] text-center text-white_A700 w-[auto]">
                  Share
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-col items-start justify-start mt-[30px] p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
              <div className="flex flex-row gap-[10px] items-center justify-start pr-[19px] w-[auto]">
                <Img
                  src="images/img_image_48x48.png"
                  className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                  alt="image_Two"
                />
                <div className="flex flex-col items-start justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-gray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Dustin Housto
                  </Text>
                  <Text
                    className="mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    5min ago
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_overflowmenu_bluegray_100.svg"
                className="h-[38px] w-[38px]"
                alt="overflowmenu_One"
              />
            </div>
            <Text
              className="font-normal mt-[30px] not-italic text-gray_500 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              Whether its a driving tour, a cruise or a bus, leaf viewing is a
              great way to spend a fall vacation 😂
            </Text>
            <div className="flex font-sfprodisplay items-center justify-start mt-[22px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between w-[100%]">
                <Img
                  src="images/img_photo1.png"
                  className="md:flex-1 h-[305px] sm:h-[auto] object-cover rounded-[8px] md:w-[100%] w-[auto]"
                  alt="photoOne"
                />
                <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start md:w-[100%] w-[auto]">
                  <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_photo2.png"
                      className="h-[145px] md:h-[auto] object-cover rounded-[8px] w-[auto]"
                      alt="photoTwo"
                    />
                    <Img
                      src="images/img_photo3.png"
                      className="h-[145px] md:h-[auto] object-cover rounded-[8px] w-[auto]"
                      alt="photoThree"
                    />
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_photo4.png"
                      className="h-[145px] md:h-[auto] object-cover rounded-[8px] w-[auto]"
                      alt="photoFour"
                    />
                    <div className="h-[145px] relative w-[48%]">
                      <Img
                        src="images/img_photo5.png"
                        className="h-[145px] m-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="photoFive"
                      />
                      <Button
                        className="bg-white_A700 cursor-pointer flex h-[max-content] inset-[0] inset-x-[33%] inset-y-[39%] items-center justify-center m-[auto] min-w-[54px] mx-[53px] my-[57px] px-[9px] py-[6px] rounded-[4px] w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_settings.svg"
                            className="mr-[6px] right-[4%] absolute my-[1px] inset-y-[1%]"
                            alt="settings"
                          />
                        }
                      >
                        <div className="font-medium text-[14px] text-gray_900 text-left">
                          15
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[40px] w-[100%]">
              <div className="flex md:flex-1 flex-row font-inter gap-[5px] items-center justify-start p-[5px] w-[10%] md:w-[100%]">
                <Img
                  src="images/img_favorite.svg"
                  className="h-[14px] w-[14px]"
                  alt="favorite"
                />
                <Text
                  className="font-normal not-italic text-gray_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  326
                </Text>
              </div>
              <div className="flex md:flex-1 flex-row font-inter gap-[6px] items-center justify-start md:ml-[0] ml-[15px] p-[5px] md:w-[100%] w-[9%]">
                <Img
                  src="images/img_laptop.svg"
                  className="h-[14px] w-[14px]"
                  alt="laptop"
                />
                <Text
                  className="font-normal not-italic text-gray_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  148
                </Text>
              </div>
              <Button
                className="bg-gray_100_6c cursor-pointer flex items-center justify-center min-w-[75px] md:ml-[0] ml-[482px] px-[10px] py-[5px] rounded-[4px] w-[auto]"
                rightIcon={
                  <Img
                    src="images/img_reply.svg"
                    className="ml-[3px] my-[3px]"
                    alt="reply"
                  />
                }
              >
                <div className="font-medium font-sfprodisplay text-[14px] text-gray_900 text-left">
                  Share
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex h-[1024px] items-center justify-start md:ml-[0] ml-[30px] p-[40px] md:px-[20px] md:w-[100%] w-[30%]"
          style={{ backgroundImage: "url('images/img_side.svg')" }}
        >
          <div className="flex flex-col gap-[45px] items-end justify-start mb-[28px] mt-[5px] md:w-[100%] w-[98%]">
            <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[35%]">
              <Button
                className="common-pointer bg-gray_900 flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]"
                onClick={() => navigate(-1)}
              >
                <Img
                  src="images/img_close.svg"
                  className="h-[22px]"
                  alt="close"
                />
              </Button>
              <div className="h-[48px] relative w-[48px]">
                <Img
                  src="images/img_image_6.png"
                  className="h-[48px] m-[auto] object-cover rounded-[12px] w-[48px]"
                  alt="image_Three"
                />
                <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[48px]">
                  <Img
                    src="images/img_avatar_48x48.png"
                    className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                    alt="avatar_One"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
              <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] w-[53%]">
                <Text
                  className="font-bold font-sfprodisplay text-left text-white_A700 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Notifications
                </Text>
                <Text
                  className="bg-red_A200 font-inter h-[20px] justify-center my-[3px] not-italic px-[9px] py-[2px] rounded-[4px] text-left text-white_A700 w-[35px]"
                  as="h5"
                  variant="h5"
                >
                  03
                </Text>
              </div>
              <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
                <div className="flex flex-row items-center justify-start w-[100%]">
                  <div className="bg-red_A200 h-[8px] my-[20px] rounded-[50%] w-[8px]"></div>
                  <div className="flex h-[28px] items-center justify-start ml-[10px] w-[28px]">
                    <Img
                      src="images/img_avatar_28x28.png"
                      className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                      alt="avatar_Two"
                    />
                  </div>
                  <div className="flex flex-row gap-[10px] items-start justify-center ml-[10px] w-[44%]">
                    <div className="flex items-center justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Gunther Ackner
                      </Text>
                    </div>
                    <Text
                      className="not-italic text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      4min
                    </Text>
                  </div>
                  <Img
                    src="images/img_photo.png"
                    className="h-[49px] md:h-[auto] ml-[84px] object-cover rounded-[8px] w-[49px]"
                    alt="photo"
                  />
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[22px] justify-start w-[100%]">
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <div className="bg-red_A200 h-[8px] mb-[29px] mt-[10px] rounded-[50%] w-[8px]"></div>
                      <div className="flex h-[28px] items-center justify-start ml-[10px] w-[28px]">
                        <Img
                          src="images/img_avatar_1.png"
                          className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                          alt="avatar_Three"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px] items-start justify-start ml-[10px] mt-[4px] w-[50%]">
                        <div className="flex flex-row gap-[7px] items-start justify-start md:w-[100%] w-[76%]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="not-italic text-left text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            4min
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          sent you a friend request
                        </Text>
                      </div>
                      <Button className="bg-white_A700_33 flex h-[38px] items-center justify-center mb-[3px] ml-[73px] mt-[6px] p-[10px] rounded-[12px] w-[38px]">
                        <Img
                          src="images/img_camera.svg"
                          className="h-[18px]"
                          alt="camera"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[56px] md:w-[100%] w-[48%]">
                      <Button
                        className="bg-green_400 cursor-pointer flex items-center justify-center min-w-[65px] px-[10px] py-[6px] rounded-[4px] w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[4px] my-[1px]"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="font-normal not-italic text-[14px] text-left text-white_A700">
                          Add
                        </div>
                      </Button>
                      <Button
                        className="bg-gray_900_6c cursor-pointer flex items-center justify-center min-w-[78px] pl-[12px] pr-[5px] py-[6px] rounded-[4px] w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_close.svg"
                            className="mt-[1px] mb-[2px] mr-[4px]"
                            alt="close"
                          />
                        }
                      >
                        <div className="font-normal not-italic text-[14px] text-left text-white_A700">
                          Ignore
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start w-[100%]">
                  <div className="bg-red_A200 h-[8px] mb-[29px] mt-[10px] rounded-[50%] w-[8px]"></div>
                  <div className="flex h-[28px] items-center justify-start ml-[10px] w-[28px]">
                    <Img
                      src="images/img_avatar_2.png"
                      className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                      alt="avatar_Four"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px] items-start justify-start ml-[10px] mt-[4px] w-[50%]">
                    <div className="flex flex-row gap-[7px] items-start justify-start md:w-[100%] w-[76%]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Marriet Miles
                      </Text>
                      <Text
                        className="not-italic text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        4min
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      sent you a friend request
                    </Text>
                  </div>
                  <Button className="bg-white_A700_33 flex h-[38px] items-center justify-center mb-[3px] ml-[73px] mt-[6px] p-[10px] rounded-[12px] w-[38px]">
                    <Img
                      src="images/img_favorite_bluegray_100.svg"
                      className="h-[18px]"
                      alt="favorite_One"
                    />
                  </Button>
                </div>
                <div className="flex flex-row items-center justify-end pl-[18px] w-[100%]">
                  <div className="flex h-[28px] items-center justify-start w-[28px]">
                    <Img
                      src="images/img_avatar_3.png"
                      className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                      alt="avatar_Five"
                    />
                  </div>
                  <div className="flex flex-row gap-[10px] items-start justify-center ml-[10px] w-[46%]">
                    <div className="flex items-center justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Gunther Ackner
                      </Text>
                    </div>
                    <Text
                      className="not-italic text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      4min
                    </Text>
                  </div>
                  <Img
                    src="images/img_photo.png"
                    className="h-[49px] md:h-[auto] ml-[84px] object-cover rounded-[8px] w-[49px]"
                    alt="photo_One"
                  />
                </div>
                <List
                  className="flex-col gap-[40px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 items-end justify-start pl-[18px] w-[100%]">
                    <div className="flex flex-col gap-[22px] justify-start w-[100%]">
                      <div className="flex flex-row items-start justify-start w-[100%]">
                        <div className="flex h-[28px] items-center justify-start w-[28px]">
                          <Img
                            src="images/img_avatar_4.png"
                            className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start ml-[10px] mt-[4px] w-[53%]">
                          <div className="flex flex-row gap-[7px] items-start justify-start md:w-[100%] w-[76%]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Marriet Miles
                            </Text>
                            <Text
                              className="not-italic text-left text-white_A700 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              4min
                            </Text>
                          </div>
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            sent you a friend request
                          </Text>
                        </div>
                        <div className="bg-white_A700_33 flex items-center justify-start mb-[3px] ml-[70px] mt-[6px] p-[10px] rounded-[12px] w-[13%]">
                          <Img
                            src="images/img_camera.svg"
                            className="h-[18px] w-[19px]"
                            alt="camera"
                          />
                        </div>
                      </div>
                      <Button
                        className="bg-gray_900 cursor-pointer flex items-center justify-center min-w-[80px] md:ml-[0] ml-[38px] mr-[197px] px-[9px] py-[6px] rounded-[4px] w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[4px] my-[1px]"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="font-normal not-italic text-[14px] text-left text-white_A700">
                          Added
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-start pl-[18px] w-[100%]">
                    <div className="flex flex-col gap-[22px] justify-start w-[100%]">
                      <div className="flex flex-row items-start justify-start w-[100%]">
                        <div className="flex h-[28px] items-center justify-start w-[28px]">
                          <Img
                            src="images/img_avatar_5.png"
                            className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start ml-[10px] mt-[4px] w-[53%]">
                          <div className="flex flex-row gap-[7px] items-start justify-start md:w-[100%] w-[76%]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Marriet Miles
                            </Text>
                            <Text
                              className="not-italic text-left text-white_A700 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              4min
                            </Text>
                          </div>
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            sent you a friend request
                          </Text>
                        </div>
                        <div className="bg-white_A700_33 flex items-center justify-start mb-[3px] ml-[70px] mt-[6px] p-[10px] rounded-[12px] w-[13%]">
                          <Img
                            src="images/img_camera.svg"
                            className="h-[18px] w-[19px]"
                            alt="camera"
                          />
                        </div>
                      </div>
                      <Button
                        className="bg-gray_900 cursor-pointer flex items-center justify-center min-w-[80px] md:ml-[0] ml-[38px] mr-[197px] px-[9px] py-[6px] rounded-[4px] w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[4px] my-[1px]"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="font-normal not-italic text-[14px] text-left text-white_A700">
                          Added
                        </div>
                      </Button>
                    </div>
                  </div>
                </List>
                <div className="flex flex-row items-start justify-end pl-[18px] w-[100%]">
                  <div className="flex h-[28px] items-center justify-start mt-[10px] w-[28px]">
                    <Img
                      src="images/img_avatar_6.png"
                      className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                      alt="avatar_Six"
                    />
                  </div>
                  <div className="flex flex-row gap-[10px] items-start justify-center ml-[10px] mt-[14px] w-[46%]">
                    <div className="flex items-center justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Gunther Ackner
                      </Text>
                    </div>
                    <Text
                      className="not-italic text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      4min
                    </Text>
                  </div>
                  <Img
                    src="images/img_photo.png"
                    className="h-[44px] md:h-[auto] ml-[84px] object-cover rounded-[8px] w-[16%]"
                    alt="photo_Two"
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

export default NotificationsPage;
