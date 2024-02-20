import React from 'react';

import styled from 'styled-component';
import banner2 from '../shared/banner2.png';
import { history } from "../redux/configureStore";

const Banner2 = () => {
    return (
        <React.Fragment>
            {/*배너2*/}
            <div style={{padding : "6rem 0"}}>
                <DIV>
                    <Image></Image>

                    <div style = {{ flexDirection: "column", margin : "20px"}}>
                        <H1>
                            OUR TOWN
                            <br />
                            중고 직거래 마켓
                        </H1>
                        <P>동네 주민들과 따뜻한 거래 경험해보세요</P>
                        <div style={{ marginTop: "3.2rem"}}>
                            {/*버튼 2개는 link로 컴포턴트 만든 것 연결*/}
                            <Button
                                onClick={() => {
                                    history.push("/list");
                                }}
                            >
                                인기매물 보기
                            </Button>
                            <A href="https://www.daangn.com/trust"></A>
                        </div>
                    </div>
                </DIV>
            </div>
        </React.Fragment>
    )
}

export default Banner2;

const DIV = styled.div`
    width: 1024px
    margin: 0 auto
    display: flex
    align-items: center
    justify-content: space-between;
`;

const Image = styled.div`
  background-image: url(${banner2});
  background-size: 532px 684px;
  width: 532px;
  height: 684px;
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  line-height: 1.35;
  margin-bottom: 2.4rem;
  font-weight: 800;
`;

const P = styled.p`
  font-size: 17px !important;
  line-height: 1.5;
  letter-spacing: -0.3px;
  margin: 0px;
`;

const A = styled.a`
    background-color : #f1f3f5;
    color : #212529;
    border: none;
    border-radius: none;
    text-decoration: none;
    padding 15px 20px;
    display: inline-block;
    font-size : 18px;
    font-weight : 900;
    maring : 0px 10px;
`;

const Button = styled.Button`
    background-color: #f1f3f5;
    color: #212529
    border: none
    border-radius: 6px
    text-decoration: none
    padding: 15px 20px
    display: inline-block
    font-size: 18px
    font-weight: 900
    margin: 0px 10px
`;
    