import React from "react";

import { Img, List, Button, Text, Line, Input } from "components";

const VideoChatPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-sfprodisplay sm:gap-[20px] md:gap-[20px] items-center mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="h-[1024px] w-[auto]"
          alt="navigationwebsi"
        />
        <div className="flex md:ml-[0] ml-[5px] md:px-[20px] relative md:w-[100%] w-[89%]">
          <div className="flex items-center justify-start my-[auto] w-[73%]">
            <div className="flex md:flex-col flex-row gap-[10px] items-center justify-between w-[100%]">
              <Img
                src="images/img_leftindicator.svg"
                className="h-[128px] w-[auto]"
                alt="leftindicator"
              />
              <div className="h-[1024px] relative md:w-[100%] w-[99%]">
                <Img
                  src="images/img_modalbackground.png"
                  className="h-[1024px] m-[auto] object-cover rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[100%]"
                  alt="modalbackground"
                />
                <Img
                  src="images/img_image_199x160.png"
                  className="absolute h-[199px] left-[5%] object-cover rounded-[12px] top-[4%] w-[18%]"
                  alt="image_Two"
                />
                <List
                  className="absolute bottom-[4%] sm:flex-col flex-row gap-[30px] grid grid-cols-3 left-[30%] w-[33%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex h-[78px] items-center justify-end p-[20px] rounded-[24px] w-[100%]">
                    <Img
                      src="images/img_settings_bluegray_100_36x36.svg"
                      className="h-[36px] w-[36px]"
                      alt="settings"
                    />
                  </div>
                  <div className="bg-white_A700_33 flex h-[78px] items-center justify-end p-[20px] rounded-[24px] w-[100%]">
                    <Img
                      src="images/img_shape.svg"
                      className="h-[36px] w-[36px]"
                      alt="shape"
                    />
                  </div>
                  <div className="bg-red_A200 flex h-[78px] items-center justify-end p-[20px] rounded-[24px] w-[100%]">
                    <Img
                      src="images/img_alarm.svg"
                      className="h-[36px] w-[36px]"
                      alt="alarm"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex h-[1024px] items-center justify-end ml-[-75px] my-[auto] p-[40px] sm:px-[20px] w-[34%] z-[1]"
            style={{ backgroundImage: "url('images/img_side_white_a700.svg')" }}
          >
            <div className="flex flex-col md:gap-[40px] gap-[60px] items-end justify-start mt-[5px] md:w-[100%] w-[98%]">
              <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[35%]">
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
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="flex flex-row font-sfprodisplay items-center justify-between md:w-[100%] w-[97%]">
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                      <div className="flex h-[58px] items-center justify-start w-[58px]">
                        <div className="h-[58px] relative w-[58px]">
                          <Img
                            src="images/img_avatar_53.png"
                            className="h-[58px] m-[auto] object-cover rounded-[12px] w-[58px]"
                            alt="avatar_One"
                          />
                          <Img
                            src="images/img_settings_white_a700.svg"
                            className="absolute h-[15px] right-[0] top-[0] w-[15px]"
                            alt="settings"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start w-[auto]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Marriet Miles
                        </Text>
                        <Text
                          className="font-medium text-gray_500 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Ongoing Call…
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_overflowmenu.svg"
                    className="h-[25px] w-[25px]"
                    alt="overflowmenu"
                  />
                </div>
                <div className="flex flex-col font-inter items-start justify-start mt-[60px] md:w-[100%] w-[88%]">
                  <div className="flex items-center justify-start pb-[9px] w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-between w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="images/img_avatar_42.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="avatar_Two"
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
                  <div className="flex flex-row gap-[15px] items-start justify-start mt-[35px] pb-[3px] pr-[3px] md:w-[100%] w-[84%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="images/img_avatar_42.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="avatar_Four"
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
                  <div className="flex flex-row items-center justify-start mt-[35px] md:w-[100%] w-[29%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="images/img_avatar.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="avatar_Five"
                      />
                    </div>
                    <div className="bg-gray_500_cc h-[7px] ml-[15px] my-[15px] rounded-[3px] w-[7px]"></div>
                    <div className="bg-gray_500_99 h-[7px] mb-[12px] ml-[5px] mt-[19px] rounded-[3px] w-[7px]"></div>
                    <div className="bg-gray_500_33 h-[7px] mb-[9px] ml-[5px] mt-[22px] rounded-[3px] w-[7px]"></div>
                  </div>
                </div>
                <Input
                  wrapClassName="bg-gray_100 flex mt-[55px] pl-[10px] pr-[20px] py-[10px] rounded-[12px] w-[100%]"
                  className="font-inter font-normal not-italic p-[0] placeholder:text-gray_500 text-[14px] text-gray_500 text-left w-[100%]"
                  name="writebox"
                  placeholder="Start typing…"
                  prefix={
                    <div className="h-[38px] mr-[10px] w-[38px] bg-gray_500_33 p-[10px] rounded-[12px] flex justify-center items-center">
                      <Img
                        src="images/img_plus_gray_500_18x18.svg"
                        className="my-[auto]"
                        alt="plus"
                      />
                    </div>
                  }
                  suffix={
                    <Img
                      src="images/img_user.svg"
                      className="ml-[35px] my-[10px]"
                      alt="user"
                    />
                  }
                ></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoChatPage;
