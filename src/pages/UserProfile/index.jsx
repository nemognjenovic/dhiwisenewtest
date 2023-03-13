import React from "react";

import { Img, Button, Text, List } from "components";

const UserProfilePage = () => {
  return (
    <>
      <div className="bg-gray_100 flex font-sfprodisplay items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
          <Img
            src="images/img_navigationwebsidebar.svg"
            className="h-[1024px] w-[auto]"
            alt="navigationwebsi"
          />
          <div className="flex md:flex-1 flex-col gap-[40px] items-start justify-start md:mt-[0] mt-[40px] md:px-[20px] md:w-[100%] w-[auto]">
            <Button
              className="bg-gray_500_33 cursor-pointer flex items-center justify-center min-w-[103px] pl-[20px] pr-[23px] py-[20px] rounded-[12px] w-[auto]"
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
            <div className="bg-white_A700 flex font-inter items-center justify-start p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
              <div className="flex flex-col gap-[30px] items-center justify-start my-[10px] w-[100%]">
                <div className="flex flex-col gap-[30px] items-center justify-start md:w-[100%] w-[76%]">
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[95%]">
                    <div className="flex h-[108px] items-center justify-start w-[108px]">
                      <Img
                        src="images/img_avatar_108x108.png"
                        className="h-[108px] md:h-[auto] object-cover rounded-[36px] w-[108px]"
                        alt="avatar"
                      />
                    </div>
                    <Text
                      className="font-normal mt-[9px] not-italic text-center text-gray_900 w-[auto]"
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
                  <div className="flex flex-row gap-[22px] items-center justify-between px-[6px] w-[100%]">
                    <div className="flex flex-row gap-[10px] items-center justify-start w-[42%]">
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
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
                    <div className="flex flex-row gap-[8px] items-center justify-center w-[48%]">
                      <Text
                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        22k
                      </Text>
                      <Text
                        className="font-normal mr-[2px] not-italic text-gray_500 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Friends
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-sfprodisplay items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <Button
                      className="bg-green_400 cursor-pointer flex items-center justify-center min-w-[149px] px-[35px] py-[20px] rounded-[12px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[8px]"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="font-bold sm:px-[20px] text-[14px] text-left text-white_A700">
                        Freinds
                      </div>
                    </Button>
                    <Img
                      src="images/img_mail.svg"
                      className="h-[48px] w-[48px]"
                      alt="mail"
                    />
                    <Button className="border-[2px] border-gray_500_33 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="h-[22px]"
                        alt="overflowmenu"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col font-inter gap-[12px] items-start justify-start mt-[40px] pt-[2px] md:w-[100%] w-[auto]">
                    <Text
                      className="not-italic text-gray_900 text-left tracking-[1.00px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      About
                    </Text>
                    <Text
                      className="font-normal leading-[22.00px] not-italic text-gray_500 text-left"
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
                      className="font-bold text-gray_900 text-left w-[auto]"
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
          <div className="font-inter md:h-[1154px] h-[1337px] pb-[45px] md:px-[20px] relative md:w-[100%] w-[56%]">
            <div
              className="absolute bg-cover bg-no-repeat flex h-[1024px] inset-x-[0] items-center justify-start mx-[auto] p-[40px] sm:px-[20px] top-[0] w-[100%]"
              style={{ backgroundImage: "url('images/img_group10.svg')" }}
            >
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mb-[891px] mt-[5px] md:w-[100%] w-[97%]">
                <div className="flex flex-row items-start justify-between sm:w-[100%] w-[40%]">
                  <div className="flex flex-col gap-[7px] items-start justify-start w-[15%]">
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Posts
                    </Text>
                    <div className="bg-gray_900 h-[2px] w-[100%]"></div>
                  </div>
                  <div className="flex items-center justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-center text-gray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Photos
                    </Text>
                  </div>
                  <div className="flex items-center justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-center text-gray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Videos
                    </Text>
                  </div>
                  <div className="flex items-center justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-center text-gray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Events
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-sfprodisplay gap-[20px] items-center justify-between sm:w-[100%] w-[17%]">
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
              </div>
            </div>
            <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[87%]">
              <List
                className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center w-[100%]"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-[30px] items-center justify-start mb-[80px] sm:ml-[0] w-[100%]">
                  <div className="bg-white_A700 border-[2px] border-gray_500_33 border-solid flex flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
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
                        src="images/img_image_150x272.png"
                        className="h-[150px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="image_One"
                      />
                      <div className="flex flex-col gap-[15px] items-center justify-start mt-[20px] w-[100%]">
                        <Text
                          className="font-normal leading-[22.00px] not-italic text-gray_900 text-left w-[100%]"
                          as="h3"
                          variant="h3"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo
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
                      <div className="flex flex-row gap-[5px] items-center justify-start p-[6px] w-[24%]">
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
                      <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[24%]">
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
                      <div className="flex flex-row items-center justify-center ml-[59px] p-[6px] w-[28%]">
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
                  <div className="bg-white_A700 border-[2px] border-gray_500_33 border-solid flex flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[66%]">
                        <Img
                          src="images/img_image_25.png"
                          className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                          alt="image_Two"
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
                        alt="overflowmenu_One"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[30px] w-[100%]">
                      <Img
                        src="images/img_image_54.png"
                        className="h-[150px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="image_Three"
                      />
                      <div className="flex flex-col gap-[15px] items-center justify-start mt-[20px] w-[100%]">
                        <Text
                          className="font-normal leading-[22.00px] not-italic text-gray_900 text-left w-[100%]"
                          as="h3"
                          variant="h3"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo
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
                      <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[24%]">
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
                      <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[24%]">
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
                      <div className="flex flex-row items-center justify-center ml-[59px] p-[5px] w-[28%]">
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
                          alt="reply_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[30px] items-center justify-start sm:ml-[0] w-[100%]">
                  <div className="bg-white_A700 border-[2px] border-gray_500_33 border-solid flex flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
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
                        src="images/img_image_55.png"
                        className="h-[150px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="image_One"
                      />
                      <div className="flex flex-col gap-[15px] items-center justify-start mt-[20px] w-[100%]">
                        <Text
                          className="font-normal leading-[22.00px] not-italic text-gray_900 text-left w-[100%]"
                          as="h3"
                          variant="h3"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo
                        </Text>
                        <Text
                          className="font-normal leading-[20.00px] not-italic text-gray_500 text-left"
                          as="h4"
                          variant="h4"
                        >
                          If you are looking for a break from the cold, take a
                          cue from Lizzo: This week, the singer headed to
                          Disneyland in warm and sunny California.&lt;br
                          /&gt;warm and sunny California.warm and sunny
                          California.
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
                      <div className="flex flex-row gap-[5px] items-center justify-start p-[6px] w-[24%]">
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
                      <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[24%]">
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
                      <div className="flex flex-row items-center justify-center ml-[59px] p-[6px] w-[28%]">
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
                  <div className="bg-white_A700 border-[2px] border-gray_500_33 border-solid flex flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[66%]">
                        <Img
                          src="images/img_image_25.png"
                          className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                          alt="image_Two"
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
                        alt="overflowmenu_One"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[30px] w-[100%]">
                      <Img
                        src="images/img_image_56.png"
                        className="h-[150px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="image_Three"
                      />
                      <div className="flex flex-col gap-[38px] items-center justify-start mt-[20px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo
                        </Text>
                        <Text
                          className="font-normal leading-[20.00px] not-italic text-gray_500 text-left"
                          as="h4"
                          variant="h4"
                        >
                          If you are looking for a break from the cold, take a
                          cue from Lizzo: This week, the singer headed to
                          Disneyland in warm and sunny California.&lt;br
                          /&gt;warm and sunny California.warm and sunny
                          California.
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
                      <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[24%]">
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
                      <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[24%]">
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
                      <div className="flex flex-row items-center justify-center ml-[59px] p-[5px] w-[28%]">
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
                          alt="reply_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
