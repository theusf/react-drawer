import * as React from "react";
import { Drawer, SIZE, ANCHOR } from "baseui/drawer";
import { Button } from "baseui/button";
import Menu from 'baseui/icon/menu'
import { StatefulMenu } from "baseui/menu";


export default () => {
    const [isOpen, setIsOpen] = React.useState(true);
    return (
        <>
            <Button onClick={() => setIsOpen(true)} style={{ marginLeft: '200px' }}> <Menu size={32} /></Button>

            <Drawer
                isOpen={isOpen}
                autoFocus
                size={SIZE.auto}
                anchor={ANCHOR.left}
                onClose={() => setIsOpen(false)
                }
            >
                <div>

                    <StatefulMenu
                        items={[
                            { label: "Item One" },
                            { label: "Item Two" },
                            { label: "Item Three" },
                            { label: "Item Four" }
                        ]}
                    />

                </div>
            </Drawer>
        </>
    );
}