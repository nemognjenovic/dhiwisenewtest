import React from "react";

import { Img, Input, Button, Text, Line, List } from "components";
import { CloseSVG } from "../../assets/images";

const GroupMessagePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex font-sfprodisplay items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
          <Img
            src="images/img_navigationwebsidebar.svg"
            className="h-[1024px] w-[auto]"
            alt="navigationwebsi"
          />
          <div className="flex md:flex-1 flex-col gap-[40px] items-start justify-start md:mt-[0] mt-[40px] md:px-[20px] md:w-[100%] w-[auto]">
            <div className="flex flex-col md:gap-[40px] gap-[60px] justify-start md:w-[100%] w-[95%]">
              <div className="flex flex-row gap-[15px] items-center justify-end ml-[auto] md:w-[100%] w-[95%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  wrapClassName="bg-white_A700 flex pl-[20px] pr-[35px] py-[20px] rounded-[12px] w-[82%]"
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
              <div className="flex flex-col font-inter gap-[40px] items-start justify-start mr-[12px] md:w-[100%] w-[97%]">
                <Text
                  className="font-normal not-italic text-gray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Inbox
                </Text>
                <div className="flex flex-row gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Direct Messages
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[6px] items-center justify-start w-[22%]">
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Group Chat
                    </Text>
                    <Line className="bg-gray_900 h-[2px] w-[100%]" />
                  </div>
                  <div className="flex items-center justify-start w-[auto]">
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
              className="flex-col gap-[20px] grid items-center w-[100%]"
              orientation="vertical"
            >
              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:w-[100%] w-[90%]">
                <div className="flex flex-row gap-[15px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[87px] sm:w-[100%] w-[85%]">
                  <div className="flex flex-col relative w-[51px]">
                    <div className="flex mx-[auto] w-[100%]">
                      <div className="flex h-[28px] items-center justify-start my-[auto] w-[28px]">
                        <Img
                          src="images/img_avatar_37.png"
                          className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                          alt="avatar"
                        />
                      </div>
                      <Img
                        src="images/img_image_28x28.png"
                        className="h-[28px] ml-[-5px] my-[auto] object-cover rounded-[8px] w-[28px] z-[1]"
                        alt="image"
                      />
                    </div>
                    <Button className="bg-gray_900 cursor-pointer font-bold h-[28px] mt-[-5px] mx-[auto] py-[7px] rounded-[6px] text-[10.32px] text-center text-white_A700 w-[28px] z-[1]">
                      +9
                    </Button>
                  </div>
                  <div className="flex flex-col font-inter gap-[5px] items-start justify-start mt-[4px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Close Friends
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Thank you for sharing
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start sm:ml-[0] ml-[4px] sm:mt-[0] mt-[3px] pl-[3px] pt-[3px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-inter not-italic text-gray_500 text-right w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    3:03pm
                  </Text>
                  <Text
                    className="bg-red_A200 flex font-medium font-sfprodisplay h-[18px] items-center justify-center mt-[3px] rounded-[6px] text-center text-white_A700 w-[18px]"
                    as="h6"
                    variant="h6"
                  >
                    1
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-center justify-start p-[20px] rounded-[12px] w-[100%]">
                <div className="flex flex-row items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[15px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[87px] w-[85%]">
                    <div className="flex flex-col relative w-[51px]">
                      <div className="flex mx-[auto] w-[100%]">
                        <div className="flex h-[28px] items-center justify-start my-[auto] w-[28px]">
                          <Img
                            src="images/img_avatar_38.png"
                            className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                            alt="avatar"
                          />
                        </div>
                        <Img
                          src="images/img_image_52.png"
                          className="h-[28px] ml-[-5px] my-[auto] object-cover rounded-[8px] w-[28px] z-[1]"
                          alt="image"
                        />
                      </div>
                      <Button className="bg-gray_900 cursor-pointer font-bold h-[28px] mt-[-5px] mx-[auto] py-[7px] rounded-[6px] text-[10.32px] text-center text-white_A700 w-[28px] z-[1]">
                        +9
                      </Button>
                    </div>
                    <div className="flex flex-col font-inter gap-[5px] items-start justify-start mt-[4px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Close Friends
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start ml-[4px] mt-[3px] pl-[3px] pt-[3px] w-[auto]">
                    <Text
                      className="font-inter not-italic text-gray_500 text-right w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      3:03pm
                    </Text>
                    <Text
                      className="bg-red_A200 flex font-medium font-sfprodisplay h-[18px] items-center justify-center mt-[3px] rounded-[6px] text-center text-white_A700 w-[18px]"
                      as="h6"
                      variant="h6"
                    >
                      1
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:w-[100%] w-[90%]">
                <div className="flex flex-row gap-[15px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[87px] sm:w-[100%] w-[85%]">
                  <div className="flex flex-col relative w-[51px]">
                    <div className="flex mx-[auto] w-[100%]">
                      <div className="flex h-[28px] items-center justify-start my-[auto] w-[28px]">
                        <Img
                          src="images/img_avatar_39.png"
                          className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                          alt="avatar"
                        />
                      </div>
                      <Img
                        src="images/img_image_53.png"
                        className="h-[28px] ml-[-5px] my-[auto] object-cover rounded-[8px] w-[28px] z-[1]"
                        alt="image"
                      />
                    </div>
                    <Button className="bg-gray_900 cursor-pointer font-bold h-[28px] mt-[-5px] mx-[auto] py-[7px] rounded-[6px] text-[10.32px] text-center text-white_A700 w-[28px] z-[1]">
                      +9
                    </Button>
                  </div>
                  <div className="flex flex-col font-inter gap-[5px] items-start justify-start mt-[4px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Close Friends
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Thank you for sharing
                    </Text>
                  </div>
                </div>
                <div className="flex font-inter items-end justify-start sm:ml-[0] ml-[4px] sm:mt-[0] mt-[3px] pl-[3px] py-[3px] sm:w-[100%] w-[auto]">
                  <Text
                    className="mb-[18px] not-italic text-gray_500 text-right w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    3:03pm
                  </Text>
                </div>
              </div>
            </List>
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
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="flex flex-col font-inter items-start justify-start w-[100%]">
                <div className="flex items-center justify-start md:w-[100%] w-[99%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-1 flex-row gap-[20px] items-center justify-between pr-[10px] md:w-[100%] w-[44%]">
                      <div className="flex relative w-[55%]">
                        <div className="flex my-[auto] w-[69%]">
                          <div className="flex h-[58px] items-center justify-start my-[auto] w-[58px]">
                            <Img
                              src="images/img_avatar_58x58.png"
                              className="h-[58px] md:h-[auto] object-cover rounded-[16px] w-[58px]"
                              alt="avatar_One"
                            />
                          </div>
                          <div className="flex h-[58px] items-center justify-start ml-[-10px] my-[auto] w-[58px] z-[1]">
                            <Img
                              src="images/img_avatar_40.png"
                              className="h-[58px] md:h-[auto] object-cover rounded-[16px] w-[58px]"
                              alt="avatar_Two"
                            />
                          </div>
                        </div>
                        <Button className="bg-gray_900 cursor-pointer font-normal h-[58px] ml-[-10px] my-[auto] not-italic py-[15px] rounded-[16px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[58px] z-[1]">
                          +4
                        </Button>
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Beach Trip
                      </Text>
                    </div>
                    <Img
                      src="images/img_call.svg"
                      className="h-[25px] md:ml-[0] ml-[234px] w-[25px]"
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
                </div>
                <div className="flex flex-col gap-[40px] items-start justify-start mt-[70px] md:w-[100%] w-[46%]">
                  <List
                    className="flex-col gap-[40px] grid w-[79%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-[15px] items-start justify-between my-[0] pb-[3px] pr-[3px] w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="images/img_avatar_41.png"
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
                    <div className="flex flex-row gap-[15px] items-start justify-between my-[0] pb-[3px] pr-[3px] w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="images/img_avatar_34.png"
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
                  <List
                    className="flex-col gap-[40px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 items-center justify-start pb-[9px] w-[100%]">
                      <div className="flex flex-row gap-[15px] items-start justify-between w-[100%]">
                        <div className="flex h-[38px] items-center justify-start w-[38px]">
                          <Img
                            src="images/img_avatar_42.png"
                            className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-col gap-[9px] items-start justify-start w-[84%]">
                          <div className="flex flex-row gap-[7px] items-start justify-start md:w-[100%] w-[53%]">
                            <Text
                              className="font-normal not-italic text-gray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Gunther Ackner
                            </Text>
                            <Text
                              className="not-italic text-gray_500 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              4min
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                            <Img
                              src="images/img_photo2_80x80.png"
                              className="h-[80px] md:h-[auto] object-cover rounded-[8px] w-[80px]"
                              alt="photoTwo"
                            />
                            <Img
                              src="images/img_photo3_80x80.png"
                              className="h-[80px] md:h-[auto] object-cover rounded-[8px] w-[80px]"
                              alt="photoThree"
                            />
                            <Img
                              src="images/img_photo5_80x80.png"
                              className="h-[80px] md:h-[auto] object-cover rounded-[8px] w-[80px]"
                              alt="photoFive"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 items-center justify-start pb-[9px] md:w-[100%] w-[95%]">
                      <div className="flex flex-row gap-[15px] items-start justify-between w-[100%]">
                        <div className="flex h-[38px] items-center justify-start w-[38px]">
                          <Img
                            src="images/img_avatar_38x38.png"
                            className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                            alt="avatar"
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
                  </List>
                  <div className="flex flex-row gap-[15px] items-start justify-start pb-[3px] pr-[3px] md:w-[100%] w-[79%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="images/img_avatar_42.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="avatar_Three"
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
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between mt-[91px] w-[100%]">
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

export default GroupMessagePage;
