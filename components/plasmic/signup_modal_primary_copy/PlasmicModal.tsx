// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b49KPkrvPCTnVu1XmBGo7j
// Component: slSA6sUqiuP
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
import LinkButton from "../../LinkButton"; // plasmic-import: A-pG0ArFz_G/component

import { useScreenVariants as useScreenVariantsu1EX599HxQn } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: u1eX599HxQN/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_signup_modal_primary_copy.module.css"; // plasmic-import: b49KPkrvPCTnVu1XmBGo7j/projectcss
import sty from "./PlasmicModal.module.css"; // plasmic-import: slSA6sUqiuP/css

export type PlasmicModal__VariantMembers = {};

export type PlasmicModal__VariantsArgs = {};
type VariantPropType = keyof PlasmicModal__VariantsArgs;
export const PlasmicModal__VariantProps = new Array<VariantPropType>();

export type PlasmicModal__ArgsType = {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  beforeSignup?: React.ReactNode;
};

type ArgPropType = keyof PlasmicModal__ArgsType;
export const PlasmicModal__ArgProps = new Array<ArgPropType>(
  "heading",
  "description",
  "beforeSignup"
);

export type PlasmicModal__OverridesType = {
  root?: p.Flex<"div">;
  email?: p.Flex<"input">;
  signupButton?: p.Flex<typeof LinkButton>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  highlightImage?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultModalProps {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  beforeSignup?: React.ReactNode;
  className?: string;
}

function PlasmicModal__RenderFunc(props: {
  variants: PlasmicModal__VariantsArgs;
  args: PlasmicModal__ArgsType;
  overrides: PlasmicModal__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsu1EX599HxQn()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.column___3XdA4)}>
        <div className={classNames(projectcss.all, sty.freeBox__q4LoC)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__otmzj)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "How about 10% off?",
              value: args.heading,
              className: classNames(sty.slotTargetHeading)
            })}

            {p.renderPlasmicSlot({
              defaultContents: "Sign up to save on your first order",
              value: args.description
            })}

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__n0ZYx)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__sbfBg)}>
                <input
                  data-plasmic-name={"email"}
                  data-plasmic-override={overrides.email}
                  className={classNames(
                    projectcss.all,
                    projectcss.input,
                    sty.email
                  )}
                  placeholder={"Email Address" as const}
                  size={1 as const}
                  type={"text" as const}
                  value={"" as const}
                />
              </div>

              <LinkButton
                data-plasmic-name={"signupButton"}
                data-plasmic-override={overrides.signupButton}
                className={classNames("__wab_instance", sty.signupButton)}
                href={"#" as const}
              />
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__x2Aeo)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Already have an account?",
                value: args.beforeSignup,
                className: classNames(sty.slotTargetBeforeSignup)
              })}

              <p.PlasmicLink
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link
                )}
                component={Link}
                href={"#" as const}
                platform={"nextjs"}
              >
                {"Sign in"}
              </p.PlasmicLink>
            </p.Stack>
          </p.Stack>
        </div>
      </div>

      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <div className={classNames(projectcss.all, sty.column__bw0Eb)}>
          <p.PlasmicImg
            data-plasmic-name={"highlightImage"}
            data-plasmic-override={overrides.highlightImage}
            alt={""}
            className={classNames(sty.highlightImage)}
            displayHeight={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? ("148px" as const)
                : ("100%" as const)
            }
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"100%" as const}
            src={{
              src: "/plasmic/signup_modal_primary_copy/images/demoImage.jpeg",
              fullWidth: 1424,
              fullHeight: 1978,
              aspectRatio: undefined
            }}
          />
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "email", "signupButton", "link", "highlightImage"],
  email: ["email"],
  signupButton: ["signupButton"],
  link: ["link"],
  highlightImage: ["highlightImage"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  email: "input";
  signupButton: typeof LinkButton;
  link: "a";
  highlightImage: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicModal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicModal__VariantsArgs;
    args?: PlasmicModal__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicModal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicModal__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicModal__ArgProps,
      internalVariantPropNames: PlasmicModal__VariantProps
    });

    return PlasmicModal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicModal";
  } else {
    func.displayName = `PlasmicModal.${nodeName}`;
  }
  return func;
}

export const PlasmicModal = Object.assign(
  // Top-level PlasmicModal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    email: makeNodeComponent("email"),
    signupButton: makeNodeComponent("signupButton"),
    link: makeNodeComponent("link"),
    highlightImage: makeNodeComponent("highlightImage"),

    // Metadata about props expected for PlasmicModal
    internalVariantProps: PlasmicModal__VariantProps,
    internalArgProps: PlasmicModal__ArgProps
  }
);

export default PlasmicModal;
/* prettier-ignore-end */
