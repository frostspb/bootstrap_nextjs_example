
import Head from '../components/head'
import Page from '../layouts/main'

import { Card, CardText, CardHeader, CardBody, Button } from 'reactstrap';

export default () => (
  <Page>
    <div>
      <Head title="Bootstrap in Next.js" />

      <Card>
        <CardBody>
            <CardHeader>Hello Next.js!</CardHeader>
            <br/>
            <CardText>Bootstrap 4 power!</CardText>
            <Button color="danger">OK</Button>
        </CardBody>
      </Card>

    </div>
  </Page>
)
