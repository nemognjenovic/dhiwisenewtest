import React from "react";

import { Img, Input, Text, Line, Button, List } from "components";
import { CloseSVG } from "../../assets/images";

const EventsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[40px] md:gap-[40px] gap-[65px] items-start mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="h-[1024px] w-[auto]"
          alt="navigationwebsi"
        />
        <div className="flex flex-col items-start justify-end md:mt-[0] mt-[40px] md:px-[20px] md:w-[100%] w-[55%]">
          <div className="bg-white_A700 flex md:flex-col flex-row gap-[13px] items-center justify-start p-[12px] rounded-[12px] md:w-[100%] w-[97%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              wrapClassName="bg-white_A700 flex pl-[9px] pr-[35px] py-[7px] md:w-[100%] w-[89%]"
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
          <Text
            className="font-normal mt-[59px] not-italic text-gray_900 text-left w-[auto]"
            as="h1"
            variant="h1"
          >
            Events
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mr-[auto] mt-[40px] md:w-[100%] w-[61%]">
            <div className="flex flex-col gap-[6px] items-start justify-start sm:w-[100%] w-[12%]">
              <Text
                className="font-normal not-italic text-gray_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Anytime
              </Text>
              <Line className="bg-gray_900 h-[2px] md:ml-[0] ml-[4px] w-[93%]" />
            </div>
            <div className="flex items-center justify-start sm:ml-[0] ml-[29px] sm:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-gray_500 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Today
              </Text>
            </div>
            <div className="flex items-center justify-start sm:ml-[0] ml-[27px] sm:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-gray_500 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Tomorrow
              </Text>
            </div>
            <div className="flex items-center justify-start sm:ml-[0] ml-[25px] sm:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-gray_500 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                This Week
              </Text>
            </div>
            <div className="flex items-center justify-start sm:ml-[0] ml-[25px] sm:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-gray_500 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                This Month
              </Text>
            </div>
            <div className="flex items-center justify-start sm:ml-[0] ml-[25px] sm:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-gray_500 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Select
              </Text>
            </div>
          </div>
          <div className="flex items-center justify-start mt-[42px] pb-[30px] w-[100%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="md:gap-[20px] gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[29px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <Img
                      src="images/img_image_180x320.png"
                      className="h-[180px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image"
                    />
                    <div className="flex flex-row items-center justify-between mt-[20px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[45%]">
                        <Button className="border-[2px] border-gray_500_33 border-solid cursor-pointer font-normal h-[48px] not-italic py-[10px] rounded-[15px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 w-[48px]">
                          10
                        </Button>
                        <div className="flex flex-col items-start justify-end w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Monday
                          </Text>
                          <Text
                            className="mt-[3px] not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            December, 2019
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu_bluegray_100.svg"
                        className="h-[38px] w-[38px]"
                        alt="overflowmenu"
                      />
                    </div>
                    <div className="flex flex-col gap-[12px] items-start justify-start mt-[20px] pr-[3px] pt-[3px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Fashion Meetup
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Starts at 9:00am in Los Angeles
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[30px] w-[100%]">
                      <Button
                        className="bg-green_400 cursor-pointer flex items-center justify-center min-w-[101px] pl-[9px] pr-[6px] py-[6px] rounded-[4px] w-[auto]"
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
                      <div className="flex font-sfprodisplay relative w-[24%]">
                        <div className="flex my-[auto] w-[69%]">
                          <div className="flex h-[28px] items-center justify-start my-[auto] w-[28px]">
                            <Img
                              src="images/img_avatar_7.png"
                              className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                              alt="avatar"
                            />
                          </div>
                          <div className="flex h-[28px] items-center justify-start ml-[-5px] my-[auto] w-[28px] z-[1]">
                            <Img
                              src="images/img_avatar_7.png"
                              className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                              alt="avatar_One"
                            />
                          </div>
                        </div>
                        <Button className="bg-gray_900 cursor-pointer font-bold h-[28px] ml-[-5px] my-[auto] py-[7px] rounded-[8px] text-[10.32px] text-center text-white_A700 w-[28px] z-[1]">
                          +9
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[29px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Img
                      src="images/img_image_7.png"
                      className="h-[180px] sm:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image"
                    />
                    <div className="flex flex-row font-inter items-start justify-between mt-[20px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-end justify-between pb-[3px] w-[45%]">
                        <Button className="border-[2px] border-gray_500_6c border-solid cursor-pointer font-normal h-[48px] not-italic py-[10px] rounded-[15px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 w-[48px]">
                          10
                        </Button>
                        <div className="flex flex-col items-start justify-end mb-[2px] mt-[6px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Wednesday
                          </Text>
                          <Text
                            className="mt-[3px] not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            December, 2019
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu_bluegray_100.svg"
                        className="h-[38px] mt-[5px] w-[38px]"
                        alt="overflowmenu"
                      />
                    </div>
                    <Text
                      className="font-inter font-normal leading-[30.00px] mt-[20px] not-italic text-gray_900 text-left w-[100%]"
                      as="h2"
                      variant="h2"
                    >
                      2019 DUB Show at Los Angeles Auto Show
                    </Text>
                    <Text
                      className="font-medium font-sfprodisplay mt-[12px] text-gray_500 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Starts at 9:00am in Los Angeles
                    </Text>
                    <div className="flex flex-row font-inter items-start justify-between mt-[25px] w-[100%]">
                      <Button
                        className="border-[2px] border-gray_500_33 border-solid cursor-pointer flex items-center justify-center min-w-[101px] pl-[9px] pr-[6px] py-[6px] rounded-[4px] w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark_gray_500.svg"
                            className="mr-[3px] my-[1px]"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="font-normal not-italic text-[14px] text-center text-gray_900">
                          Interested
                        </div>
                      </Button>
                      <div className="flex font-sfprodisplay items-center justify-start mt-[2px] w-[auto]">
                        <div className="flex relative w-[100%]">
                          <div className="flex my-[auto] w-[69%]">
                            <div className="flex h-[28px] items-center justify-start my-[auto] w-[28px]">
                              <Img
                                src="images/img_avatar_7.png"
                                className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                                alt="avatar"
                              />
                            </div>
                            <div className="flex h-[28px] items-center justify-start ml-[-5px] my-[auto] w-[28px] z-[1]">
                              <Img
                                src="images/img_avatar_7.png"
                                className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                                alt="avatar_One"
                              />
                            </div>
                          </div>
                          <Button className="bg-gray_900 cursor-pointer font-bold h-[28px] ml-[-5px] my-[auto] py-[7px] rounded-[8px] text-[10.32px] text-center text-white_A700 w-[28px] z-[1]">
                            +9
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[29px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <Img
                      src="images/img_image_8.png"
                      className="h-[180px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image"
                    />
                    <div className="flex flex-row items-center justify-between mt-[20px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[45%]">
                        <Button className="border-[2px] border-gray_500_33 border-solid cursor-pointer font-normal h-[48px] not-italic py-[9px] rounded-[15px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 w-[48px]">
                          10
                        </Button>
                        <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Monday
                          </Text>
                          <Text
                            className="not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            December, 2019
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu_bluegray_100.svg"
                        className="h-[38px] w-[38px]"
                        alt="overflowmenu"
                      />
                    </div>
                    <div className="flex flex-col gap-[10px] items-center justify-start mt-[20px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Fashion Meetup
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Starts at 9:00am in Los Angeles
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[30px] w-[100%]">
                      <Button
                        className="bg-green_400 cursor-pointer flex items-center justify-center min-w-[101px] pl-[9px] pr-[6px] py-[5px] rounded-[4px] w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[3px] my-[3px]"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                          Interested
                        </div>
                      </Button>
                      <div className="flex font-sfprodisplay relative w-[24%]">
                        <div className="flex my-[auto] w-[69%]">
                          <div className="flex h-[28px] items-center justify-start my-[auto] w-[28px]">
                            <Img
                              src="images/img_avatar_7.png"
                              className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                              alt="avatar"
                            />
                          </div>
                          <div className="flex h-[28px] items-center justify-start ml-[-5px] my-[auto] w-[28px] z-[1]">
                            <Img
                              src="images/img_avatar_7.png"
                              className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                              alt="avatar_One"
                            />
                          </div>
                        </div>
                        <Button className="bg-gray_900 cursor-pointer font-bold h-[28px] ml-[-5px] my-[auto] py-[6px] rounded-[8px] text-[10.32px] text-center text-white_A700 w-[28px] z-[1]">
                          +9
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[29px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <Img
                      src="images/img_image_9.png"
                      className="h-[180px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image"
                    />
                    <div className="flex flex-row items-center justify-between mt-[20px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[45%]">
                        <Button className="border-[2px] border-gray_500_33 border-solid cursor-pointer font-normal h-[48px] not-italic py-[9px] rounded-[15px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 w-[48px]">
                          10
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Monday
                          </Text>
                          <Text
                            className="not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            December, 2019
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu_bluegray_100.svg"
                        className="h-[38px] w-[38px]"
                        alt="overflowmenu"
                      />
                    </div>
                    <div className="flex flex-col gap-[10px] items-center justify-start mt-[20px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Fashion Meetup
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Starts at 9:00am in Los Angeles
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[30px] w-[100%]">
                      <Button
                        className="bg-green_400 cursor-pointer flex items-center justify-center min-w-[101px] pl-[9px] pr-[6px] py-[5px] rounded-[4px] w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[3px] my-[3px]"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                          Interested
                        </div>
                      </Button>
                      <div className="flex font-sfprodisplay relative w-[24%]">
                        <div className="flex my-[auto] w-[69%]">
                          <div className="flex h-[28px] items-center justify-start my-[auto] w-[28px]">
                            <Img
                              src="images/img_avatar_7.png"
                              className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                              alt="avatar"
                            />
                          </div>
                          <div className="flex h-[28px] items-center justify-start ml-[-5px] my-[auto] w-[28px] z-[1]">
                            <Img
                              src="images/img_avatar_7.png"
                              className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                              alt="avatar_One"
                            />
                          </div>
                        </div>
                        <Button className="bg-gray_900 cursor-pointer font-bold h-[28px] ml-[-5px] my-[auto] py-[6px] rounded-[8px] text-[10.32px] text-center text-white_A700 w-[28px] z-[1]">
                          +9
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex font-sfprodisplay h-[1024px] items-end justify-start pl-[16px] md:px-[20px] md:w-[100%] w-[25%]"
          style={{ backgroundImage: "url('images/img_side_gray_500.svg')" }}
        >
          <div className="bg-gray_900 flex flex-col gap-[45px] items-end justify-start p-[40px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[100%]">
            <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] mt-[5px] md:w-[100%] w-[45%]">
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
            <div className="flex flex-col font-inter items-start justify-start mb-[45px] pt-[3px] md:w-[100%] w-[97%]">
              <Text
                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                as="h2"
                variant="h2"
              >
                My Next Events
              </Text>
              <List
                className="flex-col gap-[40px] grid items-center mt-[39px] w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_image_140x250.png"
                      className="h-[140px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image"
                    />
                    <div className="flex flex-row gap-[12px] items-center justify-start md:w-[100%] w-[96%]">
                      <div className="flex flex-col gap-[8px] items-start justify-end w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Dua Lipa Live Concert
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          December 12, 2019
                        </Text>
                      </div>
                      <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center my-[9px] p-[7px] rounded-[8px] w-[28px]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px]"
                          alt="checkmark"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_image_10.png"
                      className="h-[140px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image"
                    />
                    <div className="flex flex-row gap-[12px] items-center justify-start md:w-[100%] w-[96%]">
                      <div className="flex flex-col gap-[8px] items-start justify-end w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Dua Lipa Live Concert
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          December 12, 2019
                        </Text>
                      </div>
                      <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center my-[9px] p-[7px] rounded-[8px] w-[28px]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px]"
                          alt="checkmark"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_image_11.png"
                      className="h-[140px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image"
                    />
                    <div className="flex flex-row gap-[12px] items-center justify-start md:w-[100%] w-[96%]">
                      <div className="flex flex-col gap-[8px] items-start justify-end w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Dua Lipa Live Concert
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          December 12, 2019
                        </Text>
                      </div>
                      <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center my-[9px] p-[7px] rounded-[8px] w-[28px]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px]"
                          alt="checkmark"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </List>
              <Button
                className="bg-transparent cursor-pointer flex items-center justify-center min-w-[90px] mt-[40px] py-[2px] w-[auto]"
                rightIcon={
                  <Img
                    src="images/img_arrowright_gray_500.svg"
                    className="ml-[15px] my-[1px]"
                    alt="arrow_right"
                  />
                }
              >
                <div className="font-normal not-italic text-[12px] text-gray_500 text-left tracking-[1.00px]">
                  See more
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
