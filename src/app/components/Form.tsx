'use client'
import Script from 'next/script'
import { Button, Col, Form, Input, InputNumber, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';

function From(props: any) {
    const { styles } = props

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        firstname?: string;
        lastname?: string;
        email?: string;
        number?: number;
        descreption?: string;
    };

    return (
        <div className={styles.right}>
            <Form name="contact_form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                <Row gutter={10} className={styles.row_block}>
                    <Col span={12}>
                        <Form.Item<FieldType>
                            name="firstname"
                            rules={[{ required: true, message: 'Please input your First Name!' }]}
                        >
                            <Input placeholder="First Name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item<FieldType>
                            name="lastname"
                            rules={[{ required: true, message: 'Please input your Last Name!' }]}
                        >
                            <Input placeholder="Last Name" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={10} className={styles.row_block}>
                    <Col span={12}>
                        <Form.Item<FieldType>
                            name="email"
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item<FieldType>
                            name="number"
                            rules={[{ required: true, message: 'Please input your Phone No!' }]}
                        >
                            <InputNumber className={styles.antinputnumber} min='1' placeholder="Phone No" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row className={styles.row_block}>
                    <Col span={24}>
                        <Form.Item<FieldType>
                            name="descreption"
                            rules={[{ required: true, message: 'Please input your Message!' }]}
                        >
                            <TextArea placeholder="Message" />
                        </Form.Item>
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                    Send Message
                </Button>
            </Form>
        </div>
    )
}

export default From;