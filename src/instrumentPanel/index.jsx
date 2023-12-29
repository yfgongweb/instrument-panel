import EchartsLine from "./chart/EchartsLine";
import {
    CaretDownOutlined,
    FullscreenOutlined,
} from '@ant-design/icons';
import { Radio, DatePicker, Col, Row } from 'antd';
import './inedx.css'
export default function InstrumentPanel() {
    return (<div className="instrument_panel_box">
        <p className="title">风力发电仪表盘</p>
        <div className="instrument_panel_border">
            <div className="select_flex">
                <p className="select_title">一号电站<CaretDownOutlined className="ml4" /></p>
                <FullscreenOutlined className="magnifying_icon" />
            </div>
            <div className="filter_box">
                <span className="mr15" style={{marginRight:'30px'}}>
                    时间
                </span>
                <Radio.Group className="radio_style mr15" defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">本月</Radio.Button>
                    <Radio.Button value="b">本周</Radio.Button>
                    <Radio.Button value="c">本日</Radio.Button>
                </Radio.Group>
                <DatePicker className='DatePicker_style mr15' bordered={false} />
            </div>
            <Row>
                <Col span={8}>
                    <p className="value_style">500</p>
                    <p className="value_tip">最高发电量</p>
                </Col>
                <Col span={8}>
                    <p className="value_style">300</p>
                    <p className="value_tip">最低发电量</p>
                </Col><Col span={8}>
                    <p className="value_style">异常</p>
                    <p className="value_tip">状态</p>
                </Col>
            </Row>
            <EchartsLine />
        </div>
    </div>)
}