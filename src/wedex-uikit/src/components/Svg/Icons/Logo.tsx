import React from "react";
import styled from "styled-components";
import {space} from "styled-system";
import uniqueId from "lodash/uniqueId";
import {SvgProps} from "../types";


const Svg = styled.svg<SvgProps>`
  align-self: center; // Safari fix
  flex-shrink: 0;
  .st0{fill:#49A341;}
  .st1{fill:url(#SVGID_1_);}
  .st2{fill:url(#SVGID_2_);}
  .st3{fill:url(#SVGID_3_);}
  .st4{fill:url(#SVGID_4_);}
  .st5{fill:url(#SVGID_5_);}
  .st6{fill:url(#SVGID_6_);}
  .st7{fill:url(#SVGID_7_);}
  .st8{fill:url(#SVGID_8_);}
  .st9{fill:url(#SVGID_9_);}
  .st10{fill:url(#SVGID_10_);}
  .st11{fill:url(#SVGID_11_);}
  .st12{fill:url(#SVGID_12_);}
  .st13{fill:url(#SVGID_13_);}
  .st14{fill:url(#SVGID_14_);}
  .st15{fill:url(#SVGID_15_);}
  .st16{fill:url(#SVGID_16_);}
  .st17{fill:url(#SVGID_17_);}
  .st18{fill:url(#SVGID_18_);}
  .st19{fill:url(#SVGID_19_);}
  .st20{fill:url(#SVGID_20_);}
  .st21{fill:url(#SVGID_21_);}
  .st22{fill:url(#SVGID_22_);}
  .st23{fill:url(#SVGID_23_);}
  .st24{fill:url(#SVGID_24_);}
  .st25{fill:url(#SVGID_25_);}
  .st26{fill:url(#SVGID_26_);}
  .st27{fill:#B7D972;}
  .st28{fill:url(#SVGID_27_);}
  .st29{fill:url(#SVGID_28_);}
  .st30{fill:url(#SVGID_29_);}
  .st31{fill:url(#SVGID_30_);}
  .st32{fill:#9BC1F9;}
  .st33{fill:#EDFDFC;}
  .st34{fill:url(#SVGID_31_);}
  .st35{fill:url(#SVGID_32_);}
  .st36{fill:url(#SVGID_33_);}
  .st37{fill:#F47257;}
  .st38{fill:url(#SVGID_34_);}
  .st39{fill:#50BFA5;}
  .st40{fill:#3C8F7C;}
  .st41{fill:url(#SVGID_35_);}
  .st42{fill:url(#SVGID_36_);}
  .st43{fill:url(#SVGID_37_);}
  .st44{fill:url(#SVGID_38_);}
  .st45{fill:url(#SVGID_39_);}
  .st46{fill:url(#SVGID_40_);}
  .st47{fill:url(#SVGID_41_);}
  .st48{fill:url(#SVGID_42_);}
  .st49{fill:#847D3D;}
  .st50{fill:url(#SVGID_43_);}
  .st51{fill:#FFFFFF;}
  .st52{fill:url(#SVGID_44_);}
  .st53{fill:url(#SVGID_45_);}
  .st54{fill:url(#SVGID_46_);}
  .st55{fill:url(#SVGID_47_);}
  .st56{fill:url(#SVGID_48_);}
  .st57{fill:url(#SVGID_49_);}
  .st58{fill:url(#SVGID_50_);}
  .st59{fill:url(#SVGID_51_);}
  .st60{fill:url(#SVGID_52_);}
  .st61{fill:url(#SVGID_53_);}
  .st62{fill:url(#SVGID_54_);}
  .st63{fill:url(#SVGID_55_);}
  .st64{fill:url(#SVGID_56_);}
  .st65{fill:url(#SVGID_57_);}
  .st66{fill:#13375B;}
  .st67{fill:#473B1E;}
  .st68{fill:url(#SVGID_58_);}
  .st69{fill:url(#SVGID_59_);}
  .st70{fill:url(#SVGID_60_);}
  .st71{fill:url(#SVGID_61_);}
  .st72{fill:url(#SVGID_62_);}
  .st73{fill:url(#SVGID_63_);}
  .st74{fill:url(#SVGID_64_);}
  .st75{fill:url(#SVGID_65_);}
  .st76{fill:url(#SVGID_66_);}
  .st77{fill:url(#SVGID_67_);}
  .st78{fill:url(#SVGID_68_);}
  .st79{fill:url(#SVGID_69_);}
  .st80{fill:#F7CC7F;}
  .st81{fill:#FAE0B2;}
  .st82{fill:url(#SVGID_70_);}
  .st83{fill:#F7A491;}
  .st84{fill:url(#SVGID_71_);}
  .st85{fill:url(#SVGID_72_);}
  .st86{fill:#48433E;}
  .st87{fill:#35312D;}
  .st88{fill:#5D3F24;}
  .st89{fill:#52351C;}
  .st90{fill:#735236;}
  .st91{fill:#DBDBDB;}
  .st92{fill:#E3E3E3;}
  .st93{fill:#FBFBFB;}
  .st94{fill:#FCC7AA;}
  .st95{fill:#FFD6BF;}
  .st96{fill:#E7E7E7;}
  .st97{fill:#ECECEC;}
  .st98{fill:#C4C4C4;}
  .st99{fill:#454545;}
  .st100{fill:#696969;}
  .st101{fill:#FAD3BE;}
  .st102{fill:#4A2727;}
  .st103{fill:#DCDBCA;}
  .st104{fill:#F2B33F;}
  .st105{fill:#CD951A;}
  .st106{fill:#FFDE5C;}
  .st107{fill:#FCCD49;}
  .st108{fill:#D47E15;}
  .st109{fill:#EFAE36;}
  .st110{fill:#ECAC32;}
  .st111{fill:#F7B943;}
  .st112{fill:#ECA336;}
  .st113{fill:#FFC84F;}
  .st114{fill:#CA8D17;}
  .st115{fill:#E7A630;}
  .st116{fill:#A35F0B;}
  .st117{fill:#FFE685;}
  .st118{fill:#F2CC45;}
  .st119{fill:#BD7E17;}
  .st120{fill:#DBAC3A;}
  .st121{fill:#E6BB42;}
  .st122{fill:#FFE152;}
  .st123{fill:#FFEF68;}
  .st124{fill:#F7C840;}
  .st125{fill:#F2BA3A;}
  .st126{fill:#FCD645;}
  .st127{fill:#D9952C;}
  .st128{fill:#BD7717;}
  .st129{enable-background:new    ;}
  .st130{clipPath:url(#SVGID_74_);enable-background:new    ;}
  .st131{fill:#D5AA39;}
  .st132{fill:#D8AD3B;}
  .st133{fill:#DAB13D;}
  .st134{fill:#DDB53E;}
  .st135{fill:#E0B940;}
  .st136{fill:#D2A638;}
  .st137{fill:#CFA236;}
  .st138{fill:#CC9E34;}
  .st139{fill:#C99B33;}
  .st140{fill:#C79731;}
  .st141{fill:#C49330;}
  .st142{fill:#C1902E;}
  .st143{fill:#BE8D2C;}
  .st144{clipPath:url(#SVGID_76_);enable-background:new    ;}
  .st145{clipPath:url(#SVGID_78_);enable-background:new    ;}
  .st146{clipPath:url(#SVGID_80_);enable-background:new    ;}
  .st147{fill:#E4BD42;}
  .st148{fill:#DB8730;}
  .st149{clipPath:url(#SVGID_82_);enable-background:new    ;}
  .st150{fill:#D46B15;}
  .st151{clipPath:url(#SVGID_84_);enable-background:new    ;}
  .st152{clipPath:url(#SVGID_86_);enable-background:new    ;}
  .st153{clipPath:url(#SVGID_88_);enable-background:new    ;}
  .st154{fill:#FFDD85;}
  .st155{fill:#BAA37A;}
  .st156{clipPath:url(#SVGID_90_);enable-background:new    ;}
  .st157{clipPath:url(#SVGID_92_);enable-background:new    ;}
  .st158{clipPath:url(#SVGID_94_);enable-background:new    ;}
  .st159{clipPath:url(#SVGID_96_);enable-background:new    ;}
  .st160{fill:#BA9E7A;}
  .st161{clipPath:url(#SVGID_98_);enable-background:new    ;}
  .st162{clipPath:url(#SVGID_100_);enable-background:new    ;}
  .st163{clipPath:url(#SVGID_102_);enable-background:new    ;}
  .st164{clipPath:url(#SVGID_104_);enable-background:new    ;}
  .st165{clipPath:url(#SVGID_106_);enable-background:new    ;}
  .st166{clipPath:url(#SVGID_108_);enable-background:new    ;}
  .st167{clipPath:url(#SVGID_110_);enable-background:new    ;}
  .st168{clipPath:url(#SVGID_112_);enable-background:new    ;}
  .st169{fill:#F2CE45;}
  .st170{fill:#BD8017;}
  .st171{fill:#DBAD3A;}
  .st172{fill:#E6BD42;}
  .st173{fill:#EFB636;}
  .st174{fill:#FFF168;}
  .st175{fill:#FFFA68;}
  .st176{fill:#ECB432;}
  .st177{fill:#F7C143;}
  .st178{fill:#D9982C;}
  .st179{fill:#BD7B17;}
  .st180{fill:#FFE55C;}
  .st181{fill:#A3670B;}
  .st182{fill:#E7AE30;}
  .st183{fill:#FFEB85;}
  .st184{clipPath:url(#SVGID_114_);enable-background:new    ;}
  .st185{clipPath:url(#SVGID_116_);enable-background:new    ;}
  .st186{clipPath:url(#SVGID_118_);enable-background:new    ;}
  .st187{clipPath:url(#SVGID_120_);enable-background:new    ;}
  .st188{clipPath:url(#SVGID_122_);enable-background:new    ;}
  .st189{clipPath:url(#SVGID_124_);enable-background:new    ;}
  .st190{clipPath:url(#SVGID_126_);enable-background:new    ;}
  .st191{clipPath:url(#SVGID_128_);enable-background:new    ;}
  .st192{clipPath:url(#SVGID_130_);enable-background:new    ;}
  .st193{clipPath:url(#SVGID_132_);enable-background:new    ;}
  .st194{clipPath:url(#SVGID_134_);enable-background:new    ;}
  .st195{clipPath:url(#SVGID_136_);enable-background:new    ;}
  .st196{clipPath:url(#SVGID_138_);enable-background:new    ;}
  .st197{clipPath:url(#SVGID_140_);enable-background:new    ;}
  .st198{clipPath:url(#SVGID_142_);enable-background:new    ;}
  .st199{clipPath:url(#SVGID_144_);enable-background:new    ;}
  .st200{clipPath:url(#SVGID_146_);enable-background:new    ;}
  .st201{clipPath:url(#SVGID_148_);enable-background:new    ;}
  .st202{clipPath:url(#SVGID_150_);enable-background:new    ;}
  .st203{clipPath:url(#SVGID_152_);enable-background:new    ;}
  .st204{clipPath:url(#SVGID_154_);enable-background:new    ;}
  .st205{clipPath:url(#SVGID_156_);enable-background:new    ;}
  .st206{clipPath:url(#SVGID_158_);enable-background:new    ;}
  .st207{clipPath:url(#SVGID_160_);enable-background:new    ;}
  .st208{clipPath:url(#SVGID_162_);enable-background:new    ;}
  .st209{clipPath:url(#SVGID_164_);enable-background:new    ;}
  .st210{clipPath:url(#SVGID_166_);enable-background:new    ;}
  .st211{clipPath:url(#SVGID_168_);enable-background:new    ;}
  .st212{clipPath:url(#SVGID_170_);enable-background:new    ;}
  .st213{clipPath:url(#SVGID_172_);enable-background:new    ;}
  .st214{clipPath:url(#SVGID_174_);enable-background:new    ;}
  .st215{clipPath:url(#SVGID_176_);enable-background:new    ;}
  .st216{clipPath:url(#SVGID_178_);enable-background:new    ;}
  .st217{clipPath:url(#SVGID_180_);enable-background:new    ;}
  .st218{clipPath:url(#SVGID_182_);enable-background:new    ;}
  .st219{clipPath:url(#SVGID_184_);enable-background:new    ;}
  .st220{fill:#D3D0B7;}
  .st221{fill:url(#XMLID_613_);}
  .st222{fill:#2B2B2B;}
  .st223{opacity:0.74;fill:url(#XMLID_614_);}
  .st224{opacity:0.4;fill:url(#XMLID_615_);}
  .st225{clipPath:url(#XMLID_616_);fill:url(#XMLID_617_);}
  .st226{clipPath:url(#XMLID_616_);fill:url(#XMLID_618_);}
  .st227{opacity:0.45;clipPath:url(#XMLID_616_);fill:url(#XMLID_619_);}
  .st228{opacity:0.45;clipPath:url(#XMLID_616_);fill:url(#XMLID_620_);}
  .st229{fill:#FFF6E3;}
  .st230{fill:#F71C28;}
  .st231{fill:#E70507;}
  .st232{opacity:0.78;fill:url(#XMLID_621_);}
  .st233{fill:url(#XMLID_622_);}
  .st234{fill:url(#XMLID_623_);}
  .st235{fill:url(#XMLID_624_);}
  .st236{fill:url(#XMLID_625_);}
  .st237{fill:url(#XMLID_646_);}
  .st238{fill:url(#XMLID_647_);}
  .st239{fill:url(#XMLID_648_);}
  .st240{opacity:0.58;fill:url(#XMLID_682_);}
  .st241{fill:url(#XMLID_683_);}
  .st242{fill:url(#XMLID_684_);}
  .st243{fill:url(#XMLID_685_);}
  .st244{fill:url(#XMLID_686_);}
  .st245{fill:url(#XMLID_687_);}
  .st246{fill:url(#XMLID_688_);}
  .st247{fill:url(#XMLID_689_);}
  .st248{fill:url(#XMLID_690_);}
  .st249{fill:url(#XMLID_691_);}
  .st250{fill:url(#XMLID_692_);}
  .st251{fill:url(#XMLID_693_);}
  .st252{fill:url(#XMLID_694_);}
  .st253{fill:url(#XMLID_695_);}
  .st254{fill:url(#XMLID_696_);}
  .st255{fill:url(#XMLID_697_);}
  .st256{fill:url(#XMLID_698_);}
  .st257{fill:url(#XMLID_699_);}
  .st258{fill:url(#XMLID_700_);}
  .st259{fill:url(#XMLID_701_);}
  .st260{fill:url(#XMLID_702_);}
  .st261{fill:url(#XMLID_703_);}
  .st262{fill:url(#XMLID_704_);}
  .st263{fill:url(#XMLID_705_);}
  .st264{fill:url(#XMLID_706_);}
  .st265{fill:url(#XMLID_707_);}
  .st266{fill:url(#XMLID_708_);}
  .st267{fill:url(#XMLID_709_);}
  .st268{fill:url(#XMLID_710_);}
  .st269{fill:url(#XMLID_711_);}
  .st270{fill:url(#XMLID_712_);}
  .st271{fill:url(#XMLID_713_);}
  .st272{fill:url(#XMLID_714_);}
  .st273{fill:url(#XMLID_715_);}
  .st274{fill:url(#XMLID_716_);}
  .st275{fill:url(#XMLID_717_);}
  .st276{fill:url(#XMLID_718_);}
  .st277{fill:url(#XMLID_719_);}
  .st278{fill:url(#XMLID_720_);}
  .st279{fill:url(#XMLID_721_);}
  .st280{fill:url(#XMLID_722_);}
  .st281{fill:url(#XMLID_723_);}
  .st282{fill:url(#XMLID_724_);}
  .st283{fill:url(#XMLID_725_);}
  .st284{fill:url(#XMLID_726_);}
  .st285{fill:url(#XMLID_727_);}
  .st286{fill:url(#XMLID_728_);}
  .st287{fill:url(#XMLID_729_);}
  .st288{fill:url(#XMLID_730_);}
  .st289{fill:url(#XMLID_731_);}
  .st290{fill:url(#XMLID_732_);}
  .st291{fill:url(#XMLID_733_);}
  .st292{fill:url(#XMLID_734_);}
  .st293{fill:url(#XMLID_735_);}
  .st294{fill:url(#XMLID_736_);}
  .st295{fill:url(#XMLID_737_);}
  .st296{opacity:0.62;clipPath:url(#XMLID_738_);fill:url(#XMLID_739_);}
  .st297{opacity:0.84;clipPath:url(#XMLID_740_);fill:url(#XMLID_741_);}
  .st298{opacity:0.84;clipPath:url(#XMLID_740_);fill:url(#XMLID_742_);}
  .st299{fill:url(#XMLID_743_);}
  .st300{opacity:0.86;fill:url(#XMLID_744_);}
  .st301{fill:#FABD9C;}
  .st302{fill:#E7E1C2;}
  .st303{fill:#66BB46;}
  .st304{fill:#149C54;}
  .st305{fill:#002500;}
  .st306{fill:#00A64A;}
  .st307{fill:#002700;}
  .st308{fill:#F89C2B;}
  .st309{fill:#005D29;}
  .st310{fill:#007F37;}
  .st311{fill:#53B144;}
  .st312{fill:#FBAF29;}
  .st313{fill:#F16522;}
  .st314{fill:#DDC2B8;}
  .st315{fill:#521A0F;}
  .st316{fill:#C2BEA5;}
  .st317{fill:#404041;}
  .st318{fill:#4A4A4C;}
  .st319{fill:#A6A8AB;}
  .st320{fill:#E6E7E8;}
  .st321{fill:#545456;}
  .st322{fill:#3E3E3F;}
  .st323{fill:#CD8B1E;}
  .st324{fill:#FFDD15;}
  .st325{fill:#FAA925;}
  .st326{fill:#B97F19;}
  .st327{fill:#EAD6C4;}
  .st328{fill:url(#SVGID_185_);}
  .st329{fill:url(#SVGID_186_);}
  .st330{fill:url(#SVGID_187_);}
  .st331{fill:url(#SVGID_188_);}
  .st332{fill:url(#SVGID_189_);}
  .st333{fill:url(#SVGID_190_);}
  .st334{fill:url(#SVGID_191_);}
  .st335{fill:url(#SVGID_192_);}
  .st336{fill:url(#SVGID_193_);}
  .st337{fill:url(#SVGID_194_);}
  .st338{fill:url(#SVGID_195_);}
  .st339{fill:url(#SVGID_196_);}
  .st340{fill:url(#SVGID_197_);}
  .st341{fill:url(#SVGID_198_);}
  .st342{fill:url(#SVGID_199_);}
  .st343{fill:#75BD38;}
  .st344{fill:#474656;}
  .st345{fill:#E5E5E5;}
  .st346{opacity:0.5;fill:#598E38;}
  .st347{opacity:0.55;fill:#598E38;}
  .st348{fill:#D21B00;}
  .st349{fill:#F65138;}
  .st350{opacity:0.67;fill:#B35C45;}
  .st351{fill:#5C5248;}
  .st352{fill:#51555D;}
  .st353{fill:#F86F5B;}
  .st354{opacity:0.15;}
  ${space}
`;

Svg.defaultProps = {
  color: "text",
  width: "20px",
  xmlns: "http://www.w3.org/2000/svg",
  spin: false,
};

const Icon: React.FC<SvgProps> = (props) => {
  const id = uniqueId("logo");
  return (
    <Svg viewBox="0 0 59 64" {...props}>
      <g clipPath={`url(#clip2021${id})`}>
        <path
          d="M48.3294 11.0393V33.9963L30.0037 23.1167L29.4448 22.7773L28.9258 23.0967L10.141 34.2358V11.0393L0 17.068V50.8247L0.419214 50.5652V50.8247L29.4448 33.577L58.4903 50.8247V40.005V17.068L48.3294 11.0393Z"
          fill="#49A341"/>
        <path d="M29.4448 0L18.7049 6.36806V16.8284H19.723L29.4448 11.0393L39.1865 16.8284H39.5458V5.98877L29.4448 0Z"
          fill="#49A341"/>
        <path
          d="M29.4448 58.1709L19.8827 64L11.0194 57.7517L29.4249 46.5128L47.9701 57.8116L39.0268 64L29.4448 58.1709Z"
          fill="#49A341"/>
        <path
          d="M29.5047 22.8172L29.4448 22.7773L28.9258 23.0967L10.141 34.2358V16.8284H0.419214L0 17.068V50.8247L0.419214 50.5652V50.8247L29.4448 33.577L29.5047 33.617V22.8172Z"
          fill="url(#logo_paint0_linear)"/>
        <path
          d="M48.3294 18.3656V33.9963L30.0038 23.1167L29.5047 22.8173V33.617L58.4903 50.8247V40.005V18.3656H48.3294Z"
          fill="#49A341"/>
        <path
          d="M10.1809 45.0156V34.2158L10.141 34.2358V11.0393L0 17.068V50.8247L0.419214 50.5652V50.8247L10.1809 45.0156Z"
          fill="url(#logo_paint1_linear)"/>
        <path d="M48.3294 33.9963L48.2495 33.9364V44.7361L58.4903 50.8247V40.005V17.068L48.3294 11.0393V33.9963Z"
          fill="url(#logo_paint2_linear)"/>
        <path d="M29.2452 0.119751L18.7049 6.36803V16.8284H19.723L29.2452 11.1591V0.119751Z"
          fill="url(#logo_paint3_linear)"/>
        <path d="M29.5047 46.5527L29.4249 46.5128L11.0194 57.7517L19.8827 64L29.4448 58.1709L29.5047 58.1909V46.5527Z"
          fill="url(#logo_paint4_linear)"/>
      </g>
      <defs>
        <linearGradient id="logo_paint0_linear" x1="-7.25619" y1="38.2489" x2="26.9936" y2="18.4747"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#49A341"/>
          <stop offset="0.4294" stopColor="#4BA543"/>
          <stop offset="0.6118" stopColor="#52AA4A"/>
          <stop offset="0.7474" stopColor="#5FB455"/>
          <stop offset="0.8598" stopColor="#70C166"/>
          <stop offset="0.9568" stopColor="#87D37B"/>
          <stop offset="1" stopColor="#94DD87"/>
        </linearGradient>
        <linearGradient id="logo_paint1_linear" x1="5.08586" y1="11.0459" x2="5.08586" y2="50.8171"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#A9F99D"/>
          <stop offset="0.0143" stopColor="#A3F498"/>
          <stop offset="0.096" stopColor="#87DB7D"/>
          <stop offset="0.1886" stopColor="#70C667"/>
          <stop offset="0.2946" stopColor="#5FB656"/>
          <stop offset="0.4226" stopColor="#52AB4A"/>
          <stop offset="0.5948" stopColor="#4BA543"/>
          <stop offset="1" stopColor="#49A341"/>
        </linearGradient>
        <linearGradient id="logo_paint2_linear" x1="53.3629" y1="11.0459" x2="53.3629" y2="50.8171"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#A9F99D"/>
          <stop offset="0.0143" stopColor="#A3F498"/>
          <stop offset="0.096" stopColor="#87DB7D"/>
          <stop offset="0.1886" stopColor="#70C667"/>
          <stop offset="0.2946" stopColor="#5FB656"/>
          <stop offset="0.4226" stopColor="#52AB4A"/>
          <stop offset="0.5948" stopColor="#4BA543"/>
          <stop offset="1" stopColor="#49A341"/>
        </linearGradient>
        <linearGradient id="logo_paint3_linear" x1="29.242" y1="8.47089" x2="18.7079" y2="8.47089"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#94DD87"/>
          <stop offset="0.0432" stopColor="#87D37B"/>
          <stop offset="0.1402" stopColor="#70C166"/>
          <stop offset="0.2526" stopColor="#5FB455"/>
          <stop offset="0.3882" stopColor="#52AA4A"/>
          <stop offset="0.5706" stopColor="#4BA543"/>
          <stop offset="1" stopColor="#49A341"/>
        </linearGradient>
        <linearGradient id="logo_paint4_linear" x1="29.4951" y1="55.2572" x2="11.011" y2="55.2572"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#94DD87"/>
          <stop offset="0.0469" stopColor="#84D178"/>
          <stop offset="0.1306" stopColor="#6EC064"/>
          <stop offset="0.2295" stopColor="#5DB354"/>
          <stop offset="0.3519" stopColor="#52AA49"/>
          <stop offset="0.5235" stopColor="#4BA443"/>
          <stop offset="1" stopColor="#49A341"/>
        </linearGradient>
        <clipPath id={`clip2021${id}`}>
          <rect width="58.4903" height="64" fill="white"/>
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
