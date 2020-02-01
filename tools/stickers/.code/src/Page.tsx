import React from 'react';
import { Card, Grid, Header } from 'semantic-ui-react';

type Props = React.ComponentProps<any>;

function Page({ children, ...props }: Props) {
    return (
        <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle" padded>
            <Grid.Column style={{ maxWidth: 850 }} {...props}>
                {children}
            </Grid.Column>
        </Grid>
    );
}

export default Page;
