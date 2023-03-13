import React from "react";

import { Img, Input, Text, Button, List } from "components";
import { CloseSVG } from "../../assets/images";

const SearchResultsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
          <Img
            src="images/img_navigationwebsidebar.svg"
            className="h-[1024px] w-[auto]"
            alt="navigationwebsi"
          />
          <div className="flex md:flex-1 flex-col md:gap-[40px] gap-[61px] items-center justify-start md:ml-[0] ml-[65px] md:mt-[0] mt-[40px] md:px-[20px] md:w-[100%] w-[53%]">
            <div className="flex flex-col md:gap-[40px] gap-[63px] items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex md:flex-col flex-row gap-[10px] items-center justify-start p-[13px] rounded-[12px] w-[100%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  wrapClassName="bg-white_A700 flex md:flex-1 md:ml-[0] ml-[7px] pr-[35px] py-[7px] md:w-[100%] w-[84%]"
                  className="font-normal not-italic p-[0] placeholder:text-gray_900 sm:pr-[20px] text-[14px] text-gray_900 text-left w-[100%]"
                  name="frameTwo"
                  placeholder="Nass"
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer mr-[15px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      color="#1e1f20"
                      className="cursor-pointer my-[auto]"
                      onClick={() => setInputvalue("")}
                      style={{
                        visibility:
                          inputvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                    />
                  }
                ></Input>
                <div className="flex md:flex-1 flex-row gap-[22px] items-center justify-center md:w-[100%] w-[13%]">
                  <Text
                    className="font-inter not-italic text-gray_500 text-left tracking-[1.00px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Filters
                  </Text>
                  <Button className="bg-red_A200 cursor-pointer font-bold font-sfprodisplay h-[28px] py-[7px] rounded-[8px] text-[10.32px] text-center text-white_A700 w-[28px]">
                    1
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_900 text-left w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  People
                </Text>
                <div className="flex items-center justify-start mt-[39px] w-[100%]">
                  <div className="md:gap-[20px] gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                    <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
                      <div className="flex flex-row gap-[15px] items-center justify-center pr-[9px] w-[auto]">
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
                            as="h3"
                            variant="h3"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="mt-[2px] not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @louisaingram
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="bg-indigo_A200 cursor-pointer flex items-center justify-center min-w-[65px] my-[9px] px-[8px] py-[6px] rounded-[4px] w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[6px] my-[1px]"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                          Add
                        </div>
                      </Button>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
                      <div className="flex flex-row gap-[15px] items-center justify-center pr-[9px] w-[auto]">
                        <div className="flex h-[48px] items-center justify-start w-[48px]">
                          <Img
                            src="images/img_avatar_43.png"
                            className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="mt-[2px] not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @louisaingram
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="bg-indigo_A200 cursor-pointer flex items-center justify-center min-w-[65px] my-[9px] px-[8px] py-[6px] rounded-[4px] w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[6px] my-[1px]"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                          Add
                        </div>
                      </Button>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
                      <div className="flex flex-row gap-[15px] items-center justify-center pr-[9px] w-[auto]">
                        <div className="flex h-[48px] items-center justify-start w-[48px]">
                          <Img
                            src="images/img_avatar_44.png"
                            className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="mt-[2px] not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @louisaingram
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="bg-indigo_A200 cursor-pointer flex items-center justify-center min-w-[65px] my-[9px] px-[8px] py-[6px] rounded-[4px] w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[6px] my-[1px]"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                          Add
                        </div>
                      </Button>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
                      <div className="flex flex-row gap-[15px] items-center justify-center pr-[9px] w-[auto]">
                        <div className="flex h-[48px] items-center justify-start w-[48px]">
                          <Img
                            src="images/img_avatar_45.png"
                            className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="mt-[2px] not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @louisaingram
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="bg-indigo_A200 cursor-pointer flex items-center justify-center min-w-[65px] my-[9px] px-[8px] py-[6px] rounded-[4px] w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[6px] my-[1px]"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                          Add
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <Button
                  className="border-[2px] border-gray_500_6c border-solid cursor-pointer flex items-center justify-center min-w-[97px] mt-[30px] px-[11px] py-[6px] rounded-[4px] w-[auto]"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="ml-[-2px] my-[1px]"
                      alt="arrow_right"
                    />
                  }
                >
                  <div className="font-normal not-italic text-[14px] text-gray_900 text-left">
                    See more
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-[41px] items-start justify-start w-[100%]">
              <Text
                className="font-normal not-italic text-gray_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Posts
              </Text>
              <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-[100%]">
                <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-[12px] md:w-[100%] w-[49%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[10px] items-center justify-between pr-[9px] w-[66%]">
                      <Img
                        src="images/img_image_25.png"
                        className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                        alt="image_One"
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
                      src="images/img_overflowmenu_bluegray_100.svg"
                      className="h-[38px] w-[38px]"
                      alt="overflowmenu"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start mt-[30px] w-[100%]">
                    <Img
                      src="images/img_image_150x305.png"
                      className="h-[150px] sm:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image_Two"
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
                      className="mt-[9px] not-italic text-gray_500 text-left tracking-[1.00px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Read More
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] w-[100%]">
                    <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[22%]">
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
                    <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[21%]">
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
                    <div className="flex flex-row items-center justify-center ml-[92px] p-[5px] w-[25%]">
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
                        alt="reply"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 items-center justify-start mb-[124px] p-[23px] sm:px-[20px] rounded-[12px] md:w-[100%] w-[49%]">
                  <div className="flex flex-col items-center justify-start my-[7px] md:w-[100%] w-[98%]">
                    <div className="flex flex-col gap-[31px] items-start justify-start md:w-[100%] w-[98%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[10px] items-center justify-between w-[58%]">
                          <Img
                            src="images/img_image_48x48.png"
                            className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                            alt="image_Three"
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
                          src="images/img_overflowmenu_bluegray_100.svg"
                          className="h-[38px] w-[38px]"
                          alt="overflowmenu_One"
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
                          src="images/img_image_160x210.png"
                          className="h-[160px] md:h-[auto] object-cover rounded-[8px] w-[auto]"
                          alt="image_Four"
                        />
                        <div className="flex flex-col gap-[10px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_image_75x84.png"
                            className="h-[75px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                            alt="image_Five"
                          />
                          <div className="h-[75px] relative w-[100%]">
                            <Img
                              src="images/img_image_57.png"
                              className="h-[75px] m-[auto] object-cover rounded-[8px] w-[100%]"
                              alt="image_Six"
                            />
                            <div className="absolute flex flex-row gap-[7px] h-[max-content] inset-[0] items-center justify-center m-[auto] p-[6px] w-[67%]">
                              <Img
                                src="images/img_settings.svg"
                                className="h-[14px] ml-[2px] w-[14px]"
                                alt="settings"
                              />
                              <Text
                                className="font-medium mr-[4px] text-left text-white_A700 w-[auto]"
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
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[46%]">
                        <div className="flex flex-row gap-[5px] items-center justify-start p-[6px] w-[48%]">
                          <Img
                            src="images/img_favorite.svg"
                            className="h-[14px] w-[14px]"
                            alt="favorite_One"
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
                            alt="laptop_One"
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
                      <div className="flex flex-row items-center justify-center p-[6px] w-[25%]">
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
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 font-sfprodisplay h-[1024px] items-end justify-start md:ml-[0] ml-[30px] pl-[20px] md:pr-[20px] md:w-[100%] w-[30%]"
            style={{ backgroundImage: "url('images/img_side_gray_500.svg')" }}
          >
            <div className="bg-gray_900 flex flex-col gap-[45px] items-end justify-end p-[40px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[100%]">
              <div className="flex flex-row gap-[20px] items-center justify-end mt-[5px] md:w-[100%] w-[37%]">
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
              <div className="flex flex-col font-inter md:gap-[40px] gap-[60px] items-center justify-start md:w-[100%] w-[99%]">
                <div className="bg-red_A200 h-[174px] pt-[21px] relative rounded-[12px] w-[100%]">
                  <div className="bg-gray_900_33 h-[19px] mb-[-3px] ml-[auto] mr-[118px] rounded-[9px] w-[19px] z-[1]"></div>
                  <Text
                    className="font-normal mb-[-11.38px] ml-[20px] not-italic text-left text-white_A700 w-[auto] z-[1]"
                    as="h2"
                    variant="h2"
                  >
                    Go Premium!
                  </Text>
                  <div className="flex flex-col gap-[25px] items-start justify-start mb-[undefinedpx] mt-[auto] mx-[auto] w-[85%] z-[1]">
                    <Text
                      className="font-normal leading-[22.00px] not-italic text-left text-white_A700"
                      as="h4"
                      variant="h4"
                    >
                      Try premium membership and enjoy&lt;br /&gt;a full
                      experience of our community.
                    </Text>
                    <Button
                      className="bg-gray_900_33 cursor-pointer flex items-center justify-center min-w-[97px] px-[11px] py-[6px] rounded-[12px] w-[auto]"
                      rightIcon={
                        <div className="h-[14px] ml-[-2px] w-[14px] rounded-[50%] my-[1px]">
                          <Img
                            src="images/img_arrowright_white_a700.svg"
                            className="rounded-[7px]"
                            alt="arrow_right"
                          />
                        </div>
                      }
                    >
                      <div className="font-normal not-italic text-[14px] text-left text-white_A700">
                        See more
                      </div>
                    </Button>
                  </div>
                  <div className="flex items-center justify-start mt-[auto] mx-[auto] w-[100%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <div className="bg-green_400 h-[87px] mb-[50px] rounded-[43px] w-[19%]"></div>
                      <Img
                        src="images/img_oval.png"
                        className="h-[92px] md:h-[auto] mt-[45px] object-cover w-[auto]"
                        alt="oval_One"
                      />
                    </div>
                  </div>
                </div>
                <List
                  className="flex-col md:gap-[40px] gap-[60px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Who to Follow
                    </Text>
                    <div className="flex flex-row items-start justify-start mt-[41px] w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="images/img_avatar_46.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="avatar"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start ml-[10px] w-[auto]">
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
                      <Button className="bg-indigo_A200 flex h-[28px] items-center justify-center ml-[40px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                        <Img
                          src="images/img_camera_bluegray_100.svg"
                          className="h-[14px]"
                          alt="camera"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row items-start justify-start mt-[30px] w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="images/img_avatar_41.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="avatar_One"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start ml-[10px] w-[auto]">
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
                      <Button className="bg-indigo_A200 flex h-[28px] items-center justify-center ml-[40px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                        <Img
                          src="images/img_camera_bluegray_100.svg"
                          className="h-[14px]"
                          alt="camera_One"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row items-start justify-start mt-[30px] w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="images/img_avatar_47.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="avatar_Two"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start ml-[10px] w-[auto]">
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
                      <Button className="bg-indigo_A200 flex h-[28px] items-center justify-center ml-[40px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                        <Img
                          src="images/img_camera_bluegray_100.svg"
                          className="h-[14px]"
                          alt="camera_Two"
                        />
                      </Button>
                    </div>
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
                  <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Friends
                    </Text>
                    <div className="flex flex-row items-center justify-start mt-[41px] w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="images/img_avatar_48.png"
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
                      <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center ml-[136px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px]"
                          alt="checkmark"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-[30px] w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="images/img_avatar_49.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="avatar_One"
                        />
                      </div>
                      <Text
                        className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        MadeInAmerica
                      </Text>
                      <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center ml-[136px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px]"
                          alt="checkmark_One"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-[30px] w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="images/img_avatar_50.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="avatar_Two"
                        />
                      </div>
                      <Text
                        className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        MadeInAmerica
                      </Text>
                      <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center ml-[136px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px]"
                          alt="checkmark_Two"
                        />
                      </Button>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResultsPage;
