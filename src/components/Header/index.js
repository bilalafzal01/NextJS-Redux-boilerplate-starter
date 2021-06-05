/* eslint-disable no-unused-vars */
import { Col, Drawer, Image } from "antd";
import React, { useState } from "react";
import { useRouter } from "next/router";
import FeatherIcon from "feather-icons-react";
import styled from "styled-components";
import { ICOLOR, NAVS, SIZE } from "constants";
import { CustomButton } from "components/Reusable/Buttons";
import NavItem from "./NavItem";
import useViewPort from "hooks/useViewport";
import { CustomRow } from "components/Reusable/Utilities";

const Root = styled.nav`
  background-color: ${ICOLOR.white};
  box-shadow: 0px 2px 5px #99999929;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 47px;
  height: 90px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-family: "Poppins-SemiBold";
    margin-left: 1rem;
    margin-bottom: 0;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const Right = styled.div`
  display: flex;
`;

const NavBar = styled.div`
  display: flex;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 40px;

  @media screen and (max-width: ${SIZE.XL}px) {
    margin-left: 0px;
  }
  @media screen and (max-width: ${SIZE.LG}px) {
    margin-left: 0;
    flex-direction: column;
    align-items: flex-start;
  }
`;

function LargeHeader() {
  const router = useRouter();

  return (
    <Root>
      <Container>
        <Left onClick={() => router.push(`/`)}>
          <Image src="/static/docs_icon.svg" width={50} preview={false} />
          <h1>NextJS</h1>
        </Left>
        <Right>
          <NavBar>
            {NAVS?.map((item) => {
              const { id, label, link } = item;
              return <NavItem {...{ id, label, link }} key={id} />;
            })}
          </NavBar>
        </Right>
        <Buttons>
          <CustomButton
            borderRadius
            marginLeft="36px"
            background={ICOLOR.orange}
            textColor={ICOLOR.white}
          >
            <span>Star me!</span>
          </CustomButton>
          <CustomButton
            borderRadius
            marginLeft="5px"
            background={ICOLOR.white}
            textColor={ICOLOR.dark}
          >
            <span>FORK</span>
          </CustomButton>
        </Buttons>
      </Container>
    </Root>
  );
}

function SmallHeader() {
  const router = useRouter();
  const [siderShow, setSiderShow] = useState(false);
  return (
    <Root>
      <Container>
        <Left onClick={() => router.push(`/`)}>
          <Image src="/static/docs_icon.svg" width={50} preview={false} />
          <h1>Docs</h1>
        </Left>
        <Right>
          <CustomButton onClick={() => setSiderShow(!siderShow)}>
            <FeatherIcon icon="menu" fill="black" />
          </CustomButton>
        </Right>
        <Drawer
          title={null}
          placement="right"
          closable
          onClose={() => setSiderShow(false)}
          visible={siderShow}
        >
          <CustomRow marginbottom="1rem">
            <Col span={24}>
              <CustomButton
                borderRadius
                marginLeft="36px"
                background={ICOLOR.orange}
                textColor={ICOLOR.white}
              >
                <span>New Document</span>
              </CustomButton>
            </Col>
          </CustomRow>
          <CustomRow marginbottom="1rem">
            <Col span={24}>
              <CustomButton
                borderRadius
                marginLeft="5px"
                background={ICOLOR.white}
                textColor={ICOLOR.dark}
              >
                <span>Code</span>
              </CustomButton>
            </Col>
          </CustomRow>
        </Drawer>
      </Container>
    </Root>
  );
}

const CustomHeader = () => {
  const windowSize = useViewPort();
  return windowSize.width >= SIZE.LG ? <LargeHeader /> : <SmallHeader />;
};

export default CustomHeader;
