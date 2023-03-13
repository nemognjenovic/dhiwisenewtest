import React from "react";

import { Img, Button, Text, List, Input } from "components";

const SinglePostPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-sfprodisplay gap-[15px] items-center mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="h-[1024px] w-[auto]"
          alt="navigationwebsi"
        />
        <div className="bg-white_A700 flex items-end justify-start pl-[80px] md:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] md:w-[100%] w-[88%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between ml-[auto] w-[100%]">
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
                  <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex sm:flex-1 flex-row gap-[10px] items-center justify-between pr-[6px] sm:w-[100%] w-[26%]">
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
                      <div className="flex sm:flex-1 flex-row items-start justify-between sm:w-[100%] w-[46%]">
                        <div className="flex flex-row gap-[5px] items-center justify-start mt-[4px] p-[6px] w-[auto]">
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
                    <Img
                      src="images/img_image_330x635.png"
                      className="h-[330px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image_One"
                    />
                  </div>
                  <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                    <Text
                      className="font-normal leading-[36.00px] not-italic text-gray_900 text-left w-[100%]"
                      as="h1"
                      variant="h1"
                    >
                      The Best Fashion Instagrams of the Week: Céline Dion,
                      Lizzo, and More
                    </Text>
                    <Text
                      className="font-normal leading-[22.00px] not-italic text-gray_500 text-left"
                      as="h4"
                      variant="h4"
                    >
                      f you are looking for a break from the cold, take a cue
                      from Lizzo: This week, the singer headed to Disneyland in
                      warm and sunny California. She dressed up for the occasion
                      in pure Minnie Mouse style perfection, including a cartoon
                      merch sweatshirt from the artist Shelby Swain, cycling
                      shorts, and adorable pulled-up polka dot socks. All the
                      way over in Montreal, Céline Dion also had quite the
                      wardrobe moment. For a concert, the singer wore a pair of
                      fringed, XXL-flared cowboy jeans by Ukrainian label Ksenia
                      Schnaider. The Kiev-based designer is responsible for
                      other viral denim creations, like her asymmetrical jeans
                      that launched earlier this year. Fun fact: The daring Dion
                      has worn a pair of those, too!&lt;br /&gt;Of course, back
                      in New York, there was Marc Jacobs. The designer has been
                      having quite the year when it comes to flexing his fashion
                      muscles on the ’gram. This week, he channeled The Wizard
                      Of Oz with a full-green look that included some shimmery
                      Sies Marjan pants, and a pair of platform boots to anchor
                      the ensemble.
                    </Text>
                  </div>
                </div>
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

export default SinglePostPage;
