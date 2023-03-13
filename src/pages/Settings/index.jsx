import React from "react";

import { Img, Text, Button, Input, Line } from "components";

const SettingsPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
          <Img
            src="images/img_navigationwebsidebar.svg"
            className="h-[1024px] w-[auto]"
            alt="navigationwebsi"
          />
          <div className="flex md:flex-1 flex-col items-start justify-start md:px-[20px] md:w-[100%] w-[auto]">
            <Text
              className="font-normal not-italic text-gray_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Account Informations
            </Text>
            <div className="flex items-center justify-start mt-[61px] md:w-[100%] w-[86%]">
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                <div className="flex h-[128px] items-center justify-start w-[128px]">
                  <Img
                    src="images/img_avatar_128x128.png"
                    className="h-[128px] md:h-[auto] object-cover rounded-[36px] w-[128px]"
                    alt="avatar"
                  />
                </div>
                <div className="flex sm:flex-1 flex-col gap-[21px] items-start justify-start sm:w-[100%] w-[71%]">
                  <Text
                    className="font-normal not-italic text-gray_500 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Profile Picture
                  </Text>
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <Button className="bg-light_blue_200 cursor-pointer font-inter font-normal min-w-[180px] not-italic py-[20px] rounded-[29px] text-[14px] text-center text-white_A700 w-[auto]">
                      Replace
                    </Button>
                    <Button
                      className="border-[2px] border-gray_500_66 border-solid cursor-pointer flex items-center justify-center min-w-[180px] px-[35px] py-[20px] rounded-[12px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_trash.svg"
                          className="mr-[7px]"
                          alt="trash"
                        />
                      }
                    >
                      <div className="font-bold font-sfprodisplay sm:px-[20px] text-[14px] text-left text-red_A200">
                        Delete
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="font-normal mt-[61px] not-italic text-gray_500 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Basic Information
            </Text>
            <div className="flex items-center justify-start mt-[30px] w-[100%]">
              <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start pt-[3px] md:w-[100%] w-[48%]">
                    <Text
                      className="not-italic text-gray_900 text-left tracking-[1.00px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      name
                    </Text>
                    <Input
                      wrapClassName="bg-white_A700 pl-[15px] pr-[35px] py-[15px] rounded-[8px] w-[100%]"
                      className="font-normal not-italic p-[0] placeholder:text-gray_500 sm:pr-[20px] text-[14px] text-gray_500 text-left w-[100%]"
                      name="group332"
                      placeholder="Anne Carry"
                    ></Input>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start pt-[3px] md:w-[100%] w-[48%]">
                    <Text
                      className="not-italic text-gray_900 text-left tracking-[1.00px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      username
                    </Text>
                    <Input
                      wrapClassName="bg-white_A700 flex pb-[12px] pt-[15px] px-[15px] rounded-[8px] w-[100%]"
                      className="font-normal not-italic p-[0] placeholder:text-gray_500 text-[14px] text-gray_500 text-left w-[100%]"
                      name="group331"
                      placeholder="annecarry"
                      suffix={
                        <Img
                          src="images/img_checkmark_bluegray_100_18x18.svg"
                          className="mt-[auto] mb-[2px] ml-[35px]"
                          alt="checkmark"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[12px] items-start justify-start pt-[2px] md:w-[100%] w-[48%]">
                    <Text
                      className="not-italic text-gray_900 text-left tracking-[1.00px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Email
                    </Text>
                    <Input
                      wrapClassName="bg-white_A700 pl-[15px] pr-[35px] py-[15px] rounded-[8px] w-[100%]"
                      className="font-normal not-italic p-[0] placeholder:text-gray_500 sm:pr-[20px] text-[14px] text-gray_500 text-left w-[100%]"
                      type="email"
                      name="email"
                      placeholder="anne.carry@mail.com"
                    ></Input>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start pt-[3px] md:w-[100%] w-[48%]">
                    <Text
                      className="not-italic text-gray_900 text-left tracking-[1.00px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      birthday
                    </Text>
                    <Input
                      wrapClassName="bg-white_A700 flex px-[15px] py-[14px] rounded-[8px] w-[100%]"
                      className="font-normal not-italic p-[0] placeholder:text-gray_500 text-[14px] text-gray_500 text-left w-[100%]"
                      name="month"
                      placeholder="January 25, 1991"
                      suffix={
                        <Img
                          src="images/img_checkmark_indigo_a200.svg"
                          className="mt-[auto] mb-[1px] ml-[35px]"
                          alt="checkmark"
                        />
                      }
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-gray_500_6c h-[1px] mt-[40px] w-[100%]" />
            <div className="flex items-center justify-start mt-[40px] w-[100%]">
              <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start pt-[3px] md:w-[100%] w-[48%]">
                    <Text
                      className="not-italic text-gray_900 text-left tracking-[1.00px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Country
                    </Text>
                    <Input
                      wrapClassName="bg-white_A700 flex p-[15px] rounded-[8px] w-[100%]"
                      className="font-normal not-italic p-[0] placeholder:text-gray_500 text-[14px] text-gray_500 text-left w-[100%]"
                      name="group327"
                      placeholder="United States"
                      suffix={
                        <Img
                          src="images/img_checkmark_indigo_a200.svg"
                          className="ml-[35px] my-[auto]"
                          alt="checkmark"
                        />
                      }
                    ></Input>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[12px] items-start justify-start pt-[2px] md:w-[100%] w-[48%]">
                    <Text
                      className="not-italic text-gray_900 text-left tracking-[1.00px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      state
                    </Text>
                    <Input
                      wrapClassName="bg-white_A700 flex p-[15px] rounded-[8px] w-[100%]"
                      className="font-normal not-italic p-[0] placeholder:text-gray_500 text-[14px] text-gray_500 text-left w-[100%]"
                      name="group326"
                      placeholder="California"
                      suffix={
                        <Img
                          src="images/img_checkmark_indigo_a200.svg"
                          className="ml-[35px] my-[auto]"
                          alt="checkmark"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-[11px] items-start justify-start pt-[3px] md:w-[100%] w-[48%]">
                  <Text
                    className="not-italic text-gray_900 text-left tracking-[1.00px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    City
                  </Text>
                  <Input
                    wrapClassName="bg-white_A700 flex p-[15px] rounded-[8px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-gray_500 text-[14px] text-gray_500 text-left w-[100%]"
                    name="group328"
                    placeholder="San Francisco"
                    suffix={
                      <Img
                        src="images/img_checkmark_indigo_a200.svg"
                        className="ml-[35px] my-[auto]"
                        alt="checkmark"
                      />
                    }
                  ></Input>
                </div>
              </div>
            </div>
            <Button className="bg-green_400 cursor-pointer font-normal min-w-[180px] mt-[64px] not-italic py-[20px] rounded-[29px] text-[14px] text-center text-white_A700 w-[auto]">
              Save Changes
            </Button>
          </div>
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 flex-col gap-[48px] h-[1024px] justify-start p-[40px] md:px-[20px] md:w-[100%] w-[auto]"
            style={{ backgroundImage: "url('images/img_side.svg')" }}
          >
            <div className="h-[48px] md:h-[53px] md:ml-[0] ml-[319px] mt-[5px] relative w-[27%]">
              <Img
                src="images/img_image_6.png"
                className="absolute h-[48px] inset-y-[0] my-[auto] object-cover right-[0] rounded-[12px] w-[48px]"
                alt="image_One"
              />
              <div className="bg-light_blue_200 flex h-[100%] items-center justify-start my-[auto] p-[10px] rounded-[12px] w-[48px]">
                <Text
                  className="font-normal not-italic text-center text-white_A700 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  1
                </Text>
              </div>
              <div className="absolute flex flex-row font-sfprodisplay gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
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
            <div className="flex flex-col gap-[39px] items-start justify-start mb-[288px] md:ml-[0] ml-[25px] mr-[204px] md:w-[100%] w-[48%]">
              <Text
                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                as="h2"
                variant="h2"
              >
                Settings
              </Text>
              <div className="flex flex-col font-sfprodisplay gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] w-[74%]">
                  <Button className="bg-white_A700 flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                    <Img
                      src="images/img_user_bluegray_100.svg"
                      className="h-[22px]"
                      alt="user"
                    />
                  </Button>
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    My Account
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] w-[77%]">
                  <Button className="border-[2px] border-gray_500_66 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                    <Img
                      src="images/img_notification.svg"
                      className="h-[22px]"
                      alt="notification"
                    />
                  </Button>
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Notifications
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] w-[86%]">
                  <Button className="border-[2px] border-gray_500_66 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                    <Img
                      src="images/img_rewind.svg"
                      className="h-[22px]"
                      alt="rewind"
                    />
                  </Button>
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Activity History
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start w-[100%]">
                  <Button className="border-[2px] border-gray_500_66 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                    <Img
                      src="images/img_alarm_white_a700.svg"
                      className="h-[22px]"
                      alt="alarm"
                    />
                  </Button>
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Billing and Payment
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] w-[96%]">
                  <Button className="border-[2px] border-gray_500_66 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                    <Img
                      src="images/img_lock.svg"
                      className="h-[22px]"
                      alt="lock"
                    />
                  </Button>
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Security & Privacy
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] w-[48%]">
                  <Button className="border-[2px] border-gray_500_66 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                    <Img
                      src="images/img_settings_bluegray_100_48x48.svg"
                      className="h-[22px]"
                      alt="settings_One"
                    />
                  </Button>
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Help
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
