import React from "react";

import { Img, Button, Text, List } from "components";

const SingleEventPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-sfprodisplay sm:gap-[20px] md:gap-[20px] items-center mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="h-[1024px] w-[auto]"
          alt="navigationwebsi"
        />
        <div
          className="bg-cover bg-no-repeat flex h-[1024px] items-end justify-start pl-[95px] md:px-[20px] md:w-[100%] w-[89%]"
          style={{ backgroundImage: "url('images/img_main.svg')" }}
        >
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[95px] items-center justify-end ml-[auto] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[40px] items-start justify-start md:w-[100%] w-[54%]">
              <Button
                className="bg-gray_100 cursor-pointer flex items-center justify-center min-w-[103px] pl-[20px] pr-[23px] py-[20px] rounded-[12px] w-[auto]"
                leftIcon={
                  <Img
                    src="images/img_arrowleft.svg"
                    className="mr-[10px]"
                    alt="arrow_left"
                  />
                }
              >
                <div className="font-bold sm:pr-[20px] text-[14px] text-gray_500 text-left">
                  Back
                </div>
              </Button>
              <div className="flex font-inter items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[27%]">
                        <div className="flex flex-row gap-[10px] items-center justify-between md:w-[100%] w-[98%]">
                          <div className="flex h-[48px] items-center justify-start w-[48px]">
                            <Img
                              src="images/img_avatar_8.png"
                              className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                              alt="avatar"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Gunther Ackner
                            </Text>
                            <Text
                              className="mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              3 days ago
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 flex-row gap-[15px] items-center justify-between sm:w-[100%] w-[39%]">
                        <div className="flex flex-row items-center justify-end p-[6px] w-[auto]">
                          <Img
                            src="images/img_reply.svg"
                            className="h-[14px] w-[14px]"
                            alt="reply"
                          />
                          <Text
                            className="font-normal ml-[4px] not-italic text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Share
                          </Text>
                        </div>
                        <Button
                          className="bg-green_400 cursor-pointer flex items-center justify-center min-w-[101px] my-[4px] pl-[9px] pr-[6px] py-[6px] rounded-[4px] w-[auto]"
                          leftIcon={
                            <Img
                              src="images/img_checkmark.svg"
                              className="mr-[3px] my-[1px]"
                              alt="checkmark"
                            />
                          }
                        >
                          <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                            Interested
                          </div>
                        </Button>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[38px] w-[38px]"
                          alt="overflowmenu"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_image_51.png"
                      className="h-[330px] sm:h-[auto] mt-[40px] object-cover rounded-[8px] w-[100%]"
                      alt="image_One"
                    />
                    <Text
                      className="font-normal mt-[42px] not-italic text-gray_900 text-left w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      2019 DUB Show at Los Angeles Auto Show
                    </Text>
                    <List
                      className="sm:flex-col flex-row md:gap-[40px] gap-[90px] grid sm:grid-cols-1 grid-cols-2 mt-[26px] w-[66%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                        <Button className="bg-gray_100 flex h-[48px] items-center justify-center p-[15px] rounded-[12px] w-[48px]">
                          <Img
                            src="images/img_clock.svg"
                            className="h-[18px]"
                            alt="clock"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-end w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            12 December, 2019{" "}
                          </Text>
                          <Text
                            className="mt-[3px] not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            From 9:00am to 6:00pm
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                        <Button className="bg-gray_100 flex h-[48px] items-center justify-center p-[15px] rounded-[12px] w-[48px]">
                          <Img
                            src="images/img_reply_gray_900.svg"
                            className="h-[18px]"
                            alt="reply"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            $60 - $90
                          </Text>
                          <Text
                            className="my-[2px] not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            +30% Taxes
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="flex flex-col gap-[32px] items-start justify-start py-[2px] w-[100%]">
                    <div className="flex flex-col gap-[19px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Event Description
                      </Text>
                      <Text
                        className="font-normal leading-[22.00px] not-italic text-gray_500 text-left w-[100%]"
                        as="h4"
                        variant="h4"
                      >
                        For evidence of the double standard, we need look no
                        farther than Arlington, Oregon, where Mayor Carmen
                        Kontur-Gronquist was recalled in a 142-139 vote after
                        the town’s denizens discovered that the mayor’s MySpace
                        page featured photos of her in lingerie. Although
                        Kontur-Gronquist is alleging election fraud and
                        challenging the returns, and even though the mayoral
                        position was unpaid, no one is arguing that her MySpace
                        page did her in.{" "}
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start mb-[5px] md:w-[100%] w-[60%]">
                      <div className="flex font-sfprodisplay items-center justify-start sm:w-[100%] w-[11%]">
                        <div className="bg-gray_100_90 h-[20px] relative rounded-[4px] w-[100%]">
                          <Text
                            className="ml-[7px] my-[auto] not-italic text-left text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Car
                          </Text>
                          <div className="absolute bg-gray_100_90 flex font-inter h-[100%] inset-[0] items-center justify-center m-[auto] p-[2px] rounded-[4px] w-[100%]">
                            <Text
                              className="not-italic text-center text-gray_500 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Car
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="bg-gray_100_90 font-inter h-[20px] justify-center not-italic pl-[7px] pr-[4px] py-[2px] rounded-[4px] text-center text-gray_500 w-[82px]"
                        as="h5"
                        variant="h5"
                      >
                        Los Angeles
                      </Text>
                      <Text
                        className="bg-gray_100_90 font-inter h-[20px] justify-center not-italic pl-[8px] pr-[5px] py-[2px] rounded-[4px] text-center text-gray_500 w-[70px]"
                        as="h5"
                        variant="h5"
                      >
                        Exhibition
                      </Text>
                      <Text
                        className="bg-gray_100_90 font-inter h-[20px] justify-center not-italic px-[8px] py-[2px] rounded-[4px] text-center text-gray_500 w-[44px]"
                        as="h5"
                        variant="h5"
                      >
                        Auto
                      </Text>
                      <Text
                        className="bg-gray_100_90 font-inter h-[20px] justify-center not-italic px-[8px] py-[2px] rounded-[4px] text-center text-gray_500 w-[44px]"
                        as="h5"
                        variant="h5"
                      >
                        DUB
                      </Text>
                      <Text
                        className="bg-gray_100_90 font-inter h-[20px] justify-center not-italic px-[8px] py-[2px] rounded-[4px] text-center text-gray_500 w-[49px]"
                        as="h5"
                        variant="h5"
                      >
                        Show
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 h-[1024px] items-center justify-start pl-[16px] md:w-[100%] w-[39%]"
              style={{ backgroundImage: "url('images/img_side_gray_500.svg')" }}
            >
              <div className="bg-gray_900 flex flex-col gap-[45px] items-end justify-start p-[40px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[100%]">
                <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] mt-[5px] md:w-[100%] w-[33%]">
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
                <div className="flex flex-col font-inter md:gap-[40px] gap-[60px] items-center justify-start mb-[28px] md:w-[100%] w-[97%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Address
                      </Text>
                      <Img
                        src="images/img_image_240x340.png"
                        className="h-[240px] sm:h-[auto] mt-[31px] object-cover rounded-[8px] w-[100%]"
                        alt="image_Two"
                      />
                      <div className="flex flex-row items-center justify-between mt-[30px] w-[100%]">
                        <div className="flex flex-row gap-[10px] items-center justify-between w-[52%]">
                          <Button className="bg-white_A700_33 flex h-[48px] items-center justify-center p-[15px] rounded-[12px] w-[48px]">
                            <Img
                              src="images/img_map.svg"
                              className="h-[18px]"
                              alt="map"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start pr-[2px] py-[2px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Los Angeles, CA
                            </Text>
                            <Text
                              className="not-italic text-gray_500 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              189 The Grove Dr
                            </Text>
                          </div>
                        </div>
                        <Button className="border-[2px] border-gray_500_99 border-solid cursor-pointer font-normal min-w-[82px] not-italic py-[6px] rounded-[4px] text-[14px] text-center text-white_A700 w-[auto]">
                          Directions
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[41px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Friends Interested
                    </Text>
                    <List
                      className="flex-col gap-[30px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                        <div className="flex h-[38px] items-center justify-start w-[38px]">
                          <Img
                            src="images/img_avatar_38x38.png"
                            className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                            alt="avatar"
                          />
                        </div>
                        <Text
                          className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MadeInAmerica
                        </Text>
                        <Button className="bg-green_400 flex h-[28px] items-center justify-center ml-[161px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[14px]"
                            alt="checkmark"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                        <div className="flex h-[38px] items-center justify-start w-[38px]">
                          <Img
                            src="images/img_avatar.png"
                            className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                            alt="avatar"
                          />
                        </div>
                        <Text
                          className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MadeInAmerica
                        </Text>
                        <Button className="bg-green_400 flex h-[28px] items-center justify-center ml-[161px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[14px]"
                            alt="checkmark"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                        <div className="flex h-[38px] items-center justify-start w-[38px]">
                          <Img
                            src="images/img_avatar_34.png"
                            className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                            alt="avatar"
                          />
                        </div>
                        <Text
                          className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MadeInAmerica
                        </Text>
                        <Button className="bg-green_400 flex h-[28px] items-center justify-center ml-[161px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[14px]"
                            alt="checkmark"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                        <div className="flex h-[38px] items-center justify-start w-[38px]">
                          <Img
                            src="images/img_avatar_35.png"
                            className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                            alt="avatar"
                          />
                        </div>
                        <Text
                          className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MadeInAmerica
                        </Text>
                        <Button className="bg-green_400 flex h-[28px] items-center justify-center ml-[161px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[14px]"
                            alt="checkmark"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                        <div className="flex h-[38px] items-center justify-start w-[38px]">
                          <Img
                            src="images/img_avatar_36.png"
                            className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                            alt="avatar"
                          />
                        </div>
                        <Text
                          className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          MadeInAmerica
                        </Text>
                        <Button className="bg-green_400 flex h-[28px] items-center justify-center ml-[161px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                          <Img
                            src="images/img_send_white_a700.svg"
                            className="h-[14px]"
                            alt="send"
                          />
                        </Button>
                      </div>
                    </List>
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

export default SingleEventPage;
