import { Layout, Row, Col, Button, List,Tooltip, Avatar } from "antd";
import { FacebookFilled,InstagramFilled,RedditCircleFilled, YoutubeFilled, TwitterCircleFilled } from "@ant-design/icons";
import { useMemo,useState  } from 'react';
import {config} from '../../../config'

const { Footer } = Layout;


const assetUrl = config.client.url+":"+config.client.port+"/assets"
const payments = [
  {
    name:"Visa",
    path: assetUrl+"/images/payment/visa.png"
  },{
    name:"MasterCard",
    path: assetUrl+"/images/payment/mastercard.png"
  },{
    name:"JCB",
    path: assetUrl+"/images/payment/jcb.png"
  },{
    name:"AmericanExpress",
    path: assetUrl+"/images/payment/ae.png"
  },{
    name:"CashOnDelivery",
    path: assetUrl+"/images/payment/cod.png"
  },{
    name:"PayLater",
    path: assetUrl+"/images/payment/tragop.png"
  }
]
const shippings = [
  {
    name:"BestExpress",
    path: assetUrl+"/images/shipping/bestexpress.png"
  },{
    name:"BeExpress",
    path: assetUrl+"/images/shipping/beexpress.png"
  },{
    name:"GiaoHangNhanh",
    path: assetUrl+"/images/shipping/ghn.jfif"
  },{
    name:"GiaoHangTietKiem",
    path: assetUrl+"/images/shipping/ghtk.png"
  },{
    name:"Grab",
    path: assetUrl+"/images/shipping/grab.png"
  },{
    name:"J&TExpress",
    path: assetUrl+"/images/shipping/jt.png"
  },{
    name:"NinjaVan",
    path: assetUrl+"/images/shipping/ninjavan.png"
  },{
    name:"VietnamPost",
    path: assetUrl+"/images/shipping/vietnampost.png"
  },{
    name:"ViettelPost",
    path: assetUrl+"/images/shipping/viettelpost.png"
  }
]
const refs = [
  {
    name:"Facebook",
    color:"#1877f2",
    element: (<FacebookFilled />)
  },{
    name:"Instagram",
    color:"#5851DB",
    element: (<InstagramFilled />)
  },{
    name:"Reddit",
    color:"#ff5700",
    element: (<RedditCircleFilled />)
  },{
    name:"Youtube",
    color:"#FF0000",
    element: (<YoutubeFilled />)
  },{
    name:"Twitter",
    color:"#1da1f2",
    element: (<TwitterCircleFilled />)
  }
]

const Footers = () => {
  const options = ['Show', 'Hide', 'Center'];
  const [arrow, setArrow] = useState('Show');
  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }
    if (arrow === 'Show') {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      <Row  style={{alignItems:"flex-start", justifyContent:"center"}}>
        <Col lg={2}></Col>
        <Col lg={4} style={{display:"block"}}>
          <div>
            <h3>CUSTOMER SERVICE</h3>
            <Button type="Link" style={{height:"24px"}} block>Help Centre</Button>
            <Button type="Link" style={{height:"24px"}} block>BuBu Blog</Button>
            <Button type="Link" style={{height:"24px"}} block>BuBu Mall</Button>
            <Button type="Link" style={{height:"24px"}} block>How To Buy</Button>
            <Button type="Link" style={{height:"24px"}} block>How To Sell</Button>
            <Button type="Link" style={{height:"24px"}} block>Payment</Button>
            <Button type="Link" style={{height:"24px"}} block>BuBu Mora</Button>
            <Button type="Link" style={{height:"24px"}} block>Shipping</Button>
            <Button type="Link" style={{height:"24px"}} block>Return & Refund</Button>
            <Button type="Link" style={{height:"24px"}} block>Contact Us</Button>
            <Button type="Link" style={{height:"24px"}} block>Warranty Policy</Button>
          </div>
        </Col>
        <Col lg={4} style={{display:"block"}}>
        <div>
            <h3>ABOUT BUBU</h3>
            <Button type="Link" style={{height:"24px"}} block>About Us</Button>
            <Button type="Link" style={{height:"24px"}} block>BuBu Careers</Button>
            <Button type="Link" style={{height:"24px"}} block>BuBu Policies</Button>
            <Button type="Link" style={{height:"24px"}} block>Privacy Policy</Button>
            <Button type="Link" style={{height:"24px"}} block>BuBu Mall</Button>
            <Button type="Link" style={{height:"24px"}} block>Seller Centre</Button>
            <Button type="Link" style={{height:"24px"}} block>Flash Deals</Button>
            <Button type="Link" style={{height:"24px"}} block>Ambassador Prog.</Button>
            <Button type="Link" style={{height:"24px"}} block>Media Contact</Button>
          </div>
        </Col>
        <Col lg={4} style={{display:"block"}}>
          <div>
            <h3>PAYMENT</h3>
            <List
              grid={{
                gutter: 16,
                xs: 6,
                sm: 6,
                md: 6,
                lg: 3,
                xl: 3,
                xxl: 3,
              }}
              dataSource={payments}
              renderItem={(item) => (
                <List.Item
                  style={{
                    height: "24px"
                  }}>
                  <Tooltip placement="top" title={item.name} arrow={mergedArrow}>
                    <img 
                      style={{
                        border: "1.6px solid #aaa",
                        paddingBlock: "6.4px",
                        borderRadius: "5px"
                      }} 
                      src={item.path}
                    />
                  </Tooltip>
                </List.Item>
              )}
            />
          </div>
          <div>
              <h3>LOGISTICS</h3>
              <List
                grid={{
                  gutter: 16,
                  xs: 6,
                  sm: 6,
                  md: 6,
                  lg: 3,
                  xl: 3,
                  xxl: 3,
                }}
                dataSource={shippings}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      height: "24px"
                    }}>
                    <Tooltip placement="top" title={item.name} arrow={mergedArrow}>
                      <img 
                        style={{
                          border: "1.6px solid #aaa",
                          paddingBlock: "6.4px",
                          borderRadius: "5px"
                        }} 
                        src={item.path}
                      />
                    </Tooltip>
                  </List.Item>
                )}
              />
          </div>
        </Col>
        <Col lg={4} style={{display:"block"}}>
        <div>
            <h3 style={{textAlign:"center"}}>FOLLOW US</h3>
            <List
              
              grid={{
                gutter: 16,
                xs: 2,
                sm: 3,
                md: 3,
                lg: 1,
                xl: 1,
                xxl: 1,
              }}
              dataSource={refs}
              renderItem={(item) => (
                <List.Item
                  style={{
                    height: "28px"
                  }}>
                    <Row
                      style={{
                        alignItems:"center"
                      }}>
                      <Col span={4} offset={4} style={{textAlign:"right"}}>
                        <Avatar 
                          style={{
                            color:`${item.color?item.color:"black"}`, 
                            border: "1.6px solid #aaa",
                            backgroundColor:"transparent"
                          }} 
                          icon={item.element} 
                        />
                      </Col>
                      <Col span={14} offset={2} style={{textAlign:"left"}}>{item.name}</Col>
                    </Row>
                </List.Item>
              )}
            />
           
          </div>
        </Col>
        <Col lg={4} style={{display:"block"}}>
        <div>
            <h3>MULTIPLATFORM</h3>
            <Row>
              <Col span={12}>
                <img 
                  src={assetUrl+"/images/QR/rr.png"} 
                  style={{
                    width:"64px"
                  }} 
                />
              </Col>
              <Col span={12}>
                <List
                  grid={{
                    column:1
                  }}
                >
                  <List.Item>
                    <img src={assetUrl+"/images/platform/appgallery.png"} />
                  </List.Item>
                  <List.Item>
                    <img src={assetUrl+"/images/platform/appstore.png"} />
                  </List.Item>
                  <List.Item>
                    <img src={assetUrl+"/images/platform/googleplaystore.png"} />
                  </List.Item>
                </List>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={2}></Col>
      </Row>
      
    </Footer>
  );
};
export default Footers;
