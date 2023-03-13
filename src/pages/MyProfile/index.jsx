import React from "react";

import { Img, Input, Text, List, Button } from "components";
import { CloseSVG } from "../../assets/images";

const MyProfilePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
          <Img
            src="images/img_navigationwebsidebar.svg"
            className="h-[1024px] w-[auto]"
            alt="navigationwebsi"
          />
          <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:mt-[0] mt-[40px] md:px-[20px] md:w-[100%] w-[auto]">
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
            <div className="bg-gray_100 flex items-center justify-start w-[100%]">
              <List
                className="flex-col gap-[1px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-start justify-between my-[0] w-[100%]">
                  <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-[12px] md:w-[100%] w-[47%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[66%]">
                        <Img
                          src="images/img_image_25.png"
                          className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                          alt="image"
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
                    <div className="flex flex-col items-start justify-start mt-[30px] pb-[2px] w-[100%]">
                      <Img
                        src="images/img_image_150x290.png"
                        className="h-[150px] sm:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="image_One"
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
                          If you are looking for a break from the cold, take a
                          cue from Lizzo: This week, the singer headed to
                          Disneyland in warm and sunny California.
                        </Text>
                      </div>
                      <Text
                        className="mt-[11px] not-italic text-gray_500 text-left tracking-[1.00px] w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Read More
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-[16px] w-[100%]">
                      <div className="flex flex-row gap-[5px] items-center justify-start p-[6px] w-[23%]">
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
                      <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[22%]">
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
                          alt="reply"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 font-sfprodisplay items-center justify-start mb-[30px] p-[30px] sm:px-[20px] rounded-[12px] md:w-[100%] w-[50%]">
                    <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Photos
                      </Text>
                      <div className="flex flex-col font-inter gap-[30px] items-start justify-start w-[100%]">
                        <div className="flex flex-col gap-[10px] h-[320px] items-center justify-start w-[320px]">
                          <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                            <Img
                              src="images/img_image_100x100.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="image_Two"
                            />
                            <Img
                              src="images/img_image_26.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="image_Three"
                            />
                            <Img
                              src="images/img_image_27.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="image_Four"
                            />
                          </div>
                          <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                            <Img
                              src="images/img_image_28.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="image_Five"
                            />
                            <Img
                              src="images/img_image_29.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="image_Six"
                            />
                            <Img
                              src="images/img_image_30.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="image_Seven"
                            />
                          </div>
                          <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                            <Img
                              src="images/img_image_31.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="image_Eight"
                            />
                            <Img
                              src="images/img_image_32.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="image_Nine"
                            />
                            <Img
                              src="images/img_image_33.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="image_Ten"
                            />
                          </div>
                        </div>
                        <Button
                          className="border-[2px] border-gray_500_6c border-solid cursor-pointer flex items-center justify-center min-w-[97px] px-[11px] py-[6px] rounded-[4px] w-[auto]"
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
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-start justify-between my-[0] w-[100%]">
                  <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start md:mt-[0] mt-[30px] p-[30px] sm:px-[20px] rounded-[12px] md:w-[100%] w-[47%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[66%]">
                        <Img
                          src="images/img_image_25.png"
                          className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                          alt="image"
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
                        src="images/img_image_34.png"
                        className="h-[150px] sm:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="image_One"
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
                          If you are looking for a break from the cold, take a
                          cue from Lizzo: This week, the singer headed to
                          Disneyland in warm and sunny California.
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
                      <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[23%]">
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
                      <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[22%]">
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
                      <div className="flex flex-row items-center justify-center ml-[77px] p-[5px] w-[26%]">
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
                  <div className="bg-white_A700 flex md:flex-1 font-sfprodisplay items-center justify-start mb-[173px] p-[30px] sm:px-[20px] rounded-[12px] md:w-[100%] w-[380px]">
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[320px]">
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Videos
                      </Text>
                      <div className="flex flex-row font-inter gap-[10px] items-center justify-between mt-[30px] w-[100%]">
                        <div className="h-[69px] relative w-[38%]">
                          <Img
                            src="images/img_image_69x120.png"
                            className="h-[69px] m-[auto] object-cover rounded-[8px] w-[100%]"
                            alt="image_Two"
                          />
                          <div className="absolute bg-gray_900_7e flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[15px] rounded-[8px] w-[100%]">
                            <Img
                              src="images/img_play.svg"
                              className="h-[38px] w-[38px]"
                              alt="play"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal leading-[20.00px] not-italic text-gray_900 text-left w-[100%]"
                            as="h4"
                            variant="h4"
                          >
                            Tropical Fresh Tourism Is Back In Full Swing In{" "}
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            2 days ago
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row font-inter gap-[10px] items-center justify-between mt-[30px] w-[100%]">
                        <div className="h-[69px] relative w-[38%]">
                          <Img
                            src="images/img_image_35.png"
                            className="h-[69px] m-[auto] object-cover rounded-[8px] w-[100%]"
                            alt="image_Three"
                          />
                          <div className="absolute bg-gray_900_7e flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[15px] rounded-[8px] w-[100%]">
                            <Img
                              src="images/img_play.svg"
                              className="h-[38px] w-[38px]"
                              alt="play_One"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal leading-[20.00px] not-italic text-gray_900 text-left w-[100%]"
                            as="h4"
                            variant="h4"
                          >
                            How Timberland created the visual campaign of the{" "}
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            2 days ago
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-between mt-[30px] w-[100%]">
                        <div className="h-[69px] relative w-[38%]">
                          <Img
                            src="images/img_image_36.png"
                            className="h-[69px] m-[auto] object-cover rounded-[8px] w-[100%]"
                            alt="image_Four"
                          />
                          <div className="absolute bg-gray_900_7e flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[15px] rounded-[8px] w-[100%]">
                            <Img
                              src="images/img_play.svg"
                              className="h-[38px] w-[38px]"
                              alt="play_Two"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-inter font-normal leading-[20.00px] not-italic text-gray_900 text-left w-[100%]"
                            as="h4"
                            variant="h4"
                          >
                            Take your mobile photography to the next{" "}
                          </Text>
                          <Text
                            className="font-normal font-sfprodisplay not-italic text-gray_500 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            2 days ago
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 font-sfprodisplay h-[1024px] items-end justify-start p-[38px] md:px-[20px] md:w-[100%] w-[auto]"
            style={{ backgroundImage: "url('images/img_right.png')" }}
          >
            <div className="flex flex-col md:gap-[40px] gap-[85px] items-end justify-start mb-[42px] mt-[7px] md:w-[100%] w-[94%]">
              <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[41%]">
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
              <div className="flex flex-col font-inter gap-[30px] items-center justify-start w-[100%]">
                <div className="flex flex-col items-center justify-start md:w-[100%] w-[76%]">
                  <div className="flex h-[108px] items-center justify-start w-[108px]">
                    <Img
                      src="images/img_avatar_108x108.png"
                      className="h-[108px] md:h-[auto] object-cover rounded-[36px] w-[108px]"
                      alt="avatar_One"
                    />
                  </div>
                  <Text
                    className="font-normal mt-[9px] not-italic text-center text-white_A700 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Edward Ford
                  </Text>
                  <Text
                    className="font-normal mt-[7px] not-italic text-center text-gray_500 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    @edwardford
                  </Text>
                </div>
                <div className="flex flex-row gap-[25px] items-center justify-center pr-[2px] md:w-[100%] w-[71%]">
                  <div className="flex flex-row gap-[6px] items-center justify-start w-[41%]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      518
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Posts
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-center w-[47%]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      22k
                    </Text>
                    <Text
                      className="font-normal mx-[3px] not-italic text-gray_500 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Friends
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <Button className="bg-green_400 cursor-pointer font-normal min-w-[217px] not-italic py-[20px] rounded-[29px] text-[14px] text-center text-white_A700 w-[auto]">
                      Edit Profile
                    </Button>
                    <Button className="border-[2px] border-gray_500_33 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                      <Img
                        src="images/img_overflowmenu_bluegray_100.svg"
                        className="h-[22px]"
                        alt="overflowmenu"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[12px] items-start justify-start mt-[40px] pt-[2px] md:w-[100%] w-[auto]">
                    <Text
                      className="not-italic text-left text-white_A700 tracking-[1.00px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      About
                    </Text>
                    <Text
                      className="font-normal leading-[22.00px] not-italic text-left text-white_A700_cc"
                      as="h4"
                      variant="h4"
                    >
                      Travel, Adventure & Lifestyle&lt;br /&gt;Photographer &
                      Digital Influencer&lt;br /&gt;Nikon Ambassador&lt;br /&gt;
                      {`Let&#39;s Work:`}&lt;br /&gt;ed.ford@mail.com
                    </Text>
                  </div>
                  <div className="flex flex-col font-sfprodisplay gap-[20px] items-start justify-start mt-[58px] w-[100%]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Friends
                    </Text>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="gap-[15px] grid grid-cols-5 justify-center min-h-[auto] w-[100%]">
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_45x45.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_12.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_13.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_14.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_15.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_16.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_17.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_18.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_19.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_20.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_21.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_22.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_23.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_24.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_25.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="avatar"
                          />
                        </div>
                      </div>
                    </div>
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

export default MyProfilePage;
