import * as React from 'react';
import { useStyletron } from 'baseui';
import { Grid, Cell } from 'baseui/layout-grid';
import Tags from "./tags"

export default () => (


    <Grid>

        <Cell span={[6, 8, 10]}>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: "white",
                padding: '.25rem',
                marginTop: 20
            }}>
                <span role="img" aria-label="sheep" style={{ fontSize: 200 }}>🐱‍💻</span>

            </div>

        </Cell>

        <Cell span={[3, 3, 3]}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: "white",
                padding: '.25rem',
                marginTop: 20

            }}>
                <span role="img" aria-label="sheep" style={{ fontSize: 200 }}>🐱‍🚀</span>

            </div>
        </Cell>

        <Cell span={[8, 4, 6]}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: "white",
                padding: '.25rem',
                fontSize: 200,
                marginTop: 20

            }}>
                <span role="img" aria-label="cat">🐱‍👤</span>

            </div>
        </Cell>

        <Cell span={[1, 4, 6]}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: "white",
                padding: '.25rem',
                fontSize: 200,
                marginTop: 20
            }}>
                <span role="img" aria-label="cat">🐱‍🏍</span>

            </div>
        </Cell>


        <Cell span={[1, 4, 6]}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: "white",
                padding: '.25rem',
                fontSize: 200,
                marginTop: 20
            }}>
                        <Tags />

            </div>
        </Cell>
    </Grid>


);

