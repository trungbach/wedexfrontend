import React from "react";
import uniqueId from "lodash/uniqueId";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const id = uniqueId("svg");

  return (
    <Svg viewBox="0 0 64 64" {...props} style={{transform: 'rotate(90deg)'}}>
      <g clipPath={`url(#${id})`}>
        <path d="M20.3077 56.3138L46.3706 45.2409L31.9863 11.3857L4.66553 22.9931L20.3077 56.3138Z" fill="#86DB7F"/>
        <path d="M59.6291 23.2336L59.0762 22.8688C58.8864 22.7442 58.7796 22.5256 58.796 22.298L58.9603 20.0552C58.9766 19.8276 58.8686 19.6096 58.6789 19.4849L57.2332 18.5308C57.0428 18.4049 56.936 18.1864 56.9529 17.9599L57.1172 15.7171C57.1337 15.4895 57.0256 15.2715 56.8353 15.1457L55.3901 14.1928C55.1997 14.067 55.0929 13.8485 55.1094 13.6209L55.2742 11.3792C55.2906 11.1516 55.1825 10.9336 54.9923 10.8077L53.5288 9.84166C53.3484 9.72277 53.2411 9.51981 53.2459 9.30413L53.2866 7.28972C53.2889 7.19654 53.2708 7.10785 53.2376 7.02983C53.1079 6.72456 52.7457 6.55592 52.4122 6.69756C51.6349 7.02777 50.7974 7.01222 50.0709 6.7189C49.3461 6.42635 48.7312 5.85669 48.401 5.07943C48.2683 4.76709 47.9075 4.62146 47.5965 4.75372L31.9863 11.3858L46.3705 45.2409L56.3285 41.0099L59.6291 23.2336Z" fill="#49A341"/>
        <path d="M59.2306 22.9706L59.0763 22.8687C58.8864 22.744 58.7796 22.5255 58.796 22.2979L58.9603 20.0551C58.9631 20.0164 58.9622 19.9776 58.958 19.9399L35.7051 19.9237L46.3623 45.2444L56.1471 41.087L59.2306 22.9706Z" fill="#49A341"/>
        <path d="M50.5979 18.5396L52.6776 24.0037L40.2418 30.2878L35.0991 18.5396L33.5529 15.073L45.0246 9.9599C45.8305 9.60129 46.7753 9.96376 47.1352 10.7697L50.5979 18.5396Z" fill="#F3EAE6"/>
        <path d="M4.80853 22.9768L20.4508 56.2975L46.5052 45.2277L35.7051 19.9237L12.1007 19.9571L4.80853 22.9768Z" fill="#49A341"/>
        <path d="M35.0992 18.5397L40.2418 30.2878L13.3137 43.8958L4.6106 27.5063L25.7752 18.5397L33.5529 15.0731L35.0992 18.5397Z" fill="#F9F3F1"/>
        <path d="M22.4638 19.9425L6.54926 26.6849L14.3767 43.3586L40.1486 30.3348L35.7052 19.924L35.705 19.9237L22.4638 19.9425Z" fill="#F3EAE6"/>
        <path d="M40.2419 30.2878L52.6776 24.0037L51.1288 19.9344L35.7051 19.9237L40.2419 30.2878Z" fill="#EFE2DD"/>
        <path d="M42.4859 22.5111V59.2953H4.57575C4.21971 59.2953 3.93179 59.0061 3.93179 58.6514C3.93179 57.8146 3.59246 57.0575 3.0449 56.51C2.49605 55.9611 1.74027 55.6231 0.903501 55.6231C0.539746 55.6231 0.273678 55.3236 0.273678 54.9932C0.273678 54.902 0.292959 54.8094 0.336661 54.7195L1.12972 53.0755C1.21584 52.8981 1.21327 52.6899 1.1233 52.5151L0.0693072 50.4662C-0.0348063 50.2631 -0.0206674 50.0202 0.105297 49.83L1.06288 48.3878C1.18885 48.1976 1.2017 47.9547 1.09759 47.7516L0.0693072 45.7516C-0.0348063 45.5498 -0.0206674 45.3068 0.105297 45.1166L1.06288 43.6731C1.18885 43.4842 1.2017 43.2413 1.09759 43.0382L0.0693072 41.0382C-0.0348063 40.8351 -0.0206674 40.5922 0.105297 40.4032L1.06288 38.9598C1.18885 38.7695 1.2017 38.5266 1.09759 38.3248L0.0693072 36.3248C-0.0348063 36.1217 -0.0206674 35.8788 0.105297 35.6885L1.06288 34.2464C1.18885 34.0561 1.2017 33.8132 1.09759 33.6101L0.0693072 31.6114C-0.0348063 31.4083 -0.0206674 31.1654 0.105297 30.9752L1.07445 29.5137C1.19399 29.3338 1.21327 29.105 1.12458 28.9083L0.299385 27.0703C0.111724 26.6538 0.416352 26.1834 0.872652 26.1834C1.71713 26.1834 2.48191 25.8415 3.0359 25.2875C3.5886 24.7348 3.93179 23.97 3.93179 23.1255C3.93179 22.9558 3.99991 22.8016 4.11174 22.6911C4.22228 22.5805 4.37524 22.5111 4.5449 22.5111H42.4859Z" fill="#A8E3A3"/>
        <path d="M63.8948 30.9752C64.0208 31.1654 64.0349 31.4083 63.9308 31.6114L62.9025 33.6101C62.7984 33.8132 62.8113 34.0561 62.9372 34.2464L63.8948 35.6885C64.0208 35.8788 64.0349 36.1217 63.9308 36.3248L62.9025 38.3248C62.7984 38.5266 62.8113 38.7695 62.9372 38.9598L63.8948 40.4032C64.0208 40.5922 64.0349 40.8351 63.9308 41.0382L62.9025 43.0382C62.7984 43.2413 62.8113 43.4842 62.9372 43.6731L63.8948 45.1166C64.0208 45.3068 64.0349 45.5498 63.9308 45.7516L62.9025 47.7516C62.7984 47.9547 62.8113 48.1976 62.9372 48.3878L63.8948 49.83C64.0208 50.0202 64.0349 50.2631 63.9308 50.4662L62.8768 52.5151C62.7868 52.6899 62.7843 52.8981 62.8704 53.0755L63.6634 54.7195C63.8652 55.1372 63.5606 55.6231 63.0966 55.6231C62.2598 55.6231 61.504 55.9611 60.9552 56.51C60.4076 57.0575 60.0683 57.8146 60.0683 58.6514C60.0683 58.8287 59.9963 58.9894 59.8794 59.1064C59.7637 59.2233 59.6017 59.2953 59.4243 59.2953H42.486V22.5111H59.4552C59.7932 22.5111 60.0683 22.7862 60.0683 23.1255C60.0683 23.97 60.4115 24.7348 60.9642 25.2875C61.5182 25.8415 62.283 26.1834 63.1275 26.1834C63.4899 26.1834 63.7573 26.4803 63.7573 26.8119C63.7573 26.8967 63.7393 26.9854 63.7007 27.0703L62.8755 28.9083C62.7868 29.105 62.8061 29.3338 62.9256 29.5137L63.8948 30.9752Z" fill="#86DB7F"/>
        <path d="M56.6415 27.9649V53.8404C56.6415 54.7234 55.9269 55.4393 55.0438 55.4393H42.486V26.3672H55.0438C55.9269 26.3672 56.6415 27.0832 56.6415 27.9649Z" fill="#F3EAE6"/>
        <path d="M42.4859 56.9154V59.2954H4.57575C4.21971 59.2954 3.93179 59.0062 3.93179 58.6514C3.93179 57.8147 3.59246 57.0576 3.0449 56.51C2.49605 55.9612 1.74027 55.6231 0.903501 55.6231C0.539746 55.6231 0.273678 55.3236 0.273678 54.9933C0.273678 54.902 0.292959 54.8095 0.336661 54.7195L1.12972 53.0756C1.21584 52.8982 1.21327 52.69 1.1233 52.5151L0.0693072 50.4663C-0.0348063 50.2632 -0.0206674 50.0203 0.105297 49.83L1.06288 48.3879C1.18885 48.1976 1.2017 47.9547 1.09759 47.7516L0.0693072 45.7516C-0.0348063 45.5498 -0.0206674 45.3069 0.105297 45.1167L1.06288 43.6732C1.18885 43.4843 1.2017 43.2413 1.09759 43.0382L0.0693072 41.0382C-0.0348063 40.8352 -0.0206674 40.5922 0.105297 40.4033L1.06288 38.9598C1.18885 38.7696 1.2017 38.5267 1.09759 38.3249L0.0693072 36.3248C-0.0348063 36.1218 -0.0206674 35.8788 0.105297 35.6886L1.06288 34.2464C1.18885 34.0562 1.2017 33.8133 1.09759 33.6102L0.0693072 31.6115C-0.0348063 31.4084 -0.0206674 31.1654 0.105297 30.9752L1.07445 29.5138C1.19399 29.3338 1.21327 29.105 1.12458 28.9084L0.299385 27.0703C0.111724 26.6539 0.416352 26.1834 0.872652 26.1834C1.71713 26.1834 2.48191 25.8415 3.0359 25.2875C3.5886 24.7348 3.93179 23.97 3.93179 23.1256C3.93179 22.9559 3.99991 22.8017 4.11174 22.6911C4.22228 22.5806 4.37524 22.5112 4.5449 22.5112H11.7656C10.6795 22.7226 9.87732 23.4618 9.87732 24.3427V50.2423C9.87732 53.9277 12.865 56.9155 16.5506 56.9155H42.4859V56.9154Z" fill="#86DB7F"/>
        <path d="M42.4859 26.3672V55.4393H8.95621C8.07318 55.4393 7.35852 54.7234 7.35852 53.8404V27.9649C7.35852 27.0832 8.07318 26.3672 8.95621 26.3672H42.4859Z" fill="#F9F3F1"/>
        <path d="M42.4859 26.3672V55.4393H8.95621C8.07318 55.4393 7.35852 54.7234 7.35852 53.8404V27.9649C7.35852 27.0832 8.07318 26.3672 8.95621 26.3672H42.4859Z" fill="#F9F3F1"/>
        <path d="M8.95622 55.4393H12.3664C10.8489 54.2161 9.87717 52.3431 9.87717 50.2422V26.3672H8.95609C8.07305 26.3672 7.3584 27.0832 7.3584 27.9649V53.8404C7.35853 54.7234 8.07318 55.4393 8.95622 55.4393Z" fill="#F3EAE6"/>
        <path d="M42.486 56.9153V59.2953H59.4243C59.6017 59.2953 59.7637 59.2233 59.8794 59.1064C59.9963 58.9894 60.0683 58.8287 60.0683 58.6514C60.0683 58.0051 60.2714 57.4067 60.6159 56.9153H42.486Z" fill="#49A341"/>
        <path d="M42.4854 33.4517C41.9529 33.4517 41.5214 33.0201 41.5214 32.4877V31.5061C41.5214 30.9737 41.9529 30.5421 42.4854 30.5421C43.0179 30.5421 43.4494 30.9737 43.4494 31.5061V32.4877C43.4494 33.0201 43.0179 33.4517 42.4854 33.4517Z" fill="#EFE2DD"/>
        <path d="M42.4854 37.9414C41.9529 37.9414 41.5214 37.5098 41.5214 36.9774V35.9957C41.5214 35.4634 41.9529 35.0317 42.4854 35.0317C43.0179 35.0317 43.4494 35.4634 43.4494 35.9957V36.9774C43.4494 37.5098 43.0179 37.9414 42.4854 37.9414Z" fill="#EFE2DD"/>
        <path d="M42.4854 42.4311C41.9529 42.4311 41.5214 41.9995 41.5214 41.4671V40.4855C41.5214 39.9531 41.9529 39.5215 42.4854 39.5215C43.0179 39.5215 43.4494 39.9531 43.4494 40.4855V41.4671C43.4494 41.9995 43.0179 42.4311 42.4854 42.4311Z" fill="#EFE2DD"/>
        <path d="M42.4854 46.9209C41.9529 46.9209 41.5214 46.4893 41.5214 45.9569V44.9753C41.5214 44.4429 41.9529 44.0113 42.4854 44.0113C43.0179 44.0113 43.4494 44.4429 43.4494 44.9753V45.9569C43.4494 46.4893 43.0179 46.9209 42.4854 46.9209Z" fill="#EFE2DD"/>
        <path d="M42.4854 51.4107C41.9529 51.4107 41.5214 50.9791 41.5214 50.4467V49.465C41.5214 48.9327 41.9529 48.501 42.4854 48.501C43.0179 48.501 43.4494 48.9327 43.4494 49.465V50.4467C43.4494 50.9791 43.0179 51.4107 42.4854 51.4107Z" fill="#EFE2DD"/>
        <path d="M47.9839 34.1888C47.4514 34.1888 47.0199 33.7572 47.0199 33.2248V30.2418C47.0199 29.7094 47.4514 29.2778 47.9839 29.2778C48.5164 29.2778 48.9479 29.7094 48.9479 30.2418V33.2248C48.9479 33.7572 48.5163 34.1888 47.9839 34.1888Z" fill="#EFE2DD"/>
        <path d="M47.9839 39.5507C47.4514 39.5507 47.0199 39.1191 47.0199 38.5867V37.6368C47.0199 37.1044 47.4514 36.6728 47.9839 36.6728C48.5164 36.6728 48.9479 37.1044 48.9479 37.6368V38.5867C48.9479 39.1191 48.5163 39.5507 47.9839 39.5507Z" fill="#EFE2DD"/>
        <path d="M47.9839 52.862C47.4514 52.862 47.0199 52.4304 47.0199 51.898V42.0919C47.0199 41.5596 47.4514 41.1279 47.9839 41.1279C48.5164 41.1279 48.9479 41.5596 48.9479 42.0919V51.898C48.9479 52.4304 48.5163 52.862 47.9839 52.862Z" fill="#EFE2DD"/>
        <path d="M52.392 52.862C51.8595 52.862 51.428 52.4304 51.428 51.898V30.2418C51.428 29.7094 51.8595 29.2778 52.392 29.2778C52.9245 29.2778 53.356 29.7094 53.356 30.2418V51.898C53.356 52.4304 52.9244 52.862 52.392 52.862Z" fill="#EFE2DD"/>
        <path d="M45.6601 19.6192C45.2912 19.6192 44.939 19.4063 44.7791 19.0474L43.0138 15.0867C42.797 14.6005 43.0156 14.0305 43.5019 13.8137C43.9881 13.597 44.5582 13.8155 44.7749 14.3017L46.5402 18.2624C46.757 18.7487 46.5384 19.3186 46.0521 19.5353C45.9245 19.5924 45.7912 19.6192 45.6601 19.6192Z" fill="#EFE2DD"/>
        <path d="M40.8339 19.6193C40.4648 19.6193 40.1128 19.4063 39.9529 19.0474L38.9875 16.8812C38.7708 16.3948 38.9893 15.825 39.4756 15.6082C39.9614 15.3915 40.5318 15.61 40.7485 16.0962L41.7139 18.2624C41.9307 18.7488 41.7121 19.3186 41.2258 19.5355C41.0983 19.5924 40.965 19.6193 40.8339 19.6193Z" fill="#EFE2DD"/>
        <path d="M41.5214 27.911C41.5214 28.4434 41.9529 28.875 42.4854 28.875C43.0179 28.875 43.4494 28.4434 43.4494 27.911V26.3672H41.5214V27.911Z" fill="#EFE2DD"/>
        <path d="M41.5214 22.5111H43.4494V26.3672H41.5214V22.5111Z" fill="#49A341"/>
        <path d="M42.4854 52.9221C41.9529 52.9221 41.5214 53.3537 41.5214 53.8861V55.4393H43.4494V53.8861C43.4494 53.3537 43.0179 52.9221 42.4854 52.9221Z" fill="#EFE2DD"/>
        <path d="M41.5214 55.4393V59.2859C41.5214 59.2892 41.5217 59.2921 41.5219 59.2953H43.449C43.449 59.2922 43.4495 59.2892 43.4495 59.2859V55.4393H41.5214Z" fill="#49A341"/>
        <path d="M29.8162 34.9128V41.0031L24.9439 38.1433L24.838 38.0374L24.6791 38.1433L19.7009 41.0561V34.9128L17 36.5545V45.5047L17.1059 45.3988V45.5047L24.838 40.8972L32.5171 45.5047V42.5919V36.5545L29.8162 34.9128Z" fill="#49A341"/>
        <path d="M24.838 32L21.9782 33.6947V36.4486H22.243L24.838 34.9128L27.3801 36.4486H27.486V33.5888L24.838 32Z" fill="#49A341"/>
        <path d="M24.838 47.4113L22.296 49L19.9128 47.3053L24.7851 44.3396L29.7103 47.3583L27.3271 49L24.838 47.4113Z" fill="#49A341"/>
        <path d="M24.838 38.0374L24.6791 38.1433L19.7009 41.0561V36.4486H17.1059L17 36.5545V45.5047L17.1059 45.3988V45.5047L24.838 40.8972V38.0374Z" fill="url(#paint0_linear)"/>
        <path d="M29.8162 36.8723V41.0031L24.9439 38.1433L24.838 38.0374V40.8972L32.5171 45.5047V42.5919V36.8723H29.8162Z" fill="#49A341"/>
        <path d="M19.7009 43.9689V41.0561V34.9128L17 36.5545V45.5047L17.1059 45.3988V45.5047L19.7009 43.9689Z" fill="url(#paint1_linear)"/>
        <path d="M29.8162 41.0031V43.8629L32.5172 45.5047V42.5919V36.5545L29.8162 34.9128V41.0031Z" fill="url(#paint2_linear)"/>
        <path d="M24.7321 32.053L21.9782 33.6947V36.4486H22.243L24.7321 34.9658V32.053Z" fill="url(#paint3_linear)"/>
        <path d="M24.838 44.3396H24.7851L19.9128 47.3053L22.296 49L24.838 47.4113V44.3396Z" fill="url(#paint4_linear)"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear" x1="15.075" y1="42.1472" x2="24.1612" y2="36.9013" gradientUnits="userSpaceOnUse">
          <stop stopColor="#49A341"/>
          <stop offset="0.4294" stopColor="#4BA543"/>
          <stop offset="0.6118" stopColor="#52AA4A"/>
          <stop offset="0.7474" stopColor="#5FB455"/>
          <stop offset="0.8598" stopColor="#70C166"/>
          <stop offset="0.9568" stopColor="#87D37B"/>
          <stop offset="1" stopColor="#94DD87"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="18.3492" y1="34.9304" x2="18.3492" y2="45.4815" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A9F99D"/>
          <stop offset="0.0142624" stopColor="#A3F498"/>
          <stop offset="0.0960348" stopColor="#87DB7D"/>
          <stop offset="0.1886" stopColor="#70C667"/>
          <stop offset="0.2946" stopColor="#5FB656"/>
          <stop offset="0.4226" stopColor="#52AB4A"/>
          <stop offset="0.5948" stopColor="#4BA543"/>
          <stop offset="1" stopColor="#49A341"/>
        </linearGradient>
        <linearGradient id="paint2_linear" x1="31.1569" y1="34.9304" x2="31.1569" y2="45.4815" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A9F99D"/>
          <stop offset="0.0142624" stopColor="#A3F498"/>
          <stop offset="0.0960348" stopColor="#87DB7D"/>
          <stop offset="0.1886" stopColor="#70C667"/>
          <stop offset="0.2946" stopColor="#5FB656"/>
          <stop offset="0.4226" stopColor="#52AB4A"/>
          <stop offset="0.5948" stopColor="#4BA543"/>
          <stop offset="1" stopColor="#49A341"/>
        </linearGradient>
        <linearGradient id="paint3_linear" x1="24.7577" y1="34.2473" x2="21.9631" y2="34.2473" gradientUnits="userSpaceOnUse">
          <stop stopColor="#94DD87"/>
          <stop offset="0.0432431" stopColor="#87D37B"/>
          <stop offset="0.1402" stopColor="#70C166"/>
          <stop offset="0.2526" stopColor="#5FB455"/>
          <stop offset="0.3882" stopColor="#52AA4A"/>
          <stop offset="0.5706" stopColor="#4BA543"/>
          <stop offset="1" stopColor="#49A341"/>
        </linearGradient>
        <linearGradient id="paint4_linear" x1="24.8249" y1="46.6594" x2="19.9211" y2="46.6594" gradientUnits="userSpaceOnUse">
          <stop stopColor="#94DD87"/>
          <stop offset="0.0469216" stopColor="#84D178"/>
          <stop offset="0.1306" stopColor="#6EC064"/>
          <stop offset="0.2295" stopColor="#5DB354"/>
          <stop offset="0.3519" stopColor="#52AA49"/>
          <stop offset="0.5235" stopColor="#4BA443"/>
          <stop offset="1" stopColor="#49A341"/>
        </linearGradient>
        <clipPath id={id}>
          <rect width="64" height="64" fill="white"/>
        </clipPath>
      </defs>
    </Svg>

  );
};

export default Icon;