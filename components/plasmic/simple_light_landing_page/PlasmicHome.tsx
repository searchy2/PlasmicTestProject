// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pe9Zx7A91nx77QMfLiKwD
// Component: zlHPe3CP2d8
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: 1hDB2iF1uu9/component
import TopSection from "../../TopSection"; // plasmic-import: BFy4g_2JJp_/component
import Section from "../../Section"; // plasmic-import: YmEkrS8oLm8/component
import FeatureCard from "../../FeatureCard"; // plasmic-import: Vqls-WO8FjU/component
import Testimonial from "../../Testimonial"; // plasmic-import: ypmftvh6VAti/component
import HomeCta from "../../HomeCta"; // plasmic-import: mChVE37Qy1f/component
import Footer from "../../Footer"; // plasmic-import: BFEvheJ68r2/component

import { useScreenVariants as useScreenVariantswMElkBnuSBnk } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: wMElkBnuSBnk/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: pe9Zx7A91nx77QMfLiKwD/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: zlHPe3CP2d8/css

import LightningIcon from "./icons/PlasmicIcon__Lightning"; // plasmic-import: X5hGqJai_jfn/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: H8j8mjfhuvgG/icon
import PencilIcon from "./icons/PlasmicIcon__Pencil"; // plasmic-import: fbEukJ3kt8ph/icon
import SwapIcon from "./icons/PlasmicIcon__Swap"; // plasmic-import: Jx0x7TRBFgAS/icon
import SlotIcon from "./icons/PlasmicIcon__Slot"; // plasmic-import: YreJgU_2pnro/icon
import CycleIcon from "./icons/PlasmicIcon__Cycle"; // plasmic-import: sSiDX7zixiiE/icon
import FacebookLogoIcon from "./icons/PlasmicIcon__FacebookLogo"; // plasmic-import: 6fHVNvP83tOp/icon
import TinderLogoIcon from "./icons/PlasmicIcon__TinderLogo"; // plasmic-import: EENykJ-uIpHk/icon
import AirbnbLogoIcon from "./icons/PlasmicIcon__AirbnbLogo"; // plasmic-import: 6J2BsgGo8FCf/icon
import HubspotLogoIcon from "./icons/PlasmicIcon__HubspotLogo"; // plasmic-import: 0Czax9lmbl_z/icon
import AmazonLogoIcon from "./icons/PlasmicIcon__AmazonLogo"; // plasmic-import: YnEuPwfp6b04/icon

export type PlasmicHome__VariantMembers = {};

export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  topSection?: p.Flex<typeof TopSection>;
  testimonial?: p.Flex<typeof Testimonial>;
  homeCta?: p.Flex<typeof HomeCta>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomeProps {}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantswMElkBnuSBnk()
  });

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_library_plasmic_color_type_css.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox___64XBh)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__liJig)}
            >
              <Header
                data-plasmic-name={"header"}
                data-plasmic-override={overrides.header}
                className={classNames("__wab_instance", sty.header)}
              />

              <TopSection
                data-plasmic-name={"topSection"}
                data-plasmic-override={overrides.topSection}
                className={classNames("__wab_instance", sty.topSection)}
              />

              <Section
                className={classNames("__wab_instance", sty.section__tYXp)}
                subtitle={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ujnsJ
                    )}
                  >
                    {
                      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                    }
                  </div>
                }
                title={"Explore the solutions"}
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___5JFq4)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__yVbHh)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__iAotx
                    )}
                  >
                    {"Powerful suite of tools"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nPmc1
                    )}
                  >
                    {
                      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                    }
                  </div>

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__lAfnh
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <LightningIcon
                        className={classNames(projectcss.all, sty.svg__eG21C)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard___7DOUm
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <HammerIcon
                        className={classNames(projectcss.all, sty.svg__sEOo8)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple Ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__kFqHw
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <PencilIcon
                        className={classNames(projectcss.all, sty.svg__mNCny)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple Ecosystem"}
                  />
                </p.Stack>

                <div className={classNames(projectcss.all, sty.freeBox__mnQt7)}>
                  <img
                    alt={""}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img__ymd8A
                    )}
                    src={
                      "/plasmic/simple_light_landing_page/images/simpleProject.png"
                    }
                  />

                  <img
                    alt={""}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img__pLcjb
                    )}
                    src={"/plasmic/simple_light_landing_page/images/task.png"}
                  />
                </div>
              </p.Stack>
            </p.Stack>
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__udHud)}>
            <div className={classNames(projectcss.all, sty.freeBox__gaz73)} />

            <div className={classNames(projectcss.all, sty.freeBox__oW8TR)}>
              <div className={classNames(projectcss.all, sty.freeBox__hqFOl)}>
                <Section
                  className={classNames("__wab_instance", sty.section__z5Az)}
                  subtitle={
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                  }
                  title={"How Simple works"}
                />

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__g1It1)}
                >
                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard___2GzAh
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <SwapIcon
                        className={classNames(projectcss.all, sty.svg__aXyr3)}
                        role={"img"}
                      />
                    }
                    title={"Initial Contact"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__wq1N
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <SlotIcon
                        className={classNames(projectcss.all, sty.svg__mo5Bo)}
                        role={"img"}
                      />
                    }
                    title={"Discovery Session"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__yG7Ft
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <CycleIcon
                        className={classNames(projectcss.all, sty.svg__somww)}
                        role={"img"}
                      />
                    }
                    title={"Contracting"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__edxKq
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <HammerIcon
                        className={classNames(projectcss.all, sty.svg__gagNo)}
                        role={"img"}
                      />
                    }
                    title={"Fast Prototyping"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__zXt6Z
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <PencilIcon
                        className={classNames(projectcss.all, sty.svg__mrg7K)}
                        role={"img"}
                      />
                    }
                    title={"Design Phase"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__mGiYe
                    )}
                    description={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }
                    iconFront={
                      <LightningIcon
                        className={classNames(projectcss.all, sty.svg___8UaFt)}
                        role={"img"}
                      />
                    }
                    title={"Develop & Launch"}
                  />
                </p.Stack>
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox___0WxZx)} />
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__qyn66)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__tnlp)}
            >
              <Section
                className={classNames("__wab_instance", sty.section__o2Toa)}
                subtitle={
                  "Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis."
                }
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__mm5La)}
              >
                <FacebookLogoIcon
                  className={classNames(projectcss.all, sty.svg__uic95)}
                  role={"img"}
                />

                <TinderLogoIcon
                  className={classNames(projectcss.all, sty.svg__z0Wcr)}
                  role={"img"}
                />

                <AirbnbLogoIcon
                  className={classNames(projectcss.all, sty.svg__uedu7)}
                  role={"img"}
                />

                <HubspotLogoIcon
                  className={classNames(projectcss.all, sty.svg__fjEv)}
                  role={"img"}
                />

                <AmazonLogoIcon
                  className={classNames(projectcss.all, sty.svg__qdtNf)}
                  role={"img"}
                />
              </p.Stack>

              <Testimonial
                data-plasmic-name={"testimonial"}
                data-plasmic-override={overrides.testimonial}
                className={classNames("__wab_instance", sty.testimonial)}
              />

              <HomeCta
                data-plasmic-name={"homeCta"}
                data-plasmic-override={overrides.homeCta}
                className={classNames("__wab_instance", sty.homeCta)}
              />

              <Footer
                data-plasmic-name={"footer"}
                data-plasmic-override={overrides.footer}
                className={classNames("__wab_instance", sty.footer)}
              />
            </p.Stack>
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "topSection", "testimonial", "homeCta", "footer"],
  header: ["header"],
  topSection: ["topSection"],
  testimonial: ["testimonial"],
  homeCta: ["homeCta"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  topSection: typeof TopSection;
  testimonial: typeof Testimonial;
  homeCta: typeof HomeCta;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHome__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    testimonial: makeNodeComponent("testimonial"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
