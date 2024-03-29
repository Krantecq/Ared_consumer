import React from 'react';
import {View} from 'react-native';
import Svg, {
  Path,
  Defs,
  ClipPath,
  Rect,
  Pattern,
  Image,
  Use,
} from 'react-native-svg';
import {SIZES} from '../../constant';

export const Profile = () => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={SIZES.width * 0.0765}
        height={SIZES.width * 0.0765}
        viewBox="0 0 28 28"
        fill="none">
        <Path
          d="M14 14C15.933 14 17.5 12.433 17.5 10.5C17.5 8.567 15.933 7 14 7C12.067 7 10.5 8.567 10.5 10.5C10.5 12.433 12.067 14 14 14Z"
          stroke="#00EA77"
          stroke-width="1.00649"
        />
        <Path
          d="M20.9642 23.3333C20.7786 19.9599 19.7457 17.5 14.0001 17.5C8.25466 17.5 7.22181 19.9599 7.03613 23.3333"
          stroke="#00EA77"
          stroke-width="1.00649"
          stroke-linecap="round"
        />
        <Path
          d="M8.16634 3.89404C9.88236 2.90138 11.8747 2.33325 13.9997 2.33325C20.4429 2.33325 25.6663 7.55659 25.6663 13.9999C25.6663 20.4432 20.4429 25.6666 13.9997 25.6666C7.55635 25.6666 2.33301 20.4432 2.33301 13.9999C2.33301 11.875 2.90114 9.8826 3.8938 8.16659"
          stroke="#1D493E"
          stroke-width="1.00649"
          stroke-linecap="round"
        />
      </Svg>
    </View>
  );
};

export const Bank = () => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={SIZES.width * 0.0765}
        height={SIZES.width * 0.0765}
        viewBox="0 0 33 33"
        fill="none">
        <Path
          d="M17.875 6.875C21.764 6.875 23.7086 6.875 24.9168 8.08319C26.125 9.29137 26.125 11.2359 26.125 15.125C26.125 19.014 26.125 20.9586 24.9168 22.1668C23.7086 23.375 21.764 23.375 17.875 23.375H11C7.11091 23.375 5.16637 23.375 3.95818 22.1668C2.75 20.9586 2.75 19.014 2.75 15.125C2.75 11.2359 2.75 9.29137 3.95818 8.08319C5.16637 6.875 7.11091 6.875 11 6.875H12.375"
          stroke="#1C274C"
          stroke-width="1.15"
          stroke-linecap="round"
        />
        <Path
          d="M22.0008 27.5001H15.1258C11.2367 27.5001 9.29217 27.5001 8.08399 26.2919C7.41039 25.6183 7.11234 24.7158 6.98047 23.375M29.0426 26.2919C30.2508 25.0837 30.2508 23.1392 30.2508 19.2501C30.2508 15.361 30.2508 13.4164 29.0426 12.2083C28.369 11.5347 27.4666 11.2366 26.1258 11.1047"
          stroke="#1C274C"
          stroke-width="1.15"
          stroke-linecap="round"
        />
        <Path
          d="M17.875 15.125C17.875 17.0235 16.336 18.5625 14.4375 18.5625C12.539 18.5625 11 17.0235 11 15.125C11 13.2265 12.539 11.6875 14.4375 11.6875C16.336 11.6875 17.875 13.2265 17.875 15.125Z"
          stroke="#00EA77"
          stroke-width="1.115"
        />
        <Path
          d="M22 17.875V12.375"
          stroke="#00EA77"
          stroke-width="1.115"
          stroke-linecap="round"
        />
        <Path
          d="M6.875 17.875V12.375"
          stroke="#00EA77"
          stroke-width="1.115"
          stroke-linecap="round"
        />
      </Svg>
    </View>
  );
};

export const Learning = () => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={SIZES.width * 0.0765}
        height={SIZES.width * 0.0765}
        viewBox="0 0 27 27"
        fill="none">
        <Path
          d="M4.5 8.99988C4.5 5.81789 4.5 4.22691 5.48852 3.23839C6.47703 2.24988 8.06802 2.24988 11.25 2.24988H15.75C18.9319 2.24988 20.5229 2.24988 21.5115 3.23839C22.5 4.22691 22.5 5.81789 22.5 8.99988V17.9999C22.5 21.1818 22.5 22.7728 21.5115 23.7613C20.5229 24.7499 18.9319 24.7499 15.75 24.7499H11.25C8.06802 24.7499 6.47703 24.7499 5.48852 23.7613C4.5 22.7728 4.5 21.1818 4.5 17.9999V8.99988Z"
          stroke="#1D493E"
          stroke-width="0.949821"
        />
        <Path
          d="M22.385 18.0001H8.885C7.83879 18.0001 7.31567 18.0001 6.88648 18.1151C5.72179 18.4272 4.81207 19.337 4.5 20.5016"
          stroke="#1D493E"
          stroke-width="0.949821"
        />
        <Path
          opacity="0.5"
          d="M9 7.87512H18"
          stroke="#00EA77"
          stroke-width="0.949821"
          stroke-linecap="round"
        />
        <Path
          opacity="0.5"
          d="M9 11.8125H14.625"
          stroke="#00EA77"
          stroke-width="0.949821"
          stroke-linecap="round"
        />
        <Path
          opacity="0.5"
          d="M21.9375 21.3751H9"
          stroke="#00EA77"
          stroke-width="0.949821"
          stroke-linecap="round"
        />
      </Svg>
    </View>
  );
};

export const Support = () => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={SIZES.width * 0.0765}
        height={SIZES.width * 0.0765}
        viewBox="0 0 28 28"
        fill="none">
        <Path
          d="M17.5 10.5L22.1667 5.83337"
          stroke="#1C274C"
          stroke-width="1.15"
        />
        <Path
          d="M5.8335 22.1667L10.5002 17.5"
          stroke="#1C274C"
          stroke-width="1.15"
        />
        <Path
          d="M10.5002 10.5L5.8335 5.83337"
          stroke="#1C274C"
          stroke-width="1.15"
        />
        <Path
          d="M22.1667 22.1667L17.5 17.5"
          stroke="#1C274C"
          stroke-width="1.15"
        />
        <Path
          d="M10.9807 2.7287C12.8951 2.214 14.9666 2.18088 17.0192 2.73087C23.243 4.39853 26.9364 10.7958 25.2688 17.0195C23.6011 23.2433 17.2038 26.9368 10.9801 25.2691C4.75632 23.6015 1.06285 17.2042 2.7305 10.9805C3.28049 8.92786 4.34493 7.15047 5.74789 5.74984"
          stroke="#1C274C"
          stroke-width="1.15"
          stroke-linecap="round"
        />
        <Path
          d="M14.0002 18.6667C16.5775 18.6667 18.6668 16.5774 18.6668 14C18.6668 11.4227 16.5775 9.33337 14.0002 9.33337C11.4228 9.33337 9.3335 11.4227 9.3335 14C9.3335 16.5774 11.4228 18.6667 14.0002 18.6667Z"
          stroke="#00EA77"
          stroke-width="1.15"
        />
      </Svg>
    </View>
  );
};

export const Payment = () => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={SIZES.width * 0.0765}
        height={SIZES.width * 0.0765}
        viewBox="0 0 28 28"
        fill="none">
        <Path
          d="M14 19.833V20.4163V20.9997"
          stroke="#00EA77"
          stroke-width="1.75"
          stroke-linecap="round"
        />
        <Path
          d="M14 7V7.58333V8.16667"
          stroke="#00EA77"
          stroke-width="1.75"
          stroke-linecap="round"
        />
        <Path
          d="M17.5 11.0837C17.5 9.47283 15.9331 8.16699 14 8.16699C12.0669 8.16699 10.5 9.47283 10.5 11.0837C10.5 12.6945 12.0669 14.0003 14 14.0003C15.9331 14.0003 17.5 15.3062 17.5 16.917C17.5 18.5278 15.9331 19.8337 14 19.8337C12.0669 19.8337 10.5 18.5278 10.5 16.917"
          stroke="#00EA77"
          stroke-width="1.225"
          stroke-linecap="round"
        />
        <Path
          d="M8.16683 3.8938C9.88284 2.90114 11.8752 2.33301 14.0002 2.33301C20.4434 2.33301 25.6668 7.55635 25.6668 13.9997C25.6668 20.4429 20.4434 25.6663 14.0002 25.6663C7.55684 25.6663 2.3335 20.4429 2.3335 13.9997C2.3335 11.8747 2.90163 9.88236 3.89429 8.16634"
          stroke="#1D493E"
          stroke-width="1.225"
          stroke-linecap="round"
        />
      </Svg>
    </View>
  );
};

export const Legal = () => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={SIZES.width * 0.0765}
        height={SIZES.width * 0.0765}
        viewBox="0 0 27 27"
        fill="none">
        <Path
          d="M9.00049 13.5H10.1255M18.0005 13.5H13.5005"
          stroke="#00EA77"
          stroke-width="1.15"
          stroke-linecap="round"
        />
        <Path
          d="M18.0005 9.00012H16.8755M13.5005 9.00012H9.00049"
          stroke="#00EA77"
          stroke-width="1.15"
          stroke-linecap="round"
        />
        <Path
          d="M9.00049 17.9999H14.6255"
          stroke="#00EA77"
          stroke-width="1.15"
          stroke-linecap="round"
        />
        <Path
          d="M3.375 15.7501V11.2501C3.375 7.00748 3.375 4.88617 4.69302 3.56814C6.01104 2.25012 8.13236 2.25012 12.375 2.25012H14.625C18.8676 2.25012 20.989 2.25012 22.3069 3.56814C23.0418 4.30298 23.3669 5.2875 23.5108 6.75012M23.625 11.2501V15.7501C23.625 19.9927 23.625 22.1141 22.3069 23.4321C20.989 24.7501 18.8676 24.7501 14.625 24.7501H12.375C8.13236 24.7501 6.01104 24.7501 4.69302 23.4321C3.95819 22.6972 3.63304 21.7127 3.48918 20.2501"
          stroke="#1D493E"
          stroke-width="1.115"
          stroke-linecap="round"
        />
      </Svg>
    </View>
  );
};

export const About = () => {
  return (
    <View>
      <Svg
        width={SIZES.width * 0.0765}
        height={SIZES.width * 0.0765}
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.2763 3.30615H8.72268C5.39342 3.30615 3.30615 5.66342 3.30615 8.99929V18.0008C3.30615 21.3366 5.3835 23.6939 8.72268 23.6939H18.2752C21.6155 23.6939 23.6939 21.3366 23.6939 18.0008V8.99929C23.6939 5.66342 21.6155 3.30615 18.2763 3.30615Z"
          stroke="#1D493E"
          stroke-width="0.936735"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M18.081 16.8219L17.1255 17.3153C17.1092 17.2701 16.9773 16.965 16.7325 16.4012C16.4864 15.8362 16.1637 15.1105 15.7607 14.2228H12.127C11.6951 15.1758 11.3624 15.9141 11.1288 16.4376C10.8953 16.9612 10.766 17.2538 10.7409 17.3153L9.91846 16.8708C10.0252 16.6586 10.4634 15.7207 11.2343 14.0583C12.0052 12.3959 12.8063 10.6482 13.6362 8.81628H14.4348C15.2534 10.6482 16.057 12.4236 16.8467 14.1412C17.6365 15.8588 18.0471 16.7528 18.0797 16.8219M15.4129 13.4368C15.1957 12.9371 14.9671 12.416 14.7261 11.8711C14.485 11.3262 14.2326 10.7574 13.9677 10.1635L13.9426 10.1685C13.7367 10.618 13.4881 11.1717 13.198 11.8272C12.9067 12.4826 12.6669 13.02 12.4773 13.4368L12.4748 13.4431H15.4154L15.4129 13.4368Z"
          fill="#00EA77"
        />
      </Svg>
    </View>
  );
};

export const Logout = () => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={SIZES.width * 0.0765}
        height={SIZES.width * 0.0765}
        viewBox="0 0 26 26"
        fill="none">
        <Path
          d="M16.2498 13H2.1665M2.1665 13L5.95817 9.75M2.1665 13L5.95817 16.25"
          stroke="#00EA77"
          stroke-width="1.15"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M9.75244 7.58329C9.76556 5.22701 9.87005 3.95094 10.7025 3.11853C11.6544 2.16663 13.1864 2.16663 16.2505 2.16663H17.3339C20.398 2.16663 21.9301 2.16663 22.882 3.11853C23.8339 4.07043 23.8339 5.60249 23.8339 8.66663V17.3333C23.8339 20.3974 23.8339 21.9294 22.882 22.8814C22.0495 23.7138 20.7735 23.8183 18.417 23.8314M9.75244 18.4166C9.76556 20.7729 9.87005 22.0489 10.7025 22.8814C11.3972 23.5761 12.4009 23.7638 14.0837 23.8145"
          stroke="#1D493E"
          stroke-width="1.13"
          stroke-linecap="round"
        />
      </Svg>
    </View>
  );
};
