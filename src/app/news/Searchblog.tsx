import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'

function Searchblog(props: any) {
    const { styles } = props
    return (
        <div className={styles.widget_container}>
            <Form name="search_form">
                <Row>
                    <Col span={24}>
                        <Input placeholder="Search your keyword..." />
                    </Col>
                </Row>


                <Button type="primary" htmlType="submit">
                    search
                </Button>
            </Form>
        </div>
    )
}

export default Searchblog