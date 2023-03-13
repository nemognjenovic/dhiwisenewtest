import React from "react";

import { Img, Input, Text, Button, Line } from "components";
import { CloseSVG } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const StoriesPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="h-[1024px] w-[auto]"
          alt="navigationwebsi"
        />
        <div className="flex md:flex-col flex-row gap-[10px] items-start justify-start pl-[5px] md:px-[20px] md:w-[100%] w-[89%]">
          <Img
            src="images/img_leftindicator.svg"
            className="h-[128px] md:mt-[0] mt-[448px] w-[auto]"
            alt="leftindicator"
          />
          <div className="bg-gray_900 flex items-center justify-end pt-[40px] sm:px-[20px] px-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] md:w-[100%] w-[99%]">
            <div className="flex flex-col items-start justify-start md:w-[100%] w-[98%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <div className="bg-white_A700_33 flex md:flex-1 md:flex-col flex-row gap-[25px] items-center justify-start p-[9px] rounded-[12px] md:w-[100%] w-[67%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    wrapClassName="bg-gray_800 flex md:ml-[0] ml-[2px] md:mt-[0] mt-[4px] pb-[11px] pl-[9px] pr-[35px] pt-[7px] md:w-[100%] w-[87%]"
                    className="font-normal not-italic p-[0] placeholder:text-gray_500 sm:pr-[20px] text-[14px] text-gray_500 text-left w-[100%]"
                    name="frameSix"
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
                <div className="flex md:flex-1 flex-row font-sfprodisplay gap-[20px] items-center justify-between md:w-[100%] w-[11%]">
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
              </div>
              <Text
                className="font-normal mt-[59px] not-italic text-left text-white_A700 w-[auto]"
                as="h1"
                variant="h1"
              >
                Stories
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[39px] md:w-[100%] w-[46%]">
                <div className="flex flex-col gap-[7px] items-center justify-start w-[10%] sm:w-[100%]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    For You
                  </Text>
                  <Line className="bg-white_A700 h-[2px] w-[100%]" />
                </div>
                <div className="flex items-center justify-start sm:ml-[0] ml-[29px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-center text-white_A700_99 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Following
                  </Text>
                </div>
                <div className="flex items-center justify-start sm:ml-[0] ml-[28px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-center text-white_A700_99 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Popular
                  </Text>
                </div>
                <div className="flex items-center justify-start sm:ml-[0] ml-[26px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-center text-white_A700_99 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Featured
                  </Text>
                </div>
                <div className="flex items-center justify-start sm:ml-[0] ml-[28px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-center text-white_A700_99 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Live
                  </Text>
                </div>
                <div className="flex items-center justify-start sm:ml-[0] ml-[30px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-center text-white_A700_99 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Continue Watching
                  </Text>
                </div>
              </div>
              <div className="flex font-sfprodisplay items-center justify-start mt-[40px] w-[100%]">
                <div className="md:gap-[20px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                  <div className="h-[380px] relative w-[100%]">
                    <Img
                      src="images/img_image_380x255.png"
                      className="common-pointer h-[380px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      onClick={() => navigate("/singlestory")}
                      alt="image"
                    />
                    <div className="absolute bg-gradient1  flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[40px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col gap-[16px] items-center justify-start mt-[195px] px-[8px] md:w-[100%] w-[62%]">
                        <Img
                          src="images/img_image_68x68.png"
                          className="h-[68px] md:h-[auto] object-cover rounded-[24px] w-[68px]"
                          alt="image_One"
                        />
                        <Text
                          className="font-bold text-center text-white_A700 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Edward Ford
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[380px] relative w-[100%]">
                    <Img
                      src="images/img_image_37.png"
                      className="h-[380px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image"
                    />
                    <div className="absolute bg-gradient1  flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[40px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col gap-[16px] items-center justify-start mt-[195px] px-[8px] md:w-[100%] w-[62%]">
                        <Img
                          src="images/img_image_38.png"
                          className="h-[68px] md:h-[auto] object-cover rounded-[24px] w-[68px]"
                          alt="image_One"
                        />
                        <Text
                          className="font-bold text-center text-white_A700 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Edward Ford
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[380px] relative w-[100%]">
                    <Img
                      src="images/img_image_39.png"
                      className="h-[380px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image"
                    />
                    <div className="absolute bg-gradient1  flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[40px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col gap-[16px] items-center justify-start mt-[195px] px-[8px] md:w-[100%] w-[62%]">
                        <Img
                          src="images/img_image_40.png"
                          className="h-[68px] md:h-[auto] object-cover rounded-[24px] w-[68px]"
                          alt="image_One"
                        />
                        <Text
                          className="font-bold text-center text-white_A700 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Edward Ford
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[380px] relative w-[100%]">
                    <Img
                      src="images/img_image_41.png"
                      className="h-[380px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image"
                    />
                    <div className="absolute bg-gradient1  flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[40px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col gap-[16px] items-center justify-start mt-[195px] px-[8px] md:w-[100%] w-[62%]">
                        <Img
                          src="images/img_image_42.png"
                          className="h-[68px] md:h-[auto] object-cover rounded-[24px] w-[68px]"
                          alt="image_One"
                        />
                        <Text
                          className="font-bold text-center text-white_A700 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Edward Ford
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[380px] relative w-[100%]">
                    <Img
                      src="images/img_image_43.png"
                      className="h-[380px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image"
                    />
                    <div className="absolute bg-gradient1  flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[40px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col gap-[15px] items-center justify-start mt-[195px] px-[8px] md:w-[100%] w-[62%]">
                        <Img
                          src="images/img_image_44.png"
                          className="h-[68px] md:h-[auto] object-cover rounded-[24px] w-[68px]"
                          alt="image_One"
                        />
                        <Text
                          className="font-bold text-center text-white_A700 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Edward Ford
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[380px] relative w-[100%]">
                    <Img
                      src="images/img_image_45.png"
                      className="h-[380px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image"
                    />
                    <div className="absolute bg-gradient1  flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[40px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col gap-[15px] items-center justify-start mt-[195px] px-[8px] md:w-[100%] w-[62%]">
                        <Img
                          src="images/img_image_46.png"
                          className="h-[68px] md:h-[auto] object-cover rounded-[24px] w-[68px]"
                          alt="image_One"
                        />
                        <Text
                          className="font-bold text-center text-white_A700 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Edward Ford
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[380px] relative w-[100%]">
                    <Img
                      src="images/img_image_47.png"
                      className="h-[380px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image"
                    />
                    <div className="absolute bg-gradient1  flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[40px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col gap-[15px] items-center justify-start mt-[195px] px-[8px] md:w-[100%] w-[62%]">
                        <Img
                          src="images/img_image_48.png"
                          className="h-[68px] md:h-[auto] object-cover rounded-[24px] w-[68px]"
                          alt="image_One"
                        />
                        <Text
                          className="font-bold text-center text-white_A700 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Edward Ford
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[380px] relative w-[100%]">
                    <Img
                      src="images/img_image_49.png"
                      className="h-[380px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="image"
                    />
                    <div className="absolute bg-gradient1  flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[40px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col gap-[15px] items-center justify-start mt-[195px] px-[8px] md:w-[100%] w-[62%]">
                        <Img
                          src="images/img_image_50.png"
                          className="h-[68px] md:h-[auto] object-cover rounded-[24px] w-[68px]"
                          alt="image_One"
                        />
                        <Text
                          className="font-bold text-center text-white_A700 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Edward Ford
                        </Text>
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

export default StoriesPage;
