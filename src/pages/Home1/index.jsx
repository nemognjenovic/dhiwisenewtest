import React from "react";

import { Img, Input, Text, Button, List } from "components";
import { CloseSVG } from "../../assets/images";

const Home1Page = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="h-[1024px] w-[auto]"
          alt="navigationwebsi"
        />
        <div className="flex items-center justify-end md:ml-[0] ml-[65px] md:mt-[0] mt-[40px] md:px-[20px] md:w-[100%] w-[53%]">
          <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
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
                      visibility:
                        inputvalue?.length <= 0 ? "hidden" : "visible",
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
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start md:w-[100%] w-[50%]">
                <div className="bg-white_A700 flex flex-col gap-[7px] items-center justify-start p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex flex-row items-start justify-start w-[100%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="images/img_avatar.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="avatar"
                      />
                    </div>
                    <div className="bg-white_A700 flex items-start justify-start ml-[5px] p-[10px] rounded-[19px] w-[auto]">
                      <Text
                        className="font-normal mb-[52px] not-italic text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        What are you thinking?{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start w-[100%]">
                    <Button className="bg-gray_100 flex h-[28px] items-center justify-center mt-[2px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_settings_bluegray_100.svg"
                        className="h-[14px]"
                        alt="settings"
                      />
                    </Button>
                    <Button className="bg-gray_100 flex h-[28px] items-center justify-center ml-[10px] mt-[2px] p-[6px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_videocamera.svg"
                        className="h-[14px]"
                        alt="videocamera"
                      />
                    </Button>
                    <Button className="bg-gray_100 flex h-[28px] items-center justify-center ml-[10px] mt-[2px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_plus_gray_500.svg"
                        className="h-[14px]"
                        alt="plus"
                      />
                    </Button>
                    <Button
                      className="bg-indigo_A200 cursor-pointer flex items-center justify-center min-w-[75px] ml-[141px] px-[11px] py-[6px] rounded-[4px] w-[auto]"
                      rightIcon={
                        <Img
                          src="images/img_arrowright_white_a700.svg"
                          className="ml-[0] my-[1px]"
                          alt="arrow_right"
                        />
                      }
                    >
                      <div className="font-normal not-italic text-[14px] text-left text-white_A700">
                        Share
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex items-center justify-end p-[8px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col items-center justify-start mt-[22px] md:w-[100%] w-[88%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[50%]">
                        <Img
                          src="images/img_image_58.png"
                          className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                          alt="image_One"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Edward Ford
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
                        src="images/img_overflowmenu.svg"
                        className="h-[38px] w-[38px]"
                        alt="overflowmenu"
                      />
                    </div>
                    <div className="flex flex-col gap-[20px] items-center justify-start mt-[30px] pt-[2px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Tourism Is Back In Full Swing In Cancun Mexico
                      </Text>
                      <div className="h-[180px] relative w-[100%]">
                        <Img
                          src="images/img_image_59.png"
                          className="h-[180px] m-[auto] object-cover rounded-[8px] w-[100%]"
                          alt="image_Two"
                        />
                        <div className="absolute bg-gray_900_66 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[71px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]">
                          <Button className="bg-white_A700_99 flex h-[38px] items-center justify-center p-[10px] rounded-[12px] w-[38px]">
                            <Img
                              src="images/img_play.svg"
                              className="h-[18px]"
                              alt="play"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[30px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[44%]">
                        <div className="flex flex-row gap-[5px] items-center justify-start p-[6px] w-[48%]">
                          <Img
                            src="images/img_favorite_bluegray_100.svg"
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
                        <div className="flex flex-row gap-[6px] items-center justify-start p-[5px] w-[46%]">
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
                      </div>
                      <div className="flex flex-row items-center justify-center p-[6px] w-[24%]">
                        <Text
                          className="font-normal ml-[3px] not-italic text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Share
                        </Text>
                        <Img
                          src="images/img_reply.svg"
                          className="h-[14px] mr-[4px] w-[14px]"
                          alt="reply"
                        />
                      </div>
                    </div>
                    <div className="border-[2px] border-gray_500_33 border-solid flex flex-row gap-[15px] items-center justify-evenly mt-[20px] p-[11px] rounded-[4px] w-[100%]">
                      <Input
                        wrapClassName="bg-white_A700 flex py-[4px] w-[88%]"
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
                    <div className="flex items-center justify-start mt-[20px] w-[100%]">
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                          <div className="flex flex-row items-end justify-evenly w-[auto]">
                            <div className="flex h-[28px] items-center justify-start w-[28px]">
                              <Img
                                src="images/img_avatar_51.png"
                                className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                                alt="avatar_One"
                              />
                            </div>
                            <Text
                              className="font-normal my-[5px] not-italic text-gray_900 text-left w-[auto]"
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
                          className="font-normal leading-[22.00px] not-italic text-gray_500 text-left w-[100%]"
                          as="h4"
                          variant="h4"
                        >
                          Awesome Edward, remeber that five tips for low cost
                          holidays I sent you?
                        </Text>
                        <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] w-[14%]">
                          <Img
                            src="images/img_favorite_red_a200.svg"
                            className="h-[14px] w-[14px]"
                            alt="favorite_One"
                          />
                          <Img
                            src="images/img_laptop.svg"
                            className="h-[14px] w-[14px]"
                            alt="laptop_One"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start mt-[30px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between md:w-[100%] w-[99%]">
                          <div className="flex flex-row items-end justify-evenly w-[auto]">
                            <div className="flex h-[28px] items-center justify-start w-[28px]">
                              <Img
                                src="images/img_avatar_51.png"
                                className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                                alt="avatar_Two"
                              />
                            </div>
                            <Text
                              className="font-normal my-[5px] not-italic text-gray_900 text-left w-[auto]"
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
                          className="font-normal mt-[13px] not-italic text-gray_500 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Awesome Edward, remeber that five tips for low cost
                          holidays I sent you?
                        </Text>
                        <div className="flex flex-row gap-[15px] items-center justify-start mt-[33px] md:w-[100%] w-[14%]">
                          <Img
                            src="images/img_favorite_red_a200.svg"
                            className="h-[14px] w-[14px]"
                            alt="favorite_Two"
                          />
                          <Img
                            src="images/img_laptop.svg"
                            className="h-[14px] w-[14px]"
                            alt="laptop_Two"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start md:w-[100%] w-[47%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[10px] items-center justify-between w-[66%]">
                      <Img
                        src="images/img_image_25.png"
                        className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                        alt="image_Three"
                      />
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
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="h-[38px] w-[38px]"
                      alt="overflowmenu_One"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start mt-[30px] pb-[2px] w-[100%]">
                    <Img
                      src="images/img_image_150x290.png"
                      className="h-[150px] sm:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image_Four"
                    />
                    <div className="flex flex-col gap-[15px] items-center justify-start mt-[20px] w-[100%]">
                      <Text
                        className="font-normal leading-[22.00px] not-italic text-gray_900 text-left w-[100%]"
                        as="h3"
                        variant="h3"
                      >
                        The Best Fashion Instagrams of the Week: Céline Dion,
                        Lizzo, and More
                      </Text>
                      <Text
                        className="font-normal leading-[20.00px] not-italic text-gray_500 text-left w-[100%]"
                        as="h4"
                        variant="h4"
                      >
                        If you are looking for a break from the cold, take a cue
                        from Lizzo: This week, the singer headed to Disneyland
                        in warm and sunny California.
                      </Text>
                    </div>
                    <Text
                      className="mt-[11px] not-italic text-indigo_A200 text-left tracking-[1.00px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Read More
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] w-[100%]">
                    <div className="flex flex-row gap-[5px] items-center justify-start p-[6px] w-[23%]">
                      <Img
                        src="images/img_favorite_bluegray_100.svg"
                        className="h-[14px] w-[14px]"
                        alt="favorite_Three"
                      />
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        326
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[22%]">
                      <Img
                        src="images/img_laptop.svg"
                        className="h-[14px] w-[14px]"
                        alt="laptop_Three"
                      />
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        148
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-center ml-[77px] p-[6px] w-[26%]">
                      <Text
                        className="font-normal ml-[3px] not-italic text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Share
                      </Text>
                      <Img
                        src="images/img_reply.svg"
                        className="h-[14px] mr-[4px] w-[14px]"
                        alt="reply_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex items-center justify-start p-[23px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col items-center justify-start my-[7px] md:w-[100%] w-[98%]">
                    <div className="flex flex-col gap-[31px] items-start justify-start md:w-[100%] w-[98%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[10px] items-center justify-between w-[61%]">
                          <Img
                            src="images/img_image_48x48.png"
                            className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                            alt="image_Five"
                          />
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Dustin Houston
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
                          src="images/img_overflowmenu.svg"
                          className="h-[38px] w-[38px]"
                          alt="overflowmenu_Two"
                        />
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Whether its a driving tour 😂
                      </Text>
                    </div>
                    <div className="flex font-sfprodisplay items-center justify-start mt-[26px] md:w-[100%] w-[98%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_image_160x200.png"
                          className="h-[160px] md:h-[auto] object-cover rounded-[8px] w-[auto]"
                          alt="image_Six"
                        />
                        <div className="flex flex-col gap-[10px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_image_75x80.png"
                            className="h-[75px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                            alt="image_Seven"
                          />
                          <div className="h-[75px] relative w-[100%]">
                            <Img
                              src="images/img_image_60.png"
                              className="h-[75px] m-[auto] object-cover rounded-[8px] w-[100%]"
                              alt="image_Eight"
                            />
                            <div className="absolute flex flex-row gap-[6px] h-[max-content] inset-[0] items-center justify-center m-[auto] p-[6px] w-[68%]">
                              <Img
                                src="images/img_settings_bluegray_100.svg"
                                className="h-[14px] ml-[2px] w-[14px]"
                                alt="settings_One"
                              />
                              <Text
                                className="font-medium mr-[3px] text-left text-white_A700 w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                17
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row font-inter items-center justify-between mt-[25px] md:w-[100%] w-[98%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[48%]">
                        <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[48%]">
                          <Img
                            src="images/img_favorite_bluegray_100.svg"
                            className="h-[14px] w-[14px]"
                            alt="favorite_Four"
                          />
                          <Text
                            className="font-normal not-italic text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            326
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6px] items-center justify-start p-[5px] w-[46%]">
                          <Img
                            src="images/img_laptop.svg"
                            className="h-[14px] w-[14px]"
                            alt="laptop_Four"
                          />
                          <Text
                            className="font-normal not-italic text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            148
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center p-[5px] w-[26%]">
                        <Text
                          className="font-normal ml-[5px] not-italic text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Share
                        </Text>
                        <Img
                          src="images/img_reply.svg"
                          className="h-[14px] mr-[6px] w-[14px]"
                          alt="reply_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-sfprodisplay h-[1024px] md:ml-[0] ml-[30px] overflow-auto md:px-[20px] relative md:w-[100%] w-[30%]">
          <div
            className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[30px] sm:px-[20px] w-[100%]"
            style={{ backgroundImage: "url('images/img_side.svg')" }}
          >
            <div className="flex flex-col md:gap-[40px] gap-[60px] items-center justify-start mr-[10px] mt-[15px] md:w-[100%] w-[88%]">
              <div className="flex flex-col gap-[223px] md:gap-[40px] justify-start w-[100%]">
                <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[37%]">
                  <Button className="bg-light_blue_200 cursor-pointer font-bold h-[48px] py-[10px] rounded-[12px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 w-[48px]">
                    1
                  </Button>
                  <div className="flex h-[48px] items-center justify-start w-[48px]">
                    <Img
                      src="images/img_avatar_48x48.png"
                      className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                      alt="avatar_Three"
                    />
                  </div>
                </div>
                <div className="flex flex-col font-inter items-start justify-start mr-[10px] md:w-[100%] w-[305px]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Who to Follow
                  </Text>
                  <List
                    className="flex-col gap-[30px] grid items-center mt-[41px] w-[100%]"
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
                          src="images/img_camera.svg"
                          className="h-[14px]"
                          alt="camera"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="images/img_avatar_52.png"
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
                          src="images/img_camera.svg"
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
                          src="images/img_camera.svg"
                          className="h-[14px]"
                          alt="camera"
                        />
                      </Button>
                    </div>
                  </List>
                  <Button
                    className="bg-transparent cursor-pointer flex items-center justify-center min-w-[90px] mt-[42px] w-[auto]"
                    rightIcon={
                      <Img
                        src="images/img_arrowright_gray_500.svg"
                        className="ml-[11px]"
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
              <div className="flex flex-col font-inter gap-[39px] items-start justify-start pt-[3px] md:w-[100%] w-[97%]">
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Trend Topics
                </Text>
                <List
                  className="flex-col gap-[30px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <Button className="bg-green_400 cursor-pointer font-bold font-sfprodisplay h-[38px] py-[10px] rounded-[12px] text-[14px] text-center text-white_A700 w-[38px]">
                      #1
                    </Button>
                    <Text
                      className="font-inter font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      MadeInAmerica
                    </Text>
                    <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center ml-[126px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[14px]"
                        alt="checkmark"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <Button className="bg-green_400 cursor-pointer font-bold font-sfprodisplay h-[38px] py-[10px] rounded-[12px] text-[14px] text-center text-white_A700 w-[38px]">
                      #2
                    </Button>
                    <Text
                      className="font-inter font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      MadeInAmerica
                    </Text>
                    <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center ml-[126px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[14px]"
                        alt="checkmark"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <Button className="bg-green_400 cursor-pointer font-bold font-sfprodisplay h-[38px] py-[10px] rounded-[12px] text-[14px] text-center text-white_A700 w-[38px]">
                      #3
                    </Button>
                    <Text
                      className="font-inter font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      MadeInAmerica
                    </Text>
                    <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center ml-[126px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[14px]"
                        alt="checkmark"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <Button className="bg-green_400 cursor-pointer font-bold font-sfprodisplay h-[38px] py-[10px] rounded-[12px] text-[14px] text-center text-white_A700 w-[38px]">
                      #4
                    </Button>
                    <Text
                      className="font-inter font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      MadeInAmerica
                    </Text>
                    <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center ml-[126px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[14px]"
                        alt="checkmark"
                      />
                    </Button>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col font-inter gap-[41px] items-start justify-start right-[0] top-[13%] w-[93%]">
            <Text
              className="font-normal not-italic text-left text-white_A700 w-[auto]"
              as="h2"
              variant="h2"
            >
              Featured Stories
            </Text>
            <List
              className="sm:flex-col flex-row gap-[20px] grid grid-cols-6 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-gradient  p-[2px] rounded-[12px] w-[100%] ">
                <div className="bg-gray_100 border-solid flex flex-1 h-[48px] items-center justify-start p-[4px] rounded-[12px] w-[100%]">
                  <Img
                    src="images/img_image_40x40.png"
                    className="h-[40px] md:h-[auto] object-cover rounded-[9px] w-[40px]"
                    alt="image"
                  />
                </div>
              </div>
              <div className="bg-gradient  p-[2px] rounded-[12px] w-[100%] ">
                <div className="bg-gray_100 border-solid flex flex-1 h-[48px] items-center justify-start p-[4px] rounded-[12px] w-[100%]">
                  <Img
                    src="images/img_image_61.png"
                    className="h-[40px] md:h-[auto] object-cover rounded-[9px] w-[40px]"
                    alt="image"
                  />
                </div>
              </div>
              <div className="bg-gradient  p-[2px] rounded-[12px] w-[100%] ">
                <div className="bg-gray_100 border-solid flex flex-1 h-[48px] items-center justify-start p-[4px] rounded-[12px] w-[100%]">
                  <Img
                    src="images/img_image_62.png"
                    className="h-[40px] md:h-[auto] object-cover rounded-[9px] w-[40px]"
                    alt="image"
                  />
                </div>
              </div>
              <div className="bg-gradient  p-[2px] rounded-[12px] w-[100%] ">
                <div className="bg-gray_100 border-solid flex flex-1 h-[48px] items-center justify-start p-[4px] rounded-[12px] w-[100%]">
                  <Img
                    src="images/img_image_63.png"
                    className="h-[40px] md:h-[auto] object-cover rounded-[9px] w-[40px]"
                    alt="image"
                  />
                </div>
              </div>
              <div className="bg-gradient  p-[2px] rounded-[12px] w-[100%] ">
                <div className="bg-gray_100 border-solid flex flex-1 h-[48px] items-center justify-start p-[4px] rounded-[12px] w-[100%]">
                  <Img
                    src="images/img_image_64.png"
                    className="h-[40px] md:h-[auto] object-cover rounded-[9px] w-[40px]"
                    alt="image"
                  />
                </div>
              </div>
              <div className="bg-gradient  p-[2px] rounded-[12px] w-[100%] ">
                <div className="bg-gray_100 border-solid flex flex-1 h-[48px] items-center justify-start p-[4px] rounded-[12px] w-[100%]">
                  <Img
                    src="images/img_image_65.png"
                    className="h-[40px] md:h-[auto] object-cover rounded-[9px] w-[40px]"
                    alt="image"
                  />
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
