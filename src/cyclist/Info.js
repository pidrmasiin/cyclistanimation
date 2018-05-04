import React from 'react'
import './css/App.css'
import { Grid, Image, Header, Form, Message, Button } from 'semantic-ui-react'
import Circle from './Circle.js'

class Info extends React.Component {
  
    render() {


        return (
            <div className="test">
                <Grid className='container'>
                    <Grid.Row>
                    </Grid.Row>
                    <Grid.Row>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={5}>
                        </Grid.Column>
                        <Grid.Column className='circleBase type3' width={6}>
                            <Image src="http://liiteri.net/wp-content/uploads/2017/12/Liiteri-logo_700x300.png" alt="logo" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <Header>
                              Onnittelut! Autot Villeä selviämään hankaluuksista.
                               Nyt meidän on aika auttaa sinua. 
                               Tuo rikkinäiset tavarasi Liiteriin niin me järjestämme niiden korjauksen puolestasi</Header>
                            <br/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row verticalAlign='top'>
                        <Grid.Column width={7}>
                            <Circle
                                head='24/7'
                                description='Tuo tavarasi huoltoon juuri silloin kuin sinulle sopii'
                                text='Olemme aina auki ja järjestämme huollon puolestasi. Koska vain, milloin vain, aina helppoa.'
                                color='pink'
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column width={9}>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Circle
                                head='Pysy liikkeessä!'
                                description='Jätä korjattava tuote Liiteriin ja ota alle sähköpyörä'
                                text='Liiterit sijaitsevat liikenteen solmukohdissa. Olet sitten matkalla töihin tai kauppaan, poikkea Liiteriin'
                                color='#ccffff'
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row verticalAlign='bottom'>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Circle
                                head='Mikä Liiteri?'
                                description='Liiteri tarjoaa kestävän elämäntavan palveluna'
                                text='Säästät tilaa ja ympäristöä'
                                color='#ffff66'
                            />
                        </Grid.Column>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Form success>
                                <Form.Field>
                                    <label>Numero</label>
                                    <input placeholder='404-12456879' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Sähköposti</label>
                                    <input placeholder='meikä@mandoliini.fi' />
                                </Form.Field>
                                <Message
                                    success
                                    header='Teit hyvän päätöksen!'
                                    content="Otamme sinuun yhteyttä mahdollisimman pian."
                                />
                                <Button positive>Hyväksy</Button>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Info
