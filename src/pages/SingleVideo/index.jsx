import React from "react";

import { Img, Button, Text, Line, List, Input } from "components";

const SingleVideoPage = () => {
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
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between ml-[auto] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:w-[100%] w-[54%]">
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
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
                <div className="flex flex-col font-inter gap-[30px] items-center justify-start w-[100%]">
                  <div className="h-[360px] relative w-[100%]">
                    <Img
                      src="images/img_videobackground.png"
                      className="h-[360px] m-[auto] object-cover rounded-[12px] w-[100%]"
                      alt="videobackground"
                    />
                    <div className="absolute bottom-[6%] flex inset-x-[0] items-center justify-start mx-[auto] w-[94%]">
                      <div className="flex flex-col gap-[18px] items-center justify-start w-[100%]">
                        <div className="flex items-center justify-start pt-[2px] w-[100%]">
                          <div className="flex flex-col gap-[6px] items-center justify-start w-[100%]">
                            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                              <Text
                                className="not-italic text-left text-white_A700 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                01:23
                              </Text>
                              <Text
                                className="not-italic text-right text-white_A700 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                05:46
                              </Text>
                            </div>
                            <div className="h-[4px] relative w-[100%]">
                              <Line className="bg-white_A700_33 h-[4px] m-[auto] rounded-[2px] w-[100%]" />
                              <div className="absolute h-[4px] inset-y-[0] left-[0] my-[auto] overflow-hidden w-[60%]">
                                <div className="w-full h-full absolute bg-white_A700_cc rounded-[2px]"></div>
                                <div
                                  className="h-full absolute bg-light_blue_200  rounded-[2px]"
                                  style={{ width: "88%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                          <div className="flex flex-row items-center justify-between w-[16%]">
                            <Img
                              src="images/img_iconpause.svg"
                              className="h-[18px] w-[18px]"
                              alt="iconpause"
                            />
                            <Img
                              src="images/img_iconvolume.svg"
                              className="h-[18px] w-[18px]"
                              alt="iconvolume"
                            />
                            <div className="h-[4px] my-[7px] overflow-hidden relative w-[auto]">
                              <div className="w-full h-full absolute bg-white_A700_33 rounded-[2px]"></div>
                              <div
                                className="h-full absolute bg-white_A700  rounded-[2px]"
                                style={{ width: "67%" }}
                              ></div>
                            </div>
                          </div>
                          <Img
                            src="images/img_computer.svg"
                            className="h-[18px] w-[auto]"
                            alt="computer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[24%]">
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
                            className="font-normal not-italic text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Katherine Cole
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
                    </div>
                    <div className="flex sm:flex-1 flex-row items-start justify-between sm:w-[100%] w-[46%]">
                      <div className="flex flex-row gap-[5px] items-center justify-start mt-[4px] p-[6px] w-[auto]">
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
                      <div className="flex flex-row gap-[6px] items-center justify-start mt-[4px] p-[5px] w-[auto]">
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
                      <div className="flex flex-row items-center justify-center mt-[3px] p-[6px] w-[auto]">
                        <Img
                          src="images/img_reply.svg"
                          className="h-[14px] ml-[4px] w-[14px]"
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
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="h-[38px] w-[38px]"
                        alt="overflowmenu"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                      <Text
                        className="font-normal leading-[36.00px] not-italic text-gray_900 text-left w-[100%]"
                        as="h1"
                        variant="h1"
                      >
                        Tropical Fresh Tourism Is Back In Full Swing In Cancun
                        Mexico
                      </Text>
                      <Text
                        className="font-normal leading-[22.00px] not-italic text-gray_500 text-left w-[100%]"
                        as="h4"
                        variant="h4"
                      >
                        Cancun is back, better than ever! Over a hundred Mexico
                        resorts have reopened and the state tourism minister
                        predicts Cancun will draw as many visitors in 2006 as it
                        did two years ago. And the travel deals are great! If
                        you haven’t been, now may be the best time to take a
                        vacation to Cancun.
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] w-[59%]">
                      <Text
                        className="bg-gray_500_48 h-[20px] justify-center not-italic px-[8px] py-[2px] rounded-[4px] text-center text-gray_500 w-[52px]"
                        as="h5"
                        variant="h5"
                      >
                        Travel
                      </Text>
                      <Text
                        className="bg-gray_500_48 h-[20px] justify-center not-italic pl-[9px] pr-[6px] py-[2px] rounded-[4px] text-center text-gray_500 w-[57px]"
                        as="h5"
                        variant="h5"
                      >
                        Mexico
                      </Text>
                      <Text
                        className="bg-gray_500_48 h-[20px] justify-center not-italic px-[8px] py-[2px] rounded-[4px] text-center text-gray_500 w-[43px]"
                        as="h5"
                        variant="h5"
                      >
                        Vlog
                      </Text>
                      <Text
                        className="bg-gray_500_48 h-[20px] justify-center not-italic px-[8px] py-[2px] rounded-[4px] text-center text-gray_500 w-[42px]"
                        as="h5"
                        variant="h5"
                      >
                        Tips
                      </Text>
                      <Text
                        className="bg-gray_500_48 h-[20px] justify-center not-italic px-[7px] py-[2px] rounded-[4px] text-center text-gray_500 w-[65px]"
                        as="h5"
                        variant="h5"
                      >
                        Vacation
                      </Text>
                      <Text
                        className="bg-gray_500_48 h-[20px] justify-center not-italic pl-[9px] pr-[6px] py-[2px] rounded-[4px] text-center text-gray_500 w-[60px]"
                        as="h5"
                        variant="h5"
                      >
                        Cancun
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-inter gap-[21px] items-start justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Related Videos
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                  orientation="horizontal"
                >
                  <div className="h-[115px] relative w-[100%]">
                    <Img
                      src="images/img_image_115x200.png"
                      className="h-[115px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image"
                    />
                    <div className="absolute bg-gray_900_7e flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[38px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_66 flex h-[38px] items-center justify-center p-[10px] rounded-[12px] w-[38px]">
                        <Img
                          src="images/img_play.svg"
                          className="h-[18px]"
                          alt="play"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="h-[115px] relative w-[100%]">
                    <Img
                      src="images/img_image_12.png"
                      className="h-[115px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image"
                    />
                    <div className="absolute bg-gray_900_7e flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[38px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_66 flex h-[38px] items-center justify-center p-[10px] rounded-[12px] w-[38px]">
                        <Img
                          src="images/img_play.svg"
                          className="h-[18px]"
                          alt="play"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="h-[115px] relative w-[100%]">
                    <Img
                      src="images/img_image_13.png"
                      className="h-[115px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image"
                    />
                    <div className="absolute bg-gray_900_7e flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[38px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_66 flex h-[38px] items-center justify-center p-[10px] rounded-[12px] w-[38px]">
                        <Img
                          src="images/img_play.svg"
                          className="h-[18px]"
                          alt="play"
                        />
                      </Button>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="bg-gray_900 flex md:flex-1 flex-col gap-[46px] items-end justify-end p-[40px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] md:w-[100%] w-[37%]">
              <div className="flex flex-row gap-[20px] items-center justify-end mr-[8px] mt-[5px] md:w-[100%] w-[33%]">
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
              <div className="flex flex-col font-inter md:gap-[40px] gap-[70px] items-center justify-start mr-[8px] md:w-[100%] w-[96%]">
                <div className="flex flex-col gap-[41px] items-start justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Comments (148)
                  </Text>
                  <List
                    className="flex-col gap-[32px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                          <div className="flex flex-row items-end justify-evenly w-[auto]">
                            <div className="flex h-[28px] items-center justify-start w-[28px]">
                              <Img
                                src="images/img_avatar_9.png"
                                className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                                alt="avatar"
                              />
                            </div>
                            <Text
                              className="font-normal my-[5px] not-italic text-left text-white_A700 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Billy Green
                            </Text>
                          </div>
                          <Text
                            className="not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            20min ago
                          </Text>
                        </div>
                        <Text
                          className="font-normal leading-[22.00px] not-italic text-left text-white_A700 w-[100%]"
                          as="h4"
                          variant="h4"
                        >
                          Awesome Edward, remeber that five tips for low cost
                          holidays I sent you?
                        </Text>
                        <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[14%]">
                          <Img
                            src="images/img_favorite_red_a200.svg"
                            className="h-[14px] w-[14px]"
                            alt="favorite"
                          />
                          <Img
                            src="images/img_laptop.svg"
                            className="h-[14px] w-[14px]"
                            alt="laptop"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                          <div className="flex flex-row items-end justify-evenly w-[auto]">
                            <div className="flex h-[28px] items-center justify-start w-[28px]">
                              <Img
                                src="images/img_avatar_4.png"
                                className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                                alt="avatar"
                              />
                            </div>
                            <Text
                              className="font-normal my-[5px] not-italic text-left text-white_A700 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Billy Green
                            </Text>
                          </div>
                          <Text
                            className="not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            20min ago
                          </Text>
                        </div>
                        <Text
                          className="font-normal leading-[22.00px] not-italic text-left text-white_A700 w-[100%]"
                          as="h4"
                          variant="h4"
                        >
                          Awesome Edward, remeber that five tips for low cost{" "}
                        </Text>
                        <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[14%]">
                          <Img
                            src="images/img_favorite_bluegray_100.svg"
                            className="h-[14px] w-[14px]"
                            alt="favorite"
                          />
                          <Img
                            src="images/img_laptop.svg"
                            className="h-[14px] w-[14px]"
                            alt="laptop"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                          <div className="flex flex-row items-end justify-evenly w-[auto]">
                            <div className="flex h-[28px] items-center justify-start w-[28px]">
                              <Img
                                src="images/img_avatar_10.png"
                                className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                                alt="avatar"
                              />
                            </div>
                            <Text
                              className="font-normal my-[5px] not-italic text-left text-white_A700 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Billy Green
                            </Text>
                          </div>
                          <Text
                            className="not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            20min ago
                          </Text>
                        </div>
                        <Text
                          className="font-normal leading-[22.00px] not-italic text-left text-white_A700 w-[100%]"
                          as="h4"
                          variant="h4"
                        >
                          Awesome Edward, remeber that five tips for low cost
                          holidays I sent you?
                        </Text>
                        <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[14%]">
                          <Img
                            src="images/img_favorite_red_a200.svg"
                            className="h-[14px] w-[14px]"
                            alt="favorite"
                          />
                          <Img
                            src="images/img_laptop.svg"
                            className="h-[14px] w-[14px]"
                            alt="laptop"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                          <div className="flex flex-row items-end justify-evenly w-[auto]">
                            <div className="flex h-[28px] items-center justify-start w-[28px]">
                              <Img
                                src="images/img_avatar_11.png"
                                className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                                alt="avatar"
                              />
                            </div>
                            <Text
                              className="font-normal my-[5px] not-italic text-left text-white_A700 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Billy Green
                            </Text>
                          </div>
                          <Text
                            className="not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            20min ago
                          </Text>
                        </div>
                        <Text
                          className="font-normal leading-[22.00px] not-italic text-left text-white_A700 w-[100%]"
                          as="h4"
                          variant="h4"
                        >
                          Awesome Edward, remeber that five tips for low cost{" "}
                        </Text>
                        <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[14%]">
                          <Img
                            src="images/img_favorite_bluegray_100.svg"
                            className="h-[14px] w-[14px]"
                            alt="favorite"
                          />
                          <Img
                            src="images/img_laptop.svg"
                            className="h-[14px] w-[14px]"
                            alt="laptop"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                          <div className="flex flex-row items-end justify-evenly w-[auto]">
                            <div className="flex h-[28px] items-center justify-start w-[28px]">
                              <Img
                                src="images/img_avatar_3.png"
                                className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                                alt="avatar"
                              />
                            </div>
                            <Text
                              className="font-normal my-[5px] not-italic text-left text-white_A700 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Billy Green
                            </Text>
                          </div>
                          <Text
                            className="not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            20min ago
                          </Text>
                        </div>
                        <Text
                          className="font-normal leading-[22.00px] not-italic text-left text-white_A700 w-[100%]"
                          as="h4"
                          variant="h4"
                        >
                          Awesome Edward, remeber that five tips for low cost
                          holidays I sent you?
                        </Text>
                        <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[14%]">
                          <Img
                            src="images/img_favorite_red_a200.svg"
                            className="h-[14px] w-[14px]"
                            alt="favorite"
                          />
                          <Img
                            src="images/img_laptop.svg"
                            className="h-[14px] w-[14px]"
                            alt="laptop"
                          />
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="bg-white_A700 flex flex-row gap-[25px] items-center justify-start p-[11px] rounded-[4px] w-[100%]">
                  <Input
                    wrapClassName="bg-white_A700 flex ml-[4px] py-[4px] w-[82%]"
                    className="font-normal not-italic p-[0] placeholder:text-gray_500 text-[14px] text-gray_500 text-left w-[100%]"
                    name="frameFive"
                    placeholder="Write a comment…"
                    suffix={
                      <Img
                        src="images/img_user.svg"
                        className="ml-[12px] my-[1px]"
                        alt="user"
                      />
                    }
                  ></Input>
                  <Img
                    src="images/img_send.svg"
                    className="h-[14px] w-[14px]"
                    alt="send"
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

export default SingleVideoPage;
