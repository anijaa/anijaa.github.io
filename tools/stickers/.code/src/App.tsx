import React, { useRef, useState } from 'react';
import { Button, Divider, Form, Grid, Header, Icon, Ref, Segment, TextArea } from 'semantic-ui-react';
import Page from './Page';

type Props = React.Props<any>;

const regex = /\[(\d+)\]/g;

function convert(input: string) {
    const result: string[] = [];

    input.replace(regex, (_, int) => {
        result.push(int);
        return '';
    });

    return result.join(', ');
}

function App({ ...props }: Props) {
    const [value, setValue] = useState();
    const inputRef = useRef(null);

    return (
        <Page>
            <Header as="h2" color="teal" textAlign="center">
                Convert to CSV
            </Header>
            <Segment raised>
                <Grid columns={2} relaxed="very" stackable>
                    <Grid.Column>
                        <Form>
                            <Ref innerRef={inputRef}>
                                <Form.Field id="form-input-control-sticker-manager" control={TextArea} label="Sticker Manager Format" placeholder="e.g. [1] [2] [5]" rows={10} />
                            </Ref>

                            <Button
                                content="Convert"
                                icon="recycle"
                                onClick={() => {
                                    const textarea = inputRef?.current?.querySelector('textarea');
                                    const result = convert(textarea?.value || '');

                                    setValue(result);
                                }}
                            />
                        </Form>
                    </Grid.Column>

                    <Grid.Column verticalAlign="middle">
                        <Segment placeholder>{value}</Segment>
                    </Grid.Column>
                </Grid>

                <Divider vertical>
                    <Icon name="angle double right" />
                </Divider>
            </Segment>
        </Page>
    );
}

export default App;
