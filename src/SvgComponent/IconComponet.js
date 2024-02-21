import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Svg, {
  Path,
  Defs,
  ClipPath,
  Rect,
  Circle,
  Pattern,
  Use,
  Image,
  G,
} from 'react-native-svg';
import {SIZES} from '../../constant';

export const IconComponet = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={SIZES.width * 0.06}
          height={SIZES.height * 0.06}
          viewBox="0 0 23 27"
          fill="none"
          style={{marginTop: SIZES.width * 0.013}}>
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.6594 20.3288C18.3985 20.3288 21.5162 19.4643 21.8173 15.9942C21.8173 12.5265 19.6437 12.7495 19.6437 8.49483C19.6437 5.17144 16.4936 1.39014 11.6594 1.39014C6.82513 1.39014 3.67507 5.17144 3.67507 8.49483C3.67507 12.7495 1.50146 12.5265 1.50146 15.9942C1.80375 19.4774 4.92142 20.3288 11.6594 20.3288Z"
            stroke="#130F26"
            stroke-width="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M14.5144 23.9253C12.8842 25.7355 10.3411 25.7569 8.69531 23.9253"
            stroke="#130F26"
            stroke-width="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

export const WhiteIconComponet = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="27"
          viewBox="0 0 23 27"
          fill="none">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.0873 20.9652C18.0277 20.9652 21.2385 20.0748 21.5486 16.5011C21.5486 12.9299 19.31 13.1595 19.31 8.77778C19.31 5.35515 16.0659 1.46094 11.0873 1.46094C6.10873 1.46094 2.86461 5.35515 2.86461 8.77778C2.86461 13.1595 0.626099 12.9299 0.626099 16.5011C0.937415 20.0883 4.14818 20.9652 11.0873 20.9652Z"
            stroke="white"
            stroke-width="1.02986"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M14.0273 24.6689C12.3484 26.5332 9.72937 26.5553 8.03442 24.6689"
            stroke="white"
            stroke-width="1.02986"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

export const OnboardComponent = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={SIZES.width * 0.15}
        height={SIZES.height * 0.05}
        viewBox="0 0 48 48"
        fill="none">
        <Path
          d="M30 24H24M24 24H18M24 24V18M24 24V30"
          stroke="#00EA77"
          stroke-width="5"
          stroke-linecap="round"
        />
        <Path
          d="M14 6.67564C16.9417 4.97394 20.3572 4 24 4C35.0456 4 44 12.9543 44 24C44 35.0456 35.0456 44 24 44C12.9543 44 4 35.0456 4 24C4 20.3572 4.97394 16.9417 6.67564 14"
          stroke="#1D493E"
          stroke-width="5"
          stroke-linecap="round"
        />
      </Svg>
    </View>
  );
};

export const CarbonComponent = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={SIZES.width * 0.18}
        height={SIZES.height * 0.07}
        viewBox="0 0 45 44"
        fill="none">
        <Path
          d="M40.8332 22C40.8332 30.6423 40.8332 34.9636 38.1483 37.6484C35.4635 40.3333 31.1422 40.3333 22.4998 40.3333C13.8574 40.3333 9.53621 40.3333 6.85137 37.6484C4.1665 34.9636 4.1665 30.6423 4.1665 22C4.1665 13.3575 4.1665 9.03633 6.85137 6.35149C9.53621 3.66663 13.8574 3.66663 22.4998 3.66663C31.1422 3.66663 35.4635 3.66663 38.1483 6.35149C39.9336 8.13668 40.5318 10.6453 40.7322 14.6666"
          stroke="#1D493E"
          stroke-width="2"
          stroke-linecap="round"
        />
        <Path
          d="M31.5 17H25.5M31.5 26H25.5M31.5 30.5H25.5M19.5 17H16.5M16.5 17H13.5M16.5 17V14M16.5 17V20M18.75 26L16.5 28.25M16.5 28.25L14.25 30.5M16.5 28.25L14.25 26M16.5 28.25L18.75 30.5"
          stroke="#00EA77"
          stroke-width="1.63636"
          stroke-linecap="round"
        />
      </Svg>
    </View>
  );
};
export const Project = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Svg
        width={SIZES.width * 0.18}
        height={SIZES.height * 0.07}
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M5.75 17.4605V28.5197C5.75 32.5831 5.75 32.5831 9.58333 35.1706L20.125 41.2656C21.7158 42.1856 24.3033 42.1856 25.875 41.2656L36.4167 35.1706C40.25 32.5831 40.25 32.5831 40.25 28.5389V17.4605C40.25 13.4163 40.25 13.4163 36.4167 10.8288L25.875 4.73382C24.3033 3.81382 21.7158 3.81382 20.125 4.73382L9.58333 10.8288C5.75 13.4163 5.75 13.4163 5.75 17.4605Z"
          stroke="#1D493E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Circle cx="23" cy="23" r="5" stroke="#00EA77" stroke-width="2" />
      </Svg>
    </View>
  );
};

export const Members = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={SIZES.width * 0.18}
        height={SIZES.height * 0.07}
        viewBox="0 0 45 44"
        fill="none">
        <Path
          d="M22.2295 31.1667V32.0834V33.0001"
          stroke="#00EA77"
          stroke-width="2.75"
          stroke-linecap="round"
        />
        <Path
          d="M22.2295 11V11.9167V12.8333"
          stroke="#00EA77"
          stroke-width="2.75"
          stroke-linecap="round"
        />
        <Path
          d="M27.7295 17.4166C27.7295 14.8853 25.2671 12.8333 22.2295 12.8333C19.1918 12.8333 16.7295 14.8853 16.7295 17.4166C16.7295 19.9479 19.1918 21.9999 22.2295 21.9999C25.2671 21.9999 27.7295 24.052 27.7295 26.5832C27.7295 29.1145 25.2671 31.1666 22.2295 31.1666C19.1918 31.1666 16.7295 29.1145 16.7295 26.5832"
          stroke="#00EA77"
          stroke-width="1.925"
          stroke-linecap="round"
        />
        <Path
          d="M13.0631 6.11942C15.7597 4.55953 18.8906 3.66675 22.2298 3.66675C32.3549 3.66675 40.5631 11.8749 40.5631 22.0001C40.5631 32.1252 32.3549 40.3334 22.2298 40.3334C12.1046 40.3334 3.89648 32.1252 3.89648 22.0001C3.89648 18.6608 4.78926 15.53 6.34915 12.8334"
          stroke="#1D493E"
          stroke-width="1.925"
          stroke-linecap="round"
        />
      </Svg>
    </View>
  );
};

export const Google = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.71 9.70466C17.71 9.06394 17.6525 8.44787 17.5457 7.85645H9.03571V11.3516H13.8986C13.6891 12.4811 13.0525 13.4381 12.0955 14.0788V16.3459H15.0157C16.7243 14.7729 17.71 12.4564 17.71 9.70466Z"
        fill="#4285F4"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.03531 18.5357C11.4749 18.5357 13.5203 17.7266 15.0153 16.3466L12.0951 14.0795C11.286 14.6216 10.251 14.942 9.03531 14.942C6.68191 14.942 4.68995 13.3525 3.97941 11.2168H0.960663V13.5579C2.44745 16.5109 5.50316 18.5357 9.03531 18.5357Z"
        fill="#34A853"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.97982 11.216C3.79911 10.6739 3.69643 10.0948 3.69643 9.49926C3.69643 8.90373 3.79911 8.32462 3.97982 7.78248V5.44141H0.961071C0.349107 6.66123 0 8.04123 0 9.49926C0 10.9573 0.349107 12.3373 0.961071 13.5571L3.97982 11.216Z"
        fill="#FBBC05"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.03531 4.05762C10.3619 4.05762 11.553 4.51351 12.4894 5.40887L15.081 2.81726C13.5162 1.35922 11.4708 0.463867 9.03531 0.463867C5.50316 0.463867 2.44745 2.48869 0.960663 5.44172L3.97941 7.7828C4.68995 5.64708 6.68191 4.05762 9.03531 4.05762Z"
        fill="#EA4335"
      />
    </Svg>
  );
};

export const Apple = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none">
      <G clip-path="url(#clip0_2355_4677)">
        <Path
          d="M17.7343 15.9147C17.4472 16.578 17.1073 17.1885 16.7136 17.7499C16.1768 18.5151 15.7374 19.0449 15.3987 19.339C14.8737 19.8218 14.3112 20.0691 13.7088 20.0832C13.2764 20.0832 12.7549 19.9601 12.1478 19.7105C11.5388 19.4621 10.9791 19.339 10.4673 19.339C9.93054 19.339 9.3549 19.4621 8.73918 19.7105C8.12251 19.9601 7.62574 20.0902 7.24592 20.1031C6.66829 20.1277 6.09252 19.8734 5.51782 19.339C5.15101 19.0191 4.6922 18.4706 4.14258 17.6936C3.55287 16.8639 3.06805 15.9018 2.68823 14.8049C2.28146 13.6201 2.07755 12.4728 2.07755 11.362C2.07755 10.0897 2.35248 8.99229 2.90316 8.07269C3.33595 7.33404 3.91171 6.75136 4.63232 6.32361C5.35293 5.89586 6.13155 5.67789 6.97005 5.66394C7.42886 5.66394 8.03052 5.80586 8.7782 6.08478C9.52377 6.36463 10.0025 6.50655 10.2124 6.50655C10.3693 6.50655 10.9011 6.3406 11.8027 6.00977C12.6552 5.70297 13.3748 5.57593 13.9643 5.62597C15.5616 5.75488 16.7616 6.38455 17.5597 7.51896C16.1311 8.38454 15.4245 9.59688 15.4385 11.1521C15.4514 12.3635 15.8909 13.3716 16.7546 14.172C17.146 14.5435 17.5831 14.8306 18.0695 15.0346C17.964 15.3404 17.8527 15.6334 17.7343 15.9147ZM14.0709 1.49896C14.0709 2.44846 13.724 3.335 13.0326 4.15557C12.1982 5.13107 11.1889 5.69476 10.0945 5.60581C10.0805 5.4919 10.0725 5.37202 10.0725 5.24604C10.0725 4.33452 10.4693 3.35902 11.1739 2.56142C11.5258 2.15758 11.9732 1.82179 12.5158 1.55392C13.0572 1.29005 13.5693 1.14413 14.051 1.11914C14.0651 1.24607 14.0709 1.37301 14.0709 1.49895V1.49896Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2355_4677">
          <Rect
            width="19.8111"
            height="19.8111"
            fill="white"
            transform="translate(0.167847 0.706055)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const ProjectIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="21"
      viewBox="0 0 47 21"
      fill="none">
      <Path
        d="M6.83998 7.12823C6.78229 6.99836 6.85442 6.88289 6.99874 6.88289H8.06653C8.15311 6.88289 8.21084 6.94063 8.22524 6.98391L10.0723 11.3129H10.1444L13.9106 2.92913C13.9251 2.88584 13.9827 2.82812 14.0693 2.82812H15.1372C15.2814 2.82812 15.3536 2.95799 15.2959 3.07343L10.332 13.8092C10.3031 13.8669 10.2598 13.9102 10.1733 13.9102H10.0723C9.98571 13.9102 9.94242 13.8669 9.91353 13.8092L6.83998 7.12823Z"
        fill="white"
      />
      <Path
        d="M15.0508 7.24424C15.0508 7.14322 15.1229 7.05664 15.2383 7.05664H19.1633C19.2643 7.05664 19.3508 7.14322 19.3508 7.24424V8.03785C19.3508 8.13888 19.2787 8.22546 19.1633 8.22546H16.3062V9.81272H18.6871C18.7881 9.81272 18.8747 9.8993 18.8747 10.0003V10.8084C18.8747 10.9094 18.7881 10.996 18.6871 10.996H16.3062V12.6843H19.1633C19.2643 12.6843 19.3508 12.7709 19.3508 12.8719V13.6655C19.3508 13.7665 19.2787 13.8531 19.1633 13.8531H15.2383C15.1374 13.8531 15.0508 13.7665 15.0508 13.6655V7.24424Z"
        fill="white"
      />
      <Path
        d="M20.9954 7.24424C20.9954 7.14322 21.0675 7.05664 21.183 7.05664H23.939C25.0934 7.05664 26.0458 7.98017 26.0458 9.13454C26.0458 10.0292 25.4542 10.7507 24.6172 11.0826L25.9448 13.5356C26.0169 13.6655 25.9448 13.8098 25.786 13.8098H24.776C24.6894 13.8098 24.6461 13.7665 24.6172 13.7232L23.333 11.1691H22.2652V13.6366C22.2652 13.7377 22.1786 13.8242 22.0776 13.8242H21.183C21.0819 13.8242 20.9954 13.7377 20.9954 13.6366V7.24424ZM23.838 10.1302C24.3431 10.1302 24.7904 9.68285 24.7904 9.14898C24.7904 8.6439 24.3431 8.21101 23.838 8.21101H22.2652V10.1302H23.838Z"
        fill="white"
      />
      <Path
        d="M27.6622 7.24424C27.6622 7.14322 27.7344 7.05664 27.8498 7.05664H30.6059C31.7603 7.05664 32.7127 7.98017 32.7127 9.13454C32.7127 10.0292 32.121 10.7507 31.2841 11.0826L32.6117 13.5356C32.6838 13.6655 32.6117 13.8098 32.4529 13.8098H31.4429C31.3563 13.8098 31.313 13.7665 31.2841 13.7232L29.9999 11.1691H28.9321V13.6366C28.9321 13.7377 28.8455 13.8242 28.7445 13.8242H27.8498C27.7488 13.8242 27.6622 13.7377 27.6622 13.6366V7.24424ZM30.5049 10.1302C31.01 10.1302 31.4573 9.68285 31.4573 9.14898C31.4573 8.6439 31.01 8.21101 30.5049 8.21101H28.9321V10.1302H30.5049Z"
        fill="white"
      />
      <Path
        d="M33.5637 13.5642L36.5651 7.07075C36.594 7.01302 36.6373 6.96973 36.7238 6.96973H36.8248C36.9258 6.96973 36.9547 7.01302 36.9836 7.07075L39.9561 13.5642C40.0138 13.694 39.9417 13.8095 39.7974 13.8095H38.9604C38.8161 13.8095 38.744 13.7517 38.6863 13.6219L38.2101 12.5829H35.3241L34.8479 13.6219C34.8046 13.7229 34.7181 13.8095 34.5738 13.8095H33.7369C33.5781 13.8095 33.506 13.694 33.5637 13.5642ZM37.7339 11.5007L36.7671 9.37949H36.7382L35.7859 11.5007H37.7339Z"
        fill="white"
      />
      <Path
        d="M43.8091 18.0375H3.05931C2.82843 18.0375 2.65527 17.8499 2.65527 17.6334V3.20362C2.65527 2.97274 2.84286 2.79958 3.05931 2.79958H12.179C12.2655 2.79958 12.3233 2.88616 12.2944 2.97274L11.8904 3.99726C11.8759 4.04055 11.8326 4.06941 11.7749 4.06941H4.05496C3.98282 4.06941 3.92509 4.12713 3.92509 4.19928V16.6522C3.92509 16.7244 3.98282 16.7821 4.05496 16.7821H42.8135C42.8856 16.7821 42.9433 16.7244 42.9433 16.6522V4.18485C42.9433 4.1127 42.8856 4.05498 42.8135 4.05498H16.5368C16.4502 4.05498 16.3925 3.9684 16.4213 3.88182L16.8831 2.8573C16.8975 2.81401 16.9408 2.78516 16.9985 2.78516H43.8091C44.04 2.78516 44.2132 2.97274 44.2132 3.18919V17.619C44.2132 17.8499 44.0256 18.0375 43.8091 18.0375Z"
        fill="white"
      />
    </Svg>
  );
};